// 2026-10-08: Refresh query-led metadata; product facts and price dates unchanged.
import { notFound } from "next/navigation";

import { VarmluftsborsteProductReviewPage } from "@/app/skonhet/varmluftsborste/_components/VarmluftsborsteProductReviewPage";
import {
  getOtherVarmluftsborstePick,
  varmluftsborstePicks,
} from "@/lib/varmluftsborste";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = varmluftsborstePicks.find(
  (item) => item.path === "/skonhet/varmluftsborste/babyliss-as126e",
);
const otherPick = pick ? getOtherVarmluftsborstePick(pick.product.slug) : null;

export const revalidate = 3600;

export const metadata = pick
  ? createSeoMetadata({
      title: "BaByliss Perfect Finish AS126E – passar den dig?",
      description: "BaByliss AS126E har fyra tillbehör och kalluft. Den används på förtorkat hår; jämför borstar, plattningstillbehör och vad du behöver i din rutin.",
      url: `${siteConfig.url}${pick.path}`,
    })
  : {};

export default function BabylissAs126ePage() {
  if (!pick || !otherPick) {
    notFound();
  }

  return (
    <VarmluftsborsteProductReviewPage pick={pick} otherPick={otherPick} />
  );
}
