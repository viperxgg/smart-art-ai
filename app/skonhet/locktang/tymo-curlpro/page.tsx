import { notFound } from "next/navigation";

import { LocktangProductReviewPage } from "@/app/skonhet/locktang/_components/LocktangProductReviewPage";
import { getOtherLocktangPick, locktangPicks } from "@/lib/locktang";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = locktangPicks.find(
  (item) => item.path === "/skonhet/locktang/tymo-curlpro",
);
const pageUrl = `${siteConfig.url}/skonhet/locktang/tymo-curlpro`;

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

export default function TymoCurlproPage() {
  if (!pick) {
    notFound();
  }

  const otherPick = getOtherLocktangPick(pick.product.slug);

  if (!otherPick) {
    notFound();
  }

  return <LocktangProductReviewPage pick={pick} otherPick={otherPick} />;
}
