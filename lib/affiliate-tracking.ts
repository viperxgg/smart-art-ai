import { getAmazonOffer } from "@/lib/amazon-offers";
import { getMerchantOffer } from "@/lib/merchant-offers";

export function getPartnerClick(href: string, data: { merchant?: string; product?: string; placement?: string }) {
  if (!data.merchant || !data.product || !data.placement || !/^[a-z0-9-]{1,60}$/.test(data.placement)) return null;
  const offer = getMerchantOffer(data.product, data.merchant);
  if (!offer || href !== offer.href) return null;
  return { merchant: data.merchant, product: data.product, placement: data.placement };
}

export function isAmazonDestination(href: string): boolean {
  try {
    const { hostname, protocol } = new URL(href);
    return protocol === "https:" && ["amzn.to", "amazon.se", "amazon.com", "amazon.de", "amazon.co.uk"].some(
      (host) => hostname === host || hostname.endsWith(`.${host}`),
    );
  } catch { return false; }
}

// Only explicitly tagged, reviewed comparison links use the new event. Legacy
// Amazon links retain amazon_click, preserving the historical reporting boundary.
export function getAmazonOfferClick(href: string, data: { merchant?: string; product?: string; placement?: string }) {
  if (data.merchant !== "amazon" || !data.product || !data.placement || !/^[a-z0-9-]{1,60}$/.test(data.placement)) return null;
  const offer = getAmazonOffer(data.product);
  if (!offer || href !== offer.href) return null;
  return { merchant: "amazon", product: data.product, placement: data.placement };
}
