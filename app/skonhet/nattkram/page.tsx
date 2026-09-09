import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createProductReviewMetadata } from "@/lib/product-review-metadata";
import { getSommarPickBySlug } from "@/lib/sommar";

const pick = getSommarPickBySlug("olay-regenerist-night-cream");

export const revalidate = 3600;

export const metadata = pick ? createProductReviewMetadata(pick) : {};

export default function NattkramPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
