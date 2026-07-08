# REPORT: SEO Sprint 2026-07-08 — Striking-Distance + Internal Links + Aftersun

**Executor:** Claude Code · **Branch:** main · **Commits:** `55013e0` (Phase 1), `51cb155` (Phase 2), `5943d60` (Phase 3)
**Verification:** `npx tsc --noEmit` = 0 after every phase · `npm run build` OK · compliance sweep over diff (kr-priser / "jag har testat" / solskydd / SPF) = 0 träffar · `app/sitemap.ts` untouched.

---

## 1. Vad ändrades (fil → ändring → query/URL den tjänar)

| Fil | Ändring | Tjänar |
|---|---|---|
| `lib/varmluftsborste.ts` | Ny FAQ: "Vilken varmluftsborste är bäst i test?" (svar med BaByliss/Remington, återanvänder befintliga fakta) | `varmluftsborste bäst i test` |
| `app/skonhet/hartork/page.tsx` | +1 relaterad länk → `/skonhet/varmluftsborste` (ankare "bäst i test 2026") | `varmluftsborste bäst i test` |
| `lib/varmluftsborste-eller-fon.ts` | Länken fanns redan — endast ankartext uppdaterad till "Elins varmluftsborste bäst i test 2026." | `varmluftsborste bäst i test` |
| `lib/heatless-lockar-eller-locktang.ts` | +1 relaterad länk → `/skonhet/varmluftsborste` | `varmluftsborste bäst i test` |
| `lib/harolja-eller-varmeskydd.ts` | Ny FAQ: "Finns det hårolja med värmeskydd?" (ärligt svar: lätt skydd finns, dedikerat värmeskydd skyddar bättre upp till 230°C) | `hårolja med värmeskydd` |
| `lib/sommar.ts` (moroccanoil-torrschampo) | Ny FAQ: "Fungerar torrschampo på ljust hår utan vita rester?" | `torrschampo ljust hår` |
| `lib/sommar.ts` (cabin-max + taygeer picks) | +1 länk vardera → `/sommar/resa/packkuber-eller-kompressionspasar` | `packkuber kompression` |
| `app/guider/tyst-flakt-sovrum/page.tsx` (+675%-guiden) | +2 relaterade länkar → `/halsa/flakt/honeywell-turboforce` och `/halsa/dreo-cruiser-pro-eller-honeywell-ht900e` | `honeywell ht900e` |
| `lib/packkuber-eller-kompressionspasar.ts` | Generisk `/sommar/resa`-hublänk ERSATT med → `/sommar/resa/kabinvaska-eller-ryggsack` | ny resa-URL |
| `lib/hangande-necessar-eller-genomskinlig-necessar.ts` | +1 länk → `/sommar/resa/kabinvaska-eller-ryggsack` | ny resa-URL |
| `lib/sommar.ts` (fit-flip mikrofiberhandduk) | +2 länkar → `/sommar/resa/mikrofiberhandduk-eller-frottehandduk` och `/sommar/resa/frottehandduk` | nya resa-URL:er |
| `lib/sommar.ts` (anortrek strandfilt) | +1 länk → `/sommar/resa/strandfilt-eller-strandhandduk` | ny resa-URL |
| `lib/sommar.ts` (lifewit kylväska) | +1 länk → `/sommar/resa/kabinvaska-eller-ryggsack` | ny resa-URL |
| `lib/sommar.ts` (anker-zolo powerbank) | +1 länk → `/sommar/resa/kabinvaska` | ny resa-URL |
| `app/skonhet/aftersun-eller-aloe-vera/page.tsx` | REGRESSION FIXAD: title/H1/intro återställda till bevisad "Aftersun"-form (se §3) | `aftersun`-queries |
| `lib/strandfilt-eller-strandhandduk.ts` | +1 länk → `/skonhet/aftersun-eller-aloe-vera` | aftersun-sidan |

**Inbound-täckning för de 6 nya resa-URL:erna (från ÄLDRE sidor):**
- `/sommar/resa/kabinvaska-eller-ryggsack` — packkuber-jämförelsen, necessär-jämförelsen, lifewit-kylväskan, /jamforelser-hubben (≥4)
- `/sommar/resa/mikrofiberhandduk-eller-frottehandduk` — fit-flip-sidan, /jamforelser-hubben (2)
- `/sommar/resa/strandfilt-eller-strandhandduk` — anortrek-sidan, /jamforelser-hubben (2)
- `/sommar/resa/kabinvaska` — anker-zolo-powerbank-sidan, startsidan (ProductDiscoveryLanding), /sommar/resa-hubben (3)
- `/sommar/resa/resryggsack` — startsidan (ProductDiscoveryLanding), /sommar/resa-hubben (2)
- `/sommar/resa/frottehandduk` — fit-flip-sidan, startsidan (ProductDiscoveryLanding), /sommar/resa-hubben (3)

---

## 2. Hoppade över (already optimal)

