// 2026-10-08: Refresh query-led metadata and contextual links; product facts and price dates unchanged.
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getSommarPickBySlug } from "@/lib/sommar";

const pick = getSommarPickBySlug("moroccanoil-torrschampo");

export const revalidate = 3600;

export const metadata = pick
  ? createSeoMetadata({
      title: "Torrschampo för ljust hår – Moroccanoil Light Tones",
      description: "Light Tones är Moroccanoils torrschampo för ljust hår. Läs om applicering och begränsningar innan du väljer ett komplement till din vanliga hårtvätt.",
      url: `${siteConfig.url}${pick.href}`,
    })
  : {};

export default function TorrschampoPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
