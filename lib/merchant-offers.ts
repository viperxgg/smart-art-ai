import type { MerchantPriceSnapshot } from "@/lib/merchant-price";

export type MerchantOffer = {
  merchantId: "nordicfeel" | "kjell" | "lyko";
  merchantName: string;
  productSlug: string;
  productName: string;
  variant: string;
  href: string;
  linkKind?: "affiliate" | "direct";
  priceNote?: string;
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
  checkedAt: "2026-09-22",
  price: {
    amount: 1899,
    currency: "SEK",
    checkedAt: "2026-09-22T10:48:38+02:00",
    source: "https://www.kjell.com/se/produkter/mobilt/las-surfplattor/lasplattor/kobo-clara-bw-lasplatta-6-p22150",
  },
};


// Selected exact variants. Price observations are independent of link validation.
export const selectedOffer1: MerchantOffer = {
  "merchantId": "nordicfeel",
  "merchantName": "NordicFeel",
  "productSlug": "redken-acidic-bonding-leave-in-150ml",
  "productName": "Redken Acidic Bonding Concentrate Leave-In Treatment 150 ml",
  "variant": "150 ml · en tub",
  "href": "https://at.nordicfeel.com/t/t?a=872761485&as=2110221551&t=2&tk=1&epi=ev26q3-selected-1&url=www.nordicfeel.com/se/product/redken-acidic-perfecting-concentrate-89232",
  "placement": "selected-product-offer",
  "checkedAt": "2026-09-14",
  "price": {
    "amount": 389.0,
    "currency": "SEK",
    "checkedAt": "2026-09-14T13:24:47+02:00",
    "source": "https://www.nordicfeel.com/se/product/redken-acidic-perfecting-concentrate-89232"
  }
};

export const selectedOffer2: MerchantOffer = {
  "merchantId": "kjell",
  "merchantName": "Kjell & Company",
  "productSlug": "cmf-buds-2-dark-grey",
  "productName": "Nothing CMF Buds 2 Mörkgrå",
  "variant": "Buds 2 · mörkgrå · modell 3000365",
  "href": "https://ion.kjell.com/t/t?a=1098281531&as=2110221551&t=2&tk=1&epi=ev26q3-selected-2&url=www.kjell.com/se/produkter/ljud-bild/horlurar-headset/tradlosa-horlurar/nothing-cmf-buds-2-morkgra-p24718",
  "placement": "selected-product-offer",
  "checkedAt": "2026-09-22",
  "price": {
    "amount": 690.0,
    "currency": "SEK",
    "checkedAt": "2026-09-22T10:48:38+02:00",
    "source": "https://www.kjell.com/se/produkter/ljud-bild/horlurar-headset/tradlosa-horlurar/nothing-cmf-buds-2-morkgra-p24718"
  }
};

export const selectedOffer3: MerchantOffer = {
  "merchantId": "nordicfeel",
  "merchantName": "NordicFeel",
  "productSlug": "beauty-of-joseon-propolis-serum",
  "productName": "Beauty of Joseon Glow Serum Propolis + Niacinamide 30 ml",
  "variant": "Glow Serum · Propolis + Niacinamide · 30 ml · en flaska",
  "href": "https://at.nordicfeel.com/t/t?a=872761485&as=2110221551&t=2&tk=1&epi=ev26q3-selected-3&url=www.nordicfeel.com/se/product/beauty-of-joseon-glow-serum-114284",
  "placement": "selected-product-offer",
  "checkedAt": "2026-09-14",
  "price": {
    "amount": 152.0,
    "currency": "SEK",
    "checkedAt": "2026-09-14T13:24:49+02:00",
    "source": "https://www.nordicfeel.com/se/product/beauty-of-joseon-glow-serum-114284"
  }
};

export const selectedOffer4: MerchantOffer = {
  "merchantId": "kjell",
  "merchantName": "Kjell & Company",
  "productSlug": "tapo-c520ws-single",
  "productName": "TP-Link Tapo C520WS Övervakningskamera",
  "variant": "Tapo C520WS · en kamera · nätansluten",
  "href": "https://ion.kjell.com/t/t?a=1098281531&as=2110221551&t=2&tk=1&epi=ev26q3-selected-4&url=www.kjell.com/se/produkter/sakerhet-overvakning/kameraovervakning/overvakningskameror/overvakningskameror-utomhus/tp-link-tapo-c520ws-overvakningskamera-p65412",
  "placement": "selected-product-offer",
  "checkedAt": "2026-09-22",
  "priceNote": "Kjell visade 689 kr som aktuellt köppris utan medlems- eller kampanjvillkor vid kontrollen den 22 september 2026. Outletvara är ett separat exemplar med eget pris och skick.",
  "price": {
    "amount": 689.0,
    "currency": "SEK",
    "checkedAt": "2026-09-22T10:48:38+02:00",
    "source": "https://www.kjell.com/se/produkter/sakerhet-overvakning/kameraovervakning/overvakningskameror/overvakningskameror-utomhus/tp-link-tapo-c520ws-overvakningskamera-p65412"
  }
};

