import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Dumbbell,
  HeartPulse,
  ShieldCheck,
  SlidersHorizontal,
  TriangleAlert,
} from "lucide-react";

import { JsonLd } from "@/components/JsonLd";
import { ProductComments } from "@/components/ProductComments";
import { TrustReviewLayers } from "@/components/TrustReviewLayers";
import {
  bdbkmgMassagepistolProduct,
  beurerMassagepistolProduct,
  type Product,
} from "@/lib/products";
import { getApprovedReviews } from "@/lib/reviews/reviews";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/massagepistol`;

const faqItems = [
  {
    question: "Hur ofta ska man använda en massagepistol?",
    answer:
      "Generellt 1-2 gånger om dagen, 1-2 minuter per muskelgrupp. Undvik leder och skelett.",
  },
  {
    question: "Vilken massagepistol är bäst för nybörjare?",
    answer:
      "Den med fler justerbara lägen, som BDBKMG med 99 lägen, ger mjukare start. Beurer passar dig som hellre vill ha ett känt varumärke.",
  },
  {
    question: "Är en massagepistol farlig?",
    answer:
      "Använd inte på skadad hud, leder eller vid medicinska tillstånd utan att först rådgöra med vården.",
  },
];

const picks = [
  {
    product: beurerMassagepistolProduct,
    icon: BadgeCheck,
    badge: "Trygga märkesvalet",
    headline: "Beurer MG 99 - det trygga märkesvalet",
    body:
      "Passar dig som vill ha ett pålitligt varumärke, en kompakt och lätt pistol på 620 g och enkel användning.",
    pros: [
      "Känt märke: Beurer",
      "Lätt och kompakt",
      "4 utbytbara huvuden",
      "5 intensitetslägen",
      "Upp till 3000 slag/min",
    ],
    caution:
      "Flera svenska användare tycker att även det lägsta läget är ganska kraftfullt. Mindre lämplig om du vill ha riktigt mjuk massage på ömma punkter.",
    verdict:
      "Beurer MG 99 är Elins trygga val för dig som vill ha ett känt varumärke och en nätt massagepistol. Det är inte valet för dig som vill ha den allra mjukaste starten, men det känns lätt att förstå och rimligt för hemmabruk.",
    amazonSummary: "Snittbetyg 4,4/5 på Amazon.",
    amazonQuotes: [
      {
        text: "Den är helt okej i kvalitén, liten och smidig.",
        attribution: "Svensk köpare, Amazon",
      },
      {
        text: "Går inte reglera till låg hastighet - blir för hård om man har ont.",
        attribution: "Svensk köpare, Amazon",
      },
    ],
    reviewSectionId: "beurer-recensioner",
    reviewFormId: "beurer-skriv-recension",
  },
  {
    product: bdbkmgMassagepistolProduct,
    icon: SlidersHorizontal,
    badge: "Mest för pengarna",
    headline: "Kraftfull massagepistol (BDBKMG) - mest för pengarna",
    body:
      "Passar dig som vill ha mest kraft och kontroll till lägst pris och inte stör dig på lite högre vikt.",
    pros: [
      "99 justerbara lägen",
      "Kan köras riktigt mjukt",
      "6 massagehuvuden",
      "LCD-skärm",
      "USB-C-laddning",
    ],
    caution:
      "Den är tyngre, cirka 1 kg. En köpare tyckte att den var tung och svårhanterlig.",
    verdict:
      "BDBKMG är Elins prisvärda kraftval för dig som vill kunna justera mer och få många lägen utan att betala för ett stort varumärke. Den starka sidan är kontrollen, men vikten är värd att tänka på.",
    amazonSummary: "Snittbetyg 4,4/5 på Amazon.",
    amazonQuotes: [
      {
        text: "Mycket bra, enkel att använda! Prisvärd.",
        attribution: "Svensk köpare, Amazon",
      },
      {
        text: "Low budget massage gun but does its job - använt dagligen i 3 månader utan problem.",
        attribution: "Köpare, Amazon",
      },
    ],
    reviewSectionId: "bdbkmg-recensioner",
    reviewFormId: "bdbkmg-skriv-recension",
  },
] as const;

const comparisonRows = [
  ["Bäst för", "Trygga märkesvalet", "Mest för pengarna"],
  ["Vikt", "620 g (lätt)", "ca 1 kg (tyngre)"],
  ["Lägen", "5", "99 (mer kontroll)"],
  ["Huvuden", "4", "6"],
  ["Omdöme", "4,4/5 (1 306)", "4,4/5 (746)"],
];

function buildProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    category: "Massagepistol",
    description: product.summary,
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

export const metadata: Metadata = {
  title: {
    absolute: "Massagepistol - Elins guide till bästa valen 2026 | Elins val",
  },
  description:
    "Elin har gått igenom omdömen, specifikationer och TikTok-reaktioner och valt ut två massagepistoler - en trygg märkesfavorit och en kraftfull prisvärd. Se vilken som passar dig.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Massagepistol - Elins guide till bästa valen 2026 | Elins val",
    description:
      "Två ärliga val: en trygg märkesfavorit och en kraftfull prisvärd massagepistol.",
    url: pageUrl,
    siteName: siteConfig.name,
    type: "article",
  },
};

export const revalidate = 300;

export default async function MassagepistolGuidePage() {
  const [beurerReviews, bdbkmgReviews] = await Promise.all([
    getApprovedReviews(beurerMassagepistolProduct.slug),
    getApprovedReviews(bdbkmgMassagepistolProduct.slug),
  ]);

  const reviewsBySlug = {
    [beurerMassagepistolProduct.slug]: beurerReviews,
    [bdbkmgMassagepistolProduct.slug]: bdbkmgReviews,
  };

  return (
    <main
      id="content"
      className="min-h-screen bg-[#FFF9F7] px-4 py-7 text-[#3E2F3A]"
    >
      <JsonLd
        data={[
          buildProductSchema(beurerMassagepistolProduct),
          buildProductSchema(bdbkmgMassagepistolProduct),
          faqSchema,
        ]}
      />

      <div className="mx-auto w-full max-w-5xl">
        <header className="flex items-center justify-between gap-4">
          <Link
            href="/halsa"
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-[#6b4755] transition hover:text-[#B983A6]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Tillbaka till hälsa
          </Link>
          <p className="rounded-full border border-[#E9CDD3] bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#B983A6]">
            Annons
          </p>
        </header>

        <section className="mt-9 overflow-hidden rounded-[2.4rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.12)] md:p-10">
          <p className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#E9CDD3] bg-[#FFF4F5] px-5 text-sm font-black text-[#9E5E73]">
            <HeartPulse size={18} aria-hidden="true" />
            Elins guide 2026
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-[-0.04em] text-[#4B2838] sm:text-7xl">
            Massagepistol - Elins två bästa val 2026
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#6f5a64]">
            Det finns hundratals massagepistoler. Elin har gått igenom omdömen,
            specifikationer och TikTok-reaktioner och plockat ut två som faktiskt
            är värda pengarna - för två olika behov.
          </p>
          <p className="mt-6 rounded-3xl border border-[#F1D8DD] bg-[#FFF4F5] p-4 text-sm leading-7 text-[#6f5a64]">
            <strong>Annons</strong> · Den här sidan innehåller reklamlänkar. Om
            du handlar via våra länkar kan vi få en provision - utan extra
            kostnad för dig.
          </p>
        </section>

        <section className="mt-8 rounded-[2rem] border border-[#F1D8DD] bg-white/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="font-display text-4xl text-[#4B2838]">
            Hur väljer du rätt massagepistol?
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#6f5a64]">
            Vill du ha ett känt varumärke och en nätt, lätt design? Eller mest
            kraft, flest inställningar och bäst pris? Dina svar avgör vilken av
            Elins två val som passar dig.
          </p>
        </section>

        <div className="mt-8 space-y-10">
          {picks.map((pick) => {
            const Icon = pick.icon;
            const thumbnail = pick.product.images[0];
            const galleryImages = pick.product.images.slice(1);

            return (
              <section
                key={pick.product.slug}
                className="space-y-6"
                aria-labelledby={`${pick.product.slug}-heading`}
              >
                <article className="rounded-[2.2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_28px_90px_rgba(185,131,166,0.1)] md:p-8">
                  <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
                    <div className="rounded-[1.8rem] border border-[#E9CDD3] bg-[#FFF4F5] p-6">
                      {thumbnail ? (
                        <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[1.35rem] border border-[#F1D8DD] bg-[#F6F0EC]">
                          <Image
                            src={thumbnail.src}
                            alt={thumbnail.alt}
                            fill
                            sizes="(min-width: 1024px) 320px, 100vw"
                            className="object-cover"
                          />
                        </div>
                      ) : null}
                      {galleryImages.length > 0 ? (
                        <div className="mb-6 grid grid-cols-3 gap-2">
                          {galleryImages.map((image) => (
                            <div
                              key={image.src}
                              className="relative aspect-square overflow-hidden rounded-2xl border border-[#F1D8DD] bg-white/70"
                            >
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(min-width: 1024px) 96px, 30vw"
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      ) : null}
                      <span className="grid h-16 w-16 place-items-center rounded-3xl bg-[#F9DDE2] text-[#B983A6]">
                        <Icon size={30} aria-hidden="true" />
                      </span>
                      <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
                        Elins val
                      </p>
                      <h2
                        id={`${pick.product.slug}-heading`}
                        className="mt-3 font-display text-4xl leading-tight text-[#4B2838]"
                      >
                        {pick.headline}
                      </h2>
                      <p className="mt-4 leading-8 text-[#6f5a64]">{pick.body}</p>
                    </div>

                    <div>
                      <p className="inline-flex min-h-10 items-center rounded-full bg-[#F9E0E3] px-4 text-sm font-black text-[#9E5E73]">
                        {pick.badge}
                      </p>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {pick.pros.map((pro) => (
                          <div
                            key={pro}
                            className="flex items-start gap-3 rounded-2xl border border-[#F1D8DD] bg-white/70 p-4"
                          >
                            <ShieldCheck
                              className="mt-0.5 shrink-0 text-[#B983A6]"
                              size={18}
                              aria-hidden="true"
                            />
                            <span className="font-bold leading-6 text-[#5f4a54]">
                              {pro}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex gap-3 rounded-2xl border border-[#F1D8DD] bg-[#FFF9F7] p-4">
                        <TriangleAlert
                          className="mt-1 shrink-0 text-[#D8788D]"
                          size={20}
                          aria-hidden="true"
                        />
                        <p className="leading-7 text-[#6f5a64]">
                          <strong>Att tänka på:</strong> {pick.caution}
                        </p>
                      </div>

                      <a
                        href={pick.product.amazonUrl}
                        target="_blank"
                        rel="sponsored nofollow noopener noreferrer"
                        className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D8788D] to-[#EAA3AD] px-6 text-base font-black text-white shadow-[0_18px_42px_rgba(216,120,141,0.26)] transition hover:-translate-y-0.5"
                      >
                        Se aktuellt pris på Amazon
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>

                <TrustReviewLayers
                  editorialVerdict={pick.verdict}
                  amazonSummary={pick.amazonSummary}
                  amazonQuotes={[...pick.amazonQuotes]}
                  reviewHref={`#${pick.reviewSectionId}`}
                />

                <ProductComments
                  product={pick.product}
                  reviews={reviewsBySlug[pick.product.slug]}
                  turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  sectionId={pick.reviewSectionId}
                  formId={pick.reviewFormId}
                />
              </section>
            );
          })}
        </div>

        <section className="mt-10 overflow-hidden rounded-[2rem] border border-[#F1D8DD] bg-white/72 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="p-6 md:p-8">
            <h2 className="font-display text-4xl text-[#4B2838]">
              Snabb jämförelse
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[44rem] border-collapse text-left">
              <thead>
                <tr className="border-y border-[#F1D8DD] bg-[#FFF4F5]">
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#9E5E73]">
                    Val
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
                {comparisonRows.map(([label, beurer, bdbkmg]) => (
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
        </section>

        <section className="mt-10 rounded-[2rem] border border-[#F1D8DD] bg-[#F9E9E9]/82 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <h2 className="font-display text-4xl text-[#4B2838]">Elins dom</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-[#6f5a64]">
            Vill du ha ett tryggt, känt märke och en nätt design - välj Beurer
            MG 99. Vill du ha mest kraft, flest inställningar och bäst pris -
            välj BDBKMG, men räkna med högre vikt. Båda är prisvärda val för
            hemmabruk och återhämtning.
          </p>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="font-display text-4xl text-[#4B2838]">
            Vanliga frågor
          </h2>
          <div className="mt-5 grid gap-4">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-[1.35rem] border border-[#F1D8DD] bg-[#FFF4F5] p-5"
              >
                <h3 className="font-black text-[#4B2838]">{item.question}</h3>
                <p className="mt-2 leading-7 text-[#6f5a64]">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <p className="mt-8 flex items-start gap-3 rounded-[1.35rem] border border-[#F1D8DD] bg-white/60 p-5 text-sm leading-7 text-[#6f5a64]">
          <Dumbbell className="mt-1 shrink-0 text-[#B983A6]" size={18} />
          Massagepistoler är återhämtningsprodukter, inte medicinsk rådgivning.
          Vid skada, sjukdom eller långvarig smärta bör du rådgöra med vården.
        </p>
      </div>
    </main>
  );
}
