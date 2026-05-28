# Codex CLI Execution Plan — Smart Art AI Restaurant Website Repositioning

## Project Goal
Transform the current Smart Art AI website from a broad AI/operations SaaS brand into a focused restaurant-facing website centered on **Nord Smart Menu** as the core one-time-payment product, supported by **digital food menu design** and **print-ready menu design** services.

The final website must feel like a modern global restaurant technology studio: warm, appetizing, premium, friendly, animated, and conversion-focused for Swedish restaurants, cafés, bars, hotels, and hospitality businesses.

---

## Global Execution Rules for Codex CLI

- Do not remove working routes unless explicitly instructed.
- Do not introduce fake buttons, fake forms, or fake integrations.
- Every CTA must point to an existing route, mail link, booking link, or intentionally implemented section anchor.
- Keep the site production-safe and buildable at every phase.
- Use TypeScript-safe React components.
- Use existing project conventions whenever available.
- Prefer small reusable components over large single-page blocks.
- Avoid generic AI-agency language. The website must now communicate restaurant menu systems and menu design.
- Keep Swedish as the main public-facing language unless the current project already supports multilingual routing.
- Preserve SEO hygiene: title, description, canonical, Open Graph, robots, sitemap if these files exist.
- Before modifying, inspect the current file structure and identify the framework version, styling system, routing approach, and reusable components.
- After each major section, run available checks such as `npm run lint`, `npm run typecheck`, and `npm run build` when scripts exist.

---

# 1. Current Website Audit

**Agent:** Analyst  
**Skill:** Site Audit  
**Mission:** Inspect the current Smart Art AI website and identify what must be kept, removed, rewritten, or repositioned for the restaurant niche.

## Tasks

1. Inspect the project structure:
   - `src/app` or `app`
   - `src/components` or `components`
   - `src/lib`
   - `public`
   - global CSS files
   - SEO files such as `sitemap.ts`, `robots.ts`, `metadata`, `layout.tsx`, `lib/seo.ts`, or similar.

2. Identify current homepage sections and map them into one of these categories:
   - Keep and rewrite
   - Keep but redesign visually
   - Move to secondary page
   - Remove from homepage
   - Replace completely

3. Current positioning problem to solve:
   - The homepage currently presents Smart Art AI as a broad AI/digital operations company.
   - The new homepage must position the company as a specialized restaurant menu experience studio.
   - Nord Smart Menu must become the primary offer.
   - StädSync AI and broad AI consulting must not dominate the homepage.

4. Audit the current navigation and propose new navigation:
   - Home
   - Smart Menu
   - Menu Design
   - Examples
   - Pricing
   - Process
   - Contact

5. Audit all existing CTAs:
   - Replace vague CTAs like “Discover Solutions” with restaurant-specific CTAs.
   - Recommended CTAs:
     - `Boka gratis menygenomgång`
     - `Se Smart Menu-demo`
     - `Få prisförslag`
     - `Se designexempel`

6. Produce a short internal audit note in the repository:
   - Create or update: `docs/restaurant-reposition-audit.md`
   - Include:
     - Current content summary
     - What will change
     - Risks
     - Implementation priorities

## Acceptance Criteria

- A clear audit document exists.
- No code has been broken.
- The homepage conversion direction is clearly changed from broad AI SaaS to restaurant menu services.

---

# 2. New Content Architecture

**Agent:** Content Architect  
**Skill:** Information Architecture  
**Mission:** Build the new page structure, section order, message hierarchy, and Swedish conversion copy for restaurant owners.

## Tasks

Create the new homepage content architecture in this order:

## 2.1 Hero Section

Purpose: instantly communicate the new specialty.

Recommended Swedish copy:

**Eyebrow:**  
`För restauranger, caféer & hotell i Sverige`

**Headline:**  
`Smarta menyer som får maten att kännas lika bra digitalt som vid bordet.`

**Subheadline:**  
`Vi bygger premium QR-menyer, digitala beställningsflöden och tryckklara meny designer — anpassade för riktiga restauranger, inte generiska mallar.`

**Primary CTA:**  
`Boka gratis menygenomgång`

**Secondary CTA:**  
`Se Smart Menu-demo`

Hero content requirements:
- Warm restaurant image/video background.
- Floating mobile menu UI mockup.
- Small trust chips:
  - `Engångsbetalning`
  - `Svensk restaurang-UX`
  - `Digitalt + tryck`
  - `QR-meny & köksvy`

## 2.2 Problem Section

Title:
`Din meny är inte bara en lista — den är en del av upplevelsen.`

