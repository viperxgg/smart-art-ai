import { PlattangProductReviewPage } from "@/app/skonhet/plattang/_components/PlattangProductReviewPage";
import { plattangPicks } from "@/lib/plattang";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = plattangPicks[0];
const otherPick = plattangPicks[1];
const pageUrl = `${siteConfig.url}/skonhet/plattang/remington-s8540`;

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

export default function RemingtonS8540Page() {
  return <PlattangProductReviewPage pick={pick} otherPick={otherPick} />;
}
