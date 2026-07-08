# Security Audit — smartartai.se (Elins val)

**Date:** 2026-07-09
**Scope:** Static application security review of the Next.js codebase (`Desktop/amazon progect/smartart`), server/config, API routes, Supabase data layer, and client rendering.
**Standards:** OWASP Top 10:2025, OWASP ASVS 5.0, OWASP WSTG.
**Method:** Non-destructive source-code + configuration review. No live/production payload testing was performed (to avoid cost/abuse on the paid AI endpoint and impact on real users). Fixes applied on branch `security-hardening-2026-07`.

> **الخلاصة (عربي):** الموقع مبنيّ بوعي أمني عالٍ — لا ثغرة حرجة قابلة للاستغلال المباشر. الملاحظات في معظمها **تصليب وإعدادات**. طُبِّقت الإصلاحات الآمنة على فرع منفصل واختُبِرت (typecheck + build + فحص ترويسات حيّ). يتبقّى بند واحد يحتاج قرارك (حماية تكلفة شات Elin) وبنود إعدادات تحتاج تحقّقك على Vercel.

---

## 1. Overall posture

The application is well-architected from a security standpoint. Verified strengths:

- **Secrets hygiene** — all secrets are server-side only; no `NEXT_PUBLIC_*` secret leaks; `.env*` is git-ignored and not tracked.
- **Supabase data layer** — RLS enabled on every table (`product_reviews`, `elin_subscribers`, `elin_logs`); `revoke all from anon, authenticated`; all access is server-side via the service-role key; the public `approved_product_reviews` view excludes email and uses `security_invoker`. No client-side (anon) Supabase access exists.
- **Input handling** — strong validation/sanitization on every API route (length caps, type guards, allow-lists); AI product recommendations are filtered to a known-slug allow-list.
- **Prompt-injection defenses** — the Elin system prompt explicitly refuses role/rule overrides from user or product data; tool output is constrained.
- **XSS-safe rendering** — React auto-escaping throughout; the chat markdown renderer builds React nodes (no raw HTML) and allow-lists link hrefs (`/` or `https://` only, else `#`).
- **Email** — Nodemailer uses `text` (not HTML) bodies and `replyTo` (not attacker-controlled `from`); contact/review forms have honeypot + Cloudflare Turnstile + GDPR consent.
- **Moderation** — user reviews are stored `pending` and require manual approval before display.
- **Error handling** — generic client-facing error messages; no stack traces leaked.

---

## 2. Findings

| # | Severity | Title | OWASP | Status |
|---|----------|-------|-------|--------|
| 1 | Medium→High | Rate limiting bypassable via `X-Forwarded-For` spoofing; Elin AI endpoint has no bot/CAPTCHA gate → AI-spend abuse | A04/A05 | ✅ Fixed (Turnstile human-check + 5-question/24h quota + IP hardening) |
| 2 | Medium | No HTTP security headers (CSP, HSTS, X-Frame-Options, …) | A05 | ✅ Fixed |
| 3 | Medium | Turnstile "fail-open" when `TURNSTILE_SECRET_KEY` is unset | A05 | Action required (verify prod env) |
| 4 | Low | JSON-LD sink not escaped (`JsonLd.tsx`) | A03 | ✅ Fixed |
| 5 | Low | `elin_variant` cookie missing `Secure`/`HttpOnly` | A05 | ✅ Fixed |
| 6 | Info | Stale unused secret `OPENAI_API_KEY` in `.env` | A05 | Action required (remove/rotate) |
| 7 | Info | `/elin-insights` auth = static token, non-constant-time compare | A07 | Recommendation |

---

### Finding 1 — Rate-limit bypass + unprotected paid AI endpoint (Medium→High)

**Where:** `app/api/elin/route.ts`, `app/api/inquiry/route.ts`, `app/api/reviews/route.ts`, `app/api/elin/subscribe/route.ts`; `lib/rate-limit.ts`.

**Issue:**
1. All routes derived the client IP from the **left-most** `X-Forwarded-For` value, which is client-controlled. An attacker can prepend a rotating `X-Forwarded-For` header to reset the per-IP counter and bypass every rate limit.
2. The limiter is in-memory per warm serverless instance (documented in `rate-limit.ts`), so it resets on cold start and does not enforce a global cap.
3. `POST /api/elin` calls the Anthropic API (real cost — up to ~3 model calls per request) and is gated **only** by this (bypassable) IP limit — **no CAPTCHA**. Result: an attacker can drive unbounded AI spend (denial-of-wallet) and abuse the SMTP/DB endpoints.

