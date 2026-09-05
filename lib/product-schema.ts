import { getPageLastModified } from "@/lib/page-dates";
import type { Product } from "@/lib/products";
import { buildElinReviewNode } from "@/lib/scores";
import { siteConfig } from "@/lib/site";

// Shared JSON-LD builders for product-bearing pages.
//
// Google rejects a Product node that carries none of `offers`,
// `review` or `aggregateRating` ("Either offers, review or
// aggregateRating should be specified"). We never emit `offers`
// (no prices anywhere on the site by editorial policy), so every
// Product node MUST carry Elin's editorial review. If a product has
// no editorial score there is no valid review to emit, and the safe
// answer is to emit no Product node at all rather than an invalid one.

const categoryLabels: Record<Product["category"], string> = {
  traning: "Träning",
  halsa: "Hälsa",
  skonhet: "Skönhet",
  resa: "Resa",
};

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export type ProductNodeInput = {
  product: Product;
  /** Site-relative path of the page that owns this product entity. */
  url: string;
  /** Compliance-checked description. Falls back to the product summary. */
  description?: string;
  category?: string;
  /**
   * Aggregate of genuine on-site user reviews. Never Amazon's numbers —
   * those stay plain text in the review-signal section.
   */
  aggregateRating?: { ratingValue: number; reviewCount: number } | null;
};

/**
 * Returns a schema.org Product node that is guaranteed to satisfy
 * Google's product-snippet requirements, or null when the product has
 * no editorial score to review.
 */
export function buildProductNode({
  product,
  url,
  description,
  category,
  aggregateRating,
}: ProductNodeInput): Record<string, unknown> | null {
  const review = buildElinReviewNode(product.slug);

  if (!review && !aggregateRating) {
    return null;
  }

  const canonical = absoluteUrl(url);
  // Elin's review carries no date of its own; the page's sitemap date is the
  // last time the review page was touched, which is the honest datePublished
  // we can state (and the same date the page shows as "Uppdaterad").
  const lastModified = getPageLastModified(url);
  const datedReview =
    review && lastModified ? { ...review, datePublished: lastModified } : review;

  return {
    "@type": "Product",
    "@id": `${canonical}#product`,
    name: product.title,
    url: canonical,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    ...(product.asin ? { sku: product.asin } : {}),
    image: absoluteUrl(product.image),
    description: description ?? product.summary,
    category: category ?? categoryLabels[product.category],
    ...(datedReview ? { review: datedReview } : {}),
    ...(aggregateRating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: aggregateRating.ratingValue,
            reviewCount: aggregateRating.reviewCount,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
  };
}

/** Same as buildProductNode but as a standalone document (with @context). */
export function buildProductSchema(
  input: ProductNodeInput,
): Record<string, unknown> | null {
  const node = buildProductNode(input);

  return node ? { "@context": "https://schema.org", ...node } : null;
}

export type ComparisonListInput = {
  pageUrl: string;
  name: string;
  items: readonly ProductNodeInput[];
};

/**
 * ItemList of the products a comparison page decides between. Each entry
 * is a full Product node linking to that product's own review page — the
 * "all-in-one page" list pattern Google documents for ItemList.
 * Returns null when none of the products carries an editorial score.
 */
export function buildProductListSchema({
  pageUrl,
  name,
  items,
}: ComparisonListInput): Record<string, unknown> | null {
  const nodes = items
    .map((item) => buildProductNode(item))
    .filter((node): node is Record<string, unknown> => node !== null);

  if (nodes.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absoluteUrl(pageUrl)}#jamforelse`,
    name,
    numberOfItems: nodes.length,
    itemListElement: nodes.map((node, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: node,
    })),
  };
}
