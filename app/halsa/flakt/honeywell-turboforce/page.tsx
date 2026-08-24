import { FlaktProductReviewPage } from "@/app/halsa/flakt/_components/FlaktProductReviewPage";
import { flaktPicks } from "@/lib/flakt";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = flaktPicks[1];
const otherPick = flaktPicks[0];
const pageUrl = `${siteConfig.url}/halsa/flakt/honeywell-turboforce`;

export const revalidate = 3600;

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

export default function HoneywellTurboforcePage() {
  return <FlaktProductReviewPage pick={pick} otherPick={otherPick} />;
}
