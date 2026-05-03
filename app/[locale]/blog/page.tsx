import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { CtaButtons } from "@/components/restaurant/CtaButtons";
import { buildMetadata } from "@/lib/seo";
import { getPosts } from "@/lib/blog";
import { getLocalizedHref, primaryRestaurantPage, type AppLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return buildMetadata({
    locale,
    pathname: "/blog",
    title:
      locale === "sv"
        ? "Blogg om digital meny och restaurangflöde"
        : "Blog on Digital Menus and Restaurant Operations",
    description:
      locale === "sv"
        ? "Guider om digital meny, QR-beställning, restaurangflöde och smartare service för restauranger i Sverige."
        : "Guides about digital menus, QR ordering, restaurant workflow, and clearer service for restaurants in Sweden.",
    keywords:
      locale === "sv"
        ? ["digital meny restaurang blogg", "qr meny restaurang", "restaurang beställningssystem"]
        : ["digital menu restaurant blog", "qr menu restaurant", "restaurant ordering system"],
  });
}

export default async function BlogListingPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const posts = await getPosts(locale);

  const copy = {
    eyebrow: locale === "sv" ? "Resurser" : "Resources",
    title:
      locale === "sv"
        ? "Klara guider för restauranger som vill digitalisera menyn."
        : "Clear guides for restaurants modernizing the menu experience.",
    subtitle:
      locale === "sv"
        ? "Kort, praktiskt innehåll om QR-meny, beställningsflöde och drift innan ni bokar demo."
        : "Short, practical content on QR menus, ordering flow, and operations before you book a demo.",
    primaryCta: locale === "sv" ? "Se Nord Smart Menu" : "See Nord Smart Menu",
    secondaryCta: locale === "sv" ? "Boka demo" : "Book a demo",
    mainLabel: locale === "sv" ? "Börja här" : "Start here",
    mainTitle:
      locale === "sv"
        ? "Digital meny för restauranger"
        : "Digital menu for restaurants",
    mainBody:
      locale === "sv"
        ? "Huvudsidan visar systemet från gäst till kök med demo, funktioner och pris."
        : "The main page shows the system from guest to kitchen with demo, features, and pricing.",
    articleLabel: locale === "sv" ? "Senaste artiklar" : "Latest articles",
    readMore: locale === "sv" ? "Läs artikeln" : "Read article",
  };

  return (
    <main className="sai-page">
      <section className="sai-hero">
        <div className="sai-container grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <p className="sai-eyebrow">{copy.eyebrow}</p>
            <h1 className="sai-title-xl mt-5">{copy.title}</h1>
            <p className="sai-copy-lg mt-6">{copy.subtitle}</p>
            <CtaButtons
              locale={locale}
              primaryLabel={copy.primaryCta}
              primaryHref={primaryRestaurantPage}
              secondaryLabel={copy.secondaryCta}
              sourcePage="/blog"
              ctaContext="blog-hero"
              serviceType={locale === "sv" ? "Bloggdemo för restauranglösning" : "Restaurant solution blog demo"}
              className="mt-9"
            />
          </div>

          <Link
            href={getLocalizedHref(primaryRestaurantPage, locale)}
            className="sai-card sai-card-hover block p-6"
          >
            <p className="sai-eyebrow text-[var(--text-muted)]">{copy.mainLabel}</p>
            <h2 className="sai-title-md mt-4">{copy.mainTitle}</h2>
            <p className="mt-3 leading-7 text-[var(--text-muted)]">{copy.mainBody}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-white">
              <span>{copy.primaryCta}</span>
              <ArrowRight className="h-4 w-4 text-[var(--accent-primary)]" />
            </div>
          </Link>
        </div>
      </section>

      <section className="sai-section">
        <div className="sai-container">
          <p className="sai-eyebrow mb-10">{copy.articleLabel}</p>
          <div className="grid gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={getLocalizedHref("/blog/[slug]", locale, { slug: post.slug })}
                className="sai-card sai-card-hover group p-6 md:p-8"
              >
                <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  <span className="sai-chip text-xs">{post.category}</span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString(locale === "sv" ? "sv-SE" : "en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[var(--accent-primary)]">
                    <Clock3 className="h-3.5 w-3.5" />
                    {post.readingTime}
                  </span>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                  <div>
                    <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
                      {post.title}
                    </h2>
                    <p className="mt-4 max-w-3xl leading-8 text-[var(--text-muted)]">{post.excerpt}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-black text-white transition group-hover:text-[var(--accent-primary)]">
                    <span>{copy.readMore}</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
