import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  HeartPulse,
  SlidersHorizontal,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

import { AmazonCta } from "@/components/AmazonCta";
import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { ElinProductButton } from "@/components/elin/ElinProductButton";
import { ElinsScoreCard } from "@/components/ElinsScoreCard";
import { JsonLd } from "@/components/JsonLd";
import { ProductBadges } from "@/components/ProductBadges";
import { ProductComments } from "@/components/ProductComments";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SaveProductButton } from "@/components/SaveProductButton";
import { TrustReviewLayers } from "@/components/TrustReviewLayers";
import { getApprovedReviews } from "@/lib/reviews/reviews";
import { getEditorialScore } from "@/lib/scores";
import { siteConfig } from "@/lib/site";
import type { SommarPick } from "@/lib/sommar";

type SommarProductReviewPageProps = {
  pick: SommarPick;
};

const categoryLabels = {
  traning: "Träning",
  halsa: "Hälsa",
  skonhet: "Skönhet",
} as const;

const categoryHrefs = {
  traning: "/traning",
  halsa: "/halsa",
  skonhet: "/skonhet",
} as const;

function buildProductSchema(pick: SommarPick) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pick.product.title,
    brand: {
      "@type": "Brand",
      name: pick.product.brand,
    },
    ...(pick.product.asin ? { sku: pick.product.asin } : {}),
    image: `${siteConfig.url}${pick.product.image}`,
    description: pick.metaDescription,
    category: categoryLabels[pick.product.category],
  };
}

