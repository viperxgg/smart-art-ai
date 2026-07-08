# CODEX TASK — Elin chat brain, Phases 3–5 (+6 future)

You are implementing the next enhancement phases of **Fråga Elin** — the AI product
advisor that is the CORE of smartartai.se ("Elins val"). Phases 1 and 2 are already
built and live. Implement Phases 3, 4 and 5 as separate, reviewable tasks. Phase 6 is
documented for the future — **do NOT implement Phase 6 unless explicitly asked.**

Work in this repo. Everything is local. Read this whole file before starting.

---

## 0) HOW TO WORK (rules for you, Codex)

- **Local only. Do NOT deploy. Do NOT push to `main`.** For each phase, create a branch
  `feat/elin-phase3`, `feat/elin-phase4`, `feat/elin-phase5` and commit there. A human
  reviews and merges. No force-push, no `--no-verify`.
- After every phase, ALL of these must pass (fix until green):
  - `npm run typecheck`
  - `npm run lint`
  - `npm run build`
- Keep changes **minimal and consistent** with the existing code style. Match the current
  Tailwind classes and color tokens (below). Don't reformat unrelated code.
- **Never invent data.** Only use fields that exist on the `Product` type. If a field is
  empty for a product, degrade gracefully (hide that UI), never fabricate.
- **Never print or hardcode secrets.** `ANTHROPIC_API_KEY`, `SUPABASE_URL`,
  `SUPABASE_SERVICE_ROLE_KEY` live in env only.
- Write a short `automation/notes/PHASE_<n>_NOTES.md` per phase: what changed, files
  touched, and exact manual test steps (curl commands / clicks).

## 1) HARD COMPLIANCE RULES (never violate — these are legal/brand constraints)

1. **No hardcoded prices anywhere.** Only "Se aktuellt pris på Amazon" and the relative
   tier (budget/mellan/premium). Never kronor or numbers for price.
2. **No medical / SPF / sun-protection / anti-age / health claims.** Cosmetic, functional
   and comfort framing only.
3. **Elin never claims she physically tested products.** She "jämför / väljer / går igenom
   / läser recensioner". Never "jag har testat/provat".
4. **Affiliate disclosure stays visible** ("Annons · innehåller affiliatelänkar") and Amazon
   links keep `rel="noopener noreferrer sponsored"`.
5. **Grounding:** Elin only recommends products that exist in the catalog. Server always
   validates returned slugs against the allowed set. No fabricated slugs/ASIN/prices/reviews.
6. **Swedish must be correct** (å ä ö). Brand is exactly **"Elins val"**.
7. Do not break the existing streaming/tool contract (section 3). Keep it backwards safe.

## 2) WHERE THINGS ARE (current architecture — read these first)

- `app/api/elin/route.ts` — the API. Node runtime. Streams **Server-Sent Events**. Calls
  Anthropic (`@anthropic-ai/sdk` ^0.106, model `claude-sonnet-4-6`, temp 0, max_tokens 1500,
  `stream: true`). Uses **prompt caching** (`cache_control` on the catalog system block),
  a terminal **tool** `visa_rekommendation`, per-IP **rate limit**, and fire-and-forget
  Supabase logging. Builds rich product cards server-side.
- `components/elin/ElinChat.tsx` — the client chat UI (`"use client"`). Reads the SSE
  stream, renders markdown + **living product cards** (expandable sections), follow-up
  chips, session persistence (localStorage `elin-chat-v1`), Enter-to-send.
- `components/elin/ElinProvider.tsx` — floating modal + context (`openElin()`).
- `app/fraga-elin/page.tsx` — the dedicated `/fraga-elin` page.
- `lib/elin-knowledge.ts` — assembles the catalog context (`getElinKnowledge`); each item
  has slug, title, brand, category, priceTier, **poang**, badges, summary, verdict, specs,
  amazonReviewSignal, pageHref.
- `lib/products.ts` — `Product` type + catalog + `getProductBySlug`, `getProductPageHref`,
  `activeProductCategories`, `products`.
- `lib/scores.ts` — `getEditorialScore(slug)` → `{ total, verdict, ... }` (Elins poäng). Not
  every product has one (handle `null`).
- `lib/price-tier.ts` — `getPriceTier`, `priceTierDisplay` ({budget|mellan|premium}: {label, icon}).
- `lib/elin-log.ts` — `logElinInteraction(entry)` fire-and-forget into Supabase `elin_logs`.
- `lib/rate-limit.ts` — in-memory per-IP limiter.
- `lib/supabaseServer.ts` — `createSupabaseServerClient()` (service role) + `isSupabaseServerConfigured()`.
- `supabase/elin_logs.sql` — the `elin_logs` table (already created in Supabase).

