# RUNLOG master build

Branch: `wave-build-2026-07`

## Wave 1 / Batch 1 - lopband, retinolserum, bronzer

Routes added:
- `/traning/lopband/sportconic-lopband`
- `/traning/lopband/citysports-gaband`
- `/skonhet/retinolserum/inkey-retinol`
- `/skonhet/retinolserum/cerave-retinol`
- `/skonhet/bronzer`
- `/traning/lopband`
- `/traning/gaband-eller-lopband`
- `/skonhet/retinolserum`
- `/skonhet/retinol-eller-bakuchiol`

Verification:
- `npm run lint`: pass
- `npm run typecheck`: pass
- `npm run build`: pass
- HTTP 200: pass for all 9 routes
- 390px overflow: pass for all 9 routes (`scrollWidth=390`, `clientWidth=390`)
- Mojibake grep `rg "Ã" lib app components`: clean
- Affiliate links: exact match against `INTAKE-STATUS.md`

Decisions:
- Used generated WebP images from each source folder, three images per product page.
- Kept retinol copy cosmetic-only and used no first-hand testing claims.
- Registered the retinol/bakuchiol comparison with three products by widening comparison index product slugs from a strict pair to a product list.

Skipped items: none.

## Wave 1 / Batch 2 - saltvattenspray and golvfläkt

Routes added:
- `/skonhet/saltvattenspray`
- `/halsa/flakt/midea-golvflakt`
- `/skonhet/saltvattenspray-eller-texturspray`
- `/halsa/golvflakt-eller-tornflakt`

Verification:
- `npm run lint`: pass
- `npm run typecheck`: pass
- `npm run build`: pass
- HTTP 200: pass for all 4 routes
- 390px overflow: pass for all 4 routes (`scrollWidth=390`, `clientWidth=390`)
- Mojibake grep `rg "Ã" lib app components`: clean
- Affiliate links: exact match against `INTAKE-STATUS.md`

Decisions:
- Kept saltvattenspray positioned for beach texture, with curl-routine caveat and links toward curl alternatives.
- Placed Midea golvfläkt under existing `/halsa/flakt/...` structure rather than introducing a separate fläkt section.
- Did not add the skipped portabel AC item.

Skipped items: none.

## Wave 2 / Batch 1 - vinterklimat

Routes added:
- `/halsa/dagsljuslampa/beurer-tl35`
- `/halsa/dagsljuslampa/beurer-tl30`
- `/halsa/elfilt`
- `/halsa/varmeflakt`
- `/halsa/oljefyllt-element`
- `/halsa/luftfuktare/beurer-lb200`
- `/halsa/luftrenare/philips-600`
- `/halsa/tyngdtacke/good-nite`
- `/halsa/fotvarmare`
- `/halsa/dagsljuslampa`
- `/halsa/beurer-tl30-eller-tl35`
- `/halsa/morka-morgnar`
- `/halsa/luftfuktare-guide`
- `/halsa/ultraljud-eller-evaporativ-luftfuktare`
- `/halsa/luftrenare-guide`
- `/halsa/levoit-eller-philips-luftrenare`
- `/halsa/tyngdtacke-guide`
- `/halsa/ella-eller-good-nite-tyngdtacke`
- `/halsa/varmeflakt-eller-oljefyllt-element`
- `/halsa/elfilt-eller-varmedyna`

Verification:
- `npm run lint`: pass
- `npm run typecheck`: pass
- `npm run build`: pass
- HTTP 200: pass for all 20 routes
- 390px overflow: pass for all 20 routes (`scrollWidth=390`, `clientWidth=390`)
- Mojibake grep `rg "Ã" lib app components`: clean
- Affiliate links: exact match against `INTAKE-STATUS.md`

Decisions:
- Used `*-guide` hub routes for luftfuktare, luftrenare and tyngdtacke because `/halsa/luftfuktare`, `/halsa/luftrenare` and `/halsa/tyngdtacke` already exist as single-product routes.
- Kept dagsljuslampa copy non-medical and avoided treatment, mood and therapy language.
- Kept luftrenare and tyngdtacke copy focused on room comfort, filters, size, weight and buyer caveats rather than health outcomes.
- Scored documented caveat products lower, including Beurer FW20 in Helt okej territory.

Skipped items: none.

## Wave 2 / Batch 2 - munvard, fotvard and Bio-Oil

Routes added:
- `/halsa/eltandborste/sonicare-5300`
- `/halsa/eltandborste/oralb-io6`
- `/halsa/munskoljare/philips-3000`
- `/halsa/munskoljare/surfou`
- `/skonhet/fotbad/beurer-fb35`
- `/skonhet/fotbad/deanic`
- `/skonhet/bio-oil`
- `/halsa/eltandborste-guide`
- `/halsa/oral-b-eller-sonicare`
- `/halsa/oralb-io6-vart-priset`
- `/halsa/munskoljare`
- `/halsa/billig-eller-dyr-water-flosser`
- `/skonhet/fotbad`
- `/skonhet/elektriskt-eller-enkelt-fotbad`
- `/skonhet/skona-fotter-i-vinter`
- `/skonhet/bio-oil-eller-jojobaolja`

Verification:
- `npm run lint`: pass
- `npm run typecheck`: pass
- `npm run build`: pass
- HTTP 200: pass for all 16 routes
- 390px overflow: pass for all 16 routes (`scrollWidth=390`, `clientWidth=390`)
- Mojibake grep `rg "Ã" lib app components`: clean
- Banned medical-claim scan over generated wave files: clean
- Affiliate links: exact match against `INTAKE-STATUS.md`

Decisions:
- Used `/halsa/eltandborste-guide` for the new eltandborste guide because `/halsa/eltandborste` already exists as a single-product route.
- Added exact attributed buyer-signal rows for the Oral-B/Sonicare guide from the reference files, without turning those into Elins own claims.
- Kept munvard copy to features, buyer signals and borsthuvudsekonomi; no gum-health or disease claims.
- Kept FB35 caveat explicit: it holds warmth rather than heating cold water.
- Kept Bio-Oil cosmetic only; no scar, stretch-mark or pregnancy advice.

Skipped items: none.
