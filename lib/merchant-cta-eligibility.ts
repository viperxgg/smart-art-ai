import { getProductDecision } from "@/lib/product-decisions";

/**
 * Merchant CTA eligibility — fail closed.
 *
 * A "Se pris hos ..." button may only render for a product that has its OWN
 * reviewed decision option and where that option's merchant variant has been
 * verified. Two rules matter here:
 *
 * 1. No decision record at all (an unreviewed catalogue product) means NOT
 *    eligible. The previous guard read `if (decision && !verified) return null`,
 *    which let an unreviewed product through because `decision` was undefined.
 * 2. The option must belong to this product. A decision record can hold several
 *    options (a comparison covers more than one product), so reading
 *    `options[0]` could apply another product's verification state.
 *
 * This gate governs the merchant link only. Product information, sources,
 * scores and comments stay readable on the page either way.
 */
export function isMerchantCtaEligible(productSlug: string): boolean {
  const decision = getProductDecision(productSlug);
  if (!decision) return false;

  const option = decision.options.find(
    (candidate) => candidate.productSlug === productSlug,
  );

  return option?.merchantVariantVerified === true;
}
