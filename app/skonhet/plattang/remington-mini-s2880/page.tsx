import { PlattangProductReviewPage } from "@/app/skonhet/plattang/_components/PlattangProductReviewPage";
import { plattangPicks } from "@/lib/plattang";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = plattangPicks[1];
const otherPick = plattangPicks[0];
const pageUrl = `${siteConfig.url}/skonhet/plattang/remington-mini-s2880`;

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

export default function RemingtonMiniS2880Page() {
  return <PlattangProductReviewPage pick={pick} otherPick={otherPick} />;
}
