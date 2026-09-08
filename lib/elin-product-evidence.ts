import { validateDecisionRecord } from "@/lib/decision-record";
import { getProductDecision } from "@/lib/product-decisions";
import type { Product } from "@/lib/products";

/** Search presence is not editorial approval. Never fall back to legacy claims. */
export function getElinProductEvidence(product: Product) {
  const decision = getProductDecision(product.slug);
  if (!decision) return {
    status: "not_reviewed" as const,
    title: product.title,
    summary: "Produktposten finns i sortimentet, men saknar granskat beslutsunderlag. Ingen produktrekommendation kan styrkas här ännu.",
    decision: null,
  };
  validateDecisionRecord(decision, [product.slug]);
  const option = decision.options[0];
  return {
    status: decision.sources.some((source) => source.status === "unavailable") ? "incomplete_sources" as const : "decision_draft" as const,
    title: option.model,
    summary: `Välj om ${option.chooseIf} Avstå om ${option.avoidIf}`,
    decision,
  };
}
