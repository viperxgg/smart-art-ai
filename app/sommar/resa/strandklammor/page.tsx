import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createProductReviewMetadata } from "@/lib/product-review-metadata";
import { getResaPickBySlug } from "@/lib/sommar";

const pick = getResaPickBySlug("strandklammor-9-pack");

export const revalidate = 3600;

export const metadata = pick ? createProductReviewMetadata(pick) : {};

export default function StrandklammorPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
