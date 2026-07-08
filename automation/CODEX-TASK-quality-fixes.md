# CODEX TASK — Quality Fixes Batch (post-review 2026-07-01)

You are working in the canonical repo: `C:\Users\azzam\Desktop\amazon progect\smartart` (Next.js App Router, deployed on Vercel).

## Ground rules (apply to every task)

1. **Never commit or push.** Work in the tree, show diffs per task, wait for approval.
2. **Never fabricate data.** No invented Amazon ratings, review counts, quotes, prices, ASINs or affiliate links. Editorial text (uses, honest checks, verdicts) is allowed — review quotes are NOT unless real ones are provided.
3. **Compliance stays intact everywhere:** "Annons" disclosure visible, affiliate links `rel="sponsored nofollow noopener noreferrer"`, no hardcoded prices (always "Se aktuellt pris på Amazon"), cosmetic-only claims for skönhet (no medical/SPF/anti-age), function/comfort only for träning/hälsa, never "jag har testat" (only "jag har gått igenom/jämfört").
4. **No URL changes.** Every existing route must keep its exact path. No redirects needed, none created.
5. **Swedish text:** correct å/ä/ö. After editing any file with Swedish strings, grep the changed files for the mojibake lead byte `Ã` and fix any double-encoding before reporting done.
6. After each task: `npm run lint` and `npm run build` must pass. Include the result in the task report.
7. Work the tasks **in order** (T1 → T6). Report after each task with: files changed, diff summary, verification output, and anything you chose to defer.

---

## T1 — Generalize the "Sommar" product template (fixes 143 pages)

**Problem:** 143 product pages render through `app/skonhet/_components/SommarProductReviewPage.tsx`, which hardcodes:
- Breadcrumb item `{ name: "Sommar", href: "/sommar" }` (line ~85) — also emitted into BreadcrumbList JSON-LD, so Google is told a heating pad (`/halsa/varmedyna`), a weighted blanket (`/halsa/tyngdtacke`) etc. live under a summer campaign.
- Back link "Tillbaka till sommar-glow" → `/sommar` (line ~108–114) on every product, including clearly non-summer products.

**Do:**
1. Create `app/(products)/_components/ProductReviewPage.tsx` (or another sensible shared location outside `skonhet/`) as the generalized template. It renders exactly what `SommarProductReviewPage` renders today EXCEPT:
   - Breadcrumbs become `Hem > {Category label} > {Product title}` (category from `pick.product.category`, labels/hrefs already exist in the current file). No "Sommar" crumb. BreadcrumbList JSON-LD must match the visible breadcrumbs exactly.
   - Back link becomes "Tillbaka till {Category label}" pointing to the category hub (`/skonhet`, `/traning`, `/halsa`).
2. Convert `SommarProductReviewPage` into a thin wrapper that just re-exports/renders the new generic component (so the 143 `page.tsx` imports keep working without touching all of them), OR update all imports mechanically — your choice; prefer the lower-risk option and say which you picked.
3. The `/sommar` hub page itself is untouched and keeps linking to its summer picks.
4. Do NOT rename `lib/sommar.ts` / `SommarPick` types in this task (data layer refactor is out of scope; presentation only).

**Accept when:** no product page shows "Tillbaka till sommar-glow" or a Sommar breadcrumb; BreadcrumbList schema on a spot-check of 3 pages (`/halsa/varmedyna`, `/skonhet/bakuchiol-serum`, `/traning/gymboll`) matches the visible trail; build passes.

---

## T2 — Editorial scores for ALL products + a real score spread

**Problem:** `lib/scores.ts` has only 39 entries for 170 products, so ~131 products show no "Elins poäng" (site + Elin chat cards get `poang: null`). Worse, every existing total sits in 69–88: zero "Utmärkt" (90+), zero "Rekommenderas inte" (<60). The brand promise is "den enda som säger åt dig att INTE köpa" — the data must show we actually score honestly across the full range.

