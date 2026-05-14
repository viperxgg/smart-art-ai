import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, FileCode2, Languages, ShieldCheck } from "lucide-react";
import StadSyncLeadButton from "@/components/StadSyncLeadButton";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  buildMetadata,
} from "@/lib/seo";
import {
  getStadSyncSeoPage,
  getStadSyncServiceSchema,
  getStadSyncWebPageSchema,
  stadSyncPricingOffers,
  stadSyncSeoPages,
  stadSyncSeoSlugs,
} from "@/lib/stadsync-seo";
import {
  getAbsoluteUrl,
  getLocalizedHref,
  siteConfig,
  type AppLocale,
} from "@/lib/site";

export function generateStaticParams() {
  return siteConfig.locales.flatMap((locale) =>
    stadSyncSeoSlugs.map((slug) => ({
      locale,
      slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const page = getStadSyncSeoPage(locale, slug);

  if (!page) {
    return {};
  }

  return buildMetadata({
    locale,
    pathname: page.pathname,
    title: page.title,
    description: page.description,
    noIndex: true,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords, "StädSync AI"],
  });
}

export default async function StadSyncSeoPage({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const page = getStadSyncSeoPage(locale, slug);

  if (!page) {
    notFound();
  }

  const isSwedish = locale === "sv";
  const rootHref = getLocalizedHref("/stadsync-ai", locale);
  const relatedPages = stadSyncSeoSlugs
    .filter((item) => item !== page.slug)
    .map((item) => stadSyncSeoPages[locale][item])
    .slice(0, 4);
  const iconCards = [FileCode2, Languages, ShieldCheck];

  return (
    <>
      <JsonLd
        data={[
          getStadSyncServiceSchema(locale, page),
          getStadSyncWebPageSchema(locale, page),
          getFaqSchema(page.faq),
          getBreadcrumbSchema([
            {
              name: isSwedish ? "Start" : "Home",
              url: getAbsoluteUrl("/", locale),
            },
            {
              name: "StädSync AI",
              url: getAbsoluteUrl("/stadsync-ai", locale),
            },
            {
              name: page.h1,
              url: getAbsoluteUrl(page.pathname, locale),
            },
          ]),
        ]}
      />

      <main className="sai-page">
        <section className="sai-hero">
          <div className="sai-container grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <div>
              <Link
                href={rootHref}
                className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[var(--text-muted)] transition hover:text-white"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                <span>{isSwedish ? "Till StädSync AI" : "Back to StädSync AI"}</span>
              </Link>

              <p className="sai-eyebrow mt-10">{page.eyebrow}</p>
              <h1 className="sai-title-xl mt-5">{page.h1}</h1>
              <p className="sai-copy-lg mt-6">{page.intro}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {page.heroPoints.map((point) => (
                  <span key={point} className="sai-chip">
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <aside className="sai-panel p-6">
              <p className="sai-eyebrow text-[var(--text-muted)]">
                {isSwedish ? "Sökintention" : "Search intent"}
              </p>
              <h2 className="sai-title-md mt-4">{page.primaryKeyword}</h2>
              <div className="mt-6 grid gap-3">
                {page.secondaryKeywords.slice(0, 3).map((keyword, index) => {
                  const Icon = iconCards[index] ?? Check;

                  return (
                    <div key={keyword} className="sai-card flex items-center gap-3 p-4">
                      <span className="sai-icon h-10 w-10 shrink-0">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-semibold text-white">{keyword}</span>
                    </div>
                  );
                })}
              </div>
            </aside>
          </div>
        </section>

        <section className="sai-section">
          <div className="sai-container grid gap-5 lg:grid-cols-2">
            {page.sections.map((section) => (
              <article key={section.title} className="sai-card p-6 md:p-8">
                <h2 className="sai-title-md">{section.title}</h2>
                <p className="mt-5 leading-8 text-[var(--text-muted)]">{section.body}</p>
                {section.bullets ? (
                  <div className="mt-6 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3 rounded-xl border border-[var(--border-soft)] bg-[var(--bg-soft)] p-4">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
                        <span className="text-sm leading-6 text-white">{bullet}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        {page.comparisonRows.length > 0 ? (
          <section className="sai-section-soft">
            <div className="sai-container">
              <p className="sai-eyebrow">{isSwedish ? "Jämförelse" : "Comparison"}</p>
              <h2 className="sai-title-lg mt-4">
                {isSwedish ? "Från manuell admin till tydligare drift." : "From manual admin to clearer operations."}
              </h2>

              <div className="mt-10 grid gap-4">
                {page.comparisonRows.map((row) => (
                  <article key={row.label} className="sai-card grid gap-4 p-5 md:grid-cols-[0.55fr_1fr_1fr]">
                    <h3 className="sai-title-md">{row.label}</h3>
                    <p className="rounded-xl border border-[var(--border-soft)] bg-[var(--bg-soft)] p-4 leading-7 text-[var(--text-muted)]">
                      {row.before}
                    </p>
                    <p className="rounded-xl border border-[rgba(124,255,178,0.18)] bg-[rgba(124,255,178,0.06)] p-4 leading-7 text-white">
                      {row.after}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {page.slug === "priser" ? (
          <section className="sai-section">
            <div className="sai-container grid gap-5 lg:grid-cols-3">
              {stadSyncPricingOffers[locale].map((offer) => (
                <article key={offer.name} className="sai-card p-6">
                  <p className="sai-eyebrow">{offer.name}</p>
                  <h2 className="mt-4 text-3xl font-black tracking-tight text-white">{offer.price}</h2>
                  <p className="mt-3 text-[var(--text-muted)]">{offer.audience}</p>
                  <div className="mt-6 grid gap-3">
                    {offer.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-white">
                        <Check className="h-4 w-4 text-[var(--accent-primary)]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="sai-section">
          <div className="sai-container">
            <h2 className="sai-title-lg">{isSwedish ? "Vanliga frågor" : "FAQ"}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {page.faq.map((item) => (
                <article key={item.question} className="sai-card p-5">
                  <h3 className="sai-title-md">{item.question}</h3>
                  <p className="mt-3 leading-7 text-[var(--text-muted)]">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sai-section-soft">
          <div className="sai-container">
            <div className="sai-panel grid gap-8 p-7 md:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="sai-eyebrow">{isSwedish ? "Nästa steg" : "Next step"}</p>
                <h2 className="sai-title-lg mt-4">
                  {isSwedish ? "Se hela StädSync AI-plattformen." : "See the full StädSync AI platform."}
                </h2>
                <p className="sai-copy mt-4">
                  {isSwedish
                    ? "Gå tillbaka till huvudprodukten för demo, paket och teknisk genomgång."
                    : "Return to the product page for demo, packages, and a technical walkthrough."}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={rootHref} className="sai-button sai-button-secondary">
                    <span>{isSwedish ? "Öppna StädSync AI" : "Open StädSync AI"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <StadSyncLeadButton
                    modalId={`stadsync-detail-${page.slug}`}
                    locale={locale}
                    className="sai-button sai-button-primary"
                  >
                    {isSwedish ? "Boka genomgång" : "Book walkthrough"}
                    <ArrowRight className="h-4 w-4" />
                  </StadSyncLeadButton>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {relatedPages.map((related) => (
                  <Link
                    key={related.slug}
                    href={getLocalizedHref(related.pathname, locale)}
                    className="sai-card sai-card-hover p-4"
                  >
                    <p className="sai-eyebrow text-[var(--text-muted)]">{related.eyebrow}</p>
                    <h3 className="sai-title-md mt-3">{related.primaryKeyword}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