export const selectedOffer5: MerchantOffer = {
  "merchantId": "nordicfeel",
  "merchantName": "NordicFeel",
  "productSlug": "kerastase-glaze-drops-45ml",
  "productName": "Kérastase Gloss Absolu Glaze Drops Hair Oil 45 ml",
  "variant": "Gloss Absolu · Glaze Drops Hair Oil · 45 ml",
  "href": "https://at.nordicfeel.com/t/t?a=872761485&as=2110221551&t=2&tk=1&epi=ev26q3-selected-5&url=www.nordicfeel.com/se/product/kerastase-gloss-absolu-192845",
  "placement": "selected-product-offer",
  "checkedAt": "2026-09-14",
  "price": {
    "amount": 509.0,
    "currency": "SEK",
    "checkedAt": "2026-09-14T13:24:47+02:00",
    "source": "https://www.nordicfeel.com/se/product/kerastase-gloss-absolu-192845"
  }
};

export const selectedOffer6: MerchantOffer = {
  "merchantId": "kjell",
  "merchantName": "Kjell & Company",
  "productSlug": "jbl-flip-7-black",
  "productName": "JBL Flip 7 Portabel trådlös högtalare Svart",
  "variant": "Flip 7 · svart · JBLFLIP7BLK · en högtalare",
  "href": "https://ion.kjell.com/t/t?a=1098281531&as=2110221551&t=2&tk=1&epi=ev26q3-selected-6&url=www.kjell.com/se/produkter/ljud-bild/hogtalare/barbara-hogtalare/jbl-flip-7-portabel-tradlos-hogtalare-svart-p24592",
  "placement": "selected-product-offer",
  "checkedAt": "2026-09-22",
  "price": {
    "amount": 1689.0,
    "currency": "SEK",
    "checkedAt": "2026-09-22T10:48:38+02:00",
    "source": "https://www.kjell.com/se/produkter/ljud-bild/hogtalare/barbara-hogtalare/jbl-flip-7-portabel-tradlos-hogtalare-svart-p24592"
  }
};

export const selectedOffer7: MerchantOffer = {
  "merchantId": "nordicfeel",
  "merchantName": "NordicFeel",
  "productSlug": "cosrx-snail-96-100ml",
  "productName": "COSRX Advanced Snail 96 Mucin Power Essence 100 ml",
  "variant": "Advanced Snail 96 Mucin Power Essence · 100 ml · en flaska",
  "href": "https://at.nordicfeel.com/t/t?a=872761485&as=2110221551&t=2&tk=1&epi=ev26q3-selected-7&url=www.nordicfeel.com/se/product/cosrx-advanced-snail-96-mucin-power-essence-92950",
  "placement": "selected-product-offer",
  "checkedAt": "2026-09-14",
  "price": {
    "amount": 183.0,
    "currency": "SEK",
    "checkedAt": "2026-09-14T13:24:47+02:00",
    "source": "https://www.nordicfeel.com/se/product/cosrx-advanced-snail-96-mucin-power-essence-92950"
  }
};

export const selectedOffer8: MerchantOffer = {
  "merchantId": "kjell",
  "merchantName": "Kjell & Company",
  "productSlug": "anker-prime-300w-26250mah",
  "productName": "Anker Prime Powerbank 300 W PD 3.1 26250 mAh",
  "variant": "26 250 mAh · 300 W totalt · A110AH11 · utan laddstation",
  "href": "https://ion.kjell.com/t/t?a=1098281531&as=2110221551&t=2&tk=1&epi=ev26q3-selected-8&url=www.kjell.com/se/produkter/mobilt/powerbank/anker-prime-powerbank-300-w-pd-3.1-26250-mah-p88933",
  "placement": "selected-product-offer",
  "checkedAt": "2026-09-22",
  "priceNote": "Kampanjpris 1 990 kr (ordinarie 2 490 kr) till och med 27 september 2026 enligt Kjell. Butikens pris gäller vid köp.",
  "price": {
    "amount": 1990.0,
    "currency": "SEK",
    "checkedAt": "2026-09-22T10:48:38+02:00",
    "source": "https://www.kjell.com/se/produkter/mobilt/powerbank/anker-prime-powerbank-300-w-pd-3.1-26250-mah-p88933"
  }
};

