# Restaurant Reposition QA

## Tested

- Homepage loaded locally at `http://localhost:3000`.
- Viewports checked with Playwright:
  - 390px mobile
  - 768px tablet
  - 1440px desktop
- Navigation anchors checked:
  - `#home`
  - `#smart-menu`
  - `#menu-design`
  - `#examples`
  - `#process`
  - `#pricing`
  - `#contact`
- CTA/link scan checked for empty or placeholder links.
- Contact modal opened from the homepage CTA.
- Required contact inputs checked.
- Temporary screenshots generated during QA and removed during cleanup:
  - `.qa-restaurant-home-desktop.png`
  - `.qa-restaurant-home-mobile.png`
  - `.qa-restaurant-home-tablet.png`
  - `.qa-restaurant-home-mobile-smart-menu.png`
  - `.qa-restaurant-home-mobile-examples.png`
  - `.qa-restaurant-home-mobile-process.png`
  - `.qa-restaurant-home-mobile-pricing.png`
  - `.qa-restaurant-home-contact-modal.png`

## Passed

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Homepage returns HTTP 200 locally.
- One H1 is present.
- No horizontal overflow detected at tested viewport widths.
- No browser console warnings or page errors in the final mobile pricing-section check.
- All required homepage anchors exist.
- No `href="#"` or empty CTA links were found.
- Contact modal opens successfully and contains required name/email inputs.
- Existing important routes were preserved.

## Notes

- Full-page screenshots can show blank below-the-fold bands before scrolling because reveal animations use viewport-triggered Framer Motion. Scrolled viewport checks confirmed the sections render when reached.
- The page uses existing local restaurant/menu demo media instead of adding new licensed photography. Custom food/interior photography would improve final polish.
- The shared contact modal remains in the older dark Smart Art AI visual style, but it is wired and functional.
- The homepage is Swedish-first per the repositioning plan. English locale still routes, but visible homepage copy is currently Swedish-focused.

## Manual Review Still Recommended

- Review final copy with a Swedish native speaker for sales tone.
- Replace demo imagery/video with final licensed restaurant visuals before production launch.
- Test on a physical iPhone and Android device for video autoplay behavior and touch feel.
