# CLAUDE-TASK: SEO Sprint 2026-07-08 — Striking-Distance + Internal Links + Aftersun Investigation

**Repo:** `C:\Users\azzam\Desktop\amazon progect\smartart` (work on `main`; it is clean and in sync with origin).
**Executor:** Claude Code. Execute the phases IN ORDER. Create one task per phase (task tool), mark in_progress/completed as you go. Commit per phase, push once at the end after all verification passes.

## Context (why this sprint)

GSC data (read 2026-07-08 by Azzam):
- 7 days: 1,120 impressions / 17 clicks / CTR 1.5% / **avg position 28.9** (= page 3; many pages are in "striking distance" of page 1–2).
- Guide `/guider/tyst-flakt-sovrum` impressions **+675%** (fan season peaking NOW).
- `/skonhet/aftersun-eller-aloe-vera` (historically the top-clicked page) impressions **−59%** — needs investigation.
- Queries with impressions but ~0 clicks (striking distance): `varmluftsborste bäst i test` (~20 impr), `hårolja med värmeskydd` (~19 impr), `torrschampo ljust hår` (8 impr/1 click), `packkuber kompression` (6 impr, new), `honeywell ht900e` (3 impr/1 click).
- 6 brand-new travel URLs were submitted for indexing on 2026-07-08 and currently have ZERO internal links pointing TO them from older pages:
  - `/sommar/resa/kabinvaska-eller-ryggsack`
  - `/sommar/resa/mikrofiberhandduk-eller-frottehandduk`
  - `/sommar/resa/strandfilt-eller-strandhandduk`
  - `/sommar/resa/kabinvaska`
  - `/sommar/resa/resryggsack`
  - `/sommar/resa/frottehandduk`

## HARD RULES (compliance + safety — read before any edit)

1. **Never** hardcode prices (`\d+ kr`), never write `jag har testat / provat / använde själv` (Elin curates, never claims first-hand testing), no medical claims, no `SPF`/sun-protection claims, and the word **`solskydd` is banned** by the lint — rephrase (e.g. "sköt din vanliga dagrutin").
2. All copy in Swedish, Elin's honest/bold voice. No fake urgency, no invented review quotes, no invented rating numbers — only reuse numbers already present in the repo.
3. **Do not restructure hubs**: `lib/varmluftsborste.ts` and `lib/flakt.ts` render hardwired hubs — copy-level edits only. Do NOT add a Dyson product or Dyson affiliate link anywhere (deliberate brand decision).
4. Do not rename routes, do not delete pages, do not touch `app/sitemap.ts` (auto-generated on prebuild; if git shows it modified with only line-ending noise, `git checkout -- app/sitemap.ts`).
5. Internal-link edits: **max 2–4 added links per page**, only where genuinely relevant to the reader. Use existing patterns (`relatedLinks` arrays / `RelatedLinks` component), never inject raw `<a>` into prose.
6. Keyword optimization = natural phrasing in title/meta/H1/intro/FAQ. **No keyword stuffing.** If a page already targets the query well (several do), make at most a light touch or skip — record "already optimal" in the report.
7. After EVERY phase: `npx tsc --noEmit` must exit 0. Before the final push: `npm run build` must succeed.

---

## PHASE 1 — Striking-distance sprint (5 query→page targets)

For each target: (a) audit current title/meta/H1/intro/FAQ against the query, (b) apply the minimal high-impact edit, (c) add the listed inbound internal links. Record before→after in the report.

### 1A. `varmluftsborste bäst i test` → `/skonhet/varmluftsborste`
- File: `app/skonhet/varmluftsborste/page.tsx` (title already "Varmluftsborste bäst i test 2026 | Elins val" — likely already optimal; verify H1 + first paragraph phrase the query naturally, and that FAQ in `lib/varmluftsborste.ts` answers "vilken varmluftsborste är bäst i test?" — add ONE such FAQ item if missing).
- Add inbound links (where a related-links list exists): from `/skonhet/hartork` hub page, from `lib/varmluftsborste-eller-fon.ts` relatedLinks (if not present), and from `lib/heatless-lockar-eller-locktang.ts` relatedLinks. Text pattern: `{ href: "/skonhet/varmluftsborste", label: "Varmluftsborste", text: "Elins varmluftsborste bäst i test 2026." }`.

