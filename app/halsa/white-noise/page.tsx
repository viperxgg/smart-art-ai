// Content refresh 2026-08-28: länk till sovmask-eller-white-noise (ljus vs ljud).
// Content refresh 2026-08-27: seasonal update + link to sov-battre-i-host guide.
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createProductReviewMetadata } from "@/lib/product-review-metadata";
import { getSmartSommarPickBySlug } from "@/lib/sommar";

const pick = getSmartSommarPickBySlug("magicteam-white-noise");

export const revalidate = 3600;

export const metadata = pick ? createProductReviewMetadata(pick) : {};

export default function WhiteNoisePage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