export const selectedOffer9: MerchantOffer = {
  "merchantId": "nordicfeel",
  "merchantName": "NordicFeel",
  "productSlug": "clinisoothe-skin-purifier-100ml",
  "productName": "Clinisoothe Skin Purifier Spray 100 ml",
  "variant": "Skin Purifier Spray · 100 ml · en flaska",
  "href": "https://at.nordicfeel.com/t/t?a=872761485&as=2110221551&t=2&tk=1&epi=ev26q3-selected-9&url=www.nordicfeel.com/se/product/clinisoothe-skin-purifier-125103",
  "placement": "selected-product-offer",
  "checkedAt": "2026-09-14",
  "price": {
    "amount": 165.0,
    "currency": "SEK",
    "checkedAt": "2026-09-14T13:24:47+02:00",
    "source": "https://www.nordicfeel.com/se/product/clinisoothe-skin-purifier-125103"
  }
};

export const selectedOffer10: MerchantOffer = {
  "merchantId": "kjell",
  "merchantName": "Kjell & Company",
  "productSlug": "linocell-wireless-carplay-q1m",
  "productName": "Linocell Trådlös CarPlay- och Android Auto-adapter",
  "variant": "Q1M · artikel 22179 · CarPlay / Android Auto-adapter",
  "href": "https://ion.kjell.com/t/t?a=1098281531&as=2110221551&t=2&tk=1&epi=ev26q3-selected-10&url=www.kjell.com/se/produkter/ljud-bild/musikspelare-radio/musikmottagare-sandare/linocell-tradlos-carplay-och-android-auto-adapter-p22179",
  "placement": "selected-product-offer",
  "checkedAt": "2026-09-22",
  "priceNote": "Kampanjpris 279 kr (ordinarie 349,90 kr) till och med 30 september 2026 enligt Kjell. Butikens pris gäller vid köp.",
  "price": {
    "amount": 279.0,
    "currency": "SEK",
    "checkedAt": "2026-09-22T10:48:38+02:00",
    "source": "https://www.kjell.com/se/produkter/ljud-bild/musikspelare-radio/musikmottagare-sandare/linocell-tradlos-carplay-och-android-auto-adapter-p22179"
  }
};

// Lyko links generated for Elins val in Adtraction on 14 September 2026.
export const lykoOffer1: MerchantOffer = {
  "merchantId": "lyko",
  "merchantName": "Lyko",
  "productSlug": "ole-henriksen-pout-strawberry-12ml",
  "productName": "Ole Henriksen Pout Preserve Peptide Lip Treatment",
  "variant": "Strawberry Sorbet · 12 ml · en tub",
  "href": "https://ion.lyko.com/t/t?a=1117786221&as=2110221551&t=2&tk=1&epi=ev26q3-lyko-1&url=https%3A%2F%2Flyko.com%2Fsv%2Fole-henriksen%2Fole-henriksen-pout-preserve-lip-treatment-strawberry-sorbet-12-ml",
  "linkKind": "affiliate",
  "placement": "selected-product-offer",
  "checkedAt": "2026-09-14",
  "price": {
    "amount": 198,
    "currency": "SEK",
    "checkedAt": "2026-09-14T13:49:50.568Z",
    "source": "https://lyko.com/sv/ole-henriksen/ole-henriksen-pout-preserve-lip-treatment-strawberry-sorbet-12-ml"
  },
  "priceNote": "Priset gäller en styck utan eventuella kombinationsrabatter."
};

