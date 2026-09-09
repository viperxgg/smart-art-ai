import { DecisionCard } from "@/components/DecisionCard";
import { validateDecisionRecord, type DecisionRecord } from "@/lib/decision-record";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, WandSparkles } from "lucide-react";

import { AmazonPurchaseCta } from "@/components/AmazonPurchaseCta";
import {
  Breadcrumbs,
  buildBreadcrumbSchema,
  type BreadcrumbItem,
} from "@/components/Breadcrumbs";
import { EditorialMeta } from "@/components/EditorialMeta";
import { JsonLd } from "@/components/JsonLd";
import { buildProductListSchema } from "@/lib/product-schema";
import { ProductBadges } from "@/components/ProductBadges";
import { RelatedLinks } from "@/components/RelatedLinks";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import { ComparisonProductCard } from "@/components/ComparisonProductCard";
import { getElinProductEvidence } from "@/lib/elin-product-evidence";

type DecisionComparisonPageProps = {
  h1: string;
  decision?: DecisionRecord;
  hideUnverifiedImages?: boolean;
  intro: string;
  badges: readonly string[];
  howToChoose: string;
  verdict: string;
  picks: readonly [DecisionComparisonPick, DecisionComparisonPick];
  comparisonRows: readonly (readonly [string, string, string])[];
  faqItems: readonly DecisionComparisonFaqItem[];
  breadcrumbItems: BreadcrumbItem[];
  relatedLinks: DecisionComparisonRelatedLink[];
  // Optional section that answers the generic "which one should I choose?"
  // intent in plain language, with one branded link down to a review.
  intentGuide?: {
    heading: string;
    paragraphs: readonly string[];
    link: { href: string; label: string };
  };
  // Legacy callers may still supply this; illustrations are not rendered as product evidence.
  heroImage?: { src: string; alt: string };
  backHref?: string;
  backLabel?: string;
};

export function buildDecisionComparisonSchemas({
  breadcrumbItems,
  faqItems,
  picks,
  h1,
}: {
  breadcrumbItems: BreadcrumbItem[];
  faqItems: readonly DecisionComparisonFaqItem[];
  picks?: readonly [DecisionComparisonPick, DecisionComparisonPick];
  h1?: string;
}) {
  // The last breadcrumb is the page itself, so it carries the canonical path.
  const pageUrl = breadcrumbItems.at(-1)?.href;

  return {
    productListSchema:
      picks && pageUrl
        ? buildProductListSchema({
            pageUrl,
            name: h1 ?? breadcrumbItems.at(-1)?.name ?? "Jämförelse",
            items: picks.map((pick) => ({
              product: pick.product,
              url: pick.path,
              description: getElinProductEvidence(pick.product).summary,
            })),
          })
        : null,
    breadcrumbSchema: buildBreadcrumbSchema(breadcrumbItems),
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  };
}

