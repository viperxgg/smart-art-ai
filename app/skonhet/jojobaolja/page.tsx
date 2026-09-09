import { jojobaDecision } from "@/lib/jojoba-decision";
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getSommarPickBySlug } from "@/lib/sommar";

const pick = getSommarPickBySlug("kanzy-jojobaolja");

export const revalidate = 3600;

export const metadata = pick
  ? createSeoMetadata({
      title: "Passar Kanzy Jojoba Oil 120 ml dig?",
      description: jojobaDecision.options[0].chooseIf,
      url: `${siteConfig.url}${pick.href}`,
    })
  : {};

export default function JojobaoljaPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
