# Selected product records

`lib/selected-product-data.json` is the canonical source for partner-backed product records. Runtime modules project their legacy public interfaces from this file; do not add the same product by hand to the offer, image, Amazon or homepage modules.

## Record schema

Every record has one canonical `id`, `name` and `variant`, plus:

- `selected`: whether the record renders through `SelectedProductPage`.
- `offer`: merchant identity, exact destination URL, placement, link kind, program/channel identifiers when applicable, the dated price observation and its source, and the availability observation date.
- `image`: permitted local asset, original source, dimensions, alt text, credit, SHA-256, merchant, permission scope and review date.
- `amazon` (optional): exact-match ASIN evidence, link-only status and identity check date. It never supplies a manual numeric Amazon price.
- `home` (optional): curated/candidate kind, reviewed and available flags, `addedAt`, public copy and optional campaign end.
- `hubGroup` for selected records: `lyko`, `skonhet` or `vardag`.
- the existing editorial fields for selected guides: route, metadata, answer, decision support, facts, steps, FAQs, sources and related routes.

`lib/selected-product-records.ts` validates the TypeScript-facing shape. These modules are projections and must not become independent registries:

- `lib/merchant-offers.ts`
- `lib/partner-image-assets.ts`
- `lib/amazon-offers.ts`
- `lib/home-products.ts`
- `lib/selected-products.ts`

## Add one selected product

1. Add one complete canonical record to `lib/selected-product-data.json`.
2. Add one route wrapper at `app/<category>/<slug>/page.tsx` using `getSelectedProduct` and `SelectedProductPage`.
3. Add the exact permitted image at the record's local `image.src`; calculate and store its SHA-256, dimensions, original source, credit, permission scope and review date.
4. In the private operations repository, add the exact product/merchant row to `company/price-review/products.json`. Add an Amazon row as well when the record contains an exact Amazon match.
5. Run `node scripts/test-selected-products.cjs`, the remaining `scripts/test-*.cjs`, and from the operations root `node tools/check-price-register.cjs --app-root smartart`.
6. Commit the record, route and asset before generating the sitemap. Then run `npm run sitemap`, review that only the new or visibly edited route dates changed, commit the generated sitemap separately, and run `npm run sitemap` again to prove a clean tree.
7. Run lint, typecheck and a production build. Verify the rendered guide, structured data, affiliate attributes and responsive layout before requesting release approval.

## Validator invariants

`scripts/test-selected-products.cjs` enforces:

- unique canonical IDs and unique selected paths/titles;
- a canonical record for every selected-product route and a route for every selected record;
- an existing image whose bytes match the canonical SHA-256;
- complete merchant destination, dated price, currency and source;
- no unsupported rating, live-stock or testimonial fields;
- resolvable related routes and sitemap coverage;
- a private price-register row for every merchant offer and every exact Amazon match;
- existing behavioral boundaries for campaigns, member prices, Lyko tracking destinations, canonical route reuse and unconfirmed Amazon matches.

Run `node scripts/test-selected-products.cjs --fixture-matrix` to exercise the validator against a temporary fake record. The fixture is created outside the repository and removed after proving clear failures for a missing route, wrong image hash, missing price-register row and missing sitemap entry.