export function DecisionComparisonPage({
  h1,
  decision,
  hideUnverifiedImages = false,
  intro,
  badges,
  howToChoose,
  verdict,
  picks,
  comparisonRows,
  faqItems,
  breadcrumbItems,
  relatedLinks,
  intentGuide,
  backHref = "/skonhet",
  backLabel = "Tillbaka till skönhet",
}: DecisionComparisonPageProps) {
  const { breadcrumbSchema, faqSchema, productListSchema } =
    buildDecisionComparisonSchemas({
      breadcrumbItems,
      faqItems,
      picks,
      h1,
    });
  if (decision) validateDecisionRecord(decision, picks.map((pick) => pick.product.slug));
  const merchantPicks = picks.filter((pick) => decision?.options.find((option) => option.productSlug === pick.product.slug)?.merchantVariantVerified);
  // The last breadcrumb is the page itself, so it carries the canonical path.
  const pagePath = breadcrumbItems.at(-1)?.href ?? "/";

  return (
    <main
      id="content"
      tabIndex={-1}
      className="min-h-screen bg-bg px-4 py-7 text-ink"
    >
      {faqItems.length ? <JsonLd data={faqSchema} /> : null}
      {productListSchema ? <JsonLd data={productListSchema} /> : null}
      <JsonLd data={breadcrumbSchema} />
      <WebPageJsonLd path={pagePath} name={h1} />

      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <header className="flex items-center justify-between gap-4">
          <Link
            href={backHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-ink-soft transition hover:text-wine"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            {backLabel}
          </Link>
          <p className="rounded-full border border-line bg-surface/70 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-wine">
            Guide
          </p>
        </header>

        <section data-comparison-intro className="mt-4 rounded-2xl border border-line bg-surface/72 p-5 md:p-6">
          <h1 className="editorial-color-kiss max-w-4xl font-display text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
            {h1}
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-ink-soft sm:text-lg">
            {intro}
          </p>
          {!decision ? <ProductBadges badges={badges} className="mt-3" /> : null}
          <p data-comparison-disclosure className="mt-3 text-sm leading-6 text-ink-soft">
            <strong>Reklamlänkar</strong> · Elins val kan få provision vid köp via våra länkar. <Link href="/om-oss#sa-tjanar-vi-pengar" className="font-bold text-wine underline underline-offset-4">Så tjänar vi pengar</Link>.
          </p>
          {decision ? <Link href="#decision-title" className="mt-2 inline-flex min-h-11 items-center font-bold text-wine underline underline-offset-4">Gå till beslutshjälpen</Link> : null}
        </section>

        {decision ? <DecisionCard decision={decision} /> : null}
        <EditorialMeta path={pagePath} hideDate={Boolean(decision)} hideDisclosure className="mt-4" />

        <section className="reveal-fade mt-10 rounded-[2rem] border border-line bg-surface/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rose/15 text-wine">
              <WandSparkles size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="editorial-color-kiss font-display text-4xl">
                Hur väljer du?
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-soft">
                {howToChoose}
              </p>
            </div>
          </div>
        </section>

        {intentGuide ? (
          <section className="reveal-fade mt-10 rounded-[2rem] border border-line bg-surface/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <h2 className="editorial-color-kiss font-display text-4xl">
              {intentGuide.heading}
            </h2>
            {intentGuide.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 max-w-3xl text-lg leading-8 text-ink-soft"
              >
                {paragraph}
              </p>
            ))}
            <Link
              href={intentGuide.link.href}
              className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-rose/8 px-5 font-black text-wine transition hover:bg-rose/15"
            >
              {intentGuide.link.label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </section>
        ) : null}

        <section aria-label="Produkter i jämförelsen" className="mt-10 grid gap-6 md:grid-cols-2">
          {picks.map((pick) => <ComparisonProductCard
            key={pick.product.slug}
            product={pick.product}
            href={pick.path}
            option={decision?.options.find((option) => option.productSlug === pick.product.slug)}
            hideImage={hideUnverifiedImages}
          />)}
        </section>

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
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine">
                    Punkt
                  </th>
                  {picks.map((pick) => (
                    <th
                      key={pick.product.slug}
                      className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine"
                    >
                      {decision?.options.find((option) => option.productSlug === pick.product.slug)?.model ?? getElinProductEvidence(pick.product).title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([label, first, second]) => (
                  <tr key={label} className="border-b border-line">
                    <th className="px-6 py-5 font-black text-ink">
                      {label}
                    </th>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {first}
                    </td>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {second}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {merchantPicks.length ? (
          <div className="mt-8 grid gap-3 sm:grid-cols-2" data-merchant-actions>
            {merchantPicks.map((pick) => <AmazonPurchaseCta key={pick.product.slug} product={pick.product} />)}
          </div>
        ) : null}

        <section className="reveal-fade mt-12 rounded-[2rem] border border-line bg-rose/10 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <h2 className="editorial-color-kiss font-display text-4xl">
            Elins korta dom
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-ink-soft">
            {verdict}
          </p>
        </section>

        {faqItems.length ? (
          <section className="reveal-fade mt-12 rounded-[2rem] border border-line bg-surface/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <h2 className="editorial-color-kiss font-display text-4xl">
              Vanliga frågor
            </h2>
            <div className="mt-6 grid gap-4">
              {faqItems.map((item) => (
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

        <RelatedLinks links={relatedLinks} />
        <Link href="/fraga-elin" className="mt-6 inline-flex min-h-11 items-center font-bold text-wine underline underline-offset-4">Fråga Elin – valfri AI-hjälp</Link>
      </div>
    </main>
  );
}