**Safe PoC (conceptual, not executed):** repeat `POST /api/elin` with `messages:[{role:"user",content:"hi"}]` while rotating `X-Forwarded-For: 10.0.0.<random>` → each request lands in a fresh bucket → the 20/min cap never triggers.

**Fix applied:** introduced `lib/client-ip.ts#getTrustedClientIp()`, which prefers the platform-set `x-real-ip` (which Vercel overwrites and the client cannot forge) and otherwise trusts only the **right-most** `X-Forwarded-For` hop. All four routes now use it. This removes the trivial per-IP bypass.

**Fix applied (abuse gate):**
- `POST /api/elin` now requires a **Cloudflare Turnstile** human-check once per 24h window (invisible/interaction-only widget in the chat). Fail-open only when `TURNSTILE_SECRET_KEY` is unconfigured (the quota still caps cost).
- A **per-visitor quota** caps usage at **5 questions per rolling 24h window**, tracked in a signed (HMAC-SHA256) `elin_session` cookie (`Secure; HttpOnly; SameSite=Lax`, `Max-Age=86400`). The cookie also carries an `images` counter reserved for a future image-upload feature (limit 2, currently inert — the chat is text-only today). Tampering only self-resets (no privilege gain); an invalid signature starts a fresh window and forces re-verification.
- New files/logic: `lib/elin-session.ts`, `verifyTurnstile()` + quota gate in `app/api/elin/route.ts`, Turnstile widget + token in `components/elin/ElinChat.tsx`.

**Still recommended (optional):**
- Move quota/rate-limit state to a shared store (Vercel KV / Upstash Redis) for a hard cross-instance/cross-browser cap (the cookie is per-browser; the in-memory IP limit is per-instance).
- Set a hard monthly spend limit + billing alert on the Anthropic key (operational).
- Set `ELIN_QUOTA_SECRET` (strong random) and `TURNSTILE_SECRET_KEY` in Vercel production.

---

### Finding 2 — Missing HTTP security headers (Medium) — ✅ Fixed

**Where:** `next.config.ts` (previously no `headers()`).

**Issue:** no Content-Security-Policy, Strict-Transport-Security, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, or Permissions-Policy were sent. Impact: clickjacking (site framable), no HSTS on the browser side, MIME sniffing, referrer leakage. A CSP also provides defense-in-depth against any future XSS.

**Fix applied:** added an `async headers()` block applying to all routes:
- `Content-Security-Policy` — `default-src 'self'`; `object-src 'none'`; `base-uri 'self'`; `frame-ancestors 'self'`; `form-action 'self'`; images `'self' data: blob:`; styles/scripts `'unsafe-inline'` (pragmatic baseline — no user HTML reaches the DOM); Cloudflare Turnstile origin allow-listed for `script-src`/`frame-src`/`connect-src`; `'unsafe-eval'`/`ws:` added **only** in dev for HMR.
- `Strict-Transport-Security: max-age=63072000; includeSubDomains` (no `preload` yet — see note).
- `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()`, `X-DNS-Prefetch-Control: on`.

**Verified:** `tsc --noEmit` ✓, `next build` ✓, and runtime `curl -I` confirms all headers on `/` and product pages. **Recommended final check:** load a Vercel Preview deploy and confirm no CSP violations in the browser console (also exercises real Turnstile keys). Hardening target: move `script-src` to nonces instead of `'unsafe-inline'`.

> **Note on HSTS `preload`:** omitted deliberately — adding `preload` is hard to reverse. Add it once you're confident all subdomains are HTTPS-only.

---

### Finding 3 — Turnstile fails open when unconfigured (Medium) — Action required

**Where:** `verifyTurnstile()` in `app/api/inquiry/route.ts` and `app/api/reviews/route.ts`.

**Issue:** `verifyTurnstile` returns `true` when `TURNSTILE_SECRET_KEY` is not set. If that env var is missing/misconfigured in production, **all CAPTCHA protection silently disappears** and the contact/review forms fall back to only the (previously bypassable) IP limit — enabling spam and (for the contact form) SMTP backscatter to arbitrary victim emails, harming sender reputation.

**Action required (you):**
1. Confirm `TURNSTILE_SECRET_KEY` **is set** in the Vercel production environment.
2. Consider fail-closed in production (reject if `NODE_ENV === 'production'` and no secret).
3. Set a dedicated `IP_HASH_SALT` / `REVIEW_IP_HASH_SALT`; stop falling back to `SUPABASE_SERVICE_ROLE_KEY` as a hash salt (`lib/reviews/reviews.ts`) — don't reuse a high-value secret across purposes.

---

### Finding 4 — JSON-LD injection sink not escaped (Low) — ✅ Fixed

**Where:** `components/JsonLd.tsx`.

