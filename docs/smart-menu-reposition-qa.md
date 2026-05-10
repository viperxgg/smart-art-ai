# Smart Menu Reposition QA

## What Changed

- Repositioned the homepage around Nord Smart Menu only.
- Added restaurant-specific hero copy, trust strip, Smart QR Menu services, demo flow, menu design, before/after, restaurant type, process, pricing, and final CTA sections.
- Removed homepage promotion of StädSync AI and broad multi-product positioning.
- Updated shared marketing navigation and footer to point to Smart Menu homepage anchors.
- Reworked homepage and Nord Smart Menu page pricing to one-time project proposal messaging.
- Added a warm restaurant variant for the contact modal.
- Updated homepage and global metadata away from broad AI/SaaS language.

## Removed Or Repositioned Content

- Removed old broad homepage component: `components/home_page_v2.tsx`.
- Removed old broad homepage sections directory: `components/sections/*`.
- Removed StädSync AI from homepage navigation and footer.
- Preserved StädSync AI routes as secondary pages only.
- Removed monthly pricing display from the Nord Smart Menu page.

## Preserved Routes

- `/`
- `/nord-smart-menu`
- `/blog`
- `/demo/menu/[restaurant]`
- `/demo/admin`
- `/demo/kitchen`
- `/stadsync-ai`
- `/stadsync-ai/[slug]`

## Functional Tests

Checked with Playwright on:

- 375px
- 430px
- 768px
- 1024px
- 1440px

Passed:

- One H1 on homepage.
- Required anchors exist: `#home`, `#smart-menu`, `#menu-design`, `#examples`, `#process`, `#pricing`, `#contact`.
- No horizontal overflow at tested breakpoints.
- Mobile menu opens and shows navigation.
- Contact/pricing CTA opens the existing contact modal.
- Contact modal has required name and email inputs.
- No empty `href` or `href="#"` links found.
- No browser console warnings or page errors during QA.
- Homepage body does not show StädSync AI.
- Homepage body does not show broad AI agency phrases.
- Homepage pricing does not show monthly price cards.
- Nord Smart Menu page no longer shows `119 SEK`, `219 SEK`, `/månad`, or `/month`.

## Scripts

- `npm run lint` passed.
- `npm run typecheck` passed.
- `npm run build` passed.

## Known Missing Assets

- The homepage still uses existing local demo/restaurant video and product preview imagery.
- Final production polish would benefit from custom licensed restaurant food/interior photography.

## Manual Follow-Up

- Review Swedish conversion copy with a native speaker before paid traffic.
- Confirm whether preserved StädSync AI routes should remain indexed long term or be noindexed later.
- Test the final production page on physical iOS and Android devices for video autoplay and touch feel.
