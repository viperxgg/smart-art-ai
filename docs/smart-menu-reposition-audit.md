# Smart Menu Reposition Audit

## Files Inspected

- `app/[locale]/page.tsx`
- `app/[locale]/layout.tsx`
- `app/[locale]/om-oss/page.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `components/restaurant-home/*`
- `components/restaurant/RestaurantHomePage.tsx`
- `components/ui/Navbar.tsx`
- `components/ui/Footer.tsx`
- `components/ui/ContactFormModal.tsx`
- `lib/site.ts`
- `lib/seo.ts`
- `lib/restaurant-pages.ts`
- `lib/stadsync-seo.ts`
- `lib/blog.ts`
- `public/homepage/*`
- `public/demo/previews/*`

## Homepage Sections Found

The active homepage now uses `components/restaurant-home/RestaurantRepositionHome.tsx` and is assembled as:

1. Restaurant-focused hero
2. One-time payment trust strip
3. Restaurant menu problem section
4. Core services section
5. Smart Menu demo flow
6. Menu design section
7. Before / after section
8. Restaurant types section
9. Process section
10. Pricing preview
11. Final CTA
12. Restaurant-focused footer

The old broad homepage component and old section directory were removed:

- `components/home_page_v2.tsx`
- `components/sections/*`

## Content Removed From Homepage

- StädSync AI product card and footer link.
- Multi-product positioning such as "two focused systems".
- Broad AI systems messaging.
- Generic automation and digital operations language.
- Subscription-first pricing and monthly pricing language.
- Old AI/SaaS navigation labels.

## Content Rewritten

- Homepage copy now focuses on Nord Smart Menu, QR menus, digital menu design, print-ready menu design, and restaurant menu consulting.
- Homepage metadata now targets restaurant menu search intent.
- Shared marketing navigation and footer now point to Smart Menu homepage anchors.
- Nord Smart Menu page pricing now uses one-time project proposal language instead of monthly subscription cards.
- Contact modal now has a restaurant visual variant for Smart Menu CTAs.

## Routes To Preserve

The following routes are preserved even if they are no longer promoted from the homepage:

- `/`
- `/nord-smart-menu`
- `/blog`
- `/demo/menu/[restaurant]`
- `/demo/admin`
- `/demo/kitchen`
- `/stadsync-ai`
- `/stadsync-ai/[slug]`

## Risks

- StädSync AI still exists as a separate preserved route and in related SEO/blog files, but it is not promoted from the homepage or primary navigation.
- Existing demo images are reused. Final branded food/interior photography would improve polish.
- Some older secondary restaurant pages still use the darker product styling, so they may not feel as warm as the new homepage.