**Issue:** `dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}` did not escape `<`, `>`, `&`, or U+2028/U+2029. Today only editorial data flows in (low real-world risk), but a stray `</script>` in any editorial verdict would break out of the script element, and it would become stored-XSS if user content is ever wired into structured data.

**Fix applied:** `serializeJsonLd()` now escapes `<`→`<`, `>`→`>`, `&`→`&`, and the U+2028/U+2029 line separators before injection.

**Verified:** `tsc` ✓, `build` ✓; no raw separators in the file.

---

### Finding 5 — Cookie missing security flags (Low) — ✅ Fixed

**Where:** `app/api/elin/route.ts` Set-Cookie for `elin_variant`.

**Issue:** the A/B variant cookie was set with `SameSite=Lax` but no `Secure`/`HttpOnly`. Low sensitivity (non-secret bucket), but it should not travel over HTTP and is never read by client JS.

**Fix applied:** added `; Secure; HttpOnly`.

---

### Finding 6 — Stale unused secret in `.env` (Info) — Action required

**Where:** `.env` contains `OPENAI_API_KEY`, but the project uses the Anthropic SDK only.

**Action required (you):** if unused, remove it; if it was ever committed/shared anywhere, rotate it. `.env` is git-ignored (good) but the key still sits on disk and possibly in Vercel.

---

### Finding 7 — Admin auth hardening (Info) — Recommendation

**Where:** `app/(admin)/elin-insights/page.tsx`.

**Notes:** the page is correctly fail-closed (`notFound()` when `ELIN_INSIGHTS_TOKEN` is unset) and `noindex`. It exposes aggregated user questions (free-text may contain PII). The token is compared with `===` (not constant-time). Recommendations: use `crypto.timingSafeEqual`; ensure `ELIN_INSIGHTS_TOKEN` is long and random; consider Vercel deployment protection or an IP allow-list; apply the same guard to the sibling `(admin)/social-planner` route when it's built.

---

## 3. Fixes applied (branch `security-hardening-2026-07`)

| File | Change |
|------|--------|
| `next.config.ts` | Added `headers()` with CSP + HSTS + X-Frame-Options + nosniff + Referrer-Policy + Permissions-Policy |
| `components/JsonLd.tsx` | Escape `<`,`>`,`&`,U+2028/9 before JSON-LD injection |
| `lib/client-ip.ts` (new) | Trusted client-IP helper (prefers `x-real-ip`, ignores spoofable left-most XFF) |
| `app/api/elin/route.ts` | Use trusted IP; `Secure; HttpOnly` variant cookie; Turnstile human-check + 5/24h quota gate; multi `Set-Cookie` |
| `app/api/elin/subscribe/route.ts` | Use trusted IP |
| `app/api/inquiry/route.ts` | Use trusted IP |
| `app/api/reviews/route.ts` | Use trusted IP |
| `lib/elin-session.ts` (new) | Signed 24h session cookie: 5-question quota + Turnstile-verified flag (+ reserved images counter) |
| `components/elin/ElinChat.tsx` | Turnstile widget + token in requests; reset after send; quota/verify messages |

## 4. Re-test results

- `npx tsc --noEmit` → **pass** (exit 0).
- `npm run build` (production) → **pass** (all routes compiled; middleware intact).
- Runtime `curl -I` on `/` and `/skonhet/hartork` → **all 7 security headers present and correct**.
- Elin abuse-gate (runtime, **no AI spend**): missing Turnstile token → **403 `needVerification`**; signed cookie at 5 questions → **429 `quotaReached`**; tampered cookie signature → **rejected** (fresh session, not honored as maxed). All ✅.
- Recommended remaining check: in-browser CSP + Turnstile smoke-test on a Vercel Preview deploy.

## 5. Remaining risks / action items

1. **[you] Set env in Vercel prod:** `TURNSTILE_SECRET_KEY` (activates the chat human-check + form CAPTCHA) and `ELIN_QUOTA_SECRET` (strong random — signs the quota cookie). Add an Anthropic monthly budget cap. *Planned:* subscription tiers (99 SEK / 249 SEK) after security is confirmed stable — the 249 tier is the natural home for the reserved image quota.
2. **[you] Verify** `TURNSTILE_SECRET_KEY` is set in Vercel prod; add a dedicated `IP_HASH_SALT` (Finding 3).
3. **[you] Remove/rotate** `OPENAI_API_KEY` if unused (Finding 6).
4. **[optional]** Constant-time admin-token compare + deployment protection (Finding 7).
5. **[optional]** Move CSP `script-src` to nonces; add HSTS `preload` when ready (Finding 2).
6. Run `npm audit` periodically for dependency (supply-chain) issues.
