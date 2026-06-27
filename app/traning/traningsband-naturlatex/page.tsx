import Link from "next/link";
import {
  ArrowLeft,
  Dumbbell,
  Sparkles,
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
import { createSeoMetadata } from "@/lib/metadata";
import { featuredProduct } from "@/lib/products";
import { getApprovedReviews } from "@/lib/reviews/reviews";
import { getEditorialScore } from "@/lib/scores";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/traningsband-naturlatex`;
const pageImage = `${siteConfig.url}/products/resistance-bands/elin-resistance-band-thumbnail.webp`;
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

function buildProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Träningsband i naturlatex – set med 4 motståndsnivåer (WuGU)",
    brand: { "@type": "Brand", name: "WuGU" },
    material: "Naturlatex",
    image: pageImage,
    description:
      "Set med fyra träningsband i 100% naturlatex, motstånd 8–85 lbs.",
  };
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
const valueCaveat =
  "Banden levereras vakuumförpackade så små märken kan förekomma, och en mycket van lyftare vill kanske kombinera två band - men för priset är det svårt att klaga.";

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  {
    name: "Träningsband i naturlatex",
    href: "/traning/traningsband-naturlatex",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

export const metadata = createSeoMetadata({
  title: "Träningsband i naturlatex – 4 motståndsnivåer | Elins val",
  description:
    "Elin har gått igenom hundratals omdömen och TikTok-reaktioner – här är den ärliga sammanfattningen om träningsband i naturlatex med fyra motståndsnivåer.",
  url: pageUrl,
  image: {
    url: pageImage,
    width: 1024,
    height: 1024,
    alt: "Träningsband i naturlatex för hemmaträning",
  },
});

export const revalidate = 300;

export default async function TraningBandReviewPage() {
  const approvedReviews = await getApprovedReviews(featuredProduct.slug);
  const productSchema = buildProductSchema();
  const editorialScore = getEditorialScore(featuredProduct.slug);

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
            href="/traning"
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-[#6b4755] transition hover:text-[#B983A6]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Tillbaka till träning
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            <SaveProductButton
              productSlug={featuredProduct.slug}
              productTitle={featuredProduct.title}
              className="grid min-h-11 min-w-11 place-items-center rounded-full border border-[#E9CDD3] bg-white/70 text-[#9E5E73] shadow-[0_14px_36px_rgba(185,131,166,0.12)] transition hover:-translate-y-0.5 hover:bg-white"
            />
            <p className="rounded-full border border-[#E9CDD3] bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#B983A6]">
              Annons
            </p>
          </div>
        </header>

        <section className="mt-8 grid gap-7 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div className="overflow-hidden rounded-[2.2rem] border border-[#F1D8DD] bg-[#F6F0EC] shadow-[0_28px_90px_rgba(185,131,166,0.14)]">
            <ProductImageGallery images={featuredProduct.images} />
          </div>

          <article className="rounded-[2.2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_28px_90px_rgba(185,131,166,0.1)] md:p-9">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
              Elins produktkoll
            </p>
            <p className="mt-4 inline-flex min-h-10 items-center rounded-full border border-[#E9CDD3] bg-[#FFF4F5] px-4 text-sm font-black text-[#9E5E73]">
              Prisvärt val
            </p>
            <ProductBadges badges={featuredProduct.badges} className="mt-4" />
            <h1 className="editorial-color-kiss mt-4 font-display text-4xl leading-[1.05] tracking-[-0.035em] sm:text-6xl">
              Träningsband i naturlatex – 4 motståndsnivåer
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#6f5a64]">
              Mycket träningsband för en låg peng. Fyra motståndsnivåer i
              naturlatex gör det lätt att börja hemma, byta nivå när det behövs
              och få mer användning utan att köpa stora redskap.
            </p>
            <p className="mt-5 rounded-3xl border border-[#F1D8DD] bg-[#FFF4F5] p-4 text-sm leading-7 text-[#6f5a64]">
              <strong>Annons</strong> · Den här sidan innehåller reklamlänkar.
              Om du handlar via våra länkar kan vi få en provision – utan någon
              extra kostnad för dig.
            </p>
          </article>
        </section>

        {editorialScore ? (
          <ElinsScoreCard score={editorialScore} className="mt-7" />
        ) : null}

        <AmazonCta href={amazonUrl} product={featuredProduct} className="mt-5" />

        <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-[#F9E9E9]/82 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Prisvärt val
          </p>
          <h2 className="editorial-color-kiss mt-2 font-display text-3xl">
            Mycket träningsband för en låg peng.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6f5a64]">
            Fyra motståndsnivåer (8–85 lbs) i 100% naturlatex – det de flesta
            vill ha, utan premiumpris.
          </p>
          <p className="mt-5 max-w-4xl rounded-2xl bg-white/60 p-5 text-lg font-semibold leading-8 text-[#5f4a54]">
            Ett smart förstaval för hemmaträning – mycket för pengarna.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {moments.map((moment) => (
              <div
                key={moment}
                className="flex min-h-14 items-center gap-4 rounded-2xl bg-white/60 px-4 font-bold text-[#5f4a54]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F9DDE2] text-[#B983A6]">
                  <Dumbbell size={20} aria-hidden="true" />
                </span>
                {moment}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <article className="rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <h2 className="editorial-color-kiss font-display text-3xl">
              Inte perfekt, men bra att veta
            </h2>
            <div className="mt-6 grid gap-3">
              <div className="flex min-h-14 items-start gap-4 rounded-2xl bg-[#FFF4F5] px-4 py-4 text-[#5f4a54]">
                <TriangleAlert
                  className="mt-1 shrink-0 text-[#D8788D]"
                  size={22}
                  aria-hidden="true"
                />
                <span className="font-semibold leading-7">{valueCaveat}</span>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="editorial-color-kiss font-display text-3xl">
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

        <div className="mt-7">
          <TrustReviewLayers
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

        <section className="mt-7">
          <ProductComments
            product={featuredProduct}
            reviews={approvedReviews}
            turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          />
        </section>

        <RelatedLinks
          links={[
            {
              href: "/traning/traningsband",
              label: "Jämför träningsband",
              text: "Se skillnaden mellan långa band i naturlatex och korta loop-band.",
            },
            {
              href: "/traning/traningsband/loopband-jakkofoxx",
              label: "Loop-band",
              text: "Se JAKKOFOXX loop band om fokus är ben, rumpa, pilates och rehab.",
            },
            {
              href: "/traning",
              label: "Fler träningsval",
              text: "Tillbaka till Elins samlade produkter för enkel hemmaträning.",
            },
            {
              href: "/halsa/massagepistol",
              label: "Återhämtning",
              text: "Jämför massagepistoler om du vill komplettera träningen med återhämtning.",
            },
          ]}
        />

        <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="editorial-color-kiss font-display text-3xl">
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

        <AmazonCta href={amazonUrl} product={featuredProduct} panel className="mt-7" />

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
