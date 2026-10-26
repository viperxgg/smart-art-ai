import type { MerchantOffer } from "@/lib/merchant-offers";

export const coreStylerHandoff = {
  path: "/skonhet/lyko-core-styler",
  product: "lyko-core-styler",
  merchant: "lyko",
  placement: "core-decision-01",
  epi: "ev26-core-decision-01",
} as const;

// One registered link variant. Preserve the approved program, channel and
// destination; a separate main EPI isolates this button in partner reports.
export function getCoreStylerHandoffHref(offer: MerchantOffer): string | null {
  if (offer.productSlug !== coreStylerHandoff.product || offer.merchantId !== coreStylerHandoff.merchant || offer.linkKind !== "affiliate") return null;
  const url = new URL(offer.href);
  url.searchParams.set("epi", coreStylerHandoff.epi);
  return url.href;
}
