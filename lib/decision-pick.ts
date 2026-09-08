import { getProductDecision } from "@/lib/product-decisions";
import type { SommarPick } from "@/lib/sommar";

// Project current evidence onto legacy pick consumers without mutating their source records.
export function withDecisionPick(pick: SommarPick): SommarPick {
  const decision = getProductDecision(pick.productSlug);
  if (!decision) return pick;
  const option = decision.options[0];
  return {
    ...pick,
    cardBadge: "Beslutsunderlag",
    cardHook: `Välj om ${option.chooseIf}`,
    badge: "Jämför behov och begränsningar",
    headline: option.model,
    shortBody: option.chooseIf,
    valueHook: "Vad behöver du att produkten gör?",
    valueStatement: decision.testing,
    passFor: [option.chooseIf],
    caution: option.avoidIf,
    usageGuidance: { title: "Modell och variant före köp", text: option.variant },
    verdict: decision.noPurchaseWhen,
    amazonSummary: "Aktuella kundomdömen har inte verifierats i detta beslutsunderlag.",
    amazonQuotes: [],
    faqItems: [
      { question: "När kan jag avstå från ett köp?", answer: decision.noPurchaseWhen },
      { question: "Vad har ni testat?", answer: decision.testing },
      { question: "Vad återstår att kontrollera?", answer: decision.limitations },
    ],
    metaTitle: option.model,
    metaDescription: `Jämför ${option.model}: behov, begränsningar, modellvariant och källor före köp.`,
    relatedLinks: [{ href: decision.comparison.href, label: decision.comparison.label, text: "Läs beslutsunderlaget och källorna." }],
  };
}
