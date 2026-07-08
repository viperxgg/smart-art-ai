# CLAUDE-TASK: Dubbelsprint 2026-07-09 — Säsongsjämförelser + 2 videos

**Repo (site):** `C:\Users\azzam\Desktop\amazon progect\smartart` (main, in sync med origin)
**Repo (video):** `C:\Users\azzam\Documents\seo claude\video-projects\elin-sttropez`
**Executor:** Claude Code. Spår A och B är oberoende — kör A först (säsongen väntar inte), B direkt efter.

## VIKTIG KONTEXT (läs först)

- **60-målet är REDAN NÅTT: 61 live jämförelsesidor** (verifierat `grep -oE 'slug: "[^"]*-eller-[^"]*"' lib/comparisons.ts | wc -l` = 61 den 2026-07-08). Gamla "51/60"-räknaren i commits räknade bara generator-kampanjen. Detta sprint-spår handlar om **säsongs-toppning med hög värde**, INTE om att "nå 60".
- Innan du bygger NÅGON jämförelse: grep:a `lib/comparisons.ts` för slugen OCH kolla `lib/products.ts` för produkterna — 2026-07-07 höll vi på att bygga 3 dubbletter i onödan.
- Plan-filen med alla 60 förslag: `C:\Users\azzam\Documents\codex ad creater\output\content-strategy\strategies\20260706_60-jamforelser-plan.md`.
- GSC-läget (2026-07-08): fläkt-kluster pikar (+675% på tyst-flakt-guiden), resa-nischen nyss indexerad, avg position 28.9 → allt vi bygger nu ska vara HÖGSÄSONG (juli–aug).

## HÅRDA REGLER (samma som alltid — compliance)

1. **Aldrig** hårdkodade priser (`\d+ kr`) på sajten, aldrig `jag har testat/provade/använde själv` (Elin kurerar, testar aldrig själv), inga medicinska påståenden, ingen `SPF`, ordet **`solskydd` är bannat av linten**.
2. All copy svenska, Elins ärliga/modiga röst. Inga påhittade siffror — endast riktiga Amazon-betyg/antal från intaget och befintliga Elins poäng ur repot.
3. **Ingen Dyson-produkt/-länk** (Azzams beslut 2026-07-07). Rör inte hubbarna (`lib/varmluftsborste.ts`, `lib/flakt.ts` är hårdkodade för exakt 2 produkter).
4. Rör inte `app/sitemap.ts` (`git checkout -- app/sitemap.ts` vid radslutsbrus). `lib/sitemap-entries.ts` regenereras av prebuild — committa den om diffen är äkta lastModified-bumpar.
5. Efter varje fas: `npx tsc --noEmit` = 0. Före push: `npm run build` grönt + compliance-sweep på diffen (`git diff origin/main | grep -inE "\b[0-9]+[ .]?kr\b|jag har testat|jag provade|solskydd|SPF"` → tomt).
6. I videor: **"Annons"** synligt från sekund 1 (hörn + caption). Trust-ankare = Elins poäng + riktiga betyg/antal ("baserat på X recensioner") — ALDRIG "jag testade i 30 dagar"-format.

---

# SPÅR A — 4 säsongsjämförelser + 1 guide (sajten)

## FAS A0 — Amazon-intake (5 nya produkter, kräver Claude-in-Chrome + Amazon.se inloggad med SiteStripe)

Beprövat arbetsflöde (2026-07-07): för varje produkt — hitta bästsäljare/högt betyg på amazon.se, fånga affiliatelänk via SiteStripe (clipboard-hook: overrida `navigator.clipboard.writeText` → `window.__copiedLink` FÖRE klick på Get Link → Copy), notera EXAKT betyg + antal omdömen + nyckeldata, ta bild-URL:en direkt (add-product.mjs laddar ner/konverterar via ffmpeg — ingen manuell nedladdning). Sedan `node automation/add-product.mjs <spec.json>` per produkt.

| # | Ny produkt | För jämförelse | Kriterier |
|---|---|---|---|
| 1 | Olaplex No.3 Hair Perfector | A1 | Originalet, inte dupe; ta även kritiska omdömen (ärlig vinkel) |
| 2 | Hård kylbox (t.ex. bästsäljande passiv kylbox ~25–40L) | A2 | Kontrast mot Lifewit mjuk kylryggsäck (finns) |
| 3 | Midjeväska/löparbälte för löpning | A3 | Kontrast mot löparväst (finns i träning) |
| 4 | Magnetisk mobilhållare bil (MagSafe-typ) | A4 | Bästsäljare, hög betygsvolym |
| 5 | Mobilhållare ventilklämma (klassisk) | A4 | Billigare motpol till #4 |

Om SiteStripe/inloggning inte är tillgänglig i sessionen: STANNA efter A0-listan och be Azzam öppna amazon.se inloggad — gör INTE intake med gissade länkar/data.

## FAS A1–A4 — jämförelserna (en commit per sida)

Pipeline per sida: spec `automation/comparisons/<slug>.json` → `node automation/add-comparison.mjs <spec>` (genererar lib + page + comparisons.ts-post + Elin-thumbnail via headless Chrome/ffmpeg) → tsc → commit. Båda produkterna MÅSTE finnas i lib/products.ts först. routePrefix: resa-sidor = `sommar/resa`.

