import { notFound } from "next/navigation";

import { HartorkProductReviewPage } from "@/app/skonhet/hartork/_components/HartorkProductReviewPage";
import { getOtherHartorkPick, hartorkPicks } from "@/lib/hartork";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = hartorkPicks.find(
  (item) => item.path === "/skonhet/hartork/beurer-hc-25",
);
const pageUrl = `${siteConfig.url}/skonhet/hartork/beurer-hc-25`;

export const revalidate = 300;

export const metadata = pick
  ? createSeoMetadata({
      title: pick.metaTitle,
      description: pick.metaDescription,
      url: pageUrl,
      image: {
        url: `${siteConfig.url}${pick.product.image}`,
        width: 1200,
        height: 900,
        alt: pick.product.imageAlt,
      },
    })
  : {};

export default function BeurerHc25Page() {
  if (!pick) {
    notFound();
  }

  const otherPick = getOtherHartorkPick(pick.product.slug);

  if (!otherPick) {
    notFound();
  }

  return <HartorkProductReviewPage pick={pick} otherPick={otherPick} />;
}
