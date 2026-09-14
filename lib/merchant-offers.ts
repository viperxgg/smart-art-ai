import type { MerchantPriceSnapshot } from "@/lib/merchant-price";

export type MerchantOffer = {
  merchantId: "nordicfeel" | "kjell";
  merchantName: string;
  productSlug: string;
  productName: string;
  variant: string;
  href: string;
  placement: string;
  checkedAt: string;
  price?: MerchantPriceSnapshot;
};

export const k18NordicfeelOffer: MerchantOffer = {
  merchantId: "nordicfeel",
  merchantName: "NordicFeel",
  productSlug: "k18-leave-in-50ml",
  productName: "K18 Leave-In Molecular Repair Hair Mask",
  variant: "50 ml · en flaska, inte ett paket med schampo",
  href: "https://at.nordicfeel.com/t/t?a=872761485&as=2110221551&t=2&tk=1&epi=ev26q3b1-hair-k18-body&url=www.nordicfeel.com/se/product/k18-leavein-repair-hair-mask-115729",
  placement: "hair-guide-body",
  checkedAt: "2026-09-14",
  price: {
    amount: 799,
    currency: "SEK",
    checkedAt: "2026-09-14T11:58:26+02:00",
    source: "https://www.nordicfeel.com/se/product/k18-leavein-repair-hair-mask-115729",
  },
};

export const koboKjellOffer: MerchantOffer = {
  merchantId: "kjell",
  merchantName: "Kjell & Company",
  productSlug: "kobo-clara-bw",
  productName: "Kobo Clara BW",
  variant: "6 tum · 16 GB · svartvit skärm · artikel 22150",
  href: "https://ion.kjell.com/t/t?a=1098281531&as=2110221551&t=2&tk=1&epi=ev26q3b1-kobo-offer&url=www.kjell.com/se/produkter/mobilt/las-surfplattor/lasplattor/kobo-clara-bw-lasplatta-6-p22150",
  placement: "product-offer",
  checkedAt: "2026-09-14",
  price: {
    amount: 1899,
    currency: "SEK",
    checkedAt: "2026-09-14T11:58:26+02:00",
    source: "https://www.kjell.com/se/produkter/mobilt/las-surfplattor/lasplattor/kobo-clara-bw-lasplatta-6-p22150",
  },
};