Problem cards:
1. `PDF-menyer känns gamla`
2. `Personalen tappar tid på enkla frågor`
3. `Generiska QR-menyer sänker känslan`
4. `Tryckta menyer blir snabbt inaktuella`

Tone:
Friendly, practical, non-aggressive.

## 2.3 Core Offer Section

Title:
`En komplett menylösning — byggd runt din restaurang.`

Create three offer cards:

### Card 1 — Smart Menu System
- QR menu
- Mobile-first menu experience
- Menu categories
- Dish pages
- Allergens and descriptions
- Admin/kitchen workflow if available
- Optional waiter call / order flow depending on current product readiness

### Card 2 — Digital Menu Design
- Visual menu layout
- Food storytelling
- Dish hierarchy
- Premium digital menu sections
- Seasonal updates as separate service

### Card 3 — Print-Ready Menu Design
- A4/A3 menu files
- Table menu cards
- Café/bar menus
- QR inserts
- Print-ready PDF exports

## 2.4 One-Time Payment Section

Title:
`Ingen månadskostnad. Ingen bindning. En tydlig engångsleverans.`

Explain:
- The main offer is delivered as a one-time project.
- Support, future updates, and seasonal redesigns can be purchased separately.
- This reduces friction for small Swedish restaurants.

Must avoid:
- SaaS-heavy pricing language.
- Subscription-first messaging.

## 2.5 Demo Experience Section

Title:
`Visa gästen menyn innan de ens frågar.`

Content blocks:
- Guest scans QR
- Menu opens instantly
- Dishes are easy to browse
- Restaurant updates content without reprinting
- Kitchen/admin view can be shown if implemented

Add visual sequence:
1. QR scan
2. Menu browsing
3. Dish detail
4. Order / request / contact action
5. Kitchen/admin screen if production-ready

## 2.6 Before / After Section

Title:
`Från rörig meny till minnesvärd matupplevelse.`

Implement comparison:
- Before: flat PDF/menu screenshot mockup
- After: cinematic mobile menu UI

Use slider or side-by-side cards.

## 2.7 Restaurant Types Section

Title:
`Byggt för olika typer av restauranger.`

Cards:
- Café
- Lunchrestaurang
- Fine dining
- Pizzeria
- Bar
- Hotellrestaurang

Each card should have short tailored benefit copy.

## 2.8 Process Section

Title:
`Så enkelt går det till.`

Steps:
1. `Vi går igenom din nuvarande meny`
2. `Vi skapar struktur, design och digital upplevelse`
3. `Du får QR-meny, designfiler och färdig lansering`
4. `Du kan köpa till uppdateringar vid behov`

## 2.9 Pricing Preview Section

Do not show exact final prices unless pricing exists in the codebase.

Use package framing:

### Start
For small cafés and simple menus.

### Restaurant
For restaurants that need a full digital menu experience.

### Premium
For restaurants that need digital menu + print design + stronger visual identity.

CTA:
`Be om prisförslag`

## 2.10 Final CTA Section

Title:
`Vill du att din meny ska kännas modernare redan den här månaden?`

CTA:
`Boka gratis menygenomgång`

Secondary:
`Skicka din nuvarande meny till oss`

## Acceptance Criteria

- New content architecture exists in the homepage implementation.
- The page clearly sells restaurant menu systems and menu design.
- The copy is Swedish, specific, and conversion-oriented.
- Broad AI language is minimized.

---

# 3. Visual Design System

**Agent:** UI Designer  
**Skill:** Design System / Color & Typography  
**Mission:** Replace the current broad AI/eco-tech feeling with a warm, premium, appetizing restaurant design system.

## Tasks

## 3.1 Color Palette

Implement a warm restaurant-focused palette using CSS variables or Tailwind theme tokens.

Recommended palette:

```css
--background: #fff8ef;
--surface: #fffdf8;
--surface-warm: #f7eadb;
--text-main: #241711;
--text-muted: #6f5c4d;
--accent-tomato: #d94f30;
--accent-saffron: #f3a533;
--accent-basil: #496b45;
--accent-wine: #5a1f2f;
--border-warm: rgba(84, 52, 34, 0.16);
--shadow-soft: 0 24px 80px rgba(60, 32, 18, 0.14);
```

Use dark premium sections selectively:

```css
--dark-restaurant: #160f0b;
--dark-card: #241711;
--gold-soft: #d9ad62;
```

## 3.2 Typography

Use typography that feels editorial and premium.

Rules:
- Headings: elegant display feel.
- Body: highly readable modern sans-serif.
- Avoid overly futuristic SaaS typography.

