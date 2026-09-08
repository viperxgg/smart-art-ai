import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getSommarPickBySlug } from "@/lib/sommar";

const pick = getSommarPickBySlug("la-roche-posay-cicaplast-b5");

export const revalidate = 3600;

export const metadata = createSeoMetadata({
  title: "La Roche-Posay Cicaplast Baume B5+",
  description: "Jämför användning, produktvariant och begränsningar innan du köper. Tillverkaruppgifter och tydliga gränser för vad vi inte testat.",
  url: `${siteConfig.url}/skonhet/cicaplast-b5`,
});

export default function CicaplastB5Page() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