**Do:**
1. Add an `editorialScores` entry for every product in `lib/products.ts` that lacks one. Use the existing rubric and weights (`value` /30, `performance` /30, `promise` /25, `proven` /15; total = sum).
2. **Ground every score in the product's own recorded data** — its `amazonReviewSignal` (ratingSummary strength, number/severity of `cautions`), spec completeness, brand tier (`lib/price-tier.ts`), and summary claims. Products with weak rating summaries, serious cautions (wrong items delivered, durability complaints), or thin/vague value propositions must score visibly lower. Do not force a bell curve, but do NOT compress everything into 75–88 either. Expect the honest outcome to include:
   - a handful of genuine standouts at 88–93,
   - a real middle,
   - a meaningful tail of 60–74 ("Helt okej"),
   - and wherever the recorded signals genuinely justify it, totals below 60 ("Rekommenderas inte"). If after honest scoring nothing lands below 60, say so explicitly in the report and list the 5 lowest with reasoning instead — do not invent negatives.
3. Every entry gets a one-line Swedish `verdict` consistent with the score tier (a 62 must not read like praise; a sub-60 verdict should honestly say to skip it or pick the better alternative and, where an obvious in-catalog alternative exists, name it).
4. In the task report, include a distribution table (how many per tier) and the 10 lowest-scored products with a one-line justification each.

**Accept when:** every product slug has a score; distribution table shows a real spread; verdict language matches tiers; build passes.

---

## T3 — Date-stamp the frozen Amazon rating claims

**Problem:** ~170 hardcoded strings like "Amazon visar 4,6 av 5 från 847 omdömen." will silently go stale, which is both a trust and an EU-accuracy problem.

**Do:**
1. Add an optional field `ratingCheckedAt?: string` (e.g. `"juni 2026"`) to the `AmazonReviewSignal` type in `lib/products.ts`.
2. In every component that displays `ratingSummary` (product pages, `TrustReviewLayers`, Elin rich cards in `app/api/elin/route.ts` → `toRichCard`, comparison pages — grep for `ratingSummary` usages), render the summary with a suffix "(vid vår kontroll {ratingCheckedAt})" when the field is set, and fall back to "(vid vår senaste kontroll)" when it is not.
3. Do NOT hand-edit 170 product entries. Instead set a module-level default in the display layer: if `ratingCheckedAt` is missing, use a single constant `DEFAULT_RATING_CHECKED_AT = "juni 2026"` defined once (e.g. in `lib/site.ts`), so future batches can override per product via the automation JSON.
4. Update `automation/add-product.mjs` (and its queue JSON schema/example if one is documented) so new products can carry `ratingCheckedAt`.

**Accept when:** a spot-check of a product page, a comparison page and an Elin chat card all show the dated form; build passes.

---

## T4 — Enrich the 20 highest-priority thin products

**Problem:** the ~99 bulk products (2026-06-26/27 batches) shipped with `checks: []`, `uses: []`, `peopleLike: []`, `honestCheck: []` — thin content at exactly the scale Google's helpful-content systems punish.

**Do:**
1. Build the thin list: products where `uses`, `honestCheck` AND `evaluation.checks` are all empty.
2. Pick the top 20 by search priority: prefer products whose `pick.targetKeyword` matches high-volume Swedish head terms (use `automation/research/shortlist.json` / the keyword exports under `smartartai-assets/06_keyword-research/` if present; otherwise use obvious head-term judgement: eltandborste, robotdammsugare, tyngdtacke, luftrenare, ipl-harborttagning, olaplex-*, vitamin-c-serum, hyaluronsyra-serum, niacinamide-serum, fuktkram, luftfuktare, justerbara-hantlar, pull-up-bar, studsmatta, knaskydd …). List your chosen 20 in the report BEFORE writing content.
3. For each of the 20, fill **editorial** fields only:
   - `evaluation.checks`: the standard 3 checks ("Problemet den löser" / "Varför Elin fastnade" / "Det vi inte vill överdriva") in the established honest-value voice.
   - `uses`: 3–4 concrete everyday usage bullets (consistent with `pick.usageGuidance` where it exists).
   - `honestCheck`: 2–3 honest caveats derived from the product's own `cautions` and category common sense.
   - `peopleLike`: 2–3 bullets **paraphrasing only what `amazonReviewSignal.highlights` already records** — no new review claims.
   - Leave `amazonQuotes`, `comments`, `ugcVideos` EMPTY. Real quotes/UGC come later from the user.
