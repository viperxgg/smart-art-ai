# REPORT MASTER BUILD

Branch: `wave-build-2026-07`

Status: build completed across all seven batch files. Nothing was pushed, merged, or applied to `main`.

## Totals

| Type | Count |
|---|---:|
| Product pages | 49 |
| Hub/guide pages | 22 |
| Comparison pages | 24 |
| Total new wave routes | 95 |

Note: the master request names a 50-product build, but the seven executable batch files contain 49 product rows. No product from those rows failed verification. The already-skipped portable AC item remains out of scope for this run.

## Verification Summary

Each batch passed:
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- HTTP 200 on every new route
- 390px mobile overflow check
- Mojibake scan over `lib app components`
- Generated wave-file banned-claim scan
- Affiliate links diffed against `07_product-data/INTAKE-STATUS.md`

Final build wrote `lib/sitemap-entries.ts` with 318 routes and generated 332 static pages.

## Elins Poang Distribution

| Score band | Count | Products |
|---|---:|---|
| 85-100 | 3 | `kindle-paperwhite` (87), `bemaxx-pusselmatta` (85), `color-wow-dream-coat` (86) |
| 80-84 | 22 | `sportconic-lopband` (82), `inkey-retinol-serum` (80), `physicians-formula-bronzer` (81), `midea-golvflakt` (83), `beurer-tl35-dagsljuslampa` (82), `beurer-tl30-dagsljuslampa` (84), `philips-600-luftrenare` (80), `philips-sonicare-5300` (83), `philips-power-flosser` (81), `deanic-fotbad` (80), `bio-oil` (82), `philips-oneblade-360` (84), `philips-skaggtrimmer-3000` (82), `philips-rakapparat-5000` (80), `sol-de-janeiro-jet-set` (82), `wirelume-handdammsugare` (80), `auxmir-sminkspegel` (82), `ultrasport-f-bike` (84), `proiron-skivstang-set` (83), `merach-roddmaskin` (82), `xiaomi-smart-band-10` (81), `tymo-utratningsborste` (84) |
| 75-79 | 16 | `citysports-gaband` (78), `cerave-resurfacing-retinol` (76), `jean-len-saltvattenspray` (79), `beurer-hd75-elfilt` (79), `delonghi-oljefyllt-element` (77), `beurer-lb200-luftfuktare` (78), `good-nite-tyngdtacke` (79), `oralb-io6` (78), `beurer-fb35-fotbad` (76), `remington-harklippare` (77), `winsea-nasharstrimmer` (79), `loreal-skaggolja` (78), `yankee-candle-clean-cotton` (76), `rituals-sakura-presentset` (78), `comfier-massagesits` (79), `gihali-hardiffusor` (77) |
| 70-74 | 5 | `emerio-varmeflakt` (74), `surfou-water-flosser` (73), `renpho-ogonmassager` (72), `plantifique-ansiktsrulle` (74), `gorilla-skivstang` (73) |
| <70 | 3 | `beurer-fw20-fotvarmare` (66), `bayt-hollywood-spegel` (68), `zipro-motionscykel` (69) |

## Product Routes

- `/traning/lopband/sportconic-lopband`
- `/traning/lopband/citysports-gaband`
- `/skonhet/retinolserum/inkey-retinol`
- `/skonhet/retinolserum/cerave-retinol`
- `/skonhet/bronzer`
- `/skonhet/saltvattenspray`
- `/halsa/flakt/midea-golvflakt`
- `/halsa/dagsljuslampa/beurer-tl35`
- `/halsa/dagsljuslampa/beurer-tl30`
- `/halsa/elfilt`
- `/halsa/varmeflakt`
- `/halsa/oljefyllt-element`
- `/halsa/luftfuktare/beurer-lb200`
- `/halsa/luftrenare/philips-600`
- `/halsa/tyngdtacke/good-nite`
- `/halsa/fotvarmare`
- `/halsa/eltandborste/sonicare-5300`
- `/halsa/eltandborste/oralb-io6`
- `/halsa/munskoljare/philips-3000`
- `/halsa/munskoljare/surfou`
- `/skonhet/fotbad/beurer-fb35`
- `/skonhet/fotbad/deanic`
- `/skonhet/bio-oil`
- `/skonhet/grooming/oneblade-360`
- `/skonhet/grooming/philips-skaggtrimmer`
- `/skonhet/grooming/remington-harklippare`
- `/skonhet/grooming/philips-rakapparat`
- `/skonhet/grooming/nasharstrimmer`
- `/skonhet/grooming/skaggolja`
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

## Hub And Comparison Routes

