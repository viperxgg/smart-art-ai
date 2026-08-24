import { notFound } from "next/navigation";

import { FoamRollerProductReviewPage } from "@/app/traning/foam-roller/_components/FoamRollerProductReviewPage";
import { foamRollerPicks, getOtherFoamRollerPick } from "@/lib/foam-roller";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = foamRollerPicks.find(
  (item) => item.path === "/traning/foam-roller/elvire-deep-tissue",
);
const pageUrl = `${siteConfig.url}/traning/foam-roller/elvire-deep-tissue`;

export const revalidate = 3600;

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

export default function ElvireDeepTissueFoamRollerPage() {
  if (!pick) {
    notFound();
  }

  const otherPick = getOtherFoamRollerPick(pick.product.slug);

  if (!otherPick) {
    notFound();
  }

  return <FoamRollerProductReviewPage pick={pick} otherPick={otherPick} />;
}
