import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Info, ShieldCheck } from "lucide-react";

import { AmazonPurchaseCta } from "@/components/AmazonPurchaseCta";
import {
  Breadcrumbs,
  buildBreadcrumbSchema,
  type BreadcrumbItem,
} from "@/components/Breadcrumbs";
import { EditorialMeta } from "@/components/EditorialMeta";
import { JsonLd } from "@/components/JsonLd";
import { PriceTierBadge } from "@/components/PriceTierBadge";
import { RelatedLinks } from "@/components/RelatedLinks";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import type {
  BastITestPage as BastITestPageData,
  BastITestPick,
  BastITestRelatedLink,
} from "@/lib/bast-i-test/types";
import { comparisonEntries } from "@/lib/comparisons";
import { getProductByPageHref } from "@/lib/products";
import { buildProductListSchema } from "@/lib/product-schema";
import { getEditorialScore, getScoreTier } from "@/lib/scores";

// Shared renderer for every "bäst i test" category page (Fas 1). The section
// order is fixed by the page spec: H1 -> editorial meta -> intro -> winner
// cards -> comparison table -> one block per product -> contrast -> skip ->
// scoring criteria -> buying guide -> FAQ -> related. A later page adds a data
// module only; this file does not change per page. Heading outline: one H2 per
// product block and per section; the winner cards are H3s (they repeat the
// product blocks' titles).

const pillarLabels: Record<string, string> = {
  guider: "Guider",
  halsa: "Hälsa",
  skonhet: "Skönhet",
  traning: "Träning",
  sommar: "Sommar",
  resa: "Resa",
};

