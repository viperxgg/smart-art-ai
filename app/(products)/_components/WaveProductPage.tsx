import { getProductDecision } from "@/lib/product-decisions";
import { withDecisionPick } from "@/lib/decision-pick";
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getWaveProductPick } from "@/lib/wave-content";

export function createWaveProductMetadata(productSlug: string) {
  const rawPick = getWaveProductPick(productSlug);

  if (!rawPick) {
    return {};
  }
  const pick = withDecisionPick(rawPick);

  return createSeoMetadata({
    title: pick.metaTitle,
    description: pick.metaDescription,
    url: `${siteConfig.url}${pick.href}`,
    image: getProductDecision(productSlug) ? undefined : {
      url: `${siteConfig.url}${pick.product.image}`,
      width: 900,
      height: 675,
      alt: pick.product.imageAlt,
    },
  });
}

export function WaveProductPage({ productSlug }: { productSlug: string }) {
  const pick = getWaveProductPick(productSlug);

  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