| Fas | Slug (förslag) | Vinkel | Säsongsmotiv |
|---|---|---|---|
| A1 | `olaplex-eller-harinpackning` | "Värt det?" — hypad No.3 vs L'Oréal Absolut Repair (finns). Elin vågar säga när billigare räcker | Solslitet sommarhår söks NU |
| A2 | `mjuk-kylvaska-eller-hard-kylbox` | Bära lätt vs hålla kallt länge; Lifewit (finns) vs ny kylbox | Strand/picknick-pik i juli |
| A3 | `loparvast-eller-midjevaska` | Bära vatten/mobil på sommarrundan; löparväst (finns) vs ny midjeväska | Sommarlöpning |
| A4 | `magnetisk-mobilhallare-eller-ventilklamma` | Road trip-säsong; MagSafe vs klämma | Semesterbilresor juli |

Varje sida: FAQ som svarar på VERKLIGA svenska frågor (kolla "Folk frågar också"), Elins ärliga "hoppa över om…"-vinkel, inbound-länkar från 2–3 relevanta äldre sidor (t.ex. A2 ← lifewit-picken + strandfilt-sidan; A3 ← träningskategorin; A4 ← billaddare-eller-powerbank).

## FAS A5 — guide: "Bagagevåg – värt det eller lita på flygbolaget?" (zero-intake, snabb)

Bagagevåg-produkten FINNS redan (`/sommar/resa/bagagevag`). Bygg som GuidePage (mönster: `app/guider/tyst-flakt-sovrum/page.tsx`), route `/guider/bagagevag-vart-det`. Vinkel: överviktsavgift-ångest, ärligt svar ("för lätta packare: hoppa över"). Länka till bagagevåg-produkten + packkuber-jämförelsen. Inbound: från kabinväska- och packkuber-sidorna (max 1 länk var).

**Spår A avslut:** build grönt → push (be Azzam om push godkänns inte automatiskt) → uppdatera "request indexing"-lista i rapporten.

---

# SPÅR B — 2 videos ("Bra eller bättre?"-motorn igång)

Batch-systemet: `video-projects/elin-sttropez/src/batch/` — `npm run studio:batch` / `npm run render:batch [id]`. `compare`-layouten är REN Remotion (inga Higgsfield-klipp behövs). OBS: ingen TTS är wirad i projektet — röst kräver HeyGen/ElevenLabs-session (se B3).

## FAS B1 — Video 1: Dreo Cruiser Pro eller Honeywell HT900E ⭐ (GSC-styrkt — båda söks just nu)

1. **Manus** enligt Galloway-reglerna i mallen ([[smartartai-tiktok-video-template]]): Audience of One (svensk i lägenhet utan AC, 30-gradersvecka), hook 0–3s "DU"-form, men/därför istället för features, näst-bäst först → bäst sist, last-dab-loop ("Bra… eller bättre? Nu vet du."). Hämta RIKTIGA Elins poäng + betyg/antal ur `lib/dreo-cruiser-pro-eller-honeywell.ts` + `lib/flakt.ts` — hitta inte på.
2. **Ny ad i `src/batch/data/ads.json`**: id `DreoVsHoneywell`, type `compare` (produktbilder från live-sajten: `https://www.smartartai.se/products/...`), scores = Elins poäng, tagline ärlig (t.ex. vem som ska HOPPA ÖVER premium). "Annons"-badge från sekund 1.
3. Render: `npm run render:batch DreoVsHoneywell` → verifiera stills. Kör `npm run shotlist` och spara Higgsfield-shotlist för framtida b-roll-uppgradering (generera INTE nu — MCP oautentiserad).
4. Captions via caption-overlay-pipelinen ([[smartartai-caption-overlay-pipeline]]: PNG-sekvens + ffmpeg prores_ks, INTE ProRes 4444 direkt).

## FAS B2 — Video 2: KabinvaskaChecklist — GÖR KLAR den (90% färdig)

`out/KabinvaskaChecklist.mp4` finns rendrerad med platshållar-avatar. Återstår: (a) HeyGen Photo Avatar-video av Elin (talking, manus finns i ads.json-captions; rama Elin center-lägre så höger kolumn är fri), (b) byt in `elinVideo`-fältet i ads.json → re-render. HeyGen-nedladdning: via appens Download-knapp (sidans mp4-länk 403:ar). Kräver HeyGen-session med auth — om oautentiserad: förbered allt (manus, timing, ram-instruktion) och lämna EXAKT körlista till Azzam.

## FAS B3 — röst + publicering (kräver Azzam/auth — förbered, blockera inte)

- Röst: ElevenLabs "Elin soren" (Stability ~45, Similarity ~75). Skriv exakta VO-manus (svenska, tidsatta per scen) för båda videorna → spara i `video-projects/elin-sttropez/scripts/vo/`.
- Publicering: Instagram via befintligt Zapier-flöde ([[smartartai-instagram-publishing]]), TikTok manuellt. Caption med "Annons" + länk i bio. Publicera Dreo-videon FÖRST (säsongen).

**Spår B avslut:** 2 mp4 i `out/` + VO-manus + shotlist + en TODO-lista med exakt vad som kräver auth-session.

---

## Rapport (skriv `automation/REPORT-dubbelsprint-2026-07-09.md` + i chatten)

- Tabell: byggda sidor/videor → status → vad som återstår (auth-beroenden).
- Intake-datat per ny produkt (betyg, antal, affiliatelänk-status).
- Request indexing-lista för Azzam.
- Det som hoppades över + varför.

## Success criteria

- 4 nya jämförelser + 1 guide live och gröna (tsc/build/compliance), varje ny sida med ≥2 inbound-länkar från äldre sidor.
- Inga dubbletter byggda (grep-koll dokumenterad i rapporten).
- DreoVsHoneywell.mp4 rendrerad + captions; KabinvaskaChecklist klar ELLER exakt auth-körlista levererad.
- VO-manus sparade för båda videorna. Rapport skriven.
