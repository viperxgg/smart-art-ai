import { createSeoMetadata } from "@/lib/metadata";
import { getProductDecision } from "@/lib/product-decisions";
import { siteConfig } from "@/lib/site";
import type { SommarPick } from "@/lib/sommar";

export function createProductReviewMetadata(pick: SommarPick) {
  const decision = getProductDecision(pick.product.slug);
  const model = decision?.options[0].model ?? pick.product.title;
  return createSeoMetadata({
    title: decision ? model : `${model} – underlag inför köp`,
    description: decision
      ? `Jämför ${model}: behov, begränsningar, modellvariant och källor före köp.`
      : `Underlaget för ${model} är inte färdiggranskat. Läs vad som behöver kontrolleras före köp och när du kan avstå.`,
    url: `${siteConfig.url}${pick.href}`,
  });
}
