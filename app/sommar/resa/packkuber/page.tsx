// Meta refresh 2026-08-31: title leder nu med "packkuber med kompression" – sökfrasen.
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createProductReviewMetadata } from "@/lib/product-review-metadata";
import { getResaPickBySlug } from "@/lib/sommar";

const pick = getResaPickBySlug("travel-dude-packkuber");

export const revalidate = 3600;

export const metadata = pick ? createProductReviewMetadata(pick) : {};

export default function PackkuberPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