### 1B. `hårolja med värmeskydd` → `/skonhet/harolja-eller-varmeskydd`
- File: `app/skonhet/harolja-eller-varmeskydd/page.tsx` — title is "Hårolja med värmeskydd? Så väljer du | Elins val" (good). Verify the intro contains the literal phrase "hårolja med värmeskydd" once, naturally. Check FAQ answers "Finns det hårolja med värmeskydd?" — add if missing (answer honestly: some oils give light heat protection, a dedicated värmeskydd protects better; link both product pages).
- Add inbound links: from `lib/leave-in-eller-harolja.ts` relatedLinks and from `lib/harinpackning-eller-harolja.ts` relatedLinks (if that file exists — check; skip silently if not).

### 1C. `torrschampo ljust hår` → the Moroccanoil torrschampo product page
- Data lives in `lib/sommar.ts` (search `moroccanoil-torrschampo`; metaTitle already "Moroccanoil torrschampo Light för ljust hår | Elins val" — good). Verify the pick's `valueStatement`/`faqItems` mention "ljust hår"/"blont hår" naturally; add ONE FAQ ("Fungerar torrschampo på ljust hår utan vita rester?") if missing.
- Add inbound link from the `/skonhet` category page ONLY if it has an editorial links list (do not force; skip if the category page is purely auto-generated).

