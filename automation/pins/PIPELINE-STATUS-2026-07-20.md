# Pinterest pipeline status — 2026-07-20

## Current inventory

- The old “94 pages” number was a 2026-07-13 snapshot.
- The current editorial surface contains 77 registered comparisons and 23 guide routes: 100 candidate pages in total.
- `batch-01.csv` covers 18 of them: 17 comparisons and one guide.
- Remaining candidate inventory after batch 01: 82 pages (60 comparisons and 22 guides).

## Batch 01 result

- Rows: 18.
- Resolved: 18.
- Compliance failures: 0.
- Warnings: 0.
- Elin quotes: 18/18 sourced from `quotes-overrides.json`, all within the 8–14 word target.
- The 14 previously automatic drafts were polished in a Layla virtual editorial review on 2026-07-20.
- Board names now match the four live Pinterest boards exactly.
- Generated output:
  - `automation/pins/out/batch-01.pins.json`
  - `automation/pins/out/batch-01.pinterest-bulk.csv`
  - `public/pins/*.jpg` placeholders (existing finished art is never overwritten by default)

Nothing was published or scheduled.

## Batching rule for the remaining inventory

Continue with reviewable batches of at most 18 Pins (roughly four Pins per day
for four to five days). Select pages by seasonal demand and board relevance;
do not force all remaining pages into the four current seasonal boards. Each
batch must pass the same resolution, disclosure, quote-length, image, and link
checks before final art review and CEO approval.

Suggested sequence:

1. Current seasonal comparisons and guides.
2. Evergreen beauty and hair content, after an evergreen board is available.
3. Evergreen health/home content, after an evergreen board is available.
4. Training comparisons suited to `Hemmaträning`.
5. Travel content suited to `Packa smart – resetips`.

## Gate before upload

1. Final 1000×1500 art replaces placeholders.
2. Pinterest’s current bulk template is compared with the generated header.
3. Destination, UTM, disclosure, and Media URL are spot-checked.
4. Azzam approves upload/scheduling.
