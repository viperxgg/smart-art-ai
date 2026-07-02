import { NextResponse } from "next/server";

import { rateLimit } from "@/lib/rate-limit";
import {
  createSupabaseServerClient,
  isSupabaseServerConfigured,
  type Json,
} from "@/lib/supabaseServer";

export const runtime = "nodejs";

const rateLimitConfig = { limit: 5, windowMs: 60 * 60 * 1000 };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function sanitizeEmail(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().toLowerCase().slice(0, 254);
}

function sanitizeShortText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function sanitizeSlugList(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim().slice(0, 120))
    .filter(Boolean)
    .slice(0, 20);
}

function sanitizeContext(value: unknown): Json {
  if (!value || typeof value !== "object") {
    return {};
  }

  const data = value as Record<string, unknown>;
  const context: Record<string, Json> = {};
  const productSlugs = sanitizeSlugList(data.productSlugs);
  const wishlistSlugs = sanitizeSlugList(data.wishlistSlugs);
  const focusSlug = sanitizeShortText(data.focusSlug, 120);
  const focusTitle = sanitizeShortText(data.focusTitle, 180);

  if (productSlugs.length) {
    context.productSlugs = productSlugs;
  }
  if (wishlistSlugs.length) {
    context.wishlistSlugs = wishlistSlugs;
  }
  if (focusSlug) {
    context.focusSlug = focusSlug;
  }
  if (focusTitle) {
    context.focusTitle = focusTitle;
  }

  return context;
}

export async function POST(request: Request) {
  const clientIp = getClientIp(request);
  const limit = rateLimit(`elin-subscribe:${clientIp}`, rateLimitConfig);
  if (!limit.ok) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil(limit.retryAfterMs / 1000)) },
      },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const data = payload as Record<string, unknown>;
  const email = sanitizeEmail(data.email);
  const consentText = sanitizeShortText(data.consentText, 1200);
  const source = sanitizeShortText(data.source, 80) || "elin-chat";

  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  if (data.consent !== true || consentText.length < 20) {
    return NextResponse.json({ ok: false, error: "missing_consent" }, { status: 400 });
  }

  if (!isSupabaseServerConfigured()) {
    return NextResponse.json(
      { ok: false, error: "storage_not_configured" },
      { status: 500 },
    );
  }

  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from("elin_subscribers").insert({
    email,
    source,
    context: sanitizeContext(data.context),
    consent_text: consentText,
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ ok: true });
    }

    console.error("Elin subscriber insert failed", {
      code: error.code,
      message: error.message,
    });
    return NextResponse.json({ ok: false, error: "insert_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
