import { notFound } from "next/navigation";

import { YogamattaProductReviewPage } from "@/app/traning/yogamatta/_components/YogamattaProductReviewPage";
import { getOtherYogamattaPick, yogamattaPicks } from "@/lib/yogamatta";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = yogamattaPicks.find(
  (item) => item.path === "/traning/yogamatta/prosourcefit-13mm",
);
const pageUrl = `${siteConfig.url}/traning/yogamatta/prosourcefit-13mm`;

export const revalidate = 300;

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

export default function ProsourcefitYogamattaPage() {
  if (!pick) {
    notFound();
  }

  const otherPick = getOtherYogamattaPick(pick.product.slug);

  if (!otherPick) {
    notFound();
  }

  return <YogamattaProductReviewPage pick={pick} otherPick={otherPick} />;
}
