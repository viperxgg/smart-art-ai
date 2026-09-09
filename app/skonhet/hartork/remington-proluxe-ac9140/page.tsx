import { hairDryerDecision } from "@/lib/hair-dryer-decisions";
import { notFound } from "next/navigation";

import { HartorkProductReviewPage } from "@/app/skonhet/hartork/_components/HartorkProductReviewPage";
import { getOtherHartorkPick, hartorkPicks } from "@/lib/hartork";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = hartorkPicks.find(
  (item) => item.path === "/skonhet/hartork/remington-proluxe-ac9140",
);
const pageUrl = `${siteConfig.url}/skonhet/hartork/remington-proluxe-ac9140`;

export const revalidate = 3600;

export const metadata = pick
  ? createSeoMetadata({
      title: `Passar ${hairDryerDecision.options[0].model} dig?`,
      description: hairDryerDecision.options[0].chooseIf,
      url: pageUrl,
    })
  : {};

export default function RemingtonProluxeAc9140Page() {
  if (!pick) {
    notFound();
  }

  const otherPick = getOtherHartorkPick(pick.product.slug);

  if (!otherPick) {
    notFound();
  }

  return <HartorkProductReviewPage pick={pick} otherPick={otherPick} />;
}