| Mål | Varför |
|---|---|
| `/skonhet/varmluftsborste` title/H1/intro | Redan exakt "Varmluftsborste bäst i test 2026" i title, H1 och första stycket — ingen ändring |
| `/skonhet/harolja-eller-varmeskydd` title/intro | Title "Hårolja med värmeskydd? Så väljer du" + frasen ordagrant i intro — ingen ändring |
| Inbound-länkar för harolja-eller-varmeskydd | `lib/leave-in-eller-harolja.ts` OCH `lib/harinpackning-eller-harolja.ts` länkade redan dit |
| Moroccanoil torrschampo metaTitle | Redan "…Light för ljust hår" — ingen ändring |
| Inbound från `/skonhet`-kategorisidan till torrschampo | Redaktionell länklista finns och länkar REDAN till `/skonhet/torrschampo` |
| `/sommar/resa/packkuber-eller-kompressionspasar` title | Ny sida som redan rankar — rördes inte (enligt instruktion) |
| Honeywell HT900E metaTitle | Innehåller redan "HT900E" |
| `lib/tornflakt-eller-bordsflakt.ts` | Länken till dreo-eller-honeywell-jämförelsen fanns redan |
| Fläkt-filerna (`luftkylare-eller-flakt` m.fl.) | Inga resa-länkar tillagda (irrelevant kluster, enligt instruktion) |
| Freshness-stämpel på aftersun-sidan | Ingen `ratingCheckedAt`/"vid vår kontroll" finns på sidan — inget att bumpa |
| Sommar-hubben → aftersun-jämförelsen | Länkar redan (lib/sommar.ts rad ~5249 och ~5327) |

---

## 3. Aftersun-utredningen (−59% impressions)

**Trolig förklaring, rankad:**

1. **On-site-regression (mest trolig, FIXAD).** Commit `fa3a4dd` (2026-06-24, "align titles/meta") bytte title från *"Aftersun eller aloe vera - vad behöver huden efter solen? | Elins val"* till *"After sun eller aloe vera? | Elins val"* och H1/intro på samma sätt. Det tog bort (a) ettords-stavningen **"aftersun"** — den form svenskar faktiskt söker på — från title, H1 och intro (den fanns kvar bara i URL:en), och (b) long-tail-frasen *"vad behöver huden efter solen"*. Tidsfönstret matchar exakt: ändringen ligger precis före mätperioden där impressions föll −59%. **Åtgärd:** title, H1, breadcrumb och intro återställda till bevisad form; båda stavningarna ("aftersun" + "after sun") finns nu på sidan.
2. **Delvis kannibalisering (bidragande).** `/guider/after-sun-eller-fuktkram` publicerades 2026-06-25 (dagen efter title-bytet) med title "After sun eller vanlig fuktkräm…". Den delar huvudtermen "after sun" och kan ha tagit en del av impressions för breda after sun-queries. Ingen åtgärd nu — sidorna svarar på olika frågor; bevaka i GSC efter title-återställningen.
3. **Säsong/SERP-skifte (minst trolig).** Juli är högsäsong för aftersun i Sverige och fläktguiden gick +675% samtidigt — generell säsongsnedgång förklarar inte −59%. Vädret kan variera vecka till vecka, men mönstret pekar på title-bytet.

**Kannibaliseringsskanning:** inga av de NYA sidorna (strandfilt/frotté/resa) nämner "aftersun"/"after sun" i title eller H1 — verifierat. Övriga träffar (`/skonhet/aftersun` produktsida, `/guider/after-sun-eller-fuktkram`) är avsiktliga sidor med egna intents.

**Skickade förbättringar:** title/H1/intro-återställning + ny inbound-länk från strandfilt-eller-strandhandduk ("Efter solen").

---

## 4. Request indexing — klistra in i GSC URL Inspection

Innehållet ändrades på dessa URL:er:

```
https://smartartai.se/skonhet/varmluftsborste
https://smartartai.se/skonhet/hartork
https://smartartai.se/skonhet/varmluftsborste-eller-fon
https://smartartai.se/skonhet/heatless-lockar-eller-locktang
https://smartartai.se/skonhet/harolja-eller-varmeskydd
https://smartartai.se/skonhet/torrschampo
https://smartartai.se/guider/tyst-flakt-sovrum
https://smartartai.se/sommar/resa/packkuber-eller-kompressionspasar
https://smartartai.se/sommar/resa/hangande-necessar-eller-genomskinlig-necessar
https://smartartai.se/sommar/resa/mikrofiberhandduk
https://smartartai.se/sommar/resa/strandfilt
https://smartartai.se/sommar/resa/kylvaska
https://smartartai.se/sommar/resa/powerbank
https://smartartai.se/sommar/resa/kabinvaska
https://smartartai.se/sommar/resa/resryggsack
https://smartartai.se/sommar/resa/strandfilt-eller-strandhandduk
https://smartartai.se/skonhet/aftersun-eller-aloe-vera
```

> Prioritera: `aftersun-eller-aloe-vera` (regressionsfixen) och `tyst-flakt-sovrum` (+675%-sidan) först.
