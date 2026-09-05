import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  SlidersHorizontal,
  TriangleAlert,
  Wind,
} from "lucide-react";

import { AmazonCta } from "@/components/AmazonCta";
import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { EditorialMeta } from "@/components/EditorialMeta";
import { JsonLd } from "@/components/JsonLd";
import { buildProductSchema } from "@/lib/product-schema";
import { ProductBadges } from "@/components/ProductBadges";
import { ProductComments } from "@/components/ProductComments";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SaveProductButton } from "@/components/SaveProductButton";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import {
  flaktComparisonRows,
  flaktFaqItems,
  type FlaktPick,
} from "@/lib/flakt";
import { formatRatingSummary } from "@/lib/ratings";
import { getApprovedReviews } from "@/lib/reviews/reviews";

type FlaktProductReviewPageProps = {
  pick: FlaktPick;
  otherPick: FlaktPick;
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: flaktFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export async function FlaktProductReviewPage({
  pick,
  otherPick,
}: FlaktProductReviewPageProps) {
  const approvedReviews = await getApprovedReviews(pick.product.slug);
  const breadcrumbItems = [
    { name: "Hem", href: "/" },
    { name: "Hälsa", href: "/halsa" },
    { name: "Fläkt", href: "/halsa/flakt" },
    { name: pick.product.title, href: pick.path },
  ];
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);
  const productSchema = buildProductSchema({
    product: pick.product,
    url: pick.path,
    description: pick.metaDescription,
    category: "Fläkt",
  });

  return (
    <main
      id="content"
      className="min-h-screen bg-bg px-4 py-7 text-ink"
    >
      {productSchema ? <JsonLd data={productSchema} /> : null}
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <WebPageJsonLd path={pick.path} name={pick.headline} />

      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <header className="flex items-center justify-between gap-4">
          <Link
            href="/halsa/flakt"
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-ink-soft transition hover:text-wine"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Tillbaka till fläktguiden
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            <SaveProductButton
              productSlug={pick.product.slug}
              productTitle={pick.product.title}
              className="grid min-h-11 min-w-11 place-items-center rounded-full border border-line bg-surface/70 text-wine shadow-[0_14px_36px_rgba(185,131,166,0.12)] transition hover:-translate-y-0.5 hover:bg-surface"
            />
            <p className="rounded-full border border-line bg-surface/70 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-wine">
              Annons
            </p>
          </div>
        </header>

        <section className="mt-8 grid gap-7 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div className="overflow-hidden rounded-[2.2rem] border border-line bg-surface shadow-[0_28px_90px_rgba(185,131,166,0.14)]">
            <ProductImageGallery images={pick.product.images} />
          </div>

          <article className="rounded-[2.2rem] border border-line bg-surface/72 p-6 shadow-[0_28px_90px_rgba(185,131,166,0.1)] md:p-9">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">
              Elins produktkoll
            </p>
            <p className="mt-4 inline-flex min-h-10 items-center rounded-full border border-line bg-rose/8 px-4 text-sm font-black text-wine">
              {pick.badge}
            </p>
            <ProductBadges badges={pick.product.badges} className="mt-4" />
            <h1 className="editorial-color-kiss mt-4 font-display text-4xl leading-[1.05] tracking-normal sm:text-6xl">
              {pick.headline}
            </h1>
            <EditorialMeta path={pick.path} className="mt-4" />
            <p className="mt-5 text-lg leading-8 text-ink-soft">
              {pick.shortBody}
            </p>
            <p className="mt-5 rounded-3xl border border-line bg-rose/8 p-4 text-sm leading-7 text-ink-soft">
              <strong>Annons</strong> · Den här sidan innehåller reklamlänkar.
              Om du handlar via våra länkar kan vi få en provision - utan extra
              kostnad för dig.
            </p>
          </article>
        </section>

        <AmazonCta href={pick.product.amazonUrl} product={pick.product} className="mt-5" />

        <section className="mt-7 rounded-[2rem] border border-line bg-rose/10 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">
            Varför den är värd platsen
          </p>
          <h2 className="editorial-color-kiss mt-2 font-display text-3xl">
            {pick.valueHook}
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-ink-soft">
            {pick.valueStatement}
          </p>
          <p className="mt-5 max-w-4xl rounded-2xl bg-surface/60 p-5 text-lg font-semibold leading-8 text-ink">
            {pick.verdict}
          </p>
          <h3 className="editorial-color-kiss mt-7 font-display text-2xl">
            Passar dig som...
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {pick.passFor.map((item) => (
              <div
                key={item}
                className="flex min-h-14 items-center gap-4 rounded-2xl bg-surface/60 px-4 py-3 font-bold text-ink"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-rose/15 text-wine">
                  <Wind size={20} aria-hidden="true" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-7 rounded-[2rem] border border-line bg-surface/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rose/15 text-wine">
              <SlidersHorizontal size={24} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">
                {pick.product.specSectionEyebrow}
              </p>
              <h2 className="editorial-color-kiss mt-2 font-display text-3xl">
                {pick.product.specSectionTitle}
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {pick.product.specs.map((spec) => (
              <div
                key={`${spec.label}-${spec.value}`}
                className="rounded-2xl bg-rose/8 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-wine">
                  {spec.caption}
                </p>
                <h3 className="mt-2 font-black text-ink">
                  {spec.label}
                </h3>
                <p className="mt-2 leading-7 text-ink-soft">{spec.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <article className="rounded-[2rem] border border-line bg-surface/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <h2 className="editorial-color-kiss font-display text-3xl">
              Bra att veta
            </h2>
            <div className="mt-6 flex min-h-14 items-start gap-4 rounded-2xl bg-rose/8 px-4 py-4 text-ink">
              <TriangleAlert
                className="mt-1 shrink-0 text-rose"
                size={22}
                aria-hidden="true"
              />
              <span className="font-semibold leading-7">{pick.caution}</span>
            </div>
          </article>
        </section>

        <section className="mt-7 overflow-hidden rounded-[2rem] border border-line bg-surface/72 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="p-6 md:p-8">
            <h2 className="editorial-color-kiss font-display text-3xl">
              Dreo vs Midea vs Honeywell - vilken ska du välja?
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-ink-soft">
              De löser olika behov: Dreo är den tystare premiumfläkten, Midea
              är sovrumsvänligt värde och Honeywell är den mer riktade
              budgetfläkten.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[44rem] border-collapse text-left">
              <thead>
                <tr className="border-y border-line bg-rose/8">
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine">
                    Punkt
                  </th>
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine">
                    Dreo Cruiser Pro
                  </th>
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine">
                    Midea FZ10
                  </th>
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine">
                    Honeywell TurboForce
                  </th>
                </tr>
              </thead>
              <tbody>
                {flaktComparisonRows.map(([label, dreo, midea, honeywell]) => (
                  <tr key={label} className="border-b border-line">
                    <th className="px-6 py-5 font-black text-ink">
                      {label}
                    </th>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {dreo}
                    </td>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {midea}
                    </td>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {honeywell}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 md:p-8">
            <p className="rounded-2xl bg-rose/8 p-5 font-semibold leading-8 text-ink">
              {pick.comparisonVerdict}{" "}
              <Link
                href={otherPick.path}
                className="font-black text-wine underline underline-offset-4"
              >
                Läs den andra recensionen
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="mt-7 grid gap-4 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-line bg-surface/72 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">
              {pick.product.amazonReviewSignal.sourceLabel}
            </p>
            <h2 className="editorial-color-kiss mt-2 font-display text-3xl">
              Amazon-signaler
            </h2>
            <p className="mt-4 leading-8 text-ink-soft">
              {formatRatingSummary(
                pick.product.amazonReviewSignal.ratingSummary,
                pick.product.amazonReviewSignal.ratingCheckedAt,
              )}
            </p>
            <a
              href={pick.product.amazonReviewSignal.sourceUrl}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center rounded-full border border-rose/45 bg-surface/72 px-5 text-sm font-black text-wine transition hover:bg-rose/8"
            >
              Se källan på Amazon
            </a>
          </article>
          <article className="rounded-[2rem] border border-line bg-surface/72 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <h2 className="editorial-color-kiss font-display text-3xl">
              Höjdpunkter och reservationer
            </h2>
            <div className="mt-6 grid gap-4">
              {pick.product.amazonReviewSignal.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-2xl bg-rose/8 p-4"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-wine"
                    size={20}
                    aria-hidden="true"
                  />
                  <p className="leading-7 text-ink">{highlight}</p>
                </div>
              ))}
              {pick.product.amazonReviewSignal.cautions.map((caution) => (
                <div
                  key={caution}
                  className="flex items-start gap-3 rounded-2xl bg-rose/8 p-4"
                >
                  <TriangleAlert
                    className="mt-1 shrink-0 text-rose"
                    size={20}
                    aria-hidden="true"
                  />
                  <p className="leading-7 text-ink">{caution}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-7">
          <ProductComments
            product={pick.product}
            reviews={approvedReviews}
            turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            sectionId={pick.reviewSectionId}
            formId={pick.reviewFormId}
          />
        </section>

        <RelatedLinks
          links={[
            {
              href: otherPick.path,
              label: "Jämför",
              text: `Se hur ${otherPick.product.title} skiljer sig från den här modellen.`,
            },
            {
              href: "/guider/flakt-dyr-vs-billig",
              label: "Guide",
              text: "Läs den ärliga jämförelsen mellan dyr och billig fläkt.",
            },
            {
              href: "/guider/tyst-flakt-sovrum",
              label: "Guide",
              text: "Guide: tyst fläkt för sovrummet",
            },
            {
              href: "/halsa/flakt",
              label: "Fläkt",
              text: "Till fläktguiden",
            },
          ]}
        />

        <section className="mt-7 rounded-[2rem] border border-line bg-surface/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="editorial-color-kiss font-display text-3xl">
            Vanliga frågor
          </h2>
          <div className="mt-6 grid gap-4">
            {flaktFaqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl bg-rose/8 p-5"
              >
                <summary className="cursor-pointer font-black text-ink">
                  {item.question}
                </summary>
                <p className="mt-3 leading-7 text-ink-soft">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <AmazonCta href={pick.product.amazonUrl} product={pick.product} panel className="mt-7" />

        <Link
          href="/halsa/flakt"
          className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-surface/70 px-5 font-bold text-ink-soft transition hover:text-wine"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Till fläktguiden
        </Link>
      </div>
    </main>
  );
}
