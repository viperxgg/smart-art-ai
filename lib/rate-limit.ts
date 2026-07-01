// Best-effort in-memory rate limiter.
//
// On serverless (Vercel) this is per-instance and resets on cold start, so it
// throttles bursts per warm instance rather than enforcing a strict global cap.
// For a hard cross-instance limit, swap `store` for Vercel KV / Upstash Redis
// keyed the same way.

type Bucket = number[];

const store = new Map<string, Bucket>();
const MAX_KEYS = 5000;

export type RateLimitResult = {
  ok: boolean;
  remaining: number;
  retryAfterMs: number;
};

export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): RateLimitResult {
  const now = Date.now();
  const cutoff = now - windowMs;
  const hits = (store.get(key) ?? []).filter((timestamp) => timestamp > cutoff);

  if (hits.length >= limit) {
    store.set(key, hits);
    const retryAfterMs = Math.max(0, (hits[0] ?? now) + windowMs - now);
    return { ok: false, remaining: 0, retryAfterMs };
  }

  hits.push(now);
  store.set(key, hits);

  // Opportunistic cleanup so the map can't grow unbounded.
  if (store.size > MAX_KEYS) {
    for (const [entryKey, timestamps] of store) {
      const fresh = timestamps.filter((timestamp) => timestamp > cutoff);
      if (fresh.length === 0) {
        store.delete(entryKey);
      } else {
        store.set(entryKey, fresh);
      }
    }
  }

  return { ok: true, remaining: limit - hits.length, retryAfterMs: 0 };
}
