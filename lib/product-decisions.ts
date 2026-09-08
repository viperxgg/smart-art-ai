import { ceraveEllerCetaphilDecision } from "@/lib/cerave-eller-cetaphil";
import type { DecisionRecord } from "@/lib/decision-record";

export type ProductDecision = DecisionRecord & {
  category: { label: string; href: string };
  comparison: { label: string; href: string };
};

export function getProductDecision(slug: string): ProductDecision | undefined {
  const option = ceraveEllerCetaphilDecision.options.find((item) => item.productSlug === slug);
  if (!option) return undefined;
  return {
    ...ceraveEllerCetaphilDecision,
    options: [option],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Jämför CeraVe och Cetaphil", href: "/skonhet/cerave-eller-cetaphil" },
    noPurchaseWhen: "Den rengöring du redan har fyller ditt behov och fungerar för dig. Att byta varumärke är inte ett mål i sig.",
  };
}
