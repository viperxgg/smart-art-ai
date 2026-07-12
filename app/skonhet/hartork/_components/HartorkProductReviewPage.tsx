import Link from "next/link";
import { ArrowLeft, HeartPulse, TriangleAlert } from "lucide-react";

import { AmazonCta } from "@/components/AmazonCta";
import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { ElinsScoreCard } from "@/components/ElinsScoreCard";
import { ProductBadges } from "@/components/ProductBadges";
import { JsonLd } from "@/components/JsonLd";
import { ProductComments } from "@/components/ProductComments";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SaveProductButton } from "@/components/SaveProductButton";
import { TrustReviewLayers } from "@/components/TrustReviewLayers";
import {
  hartorkComparisonRows,
  hartorkFaqItems,
  type HartorkPick,
} from "@/lib/hartork";
import { getApprovedReviews } from "@/lib/reviews/reviews";
import { buildElinReviewNode, getEditorialScore } from "@/lib/scores";
import { siteConfig } from "@/lib/site";

type HartorkProductReviewPageProps = {
  pick: HartorkPick;
  otherPick: HartorkPick;
};

function buildProductSchema(pick: HartorkPick) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pick.product.title,
    brand: {
      "@type": "Brand",
      name: pick.product.brand,
    },
    sku: pick.product.asin,
    image: `${siteConfig.url}${pick.product.image}`,
    description: pick.metaDescription,
    category: "Hårtork",
    review: buildElinReviewNode(pick.product.slug),
  };
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: hartorkFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export async function HartorkProductReviewPage({
  pick,
  otherPick,
}: HartorkProductReviewPageProps) {
  const approvedReviews = await getApprovedReviews(pick.product.slug);
  const editorialScore = getEditorialScore(pick.product.slug);
  const breadcrumbItems = [
    { name: "Hem", href: "/" },
    { name: "Skönhet", href: "/skonhet" },
    { name: "Hårtork", href: "/skonhet/hartork" },
    { name: pick.product.title, href: pick.path },
  ];

  return (
    <main
      id="content"
      className="min-h-screen bg-bg px-4 py-7 text-ink"
    >
      <JsonLd data={buildProductSchema(pick)} />
      <JsonLd data={faqSchema} />
      <JsonLd data={buildBreadcrumbSchema(breadcrumbItems)} />

      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <header className="flex items-center justify-between gap-4">
          <Link
            href="/skonhet/hartork"
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-ink-soft transition hover:text-wine"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Tillbaka till hårtork-guiden
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
            <h1 className="editorial-color-kiss mt-4 font-display text-4xl leading-[1.05] tracking-[-0.035em] sm:text-6xl">
              {pick.headline}
            </h1>
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

        {editorialScore ? (
          <ElinsScoreCard score={editorialScore} className="mt-7" />
        ) : null}

        <AmazonCta href={pick.product.amazonUrl} product={pick.product} className="mt-5" />

        <section className="mt-7 rounded-[2rem] border border-line bg-rose/10 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">
            Prisvärt val
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
                className="flex min-h-14 items-center gap-4 rounded-2xl bg-surface/60 px-4 font-bold text-ink"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-rose/15 text-wine">
                  <HeartPulse size={20} aria-hidden="true" />
                </span>
                {item}
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
              Beurer HC 25 vs Remington PROluxe AC9140
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-ink-soft">
              Beurer är bäst när pris, vikt och resa styr valet. Remington är
              bättre när du vill ha fullstor kraft och en mer salongslik känsla
              hemma.
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
                    Beurer HC 25
                  </th>
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine">
                    Remington PROluxe AC9140
                  </th>
                </tr>
              </thead>
              <tbody>
                {hartorkComparisonRows.map(([label, beurer, remington]) => (
                  <tr key={label} className="border-b border-line">
                    <th className="px-6 py-5 font-black text-ink">
                      {label}
                    </th>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {beurer}
                    </td>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {remington}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 md:p-8">
            <p className="rounded-2xl bg-rose/8 p-5 font-semibold leading-8 text-ink">
              {pick.comparisonNote}{" "}
              <Link
                href={pick.comparisonHref}
                className="font-black text-wine underline underline-offset-4"
              >
                {pick.comparisonCta}
              </Link>
              .
            </p>
          </div>
        </section>

        <div className="mt-7">
          <TrustReviewLayers
            amazonSummary={pick.amazonSummary}
            amazonQuotes={pick.amazonQuotes}
            reviewHref={`#${pick.reviewSectionId}`}
          />
        </div>

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
              href: "/skonhet/hartork",
              label: "Guide",
              text: "Tillbaka till Elins korta hårtorksjämförelse.",
            },
          ]}
        />

        <section className="mt-7 rounded-[2rem] border border-line bg-surface/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="editorial-color-kiss font-display text-3xl">
            Vanliga frågor
          </h2>
          <div className="mt-6 grid gap-4">
            {hartorkFaqItems.map((item) => (
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
          href="/skonhet/hartork"
          className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-surface/70 px-5 font-bold text-ink-soft transition hover:text-wine"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Till jämförelsen
        </Link>
      </div>
    </main>
  );
}
