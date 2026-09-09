import { ProductDecisionPage } from "@/components/ProductDecisionPage";
import { UnreviewedProductPage } from "@/components/UnreviewedProductPage";
import { getProductDecision } from "@/lib/product-decisions";
import type { TraningsbandPick } from "@/lib/traningsband";
import { getApprovedReviews } from "@/lib/reviews/reviews";

type Props = { pick: TraningsbandPick; otherPick: TraningsbandPick };

export async function TraningsbandProductReviewPage({ pick }: Props) {
  const reviews = await getApprovedReviews(pick.product.slug);
  const decision = getProductDecision(pick.product.slug);
  const pagePick = { ...pick, href: pick.path };
  return decision
    ? <ProductDecisionPage pick={pagePick} decision={decision} reviews={reviews} />
    : <UnreviewedProductPage pick={pagePick} reviews={reviews} />;
}
