import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  Subject?: string;
  Name?: string;
  Email?: string;
  Phone?: string;
  Organization?: string;
  Service?: string;
  Product?: string;
  Locale?: string;
  SourcePage?: string;
  CTAContext?: string;
  Message?: string;
  Restaurant?: string;
  Plan?: string;
};

const DESTINATION_EMAIL = process.env.DESTINATION_EMAIL || "hello@smartartai.se";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(value?: string) {
  return Boolean(value && EMAIL_PATTERN.test(value));
}

function pickFirstValue(source: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    const value = source[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return undefined;
}

function normalizePayload(raw: unknown): ContactPayload {
  const source = typeof raw === "object" && raw !== null ? (raw as Record<string, unknown>) : {};

  const organization = pickFirstValue(source, [
    "Organization",
    "organization",
    "Company",
    "company",
    "Företag",
    "företag",
    "Restaurant",
    "restaurant",
  ]);

  const service = pickFirstValue(source, [
    "Service",
    "service",
    "Product",
    "product",
    "Tjänst",
    "tjänst",
    "Tjanst",
    "tjanst",
    "Plan",
    "plan",
  ]);

  return {
    Subject: pickFirstValue(source, ["Subject", "subject"]),
    Name: pickFirstValue(source, ["Name", "name", "Namn", "namn", "fullName", "FullName"]),
    Email: pickFirstValue(source, ["Email", "email", "Epost", "epost", "E-post", "e-post", "E-postadress", "e-postadress"]),
    Phone: pickFirstValue(source, ["Phone", "phone", "Telefon", "telefon"]),
    Organization: organization,
    Service: service,
    Product: pickFirstValue(source, ["Product", "product"]),
    Locale: pickFirstValue(source, ["Locale", "locale"]),
    SourcePage: pickFirstValue(source, ["SourcePage", "sourcePage"]),
    CTAContext: pickFirstValue(source, ["CTAContext", "ctaContext"]),
    Message: pickFirstValue(source, ["Message", "message", "Meddelande", "meddelande"]),
    Restaurant: pickFirstValue(source, ["Restaurant", "restaurant"]),
    Plan: pickFirstValue(source, ["Plan", "plan"]),
  };
}

function renderField(label: string, value?: string) {
  if (!value) {
    return "";
  }

  const safeLabel = escapeHtml(label);
  const safeValue = escapeHtml(value);

  return `
    <tr style="border-bottom:1px solid #eee;">
      <td style="padding:10px 0;font-weight:bold;width:32%;font-family:sans-serif;color:#333;">${safeLabel}</td>
      <td style="padding:10px 0;font-family:sans-serif;color:#555;">${safeValue}</td>
    </tr>
  `;
}

function buildInternalEmail(payload: ContactPayload) {
  return `
    <h2 style="color:#111;font-family:sans-serif;">New Inquiry - Smart Art AI</h2>
    <p style="font-family:sans-serif;color:#555;">Submitted: ${new Date().toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" })}</p>
    <table style="width:100%;border-collapse:collapse;margin-top:16px;">
      ${renderField("Service", payload.Service || payload.Product)}
      ${renderField("Name", payload.Name)}
      ${renderField("Organization", payload.Organization || payload.Restaurant)}
      ${renderField("Plan", payload.Plan)}
      ${renderField("Email", payload.Email)}
      ${renderField("Phone", payload.Phone)}
      ${renderField("Locale", payload.Locale)}
      ${renderField("SourcePage", payload.SourcePage)}
      ${renderField("CTAContext", payload.CTAContext)}
      ${renderField("Message", payload.Message)}
    </table>
    <hr style="margin-top:20px;border:none;border-top:1px solid #eee;">
    <p style="font-family:sans-serif;font-size:12px;color:#999;">Sent from smartartai.se</p>
  `;
}

function buildCustomerReply(payload: ContactPayload) {
  const isSwedish = payload.Locale !== "en";
  const name = escapeHtml(payload.Name || (isSwedish ? "där" : "there"));
  const product = escapeHtml(payload.Service || payload.Product || "Smart Art AI");

  return {
    subject: isSwedish
      ? `Tack för din förfrågan om ${product}`
      : `Thanks for your request about ${product}`,
    html: `
      <div style="font-family:sans-serif;line-height:1.7;color:#333;max-width:620px;margin:0 auto;border:1px solid #eee;padding:24px;border-radius:14px;">
        <h2 style="color:#111;margin-top:0;">${isSwedish ? `Hej ${name}!` : `Hi ${name}!`}</h2>
        <p>
          ${
            isSwedish
              ? `Tack för att du hörde av dig om <strong>${product}</strong>. Vi går igenom dina uppgifter nu och återkommer vanligtvis inom 24 timmar med nästa steg eller en demo.`
              : `Thanks for reaching out about <strong>${product}</strong>. We are reviewing your details now and usually reply within 24 hours with the next step or a demo walkthrough.`
          }
        </p>
        <p>
          ${
            isSwedish
              ? "Om du vill svara med fler detaljer om meny, restaurangtyp eller driftupplägg går det bra att svara direkt på detta mejl."
              : "If you want to add more detail about your menu, venue type, or service flow, you can reply directly to this email."
          }
        </p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;">
        <p style="font-size:12px;color:#888;">Smart Art AI<br><a href=\"https://smartartai.se\">smartartai.se</a></p>
      </div>
    `,
  };
}

export async function POST(request: Request) {
  try {
    const payload = normalizePayload(await request.json());

    if (!payload.Name) {
      return NextResponse.json({ success: false, error: "Name is required." }, { status: 400 });
    }

    if (!isValidEmail(payload.Email)) {
      return NextResponse.json({ success: false, error: "A valid email is required." }, { status: 400 });
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = payload.Subject || "New request - Smart Art AI";

    await transporter.sendMail({
      from: `"Smart Art AI" <${process.env.SMTP_USER}>`,
      to: DESTINATION_EMAIL,
      subject,
      html: buildInternalEmail(payload),
      replyTo: payload.Email,
    });

    const reply = buildCustomerReply(payload);
    await transporter.sendMail({
      from: `"Smart Art AI" <${process.env.SMTP_USER}>`,
      to: payload.Email,
      subject: reply.subject,
      html: reply.html,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email error", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }
}
