import { notFound } from "next/navigation";

import { VarmluftsborsteProductReviewPage } from "@/app/skonhet/varmluftsborste/_components/VarmluftsborsteProductReviewPage";
import {
  getOtherVarmluftsborstePick,
  varmluftsborstePicks,
} from "@/lib/varmluftsborste";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = varmluftsborstePicks.find(
  (item) => item.path === "/skonhet/varmluftsborste/remington-as7100",
);
const otherPick = pick ? getOtherVarmluftsborstePick(pick.product.slug) : null;

export const revalidate = 3600;

export const metadata = pick
  ? createSeoMetadata({
      title: pick.metaTitle,
      description: pick.metaDescription,
      url: `${siteConfig.url}${pick.path}`,
      image: {
        url: `${siteConfig.url}${pick.product.image}`,
        width: 1200,
        height: 900,
        alt: pick.product.imageAlt,
      },
    })
  : {};

export default function RemingtonAs7100Page() {
  if (!pick || !otherPick) {
    notFound();
  }

  return (
    <VarmluftsborsteProductReviewPage pick={pick} otherPick={otherPick} />
  );
}
