# Phase 5 Notes

## What changed

- Added optional `steg` to Elin's terminal recommendation tool and RichCard payload.
- Routine requests now render product cards as ordered steps (`Steg 1`, `Steg 2`, `Steg 3`) and show `Spara hela rutinen`, which adds all routine products to `elin-wishlist-v1`.
- Added a protected server-rendered `/elin-insights` page from `elin_logs`.
  - Requires env `ELIN_INSIGHTS_TOKEN`.
  - Accepts `x-elin-insights-token`, `Authorization: Bearer`, or Basic auth password.
  - Returns 404 when missing, wrong, or when the env token is unset.
  - Declares `robots: { index: false, follow: false }`.
  - Verified `lib/sitemap-entries.ts` does not include `/elin-insights`.
- Added stable server-side A/B copy variant selection (`A` / `B`) via `elin_variant` cookie, with IP/user-agent hash fallback.
- Logged the variant to `elin_logs.variant` when available, with fallback to the old insert shape if the migration has not been run.
- Added human-run migration `supabase/elin_logs_variant.sql`.

## Files touched

- `app/api/elin/route.ts`
- `components/elin/ElinChat.tsx`
- `app/(admin)/elin-insights/page.tsx`
- `lib/elin-log.ts`
- `lib/supabaseServer.ts`
- `supabase/elin_logs_variant.sql`

## Verification run

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `rg -n "elin-insights" lib/sitemap-entries.ts app/sitemap.ts scripts/generate-sitemap.mjs` returned no matches.

All checks passed.

## Manual test steps

1. Add `ELIN_INSIGHTS_TOKEN=<strong local token>` to `.env.local` locally. Do not commit it.
2. Run `npm run dev`.
3. Open `http://localhost:3000/elin-insights` without a token and confirm it returns 404.
4. Confirm the protected page renders with a token:

```powershell
curl.exe -i "http://localhost:3000/elin-insights" -H "x-elin-insights-token: <strong local token>"
```

5. Confirm Bearer auth also works:

```powershell
curl.exe -i "http://localhost:3000/elin-insights" -H "Authorization: Bearer <strong local token>"
```

6. Send a routine request through Elin, for example: `Bygg en enkel budgetrutin för torr hud`.
7. Confirm returned cards are shown as `Steg 1`, `Steg 2`, etc.
8. Click `Spara hela rutinen` and confirm all routine products appear in `Min lista` and persist after reload.
9. Confirm Amazon actions still say `Se aktuellt pris på Amazon` and use `rel="noopener noreferrer sponsored"`.
10. Confirm the SSE endpoint sets or preserves a stable variant cookie:

```powershell
curl.exe -i -N -X POST "http://localhost:3000/api/elin" `
  -H "Content-Type: application/json" `
  -d "{\"messages\":[{\"role\":\"user\",\"content\":\"Bygg en enkel budgetrutin för torr hud\"}]}"
```

11. In Supabase SQL editor, run `supabase/elin_logs_variant.sql` manually.
12. Send another Elin request and confirm new `elin_logs` rows include `variant` as `A` or `B`.
13. Before the migration is run, confirm Elin responses still work and logging does not break user-facing chat.
