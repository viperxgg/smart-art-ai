# Visual Agent Setup

## 1. Visual Design Agent Role

For Smart Art AI / Nord App, I will act as a senior visual design agent with these responsibilities:

- Senior UI/UX Designer
- Frontend Design Engineer
- Conversion-focused SaaS Designer
- Accessibility Reviewer
- Mobile Polish Specialist

The scope is visual identity, layout polish, UI consistency, responsiveness, motion refinement, and premium SaaS presentation. I will not change business logic, routes, APIs, database behavior, forms, environment variables, or core product functionality unless explicitly requested.

## 2. Required Skills To Apply

While working on this project, I will apply these skills:

- Visual hierarchy improvement
- Spacing and layout cleanup
- Typography refinement
- Component consistency
- CTA improvement
- Mobile responsiveness
- Accessibility contrast check
- Animation and motion polish
- Landing page conversion design
- Scandinavian premium SaaS design

## 3. Safety Rules

These rules must be followed strictly:

- Do not rewrite the whole app unless necessary.
- Do not break existing routes.
- Do not modify API routes.
- Do not touch database or schema files.
- Do not remove working content without reason.
- Do not change form or email logic.
- Do not introduce new libraries unless clearly justified.
- Prefer the existing styling architecture.
- Run lint/build after meaningful visual changes.
- Keep edits scoped to presentation files and reusable UI components where possible.
- Preserve localization behavior and existing Swedish/English route handling.

## 4. Website Visual Audit

### Current styling architecture

- The project uses Next.js App Router with TypeScript.
- Styling is primarily Tailwind CSS v4 utility classes in TSX files.
- `app/globals.css` imports Tailwind and defines a small theme layer with brand colors, fonts, background, foreground, gradient accent, glass blur, `.glass-panel`, and `.text-gradient`.
- No CSS Modules were found.
- No `tailwind.config.*` file was found; Tailwind v4 theme customization is currently centralized in `app/globals.css`.
- Shared visual components include `Navbar`, `Footer`, `ContactFormModal`, `CtaButtons`, `DemoPreviewPanel`, `DemoSection`, and demo route components.
- Existing motion is mainly in `ContactFormModal` through `framer-motion`; most other animations are hover/transition utility classes.
- Icons use `lucide-react`.
- The project already has premium dark UI foundations but uses several competing accent systems: warm cream/gold, cyan, amber, and the declared purple/blue/cyan brand gradient.

### Files inspected first

- `package.json`
- `app/globals.css`
- `app/[locale]/layout.tsx`
- `app/[locale]/page.tsx`
- `app/[locale]/blog/page.tsx`
- `app/[locale]/demo/admin/page.tsx`
- `app/[locale]/demo/kitchen/page.tsx`
- `app/[locale]/demo/menu/[restaurant]/page.tsx`
- `components/layout/LocaleShell.tsx`
- `components/ui/Navbar.tsx`
- `components/ui/Footer.tsx`
- `components/ui/ContactFormModal.tsx`
- `components/restaurant/RestaurantHomePage.tsx`
- `components/restaurant/RestaurantLandingPage.tsx`
- `components/restaurant/CtaButtons.tsx`
- `components/restaurant/DemoSection.tsx`
- `components/demo/DemoMenuClient.tsx`
- `components/demo/DemoPreviewPanel.tsx`
- `components/demo/DemoRouteSwitcher.tsx`
- `components/blog/BlogBody.tsx`
- `lib/site.ts`
- `lib/restaurant-pages.ts`

### Visual strengths

- The project already has a dark, premium direction with glass-like cards, restrained borders, large headings, and mobile-aware grids.
- CTAs are already abstracted through `CtaButtons`, which is a good base for consistency.
- Demo surfaces exist and give the product real visual proof.
- The route structure supports marketing pages, blog pages, and live demos without needing visual changes to routing.
- Touch targets are generally large enough in CTAs and demo controls.

### Weak sections visually

- The homepage and landing pages share similar section rhythms, so some sections feel repetitive instead of intentionally paced.
- Several cards use near-identical `bg-white/[0.03]`, borders, and radius values without enough hierarchy between primary product proof, supporting points, and secondary copy.
- The visual identity is split between warm restaurant tones and the requested neon cyan/purple SaaS direction.
- Some proof areas still feel like placeholders or wireframe compositions, especially in `RestaurantLandingPage` proof placeholders.
- Blog listing and restaurant landing pages are visually serviceable but generic compared with the homepage and demo surfaces.

### Inconsistent spacing

- Section padding varies between `py-10`, `py-14`, `py-16`, and `py-20` without a clearly visible rhythm.
- Card padding varies across `p-4`, `p-5`, `p-6`, `p-8`, and `md:p-10`; this is not inherently wrong, but the hierarchy is not always clear.
- Rounded corners range from `rounded-2xl` to `rounded-[2.4rem]`; the result feels less systemized.
- Some grids shift between `md`, `lg`, and `xl` breakpoints in ways that may create uneven tablet layouts.

### Weak CTA areas

- Primary CTAs are visually consistent but rely heavily on cream fill, which does not fully match the requested cyan/purple SaaS identity.
- Some sections repeat CTAs without enough change in surrounding context, reducing conversion emphasis.
- Secondary CTAs sometimes compete with primary CTAs due to similar size and placement.
- Link-style CTAs inside product cards are subtle and could be easier to scan.

