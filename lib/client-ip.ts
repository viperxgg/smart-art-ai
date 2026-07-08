import "server-only";

/**
 * Best-effort client IP for rate-limiting / abuse controls.
 *
 * Security: we deliberately do NOT trust the left-most `x-forwarded-for`
 * entry — a client can prepend that header to rotate around per-IP limits.
 * On Vercel the platform sets `x-real-ip` to the true client IP and overwrites
 * any client-supplied value, so it is trusted. We only fall back to the
 * right-most `x-forwarded-for` hop (appended by the trusted edge) when
 * `x-real-ip` is missing. Returns null when no trustworthy source is present.
 */
export function getTrustedClientIp(request: Request): string | null {
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) {
    return realIp;
  }

  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const hops = forwarded
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);
    // Trust the right-most hop (added by the platform), not the client-controlled left-most.
    const trusted = hops[hops.length - 1];
    if (trusted) {
      return trusted;
    }
  }

  return null;
}
