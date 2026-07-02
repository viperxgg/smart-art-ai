import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PriceTierBadge } from "@/components/PriceTierBadge";
import { ProductBadges, ScoreBadge } from "@/components/ProductBadges";
import { RelatedLinks } from "@/components/RelatedLinks";
import { createSeoMetadata } from "@/lib/metadata";
import {
  getProductBySlug,
  getProductPageHref,
  type ProductCategorySlug,
} from "@/lib/products";
import { getEditorialScore } from "@/lib/scores";
import { siteConfig } from "@/lib/site";
import { getWaveGuide } from "@/lib/wave-content";

const categoryLabels: Record<ProductCategorySlug, string> = {
  traning: "Träning",
  halsa: "Hälsa",
  skonhet: "Skönhet",
};

const categoryHrefs: Record<ProductCategorySlug, string> = {
  traning: "/traning",
  halsa: "/halsa",
  skonhet: "/skonhet",
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
    image: firstProduct
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
  const guide = getWaveGuide(guideId);

  if (!guide) {
    notFound();
  }

  const products = guide.productSlugs
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean);

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

  return (
    <main
      id="content"
      className="min-h-screen bg-[#FFF9F7] px-4 py-7 text-[#3E2F3A]"
    >
      <JsonLd data={faqSchema} />
      <JsonLd data={buildBreadcrumbSchema(breadcrumbItems)} />

      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <header className="flex items-center justify-between gap-4">
          <Link
            href={categoryHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-[#6b4755] transition hover:text-[#B983A6]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Tillbaka till {categoryLabel.toLowerCase()}
          </Link>
          <p className="rounded-full border border-[#E9CDD3] bg-white/70 px-4 py-2 text-xs font-black uppercase text-[#B983A6]">
            {guide.label}
          </p>
        </header>

        <section className="mt-9 overflow-hidden rounded-[2.4rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.12)] md:p-10">
          <p className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#E9CDD3] bg-[#FFF4F5] px-5 text-sm font-black text-[#9E5E73]">
            <Sparkles size={18} aria-hidden="true" />
            Elins guide 2026
          </p>
          <h1 className="editorial-color-kiss mt-6 max-w-4xl font-display text-5xl leading-[1.04] tracking-normal sm:text-7xl">
            {guide.title}
          </h1>
          <ProductBadges badges={guide.badges} className="mt-6" />
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#6f5a64]">
            {guide.intro}
          </p>
          <p className="mt-6 rounded-3xl border border-[#F1D8DD] bg-[#FFF4F5] p-4 text-sm leading-7 text-[#6f5a64]">
            <strong>Annons</strong> · Produktsidorna innehåller reklamlänkar.
            Om du handlar via våra länkar kan vi få en provision, utan extra
            kostnad för dig.
          </p>
        </section>

        <section className="mt-8 rounded-[2rem] border border-[#F1D8DD] bg-white/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F9E0E3] text-[#B983A6]">
              <CheckCircle2 size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="editorial-color-kiss font-display text-4xl">
                {guide.choiceTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#6f5a64]">
                {guide.choiceText}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {products.map((product) => {
            if (!product) {
              return null;
            }

            const score = getEditorialScore(product.slug);

            return (
              <Link
                key={product.slug}
                href={getProductPageHref(product)}
                className="group overflow-hidden rounded-[2.2rem] border border-[#F1D8DD] bg-white/72 shadow-[0_28px_90px_rgba(185,131,166,0.1)] transition hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] bg-[#FFF4F5]">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 768px) 92vw, 470px"
                    className="object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-[#c8919b]/90 px-4 py-2 text-sm font-black text-white backdrop-blur">
                    {guide.pickBadges?.[product.slug] ?? product.brand}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase text-[#D8788D]">
                    {product.brand}
                  </p>
                  <h2 className="editorial-color-kiss mt-3 font-display text-3xl leading-tight">
                    {product.title}
                  </h2>
                  <p className="mt-4 leading-8 text-[#6f5a64]">
                    {product.summary}
                  </p>
                  {score ? <ScoreBadge score={score} className="mt-5" /> : null}
                  <div className="mt-3">
                    <PriceTierBadge product={product} showContext />
                  </div>
                  <span className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#D8A7B1] px-5 font-black text-white">
                    Läs Elins koll
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </section>

        {guide.rows.length ? (
          <section className="mt-10 overflow-hidden rounded-[2rem] border border-[#F1D8DD] bg-white/72 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
            <div className="p-6 md:p-8">
              <h2 className="editorial-color-kiss font-display text-4xl">
                Snabb jämförelse
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[44rem] border-collapse text-left">
                <thead>
                  <tr className="border-y border-[#F1D8DD] bg-[#FFF4F5]">
                    <th className="px-6 py-4 text-sm font-black uppercase text-[#9E5E73]">
                      Punkt
                    </th>
                    {products.map((product) =>
                      product ? (
                        <th
                          key={product.slug}
                          className="px-6 py-4 text-sm font-black uppercase text-[#9E5E73]"
                        >
                          {product.brand}
                        </th>
                      ) : null,
                    )}
                  </tr>
                </thead>
                <tbody>
                  {guide.rows.map((row) => (
                    <tr key={row.label} className="border-b border-[#F1D8DD]">
                      <th className="px-6 py-5 font-black text-[#4B2838]">
                        {row.label}
                      </th>
                      {row.values.map((value, index) => (
                        <td
                          key={`${row.label}-${index}`}
                          className="px-6 py-5 leading-7 text-[#6f5a64]"
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

        <section className="mt-10 rounded-[2rem] border border-[#F1D8DD] bg-[#F9E9E9]/82 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <h2 className="editorial-color-kiss font-display text-4xl">
            Elins korta dom
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-[#6f5a64]">
            {guide.verdict}
          </p>
        </section>

        {guide.faqItems.length ? (
          <section className="mt-10 rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <h2 className="editorial-color-kiss font-display text-4xl">
              Vanliga frågor
            </h2>
            <div className="mt-6 grid gap-4">
              {guide.faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl bg-[#FFF4F5] p-5"
                >
                  <summary className="cursor-pointer font-black text-[#4B2838]">
                    {item.question}
                  </summary>
                  <p className="mt-3 leading-7 text-[#6f5a64]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        <RelatedLinks links={guide.relatedLinks} />
      </div>
    </main>
  );
}
