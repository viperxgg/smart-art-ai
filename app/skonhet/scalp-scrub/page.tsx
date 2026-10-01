// Question metadata refreshed 2026-10-01; existing decision copy is unchanged.
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getSommarPickBySlug } from "@/lib/sommar";

const pick = getSommarPickBySlug("inkey-scalp-scrub");

export const revalidate = 3600;

const targetQuery = "hårbottenpeeling";
const heading = `${targetQuery.charAt(0).toUpperCase()}${targetQuery.slice(1)} – The INKEY List: för vem och hur ofta?`;
export const metadata = createSeoMetadata({
  title: "Hårbottenpeeling – The INKEY List: hur ofta?",
  description: "Hårbottenpeeling från The INKEY List: läs vem den kan passa, vad källorna säger om användning och vilka begränsningar du bör känna till före köp.",
  url: `${siteConfig.url}/skonhet/scalp-scrub`,
});

export default function ScalpScrubPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} pageHeading={heading} />;
}