/** "/guider/tyst-flakt-sovrum" -> Hem / Guider / page title. */
function buildBreadcrumbItems(path: string, title: string): BreadcrumbItem[] {
  const [pillar] = path.replace(/^\//, "").split("/");
  const items: BreadcrumbItem[] = [{ name: "Hem", href: "/" }];

  if (pillar && pillarLabels[pillar]) {
    items.push({ name: pillarLabels[pillar], href: `/${pillar}` });
  }

  items.push({ name: title, href: path });

  return items;
}

const comparisonTitleByHref = new Map(
  comparisonEntries.map((entry) => [entry.href, entry.shortTitle]),
);

/**
 * Readable Swedish label for an internal href, taken from the data layer in
 * this order: the comparison page's own short title, the text this page gives
 * that href in its related list, the title of the product the href belongs to.
 * Never invents copy.
 */
function linkTextFor(href: string, related: BastITestRelatedLink[]) {
  return (
    comparisonTitleByHref.get(href) ??
    related.find((link) => link.href === href)?.text ??
    getProductByPageHref(href)?.title ??
    href
  );
}

function ScorePill({ slug }: { slug: string }) {
  const score = getEditorialScore(slug);

  if (!score) {
    return null;
  }

  const tier = getScoreTier(score.total);

  return (
    <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-line bg-rose/10 px-4 py-1.5 text-sm font-black text-wine">
      {`Elins poäng ${score.total}/100`}
      <span className="font-bold text-ink-soft">{`· ${tier.label}`}</span>
    </span>
  );
}

function ProductBlock({
  pick,
  related,
  heading,
}: {
  pick: BastITestPick;
  related: BastITestRelatedLink[];
  heading?: string;
}) {
  return (
    <section className="reveal-fade mt-11 min-w-0 border-t border-line pt-11">
      {heading ? (
        <p className="text-xs font-black uppercase tracking-[0.22em] text-wine">
          {heading}
        </p>
      ) : null}
      <h2 className="mt-3 break-words font-display text-2xl tracking-[-0.01em] text-ink [overflow-wrap:anywhere] sm:text-3xl">
        {pick.product.title}
      </h2>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <ScorePill slug={pick.slug} />
        {pick.product.priceTier ? (
          <PriceTierBadge product={pick.product} />
        ) : null}
      </div>
      <p className="mt-5 break-words border-l-2 border-rose/45 pl-4 text-base font-medium leading-8 text-ink [overflow-wrap:anywhere]">
        {pick.verdict}
      </p>

      <div className="mt-7 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-display text-xl text-ink">Fördelar</h3>
          <ul className="mt-3 space-y-3">
            {pick.pros.map((pro) => (
              <li key={pro} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose"
                />
                <span className="break-words text-base leading-8 text-ink [overflow-wrap:anywhere]">
                  {pro}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-xl text-ink">Nackdelar</h3>
          <ul className="mt-3 space-y-3">
            {pick.cons.map((con) => (
              <li key={con} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-soft/50"
                />
                <span className="break-words text-base leading-8 text-ink [overflow-wrap:anywhere]">
                  {con}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <dl className="mt-7 grid gap-3 sm:grid-cols-2">
        {pick.product.specs.map((spec) => (
          <div
            key={spec.label}
            className="rounded-2xl bg-rose/8 px-5 py-4 text-base leading-7"
          >
            <dt className="text-xs font-black uppercase tracking-[0.14em] text-wine">
              {spec.label}
            </dt>
            <dd className="mt-1 break-words text-ink [overflow-wrap:anywhere]">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-8 break-words font-display text-xl text-ink [overflow-wrap:anywhere]">
        {`Vem passar ${pick.product.brand} för?`}
      </h3>
      <p className="mt-3 break-words text-base leading-8 text-ink-soft [overflow-wrap:anywhere]">
        {pick.whoFor}
      </p>

      {pick.caution ? (
        <p className="mt-5 flex items-start gap-3 rounded-2xl bg-rose/10 p-5 text-base leading-8 text-ink">
          <Info
            size={20}
            className="mt-1.5 shrink-0 text-wine"
            aria-hidden="true"
          />
          <span className="break-words [overflow-wrap:anywhere]">
            {pick.caution}
          </span>
        </p>
      ) : null}

      <ul className="mt-7">
        <li>
          <Link
            href={pick.productHref}
            className="group flex min-h-14 min-w-0 items-center justify-between gap-4 border-b border-line py-4 text-base font-semibold text-ink transition hover:text-wine"
          >
            <span className="min-w-0 break-words [overflow-wrap:anywhere]">
              Läs hela recensionen
            </span>
            <ArrowUpRight
              size={19}
              className="shrink-0 text-wine transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </li>
        {pick.comparisonHrefs.map((href) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex min-h-14 min-w-0 items-center justify-between gap-4 border-b border-line py-4 text-base font-semibold text-ink transition hover:text-wine"
            >
              <span className="min-w-0 break-words [overflow-wrap:anywhere]">
                {`Jämför: ${linkTextFor(href, related)}`}
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

      <AmazonPurchaseCta product={pick.product} className="mt-6" />
    </section>
  );
}

export function BastITestPage({ data }: { data: BastITestPageData }) {
  const breadcrumbItems = buildBreadcrumbItems(data.path, data.title);
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  const comparedPicks = data.contrast
    ? [...data.picks, data.contrast]
    : data.picks;
  // ItemList over every compared product. buildProductListSchema drops products
  // that carry no editorial review and returns null when none is left.
  const itemListSchema = buildProductListSchema({
    pageUrl: data.path,
    name: data.title,
    items: comparedPicks.map((pick) => ({
      product: pick.product,
      url: pick.productHref,
    })),
  });
  const winnerCards = data.picks.filter((pick) => Boolean(pick.badge));
  const parentHref = breadcrumbItems.at(-2)?.href ?? "/";
  const parentName = breadcrumbItems.at(-2)?.name ?? "Hem";

  return (
    <main
      id="content"
      className="min-h-screen overflow-x-hidden bg-bg px-5 py-8 text-ink sm:py-12"
    >
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <WebPageJsonLd path={data.path} name={data.h1} />
      {itemListSchema ? <JsonLd data={itemListSchema} /> : null}

      <article className="mx-auto w-full min-w-0 max-w-5xl">
        <Breadcrumbs items={breadcrumbItems} />

        <Link
          href={parentHref}
          className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-soft transition hover:text-wine"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          {`Alla ${parentName.toLowerCase()}`}
        </Link>

        <header className="mt-7 min-w-0">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-wine">
            {data.category}
          </p>
          <h1 className="editorial-color-kiss mt-4 max-w-full break-words font-display text-4xl leading-[1.05] tracking-[-0.03em] [overflow-wrap:anywhere] sm:text-5xl">
            {data.h1}
          </h1>
          <EditorialMeta path={data.path} className="mt-4" />
          <p className="mt-5 break-words text-lg leading-8 text-ink-soft [overflow-wrap:anywhere]">
            {data.intro}
          </p>
        </header>

        <section className="reveal-fade mt-11 grid gap-6 md:grid-cols-3">
          {winnerCards.map((pick) => (
            <div
              key={pick.slug}
              className="overflow-hidden rounded-[2.2rem] border border-line bg-surface/72 shadow-[0_28px_90px_rgba(185,131,166,0.1)]"
            >
              <div className="relative aspect-[4/3] bg-rose/8">
                <Image
                  src={pick.product.image}
                  alt={pick.product.imageAlt}
                  fill
                  sizes="(max-width: 768px) 92vw, 320px"
                  className="object-cover"
                />
                <span className="absolute left-5 top-5 rounded-full bg-wine/90 px-4 py-2 text-sm font-black text-bg backdrop-blur">
                  {pick.badge}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-rose">
                  {pick.product.brand}
                </p>
                <h3 className="mt-3 break-words font-display text-2xl leading-tight text-ink [overflow-wrap:anywhere]">
                  {pick.product.title}
                </h3>
                <div className="mt-4">
                  <ScorePill slug={pick.slug} />
                </div>
                <p className="mt-4 break-words leading-8 text-ink-soft [overflow-wrap:anywhere]">
                  {pick.verdict}
                </p>
                <Link
                  href={pick.productHref}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-black text-wine transition hover:opacity-80"
                >
                  Läs hela recensionen
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <AmazonPurchaseCta product={pick.product} className="mt-5" />
              </div>
            </div>
          ))}
        </section>

        <section className="reveal-fade mt-14 overflow-hidden rounded-[2rem] border border-line bg-surface/72 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="p-6 md:p-8">
            <h2 className="font-display text-2xl tracking-[-0.01em] text-ink sm:text-3xl">
              Jämförelsetabell
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[52rem] border-collapse text-left">
              <thead>
                <tr className="border-y border-line bg-rose/8">
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine"
                  >
                    {data.table.rowHeader}
                  </th>
                  {data.table.columns.map((column) => (
                    <th
                      key={column.href}
                      scope="col"
                      className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine"
                    >
                      <Link
                        href={column.href}
                        className="underline underline-offset-4 transition hover:opacity-80"
                      >
                        {column.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.table.rows.map((row) => (
                  <tr key={row.label} className="border-b border-line">
                    <th scope="row" className="px-6 py-5 font-black text-ink">
                      {row.label}
                    </th>
                    {row.cells.map((cell, index) => (
                      <td
                        key={`${row.label}-${data.table.columns[index].href}`}
                        className="px-6 py-5 leading-7 text-ink-soft"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {data.picks.map((pick, index) => (
          <ProductBlock
            key={pick.slug}
            pick={pick}
            related={data.related}
            heading={pick.badge ?? `Nummer ${index + 1}`}
          />
        ))}

        {data.contrast ? (
          <ProductBlock
            pick={data.contrast}
            related={data.related}
            heading={data.contrastHeading ?? "Jämförd men inte för sovrummet"}
          />
        ) : null}

        {data.skip ? (
          <section className="reveal-fade mt-14 rounded-3xl bg-gradient-to-br from-rose/8 to-rose/15 p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-wine">
              Hoppa över
            </p>
            <p className="mt-4 break-words text-lg leading-8 text-ink [overflow-wrap:anywhere]">
              {data.skip.text}
            </p>
            <Link
              href={data.skip.href}
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-black text-wine transition hover:opacity-80"
            >
              {linkTextFor(data.skip.href, data.related)}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </section>
        ) : null}

        <section className="reveal-fade mt-14 min-w-0 border-t border-line pt-11">
          <div className="flex items-start gap-4">
            <ShieldCheck
              className="mt-1 shrink-0 text-wine"
              size={24}
              aria-hidden="true"
            />
            <div className="min-w-0">
              <h2 className="font-display text-2xl tracking-[-0.01em] text-ink sm:text-3xl">
                Så sätter vi Elins poäng i den här kategorin
              </h2>
              <p className="mt-4 break-words text-base leading-8 text-ink-soft [overflow-wrap:anywhere]">
                {`Poängen bygger på köparnas omdömen och tillverkarnas uppgifter. ${
                  data.criteriaDisclaimer ??
                  "Elins val mäter ingen ljudnivå i något labb."
                } Så här viktas kategorin:`}
              </p>
            </div>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left">
              <thead>
                <tr className="border-y border-line bg-rose/8">
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine"
                  >
                    Kriterium
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine"
                  >
                    Vikt
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine"
                  >
                    Det omdömena visar
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.criteria.map((criterion) => (
                  <tr key={criterion.name} className="border-b border-line">
                    <th scope="row" className="px-6 py-5 font-black text-ink">
                      {criterion.name}
                    </th>
                    <td className="px-6 py-5 font-black text-wine">
                      {`${criterion.weight} %`}
                    </td>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {criterion.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="reveal-fade mt-14 min-w-0 border-t border-line pt-11">
          <h2 className="font-display text-2xl tracking-[-0.01em] text-ink sm:text-3xl">
            {`Köpguide: så väljer du ${data.category.toLowerCase()}`}
          </h2>
          {data.guide.map((section) => (
            <div key={section.heading} className="mt-7">
              <h3 className="break-words font-display text-xl text-ink [overflow-wrap:anywhere]">
                {section.heading}
              </h3>
              <p className="mt-3 break-words text-base leading-8 text-ink-soft [overflow-wrap:anywhere]">
                {section.body}
              </p>
            </div>
          ))}
        </section>

        <section className="reveal-fade mt-14 min-w-0 border-t border-line pt-11">
          <h2 className="font-display text-2xl tracking-[-0.01em] text-ink sm:text-3xl">
            Vanliga frågor
          </h2>
          <div className="mt-4">
            {data.faq.map((item) => (
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
          <RelatedLinks links={data.related} />
        </div>
      </article>
    </main>
  );
}
