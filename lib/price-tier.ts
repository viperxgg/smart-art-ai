import type { Product } from "@/lib/products";

export type PriceTier = NonNullable<Product["priceTier"]>;

const PREMIUM_BRANDS = [
  "dior",
  "olaplex",
  "salomon",
  "bowflex",
  "withings",
  "stanley",
  "manta",
  "rehband",
  "maria nila",
  "reebok",
];

const BUDGET_BRANDS = [
  "the ordinary",
  "minimalist",
  "inkey",
  "cerave",
  "cetaphil",
  "e.l.f",
  "elf",
  "garnier",
  "neutrogena",
  "amazon basics",
  "gorilla sports",
  "cantu",
  "maui moisture",
  "tree hut",
  "some by mi",
  "got2b",
  "celdyque",
  "yankuirui",
  "townssilk",
  "portentum",
  "ihuan",
  "asipro",
  "fitgriff",
  "gvolatee",
  "amonax",
  "plantifique",
  "tanologist",
  "mattibi",
  "magicteam",
  "twsoul",
  "fuel24",
  "candure",
  "ella",
  "pro breeze",
  "dh fitlife",
  "bodymate",
  "elvire",
];

export const priceTierDisplay = {
  budget: { label: "Budget", icon: "💰" },
  mellan: { label: "Mellan", icon: "💰💰" },
  premium: { label: "Premium", icon: "💰💰💰" },
} satisfies Record<PriceTier, { label: string; icon: string }>;

function containsAny(value: string, needles: string[]) {
  return needles.some((needle) => value.includes(needle));
}

export function getPriceTier(product: Product): PriceTier {
  if (product.priceTier) {
    return product.priceTier;
  }

  const brand = product.brand.toLowerCase();
  if (containsAny(brand, PREMIUM_BRANDS)) {
    return "premium";
  }

  if (containsAny(brand, BUDGET_BRANDS)) {
    return "budget";
  }

  const summary = product.summary.toLowerCase();
  if (containsAny(summary, ["premium", "lyx", "proffs", "exklusiv"])) {
    return "premium";
  }

  if (containsAny(summary, ["prisvärd", "budget", "lågt pris", "billig"])) {
    return "budget";
  }

  return "mellan";
}

export function getPriceTierDisplay(product: Product) {
  return priceTierDisplay[getPriceTier(product)];
}
