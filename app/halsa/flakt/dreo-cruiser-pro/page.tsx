import { FlaktProductReviewPage } from "@/app/halsa/flakt/_components/FlaktProductReviewPage";
import { flaktPicks } from "@/lib/flakt";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = flaktPicks[0];
const otherPick = flaktPicks[1];
const pageUrl = `${siteConfig.url}/halsa/flakt/dreo-cruiser-pro`;

export const revalidate = 300;

export const metadata = createSeoMetadata({
  title: pick.metaTitle,
  description: pick.metaDescription,
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${pick.product.image}`,
    width: 1024,
    height: 1024,
    alt: pick.product.imageAlt,
  },
});

export default function DreoCruiserProPage() {
  return <FlaktProductReviewPage pick={pick} otherPick={otherPick} />;
}
