// 2026-10-04: Question-form metadata and H1; existing decision prose preserved.
// 2026-10-01: Wave-2 records and contextual paths updated; existing decision prose preserved.
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getSommarPickBySlug } from "@/lib/sommar";

const pick = getSommarPickBySlug("cetaphil-gentle-cleanser");
const heading = "Cetaphil Gentle Skin Cleanser – för vilken hud och storlek?";
const description = "Cetaphil Gentle Skin Cleanser – för vilken hud och storlek? Läs tillverkarens uppgifter och kontrollera förpackningen innan du väljer rengöring.";

export const revalidate = 3600;

export const metadata = pick
  ? createSeoMetadata({
      title: heading,
      description,
      url: `${siteConfig.url}${pick.href}`,
    })
  : {};

export default function CetaphilRengoringPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} pageHeading={heading} />;
}
