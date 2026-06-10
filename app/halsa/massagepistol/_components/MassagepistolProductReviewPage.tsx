import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

import { JsonLd } from "@/components/JsonLd";
import { ProductComments } from "@/components/ProductComments";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { TrustReviewLayers } from "@/components/TrustReviewLayers";
import {
  massagepistolComparisonRows,
  massagepistolFaqItems,
  type MassagepistolPick,
} from "@/lib/massagepistol";
import { getApprovedReviews } from "@/lib/reviews/reviews";
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
    offers: {
      "@type": "Offer",
      url: pick.product.amazonUrl,
      priceCurrency: "SEK",
      availability: "https://schema.org/InStock",
    },
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

  return (
    <main
      id="content"
      className="min-h-screen bg-[#FFF9F7] px-4 py-7 text-[#3E2F3A]"
    >
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />

      <div className="mx-auto w-full max-w-5xl">
        <header className="flex items-center justify-between gap-4">
          <Link
            href="/halsa/massagepistol"
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-[#6b4755] transition hover:text-[#B983A6]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Tillbaka till massagepistol-guiden
          </Link>
          <p className="rounded-full border border-[#E9CDD3] bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#B983A6]">
            Annons
          </p>
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
            <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.035em] text-[#4B2838] sm:text-6xl">
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
            <a
              href={pick.product.amazonUrl}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="mt-7 inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D8788D] to-[#EAA3AD] px-6 text-lg font-black text-white shadow-[0_20px_48px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5"
            >
              Se aktuellt pris på Amazon
              <ArrowUpRight size={21} aria-hidden="true" />
            </a>
            <p className="mt-4 text-sm leading-6 text-[#8a6d78]">
              Priset visas inte här eftersom Amazon kan ändra pris och
              lagerstatus.
            </p>
          </article>
        </section>

        <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-[#F9E9E9]/82 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Prisvärt val
          </p>
          <h2 className="mt-2 font-display text-3xl text-[#4B2838]">
            {pick.valueHook}
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#6f5a64]">
            {pick.reviewIntro}
          </p>
          <p className="mt-5 max-w-4xl rounded-2xl bg-white/60 p-5 text-lg font-semibold leading-8 text-[#5f4a54]">
            {pick.valueStatement}
          </p>
        </section>

        <section className="mt-7 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <h2 className="font-display text-3xl text-[#4B2838]">
              Passar dig som...
            </h2>
            <div className="mt-6 grid gap-3">
              {pick.passFor.map((item) => (
                <div
                  key={item}
                  className="flex min-h-14 items-center gap-4 rounded-2xl bg-[#FFF4F5] px-4 font-bold text-[#5f4a54]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F9DDE2] text-[#B983A6]">
                    <HeartPulse size={20} aria-hidden="true" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <h2 className="font-display text-3xl text-[#4B2838]">
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

        <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="font-display text-3xl text-[#4B2838]">
            Vad du får för pengarna
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {pick.pros.map((pro) => (
              <div
                key={pro}
                className="flex min-h-14 items-center gap-3 rounded-2xl bg-[#FFF4F5] px-4 font-bold text-[#5f4a54]"
              >
                <CheckCircle2
                  className="shrink-0 text-[#B983A6]"
                  size={20}
                  aria-hidden="true"
                />
                {pro}
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-2xl bg-[#F9E9E9] p-5 text-lg font-semibold leading-8 text-[#5f4a54]">
            {pick.verdict}
          </p>
        </section>

        <div className="mt-7">
          <TrustReviewLayers
            editorialVerdict={`${pick.valueHook} ${pick.valueStatement} ${pick.caution} ${pick.verdict}`}
            amazonSummary={pick.amazonSummary}
            amazonQuotes={pick.amazonQuotes}
            reviewHref={`#${pick.reviewSectionId}`}
          />
        </div>

        <section className="mt-7 overflow-hidden rounded-[2rem] border border-[#F1D8DD] bg-white/72 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="p-6 md:p-8">
            <h2 className="font-display text-3xl text-[#4B2838]">
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

        <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-[#FFF4F5] p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F9DDE2] text-[#B983A6]">
              <ShieldCheck size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-3xl text-[#4B2838]">
                Se produkten
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#6f5a64]">
                Kontrollera alltid aktuell information på Amazon innan köp.
              </p>
              <a
                href={pick.product.amazonUrl}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D8788D] to-[#EAA3AD] px-7 font-black text-white shadow-[0_20px_48px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5"
              >
                Se aktuellt pris på Amazon
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </div>
          </div>
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

        <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="font-display text-3xl text-[#4B2838]">
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
