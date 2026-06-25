import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import {
  Breadcrumbs,
  buildBreadcrumbSchema,
  type BreadcrumbItem,
} from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";

export type GuideSection = {
  heading: string;
  body?: string;
  bullets: readonly string[];
  closing: string;
};

export type GuideLink = {
  href: string;
  label: string;
};

export type GuideFaqItem = {
  question: string;
  answer: string;
};

export type GuideRelatedLink = {
  href: string;
  label: string;
  text: string;
};

type GuidePageProps = {
  h1: string;
  intro: string;
  sections: readonly GuideSection[];
  verdict: {
    heading: string;
    text: string;
  };
  cta: {
    heading: string;
    links: readonly GuideLink[];
  };
  faqItems: readonly GuideFaqItem[];
  breadcrumbItems: BreadcrumbItem[];
  relatedLinks: GuideRelatedLink[];
  eyebrow?: string;
};

export function buildGuideSchemas({
  breadcrumbItems,
  faqItems,
}: {
  breadcrumbItems: BreadcrumbItem[];
  faqItems: readonly GuideFaqItem[];
}) {
  return {
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

export function GuidePage({
  h1,
  intro,
  sections,
  verdict,
  cta,
  faqItems,
  breadcrumbItems,
  relatedLinks,
  eyebrow = "Värt priset?",
}: GuidePageProps) {
  const { breadcrumbSchema, faqSchema } = buildGuideSchemas({
    breadcrumbItems,
    faqItems,
  });

  return (
    <main
      id="content"
      className="min-h-screen bg-[#FFF9F7] px-4 py-7 text-[#3E2F3A]"
    >
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <header className="flex items-center justify-between gap-4">
          <Link
            href="/guider"
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-[#6b4755] transition hover:text-[#B983A6]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Tillbaka till guider
          </Link>
          <p className="rounded-full border border-[#E9CDD3] bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#B983A6]">
            Guide
          </p>
        </header>

        <section className="mt-9 overflow-hidden rounded-[2.4rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.12)] md:p-10">
          <p className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#E9CDD3] bg-[#FFF4F5] px-5 text-sm font-black text-[#9E5E73]">
            <Sparkles size={18} aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="editorial-color-kiss mt-6 max-w-4xl break-words font-display text-4xl leading-[1.02] tracking-[-0.04em] [overflow-wrap:anywhere] sm:text-7xl">
            {h1}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#6f5a64]">
            {intro}
          </p>
          <p className="mt-6 rounded-3xl border border-[#F1D8DD] bg-[#FFF4F5] p-4 text-sm leading-7 text-[#6f5a64]">
            <strong>Transparens</strong> · Den här guiden länkar bara vidare
            till våra egna varmluftsborste-sidor, inte till Dyson.
          </p>
        </section>

        <div className="mt-8 grid gap-6">
          {sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-[2rem] border border-[#F1D8DD] bg-white/68 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8"
            >
              <h2 className="editorial-color-kiss font-display text-4xl">
                {section.heading}
              </h2>
              {section.body ? (
                <p className="mt-5 max-w-4xl text-lg leading-8 text-[#6f5a64]">
                  {section.body}
                </p>
              ) : null}
              <ul className="mt-5 grid gap-3">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 rounded-2xl bg-[#FFF4F5] p-4 text-[#5f4a54]"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-[#D8788D]"
                      aria-hidden="true"
                    />
                    <span className="leading-7">{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-2xl bg-[#F9E9E9]/82 p-5 font-semibold leading-8 text-[#5f4a54]">
                {section.closing}
              </p>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-[2rem] border border-[#F1D8DD] bg-[#F9E9E9]/82 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <h2 className="editorial-color-kiss font-display text-4xl">
            {verdict.heading}
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-[#6f5a64]">
            {verdict.text}
          </p>
        </section>

        <section className="mt-8 rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="editorial-color-kiss font-display text-4xl">
            {cta.heading}
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {cta.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex min-h-24 items-center justify-between gap-4 rounded-3xl bg-[#FFF4F5] p-5 font-black leading-tight text-[#5f4a54] transition hover:-translate-y-0.5 hover:bg-[#F9E0E3]"
              >
                <span>{link.label}</span>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-[#B983A6] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="editorial-color-kiss font-display text-4xl">
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

        <RelatedLinks links={relatedLinks} />
      </div>
    </main>
  );
}
