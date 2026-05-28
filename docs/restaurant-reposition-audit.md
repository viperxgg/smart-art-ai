# Restaurant Reposition Audit

## Current Content Summary

The previous homepage positioned Smart Art AI as a broad AI and digital operations company. The main narrative focused on AI systems, operational clarity, SaaS workflows, and multiple products. Nord Smart Menu was present, but it shared attention with StädSync AI and general automation messaging.

Existing important routes remain in the project:

- Homepage: `/`
- Nord Smart Menu page: `/nord-smart-menu`
- StädSync AI pages: `/stadsync-ai`
- Blog: `/blog`
- Demo routes: `/demo/menu/[restaurant]`, `/demo/admin`, `/demo/kitchen`

## What Will Change

The homepage is now restaurant-first. The primary offer is Nord Smart Menu, supported by digital menu design and print-ready menu design.

The homepage direction changes to:

- Swedish restaurant, café, bar, and hotel audience.
- Premium QR menu and digital menu experience.
- One-time project delivery instead of subscription-first SaaS language.
- Clear CTAs: book a menu review, open demo, request price proposal, and email the current menu.
- Warm restaurant palette and imagery instead of broad AI/operations visuals.

The global marketing shell is preserved for secondary pages, but the homepage uses its own restaurant-focused navbar and footer to avoid mixed positioning.

## Risks

- Existing product pages still use the older dark AI visual system, so the transition between homepage and older pages may feel visually different.
- The homepage uses existing local demo imagery/video assets. More polished custom food photography would improve final visual quality.
- The contact modal still uses the shared Smart Art AI modal styling, which is functional but darker than the new homepage identity.
- English routing remains supported, but the homepage copy is intentionally Swedish-first per the repositioning plan.

## Implementation Priorities

1. Replace homepage with restaurant-first content architecture.
2. Preserve working routes and demo CTAs.
3. Centralize restaurant design tokens in global CSS without breaking the existing dark system.
4. Keep all homepage CTAs wired to real anchors, demo URLs, mail links, or the existing contact form.
5. Run lint, typecheck, build, and responsive checks after implementation.
