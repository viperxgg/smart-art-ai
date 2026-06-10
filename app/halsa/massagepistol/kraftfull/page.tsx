import type { Metadata } from "next";

import { MassagepistolProductReviewPage } from "@/app/halsa/massagepistol/_components/MassagepistolProductReviewPage";
import { massagepistolPicks } from "@/lib/massagepistol";
import { siteConfig } from "@/lib/site";

const pick = massagepistolPicks[1];
const otherPick = massagepistolPicks[0];
const pageUrl = `${siteConfig.url}/halsa/massagepistol/kraftfull`;

export const revalidate = 300;

export const metadata: Metadata = {
  title: {
    absolute: pick.metaTitle,
  },
  description: pick.metaDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pick.metaTitle,
    description: pick.metaDescription,
    url: pageUrl,
    siteName: siteConfig.name,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}${pick.product.image}`,
        width: 1024,
        height: 1024,
        alt: pick.product.imageAlt,
      },
    ],
  },
};

export default function KraftfullMassagepistolPage() {
  return (
    <MassagepistolProductReviewPage
      pick={pick}
      otherPick={otherPick}
    />
  );
}
