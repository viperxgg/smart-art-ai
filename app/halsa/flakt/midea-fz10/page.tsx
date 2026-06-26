import { FlaktProductReviewPage } from "@/app/halsa/flakt/_components/FlaktProductReviewPage";
import { flaktPicks } from "@/lib/flakt";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = flaktPicks[2];
const otherPick = flaktPicks[0];
const pageUrl = `${siteConfig.url}/halsa/flakt/midea-fz10`;

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

export default function MideaFz10Page() {
  return <FlaktProductReviewPage pick={pick} otherPick={otherPick} />;
}
