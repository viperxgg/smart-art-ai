import type { Product } from "@/lib/products";

export type PriceTier = NonNullable<Product["priceTier"]>;

export const priceTierDisplay = {
  budget: { label: "Budget", icon: "💰" },
  mellan: { label: "Mellan", icon: "💰💰" },
  premium: { label: "Premium", icon: "💰💰💰" },
} satisfies Record<PriceTier, { label: string; icon: string }>;

// No current, like-for-like price comparison has been reviewed. Historical
// Product.priceTier and brand/marketing language are not price evidence.
// Keep those historical fields intact; publish no classifications from them.
// Any future entry needs dated prices for exact variants and a defined cohort.
const reviewedPriceTiers = new Map<string, PriceTier>();

export function getPriceTier(product: Product): PriceTier | null {
  return reviewedPriceTiers.get(product.slug) ?? null;
}

export function getPriceTierDisplay(product: Product) {
  const tier = getPriceTier(product);
  return tier ? priceTierDisplay[tier] : null;
}