If fonts are already configured, do not add unnecessary font dependencies.
If adding Google fonts is acceptable in the project, use:
- Display: `Playfair Display` or `Cormorant Garamond`
- Body: `Inter`, `Manrope`, or existing brand font

## 3.3 Layout Style

Design principles:
- Large food imagery.
- Rounded premium cards.
- Soft shadows.
- Organic spacing.
- Sticky navigation with transparent-to-solid transition.
- Mobile-first layout.
- Hero with layered visual depth.
- Alternating warm and dark sections.

## 3.4 Image Direction

Use local assets if available. If not, create placeholders with clear filenames in `public/images/restaurant/`:

- `hero-restaurant.jpg`
- `dish-closeup-01.jpg`
- `chef-plating.jpg`
- `menu-phone-mockup.png`
- `printed-menu-table.jpg`
- `restaurant-interior-warm.jpg`

Do not use copyrighted images from famous restaurants.
Only use properly licensed assets or neutral placeholders.

## 3.5 Visual Motifs

Add subtle food-inspired details:
- steam-like gradient blobs
- plate-circle shapes
- herb-line dividers
- soft paper texture
- menu card borders
- QR pattern accent blocks

Avoid:
- robots
- generic AI icons
- cold neon cyber design
- excessive tech dashboards in the hero

## Acceptance Criteria

- Design tokens are centralized.
- The visual identity feels restaurant-first.
- The site feels warm, premium, friendly, and appetizing.
- Mobile design remains clean and readable.

---

# 4. Animation & Interaction System

**Agent:** Frontend Animator  
**Skill:** GSAP / Framer Motion / CSS Animations  
**Mission:** Add restaurant-inspired animations that feel premium and lively without hurting performance.

## Tasks

## 4.1 Animation Library Decision

Inspect current dependencies:
- If `framer-motion` already exists, use Framer Motion.
- If `gsap` already exists, use GSAP for scroll-based effects.
- If neither exists, prefer CSS animations and IntersectionObserver first.
- Add a new dependency only if necessary and compatible with the project.

## 4.2 Global Motion Rules

Implement:
- Fade-up on section entrance.
- Staggered entrance for cards.
- Subtle parallax for food images.
- Button hover micro-interactions.
- Mobile menu smooth open/close.
- Reduced motion support via `prefers-reduced-motion`.

## 4.3 Hero Animation

Hero animation requirements:
- Background food/interior image has slow zoom or video-loop feel.
- Mobile menu mockup floats subtly.
- Trust chips enter with stagger.
- CTA buttons have tactile hover.
- Optional animated QR scan line on QR mockup.

## 4.4 Scroll-Triggered Sections

Add reusable component:
- `Reveal.tsx`

Expected API:
```tsx
<Reveal delay={0.1}>
  <SectionContent />
</Reveal>
```

Add reusable component:
- `StaggerGroup.tsx`

Expected use:
```tsx
<StaggerGroup>
  {items.map(...)}
</StaggerGroup>
```

## 4.5 Parallax Food Image Component

Create:
- `ParallaxImage.tsx`

Requirements:
- Works safely on client side.
- Does not break SSR.
- Uses lightweight transform on scroll.
- Disables motion for reduced-motion users.

## 4.6 Micro-Interactions

Apply to:
- CTA buttons
- Pricing cards
- Offer cards
- Before/after slider if implemented
- Navigation links

Interactions should be tasteful:
- Small lift
- Warm glow
- Arrow movement
- Image scale on hover

Do not create distracting bouncing animations.

## Acceptance Criteria

- Animations work without layout shift.
- Reduced motion is respected.
- No hydration errors.
- Lighthouse performance remains acceptable.
- Animations support the food/restaurant feeling, not generic SaaS motion.

---

# 5. Component Build Plan

**Agent:** Frontend Developer  
**Skill:** React / Next.js / Tailwind  
**Mission:** Build reusable, typed, maintainable components for the new restaurant homepage.

## Tasks

Create or update components in a structure similar to:

```txt
src/components/restaurant/
  RestaurantHero.tsx
  ProblemCards.tsx
  OfferCards.tsx
  OneTimePayment.tsx
  DemoExperience.tsx
  BeforeAfterMenu.tsx
  RestaurantTypeGrid.tsx
  ProcessSteps.tsx
  PricingPreview.tsx
  FinalCTA.tsx
  RestaurantNavbar.tsx
  RestaurantFooter.tsx
  Reveal.tsx
  StaggerGroup.tsx
  ParallaxImage.tsx
```

Adjust paths to match the existing project structure.

## 5.1 RestaurantHero

