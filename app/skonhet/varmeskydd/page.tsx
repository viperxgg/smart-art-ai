// 2026-10-04: Question-form metadata and H1; existing decision prose preserved.
// 2026-10-01: Add contextual links to the wave-2 questions; existing decision prose preserved.
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getSommarPickBySlug } from "@/lib/sommar";

const pick = getSommarPickBySlug("loreal-elvital-varmeskydd");
const heading = "Heat Slayer – räcker ett billigt värmeskydd?";
const description = "Heat Slayer – räcker ett billigt värmeskydd? Läs tillverkarens uppgifter, anvisningar och begränsningar innan du väljer spray till din hårrutin.";

export const revalidate = 3600;

export const metadata = pick
  ? createSeoMetadata({
      title: heading,
      description,
      url: `${siteConfig.url}${pick.href}`,

    })
  : {};

export default function VarmeskyddPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} pageHeading={heading} />;
}
