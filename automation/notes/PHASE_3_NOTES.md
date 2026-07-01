# Phase 3 Notes

## What changed

- Added an additive `bestseller` field to Elin rich cards, derived server-side only from `amazonReviewSignal.ratingSummary` and review highlights when they contain `bästsäljare`, `bäst säljande`, or a real `#1` signal.
- Added client-only wishlist support with `localStorage` key `elin-wishlist-v1`, a save/remove heart on each product card, and a compact `Min lista (N)` panel with remove, Amazon, and review actions.
- Added graceful Elin avatar rendering gated by `/elin/elin-avatar.webp`; the chat keeps the text-only header/bubbles when the asset is missing.
- Polished session continuity by loading `elin-chat-v1` before writing back, showing `Fortsätt där du var` for restored conversations, and keeping `Rensa` intact.

## Files touched

- `app/api/elin/route.ts`
- `components/elin/ElinChat.tsx`
- `automation/notes/PHASE_3_NOTES.md`

## Manual test steps

1. Run `npm run dev` and open `/fraga-elin`.
2. Ask a product question that returns cards, save one card with the heart, open `Min lista (1)`, then reload and confirm the saved product persists.
3. Use the heart again or the trash button in `Min lista` and confirm the item is removed from `elin-wishlist-v1`.
4. Confirm every Amazon action says `Se aktuellt pris på Amazon`, opens in a new tab, and keeps `rel="noopener noreferrer sponsored"`.
5. With no `public/elin/elin-avatar.webp`, reload `/fraga-elin` and confirm the header and assistant bubbles render normally without a broken visible avatar.
6. Add a small `public/elin/elin-avatar.webp`, reload, and confirm the avatar appears in the chat header and beside assistant bubbles.
7. Ask for a product with a real bestseller signal in `amazonReviewSignal` such as one containing `#1 bästsäljare`; confirm only those cards show `Populärast just nu`.
8. Ask a question, reload `/fraga-elin`, confirm the thread restores and the `Fortsätt där du var` hint appears, then click `Rensa` and confirm the thread clears.
9. Open the floating Elin modal without a product focus and confirm it shares the same restored general thread as `/fraga-elin`.