Props:
```ts
type RestaurantHeroProps = {
  primaryCtaHref: string;
  secondaryCtaHref: string;
};
```

Must include:
- Eyebrow
- H1
- Subheadline
- CTA buttons
- Trust chips
- Visual mockup area
- Warm background image/video layer

## 5.2 ProblemCards

Must include four problem cards:
- PDF menus feel outdated
- Staff lose time
- Generic QR menus feel cheap
- Printed menus get outdated

Use friendly copy and warm icons.

## 5.3 OfferCards

Three cards:
- Smart Menu System
- Digital Menu Design
- Print-Ready Menu Design

Each card:
- Title
- Short explanation
- Feature bullets
- Visual detail/icon
- CTA anchor

## 5.4 OneTimePayment

Must clearly communicate:
- One-time project fee
- No monthly subscription for the core offer
- Optional future updates/support

Important:
Do not promise unlimited support.
Do not mention exact prices unless configured.

## 5.5 DemoExperience

Build a visual flow:
1. Scan QR
2. Browse menu
3. View dish
4. Send order/request/contact
5. Restaurant receives structured view

Use mock interface cards.

## 5.6 BeforeAfterMenu

Implement either:
- CSS-only side-by-side comparison
- Slider if already available
- Lightweight custom slider if safe

Do not add heavy dependency for this feature.

## 5.7 RestaurantTypeGrid

Cards for:
- Café
- Lunchrestaurang
- Fine dining
- Pizzeria
- Bar
- Hotellrestaurang

Each card must explain how the offer fits that category.

## 5.8 ProcessSteps

Four steps:
1. Menu review
2. Structure/design
3. Build/launch
4. Optional updates

## 5.9 PricingPreview

Package cards:
- Start
- Restaurant
- Premium

Each package must have:
- Target customer
- Included scope summary
- CTA

No fake checkout.
No fake “Buy now” unless payment exists.

## 5.10 FinalCTA

Strong closing conversion block.

Copy:
`Redo att göra din meny modernare?`

CTA:
`Boka gratis menygenomgång`

Optional secondary:
`Maila oss din nuvarande meny`

## Acceptance Criteria

- Components are modular.
- Props are typed.
- Styling is consistent.
- No broken imports.
- Components can be assembled into the homepage cleanly.

---

# 6. Page Assembly & Routing

**Agent:** Integration Engineer  
**Skill:** Page Assembly & Routing  
**Mission:** Assemble the new restaurant-first website while preserving project stability, routing, metadata, and existing product pages where appropriate.

## Tasks

## 6.1 Homepage Assembly

Replace the current homepage content order with:

1. RestaurantNavbar
2. RestaurantHero
3. ProblemCards
4. OfferCards
5. OneTimePayment
6. DemoExperience
7. BeforeAfterMenu
8. RestaurantTypeGrid
9. ProcessSteps
10. PricingPreview
11. FinalCTA
12. RestaurantFooter

## 6.2 Navigation Anchors

Set anchor IDs:

```txt
#home
#smart-menu
#menu-design
#examples
#process
#pricing
#contact
```

## 6.3 Existing Product Pages

Keep existing pages if they exist:
- Nord Smart Menu page
- StädSync AI page
- Blog page

But homepage priority must point to Nord Smart Menu and menu design.

StädSync AI should move to footer or secondary product link, not main hero.

## 6.4 Contact CTA Behavior

Use one of the following depending on existing project setup:
- existing booking page
- contact section anchor
- `mailto:hello@smartartai.se`
- existing consultation route

Do not create fake form submission.
If a contact form exists, ensure it is actually wired.

## 6.5 Metadata Update

Update homepage metadata:

Suggested title:
`Nord Smart Menu | Digitala menyer & menydesign för restauranger i Sverige`

Suggested description:
`Premium QR-menyer, digitala beställningsflöden och tryckklara menydesigner för svenska restauranger, caféer och hotell. Engångsbetalning utan månadsabonnemang.`

Open Graph:
- Use restaurant-focused title.
- Use warm restaurant image if available.

## 6.6 Language Consistency

Primary public copy should be Swedish.
Avoid mixing English and Swedish in visible UI unless brand-specific.

## Acceptance Criteria

- Homepage is fully restaurant-focused.
- All nav links work.
- All CTAs work.
- Existing important pages remain accessible.
- Metadata reflects the new niche.

---

# 7. Performance & Optimization

**Agent:** Performance Engineer  
**Skill:** Lighthouse Optimization  
**Mission:** Ensure the new image-heavy and animation-rich website remains fast, stable, and production-ready.

