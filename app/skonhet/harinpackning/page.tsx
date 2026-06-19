import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getSommarPickBySlug } from "@/lib/sommar";

const pick = getSommarPickBySlug("loreal-absolut-repair");

export const revalidate = 300;

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
