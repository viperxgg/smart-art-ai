import { categoryProductGroups } from "@/lib/categoryGroups";
import { getProductBySlug, getProductPageHref, type Product } from "@/lib/products";

export type ElinKnowledgeProduct = {
  slug: string;
  title: string;
  brand: string;
  badges: string[];
  summary: string;
  evaluation: {
    verdict: string;
  };
  specs: {
    label: string;
    value: string;
  }[];
  amazonReviewSignal: {
    ratingSummary: string;
    highlights: string[];
    cautions: string[];
  };
  pageHref: string;
};

const hudvardGroup = categoryProductGroups.skonhet.find(
  (group) =>
    group.title === "Hudvård" ||
    group.productSlugs.includes("cosrx-snail-mucin-essence"),
);

export function getHudvardKnowledge(): ElinKnowledgeProduct[] {
  return (hudvardGroup?.productSlugs ?? [])
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is Product => Boolean(product))
    .map((product) => ({
      slug: product.slug,
      title: product.title,
      brand: product.brand,
      badges: product.badges,
      summary: product.summary,
      evaluation: {
        verdict: product.evaluation.verdict,
      },
      specs: product.specs.map((spec) => ({
        label: spec.label,
        value: spec.value,
      })),
      amazonReviewSignal: {
        ratingSummary: product.amazonReviewSignal.ratingSummary,
        highlights: product.amazonReviewSignal.highlights,
        cautions: product.amazonReviewSignal.cautions,
      },
      pageHref: getProductPageHref(product),
    }));
}