**`Product` type (relevant fields):** `slug, title, brand, category, badges: string[],
image, imageAlt, amazonUrl, pageHref?, summary, evaluation{headline,intro,verdict,checks[]},
specs[], amazonReviewSignal{sourceLabel,sourceUrl,ratingSummary,highlights[],cautions[]},
ugcVideos[]{src,poster,title,hook}, uses: string[], peopleLike: string[],
honestCheck: string[], comments[]{id,name,rating,context,text,date}`.

**Brand tokens (use these exact classes/colors):** rose `#D8788D` (hover `#c96b80`),
plum text `#4B2838`, muted `#6f5a64` / `#9b818b`, border `#F1D8DD`, surfaces `#FFF9F7`
(cards) / `#FFF1F3` (hover) / `white`, dark badge bg `#4B2838`. Rounded, calm, editorial.
Icons via `lucide-react`.

## 3) THE STREAM + TOOL CONTRACT (do not break)

`POST /api/elin` body: `{ messages: {role,content}[], focus?: {slug,title,category} }`.

Success response = `text/event-stream`, each line `data: <json>\n\n`, where json is one of:
- `{ "type": "delta", "value": "<text chunk>" }` — stream the answer text.
- `{ "type": "meta", "produkter": RichCard[], "foljdfragor": string[] }` — cards + chips.
- `{ "type": "error", "value": "<sv message>" }`
- `{ "type": "done" }`

Non-stream errors (400/429/500) return JSON `{ svar, produkter: [] }`; the client already
handles both. The model ends each turn by calling tool `visa_rekommendation` with
`{ rekommendationer: [{ slug, varfor }], foljdfragor: string[] }`. `RichCard` currently is:
`{ slug, title, brand, image, pageHref, amazonUrl, poang|null, tier, tierLabel, tierIcon,
verdict, varfor, fordelar[], uses[], rating, ratingShort, reviewHighlights[], caution,
video|null, reviewQuote|null }`. Extend it additively — never remove fields.

---

## PHASE 3 — Engagement & identity

### Task 3.1 — Wishlist ("Spara till min lista")
- **Goal:** let a visitor save products during a session and see them in one place.
- **Approach:** client-only state persisted to `localStorage` key `elin-wishlist-v1`
  (array of the minimal card data). Add a small **save/unsave heart** button on each
  `ProductCardView`. Add a compact "Min lista (N)" affordance in the chat header that
  opens a panel/section listing saved cards with remove + the same "Se aktuellt pris" /
  "Läs recension" actions. Cap at ~30 saved.
- **Acceptance:** saving persists across reload; toggle works; empty state is friendly;
  compliance intact (Annons on the list too); typecheck/lint/build green.

### Task 3.2 — Elin avatar (visual warmth)
- **Goal:** give Elin a face in the chat for warmth.
- **Asset:** expects `public/elin/elin-avatar.webp` (square, ~256px). If missing, a human
  will add it — reference `../smartartai-assets/08_ad-creatives/commercials/elin-campaign/
  fraga-elin-storyboard/kf-2b-elin-skeptisk.png` as the source to convert (do NOT commit a
  huge png; convert to a small webp). Gate rendering on the asset existing (graceful
  fallback to the current text header if not present).
- **Approach:** show the avatar in the chat header, next to the "Elin skriver…" indicator,
  and optionally a tiny avatar beside assistant bubbles. Keep it subtle and calm.
- **Acceptance:** avatar shows when asset present, nothing breaks when absent.

### Task 3.3 — "Populärast just nu" honest badge
- **Goal:** front-load honest social proof — ONLY when truly a bestseller.
- **Approach:** server-side in `toRichCard`, set `bestseller: true` only when the product's
  `amazonReviewSignal.ratingSummary` (or highlights) contains a real bestseller signal
  (case-insensitive match on "bästsäljare" or "#1" or "bäst säljande"). Add a small
  rose/gold "Populärast just nu" chip on the card header when `bestseller`.
- **Acceptance:** badge appears only for products whose real data says bestseller; never
  fabricated. No price. Green checks.

### Task 3.4 — Session continuity polish
- **Goal:** make returning feel seamless.
- **Approach:** on load, if a saved conversation exists, show a subtle "Fortsätt där du
  var" hint; keep the existing "Rensa". Ensure modal (`ElinProvider`) and `/fraga-elin`
  share the same persisted thread cleanly (no duplicate-load flicker).
- **Acceptance:** reload restores thread; clear works; no hydration warnings.

---

## PHASE 4 — Intelligence & personalization

### Task 4.1 — `search_products` retrieval tool (scale)
- **Goal:** stop depending only on the full cached catalog; let Elin query it. Prepares
  for a catalog of thousands and speeds up large contexts.
