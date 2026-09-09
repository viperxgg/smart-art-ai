import { notFound } from "next/navigation";

import { KettlebellProductReviewPage } from "@/app/traning/kettlebell/_components/KettlebellProductReviewPage";
import { getOtherKettlebellPick, kettlebellPicks } from "@/lib/kettlebell";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = kettlebellPicks.find(
  (item) => item.path === "/traning/kettlebell/amazon-basics",
);
const pageUrl = `${siteConfig.url}/traning/kettlebell/amazon-basics`;

export const revalidate = 3600;

export const metadata = pick
  ? createSeoMetadata({
      title: "Amazon Basics gjutjärns-kettlebell – kontrollera variant och vikt",
      description: "Exakt variant och vikt är inte verifierade. Läs om behov, grepp och paketets innehåll före köp; inget testvinnarbetyg eller prisvinnaranspråk.",
      url: pageUrl,
    })
  : {};

export default function AmazonBasicsKettlebellPage() {
  if (!pick) {
    notFound();
  }

  const otherPick = getOtherKettlebellPick(pick.product.slug);

  if (!otherPick) {
    notFound();
  }

  return <KettlebellProductReviewPage pick={pick} otherPick={otherPick} />;
}
