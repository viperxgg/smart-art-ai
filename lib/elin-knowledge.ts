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
import { getEditorialScore } from "@/lib/scores";

export type ElinKnowledgeProduct = {
  slug: string;
  title: string;
  brand: string;
  category: ProductCategorySlug;
  priceTier: PriceTier;
  poang: number;
  badges: string[];
  summary: string;
  pageHref: string;
};

type ElinKnowledgeOptions = {
  category?: ProductCategorySlug;
};

const activeCategorySlugs = new Set(activeProductCategories.map((category) => category.slug));

function oneLineSummary(value: string) {
  const normalized = value.replace(/\s+/g, " ").trim();
  return normalized.length > 140 ? `${normalized.slice(0, 137).trimEnd()}...` : normalized;
}

function toKnowledgeProduct(product: Product): ElinKnowledgeProduct {
  const score = getEditorialScore(product.slug);

  return {
    slug: product.slug,
    title: product.title,
    brand: product.brand,
    category: product.category,
    priceTier: getPriceTier(product),
    poang: score?.total ?? 0,
    badges: product.badges.slice(0, 3),
    summary: oneLineSummary(product.summary),
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
