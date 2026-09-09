import { getApprovedProductImage } from "@/lib/product-image-approvals";
import { getElinProductEvidence } from "@/lib/elin-product-evidence";
import { DecisionCard } from "@/components/DecisionCard";
import { getGuideDecision } from "@/lib/ereader-decision";
import { validateDecisionRecord } from "@/lib/decision-record";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";

import { AmazonPurchaseLinks } from "@/components/AmazonPurchaseCta";
import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { EditorialMeta } from "@/components/EditorialMeta";
import { JsonLd } from "@/components/JsonLd";
import { ProductBadges } from "@/components/ProductBadges";
import { RelatedLinks } from "@/components/RelatedLinks";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { createSeoMetadata } from "@/lib/metadata";
import { buildProductListSchema } from "@/lib/product-schema";
import {
  getProductBySlug,
  getProductPageHref,
  type Product,
  type ProductCategorySlug,
} from "@/lib/products";
import { ComparisonProductCard } from "@/components/ComparisonProductCard";
import { siteConfig } from "@/lib/site";
import { getWaveGuide } from "@/lib/wave-content";

const categoryLabels: Record<ProductCategorySlug, string> = {
  traning: "Träning",
  halsa: "Hälsa",
  skonhet: "Skönhet",
  resa: "Resa",
};

const categoryHrefs: Record<ProductCategorySlug, string> = {
  traning: "/traning",
  halsa: "/halsa",
  skonhet: "/skonhet",
  resa: "/sommar/resa",
};

export function createWaveGuideMetadata(guideId: string) {
  const guide = getWaveGuide(guideId);
  const firstProduct = guide?.productSlugs
    .map((slug) => getProductBySlug(slug))
    .find(Boolean);

  if (!guide) {
    return {};
  }

  return createSeoMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    url: `${siteConfig.url}${guide.href}`,
    image: firstProduct && getApprovedProductImage(firstProduct.slug, firstProduct.image) && !getGuideDecision(guideId)
      ? {
          url: `${siteConfig.url}${firstProduct.image}`,
          width: 1200,
          height: 900,
          alt: firstProduct.imageAlt,
        }
      : undefined,
  });
}

