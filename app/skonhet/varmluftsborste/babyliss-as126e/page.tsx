import { airStylerDecision } from "@/lib/air-styler-decisions";
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
      title: `Passar ${airStylerDecision.options[0].model} dig?`,
      description: airStylerDecision.options[0].chooseIf,
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