### Mobile issues to verify

- Hero headings use very large type and tight tracking; mobile wrapping needs screenshot verification.
- `Navbar` mobile menu has large cards and CTAs, but text with uppercase tracking may become cramped in Swedish.
- `DemoMenuClient` header combines restaurant/table, call waiter, and locale toggle; this may crowd on small phones.
- Comparison tables in `RestaurantLandingPage` use fixed grid columns and may overflow or become hard to read on mobile.
- Product preview images need viewport checks to ensure they do not dominate too much vertical space.

### Typography problems

- Typography is strong but somewhat overuses `font-black`, uppercase eyebrow text, and wide tracking.
- Some uppercase labels use tracking values near `0.3em`, which can become hard to read in compact UI.
- Heading scale is bold, but hierarchy between H2 and H3 can blur because many cards also use large heavy text.
- Body copy color is mostly readable, but some `text-white/38`, `text-white/42`, and `text-white/45` labels need contrast checks.

### Sections that feel generic

- Problem, benefits, FAQ, and related-link sections repeat similar card styles.
- Blog listing cards use the same broad dark-card pattern as restaurant landing cards.
- Landing page proof placeholders communicate structure but not enough premium product specificity.
- Final CTA panels are clear but could feel more distinctive as conversion moments.

### Places needing stronger product explanation

- Homepage hero preview can more clearly connect guest menu, admin, and kitchen as one operating system.
- The "More than a regular QR menu" section is useful but could better show what changes for owner, guest, and staff.
- Pricing could better explain why Starter vs Pro matters visually.
- The live demo entry points could better signal what the user will see before clicking.
- Restaurant landing pages could show stronger before/after or workflow logic without changing copy structure.

## 5. Implementation Plan

### Phase 1: Design tokens, colors, spacing, typography

- Refine `app/globals.css` tokens around carbon black, cyan, purple, surface layers, borders, and focus states.
- Standardize repeated surface, card, and text treatment patterns using existing Tailwind utility architecture.
- Keep Tailwind v4 and avoid migration to CSS Modules.
- Reduce one-off color drift where safe.

### Phase 2: Hero section polish

- Improve homepage and restaurant landing hero hierarchy.
- Strengthen product preview composition and conversion focus.
- Keep current route/content structure intact.
- Ensure hero remains fast, responsive, and readable on mobile.

### Phase 3: Cards, buttons, and CTA consistency

- Unify CTA hierarchy across `CtaButtons`, nav, pricing, demo hooks, and final CTA panels.
- Standardize card radius, borders, hover states, and shadows.
- Improve focus states and visible affordances.

### Phase 4: Product explanation sections

- Make guest/admin/kitchen explanation easier to scan.
- Improve demo preview sections and proof cards.
- Strengthen product differentiation without removing current content.
- Replace generic card repetition with clearer visual hierarchy.

### Phase 5: Mobile optimization

- Check homepage, landing pages, blog, contact modal, and demo views on mobile and tablet widths.
- Fix wrapping, overflow, CTA stacking, comparison tables, and dense Swedish text.
- Preserve large touch targets.

### Phase 6: Final QA

- Run lint and build after meaningful changes.
- Check affected pages on mobile and desktop.
- Verify modal behavior, nav behavior, demo links, and localized routes.
- Confirm no API routes, form submission logic, database/schema, or environment files changed.

## 6. Files To Inspect First Before Major Changes

Before applying major visual changes, inspect or re-check:

- `app/globals.css`
- `app/[locale]/layout.tsx`
- `app/[locale]/page.tsx`
- `components/layout/LocaleShell.tsx`
- `components/ui/Navbar.tsx`
- `components/ui/Footer.tsx`
- `components/ui/ContactFormModal.tsx`
- `components/restaurant/RestaurantHomePage.tsx`
- `components/restaurant/RestaurantLandingPage.tsx`
- `components/restaurant/CtaButtons.tsx`
- `components/restaurant/DemoSection.tsx`
- `components/demo/DemoPreviewPanel.tsx`
- `components/demo/DemoMenuClient.tsx`
- `components/demo/DemoRouteSwitcher.tsx`
- `components/blog/BlogBody.tsx`
- `app/[locale]/blog/page.tsx`
- `app/[locale]/demo/admin/page.tsx`
- `app/[locale]/demo/kitchen/page.tsx`
- `package.json`

## First 10 Recommended Visual Improvements

1. Align the color system around carbon black surfaces with cyan/purple accents while preserving warm tones only where they support restaurant hospitality.
2. Standardize card radius, border opacity, and glass treatment so cards feel designed as one system.
3. Improve CTA hierarchy by making primary, secondary, demo, and inline CTAs visually distinct but consistent.
4. Tighten section rhythm with a clearer spacing scale across homepage, landing pages, blog, and final CTA areas.
5. Refine hero sections to make product value visible faster: guest menu, admin control, and kitchen flow in one system.
6. Improve mobile hero type wrapping and reduce risk from oversized headings and wide tracking.
7. Rework comparison-table presentation for mobile readability without changing the data.
8. Make product proof sections feel less placeholder-like and more like premium SaaS product previews.
9. Add consistent focus-visible states and check low-opacity text contrast.
10. Polish subtle motion using the existing transition/framer-motion setup without adding new animation libraries.
