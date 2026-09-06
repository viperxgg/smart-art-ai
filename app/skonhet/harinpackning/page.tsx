// 2026-09-06: retitled to brand intent ("L'Oréal Absolut Repair i test – Elins
// betyg 86/100"); the "hårinpackning bäst i test" intent now lives on
// /guider/harinpackning, linked from "Läs även". Data lives in lib/sommar.ts and
// lib/products.ts (SHARED_LIB_MODULES), so this dated comment moves the sitemap date.
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getSommarPickBySlug } from "@/lib/sommar";

const pick = getSommarPickBySlug("loreal-absolut-repair");

export const revalidate = 3600;

export const metadata = pick
  ? createSeoMetadata({
      title: pick.metaTitle,
      description: pick.metaDescription,
      url: `${siteConfig.url}${pick.href}`,
      image: {
        url: `${siteConfig.url}${pick.product.image}`,
        width: 900,
        height: 675,
        alt: pick.product.imageAlt,
      },
    })
  : {};

export default function HarinpackningPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
