import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Dumbbell,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

import { JsonLd } from "@/components/JsonLd";
import { ProductComments } from "@/components/ProductComments";
import { TrustReviewLayers } from "@/components/TrustReviewLayers";
import { featuredProduct } from "@/lib/products";
import {
  getApprovedReviewAggregate,
  getApprovedReviews,
  type ReviewAggregate,
} from "@/lib/reviews/reviews";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/traningsband-naturlatex`;
const pageImage = `${siteConfig.url}/products/resistance-bands/elin-resistance-band-thumbnail.png`;
const amazonUrl = featuredProduct.amazonUrl;

const faqItems = [
  {
    question: "Är banden i latex eller TPE?",
    answer:
      "Banden är gjorda i 100% naturlatex, vilket håller längre och inte hårdnar lika snabbt som TPE.",
  },
  {
    question: "Kan jag öka motståndet senare?",
    answer:
      "Ja. Banden är stackable, så du kan kombinera två band för mer motstånd.",
  },
  {
    question: "Passar de för rehab och yoga?",
    answer:
      "Ja, det lätta gula bandet är mjukt nog för rehab, stretch och pilates.",
  },
];

function buildProductSchema(reviewAggregate: ReviewAggregate | null) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Träningsband i naturlatex – set med 4 motståndsnivåer (WuGU)",
    brand: { "@type": "Brand", name: "WuGU" },
    material: "Naturlatex",
    image: pageImage,
    description:
      "Set med fyra träningsband i 100% naturlatex, motstånd 8–85 lbs.",
  };

  if (reviewAggregate) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: reviewAggregate.average,
      reviewCount: reviewAggregate.count,
      bestRating: "5",
      worstRating: "1",
    };
  }

  return schema;
}

const faqSchema = {
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
};

const levels = [
  {
    color: "Gul",
    dotClass: "bg-[#F7D74D]",
    resistance: "8–15 lbs (lätt)",
    fit: "Uppvärmning, rehab, nybörjare",
  },
  {
    color: "Röd",
    dotClass: "bg-[#DF5C66]",
    resistance: "15–35 lbs (medel)",
    fit: "Axlar, rygg, allmän träning",
  },
  {
    color: "Svart",
    dotClass: "bg-[#2F2B2D]",
    resistance: "25–65 lbs (tungt)",
    fit: "Ben, bröst, starkare lyft",
  },
  {
    color: "Lila",
    dotClass: "bg-[#8B5BD6]",
    resistance: "35–85 lbs (mycket tungt)",
    fit: "Tunga övningar, vana utövare",
  },
];

const moments = ["Hemma", "Gymmet", "Morgonpasset", "Yoga, pilates & rehab"];
const cautions = [
  "Banden kan ha små märken i latexet efter vakuumförpackningen.",
  "Mycket vana lyftare kan behöva kombinera två band för mer motstånd.",
];

export const metadata: Metadata = {
  title: {
    absolute: "Träningsband i naturlatex – 4 motståndsnivåer | Elins val",
  },
  description:
    "Elin har gått igenom hundratals omdömen och TikTok-reaktioner – här är den ärliga sammanfattningen om träningsband i naturlatex med fyra motståndsnivåer.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Träningsband i naturlatex – 4 motståndsnivåer | Elins val",
    description:
      "Elins ärliga genomgång av WuGU träningsband i naturlatex med fyra motståndsnivåer.",
    url: pageUrl,
    siteName: siteConfig.name,
    type: "article",
    images: [
      {
        url: pageImage,
        width: 1500,
        height: 1500,
        alt: "Träningsband i naturlatex för hemmaträning",
      },
    ],
  },
};

export const revalidate = 300;

export default async function TraningBandReviewPage() {
  const [approvedReviews, approvedReviewAggregate] = await Promise.all([
    getApprovedReviews(featuredProduct.slug),
    getApprovedReviewAggregate(featuredProduct.slug),
  ]);
  const productSchema = buildProductSchema(approvedReviewAggregate);

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
            href="/traning"
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-[#6b4755] transition hover:text-[#B983A6]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Tillbaka till träning
          </Link>
          <p className="rounded-full border border-[#E9CDD3] bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#B983A6]">
            Annons
          </p>
        </header>

        <section className="mt-8 grid gap-7 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div className="overflow-hidden rounded-[2.2rem] border border-[#F1D8DD] bg-[#F6F0EC] shadow-[0_28px_90px_rgba(185,131,166,0.14)]">
            <div className="relative aspect-[4/3] min-h-[20rem]">
              <Image
                src="/products/resistance-bands/elin-resistance-band-thumbnail.png"
                alt="Person som tränar hemma med ett lila träningsband"
                fill
                priority
                sizes="(max-width: 768px) 92vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          <article className="rounded-[2.2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_28px_90px_rgba(185,131,166,0.1)] md:p-9">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
              Elins produktkoll
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.035em] text-[#4B2838] sm:text-6xl">
              Träningsband i naturlatex – 4 motståndsnivåer
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#6f5a64]">
              Ett enkelt set träningsband som följer med överallt: fyra band i
              äkta naturlatex, från lätt till riktigt tungt. Elin har gått
              igenom omdömen, specifikationer och TikTok-reaktioner och plockat
              ut det som faktiskt är värt pengarna. Här är den ärliga
              sammanfattningen.
            </p>
            <p className="mt-5 rounded-3xl border border-[#F1D8DD] bg-[#FFF4F5] p-4 text-sm leading-7 text-[#6f5a64]">
              <strong>Annons</strong> · Den här sidan innehåller reklamlänkar.
              Om du handlar via våra länkar kan vi få en provision – utan någon
              extra kostnad för dig.
            </p>
            <a
              href={amazonUrl}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="mt-7 inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D8788D] to-[#EAA3AD] px-6 text-lg font-black text-white shadow-[0_20px_48px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5"
            >
              Se aktuellt pris på Amazon
              <ArrowUpRight size={21} aria-hidden="true" />
            </a>
          </article>
        </section>

        <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-[#F9E9E9]/82 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <h2 className="font-display text-3xl text-[#4B2838]">
            Varför den hamnade på Elins lista
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6f5a64]">
            Det som gör setet intressant är fyra motståndsnivåer i samma paket,
            100% naturlatex (håller längre än TPE) och ett lågt pris – en
            kombination som få band i prisklassen erbjuder, enligt omdömena.
          </p>
        </section>

        <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="font-display text-3xl text-[#4B2838]">
            De fyra nivåerna
          </h2>
          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#F1D8DD]">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead className="bg-[#F9E0E3] text-[#4B2838]">
                <tr>
                  <th className="px-4 py-4 font-black">Färg</th>
                  <th className="px-4 py-4 font-black">Motstånd</th>
                  <th className="px-4 py-4 font-black">Passar för</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1D8DD] bg-white/70">
                {levels.map((level) => (
                  <tr key={level.color}>
                    <td className="px-4 py-4 font-bold">
                      <span className="inline-flex items-center gap-2">
                        <span
                          className={`h-3 w-3 rounded-full ${level.dotClass}`}
                        />
                        {level.color}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-[#6f5a64]">
                      {level.resistance}
                    </td>
                    <td className="px-4 py-4 text-[#6f5a64]">{level.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-7 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <h2 className="font-display text-3xl text-[#4B2838]">
              När passar de?
            </h2>
            <div className="mt-6 grid gap-3">
              {moments.map((moment) => (
                <div
                  key={moment}
                  className="flex min-h-14 items-center gap-4 rounded-2xl bg-[#FFF4F5] px-4 font-bold text-[#5f4a54]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F9DDE2] text-[#B983A6]">
                    <Dumbbell size={20} aria-hidden="true" />
                  </span>
                  {moment}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <h2 className="font-display text-3xl text-[#4B2838]">
              Inte perfekt, men bra att veta
            </h2>
            <div className="mt-6 grid gap-3">
              {cautions.map((caution) => (
                <div
                  key={caution}
                  className="flex min-h-14 items-center gap-4 rounded-2xl bg-[#FFF4F5] px-4 text-[#5f4a54]"
                >
                  <TriangleAlert
                    className="shrink-0 text-[#D8788D]"
                    size={22}
                    aria-hidden="true"
                  />
                  <span className="font-semibold">{caution}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <div className="mt-7">
          <TrustReviewLayers
            editorialVerdict="Baserat på 628 omdömen (4,5/5) och produktens spec, är detta ett prisvärt förstaval för hemmaträning. Elins slutsats: värt pengarna."
            amazonSummary="4,5/5 baserat på 628 omdömen på Amazon. Kunderna lyfter framför allt prisvärdhet, enkel användning och att de olika motståndsnivåerna gör setet lätt att anpassa."
            amazonQuotes={[
              {
                text: "Träningsband av hög kvalitet med olika styrkor.",
                attribution: "Amazon-köpare",
              },
              {
                text: "Som alla andra band, fast billigare.",
                attribution: "Amazon-köpare",
              },
            ]}
            reviewHref="#recensioner"
          />
        </div>

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
                Priset och lagerstatus kan ändras. Kontrollera alltid aktuell
                information på Amazon innan du köper.
              </p>
              <a
                href={amazonUrl}
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
            product={featuredProduct}
            reviews={approvedReviews}
            turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          />
        </section>

        <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="font-display text-3xl text-[#4B2838]">
            Vanliga frågor
          </h2>
          <div className="mt-6 grid gap-4">
            {faqItems.map((item) => (
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
          href="/traning"
          className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#E9CDD3] bg-white/70 px-5 font-bold text-[#6b4755] transition hover:text-[#B983A6]"
        >
          <Sparkles size={18} aria-hidden="true" />
          Fler träningsval
        </Link>
      </div>
    </main>
  );
}
