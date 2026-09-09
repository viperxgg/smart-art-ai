// Meta refresh 2026-08-31: title leder nu med "hårbottenpeeling" – den svenska sökfrasen.
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createProductReviewMetadata } from "@/lib/product-review-metadata";
import { getSommarPickBySlug } from "@/lib/sommar";

const pick = getSommarPickBySlug("inkey-scalp-scrub");

export const revalidate = 3600;

export const metadata = pick ? createProductReviewMetadata(pick) : {};

export default function ScalpScrubPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
