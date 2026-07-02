# Wave 2 / Batch 2

Status: passed verification and ready to commit on `wave-build-2026-07`.

Added 7 product pages, 3 hubs, and 6 comparisons/guides:
- Products: Philips Sonicare 5300, Oral-B iO Series 6, Philips Power Flosser 3000, SURFOU water flosser, Beurer FB35 fotbad, DEANIC hopfallbart fotbad, Bio-Oil hudvardsolja.
- Hubs: `/halsa/eltandborste-guide`, `/halsa/munskoljare`, `/skonhet/fotbad`.
- Comparisons/guides: `/halsa/oral-b-eller-sonicare`, `/halsa/oralb-io6-vart-priset`, `/halsa/billig-eller-dyr-water-flosser`, `/skonhet/elektriskt-eller-enkelt-fotbad`, `/skonhet/skona-fotter-i-vinter`, `/skonhet/bio-oil-eller-jojobaolja`.

Verification:
- `npm run lint` passed.
- `npm run typecheck` passed.
- `npm run build` passed.
- All new routes returned HTTP 200.
- 390px viewport overflow check passed on all new routes.
- Mojibake grep was clean for `lib`, `app`, and `components`.
- Generated wave files were clean for the banned medical-claim terms.
- Affiliate links matched `INTAKE-STATUS.md` exactly.

Compliance notes:
- Munvard pages avoid gum-health, disease and plaque-removal claims; buyer quotes are exact and attributed from reference files.
- Beurer FB35 copy keeps the key caveat that it holds warmth rather than heating cold water.
- DEANIC copy avoids acupressure/health claims.
- Bio-Oil copy stays cosmetic only, with no scar, stretch-mark or pregnancy advice.
- `/halsa/eltandborste-guide` is an intentional route deviation because `/halsa/eltandborste` already exists.

Skipped items: none.