4. Keep each addition consistent with the compliance rules (ground rule 3) and the "prisvärt val" voice: hook → value → ONE honest caveat → verdict feeling.

**Accept when:** 20 products enriched, no fabricated review data, spot-check of 3 pages renders the new sections correctly, build passes.

---

## T5 — Elin chat brain upgrades

**Problem A:** `maxMessages = 6` in `app/api/elin/route.ts` — Elin forgets what the user said a few exchanges ago (skin type, budget) in longer consultations.
**Problem B:** the FULL knowledge JSON for all 170 products is injected into the system prompt on every request. It is prompt-cached, but it grows linearly with the catalog and adds noise.
**Problem C (fixed by T2):** most cards had `poang: null` — after T2, verify scores flow through.

**Do:**
1. Raise `maxMessages` from 6 to 12 (keep the per-message length caps as they are).
2. Slim the injected knowledge to a compact index per product: `slug, title, brand, category, priceTier, poang, badges (max 3), one-line summary (truncate ~140 chars), pageHref`. Drop `specs`, `evaluation.verdict` long text, and `amazonReviewSignal` from the system JSON.
3. Make the `search_products` tool result carry the full detail for its ≤8 hits (add `specs`, full `verdict`, `highlights`, `cautions` to the mapped result objects) so Elin fetches depth on demand. Keep `cache_control` on the system product block.
4. Update the persona text minimally so it matches: Elin knows she has a compact catalog index and should call `search_products` when she needs specs/review details. Do not otherwise rewrite the persona — its honesty rules, medical boundary, injection guard, and format rules stay word-for-word.
5. After T2 lands, confirm every rich card and search result now has a numeric `poang`.
6. Sanity-check the flow locally with 3 test conversations (knowledge question, product question, routine request) and paste the transcripts in the report.

**Accept when:** longer conversations retain early context; system payload is measurably smaller (report approx. before/after JSON size); search returns full detail; cards show scores; build passes.

---

## T6 — Email capture inside the Elin chat (retention foundation)

**Goal:** start owning an audience (price-drop tips / saved routine) instead of renting all traffic from Google.

**Do:**
1. Supabase: write a migration file (do not run it) `supabase/migrations/<timestamp>_elin_subscribers.sql` creating `public.elin_subscribers` (`id uuid pk default gen_random_uuid()`, `email text not null`, `source text` e.g. 'elin-chat', `context jsonb` (e.g. saved product slugs), `consent_text text not null`, `created_at timestamptz default now()`, unique index on lower(email)). RLS ON; no anon read; inserts only via service role from the server.
2. API: `app/api/elin/subscribe/route.ts` — POST, validates email server-side, rate-limited via the existing `lib/rate-limit.ts`, inserts with the service-role client from `lib/supabaseServer.ts`. Never expose the service key client-side.
3. UI: inside `ElinChat`, after Elin has shown at least one recommendation set, offer a small dismissible inline card: "Vill du att jag sparar dina val och tipsar när något blir billigare? Lämna din mejl." Email field + explicit consent checkbox (unchecked by default) with GDPR text: what we store, why, and that they can unsubscribe anytime via mail to the site email. Store the exact consent text with the row. Dismissal is remembered in localStorage (there is existing localStorage handling in `ElinChat.tsx` to follow as a pattern).
4. **Scope limit:** capture + consent + storage only. No email sending, no provider integration yet — note it as a follow-up.
5. Compliance: this is opt-in data collection → check `integritetspolicy` page; add a short section describing this processing (purpose, storage, right to deletion) if it is not covered.

**Accept when:** migration file exists (not run), endpoint validates + rate-limits, UI shows once and respects dismissal, consent text stored, privacy policy updated, build passes.

---

## Final report

When all six tasks are done, produce `automation/REPORT-quality-fixes.md` with per-task status, files changed, the T2 score-distribution table, the T4 product list, the T5 payload before/after sizes, and a short list of anything intentionally deferred (real Amazon quotes for thin products, rating auto-refresh script, email sending provider).