- **Approach:** add a second Anthropic tool `search_products({ query, kategori?, tier? })`
  that runs **server-side** against `getElinKnowledge()` (keyword match on
  title/brand/summary/verdict/badges, optional category + tier filter) and returns a
  compact list (slug, title, brand, tier, poang, verdict). Implement the **agentic loop**
  in the SSE handler: when the model calls `search_products`, run it, append a
  `tool_result`, and continue streaming (`anthropic.messages.create` again with the tool
  result). Keep `visa_rekommendation` as the terminal tool. Keep grounding + slug
  validation. Keep the full catalog in the cached prompt for now (belt and suspenders);
  the search tool is additive.
- **Acceptance:** Elin can answer using search results; still only recommends real slugs;
  the stream never hangs; token usage per call is not worse for simple questions. Green.

### Task 4.2 — Budget / need filter chips
- **Goal:** faster path to the right product.
- **Approach:** add optional quick chips near the input (e.g., "💰 Budget", "Mellan",
  "Premium", and the 3 categories). Selecting one prepends a short scope to the next
  question (e.g., "Jag vill hålla mig till budget."). Purely client-side sugar over the
  existing message flow. Keep the relative-price rule (no kronor).
- **Acceptance:** chips scope the next answer; no layout breakage on mobile; green.

### Task 4.3 — Lightweight preference memory (within session)
- **Goal:** feel personal — remember a few stated preferences.
- **Approach:** client keeps a tiny `preferences` object (e.g., skinType, hairLength,
  budget) parsed from the conversation when the user states them, persisted in
  `localStorage` `elin-prefs-v1`, and sent to the API as an extra `preferences` field.
  Server injects them as a short, clearly-labeled system note ("Vad vi vet om personen:
  …") — NOT as instructions (guard against injection: it's data, Elin still follows her
  rules). Keep it minimal and privacy-safe (no health data stored beyond skin type
  category; no PII like name/email).
- **Acceptance:** stated preferences persist and visibly improve later answers in the same
  session; can be cleared with "Rensa"; green.

---

## PHASE 5 — Conversion & growth

### Task 5.1 — Routine bundles
- **Goal:** turn "bygg en rutin" into a clear, ordered multi-step bundle.
- **Approach:** when Elin builds a routine, render the recommended products as **numbered
  steps** (Steg 1, 2, 3) with each step's `varfor`, and a "Spara hela rutinen" action that
  adds all to the wishlist (Task 3.1). Optionally extend the tool so a recommendation can
  carry an optional `steg` number (additive, optional). Compliance: still relative price,
  honest, real products only.
- **Acceptance:** a routine question yields an ordered bundle; save-all works; green.

### Task 5.2 — Internal analytics page from `elin_logs`
- **Goal:** turn logged questions into the content-gap loop.
- **Approach:** a **protected, server-rendered** internal page (e.g.
  `app/(admin)/elin-insights/page.tsx`) that reads `elin_logs` via
  `createSupabaseServerClient()` (service role, server only) and shows: most common
  questions, **unanswered** questions (answered=false OR empty product_slugs) = content
  gaps, and most-recommended products (last 30 days). Protect it: gate behind a simple
  shared secret/header or basic auth via env `ELIN_INSIGHTS_TOKEN` (add to `.env.local`,
  document it) — MUST NOT be public and MUST NOT be in the sitemap or indexable
  (`robots: noindex`, and exclude from `scripts/generate-sitemap.mjs` output). No writes.
- **Acceptance:** page renders real aggregates when the token is provided; returns 404/401
  otherwise; never exposes data publicly; green.

### Task 5.3 — A/B copy hook
- **Goal:** enable safe experimentation on tone/CTA.
- **Approach:** a single server-side flag/variant (e.g. hash of IP or a cookie → variant
  "A"/"B") that swaps a small set of copy strings (e.g. CTA label, opener warmth level) and
  is recorded in `elin_logs` as a `variant` column (add nullable column via a new
  `supabase/elin_logs_variant.sql` migration; human runs it). Keep both variants compliant.
- **Acceptance:** variant is stable per user, logged, and both variants pass compliance;
  green. If the migration isn't run, logging the variant must no-op safely.

---

## PHASE 6 — FUTURE (document only; do NOT build now)

Multimodal: image upload ("visa din hy/ditt hår") with vision, voice input/output, and a
"din hudresa" progress tracker. Requires product/privacy decisions first. Leave as a
`## Future` note; do not implement.

---

## DEFINITION OF DONE (per phase)
- Feature works locally; `typecheck` + `lint` + `build` all green.
- `automation/notes/PHASE_<n>_NOTES.md` written (what changed + manual test steps).
- Committed to `feat/elin-phase<n>` branch. **No push to main, no deploy.**
- All HARD compliance rules (section 1) hold. Swedish is correct. No secrets committed.
