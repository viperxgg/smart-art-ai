import { ProductDecisionPage } from "@/components/ProductDecisionPage";
import { UnreviewedProductPage } from "@/components/UnreviewedProductPage";
import { getProductDecision } from "@/lib/product-decisions";
import { getApprovedReviews } from "@/lib/reviews/reviews";
import type { SommarPick } from "@/lib/sommar";

export async function ProductReviewPage({ pick }: { pick: SommarPick }) {
  const reviews = await getApprovedReviews(pick.product.slug);
  const decision = getProductDecision(pick.product.slug);
  return decision
    ? <ProductDecisionPage pick={pick} decision={decision} reviews={reviews} />
    : <UnreviewedProductPage pick={pick} reviews={reviews} />;
}