function buildFaqSchema(pick: SommarPick) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pick.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export async function SommarProductReviewPage({
  pick,
}: SommarProductReviewPageProps) {
  const approvedReviews = await getApprovedReviews(pick.product.slug);
  const editorialScore = getEditorialScore(pick.product.slug);
  const categoryLabel = categoryLabels[pick.product.category];
  const categoryHref = categoryHrefs[pick.product.category];
  const breadcrumbItems = [
    { name: "Hem", href: "/" },
    { name: categoryLabel, href: categoryHref },
    { name: "Sommar", href: "/sommar" },
    { name: pick.product.title, href: pick.href },
  ];
  const hasProductSpecs = pick.product.specs.length > 0;
  const hasAmazonSignalDetails =
    pick.product.amazonReviewSignal.highlights.length > 0 ||
    pick.product.amazonReviewSignal.cautions.length > 0;

  return (
    <main
      id="content"
      className="min-h-screen bg-[#FFF9F7] px-4 py-7 text-[#3E2F3A]"
    >
      <JsonLd data={buildProductSchema(pick)} />
      <JsonLd data={buildFaqSchema(pick)} />
      <JsonLd data={buildBreadcrumbSchema(breadcrumbItems)} />

      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <header className="flex items-center justify-between gap-4">
          <Link
            href="/sommar"
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-[#6b4755] transition hover:text-[#B983A6]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Tillbaka till sommar-glow
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            <SaveProductButton
              productSlug={pick.product.slug}
              productTitle={pick.product.title}
              className="grid min-h-11 min-w-11 place-items-center rounded-full border border-[#E9CDD3] bg-white/70 text-[#9E5E73] shadow-[0_14px_36px_rgba(185,131,166,0.12)] transition hover:-translate-y-0.5 hover:bg-white"
            />
            <p className="rounded-full border border-[#E9CDD3] bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#B983A6]">
              Annons
            </p>
          </div>
        </header>

        <section className="mt-8 grid gap-7 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div className="overflow-hidden rounded-[2.2rem] border border-[#F1D8DD] bg-[#F6F0EC] shadow-[0_28px_90px_rgba(185,131,166,0.14)]">
            <ProductImageGallery images={pick.product.images} />
          </div>

          <article className="rounded-[2.2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_28px_90px_rgba(185,131,166,0.1)] md:p-9">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
              Elins produktkoll
            </p>
            <p className="mt-4 inline-flex min-h-10 items-center rounded-full border border-[#E9CDD3] bg-[#FFF4F5] px-4 text-sm font-black text-[#9E5E73]">
              {pick.badge}
            </p>
            <ProductBadges badges={pick.product.badges} className="mt-4" />
            <h1 className="editorial-color-kiss mt-4 font-display text-4xl leading-[1.05] tracking-normal sm:text-6xl">
              {pick.headline}
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#6f5a64]">
              {pick.shortBody}
            </p>
            <p className="mt-5 rounded-3xl border border-[#F1D8DD] bg-[#FFF4F5] p-4 text-sm leading-7 text-[#6f5a64]">
              <strong>Annons</strong> · Den här sidan innehåller reklamlänkar.
              Om du handlar via våra länkar kan vi få en provision - utan extra
              kostnad för dig.
            </p>
          </article>
        </section>

        {editorialScore ? (
          <ElinsScoreCard score={editorialScore} className="mt-7" />
        ) : null}

        <AmazonCta href={pick.product.amazonUrl} className="mt-5" />
        <div className="mt-4">
          <ElinProductButton
            product={{
              slug: pick.product.slug,
              title: pick.product.title,
              category: pick.product.category,
            }}
          />
        </div>

        <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-[#F9E9E9]/82 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Varför den är värd platsen
          </p>
          <h2 className="editorial-color-kiss mt-2 font-display text-3xl">
            {pick.valueHook}
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#6f5a64]">
            {pick.valueStatement}
          </p>
          <p className="mt-5 max-w-4xl rounded-2xl bg-white/60 p-5 text-lg font-semibold leading-8 text-[#5f4a54]">
            {pick.verdict}
          </p>
          <h3 className="editorial-color-kiss mt-7 font-display text-2xl">
            Passar dig som...
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {pick.passFor.map((item) => (
              <div
                key={item}
                className="flex min-h-14 items-center gap-4 rounded-2xl bg-white/60 px-4 py-3 font-bold text-[#5f4a54]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#F9DDE2] text-[#B983A6]">
                  <HeartPulse size={20} aria-hidden="true" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {hasProductSpecs ? (
          <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F9E0E3] text-[#B983A6]">
                <SlidersHorizontal size={24} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
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
                  className="rounded-2xl bg-[#FFF4F5] p-5"
                >
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#B983A6]">
                    {spec.caption}
                  </p>
                  <h3 className="mt-2 font-black text-[#4B2838]">
                    {spec.label}
                  </h3>
                  <p className="mt-2 leading-7 text-[#6f5a64]">{spec.value}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-7">
          <article className="rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <h2 className="editorial-color-kiss font-display text-3xl">
              Bra att veta
            </h2>
            <div className="mt-6 flex min-h-14 items-start gap-4 rounded-2xl bg-[#FFF4F5] px-4 py-4 text-[#5f4a54]">
              <TriangleAlert
                className="mt-1 shrink-0 text-[#D8788D]"
                size={22}
                aria-hidden="true"
              />
              <span className="font-semibold leading-7">{pick.caution}</span>
            </div>
          </article>
        </section>

        {pick.usageGuidance ? (
          <section className="mt-7">
            <article className="rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
              <h2 className="editorial-color-kiss font-display text-3xl">
                {pick.usageGuidance.title}
              </h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-[#6f5a64]">
                {pick.usageGuidance.text}
              </p>
            </article>
          </section>
        ) : null}

        <div className="mt-7">
          <TrustReviewLayers
            amazonSummary={pick.amazonSummary}
            amazonQuotes={pick.amazonQuotes}
            reviewHref={`#${pick.reviewSectionId}`}
          />
        </div>

        {hasAmazonSignalDetails ? (
          <section className="mt-7 grid gap-4 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
                {pick.product.amazonReviewSignal.sourceLabel}
              </p>
              <h2 className="editorial-color-kiss mt-2 font-display text-3xl">
                Amazon-signaler
              </h2>
              <p className="mt-4 leading-8 text-[#6f5a64]">
                {pick.product.amazonReviewSignal.ratingSummary}
              </p>
              <a
                href={pick.product.amazonReviewSignal.sourceUrl}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center rounded-full border border-[#E1A5B0] bg-white/72 px-5 text-sm font-black text-[#9E5E73] transition hover:bg-[#FFF4F5]"
              >
                Se källan på Amazon
              </a>
            </article>
            <article className="rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
              <h2 className="editorial-color-kiss font-display text-3xl">
                Höjdpunkter och reservationer
              </h2>
              <div className="mt-6 grid gap-4">
                {pick.product.amazonReviewSignal.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl bg-[#FFF4F5] p-4"
                  >
                    <CheckCircle2
                      className="mt-1 shrink-0 text-[#B983A6]"
                      size={20}
                      aria-hidden="true"
                    />
                    <p className="leading-7 text-[#5f4a54]">{highlight}</p>
                  </div>
                ))}
                {pick.product.amazonReviewSignal.cautions.map((caution) => (
                  <div
                    key={caution}
                    className="flex items-start gap-3 rounded-2xl bg-[#FFF4F5] p-4"
                  >
                    <TriangleAlert
                      className="mt-1 shrink-0 text-[#D8788D]"
                      size={20}
                      aria-hidden="true"
                    />
                    <p className="leading-7 text-[#5f4a54]">{caution}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>
        ) : null}

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
          title="Relaterat"
          links={[
            ...(pick.relatedLinks ?? []),
            {
              href: "/sommar",
              label: "Sommar-glow",
              text: "Tillbaka till Elins samlade sommarfavoriter.",
            },
            {
              href: "/skonhet",
              label: "Skönhet",
              text: "Se fler skönhetsval för hår, hud och vardag.",
            },
          ]}
        />

        <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="editorial-color-kiss font-display text-3xl">
            Vanliga frågor
          </h2>
          <div className="mt-6 grid gap-4">
            {pick.faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl bg-[#FFF4F5] p-5"
              >
                <summary className="cursor-pointer font-black text-[#4B2838]">
                  {item.question}
                </summary>
                <p className="mt-3 leading-7 text-[#6f5a64]">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <AmazonCta href={pick.product.amazonUrl} panel className="mt-7" />

        <Link
          href="/sommar"
          className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#E9CDD3] bg-white/70 px-5 font-bold text-[#6b4755] transition hover:text-[#B983A6]"
        >
          <Sparkles size={18} aria-hidden="true" />
          Fler sommarfavoriter
        </Link>
      </div>
    </main>
  );
}
