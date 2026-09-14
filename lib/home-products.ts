import { k18NordicfeelOffer, koboKjellOffer, type MerchantOffer } from "@/lib/merchant-offers";
import { getVerifiedMerchantPrice } from "@/lib/merchant-price";
import { getPartnerOfferImage } from "@/lib/partner-image-assets";

export type HomeProduct = {
  offer: MerchantOffer;
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

export const curatedHomeProducts: readonly HomeProduct[] = [
  {
    offer: k18NordicfeelOffer,
    category: "Skönhet",
    title: "K18 Leave-In Hair Mask",
    href: "/guider/harinpackning#hair-routine-detail",
    linkLabel: "Läs om K18 och din hårrutin",
    fit: "För dig med blekt eller färgat hår som vill undersöka en leave-in-behandling när din nuvarande rutin inte räcker.",
    caveat: "Vi har inte testat effekten. En rutin som redan fungerar är inget skäl att byta.",
    addedAt: "2026-09-14T11:58:26+02:00",
    reviewed: true,
    available: true,
  },
  {
    offer: koboKjellOffer,
    category: "Hälsa & vardag",
    title: "Kobo Clara BW",
    href: "/halsa/kindle-eller-kobo",
    linkLabel: "Jämför Kobo och Kindle",
    fit: "För dig som vill läsa på en kompakt, svartvit sextumsskärm och har kontrollerat att dina böcker fungerar med Kobo.",
    caveat: "Bibliotek och boktjänster kan kräva olika överföringssteg. Laddare ingår inte i Kjells listade produkt.",
    addedAt: "2026-09-14T11:58:26+02:00",
    reviewed: true,
    available: true,
  },
];

// Add only evidence-reviewed offers, with a canonical merchant offer, permitted
// image and weekly price-register entry. This is not an unreviewed feed import.
export const newHomeOffers: readonly HomeProduct[] = [];

export function selectHomeProducts(
  fixed: readonly HomeProduct[],
  candidates: readonly HomeProduct[],
  now = Date.now(),
) {
  const eligible = (product: HomeProduct) => {
    const added = Date.parse(product.addedAt);
    const end = product.campaignEndsAt === undefined ? Infinity : Date.parse(product.campaignEndsAt);
    return product.reviewed && product.available
      && Number.isFinite(added) && added <= now && end > now
      && product.title.trim() && product.fit.trim() && product.caveat.trim()
      && product.linkLabel.trim() && /^\/(?!\/)/.test(product.href)
      && product.offer.price && getVerifiedMerchantPrice(product.offer.price, now)
      && getPartnerOfferImage(product.offer.productSlug, product.offer.merchantId);
  };
  const seen = new Set<string>();
  const take = (products: readonly HomeProduct[]) => products.filter((product) => {
    if (!eligible(product) || seen.has(product.offer.productSlug)) return false;
    seen.add(product.offer.productSlug);
    return true;
  }).slice(0, 2);
  const curated = take(fixed);
  // All pinned products stay out of the rotating queue, including a temporarily
  // unavailable pinned product. Price-check dates never control recency.
  fixed.forEach((product) => seen.add(product.offer.productSlug));
  const recent = take([...candidates].sort((a, b) =>
    Date.parse(b.addedAt) - Date.parse(a.addedAt)
      || a.offer.productSlug.localeCompare(b.offer.productSlug)));
  return { curated, recent };
}