export const lykoOffer2: MerchantOffer = {
  "merchantId": "lyko",
  "merchantName": "Lyko",
  "productSlug": "lumene-cc-medium-30ml",
  "productName": "Lumene CC Color Correcting Cream SPF20",
  "variant": "2 Medium · 30 ml · en tub",
  "href": "https://ion.lyko.com/t/t?a=1117786221&as=2110221551&t=2&tk=1&epi=ev26q3-lyko-2&url=https%3A%2F%2Flyko.com%2Fsv%2Flumene%2Flumene-cc-color-correcting-cream-spf20-medium",
  "linkKind": "affiliate",
  "placement": "selected-product-offer",
  "checkedAt": "2026-09-14",
  "price": {
    "amount": 167,
    "currency": "SEK",
    "checkedAt": "2026-09-14T13:49:46.310Z",
    "source": "https://lyko.com/sv/lumene/lumene-cc-color-correcting-cream-spf20-medium"
  },
  "priceNote": "Priset gäller en styck utan eventuella kombinationsrabatter."
};

export const lykoOffer3: MerchantOffer = {
  "merchantId": "lyko",
  "merchantName": "Lyko",
  "productSlug": "amika-hydro-rush-leave-in-200ml",
  "productName": "Amika Hydro Rush Intense Moisture Leave-In Conditioner",
  "variant": "200 ml · en sprayflaska",
  "href": "https://ion.lyko.com/t/t?a=1117786221&as=2110221551&t=2&tk=1&epi=ev26q3-lyko-3&url=https%3A%2F%2Flyko.com%2Fsv%2Famika%2Famika-hydro-rush-intense-moisture-leave-in-conditioner-200ml",
  "linkKind": "affiliate",
  "placement": "selected-product-offer",
  "checkedAt": "2026-09-14",
  "price": {
    "amount": 349,
    "currency": "SEK",
    "checkedAt": "2026-09-14T13:49:45.045Z",
    "source": "https://lyko.com/sv/amika/amika-hydro-rush-intense-moisture-leave-in-conditioner-200ml"
  },
  "priceNote": "Priset gäller en styck utan eventuella kombinationsrabatter."
};

export const lykoOffer4: MerchantOffer = {
  "merchantId": "lyko",
  "merchantName": "Lyko",
  "productSlug": "la-roche-posay-cicaplast-b5-100ml",
  "productName": "La Roche-Posay Cicaplast Balm B5+",
  "variant": "100 ml · en tub · B5+ utan SPF",
  "href": "https://ion.lyko.com/t/t?a=1117786221&as=2110221551&t=2&tk=1&epi=ev26q3-lyko-4&url=https%3A%2F%2Flyko.com%2Fsv%2Fla-roche-posay%2Fla-roche-posay-cicaplast-balm-b5--100-ml",
  "linkKind": "affiliate",
  "placement": "selected-product-offer",
  "checkedAt": "2026-09-14",
  "price": {
    "amount": 197,
    "currency": "SEK",
    "checkedAt": "2026-09-14T13:49:49.018Z",
    "source": "https://lyko.com/sv/la-roche-posay/la-roche-posay-cicaplast-balm-b5--100-ml"
  },
  "priceNote": "Priset gäller en styck utan eventuella kombinationsrabatter."
};

export const lykoOffer5: MerchantOffer = {
  "merchantId": "lyko",
  "merchantName": "Lyko",
  "productSlug": "wella-sp-luxeoil-100ml",
  "productName": "Wella Professionals SP LuxeOil Reconstructive Oil Elixir",
  "variant": "100 ml · en flaska",
  "href": "https://ion.lyko.com/t/t?a=1117786221&as=2110221551&t=2&tk=1&epi=ev26q3-lyko-5&url=https%3A%2F%2Flyko.com%2Fsv%2Fwella-professionals%2Fwella-sp-luxeoil",
  "linkKind": "affiliate",
  "placement": "selected-product-offer",
  "checkedAt": "2026-09-14",
  "price": {
    "amount": 424,
    "currency": "SEK",
    "checkedAt": "2026-09-14T15:58:30+02:00",
    "source": "https://lyko.com/sv/wella-professionals/wella-sp-luxeoil"
  },
  "priceNote": "Priset gäller en styck utan eventuella kombinationsrabatter."
};

export const merchantOffers: readonly MerchantOffer[] = [k18NordicfeelOffer, koboKjellOffer, selectedOffer1, selectedOffer2, selectedOffer3, selectedOffer4, selectedOffer5, selectedOffer6, selectedOffer7, selectedOffer8, selectedOffer9, selectedOffer10, lykoOffer1, lykoOffer2, lykoOffer3, lykoOffer4, lykoOffer5];

export function getMerchantOffer(productSlug: string, merchantId?: string) {
  return merchantOffers.find(offer => offer.productSlug === productSlug && (!merchantId || offer.merchantId === merchantId));
}
