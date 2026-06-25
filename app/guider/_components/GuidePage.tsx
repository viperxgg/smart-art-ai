import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

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
  /** Optional transparency note shown under the intro (e.g. "länkar bara till våra egna sidor"). */
  transparencyNote?: string;
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
  transparencyNote,
}: GuidePageProps) {
  const { breadcrumbSchema, faqSchema } = buildGuideSchemas({
    breadcrumbItems,
    faqItems,
  });

  return (
    <main
      id="content"
      className="min-h-screen bg-[#FFF9F7] px-5 py-8 text-[#3E2F3A] sm:py-12"
    >
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article className="mx-auto w-full max-w-2xl">
        <Breadcrumbs items={breadcrumbItems} />

        <Link
          href="/guider"
          className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#9b8290] transition hover:text-[#B983A6]"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Alla guider
        </Link>

        {/* Hero — open on the page, no card */}
        <header className="mt-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#B983A6]">
            {eyebrow}
          </p>
          <h1 className="editorial-color-kiss mt-4 break-words font-display text-4xl leading-[1.05] tracking-[-0.03em] [overflow-wrap:anywhere] sm:text-5xl">
            {h1}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#6f5a64]">{intro}</p>
          {transparencyNote ? (
            <p className="mt-5 border-l-2 border-[#E8A8B6] pl-4 text-sm leading-7 text-[#9b8290]">
              <strong className="font-bold text-[#9E5E73]">Transparens.</strong>{" "}
              {transparencyNote}
            </p>
          ) : null}
        </header>

        <hr className="mt-10 border-t border-[#F1D8DD]" />

        {/* Body — flowing sections separated by hairlines, no nested boxes */}
        {sections.map((section, index) => (
          <section
            key={section.heading}
            className={index === 0 ? "mt-10" : "mt-10 border-t border-[#F1D8DD] pt-10"}
          >
            <h2 className="font-display text-2xl tracking-[-0.01em] text-[#4B2838] sm:text-3xl">
              {section.heading}
            </h2>
            {section.body ? (
              <p className="mt-4 text-base leading-8 text-[#6f5a64]">
                {section.body}
              </p>
            ) : null}
            <ul className="mt-5 space-y-3">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D8788D]"
                  />
                  <span className="text-base leading-8 text-[#5f4a54]">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-l-2 border-[#E8A8B6] pl-4 text-base font-medium leading-8 text-[#4B2838]">
              {section.closing}
            </p>
          </section>
        ))}

        {/* Verdict — the single highlighted block, the payoff */}
        <section className="mt-12 rounded-3xl bg-gradient-to-br from-[#FFF1F3] to-[#FBE6EC] p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#B983A6]">
            {verdict.heading}
          </p>
          <p className="mt-4 text-lg leading-8 text-[#4B2838]">{verdict.text}</p>
        </section>

        {/* CTA — clean link rows, not boxes */}
        <section className="mt-12">
          <h2 className="font-display text-2xl tracking-[-0.01em] text-[#4B2838]">
            {cta.heading}
          </h2>
          <ul className="mt-4">
            {cta.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex min-h-14 items-center justify-between gap-4 border-b border-[#F1D8DD] py-4 text-base font-semibold text-[#4B2838] transition hover:text-[#B983A6]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-[#B983A6] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ — minimal accordion */}
        <section className="mt-12">
          <h2 className="font-display text-2xl tracking-[-0.01em] text-[#4B2838]">
            Vanliga frågor
          </h2>
          <div className="mt-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group border-b border-[#F1D8DD] py-4"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-[#4B2838] [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[#B983A6] transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-base leading-8 text-[#6f5a64]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <RelatedLinks links={relatedLinks} />
        </div>
      </article>
    </main>
  );
}
