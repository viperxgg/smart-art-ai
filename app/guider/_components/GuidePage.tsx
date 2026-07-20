import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import {
  Breadcrumbs,
  buildBreadcrumbSchema,
  type BreadcrumbItem,
} from "@/components/Breadcrumbs";
import { AmazonPurchaseLinks } from "@/components/AmazonPurchaseCta";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getProductByPageHref, type Product } from "@/lib/products";

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
  const affiliateProducts = cta.links
    .map((link) => getProductByPageHref(link.href))
    .filter((product): product is Product => Boolean(product));

  if (affiliateProducts.length === 0) {
    throw new Error(`Guide "${h1}" has no product link for its Amazon CTA.`);
  }

  return (
    <main
      id="content"
      className="min-h-screen overflow-x-hidden bg-bg px-5 py-8 text-ink sm:py-12"
    >
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article
        className="mx-auto w-full min-w-0"
        style={{ maxWidth: "min(42rem, calc(100vw - 2.5rem))" }}
      >
        <Breadcrumbs items={breadcrumbItems} />

        <Link
          href="/guider"
          className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-soft transition hover:text-wine"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Alla guider
        </Link>

        {/* Hero — open on the page, no card */}
        <header className="mt-7 min-w-0">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-wine">
            {eyebrow}
          </p>
          <h1 className="editorial-color-kiss mt-4 max-w-full break-words font-display text-4xl leading-[1.05] tracking-[-0.03em] whitespace-normal [overflow-wrap:anywhere] [text-wrap:wrap] sm:text-5xl">
            {h1}
          </h1>
          <p className="mt-5 break-words text-lg leading-8 text-ink-soft [overflow-wrap:anywhere]">
            {intro}
          </p>
          {transparencyNote ? (
            <p className="mt-5 border-l-2 border-rose/45 pl-4 text-sm leading-7 text-ink-soft">
              <strong className="font-bold text-wine">Transparens.</strong>{" "}
              {transparencyNote}
            </p>
          ) : null}
        </header>

        <hr className="mt-11 border-t border-line" />

        {/* Body — flowing sections separated by hairlines, no nested boxes */}
        {sections.map((section, index) => (
          <section
            key={section.heading}
            className={
              index === 0
                ? "reveal-fade mt-11 min-w-0"
                : "reveal-fade mt-11 min-w-0 border-t border-line pt-11"
            }
          >
            <h2 className="break-words font-display text-2xl tracking-[-0.01em] text-ink [overflow-wrap:anywhere] [text-wrap:wrap] sm:text-3xl">
              {section.heading}
            </h2>
            {section.body ? (
              <p className="mt-4 break-words text-base leading-8 text-ink-soft [overflow-wrap:anywhere]">
                {section.body}
              </p>
            ) : null}
            <ul className="mt-5 space-y-3">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose"
                  />
                  <span className="break-words text-base leading-8 text-ink [overflow-wrap:anywhere]">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 break-words border-l-2 border-rose/45 pl-4 text-base font-medium leading-8 text-ink [overflow-wrap:anywhere]">
              {section.closing}
            </p>
          </section>
        ))}

        {/* Verdict — the single highlighted block, the payoff */}
        <section className="reveal-fade mt-14 rounded-3xl bg-gradient-to-br from-rose/8 to-rose/15 p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-wine">
            {verdict.heading}
          </p>
          <p className="mt-4 break-words text-lg leading-8 text-ink [overflow-wrap:anywhere]">
            {verdict.text}
          </p>
        </section>

        {/* CTA — clean link rows, not boxes */}
        <section className="reveal-fade mt-14">
          <h2 className="font-display text-2xl tracking-[-0.01em] text-ink">
            {cta.heading}
          </h2>
          <ul className="mt-4">
            {cta.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex min-h-14 min-w-0 items-center justify-between gap-4 border-b border-line py-4 text-base font-semibold text-ink transition hover:text-wine"
                >
                  <span className="min-w-0 break-words [overflow-wrap:anywhere]">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-wine transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <AmazonPurchaseLinks products={affiliateProducts} className="mt-6" />
        </section>

        {/* FAQ — minimal accordion */}
        <section className="reveal-fade mt-14">
          <h2 className="font-display text-2xl tracking-[-0.01em] text-ink">
            Vanliga frågor
          </h2>
          <div className="mt-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group border-b border-line py-4"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 break-words text-base font-semibold text-ink [overflow-wrap:anywhere] [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-wine transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 break-words text-base leading-8 text-ink-soft [overflow-wrap:anywhere]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-14">
          <RelatedLinks links={relatedLinks} />
        </div>
      </article>
    </main>
  );
}