export function WaveGuidePage({ guideId }: { guideId: string }) {
  const decision = getGuideDecision(guideId);
  const guide = getWaveGuide(guideId);

  if (!guide) {
    notFound();
  }

  const products = guide.productSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is Product => Boolean(product));

  if (products.length === 0) {
    throw new Error(`Wave guide "${guideId}" has no products for its Amazon CTA.`);
  }

  if (decision) validateDecisionRecord(decision, products.map((product) => product.slug));
  const merchantProducts = products.filter((product) => decision?.options.find((option) => option.productSlug === product.slug)?.merchantVariantVerified);

  const categoryLabel = categoryLabels[guide.category];
  const categoryHref = categoryHrefs[guide.category];
  const breadcrumbItems = [
    { name: "Hem", href: "/" },
    { name: categoryLabel, href: categoryHref },
    { name: guide.title, href: guide.href },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  // Products the guide actually decides between, as an ItemList of Product
  // nodes. Products without an editorial score are skipped by the builder,
  // and the whole block is omitted when none of them can be reviewed.
  const productListSchema = buildProductListSchema({
    pageUrl: guide.href,
    name: guide.title,
    items: products.map((product) => ({
      product,
      url: getProductPageHref(product),
      description: getElinProductEvidence(product).summary,
    })),
  });

  return (
    <main
      id="content"
      tabIndex={-1}
      className="min-h-screen bg-bg px-4 py-7 text-ink"
    >
      <JsonLd data={faqSchema} />
      {productListSchema ? <JsonLd data={productListSchema} /> : null}
      <JsonLd data={buildBreadcrumbSchema(breadcrumbItems)} />
      <WebPageJsonLd path={guide.href} name={guide.title} />

      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <header className="flex items-center justify-between gap-4">
          <Link
            href={categoryHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-ink-soft transition hover:text-wine"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Tillbaka till {categoryLabel.toLowerCase()}
          </Link>
          <p className="rounded-full border border-line bg-surface/70 px-4 py-2 text-xs font-black uppercase text-wine">
            {guide.label}
          </p>
        </header>

        <section className="mt-10 overflow-hidden rounded-[2.4rem] border border-line bg-surface/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.12)] md:p-10">
          <p className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-rose/8 px-5 text-sm font-black text-wine">
            <Sparkles size={18} aria-hidden="true" />
            Elins guide 2026
          </p>
          <h1 className="editorial-color-kiss mt-6 max-w-4xl font-display text-5xl leading-[1.04] tracking-normal sm:text-7xl">
            {guide.title}
          </h1>
          <EditorialMeta path={guide.href} className="mt-5" />
          <ProductBadges badges={guide.badges} className="mt-6" />
          <p className="mt-6 max-w-3xl text-xl leading-9 text-ink-soft">
            {guide.intro}
          </p>
          <p className="mt-6 rounded-3xl border border-line bg-rose/8 p-4 text-sm leading-7 text-ink-soft">
            <strong>Annons</strong> · Produktsidorna innehåller reklamlänkar.
            Om du handlar via våra länkar kan vi få en provision, utan extra
            kostnad för dig.
          </p>
        </section>

        {decision ? <DecisionCard decision={decision} /> : null}

        <section className="reveal-fade mt-10 rounded-[2rem] border border-line bg-surface/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rose/15 text-wine">
              <CheckCircle2 size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="editorial-color-kiss font-display text-4xl">
                {guide.choiceTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-soft">
                {guide.choiceText}
              </p>
            </div>
          </div>
        </section>

        <section aria-label="Produkter i jämförelsen" className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map((product) => <ComparisonProductCard
            key={product.slug}
            product={product}
            href={getProductPageHref(product)}
            option={decision?.options.find((option) => option.productSlug === product.slug)}
          />)}
        </section>

        {guide.rows.length ? (
          <section className="reveal-fade mt-12 overflow-hidden rounded-[2rem] border border-line bg-surface/72 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
            <div className="p-6 md:p-8">
              <h2 className="editorial-color-kiss font-display text-4xl">
                Snabb jämförelse
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[44rem] border-collapse text-left">
                <thead>
                  <tr className="border-y border-line bg-rose/8">
                    <th className="px-6 py-4 text-sm font-black uppercase text-wine">
                      Punkt
                    </th>
                    {products.map((product) =>
                      product ? (
                        <th
                          key={product.slug}
                          className="px-6 py-4 text-sm font-black uppercase text-wine"
                        >
                          {decision?.options.find((option) => option.productSlug === product.slug)?.model ?? getElinProductEvidence(product).title}
                        </th>
                      ) : null,
                    )}
                  </tr>
                </thead>
                <tbody>
                  {guide.rows.map((row) => (
                    <tr key={row.label} className="border-b border-line">
                      <th className="px-6 py-5 font-black text-ink">
                        {row.label}
                      </th>
                      {row.values.map((value, index) => (
                        <td
                          key={`${row.label}-${index}`}
                          className="px-6 py-5 leading-7 text-ink-soft"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        <section className="reveal-fade mt-12 rounded-[2rem] border border-line bg-rose/10 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <h2 className="editorial-color-kiss font-display text-4xl">
            Elins korta dom
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-ink-soft">
            {guide.verdict}
          </p>
        </section>

        {merchantProducts.length ? <AmazonPurchaseLinks products={merchantProducts} className="mt-6" /> : null}

        {guide.faqItems.length ? (
          <section className="reveal-fade mt-12 rounded-[2rem] border border-line bg-surface/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <h2 className="editorial-color-kiss font-display text-4xl">
              Vanliga frågor
            </h2>
            <div className="mt-6 grid gap-4">
              {guide.faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl bg-rose/8 p-5"
                >
                  <summary className="cursor-pointer font-black text-ink">
                    {item.question}
                  </summary>
                  <p className="mt-3 leading-7 text-ink-soft">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        <RelatedLinks links={guide.relatedLinks} />
        <Link href="/fraga-elin" className="mt-6 inline-flex min-h-11 items-center font-bold text-wine underline underline-offset-4">Fråga Elin – valfri AI-hjälp</Link>
      </div>
    </main>
  );
}
