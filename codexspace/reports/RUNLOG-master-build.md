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

## Wave 3 / Batch 1 - grooming for honom

Routes added:
- `/skonhet/grooming/oneblade-360`
- `/skonhet/grooming/philips-skaggtrimmer`
- `/skonhet/grooming/remington-harklippare`
- `/skonhet/grooming/philips-rakapparat`
- `/skonhet/grooming/nasharstrimmer`
- `/skonhet/grooming/skaggolja`
- `/skonhet/grooming`
- `/skonhet/oneblade-eller-skaggtrimmer`
- `/skonhet/rakapparat-eller-oneblade`
- `/guider/julklapp-till-honom`

Verification:
- `npm run lint`: pass
- `npm run typecheck`: pass
- `npm run build`: pass
- HTTP 200: pass for all 10 routes
- 390px overflow: pass for all 10 routes (`scrollWidth=390`, `clientWidth=390`)
- Mojibake grep `rg "Ã" lib app components`: clean
- Banned medical-claim scan over generated wave files: clean
- Affiliate links: exact match against `INTAKE-STATUS.md`

Decisions:
- Kept the gift guide as level-based instead of hardcoded-price-based to respect the no hardcoded prices rule.
- Used one-image-derived gallery crops for L'Oreal skaggolja, as allowed by the reference caveat.
- Kept grooming copy to function, blade economy and buyer caveats; no skin or itch claims.
- Reflected OneBlade blade-cost caveat, Remington corded caveat and Philips shaver learning-curve caveat.

Skipped items: none.

## Wave 3 / Batch 2 - jul and mys

Routes added:
- `/halsa/doftljus/yankee-clean-cotton`
- `/skonhet/presentset/rituals-sakura`
- `/skonhet/sol-de-janeiro-jet-set`
- `/halsa/kindle-paperwhite`
- `/halsa/ogonmassager/renpho`
- `/halsa/massagesits/comfier`
- `/halsa/handdammsugare/wirelume`
- `/skonhet/sminkspegel/auxmir`
- `/skonhet/sminkspegel/bayt`
- `/skonhet/ansiktsrulle/plantifique`
- `/halsa/kindle-eller-kobo`
- `/halsa/doftljus-eller-aromadiffuser`
- `/skonhet/gua-sha-eller-ansiktsrulle`
- `/halsa/massagesits-eller-massagepistol`
- `/skonhet/sminkspegel`
- `/skonhet/hollywood-eller-kompakt-sminkspegel`
- `/halsa/robot-eller-handdammsugare`
- `/guider/julklapp-till-henne`
- `/guider/julklappar-budget-mellan-premium`

Verification:
- `npm run lint`: pass
- `npm run typecheck`: pass
- `npm run build`: pass
- HTTP 200: pass for all 19 routes
- 390px overflow: pass for all 19 routes (`scrollWidth=390`, `clientWidth=390`)
- Mojibake grep `rg "Ã" lib app components`: clean
- Banned medical-claim scan over generated wave files: clean
- Affiliate links: exact match against `INTAKE-STATUS.md`

Decisions:
- Used `/guider/julklappar-budget-mellan-premium` instead of hardcoded under-100/300/700 naming because pages must not rely on hardcoded prices.
- Kept Renpho to heat, massage format and pause language; no eye strain, dark circles, dry eyes or sleep claims.
- Kept Plantifique to cosmetic tool/routine language; no toxins, swelling, anti-aging or circulation claims.
- Logged third-party seller review needs for Yankee Candle, Rituals Sakura and Bayt Hollywood mirror.
- Kept Kindle/Kobo focused on ecosystem and library/open-format tradeoffs.

Skipped items: none.

## Wave 4 - traning and har

Routes added:
- `/traning/motionscykel/ultrasport-f-bike`
- `/traning/motionscykel/zipro`
- `/traning/skivstang/proiron-2i1`
- `/traning/skivstang/gorilla`
- `/traning/roddmaskin`
- `/traning/xiaomi-smart-band`
- `/traning/pusselmatta`
- `/skonhet/utratningsborste`
- `/skonhet/hardiffusor`
- `/skonhet/color-wow`
- `/traning/motionscykel`
- `/traning/hopfallbar-eller-kompakt-motionscykel`
- `/traning/skivstang`
- `/traning/2-i-1-eller-riktig-skivstang`
- `/traning/gaband-motionscykel-eller-roddmaskin`
- `/skonhet/utratningsborste-eller-plattang`
- `/skonhet/tiktok-produkter-som-haller`

Verification:
- `npm run lint`: pass
- `npm run typecheck`: pass
- `npm run build`: pass
- HTTP 200: pass for all 17 routes
- 390px overflow: pass for all 17 routes (`scrollWidth=390`, `clientWidth=390`)
- Mojibake grep `rg "Ã" lib app components`: clean
- Banned medical-claim scan over generated wave files: clean
- Affiliate links: exact match against `INTAKE-STATUS.md`

Decisions:
- Built the cardio-trio guide at `/traning/gaband-motionscykel-eller-roddmaskin`.
- Kept Ultrasport max 100 kg and Zipro size caveats visible in copy and scoring.
- Kept MERACH rowing copy neutral; no fat-burning or muscle-percentage claims.
- Kept Xiaomi copy to training tracking; no health-measurement claims.
- Kept TYMO and Color Wow copy cosmetic-only, with heat/routine caveats.

Skipped items: none.

## Wave fix - content enrichment

Changed:
- Enriched `lib/wave-content.ts` for all 49 wave products from each product's `PRODUCT-REFERENCE.md`.
- Filled 49 `amazonQuotes` arrays with 3-4 attributed buyer quotes.
- Replaced copied `passFor`, `caution`, `usageGuidance`, `shortBody`, `valueStatement`, and FAQ copy with product-specific content.
- Normalized all 49 `amazonSummary` strings to `Amazon visar X.X av 5 (N NNN betyg).`
- Removed internal `referensfil` wording from user-facing FAQ copy.

Verification:
- `amazonQuotes: []`: 0 in `lib/wave-content.ts`
- Old template phrases: 0
- `referensfil`: 0
- Broken `betyg."`: 0
- Exact `amazonSummary` format: 49/49
- Quote counts: 49/49 products have 3-5 quotes
- Critical quote coverage: pass for all warning-marked buyer sections
- Banned-claim scan over `lib/wave-content.ts`: clean
- Hardcoded numeric price scan over `lib/wave-content.ts`: clean
- Mojibake grep `rg "Ã" lib app components`: clean
- `npm run lint`: pass
- `npm run typecheck`: pass
- `npm run build`: pass
- HTTP 200: pass on 10 spot-check routes
- 390px overflow: pass on the same 10 routes (`overflow=0`)

Decisions:
- Did not use the explicitly excluded Good Nite child-usage note; used the valid Pekka 3-star caveat instead.
- Kept price-bearing source bullets out of site copy.
- Kept compliance-sensitive products neutral in Elin copy and attributed buyer wording only.

Skipped items: none.
