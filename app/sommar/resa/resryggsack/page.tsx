import { notFound } from "next/navigation";

import { ProductDecisionPage } from "@/components/ProductDecisionPage";
import { unresolvedTravelBackpack } from "@/lib/kabinvaska-eller-ryggsack";
import { getApprovedReviews } from "@/lib/reviews/reviews";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getResaPickBySlug } from "@/lib/sommar";

const pick = getResaPickBySlug("taygeer-kabinryggsack");

export const revalidate = 3600;

export const metadata = pick
  ? createSeoMetadata({
      title: "Taygeer resryggsäck – vad behöver verifieras? | Elins val",
      description: "Modell, mått och bärkomfort behöver verifieras innan köp. Se vad som saknas i underlaget och när din befintliga väska räcker.",
      url: `${siteConfig.url}${pick.href}`,
    })
  : {};

export default async function ResryggsackPage() {
  if (!pick) {
    notFound();
  }

  const reviews = await getApprovedReviews(pick.product.slug);
  return <ProductDecisionPage pick={pick} decision={unresolvedTravelBackpack} reviews={reviews} />;
}
