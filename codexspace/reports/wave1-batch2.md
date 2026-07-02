# Wave 1 / Batch 2

Status: passed verification and committed on `wave-build-2026-07`.

Added 2 product pages and 2 comparisons:
- Products: Jean & Len saltvattenspray, Midea MFS400 golvfläkt.
- Comparisons: `/skonhet/saltvattenspray-eller-texturspray`, `/halsa/golvflakt-eller-tornflakt`.

Verification:
- `npm run lint` passed.
- `npm run typecheck` passed.
- `npm run build` passed.
- All new routes returned HTTP 200.
- 390px viewport overflow check passed on all new routes.
- Mojibake grep was clean.
- Affiliate links matched `INTAKE-STATUS.md`.

Compliance notes:
- Saltvattenspray copy avoids UV/sun claims and points curl users to curl products.
- Golvfläkt copy treats dB/noise as product and buyer information, not an in-house test result.
- Portabel AC remains skipped.
