import { notFound } from "next/navigation";

import { HantlarProductReviewPage } from "@/app/traning/hantlar/_components/HantlarProductReviewPage";
import { getOtherHantlarPick, hantlarPicks } from "@/lib/hantlar";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = hantlarPicks.find(
  (item) => item.path === "/traning/hantlar/songmics-set",
);
const pageUrl = `${siteConfig.url}/traning/hantlar/songmics-set`;

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

export default function SongmicsSetHantlarPage() {
  if (!pick) {
    notFound();
  }

  const otherPick = getOtherHantlarPick(pick.product.slug);

  if (!otherPick) {
    notFound();
  }

  return <HantlarProductReviewPage pick={pick} otherPick={otherPick} />;
}
