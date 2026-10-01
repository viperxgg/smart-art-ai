import { JsonLd } from "@/components/JsonLd";
import { getSelectedProduct, selectedProductSchema } from "@/lib/selected-products";
import { getProductRecord } from "@/lib/selected-product-records";
import { getVerifiedMerchantPrice } from "@/lib/merchant-price";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { MerchantAction } from "@/components/MerchantAction";
import { MerchantOfferStatus } from "@/components/MerchantOfferStatus";
import { getMerchantOfferPresentation } from "@/lib/merchant-offer-availability";
import { getMerchantOffers } from "@/lib/merchant-offers";
import { getAmazonOffer } from "@/lib/amazon-offers";
import { getProductBySlug } from "@/lib/products";
import { isMerchantCtaEligible } from "@/lib/merchant-cta-eligibility";
import { getLegacyOfferTime, legacySelectedProductIds } from "@/lib/legacy-merchant-paths";
import type { DecisionOption } from "@/lib/decision-record";

export function LegacyMerchantPath({ options, productPaths }: { options: readonly DecisionOption[]; productPaths: readonly string[] }) {
  const now = getLegacyOfferTime();
  const products = options.flatMap<Record<string, unknown>>(option => {
    const id = legacySelectedProductIds[option.productSlug];
    if (!id) return [];
    const record = getProductRecord(id);
    if (!record) return [];
    if (record.selected) return selectedProductSchema(getSelectedProduct(id), now)["@graph"].filter(node => node["@type"] === "Product");
    const offers = getMerchantOffers(id).filter(offer => offer.price && getVerifiedMerchantPrice(offer.price, now)
      && offer.availability === "https://schema.org/InStock" && Date.parse(offer.availabilityCheckedAt) <= now)
      .map(offer => ({ "@type": "Offer", url: offer.href, price: offer.price!.amount, priceCurrency: "SEK", availability: offer.availability, seller: { "@type": "Organization", name: offer.merchantName } }));
    return offers.length ? [{ "@type": "Product", "@id": `${siteConfig.url}${record.path}#product`, name: record.name, image: `${siteConfig.url}${record.image.src}`, ...(record.gtin ? { gtin13: record.gtin } : {}), offers }] : [];
  });
  return <section aria-label="Välj butik" data-legacy-cta className="mt-4 border-y border-line py-3">
    {products.length ? <JsonLd data={{ "@context": "https://schema.org", "@graph": products }} /> : null}
    <h3 className="text-base font-bold">Välj butik</h3>
    <div className="mt-2 grid gap-3 sm:grid-cols-2">
      {options.map((option, index) => {
        const id = legacySelectedProductIds[option.productSlug] ?? option.productSlug;
        const offers = getMerchantOffers(id).filter(offer => offer.linkKind !== "direct");
        const selectedAmazon = getAmazonOffer(id);
        const catalog = getProductBySlug(option.productSlug);
        const catalogAmazon = catalog && isMerchantCtaEligible(option.productSlug) ? catalog : undefined;
        const hasOffers = offers.length > 0 || selectedAmazon || catalogAmazon;
        return <div key={option.productSlug} className="min-w-0" data-legacy-product={option.productSlug}>
          <h4 className="text-sm font-semibold">{getProductRecord(id)?.name ?? option.model}</h4>
          {getProductRecord(id) ? <p className="mt-1 text-xs text-ink-soft">Verifierade erbjudanden gäller {getProductRecord(id)!.variant}. Kontrollera förpackningen hos butiken.</p> : null}
          {offers.map(offer => <div key={offer.merchantId}>
            <MerchantAction href={offer.href} merchant={offer.merchantId} product={id} placement="legacy-cta" label={getMerchantOfferPresentation(offer, now).ctaLabel} disclosure={`Annons / Reklam för ${offer.merchantName}`} />
            <MerchantOfferStatus offer={offer} now={now} />
          </div>)}
          {selectedAmazon ? <MerchantAction href={selectedAmazon.href} merchant="amazon" product={id} placement="legacy-cta" label="Se pris hos Amazon" disclosure="Annonslänk · Kontrollera totalpriset inklusive frakt." /> : catalogAmazon ? <MerchantAction href={catalogAmazon.amazonUrl} product={option.productSlug} placement="legacy-cta" label={`Se pris hos Amazon – ${catalogAmazon.brand}`} disclosure="Som Amazon-associates tjänar vi pengar på kvalificerade köp." /> : null}
          {!hasOffers ? <Link href={productPaths[index]} className="inline-flex min-h-11 items-center text-sm font-semibold text-wine underline underline-offset-4">Läs modellens underlag<span className="sr-only">: {option.model}</span></Link> : null}
        </div>;
      })}
    </div>
  </section>;
}
