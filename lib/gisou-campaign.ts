import type { MerchantOffer } from "@/lib/merchant-offers";

/** Source-led design preview. Publication is a separate, explicit release. */
export const gisouCampaign = {
  id: "gisou-honey-glaze-lip-mask-15ml",
  path: "/skonhet/gisou-lappmask-vad-far-du",
  name: "Gisou Honey Glaze Collagen Therapy Lip Mask",
  variant: "Original · Honey Buttercream · 15 ml",
  heading: "299 kr för den här lilla burken?",
  price: {
    amount: 299,
    currency: "SEK" as const,
    checkedAt: "2026-10-06T14:34:46.451163+00:00",
    source: "https://www.kicks.se/gisou-honey-glaze-collagen-therapy-lip-mask",
  },
  image: {
    src: "/images/products/gisou-honey-glaze-lip-mask-15ml.avif",
    alt: "Gisou Honey Glaze läppmask i ljusgul burk med den medföljande spateln, Original 15 ml",
    width: 890,
    height: 890,
  },
  merchantHref: "https://dot.kicks.se/t/t?a=1179647808&as=2110221551&t=2&tk=1&epi=gisou-lip-mask-2026-10&url=www.kicks.se/gisou-honey-glaze-collagen-therapy-lip-mask",
  linkKind: "affiliate" as const,
  manufacturer: "https://gisou.com/products/honey-glaze-collagen-therapy-lip-mask",
  faqs: [
    {
      question: "Vad får jag för 299 kr?",
      answer: "Du får 15 ml Gisou Honey Glaze Collagen Therapy Lip Mask i doften Honey Buttercream och en liten spatel. Priset kontrollerades hos KICKS den 6 oktober 2026. Butikens pris vid köpet gäller.",
    },
    {
      question: "Behöver läppmasken bara användas på natten?",
      answer: "Nej. Gisou rekommenderar ett tunt lager på dagen eller ett tjockare lager före läggdags. Ta en liten mängd med den medföljande spateln.",
    },
    {
      question: "Är den oparfymerad?",
      answer: "Nej. Original har doften Honey Buttercream och innehåller parfym eller arom. Välj en oparfymerad produkt om det är vad du söker.",
    },
    {
      question: "Behöver jag den om jag redan har ett läppbalsam?",
      answer: "Om ditt läppbalsam redan fungerar för dig behöver du inte lägga till en läppmask. Den här är ett alternativ för dig som vill ha en doftsatt läppmask i burk och uppskattar en extra stund i rutinen.",
    },
  ],
} as const;

export const gisouKicksOffer: MerchantOffer = {
  merchantId: "kicks",
  merchantName: "KICKS",
  productSlug: gisouCampaign.id,
  productName: gisouCampaign.name,
  variant: gisouCampaign.variant,
  href: gisouCampaign.merchantHref,
  linkKind: gisouCampaign.linkKind,
  placement: "gisou-guide",
  checkedAt: gisouCampaign.price.checkedAt,
  availability: "https://schema.org/InStock",
  availabilityCheckedAt: gisouCampaign.price.checkedAt,
  price: gisouCampaign.price,
};

/** Opt-in only on a local review server, including a local production build. */
export function isGisouPreviewEnabled() {
  return process.env.ELINS_GISOU_PREVIEW === "1" && process.env.VERCEL !== "1";
}
