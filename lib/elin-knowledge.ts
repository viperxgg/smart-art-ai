import { categoryProductGroups } from "@/lib/categoryGroups";
import { getPriceTier, type PriceTier } from "@/lib/price-tier";
import {
  activeProductCategories,
  getProductBySlug,
  getProductPageHref,
  products,
  type Product,
  type ProductCategorySlug,
} from "@/lib/products";

export type ElinKnowledgeProduct = {
  slug: string;
  title: string;
  brand: string;
  category: ProductCategorySlug;
  priceTier: PriceTier;
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

type ElinKnowledgeOptions = {
  category?: ProductCategorySlug;
};

const activeCategorySlugs = new Set(activeProductCategories.map((category) => category.slug));

function toKnowledgeProduct(product: Product): ElinKnowledgeProduct {
  return {
    slug: product.slug,
    title: product.title,
    brand: product.brand,
    category: product.category,
    priceTier: getPriceTier(product),
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
  };
}

function getGroupedProducts(category?: ProductCategorySlug) {
  const categories = category ? [category] : activeProductCategories.map((item) => item.slug);
  const seenSlugs = new Set<string>();
  const groupedProducts: Product[] = [];

  for (const categorySlug of categories) {
    for (const group of categoryProductGroups[categorySlug] ?? []) {
      for (const slug of group.productSlugs) {
        if (seenSlugs.has(slug)) {
          continue;
        }

        const product = getProductBySlug(slug);
        if (!product || !activeCategorySlugs.has(product.category)) {
          continue;
        }

        groupedProducts.push(product);
        seenSlugs.add(product.slug);
      }
    }
  }

  const remainingProducts = products.filter(
    (product) =>
      !seenSlugs.has(product.slug) &&
      activeCategorySlugs.has(product.category) &&
      (!category || product.category === category),
  );

  return [...groupedProducts, ...remainingProducts];
}

export function getElinKnowledge(opts: ElinKnowledgeOptions = {}): ElinKnowledgeProduct[] {
  return getGroupedProducts(opts.category).map(toKnowledgeProduct);
}