- `/traning/lopband`
- `/traning/gaband-eller-lopband`
- `/skonhet/retinolserum`
- `/skonhet/retinol-eller-bakuchiol`
- `/skonhet/saltvattenspray-eller-texturspray`
- `/halsa/golvflakt-eller-tornflakt`
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
- `/halsa/eltandborste-guide`
- `/halsa/oral-b-eller-sonicare`
- `/halsa/oralb-io6-vart-priset`
- `/halsa/munskoljare`
- `/halsa/billig-eller-dyr-water-flosser`
- `/skonhet/fotbad`
- `/skonhet/elektriskt-eller-enkelt-fotbad`
- `/skonhet/skona-fotter-i-vinter`
- `/skonhet/bio-oil-eller-jojobaolja`
- `/skonhet/grooming`
- `/skonhet/oneblade-eller-skaggtrimmer`
- `/skonhet/rakapparat-eller-oneblade`
- `/guider/julklapp-till-honom`
- `/halsa/kindle-eller-kobo`
- `/halsa/doftljus-eller-aromadiffuser`
- `/skonhet/gua-sha-eller-ansiktsrulle`
- `/halsa/massagesits-eller-massagepistol`
- `/skonhet/sminkspegel`
- `/skonhet/hollywood-eller-kompakt-sminkspegel`
- `/halsa/robot-eller-handdammsugare`
- `/guider/julklapp-till-henne`
- `/guider/julklappar-budget-mellan-premium`
- `/traning/motionscykel`
- `/traning/hopfallbar-eller-kompakt-motionscykel`
- `/traning/skivstang`
- `/traning/2-i-1-eller-riktig-skivstang`
- `/traning/gaband-motionscykel-eller-roddmaskin`
- `/skonhet/utratningsborste-eller-plattang`
- `/skonhet/tiktok-produkter-som-haller`

## NEEDS AZZAM REVIEW

Compliance-sensitive pages:
- Retinol pages: `/skonhet/retinolserum/inkey-retinol`, `/skonhet/retinolserum/cerave-retinol`, `/skonhet/retinolserum`, `/skonhet/retinol-eller-bakuchiol`
- Winter wellness/comfort: `/halsa/dagsljuslampa/*`, `/halsa/luftrenare/philips-600`, `/halsa/tyngdtacke/good-nite`
- Munvard: `/halsa/eltandborste/*`, `/halsa/munskoljare/*`, `/halsa/oral-b-eller-sonicare`, `/halsa/billig-eller-dyr-water-flosser`
- Bio-Oil and body/skincare tools: `/skonhet/bio-oil`, `/skonhet/bio-oil-eller-jojobaolja`, `/skonhet/ansiktsrulle/plantifique`, `/skonhet/gua-sha-eller-ansiktsrulle`
- Massage/relaxation: `/halsa/ogonmassager/renpho`, `/halsa/massagesits/comfier`, `/halsa/massagesits-eller-massagepistol`
- Fitness data/training claims: `/traning/roddmaskin`, `/traning/xiaomi-smart-band`, `/traning/gaband-motionscykel-eller-roddmaskin`
- Hair/cosmetic claims: `/skonhet/utratningsborste`, `/skonhet/color-wow`, `/skonhet/tiktok-produkter-som-haller`, `/skonhet/grooming/skaggolja`

Third-party seller / seller-sensitive products:
- `/skonhet/retinolserum/cerave-retinol`
- `/halsa/oljefyllt-element`
- `/halsa/fotvarmare`
- `/halsa/doftljus/yankee-clean-cotton`
- `/skonhet/presentset/rituals-sakura`
- `/skonhet/sminkspegel/bayt`

Route deviations:
- `/halsa/luftfuktare-guide`, `/halsa/luftrenare-guide`, `/halsa/tyngdtacke-guide`, and `/halsa/eltandborste-guide` were used because the root routes already existed as product/single pages.
- `/guider/julklappar-budget-mellan-premium` was used instead of hardcoded under-100/300/700 route naming to preserve the no-hardcoded-prices rule.

Skipped items:
- No product from the seven batch files failed during this run.
- The portable AC item referenced in earlier planning remains skipped/out of this executable batch set.

## Commits

- `ca2f8e9` `wave1-batch1: lopband retinol bronzer`
- `3cb8ff7` `wave1-batch2: saltvattenspray golvflakt`
- `0a93da1` `wave2-batch1: vinterklimat`
- `e048956` `wave2-batch2: munvard fotvard`
- `5fec3a8` `wave3-batch1: grooming for honom`
- `18908a4` `wave3-batch2: jul mys`
- `66e86cc` `wave4-batch1: traning har`

## Pending Items

- Deploy decision after Azzam review.
- Re-submit sitemap in Google Search Console after merge/deploy.
- Review third-party seller pages before merge because seller, packaging, delivery, or QC caveats can change.
