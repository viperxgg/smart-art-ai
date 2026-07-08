import "server-only";

import { createHmac, timingSafeEqual } from "crypto";

// Per-visitor Elin session, carried in a signed (HMAC) cookie. It caps how much
// of the paid AI a single visitor can use inside a rolling 24h window and
// remembers whether they've passed the Turnstile human-check for that window.
//
// The signature only prevents casual tampering — the worst a forger can do is
// reset *their own* counter (equivalent to clearing the cookie), so no
// privilege is gained. Set ELIN_QUOTA_SECRET in production for a strong key;
// the fallback keeps dev working.

const COOKIE_NAME = "elin_session";
export const WINDOW_MS = 24 * 60 * 60 * 1000; // 24h
export const MAX_QUESTIONS = 5;
export const MAX_IMAGES = 2; // reserved for a future image-upload feature

export type ElinSession = {
  windowStart: number;
  questions: number;
  images: number;
  verified: boolean;
};

function getSecret() {
  return process.env.ELIN_QUOTA_SECRET || "smartartai-elin-session-fallback";
}

function sign(payloadB64: string) {
  return createHmac("sha256", getSecret()).update(payloadB64).digest("base64url");
}

function safeEqual(a: string, b: string) {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) {
    return false;
  }
  return timingSafeEqual(aBuf, bBuf);
}

function encodeSession(session: ElinSession): string {
  const payload = Buffer.from(JSON.stringify(session)).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

function decodeSession(value: string | null): ElinSession | null {
  if (!value) {
    return null;
  }

  const dot = value.lastIndexOf(".");
  if (dot <= 0) {
    return null;
  }

  const payload = value.slice(0, dot);
  const mac = value.slice(dot + 1);
  if (!safeEqual(mac, sign(payload))) {
    return null;
  }

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!parsed || typeof parsed !== "object") {
      return null;
    }

    const data = parsed as Record<string, unknown>;
    const windowStart = Number(data.windowStart);
    const questions = Number(data.questions);
    const images = Number(data.images);

    if (
      !Number.isFinite(windowStart) ||
      !Number.isFinite(questions) ||
      !Number.isFinite(images)
    ) {
      return null;
    }

    return {
      windowStart,
      questions: Math.max(0, Math.floor(questions)),
      images: Math.max(0, Math.floor(images)),
      verified: data.verified === true,
    };
  } catch {
    return null;
  }
}

function readCookie(cookieHeader: string | null, name: string) {
  if (!cookieHeader) {
    return null;
  }

  const prefix = `${name}=`;
  return (
    cookieHeader
      .split(";")
      .map((part) => part.trim())
      .find((part) => part.startsWith(prefix))
      ?.slice(prefix.length) ?? null
  );
}

/**
 * Reads the visitor's session from the request cookies, starting a fresh 24h
 * window when the cookie is missing, tampered, or expired.
 */
export function readSessionFromCookies(
  cookieHeader: string | null,
  now: number,
): ElinSession {
  const decoded = decodeSession(readCookie(cookieHeader, COOKIE_NAME));
  if (!decoded || now - decoded.windowStart >= WINDOW_MS) {
    return { windowStart: now, questions: 0, images: 0, verified: false };
  }
  return decoded;
}

/** Builds a hardened Set-Cookie string for the (updated) session. */
export function buildSessionCookie(session: ElinSession): string {
  const maxAge = Math.ceil(WINDOW_MS / 1000);
  return `${COOKIE_NAME}=${encodeSession(session)}; Path=/; Max-Age=${maxAge}; SameSite=Lax; Secure; HttpOnly`;
}
