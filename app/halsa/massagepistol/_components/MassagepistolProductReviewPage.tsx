import Link from "next/link";
import {
  ArrowLeft,
  HeartPulse,
  TriangleAlert,
} from "lucide-react";

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
  massagepistolComparisonRows,
  massagepistolFaqItems,
  type MassagepistolPick,
} from "@/lib/massagepistol";
import { getApprovedReviews } from "@/lib/reviews/reviews";
import { getEditorialScore } from "@/lib/scores";
import { siteConfig } from "@/lib/site";

type MassagepistolProductReviewPageProps = {
  pick: MassagepistolPick;
  otherPick: MassagepistolPick;
};

function buildProductSchema(pick: MassagepistolPick) {
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
    category: "Massagepistol",
  };
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: massagepistolFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export async function MassagepistolProductReviewPage({
  pick,
  otherPick,
}: MassagepistolProductReviewPageProps) {
  const approvedReviews = await getApprovedReviews(pick.product.slug);
  const productSchema = buildProductSchema(pick);
  const editorialScore = getEditorialScore(pick.product.slug);
  const breadcrumbItems = [
    { name: "Hem", href: "/" },
    { name: "Hälsa", href: "/halsa" },
    { name: "Massagepistol", href: "/halsa/massagepistol" },
    { name: pick.product.title, href: pick.path },
  ];
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

  return (
    <main
      id="content"
      className="min-h-screen bg-[#FFF9F7] px-4 py-7 text-[#3E2F3A]"
    >
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <header className="flex items-center justify-between gap-4">
          <Link
            href="/halsa/massagepistol"
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-[#6b4755] transition hover:text-[#B983A6]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Tillbaka till massagepistol-guiden
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
              Prisvärt val
            </p>
            <ProductBadges badges={pick.product.badges} className="mt-4" />
            <h1 className="editorial-color-kiss mt-4 font-display text-4xl leading-[1.05] tracking-[-0.035em] sm:text-6xl">
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

        <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-[#F9E9E9]/82 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Prisvärt val
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
                className="flex min-h-14 items-center gap-4 rounded-2xl bg-white/60 px-4 font-bold text-[#5f4a54]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F9DDE2] text-[#B983A6]">
                  <HeartPulse size={20} aria-hidden="true" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </section>

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

        <section className="mt-7 overflow-hidden rounded-[2rem] border border-[#F1D8DD] bg-white/72 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="p-6 md:p-8">
            <h2 className="editorial-color-kiss font-display text-3xl">
              Beurer MG 99 vs BDBKMG - vilken ska du välja?
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-[#6f5a64]">
              Båda kan passa för återhämtning hemma, men de spelar olika roller:
              Beurer är det lätta märkesvalet, BDBKMG är det kraftfulla
              prisvalet.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[44rem] border-collapse text-left">
              <thead>
                <tr className="border-y border-[#F1D8DD] bg-[#FFF4F5]">
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#9E5E73]">
                    Punkt
                  </th>
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#9E5E73]">
                    Beurer MG 99
                  </th>
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#9E5E73]">
                    BDBKMG
                  </th>
                </tr>
              </thead>
              <tbody>
                {massagepistolComparisonRows.map(([label, beurer, bdbkmg]) => (
                  <tr key={label} className="border-b border-[#F1D8DD]">
                    <th className="px-6 py-5 font-black text-[#4B2838]">
                      {label}
                    </th>
                    <td className="px-6 py-5 leading-7 text-[#6f5a64]">
                      {beurer}
                    </td>
                    <td className="px-6 py-5 leading-7 text-[#6f5a64]">
                      {bdbkmg}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 md:p-8">
            <p className="rounded-2xl bg-[#FFF4F5] p-5 font-semibold leading-8 text-[#5f4a54]">
              {pick.comparisonVerdict}{" "}
              <Link
                href={otherPick.path}
                className="font-black text-[#B983A6] underline underline-offset-4"
              >
                Läs den andra recensionen
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
              href: "/traning/traningsband-naturlatex",
              label: "Träning",
              text: "Ett enkelt träningsval om du vill kombinera återhämtning med hemmaträning.",
            },
          ]}
        />

        <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="editorial-color-kiss font-display text-3xl">
            Vanliga frågor
          </h2>
          <div className="mt-6 grid gap-4">
            {massagepistolFaqItems.map((item) => (
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
          href="/halsa/massagepistol"
          className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#E9CDD3] bg-white/70 px-5 font-bold text-[#6b4755] transition hover:text-[#B983A6]"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Till jämförelsen
        </Link>
      </div>
    </main>
  );
}
