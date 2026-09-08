import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getSommarPickBySlug } from "@/lib/sommar";

const pick = getSommarPickBySlug("cetaphil-moisturizing-cream");

export const revalidate = 3600;

export const metadata = createSeoMetadata({
  title: "Cetaphil Moisturizing Cream",
  description: "Jämför användning, produktvariant och begränsningar innan du köper. Tillverkaruppgifter och tydliga gränser för vad vi inte testat.",
  url: `${siteConfig.url}/skonhet/fuktkram`,
});

export default function FuktkramPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
