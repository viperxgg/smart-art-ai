import { notFound } from "next/navigation";

import { FoamRollerProductReviewPage } from "@/app/traning/foam-roller/_components/FoamRollerProductReviewPage";
import { foamRollerPicks, getOtherFoamRollerPick } from "@/lib/foam-roller";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = foamRollerPicks.find(
  (item) => item.path === "/traning/foam-roller/bodymate-care",
);
const pageUrl = `${siteConfig.url}/traning/foam-roller/bodymate-care`;

export const revalidate = 3600;

export const metadata = pick
  ? createSeoMetadata({
      title: "BODYMATE CARE – mått, material och rätt hårdhet | Elins val",
      description: "Se skillnaden mellan CARE-varianter, EPP-materialet och vad vi inte har testat innan du väljer rulle.",
      url: pageUrl,
    })
  : {};

export default function BodymateFoamRollerPage() {
  if (!pick) {
    notFound();
  }

  const otherPick = getOtherFoamRollerPick(pick.product.slug);

  if (!otherPick) {
    notFound();
  }

  return <FoamRollerProductReviewPage pick={pick} otherPick={otherPick} />;
}
