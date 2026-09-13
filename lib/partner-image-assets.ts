/** Original assets surfaced by Adtraction for the approved Elins val channel.
 * Scope: the matching merchant offer only. Never use for another size or bundle.
 * Display whole, without retouching, AI edits, screen replacement or text overlay.
 * Recheck availability/terms before release and remove if permission is withdrawn.
 */
export const partnerImageAssets = {
  "k18-leave-in-50ml": {
    merchantId: "nordicfeel",
    src: "/products/partners/k18-50ml-nordicfeel.jpg",
    width: 940, height: 940,
    alt: "Vit flaska K18 Leave-In Molecular Repair Hair Mask, märkt 50 ml.",
    credit: "Produktbild från NordicFeel via Adtraction.",
    source: "https://www.nordicfeel.com/storage/B8B5A31653A64BBF47FE0AF668040EF610C1AAEC33E590D33F23FE9635C2372B/c33dc9d23b674b56a4fa8ddc81963e5b/jpg/media/d49d8931c5e54e2dbd67d1ebe8956420/P-115729.jpg",
    sha256: "44c2d7d7acb108dfe82e899b5c2edeb3af10f508b45674300ffdfeedcfd95c21",
  },
  "kobo-clara-bw": {
    merchantId: "kjell",
    src: "/products/partners/kobo-clara-bw-kjell.jpg",
    width: 700, height: 700,
    alt: "Svart Kobo Clara BW med svartvit skärm och svensk exempeltext.",
    credit: "Produktbild från Kjell & Company via Adtraction. Skärminnehållet är ett exempel.",
    source: "https://www.kjell.com/cdn-cgi/image/width=700,height=700,fit=pad,format=auto/globalassets/productimages/899799_22150_01_se.jpg?ref=79DCD78FAD",
    sha256: "18caa51ba7314c6faa29c675a84b465d4d749e03a99060e1ca5ea74679f13ccd",
  },
} as const;

export const partnerImagePermission = {
  reviewedAt: "2026-09-13",
  policy: "https://help.adtraction.com/en/articles/13350304-how-do-i-promote-brands",
  feedPolicy: "https://help.adtraction.com/en/articles/13398866-product-feeds-via-adtraction",
  scope: "Original supplied product image, matching merchant promotion on approved channel; brand-specific rules still apply.",
};

export function getPartnerOfferImage(productSlug: string, merchantId: string) {
  const image = partnerImageAssets[productSlug as keyof typeof partnerImageAssets];
  return image?.merchantId === merchantId ? image : undefined;
}
