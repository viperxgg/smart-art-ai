import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createProductReviewMetadata } from "@/lib/product-review-metadata";
import { getTraningsPickBySlug } from "@/lib/sommar";

const pick = getTraningsPickBySlug("salomon-loparvast");

export const revalidate = 3600;

export const metadata = pick ? createProductReviewMetadata(pick) : {};

export default function LoparvastPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
