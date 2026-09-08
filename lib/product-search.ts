import { products, productCategories, type Product } from "@/lib/products";
import { getProductDecision } from "@/lib/product-decisions";

const categoryLabel = new Map(productCategories.map(category => [category.slug, category.label]));

// Fold Swedish diacritics while retaining multi-token matching.
function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/å/g, "a")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/é/g, "e")
    .replace(/\s+/g, " ")
    .trim();
}

type SearchableProduct = {
  product: Product;
  identity: string;
  haystack: string;
};

// Keep discovery searchable by identity and current decision content, not old endorsements.
const searchIndex: SearchableProduct[] = products.map((product) => {
  const decision = getProductDecision(product.slug);
  const option = decision?.options[0];
  return {
    product,
    identity: normalize([product.title, product.brand, product.slug, categoryLabel.get(product.category) ?? product.category, option?.model ?? ""].join(" ")),
    haystack: normalize([
      product.title, product.brand, product.slug,
      categoryLabel.get(product.category) ?? product.category,
      option?.model ?? "", option?.chooseIf ?? "", option?.avoidIf ?? "",
    ].join(" ")),
  };
});

export function filterProducts(query: string): Product[] {
  const normalized = normalize(query);
  if (!normalized) return [];

  const tokens = normalized.split(" ").filter(Boolean);

  const direct = searchIndex.filter(({ identity }) => tokens.every((token) => identity.includes(token)));
  const matches = direct.length ? direct : searchIndex.filter(({ haystack }) => tokens.every((token) => haystack.includes(token)));
  return matches.map(({ product }) => product);
}

