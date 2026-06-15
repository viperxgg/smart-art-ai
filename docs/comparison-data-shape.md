# Comparison data shape

New comparison index cards are driven by `lib/comparisons.ts`.

Add one `ComparisonEntry` per hub:

```ts
{
  slug: "short-stable-id",
  title: "Product A vs Product B",
  shortTitle: "Readable card title",
  category: "traning" | "halsa" | "skonhet",
  categoryLabel: "Träning",
  href: "/category/comparison",
  description: "One sentence: the practical difference between the picks.",
  productSlugs: ["product-a-slug", "product-b-slug"],
  badges: ["Mest värde", "Golvvänligt", "Nybörjarvänligt"],
}
```

Rules:

- `productSlugs` must point to products in `lib/products.ts`.
- Badges must be factual and derived from specs, positioning, visible marketplace signals, or honest caveats.
- The hub/spoke page structure still lives in the route folder, for example `app/traning/kettlebell/*`.
- Product JSON-LD must not include `offers`, hardcoded prices, or Amazon `aggregateRating`.
- Affiliate CTAs must keep `rel="sponsored nofollow"`.
