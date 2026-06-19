import type { Product } from "@/lib/products";

export type DecisionComparisonFaqItem = {
  question: string;
  answer: string;
};

export type DecisionComparisonPick = {
  product: Product;
  path: string;
  badge: string;
  headline: string;
  shortBody: string;
};

export type DecisionComparisonRelatedLink = {
  href: string;
  label: string;
  text: string;
};
