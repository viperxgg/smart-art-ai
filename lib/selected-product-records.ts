import data from "@/lib/selected-product-data.json";
import type { MerchantPriceSnapshot } from "@/lib/merchant-price";

export type PartnerMerchantId = "nordicfeel" | "kjell" | "lyko";
export type HubGroup = "lyko" | "skonhet" | "vardag";

export type CanonicalOffer = {
  merchantId: PartnerMerchantId;
  merchantName: string;
  href: string;
  linkKind?: "affiliate" | "direct";
  priceNote?: string;
  placement: string;
  checkedAt: string;
  price?: MerchantPriceSnapshot;
  programId?: string;
  channelId?: string;
  availabilityCheckedAt: string;
};

export type CanonicalImage = {
  merchantId: PartnerMerchantId;
  src: string;
  width: number;
  height: number;
  alt: string;
  credit: string;
  source: string;
  sha256: string;
  permissionScope: string;
  reviewedAt: string;
};

export type CanonicalAmazon = {
  asin: string;
  productName: string;
  variant: string;
  source: string;
  href: string;
  identityCheckedAt: string;
  linkOnly: true;
};

export type CanonicalHome = {
  kind: "curated" | "candidate";
  category: string;
  title: string;
  href: string;
  linkLabel: string;
  fit: string;
  caveat: string;
  addedAt: string;
  reviewed: boolean;
  available: boolean;
  campaignEndsAt?: string;
};

export type CanonicalProductRecord = {
  id: string;
  name: string;
  variant: string;
  selected: boolean;
  offer: CanonicalOffer;
  image: CanonicalImage;
  amazon?: CanonicalAmazon;
  home?: CanonicalHome;
  hubGroup?: HubGroup;
  additionalOffers?: (CanonicalOffer & { merchantItemId: string })[];
  targetQuery?: string;
  hypothesis?: string;
  decisionSections?: { question: string; answer: string; sourceUrls: string[] }[];
  visual?: { hero: string; infographic: string; context?: string };
  merchantItemId?: string;
  gtin?: string;
  updatedAt?: string;
  path?: string;
  heading?: string;
  shortName?: string;
  brand?: string;
  category?: string;
  topic?: string;
  metaTitle?: string;
  description?: string;
  question?: string;
  answer?: string;
  fits?: string[];
  skip?: string;
  decisionTitle?: string;
  decision?: string;
  facts?: [string, string][];
  steps?: [string, string][];
  faqs?: [string, string][];
  sources?: { label: string; url: string; checkedAt?: string; supports: string }[];
  related?: [string, string][];
  memberPrice?: { amount: number; label: string; endsAt: string };
  campaignEndsAt?: string;
};

export type SelectedProductRecord = CanonicalProductRecord & {
  selected: true;
  hubGroup: HubGroup;
  merchantItemId: string;
  updatedAt: string;
  path: string;
  shortName: string;
  brand: string;
  category: string;
  topic: string;
  metaTitle: string;
  description: string;
  question: string;
  answer: string;
  fits: string[];
  skip: string;
  decisionTitle: string;
  decision: string;
  facts: [string, string][];
  steps: [string, string][];
  faqs: [string, string][];
  sources: { label: string; url: string; checkedAt?: string; supports: string }[];
  related: [string, string][];
};

export const productRecords = data as unknown as readonly CanonicalProductRecord[];
export const selectedProductRecords = productRecords.filter((record): record is SelectedProductRecord => record.selected);

export function getProductRecord(id: string) {
  return productRecords.find((record) => record.id === id);
}
