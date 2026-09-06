// 2026-09-06: Olaplex N°.3 PLUS refresh (title, 1 529 omdömen, delivery-review
// caution) and the "Läs även" link to /guider/harinpackning. Data lives in
// lib/products.ts and lib/sommar.ts (SHARED_LIB_MODULES), so this dated comment
// is what moves the route's sitemap date.
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getSommarPickBySlug } from "@/lib/sommar";

const pick = getSommarPickBySlug("olaplex-no3-treatment");

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

export default function OlaplexNo3Page() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
