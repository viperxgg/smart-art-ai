import { EpilatorProductReviewPage } from "@/app/skonhet/epilator/_components/EpilatorProductReviewPage";
import { epilatorPicks } from "@/lib/epilator";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = epilatorPicks[0];
const otherPick = epilatorPicks[1];
const pageUrl = `${siteConfig.url}${pick.path}`;

export const revalidate = 3600;

export const metadata = createSeoMetadata({
  title: pick.metaTitle,
  description: pick.metaDescription,
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${pick.product.image}`,
    width: 1200,
    height: 900,
    alt: pick.product.imageAlt,
  },
});

export default function PanasonicEsEy30Page() {
  return <EpilatorProductReviewPage pick={pick} otherPick={otherPick} />;
}
