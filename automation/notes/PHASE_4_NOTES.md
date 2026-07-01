# Phase 4 Notes

## What changed

- Added the server-side `search_products` tool for Elin. It searches the real `getElinKnowledge()` catalog by title, brand, summary, verdict, and badges, with optional category and relative price-tier filters.
- Reworked `/api/elin` streaming into a bounded agentic loop:
  - simple answers still use a single model stream;
  - `search_products` can run internally through `tool_result`;
  - `visa_rekommendation` remains the terminal tool;
  - every path still emits SSE `delta`, `meta`, `error`, and `done` events with the existing outward contract.
- Kept slug validation server-side before rendering cards.
- Added budget and need filter chips near the Elin input. Selected chips prepend a short scope to the next sent question, then reset.
- Added lightweight preference memory in `localStorage` under `elin-prefs-v1`, limited to skin type, hair length, budget tier, and category. The API receives it as a `preferences` data field, not as user instructions.
- Updated the product-card Amazon CTA to `Se aktuellt pris på Amazon` while preserving `rel="noopener noreferrer sponsored"`.

## Verification run

- `npm run typecheck`
- `npm run lint`
- `npm run build`

All three passed.

## Manual test steps

1. Start locally with `npm run dev`.
2. Open `http://localhost:3000/fraga-elin`.
3. Select `Budget` and `Skönhet`, type `Jag har känslig torr hud, vad passar?`, and send.
4. Confirm the visible user message starts with a short selected-filter prefix.
5. In DevTools, confirm `localStorage.getItem("elin-prefs-v1")` contains only small preference fields such as `skinType`, `budget`, and `category`.
6. Send a second question without chips, for example `Finns det något mildare?`, and confirm the request body includes `preferences` as data.
7. Click `Rensa` and confirm both chat history and `elin-prefs-v1` are cleared.
8. Confirm any Amazon card CTA says `Se aktuellt pris på Amazon` and the link still uses `rel="noopener noreferrer sponsored"`.
9. Test the SSE endpoint directly while the dev server is running:

```powershell
curl.exe -N -X POST "http://localhost:3000/api/elin" `
  -H "Content-Type: application/json" `
  -d "{\"messages\":[{\"role\":\"user\",\"content\":\"[Valda filter: budget: budgetnivå, område: skönhet] Jag har känslig torr hud, vad passar?\"}],\"preferences\":{\"skinType\":\"känslig\",\"budget\":\"budget\",\"category\":\"skonhet\"}}"
```

Expected SSE shape:

```text
data: {"type":"delta","value":"..."}
data: {"type":"meta","produkter":[...],"foljdfragor":[...]}
data: {"type":"done"}
```
