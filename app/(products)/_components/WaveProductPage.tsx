import { createProductReviewMetadata } from "@/lib/product-review-metadata";
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { getWaveProductPick } from "@/lib/wave-content";

export function createWaveProductMetadata(productSlug: string) {
  const pick = getWaveProductPick(productSlug);
  return pick ? createProductReviewMetadata(pick) : {};
}

export function WaveProductPage({ productSlug }: { productSlug: string }) {
  const pick = getWaveProductPick(productSlug);

  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
