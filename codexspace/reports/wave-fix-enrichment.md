# Wave Fix - content enrichment

Branch: `wave-build-2026-07`

Scope: enriched `lib/wave-content.ts` for all 49 wave products using each product's `PRODUCT-REFERENCE.md` as source of truth.

## Summary

- Filled all 49 empty `amazonQuotes` arrays with 3-4 attributed buyer quotes.
- Included a critical/negative quote for every product whose buyer-voice section had a valid warning-marked review.
- Replaced repeated template `passFor`, `caution`, `usageGuidance`, `shortBody`, `valueStatement`, and FAQ answers with product-specific copy from the reference files.
- Normalized all 49 `amazonSummary` strings to `Amazon visar X.X av 5 (N NNN betyg).`
- Removed internal wording (`referensfil`) from user-facing FAQ copy.
- Kept compliance-sensitive seller claims out of Elin copy and stripped hardcoded prices from reason/caveat text.

## Per-product audit

| Slug | Source folder | Quotes | Critical status | Amazon summary |
|---|---|---:|---|---|
| sportconic-lopband | sportconic-walking-pad | 4 | critical included | Amazon visar 4.3 av 5 (457 betyg). |
| citysports-gaband | citysports-gaband | 4 | critical included | Amazon visar 4.2 av 5 (180 betyg). |
| inkey-retinol-serum | inkey-retinol-serum | 4 | critical included | Amazon visar 4.2 av 5 (1 593 betyg). |
| cerave-resurfacing-retinol | cerave-resurfacing-retinol | 4 | critical included | Amazon visar 4.5 av 5 (5 478 betyg). |
| physicians-formula-bronzer | physicians-formula-bronzer | 3 | critical included | Amazon visar 4.5 av 5 (1 480 betyg). |
| jean-len-saltvattenspray | jean-len-saltvattenspray | 4 | critical included | Amazon visar 4.3 av 5 (133 betyg). |
| midea-golvflakt | midea-golvflakt | 4 | no critical marker | Amazon visar 4.5 av 5 (658 betyg). |
| beurer-tl35-dagsljuslampa | beurer-tl35-dagsljuslampa | 4 | no critical marker | Amazon visar 4.6 av 5 (823 betyg). |
| beurer-tl30-dagsljuslampa | beurer-tl30-dagsljuslampa | 4 | no warning marker; included 4-star USB/battery caveat | Amazon visar 4.5 av 5 (9 042 betyg). |
| beurer-hd75-elfilt | beurer-hd75-elfilt | 4 | critical included | Amazon visar 4.1 av 5 (3 390 betyg). |
| emerio-varmeflakt | emerio-varmeflakt | 4 | critical included | Amazon visar 4.0 av 5 (2 179 betyg). |
| delonghi-oljefyllt-element | delonghi-oljefyllt-element | 4 | no critical marker | Amazon visar 4.5 av 5 (4 877 betyg). |
| beurer-lb200-luftfuktare | beurer-lb200-luftfuktare | 4 | critical included | Amazon visar 4.3 av 5 (463 betyg). |
| philips-600-luftrenare | philips-600-luftrenare | 4 | no critical marker | Amazon visar 4.4 av 5 (4 039 betyg). |
| good-nite-tyngdtacke | good-nite-tyngdtacke | 4 | critical included; excluded child-usage note not used | Amazon visar 4.5 av 5 (1 631 betyg). |
| beurer-fw20-fotvarmare | beurer-fw20-fotvarmare | 4 | no critical marker | Amazon visar 4.2 av 5 (1 884 betyg). |
| philips-sonicare-5300 | philips-sonicare-5300 | 4 | no critical marker | Amazon visar 4.4 av 5 (2 879 betyg). |
| oralb-io6 | oralb-io6 | 3 | no critical marker | Amazon visar 4.4 av 5 (378 betyg). |
| philips-power-flosser | philips-power-flosser | 4 | no critical marker | Amazon visar 4.4 av 5 (2 360 betyg). |
| surfou-water-flosser | surfou-water-flosser | 4 | critical included | Amazon visar 4.1 av 5 (1 909 betyg). |
| beurer-fb35-fotbad | beurer-fb35-fotbad | 4 | no critical marker | Amazon visar 4.2 av 5 (3 570 betyg). |
| deanic-fotbad | deanic-fotbad | 4 | no critical marker | Amazon visar 4.4 av 5 (432 betyg). |
| bio-oil | bio-oil | 4 | critical included | Amazon visar 4.6 av 5 (65 241 betyg). |
| philips-oneblade-360 | philips-oneblade-360 | 4 | critical included | Amazon visar 4.6 av 5 (53 436 betyg). |
| philips-skaggtrimmer-3000 | philips-skaggtrimmer-3000 | 4 | critical included | Amazon visar 4.2 av 5 (17 965 betyg). |
| remington-harklippare | remington-harklippare | 4 | critical included | Amazon visar 4.4 av 5 (38 705 betyg). |
| philips-rakapparat-5000 | philips-rakapparat-5000 | 4 | no critical marker | Amazon visar 4.3 av 5 (11 652 betyg). |
| winsea-nasharstrimmer | winsea-nasharstrimmer | 3 | no critical marker | Amazon visar 4.2 av 5 (5 201 betyg). |
| loreal-skaggolja | loreal-skaggolja | 4 | no critical marker | Amazon visar 4.5 av 5 (4 007 betyg). |
| yankee-candle-clean-cotton | yankee-candle-clean-cotton | 4 | no critical marker | Amazon visar 4.6 av 5 (12 510 betyg). |
| rituals-sakura-presentset | rituals-sakura-presentset | 4 | critical included | Amazon visar 4.8 av 5 (2 434 betyg). |
| sol-de-janeiro-jet-set | sol-de-janeiro-jet-set | 4 | no critical marker | Amazon visar 4.5 av 5 (2 389 betyg). |
| kindle-paperwhite | kindle-paperwhite | 4 | no critical marker | Amazon visar 4.6 av 5 (16 126 betyg). |
| renpho-ogonmassager | renpho-ogonmassager | 4 | critical included | Amazon visar 4.4 av 5 (31 532 betyg). |
| comfier-massagesits | comfier-massagesits | 4 | no critical marker | Amazon visar 4.2 av 5 (13 978 betyg). |
| wirelume-handdammsugare | wirelume-handdammsugare | 4 | no critical marker | Amazon visar 4.3 av 5 (2 291 betyg). |
| auxmir-sminkspegel | auxmir-sminkspegel | 4 | critical included | Amazon visar 4.5 av 5 (2 863 betyg). |
| bayt-hollywood-spegel | bayt-hollywood-spegel | 4 | critical included | Amazon visar 4.4 av 5 (213 betyg). |
| plantifique-ansiktsrulle | plantifique-ansiktsrulle | 4 | critical included | Amazon visar 4.6 av 5 (3 553 betyg). |
| ultrasport-f-bike | ultrasport-f-bike | 4 | no critical marker | Amazon visar 4.3 av 5 (34 021 betyg). |
| zipro-motionscykel | zipro-motionscykel | 4 | critical included | Amazon visar 4.1 av 5 (1 425 betyg). |
| proiron-skivstang-set | proiron-skivstang-set | 4 | no critical marker | Amazon visar 4.5 av 5 (14 171 betyg). |
| gorilla-skivstang | gorilla-skivstang | 4 | no critical marker | Amazon visar 4.1 av 5 (168 betyg). |
| merach-roddmaskin | merach-roddmaskin | 4 | no critical marker | Amazon visar 4.6 av 5 (1 315 betyg). |
| xiaomi-smart-band-10 | xiaomi-smart-band-10 | 4 | no critical marker | Amazon visar 4.4 av 5 (5 983 betyg). |
| bemaxx-pusselmatta | bemaxx-pusselmatta | 4 | no critical marker | Amazon visar 4.4 av 5 (22 345 betyg). |
| tymo-utratningsborste | tymo-utratningsborste | 4 | no critical marker | Amazon visar 4.3 av 5 (80 101 betyg). |
| gihali-hardiffusor | gihali-hardiffusor | 4 | critical included | Amazon visar 4.3 av 5 (3 874 betyg). |
| color-wow-dream-coat | color-wow-dream-coat | 4 | no critical marker | Amazon visar 4.3 av 5 (95 479 betyg). |

