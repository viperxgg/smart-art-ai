// Exact variants inspected on Amazon.se. K18 and Kobo links were checked
// in Associates Link Checker; subsequent links use the same Special Link format.
// These are link-only offers: manual page observations are not publishable price
// snapshots. Numeric Amazon prices need an authorized API and its freshness rules.
export type AmazonOffer = {
  productSlug: string;
  asin: string;
  productName: string;
  variant: string;
  source: string;
  href: string;
  identityCheckedAt: string;
};

export const amazonOffers: readonly AmazonOffer[] = [
  {
    productSlug: "beauty-of-joseon-propolis-serum",
    asin: "B086VKZZZY",
    productName: "Beauty of Joseon Glow Serum Propolis + Niacinamide",
    variant: "30 ml · en flaska · EAN 8809657114960",
    source: "https://www.amazon.se/dp/B086VKZZZY",
    href: "https://www.amazon.se/dp/B086VKZZZY?tag=azzamkhalaf-21",
    identityCheckedAt: "2026-09-14",
  },
  {
    productSlug: "k18-leave-in-50ml",
    asin: "B0961ZS96M",
    productName: "K18 Leave-In Molecular Repair Hair Mask",
    variant: "50 ml · en flaska",
    source: "https://www.amazon.se/dp/B0961ZS96M",
    href: "https://www.amazon.se/dp/B0961ZS96M?tag=azzamkhalaf-21",
    identityCheckedAt: "2026-09-14",
  },
  {
    productSlug: "kobo-clara-bw",
    asin: "B0CZXYV8GT",
    productName: "Kobo Clara BW",
    variant: "6 tum · 16 GB · svart · svartvit skärm",
    source: "https://www.amazon.se/dp/B0CZXYV8GT",
    href: "https://www.amazon.se/dp/B0CZXYV8GT?tag=azzamkhalaf-21",
    identityCheckedAt: "2026-09-14",
  },
{
  "productSlug": "redken-acidic-bonding-leave-in-150ml",
  "asin": "B08P67N41H",
  "productName": "Redken Acidic Bonding Concentrate Leave-In Treatment 150 ml",
  "variant": "150 ml · en tub",
  "source": "https://www.amazon.se/dp/B08P67N41H",
  "href": "https://www.amazon.se/dp/B08P67N41H?tag=azzamkhalaf-21",
  "identityCheckedAt": "2026-09-14"
},
{
  "productSlug": "cmf-buds-2-dark-grey",
  "asin": "B0DZ81TM6Y",
  "productName": "Nothing CMF Buds 2 Mörkgrå",
  "variant": "Buds 2 · mörkgrå · modell 3000365",
  "source": "https://www.amazon.se/dp/B0DZ81TM6Y",
  "href": "https://www.amazon.se/dp/B0DZ81TM6Y?tag=azzamkhalaf-21",
  "identityCheckedAt": "2026-09-14"
},
{
  "productSlug": "tapo-c520ws-single",
  "asin": "B0CCW8GHT8",
  "productName": "TP-Link Tapo C520WS Övervakningskamera",
  "variant": "Tapo C520WS · en kamera · nätansluten",
  "source": "https://www.amazon.se/dp/B0CCW8GHT8",
  "href": "https://www.amazon.se/dp/B0CCW8GHT8?tag=azzamkhalaf-21",
  "identityCheckedAt": "2026-09-14"
},
{
  "productSlug": "kerastase-glaze-drops-45ml",
  "asin": "B0DQV1FQ49",
  "productName": "Kérastase Gloss Absolu Glaze Drops Hair Oil 45 ml",
  "variant": "Gloss Absolu · Glaze Drops Hair Oil · 45 ml",
  "source": "https://www.amazon.se/dp/B0DQV1FQ49",
  "href": "https://www.amazon.se/dp/B0DQV1FQ49?tag=azzamkhalaf-21",
  "identityCheckedAt": "2026-09-14"
},
{
  "productSlug": "jbl-flip-7-black",
  "asin": "B0DXKMXPXW",
  "productName": "JBL Flip 7 Portabel trådlös högtalare Svart",
  "variant": "Flip 7 · svart · JBLFLIP7BLK · en högtalare",
  "source": "https://www.amazon.se/dp/B0DXKMXPXW",
  "href": "https://www.amazon.se/dp/B0DXKMXPXW?tag=azzamkhalaf-21",
  "identityCheckedAt": "2026-09-14"
},
{
  "productSlug": "cosrx-snail-96-100ml",
  "asin": "B00PBX3L7K",
  "productName": "COSRX Advanced Snail 96 Mucin Power Essence 100 ml",
  "variant": "Advanced Snail 96 Mucin Power Essence · 100 ml · en flaska",
  "source": "https://www.amazon.se/dp/B00PBX3L7K",
  "href": "https://www.amazon.se/dp/B00PBX3L7K?tag=azzamkhalaf-21",
  "identityCheckedAt": "2026-09-14"
},
{
  "productSlug": "clinisoothe-skin-purifier-100ml",
  "asin": "B08LTTBGPN",
  "productName": "Clinisoothe Skin Purifier Spray 100 ml",
  "variant": "Skin Purifier Spray · 100 ml · en flaska",
  "source": "https://www.amazon.se/dp/B08LTTBGPN",
  "href": "https://www.amazon.se/dp/B08LTTBGPN?tag=azzamkhalaf-21",
  "identityCheckedAt": "2026-09-14"
},
{
  "productSlug": "wella-sp-luxeoil-100ml",
  "asin": "B009ZVHWW4",
  "productName": "Wella Professionals SP LuxeOil Reconstructive Oil Elixir",
  "variant": "100 ml · en flaska",
  "source": "https://www.amazon.se/dp/B009ZVHWW4",
  "href": "https://www.amazon.se/dp/B009ZVHWW4?tag=azzamkhalaf-21",
  "identityCheckedAt": "2026-09-14"
},
];

export function getAmazonOffer(productSlug: string) {
  return amazonOffers.find((offer) => offer.productSlug === productSlug);
}
