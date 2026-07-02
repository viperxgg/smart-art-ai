# Wave 1 / Batch 1

Status: passed verification and committed on `wave-build-2026-07`.

Added 5 product pages, 2 hubs, and 2 comparisons:
- Products: Sportconic löpband, CITYSPORTS gåband, The INKEY List Retinol Serum, CeraVe Resurfacing Retinol Serum, Physicians Formula Butter Bronzer.
- Hubs: `/traning/lopband`, `/skonhet/retinolserum`.
- Comparisons: `/traning/gaband-eller-lopband`, `/skonhet/retinol-eller-bakuchiol`.

Verification:
- `npm run lint` passed.
- `npm run typecheck` passed.
- `npm run build` passed.
- All new routes returned HTTP 200.
- 390px viewport overflow check passed on all new routes.
- Mojibake grep was clean.
- Affiliate links matched `INTAKE-STATUS.md`.

Compliance notes:
- Retinol pages use cosmetic wording only.
- Bronzer page centers the shade/finish caveat.
- No hardcoded prices or first-hand testing claims were added.
