# Wave 4

Status: passed verification and ready to commit on `wave-build-2026-07`.

Added 10 product pages, 2 hubs, 4 comparisons, and 1 flagship cardio guide:
- Products: Ultrasport F-Bike, Zipro motionscykel, PROIRON skivstang set, Gorilla skivstang, MERACH roddmaskin, Xiaomi Smart Band 10, bemaxx pusselmatta, TYMO utratningsborste, Gihali hardiffusor, Color Wow Dream Coat.
- Hubs: `/traning/motionscykel`, `/traning/skivstang`.
- Comparisons/guides: `/traning/hopfallbar-eller-kompakt-motionscykel`, `/traning/2-i-1-eller-riktig-skivstang`, `/traning/gaband-motionscykel-eller-roddmaskin`, `/skonhet/utratningsborste-eller-plattang`, `/skonhet/tiktok-produkter-som-haller`.

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
- MERACH copy avoids fat-burning and muscle-percentage claims.
- Xiaomi copy avoids medical/health-data claims.
- Ultrasport max 100 kg and Zipro size caveats are explicit.
- TYMO and Color Wow stay in cosmetic hair-result language.
- Gihali diffuser caveat keeps expectations to fit, technique and routine.

Skipped items: none.
