// Content refresh 2026-08-26: reciprocal link to tyngdvast-eller-lyftarbalte comparison.
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createProductReviewMetadata } from "@/lib/product-review-metadata";
import { getTraningsPickBySlug } from "@/lib/sommar";

const pick = getTraningsPickBySlug("eric-flag-viktvast");

export const revalidate = 3600;

export const metadata = pick ? createProductReviewMetadata(pick) : {};

export default function ViktvastPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