## Tasks

## 7.1 Image Optimization

- Use `next/image` if the project is Next.js.
- Add width/height to all images.
- Use compressed assets.
- Prefer `.webp` or `.avif` when possible.
- Lazy-load below-the-fold images.
- Preload only the hero image if appropriate.

## 7.2 Animation Performance

- Animate transform and opacity only when possible.
- Avoid animating layout properties such as width, height, top, left.
- Use `will-change` sparingly.
- Disable heavy parallax on mobile if it hurts performance.

## 7.3 Bundle Control

- Do not add GSAP and Framer Motion together unless already used and justified.
- Prefer one animation approach.
- Remove unused imports.
- Avoid large UI libraries for a small homepage redesign.

## 7.4 Core Web Vitals

Check:
- LCP: hero image/video must not be too heavy.
- CLS: all media must have reserved space.
- INP: animations and interactions must not block input.

## 7.5 Video Background Rules

If adding hero video:
- Use short muted loop.
- Add poster image.
- Do not autoplay heavy remote video.
- Provide fallback image.
- Disable or simplify on mobile if needed.

## 7.6 SEO Performance

- Confirm one H1 only.
- Use semantic sections.
- Add descriptive alt text.
- Ensure metadata is updated.
- Confirm sitemap/robots do not accidentally block homepage.

## Acceptance Criteria

- Build passes.
- Page remains fast despite visuals.
- No layout shift from images.
- No heavy dependency bloat.
- Mobile experience is smooth.

---

# 8. Final QA & Testing

**Agent:** QA Agent  
**Skill:** Visual & Functional Testing  
**Mission:** Verify that the final website is visually polished, functional, responsive, and aligned with the restaurant niche.

## Tasks

## 8.1 Functional QA

Test:
- Navigation links
- CTA buttons
- Contact links/forms
- Mobile menu
- Pricing CTA
- Demo CTA
- Footer links
- Existing product page links

No button may be decorative unless clearly non-clickable.

## 8.2 Responsive QA

Test breakpoints:
- 375px mobile
- 430px large mobile
- 768px tablet
- 1024px laptop
- 1440px desktop

Check:
- Hero readability
- CTA stacking
- Image cropping
- Card spacing
- Navigation usability
- No horizontal overflow

## 8.3 Visual QA

Confirm:
- The site feels warm and appetizing.
- The brand no longer feels like generic AI software.
- Food imagery and menu UI are visually dominant.
- The one-time payment positioning is clear.
- Menu design service is visible, not hidden.

## 8.4 Animation QA

Check:
- Scroll animations trigger once or smoothly.
- No stutter on mobile.
- Reduced motion works.
- Parallax does not break layout.
- No hydration mismatch.

## 8.5 Content QA

Check Swedish copy for:
- Natural tone
- No overpromising
- No misleading claims
- No fake client logos
- No false certifications
- Clear restaurant audience

## 8.6 Build QA

Run available commands:

```bash
npm run lint
npm run typecheck
npm run build
```

If any script does not exist, record it in the QA notes instead of failing silently.

Create final QA note:

```txt
docs/restaurant-reposition-qa.md
```

Include:
- What was tested
- What passed
- What still needs manual review
- Any missing assets
- Any dependency changes

## Acceptance Criteria

- Site builds successfully.
- Homepage is responsive.
- All CTAs work.
- Visual direction matches restaurant-focused strategy.
- QA notes are saved.

---

# Final Delivery Checklist

Codex CLI must complete the project only when all items are true:

- [ ] Homepage repositioned from broad AI operations to restaurant menu services.
- [ ] Nord Smart Menu is the primary offer.
- [ ] Digital menu design and print menu design are visible service lines.
- [ ] One-time payment positioning is clear.
- [ ] Visual identity is warm, appetizing, modern, and premium.
- [ ] Scroll animations and micro-interactions are implemented tastefully.
- [ ] No fake buttons or fake forms exist.
- [ ] Existing important routes are preserved.
- [ ] Metadata is updated.
- [ ] Mobile design is clean.
- [ ] Performance is acceptable.
- [ ] Lint/typecheck/build pass when available.
- [ ] Audit and QA notes are created.

---

# Recommended Commit Message

```bash
git add .
git commit -m "feat: reposition homepage for restaurant smart menu services"
```

---

# Codex CLI Final Instruction

Execute this plan step by step. Do not skip audit, metadata, CTA validation, responsive testing, or final QA. If a requested asset or dependency is missing, use a safe placeholder and document it in `docs/restaurant-reposition-qa.md`. Preserve production stability at all times.