## Verification

- `amazonQuotes: []` in `lib/wave-content.ts`: 0
- Old template phrases: 0 for `"Vill se caveaten före Amazon-klicket"` and `"Matcha produkten mot behovet"`
- `referensfil` in `lib/wave-content.ts`: 0
- Broken `betyg."` format: 0
- Exact `amazonSummary` format count: 49
- Banned-claim scan over `lib/wave-content.ts`: clean
- Hardcoded numeric price scan over `lib/wave-content.ts`: clean
- Mojibake scan `rg "Ã" lib app components`: clean
- `npm run lint`: pass
- `npm run typecheck`: pass
- `npm run build`: pass
- HTTP 200 spot check: pass on 10 wave routes
- 390px horizontal overflow spot check: pass on same 10 routes (`overflow=0`)

## Judgement calls

- Good Nite weighted blanket: the child-usage note was explicitly excluded in source and was not used; the valid Pekka 3-star warning was included.
- Beurer TL30: no `⚠️` marker in the buyer-voice list, but the David 4-star USB/battery caveat was included because it is the clearest negative buyer signal.
- Price-bearing reason bullets from reference files were stripped or replaced with non-price product facts.
- Compliance-sensitive products kept buyer wording attributed and Elin copy neutral: dagsljuslampor, weighted blanket, RENPHO, Plantifique, Bio-Oil, retinol, flosser/luftrenare, Xiaomi and MERACH.

Skipped items: none.
