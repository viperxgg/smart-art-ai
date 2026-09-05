import { createHash } from "crypto";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

import { getTrustedClientIp } from "@/lib/client-ip";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

type InquiryData = {
  name: string;
  email: string;
  message: string;
};

type ValidationResult =
  | { ok: true; data: InquiryData; bot?: false }
  | { ok: true; bot: true }
  | { ok: false; message: string };

const rateLimitWindowMs = 60 * 60 * 1000;
const maxSubmissionsPerWindow = 5;
const submissionAttempts = new Map<string, number[]>();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function hashIpAddress(ipAddress: string | null) {
  if (!ipAddress) {
    return "unknown";
  }

  const salt = process.env.IP_HASH_SALT?.trim();
  if (!salt && process.env.NODE_ENV === "production") {
    throw new Error("IP_HASH_SALT is required in production");
  }

  return createHash("sha256")
    .update(`${salt || "smartartai-inquiry-dev"}:${ipAddress}`)
    .digest("hex");
}

function isRateLimited(ipHash: string) {
  const now = Date.now();
  const recentAttempts = (submissionAttempts.get(ipHash) ?? []).filter(
    (timestamp) => now - timestamp < rateLimitWindowMs,
  );

  if (recentAttempts.length >= maxSubmissionsPerWindow) {
    submissionAttempts.set(ipHash, recentAttempts);
    return true;
  }

  recentAttempts.push(now);
  submissionAttempts.set(ipHash, recentAttempts);
  return false;
}

function readString(payload: Record<string, unknown>, key: string) {
  const value = payload[key];
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload: unknown): ValidationResult {
  if (!payload || typeof payload !== "object") {
    return { ok: false, message: "Ogiltig förfrågan." };
  }

  const data = payload as Record<string, unknown>;
  const honeypot = readString(data, "honeypot") || readString(data, "company");

  if (honeypot) {
    return { ok: true, bot: true };
  }

  const name = readString(data, "name");
  const email = readString(data, "email");
  const message = readString(data, "message");

  if (name.length < 2 || name.length > 80) {
    return { ok: false, message: "Skriv ett giltigt namn." };
  }

  if (!emailPattern.test(email) || email.length > 254) {
    return { ok: false, message: "Skriv en giltig e-postadress." };
  }

  if (message.length < 10 || message.length > 3000) {
    return { ok: false, message: "Skriv ett tydligare meddelande." };
  }

  if (data.gdprConsent !== true) {
    return {
      ok: false,
      message: "Du behöver godkänna att vi använder uppgifterna för att svara.",
    };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      message,
    },
  };
}

async function verifyTurnstile(token: unknown, ipAddress: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return process.env.NODE_ENV !== "production";
  }

  if (typeof token !== "string" || !token) {
    return false;
  }

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);
  if (ipAddress) {
    formData.append("remoteip", ipAddress);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    },
  );

  if (!response.ok) {
    return false;
  }

  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

async function sendInquiryEmails(data: InquiryData) {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM ?? smtpUser;
  const destinationEmail = process.env.DESTINATION_EMAIL ?? siteConfig.email;
  const smtpPort = Number(process.env.SMTP_PORT ?? "465");

  if (!smtpUser || !smtpPass || !smtpFrom) {
    throw new Error("SMTP is not configured");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.hostinger.com",
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: smtpFrom,
    to: destinationEmail,
    replyTo: data.email,
    subject: `Samarbete-förfrågan från ${data.name}`,
    text: [
      "Ny samarbete-förfrågan från smartartai.se",
      "",
      `Namn: ${data.name}`,
      `E-post: ${data.email}`,
      "",
      "Meddelande:",
      data.message,
    ].join("\n"),
  });

  await transporter.sendMail({
    from: smtpFrom,
    to: data.email,
    subject: "Vi har tagit emot ditt meddelande | Elins val",
    text:
      "Tack för att du hört av dig! Det här är en automatisk bekräftelse på att vi tagit emot ditt meddelande. Vi återkommer via e-post så snart vi kan. – Elins val, smartartai.se",
  });
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Ogiltig förfrågan." },
      { status: 400 },
    );
  }

  const validation = validatePayload(payload);

  if (validation.ok && validation.bot) {
    return NextResponse.json({ ok: true });
  }

  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, message: validation.message },
      { status: 400 },
    );
  }

  const securityConfigured = Boolean(
    process.env.TURNSTILE_SECRET_KEY?.trim() &&
      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() &&
      process.env.IP_HASH_SALT?.trim(),
  );
  if (process.env.NODE_ENV === "production" && !securityConfigured) {
    return NextResponse.json(
      {
        ok: false,
        message: "Formuläret är tillfälligt otillgängligt. Försök igen senare.",
      },
      { status: 503 },
    );
  }

  const ipAddress = getTrustedClientIp(request);
  const ipHash = hashIpAddress(ipAddress);

  if (isRateLimited(ipHash)) {
    return NextResponse.json(
      { ok: false, message: "För många försök just nu. Prova igen senare." },
      { status: 429 },
    );
  }

  const turnstileOk = await verifyTurnstile(
    (payload as Record<string, unknown>).turnstileToken,
    ipAddress,
  );

  if (!turnstileOk) {
    return NextResponse.json(
      { ok: false, message: "Verifieringen misslyckades. Försök igen." },
      { status: 400 },
    );
  }

  try {
    await sendInquiryEmails(validation.data);

    return NextResponse.json({
      ok: true,
      message:
        "Tack! Vi har tagit emot ditt meddelande och återkommer via e-post så snart vi kan.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Meddelandet kunde inte skickas just nu. Försök igen lite senare.",
      },
      { status: 500 },
    );
  }
}
