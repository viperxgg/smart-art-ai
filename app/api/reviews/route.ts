import { NextResponse } from "next/server";

import { getTrustedClientIp } from "@/lib/client-ip";
import {
  countRecentSubmissionsByIp,
  hashIpAddress,
  submitProductReview,
  validateReviewSubmission,
} from "@/lib/reviews/reviews";

export const runtime = "nodejs";

async function verifyTurnstile(token: unknown, ipAddress: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return true;
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

  const ipAddress = getTrustedClientIp(request);
  const ipHash = hashIpAddress(ipAddress);
  const data =
    payload && typeof payload === "object"
      ? { ...(payload as Record<string, unknown>), ipHash }
      : payload;

  const validation = validateReviewSubmission(data);
  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, message: validation.message },
      { status: 400 },
    );
  }

  const turnstileOk = await verifyTurnstile(
    (data as Record<string, unknown>).turnstileToken,
    ipAddress,
  );

  if (!turnstileOk) {
    return NextResponse.json(
      { ok: false, message: "Verifieringen misslyckades. Försök igen." },
      { status: 400 },
    );
  }

  try {
    const recentSubmissionCount = await countRecentSubmissionsByIp(ipHash);
    if (recentSubmissionCount >= 5) {
      return NextResponse.json(
        {
          ok: false,
          message: "För många försök just nu. Prova igen senare.",
        },
        { status: 429 },
      );
    }

    await submitProductReview(validation.data);

    return NextResponse.json({
      ok: true,
      message:
        "Tack! Din recension är mottagen och publiceras först efter manuell granskning.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Recensionen kunde inte skickas just nu. Försök igen lite senare.",
      },
      { status: 500 },
    );
  }
}
