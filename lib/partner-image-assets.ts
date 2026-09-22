import { productRecords, type PartnerMerchantId } from "@/lib/selected-product-records";

export type PartnerImageAsset = {
  merchantId: PartnerMerchantId;
  src: string;
  width: number;
  height: number;
  alt: string;
  credit: string;
  source: string;
  sha256: string;
};

export const partnerImageAssets = Object.fromEntries(productRecords.map((record) => {
  const image: PartnerImageAsset = {
    merchantId: record.image.merchantId,
    src: record.image.src,
    width: record.image.width,
    height: record.image.height,
    alt: record.image.alt,
    credit: record.image.credit,
    source: record.image.source,
    sha256: record.image.sha256,
  };
  return [record.id, image];
})) as Readonly<Record<string, PartnerImageAsset>>;

const permission = productRecords[0].image;
export const partnerImagePermission = {
  reviewedAt: permission.reviewedAt,
  policy: "https://help.adtraction.com/en/articles/13350304-how-do-i-promote-brands",
  feedPolicy: "https://help.adtraction.com/en/articles/13398866-product-feeds-via-adtraction",
  scope: permission.permissionScope,
};

export function getPartnerOfferImage(productSlug: string, merchantId: string) {
  const image = partnerImageAssets[productSlug];
  return image?.merchantId === merchantId ? image : undefined;
}
