import { dryShampooDecision } from "@/lib/dry-shampoo-decision";
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getSommarPickBySlug } from "@/lib/sommar";

const pick = getSommarPickBySlug("moroccanoil-torrschampo");

export const revalidate = 3600;

export const metadata = pick
  ? createSeoMetadata({
      title: "Passar Moroccanoil Dry Shampoo Light Tones dig?",
      description: dryShampooDecision.options[0].chooseIf,
      url: `${siteConfig.url}${pick.href}`,
    })
  : {};

export default function TorrschampoPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