### 1D. `packkuber kompression` → `/sommar/resa/packkuber-eller-kompressionspasar`
- Already ranking as a new page — do NOT touch its title. Only strengthen inbound links (Phase 2 covers this page's outbound links too):
  - In `lib/sommar.ts`, add to the **kabinväska pick** (`cabin-max-anode-kabinvaska`) relatedLinks: `{ href: "/sommar/resa/packkuber-eller-kompressionspasar", label: "Packning", text: "Packkuber eller kompressionspåsar – packa väskan smart." }` (replace one existing link if already at 3; keep max 3–4).
  - Same link from the **resryggsäck pick** (`taygeer-kabinryggsack`).

### 1E. `honeywell ht900e` → `/halsa/flakt/honeywell-turboforce`
- Verify the page/product title includes "HT900E" (it does: "Honeywell TurboForce HT900E bordsfläkt"). Light touch only if the model number is missing from metaTitle.
- Add inbound links: in `app/guider/tyst-flakt-sovrum/page.tsx` (the +675% guide) add ONE link each to `/halsa/flakt/honeywell-turboforce` AND `/halsa/dreo-cruiser-pro-eller-honeywell-ht900e` in its related-links section (it currently links only midea/dreo/flakt-dyr-vs-billig). Also add the dreo-eller-honeywell comparison link to `lib/tornflakt-eller-bordsflakt.ts` relatedLinks if not present.

**Phase 1 commit:** `feat(seo): striking-distance pass — titles/FAQ/internal links for 5 GSC queries`

---

## PHASE 2 — Internal links → the 6 new travel URLs

Goal: every new URL gets ≥2 inbound internal links from OLDER indexed pages (link equity + crawl discovery). The new pages already link among themselves — this phase is about links FROM existing pages.

Edit these (all follow existing array patterns — match surrounding code style exactly):

1. `lib/packkuber-eller-kompressionspasar.ts` → in `packkuberEllerKompressionspasarRelatedLinks`, REPLACE the generic `/sommar/resa` hub entry with `{ href: "/sommar/resa/kabinvaska-eller-ryggsack", label: "Väskval", text: "Kabinväska eller ryggsäck – vilken passar din resa?" }` (keep total ≤4).
2. `lib/hangande-necessar-eller-genomskinlig-necessar.ts` relatedLinks → add the kabinvaska-eller-ryggsack link (same object as above).
3. In `lib/sommar.ts`:
   - `fit-flip-mikrofiberhandduk` pick relatedLinks → ensure it links to `/sommar/resa/mikrofiberhandduk-eller-frottehandduk` AND `/sommar/resa/frottehandduk` (it predates them).
   - `anortrek-sandfri-strandfilt` pick relatedLinks → ensure a link to `/sommar/resa/strandfilt-eller-strandhandduk`.
   - `lifewit-kylvaska-ryggsack` pick relatedLinks → add `/sommar/resa/kabinvaska-eller-ryggsack` ("Reser du? Kabinväska eller ryggsäck – Elins jämförelse.").
   - Travel-electronics picks (`anker-zolo-powerbank` or `anker-735-vaggladdare`) → add ONE link to `/sommar/resa/kabinvaska` ("Packa smart – Elins kabinväske-val.").
4. `lib/luftkylare-eller-flakt.ts` or `lib/tornflakt-eller-bordsflakt.ts` — NO travel links here (irrelevant cluster; do nothing). Listed only so you don't "helpfully" add them.
5. Verify AFTER edits: `grep -rn "kabinvaska-eller-ryggsack\|mikrofiberhandduk-eller-frottehandduk\|strandfilt-eller-strandhandduk" lib/ --include="*.ts" | grep -v "lib/kabinvaska-eller\|lib/mikrofiberhandduk-eller\|lib/strandfilt-eller\|sitemap"` → each comparison should appear in ≥2 OTHER lib files.

**Phase 2 commit:** `feat(seo): internal links from indexed pages to the 6 new travel URLs`

---

## PHASE 3 — Investigate `/skonhet/aftersun-eller-aloe-vera` (−59% impressions)

Investigation only + safe fixes. You CANNOT access GSC — do what is possible on-repo:

1. Integrity: page builds (`npm run build` output contains the route), title/meta/H1 unchanged vs git history (`git log --oneline -- app/skonhet/aftersun-eller-aloe-vera lib/aftersun-eller-aloe-vera.ts` + `git diff HEAD~20 -- <those paths>` if commits touched them). Look for accidental edits from recent batch commits.
2. Cannibalization scan: `grep -rln "after sun\|aftersun" app/ lib/ --include="*.ts*"` — list every page mentioning aftersun; check none of the NEW pages targets the same query in title/H1 (the new strandfilt/frotté pages should NOT — verify).
3. Freshness + strengthening (safe regardless of root cause):
   - If the page has a dated rating stamp (`ratingCheckedAt` / "vid vår kontroll"), bump to "juli 2026" ONLY if the underlying number is still what the page claims (do not invent a new number; if unverifiable, leave the date).
   - Add ONE inbound link from `lib/strandfilt-eller-strandhandduk.ts` relatedLinks: `{ href: "/skonhet/aftersun-eller-aloe-vera", label: "Efter solen", text: "After sun eller aloe vera – lugna huden efter stranddagen." }`.
   - Check the sommar hub (`/sommar` sources) links to the aftersun comparison; add if missing and a links list exists.
4. Write findings to the report: most likely explanations ranked (seasonality vs SERP change vs on-site regression), with evidence. If you find a real regression (e.g. title got mangled by a batch edit), FIX it and flag it prominently.

**Phase 3 commit:** `fix(seo): aftersun page investigation — findings + inbound link + freshness`

---

## PHASE 4 — Verify, ship, report

1. `npx tsc --noEmit` → must exit 0.
2. `npm run build` → must succeed; confirm no route disappeared (compare route count vs before).
3. Compliance sweep over YOUR diff only: `git diff origin/main -- lib/ app/ | grep -inE "\b[0-9]+[ .]?kr\b|jag har testat|jag provade|solskydd|SPF"` → must return nothing.
4. `git checkout -- app/sitemap.ts` if it shows only line-ending noise. Push: `git push origin main`.
5. Final report (print in chat AND save as `automation/REPORT-seo-sprint-2026-07-08.md`):
   - Table: file → what changed → which query/URL it serves.
   - Aftersun findings section.
   - **"Request indexing" list**: every URL whose content changed (Azzam will paste these into GSC URL Inspection).
   - Anything skipped as "already optimal" with one-line justification.

## Success criteria
- All 5 striking-distance targets audited; every edit natural Swedish, zero lint-banned terms.
- All 6 new travel URLs have ≥2 inbound internal links from older pages.
- Aftersun has a written diagnosis + at least one safe improvement shipped.
- tsc + build green; pushed to origin/main; report saved.
