# Pinterest pin pipeline (Elins val)

One CSV → a batch of schedule-ready Pinterest pins. Reads real product/price/
rating data straight from the site (never a hardcoded price), builds the
UTM-tagged link for GA4 attribution, seeds `public/pins/` with a real
reference photo per pin, and runs a compliance gate before writing anything.

**This script never publishes or schedules anything.** It writes files for a
human to review. Upload/scheduling still needs Zayn/Layla's review and the
CEO's go, per the standing automation rule.

## Files

- `batch-01.csv` — the input. Layla fills this (see contract below).
- `build-pins.mjs` — the engine. Run it, don't edit CSVs by hand-editing JSON.
- `out/` — generated output (gitignored, regenerate any time):
  - `<batch>.pins.json` — **source of truth.** Everything computed, per pin.
  - `<batch>.pinterest-bulk.csv` — bonus export in Pinterest's native
    bulk-upload format. Best-effort — see caveat below.
- `../../public/pins/<pinId>.jpg` — one 1000×1500 placeholder image per pin
  (real product photo, padded to canvas). **Committed to git**, same as
  `public/products/` — Vercel needs to serve these publicly so Pinterest's
  CSV importer can fetch the Media URL.

## The CSV contract (fixed — don't rename/add/remove columns)

| column         | meaning                                                             |
|----------------|----------------------------------------------------------------------|
| `pelare`       | content pillar this pin belongs to                                   |
| `mal_url`      | destination page on smartartai.se (relative `/path` or full https URL — never a raw Amazon link) |
| `rubrik`       | pin title (Swedish, ideally the page's own keyword — no rewrite)    |
| `beskrivning`  | pin description (Swedish, ~200–300 chars recommended)               |
| `alt_text`     | pin alt text (Swedish, accessibility)                                |
| `board`        | destination Pinterest board                                          |
| `produkt_ref`  | a comparison-page slug, a product-page slug, or an ASIN — used to pull the real image/price/rating |

## Run it

```bash
# preview everything, write nothing
node automation/pins/build-pins.mjs --dry-run

# real run: writes out/*.json, out/*.csv, and public/pins/*.jpg
node automation/pins/build-pins.mjs

# a different batch file (future weeks — batch-02.csv etc. just work)
node automation/pins/build-pins.mjs automation/pins/batch-02.csv

# other flags
#   --force               proceed despite compliance errors (use sparingly)
#   --overwrite-images    re-copy placeholders even if a file already exists
#                         (default: leave existing files alone — Remi's
#                         finished art may already be sitting there)
#   --no-images           skip the image step (fast text-only iteration)
```

No npm-script wrapper on purpose — `automation/add-product.mjs` (the
product scaffolder this pipeline mirrors) is run the same direct way.

## What it does, per row

1. **Validates** the row (all 7 columns non-empty, header matches the
   contract exactly).
2. **Resolves `produkt_ref`** against the site's real data, in order:
   1. `automation/comparisons/<ref>.json` (richest — both products, both
      Elins poäng scores, real thumbnail paths).
   2. `automation/queue/<ref>.json` (single product spec).
   3. `lib/products.ts` / `lib/wave-products.ts` — textual scan by `slug`
      or `asin` (covers everything not on disk as a JSON spec; ~250
      products total across both files).
   4. `lib/comparisons.ts` / `lib/wave-content.ts` registries — fallback
      for comparison pages that predate the `automation/comparisons/*.json`
      scaffolding.
   5. `app/guider/<ref>/page.tsx` — the **Guider** pillar has no product
      data of its own (it's prose), so this follows the guide's own
      `cta.links[]` / `relatedLinks[]` hrefs out to the 1–2 product pages
      it actually discusses and resolves those.
   - Unresolved `produkt_ref` is a hard error (blocks the write — the row
     is naming a product/page that doesn't exist yet or has a typo).
3. **Builds the UTM link**: `<mal_url>?utm_source=pinterest&utm_medium=social&utm_campaign=<pelare-slug>-<batchId>&utm_content=<pinId>`.
   `mal_url` is canonicalized to the site's canonical host
   (`https://www.smartartai.se`, from `lib/site.ts`) even if the CSV used
   the bare apex domain, so the link never takes the apex→www redirect hop
   — keeps GA4 attribution clean. A `mal_url` pointing straight at
   `amazon.*`/`amzn.to` is a hard error: pins link to smartartai.se, never
   to Amazon directly.
4. **Copies a placeholder image** to `public/pins/<pinId>.jpg` (1000×1500,
   padded, from a real reference photo — never AI-generated, never a stock
   photo): prefers the existing `public/comparisons/<ref>.webp` card (real
   product photos, already exists for most comparison pages), else the
   resolved product's own image. If the target file already exists, it is
   **left untouched** by default — it may already be Remi's finished
   1000×1500 branded creative. Remi's job is to overwrite this same
   filename with the real design; nothing else needs to change when he does.
5. **Pulls price/rating**, never a hardcoded number: `price` is always
   whatever string lives on the product record (in this codebase that's
   always the compliance-safe `"Se aktuellt pris på Amazon"` —
   `automation/add-product.mjs`'s own lint bans anything else from ever
   landing there, so this pipeline inherits that guarantee for free).
   `ratingSummary` is the real Amazon rating sentence
   (e.g. *"Amazon visar 4,3 av 5 från 533 omdömen."*), and `elinsPoang` is
   Elin's own editorial score out of 100 where one exists.
6. **Compliance gate** (mirrors `automation/add-product.mjs`'s lint):
   - Hard errors (block the write unless `--force`): hardcoded price
     pattern, "jag har testat/provat" first-hand-testing claims, medical
     claims, SPF/sun-protection claims, anti-age claims, a raw Amazon
     `mal_url`, an unresolved `produkt_ref`, a missing required column.
   - Auto-fixed (not blocking): if `beskrivning` doesn't already contain
     "Innehåller annonslänkar", it's appended automatically — this is
     boilerplate compliance text, not creative content, so the pipeline
     handles it rather than relying on every row remembering it by hand.
   - Soft warnings (printed, don't block): `pelare` not one of the 4 known
     pillars, `board` not one of the 6 known boards, title/description
     length outside Pinterest's recommended ranges, `mal_url` pointing
     off-site to a non-Amazon domain.
7. **Suggests a publish date** (`suggestedPublishAt`, 4/day cadence at
   09:00/12:00/15:00/18:00, starting tomorrow, in CSV row order) — a
   *proposal* for the bulk-CSV's Publish date column, not a real schedule.
   This exists mainly as a safety net: Pinterest's bulk importer publishes
   immediately (or all at once) if that column is blank or malformed, so
   the export always fills it with a sane future date rather than risking
   an accidental instant-publish. Zayn/CEO should review/adjust before
   any real upload.

## Output shape (`out/<batch>.pins.json`)

One object per CSV row: `pinId`, `title`, `description`
(`descriptionDisclosureAdded` flags whether step 6's auto-fix fired),
`altText`, `destinationUrl`, `utmUrl`, `image` (`publicPath`, `publicUrl`,
`status`), `productData` (`kind`, `resolvedVia`, `picks[]` with
brand/title/price/ratingSummary/elinsPoang/image/asin), `suggestedPublishAt`,
and `compliance` (`ok`, `errors[]`, `warnings[]`). Rows that fail validation
still appear (with `ok:false` and their `errors`) so one bad row doesn't
hide the rest of the report.

## Pinterest bulk-CSV export — verify before uploading

`out/<batch>.pinterest-bulk.csv` targets the column set documented at
help.pinterest.com ("Bulk upload Pins", checked 2026-07-13): `Title, Media
URL, Pinterest board, Description, Link, Publish date, Keywords`. `Keywords`
is left blank on purpose — Pinterest's "Tagged topics" is a closed,
predefined-interest taxonomy picked from UI suggestions after the fact, not
a free CSV field, per the 2026-07-12 content-plan research. **Pinterest's
own template can change** — download it from the Bulk Create Pins screen
and diff the header row before the first real upload.

## Known gap found while building this (needs a decision, not a code fix)

Running this against Layla's real `batch-01.csv` (18 rows, all resolve
cleanly) surfaced a real mismatch: every row's `pelare` is a **product
category** (Skönhet / Hälsa / Sommar & resa / Träning) and every `board` is
a **descriptive weekly theme** (e.g. "Svalka i sommarvärmen", "Packa smart –
resetips"), not the 4 pillars / 6 boards named in the 2026-07-12 all-dept
content-plan meeting (X eller Y, Bäst i test, Köp INTE/Hoppa över, Guider ·
Bäst i test, Hudvård, Hårvård, Vanity & sminkbord, Presenttips, Hälsa &
träning). The pipeline doesn't silently pick a side — it just warns on every
row (`compliance.warnings`) and still processes them. Someone needs to say
whether Layla's category/theme scheme is the new intentional plan (in which
case tell me and I'll update `KNOWN_PILLARS`/`KNOWN_BOARDS` in
`build-pins.mjs` so this stops being flagged as a warning) or whether the
CSV should be corrected to the original 4/6 taxonomy.

## Coordination needed to fully close the batch

- **Cody/CEO**: confirm the `utm_campaign` format —
  `<pelare-slug>-<batchId>` (e.g. `skonhet-batch-01`) was my read of
  "utm_campaign=<pelare|batch-01>"; it's a one-line change in
  `campaign = ...` inside `build-pins.mjs` if a different scheme (pure
  pillar, pure batch id, etc.) was actually intended. Also the pillar/board
  question above.
- **Max**: confirm `public/pins/` deploys and is publicly fetchable at
  `https://www.smartartai.se/pins/...` the same way `public/products/`
  already is (should be automatic — same static folder — but worth a
  post-deploy spot check since Pinterest's CSV importer fetches the Media
  URL itself and needs it public).
- **Remi**: `public/pins/*.jpg` currently holds real-photo **placeholders**
  (1000×1500, unbranded — no monogram/Elins-poäng badge/kinetic layout yet).
  Overwrite the same filenames with the final branded 1000×1500 pin art;
  nothing else in the pipeline needs to change when he does. `productData`
  in the JSON has the brand/title/price/rating/Elins-poäng text he needs per
  pin without re-deriving it by hand.
- **Layla**: `automation/pins/batch-01.csv` is ready to extend for the rest
  of the week's cadence (4/day) — same 7 columns, one row per pin.

## Compliance red lines this pipeline enforces automatically

Swedish content only · never a hardcoded price · never "jag har testat/
provat" (no first-hand-testing claims) · no medical or SPF claims ·
"Innehåller annonslänkar" present on every pin · never a raw Amazon link ·
**never publishes** — output is always a reviewable file, never a live post.
