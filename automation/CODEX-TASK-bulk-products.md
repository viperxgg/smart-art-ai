# CODEX TASK — Bulk product research & queue scaffolding (LOCAL ONLY)

> Paste this whole file to Codex as the task. Codex works only inside this repo,
> locally. **No deploy, no `git push`, no live web/Amazon scraping.**

## 0. Context
Repo = smartartai.se — a Next.js (app-router) Swedish Amazon-affiliate review site.
Brand: **"Elins val"**. Core: Elin, an *honest* AI product advisor (compares, reads
reviews, picks — never claims she tested anything). You are extending the catalog.

## 1. Goal
Produce a ranked shortlist of **up to 100 NEW candidate products** that (a) fit our
niche/categories and (b) have real keyword demand, **deduped** against existing
products — then scaffold ready-to-fill `add-product` spec files for the approved ones.
Do this **without inventing** affiliate links, ASINs, prices, review data, or demand
numbers, and **without scraping Amazon**.

## 2. HARD RULES (compliance — never violate)
1. **No hardcoded prices.** `product.price` must be exactly `"Se aktuellt pris på Amazon"`.
   (The add-product script lints and rejects price strings like `"599 kr"`.)
2. **No SPF / sun-protection, medical, or anti-age claims.** No fabricated first-hand
   testing ("jag testade/använde själv"). Elin only *jämför / väljer / läser recensioner*.
3. **Do NOT auto-crawl or scrape Amazon** search/listing/product pages. You may only use
   ASINs, affiliate URLs, and image URLs that a human **provides in the spec**. Unknown
   value → leave a clearly-marked `TODO_` placeholder. **Never fabricate** one.
4. **Do NOT generate affiliate links.** They are human-made `amzn.to` short links
   (Amazon SiteStripe). Leave `amazonUrl` = `"TODO_AFFILIATE_URL"`.
5. **Do not invent search volumes.** Use only real data in
   `../smartartai-assets/06_keyword-research/*.json`. No data for a category →
   mark demand `"UNKNOWN (no keyword export)"`.
6. **Swedish must be correct** (å ä ö). Brand is exactly `"Elins val"`.
7. **Local only:** no `git commit`/`push`, no deploy, no network writes.

## 3. Inputs (read, do not modify in Phase A)
- `lib/products.ts` — `Product` type + every existing product (the dedupe source;
  `getProductBySlug`; the `products = [...]` array).
- `lib/categoryGroups.ts` — `category → categoryGroup → productSlugs` taxonomy (the niche).
- `lib/sommar.ts` — `SommarPick` type (needed in Phase B).
- `automation/queue/_TEMPLATE.json` — the EXACT spec shape `add-product.mjs` consumes.
- `automation/add-product.mjs` — the generator. Study how it reads a spec; do not edit it.
- `../smartartai-assets/06_keyword-research/traning_kw.json` — real DataForSEO data
  (sv, location 2752): `keyword`, `search_volume`, `competition`, `competition_index`,
  `cpc`, `monthly_searches`.

Categories (from `categoryGroups.ts`):
- **skonhet**: Hårstyling, Hårvård, Sol & glow, Hudvård, Hårborttagning, Fötter, Naglar, Makeup, Fransar & bryn
- **traning**: Kondition, Styrka, Yoga & flexibilitet, Rehab & massage, Övrig träning
- **halsa**: (health)

## 4. PHASE A — Research & shortlist (deterministic, NO network)
1. Build the existing-product index: every existing `slug`, `asin`, `brand`, `title`
   from `lib/products.ts`. This is the dedupe set.
2. From the keyword data, derive product-level candidates:
   - Normalize keywords into buyable product concepts (e.g. `kettlebell`, `justerbara hantlar`).
   - Keep only **commercial/product-intent** keywords (a physical thing buyable on Amazon.se).
     Drop pure informational queries.
   - Map each to our taxonomy (`category` + a real `categoryGroup`). No fit → `nicheFit: "NO"` and exclude.
   - Score: `composite = f(search_volume, commercial_intent, competition_penalty, niche_fit)`.
     **Document the exact formula** in the report.
3. Exclude anything an existing product already covers (slug/brand/title similarity).
   Mark borderline ones `dedupeStatus: "overlap"`.
4. Output up to 100 ranked candidates to:
   - `automation/research/shortlist.json`
   - `automation/research/shortlist.csv`
   Columns: `proposedSlug, proposedTitle, brand, category, categoryGroup, targetKeyword,
   searchVolume, competition, cpc, compositeScore, nicheFit, dedupeStatus, notes`.
5. Write `automation/research/REPORT.md`: methodology, scoring formula, **top 10 per
   category**, a **GAPS** section (e.g. *"skönhet & hälsa have NO keyword export — demand
   UNKNOWN; provide `skonhet_kw.json` / `halsa_kw.json` to rank them"*), and a
   **"did NOT do"** list (no scraping, no links, no prices, no invented data).

**STOP after Phase A.** Present `shortlist.json` + `REPORT.md`. Do not start Phase B
until a human says which rows are approved.

## 5. PHASE B — Spec scaffolding (local, only for approved rows)
For each approved candidate, create `automation/queue/{slug}.json` by copying
`_TEMPLATE.json` and filling everything you can legitimately infer:
- `exportName`, `category`, `categoryGroup`, `route` (e.g. `"skonhet/{slug}"`),
  `pageComponentName`, `system`, `priceTier` (best guess — flag it), `targetKeyword`,
  `metaTitle`, `metaDescription` (Swedish, compliant, Elin voice).
- `product.price` = `"Se aktuellt pris på Amazon"` (literal).
- Elin-style `summary` / `evaluation` / `verdict` drafts — honest, comparative,
  **no testing claims, no prices, no banned claims**.
- Leave as explicit placeholders (DO NOT fabricate):
  - `product.asin` → `"TODO_ASIN"`
  - `product.amazonUrl` and all pick links → `"TODO_AFFILIATE_URL"`
  - `images.dir` = `{slug}`; `images.files[].src` → `"TODO_IMAGE_URL_n"` with `out`
    names (`{short}-thumbnail.webp`, `{short}-1.webp`, …)
  - `amazonReviewSignal` ratings/quotes → `"TODO_REVIEW_DATA"` (never invent ratings/counts)
- Validate each JSON parses and matches `_TEMPLATE.json` keys.

**Do NOT run `add-product.mjs` in Phase B.** Just prepare the queue and list the files.

## 6. PHASE C — Apply (only on explicit human go, one batch at a time)
After the human fills the `TODO_` fields (ASIN, affiliate URL, image URLs) in a spec:
```
node automation/add-product.mjs automation/queue/{slug}.json --dry-run   # review lint
node automation/add-product.mjs automation/queue/{slug}.json             # wire it in
npm run typecheck
```
Never use `--force` unless told. **Do NOT `git commit`/`push`, do NOT deploy.**

## 7. Definition of done (Phase A)
- `shortlist.json` + `shortlist.csv`: ≤100 deduped, niche-mapped, demand-ranked candidates.
- `REPORT.md`: methodology + scoring formula + per-category top picks + GAPS + "did not do".
- Zero changes to `lib/*`, `app/*`, `public/*`. No network. No fabricated data.
