import { notFound } from "next/navigation";

import { KettlebellProductReviewPage } from "@/app/traning/kettlebell/_components/KettlebellProductReviewPage";
import { getOtherKettlebellPick, kettlebellPicks } from "@/lib/kettlebell";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = kettlebellPicks.find(
  (item) => item.path === "/traning/kettlebell/proiron-mjuk",
);
const pageUrl = `${siteConfig.url}/traning/kettlebell/proiron-mjuk`;

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

export default function ProironMjukKettlebellPage() {
  if (!pick) {
    notFound();
  }

  const otherPick = getOtherKettlebellPick(pick.product.slug);

  if (!otherPick) {
    notFound();
  }

  return <KettlebellProductReviewPage pick={pick} otherPick={otherPick} />;
}
