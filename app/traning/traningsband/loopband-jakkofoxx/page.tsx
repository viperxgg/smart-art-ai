import { notFound } from "next/navigation";

import { TraningsbandProductReviewPage } from "@/app/traning/traningsband/_components/TraningsbandProductReviewPage";
import {
  getOtherTraningsbandPick,
  traningsbandPicks,
} from "@/lib/traningsband";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = traningsbandPicks.find(
  (item) => item.path === "/traning/traningsband/loopband-jakkofoxx",
);
const pageUrl = `${siteConfig.url}/traning/traningsband/loopband-jakkofoxx`;

export const revalidate = 300;

export const metadata = pick
  ? createSeoMetadata({
      title: pick.metaTitle,
      description: pick.metaDescription,
      url: pageUrl,
      image: {
        url: `${siteConfig.url}${pick.product.image}`,
        width: 1024,
        height: 1024,
        alt: pick.product.imageAlt,
      },
    })
  : {};

export default function JakkofoxxLoopbandPage() {
  if (!pick) {
    notFound();
  }

  const otherPick = getOtherTraningsbandPick(pick.product.slug);

  if (!otherPick) {
    notFound();
  }

  return <TraningsbandProductReviewPage pick={pick} otherPick={otherPick} />;
}
