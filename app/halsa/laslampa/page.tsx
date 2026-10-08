// 2026-10-08: Refresh query-led metadata and contextual links; product facts and price dates unchanged.
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getSmartSommarPickBySlug } from "@/lib/sommar";

const pick = getSmartSommarPickBySlug("gritin-laslampa");

export const revalidate = 3600;

export const metadata = pick ? createSeoMetadata({
  title: "Läslampa till sängen – passar Gritin 19 LED dig?",
  description: "Gritin 19 LED har klämma, böjbar hals och minne för ljusinställningen. Kontrollera att fästet passar vid sängen; ostörd sömn bredvid är inte garanterad.",
  url: `${siteConfig.url}${pick.href}`,
}) : {};

export default function LaslampaPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
