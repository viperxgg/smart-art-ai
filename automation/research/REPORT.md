# Phase A Research Report

## Methodology

- Read `automation/CODEX-TASK-bulk-products.md` in full and ran Phase A only.
- Worked in the canonical local repo: `C:/Users/azzam/Desktop/amazon progect/smartart`.
- Keyword source used: `C:/Users/azzam/Documents/seo claude/smartartai-assets/06_keyword-research/traning_kw.json`. This was the only keyword export used.
- Built an existing-product dedupe index from `lib/products.ts`: 165 products indexed by slug, ASIN, brand, and title.
- Read taxonomy from `lib/categoryGroups.ts` and mapped candidates only to real current groups: `Kondition`, `Träningsband`, `Vikter`, `Yoga`, `Återhämtning`, `Tillbehör`.
- Normalized keywords by lowercasing, preserving Swedish display text, slugifying for comparison, grouping obvious synonyms, and keeping only physical product concepts.

## Scoring Formula

For every included candidate:

`compositeScore = 100 * (0.55*volumeNorm + 0.20*cpcNorm + 0.15*commercialIntent + 0.10*nicheFit - 0.15*competitionPenalty)`

Where:

- `volumeNorm = log10(searchVolume + 1) / log10(maxSearchVolume + 1)` within the keyword export.
- `cpcNorm = log10(cpc + 1) / log10(maxCpc + 1)` within the keyword export.
- `commercialIntent` is 1.0 for clear buyable physical products.
- `nicheFit` is 1.0 only when the concept maps to a real current taxonomy group.
- `competitionPenalty = competition_index / 100`.

All included rows came from real DataForSEO values in the local keyword export. No search volume, CPC, price, rating, ASIN, affiliate URL, or review data was invented.

## Top 10 Per Category

### Träning

1. Löpband för hemmaträning (`löpband`) - score 85, 14800 searches/month, group `Kondition`.
2. Motionscykel för hemmet (`motionscykel`) - score 75.78, 9900 searches/month, group `Kondition`.
3. Skivstång för hemmagym (`skivstång`) - score 69.95, 4400 searches/month, group `Vikter`.

### Hälsa

No ranked candidates: no `halsa_kw.json` keyword export was available, so demand is `UNKNOWN (no keyword export)`.

### Skönhet

No ranked candidates: no `skonhet_kw.json` keyword export was available, so demand is `UNKNOWN (no keyword export)`.

## Dedupe Results

Included 3 new candidates and excluded 17 keyword concepts already covered or too ambiguous.

- `kettlebell`: existing coverage by `amazon-basics-gjutjarns-kettlebell`, `proiron-mjuk-kettlebell`.
- `hantlar`: existing coverage by `proiron-neoprenhantlar`, `songmics-hantelset-med-stallning`.
- `justerbara hantlar`: existing coverage by `bowflex-selecttech-552i`.
- `träningsband`: existing coverage by `traningsband-4-nivaer`, `jakkofoxx-loopband`, `elvire-miniband`.
- `yogamatta`: existing coverage by `prosourcefit-extra-tjock-yogamatta`, `yogati-tpe-yogamatta`.
- `foam roller`: existing coverage by `bodymate-foam-roller-care`, `elvire-deep-tissue-massageset`.
- `hopprep`: existing coverage by `portentum-hopprep`.
- `gymboll`: existing coverage by `gorilla-gymboll`.
- `balansboll`: existing overlap with `gorilla-gymboll` and `gorilla-balansplatta`.
- `viktväst`: existing coverage by `eric-flag-viktvast`.
- `träningshandskar`: existing coverage by `ihuan-traningshandskar`.
- `pull up stång`: existing coverage by `iron-gym-pull-up-bar`.
- `pilatesboll`: existing overlap with `gorilla-gymboll` and `g5-pilatesring`.
- `stepbräda`: existing coverage by `reebok-stepbrada`.
- `maghjul`: existing coverage by `amonax-maghjul`.
- `gummiband`: existing coverage by resistance-band products.
- `fitnessband`: ambiguous and overlaps with existing resistance-band products.

## GAPS

- `../smartartai-assets/06_keyword-research/*.json` was not present relative to the canonical repo parent. The only real keyword export found locally was the project asset workspace file listed above.
- Skönhet demand is `UNKNOWN (no keyword export)`; provide `skonhet_kw.json` to rank beauty candidates instead of guessing.
- Hälsa demand is `UNKNOWN (no keyword export)`; provide `halsa_kw.json` to rank health candidates instead of guessing.
- Only three genuinely new training concepts survived dedupe because the current catalog already covers most exported training keywords.
- All product-level fields that require Amazon/human input remain placeholders for later phases: `TODO_BRAND`, `TODO_ASIN`, `TODO_AFFILIATE_URL`, and image URLs.

## Did NOT Do

- Did NOT scrape, crawl, or open Amazon.
- Did NOT invent affiliate links, ASINs, prices, ratings, review counts, quotes, or search volumes.
- Did NOT generate `amzn.to` links or any Amazon URLs.
- Did NOT make SPF, medical, anti-age, or first-hand testing claims.
- Did NOT create Phase B queue specs or run `automation/add-product.mjs`.
- Did NOT change `lib/*`, `app/*`, or `public/*`.
- Did NOT commit, push, deploy, or perform network writes.
