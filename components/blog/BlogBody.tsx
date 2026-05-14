import Image from "next/image";
import Link from "next/link";
import { CtaButtons } from "@/components/restaurant/CtaButtons";
import { DemoSection } from "@/components/restaurant/DemoSection";
import { getBlogDemoSections } from "@/lib/demo";
import type { BlogSection, BlogFaqItem, BlogCta, BlogSectionLink } from "@/lib/blog";
import type { AppLocale, InternalPathname } from "@/lib/site";
import { getLocalizedHref } from "@/lib/site";

interface BlogBodyProps {
  locale: AppLocale;
  slug: string;
  sections: BlogSection[];
  faqTitle: string;
  faq: BlogFaqItem[];
  cta: BlogCta;
}

export default function BlogBody({ locale, slug, sections, faqTitle, faq, cta }: BlogBodyProps) {
  const isStadSyncArticle = slug.includes("stadsync");
  const blogDemoSections = isStadSyncArticle ? null : getBlogDemoSections(locale, slug);
  const copy = {
    relatedPage: locale === "sv" ? "Relaterad sida" : "Related page",
    source: locale === "sv" ? "Källa" : "Source",
    conversionCta: locale === "sv" ? "Nästa steg" : "Next step",
  };
  const getInternalHref = (href: BlogSectionLink["href"]) => {
    if (href.startsWith("/blog/")) {
      return locale === "en" ? `/en${href}` : href;
    }

    return getLocalizedHref(href as InternalPathname, locale);
  };

  return (
    <div className="space-y-14">
      {sections.map((section, index) => (
        <section key={section.title} className="space-y-6 border-t border-[var(--border-soft)] pt-10">
          <h2 className="text-2xl font-black tracking-tight text-white md:text-4xl">
            {section.title}
          </h2>

          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-8 text-[var(--text-muted)]">
              {paragraph}
            </p>
          ))}

          {section.listItems ? (
            <ol
              className={`space-y-3 ${
                section.listStyle === "number" ? "list-decimal" : "list-disc"
              } pl-5 text-[var(--text-muted)]`}
            >
              {section.listItems.map((item) => (
                <li key={item} className="leading-8">
                  {item}
                </li>
              ))}
            </ol>
          ) : null}

          {section.image ? (
            <figure className="sai-card overflow-hidden">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                width={1600}
                height={900}
                className="w-full object-cover"
              />
              {section.image.caption ? (
                <figcaption className="px-5 py-4 text-sm text-[var(--text-muted)]">
                  {section.image.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          {section.links?.length ? (
            <div className="grid gap-4 md:grid-cols-2">
              {section.links.map((link) => {
                const isExternal = link.href.startsWith("https://");
                const cardContent = (
                  <>
                    <p className="sai-eyebrow text-[var(--text-muted)]">
                      {isExternal ? copy.source : copy.relatedPage}
                    </p>
                    <h3 className="sai-title-md mt-4">{link.label}</h3>
                    <p className="mt-3 leading-7 text-[var(--text-muted)]">{link.description}</p>
                  </>
                );

                return isExternal ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="sai-card sai-card-hover block p-5"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={getInternalHref(link.href)}
                    className="sai-card sai-card-hover block p-5"
                  >
                    {cardContent}
                  </Link>
                );
              })}
            </div>
          ) : null}

          {blogDemoSections && index === 1 ? (
            <DemoSection {...blogDemoSections.inline} className="border-[rgba(124,255,178,0.18)] bg-[rgba(124,255,178,0.04)]" />
          ) : null}

          {blogDemoSections && section.liveDemo ? (
            <DemoSection {...blogDemoSections.live} />
          ) : null}
        </section>
      ))}

      <section className="space-y-6 border-t border-[var(--border-soft)] pt-10">
        <h2 className="text-2xl font-black tracking-tight text-white md:text-4xl">{faqTitle}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <article key={item.question} className="sai-card p-5">
              <h3 className="sai-title-md">{item.question}</h3>
              <p className="mt-3 leading-7 text-[var(--text-muted)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sai-panel p-6 md:p-8">
        <p className="sai-eyebrow">{copy.conversionCta}</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-white">{cta.title}</h2>
        <p className="mt-4 max-w-2xl leading-8 text-[var(--text-muted)]">{cta.body}</p>
        {blogDemoSections ? (
          <div className="mt-8">
            <DemoSection {...blogDemoSections.final} />
          </div>
        ) : null}
        <CtaButtons
          locale={locale}
          primaryLabel={cta.primaryLabel}
          primaryHref={cta.primaryHref}
          secondaryLabel={cta.secondaryLabel}
          sourcePage={`/blog/${slug}`}
          ctaContext="blog-cta"
          serviceType={
            isStadSyncArticle
              ? locale === "sv"
                ? "Teknisk genomgång för StädSync AI"
                : "StädSync AI technical walkthrough"
              : locale === "sv"
                ? "Demo för restaurangblogg"
                : "Restaurant blog demo request"
          }
          className="mt-8"
        />
      </section>
    </div>
  );
}
