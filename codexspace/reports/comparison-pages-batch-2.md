# Comparison pages batch 2

## Added routes
- `/skonhet/aftersun-eller-aloe-vera`
- `/skonhet/harinpackning-eller-harolja`
- `/traning/kettlebell-eller-hantlar`
- `/traning/foam-roller-eller-massagepistol`
- `/halsa/mini-projektor-eller-stjarnprojektor`

## Data files
- `lib/aftersun-eller-aloe-vera.ts`
- `lib/harinpackning-eller-harolja.ts`
- `lib/kettlebell-eller-hantlar.ts`
- `lib/foam-roller-eller-massagepistol.ts`
- `lib/mini-projektor-eller-stjarnprojektor.ts`

## Indexing and surfacing
- Added all five entries to `lib/comparisons.ts`.
- Added all five routes to `app/sitemap.ts`.
- Added category comparison cards on `/skonhet`, `/traning`, and `/halsa` via `components/CategoryComparisonSections.tsx`.

## Verification
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Local 200/content checks for all five new routes, `/jamforelser`, `/skonhet`, `/traning`, and `/halsa`.
- Forbidden first-hand testing phrase scan returned no matches.
