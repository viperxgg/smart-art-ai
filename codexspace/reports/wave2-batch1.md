# Wave 2 / Batch 1

Status: passed verification and ready to commit on `wave-build-2026-07`.

Added 9 product pages, 4 hubs, and 7 comparisons:
- Products: Beurer TL35, Beurer TL30, Beurer HD75, Emerio varmaflakt, DeLonghi oljefyllt element, Beurer LB200, Philips 600, Good Nite tyngdtacke, Beurer FW20.
- Hubs: `/halsa/dagsljuslampa`, `/halsa/luftfuktare-guide`, `/halsa/luftrenare-guide`, `/halsa/tyngdtacke-guide`.
- Comparisons: `/halsa/beurer-tl30-eller-tl35`, `/halsa/morka-morgnar`, `/halsa/ultraljud-eller-evaporativ-luftfuktare`, `/halsa/levoit-eller-philips-luftrenare`, `/halsa/ella-eller-good-nite-tyngdtacke`, `/halsa/varmeflakt-eller-oljefyllt-element`, `/halsa/elfilt-eller-varmedyna`.

Verification:
- `npm run lint` passed.
- `npm run typecheck` passed.
- `npm run build` passed.
- All new routes returned HTTP 200.
- 390px viewport overflow check passed on all new routes.
- Mojibake grep was clean for `lib`, `app`, and `components`.
- Affiliate links matched `INTAKE-STATUS.md`.

Compliance notes:
- Dagsljuslampa pages avoid medical, therapy and mood-treatment language.
- Philips 600 luftrenare avoids allergy, toxin and health-result language.
- Good Nite tyngdtacke avoids anxiety and sleep-treatment claims.
- Route deviations are intentional for existing root conflicts: `luftfuktare-guide`, `luftrenare-guide`, and `tyngdtacke-guide`.

Skipped items: none.
