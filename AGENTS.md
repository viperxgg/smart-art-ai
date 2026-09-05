# AGENTS.md

## Project mission
This repository is for building premium, modern, responsive websites and web applications.

## Priorities
- Preserve design consistency across the whole project
- Prioritize clean architecture over quick hacks
- Keep code readable and production-ready
- Focus on performance, accessibility, and responsive behavior
- Reuse components whenever possible
- Do not introduce random styling patterns

## UI/UX rules
- The interface must feel premium, clear, and modern
- Maintain consistent spacing, typography, and visual hierarchy
- Avoid clutter
- Keep mobile responsiveness excellent
- Animations should be subtle and purposeful
- Challenge any request that pushes product visuals toward exaggerated claims, random styling, copied marketplace layouts, or aggressive sales pressure
- For exact product thumbnails or product-card media, start from the real supplied product image. Do not rely on free image generation when product shape/model accuracy matters.
- Inspect generated visual assets before presenting them. If the product identity is wrong twice, stop generating and switch to manual composition from real product images.

## Engineering rules
- Inspect related files before editing
- Fix root causes, not only surface issues
- Avoid unnecessary dependencies
- Keep naming clean and maintainable

## Verification
- Run build after meaningful changes
- Check affected pages on mobile and desktop
- Watch for layout shifts and broken interactions

## Communication
- Explain changes clearly
- Prefer the safest production-ready option first

## Agent operating rules — Claude Fable 5.1 (added 2026-09-02)
These exist because Fable 5.1 behaves differently from earlier models on this repo.

- **Edit in place. Never rewrite a whole file for a small change.** Fable 5.1 tends to
  emit whole-file rewrites. This repo carries ~30 uncommitted files of the owner's work;
  a whole-file rewrite silently destroys them. Make targeted edits and show the diff.
- **Batch independent tool calls.** Fable 5.1 no longer batches parallel tool calls
  reliably. Issue independent reads/searches together in one turn, not one per turn.
- **`lib/sommar.ts` and the other `SHARED_LIB_MODULES` are near-identical object soup.**
  Match a pick by full-line compare (`l == '    href: "/x",'`), never `startswith()` —
  that also matches the 8-space `relatedLinks` lines.
- **Verify by fetching the rendered `<title>`, never by reading the diff.** A passing
  typecheck and build prove nothing here: three edits once shipped onto the wrong
  products with both green.
- **`SHARED_LIB_MODULES` move no sitemap dates by design.** A visible change to a page
  backed by one needs a dated one-line comment at the top of its `page.tsx`.
- **Sitemap order is fixed:** commit content -> `npm run sitemap` -> commit the sitemap
  as its own commit. The generator reads per-file `git log`, so running it first always
  reports "unchanged" — true and misleading.
- **Kill any stale `next start` before verifying anything.** A stale server serves a
  stale build and gives misleading results.
- **Never `git reset --hard`, `git clean`, or `git push` in this repo.**
- **Normalise `\r\n` before calling a file modified** — `autocrlf` is on and most
  "modified" is line-ending noise.
- **The Elin chat model is fixed at `claude-haiku-4-5-20251001`.** Do not upgrade it.
  Frontier models cost ~10x per token for no user-visible gain on product Q&A.
  (Owner decision, 2026-09-02.)
- **No publishing, no external sends, no spending** without explicit per-time approval.
