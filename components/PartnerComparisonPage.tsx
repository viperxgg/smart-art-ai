import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PartnerOfferCards } from "@/components/PartnerOfferCards";
import { comparisonSchema, comparisonRenderTime, type PartnerComparison } from "@/lib/partner-comparisons";
import { getProductRecord } from "@/lib/selected-product-records";

export function PartnerComparisonPage({ page }: { page: PartnerComparison }) {
  const now = comparisonRenderTime();
  const products = page.productIds.map(id => getProductRecord(id)!);
  const merchants = [...new Set(products.flatMap(p => [p.offer, ...(p.additionalOffers ?? [])]).map(o => o.merchantName))];
  return <main id="content" tabIndex={-1} className="bg-bg text-ink">
    <JsonLd data={comparisonSchema(page, now)} />
    <article className="mx-auto max-w-5xl px-5 pb-16 pt-7 md:px-8" data-comparison={page.id}>
      <nav aria-label="Brödsmulor" className="flex flex-wrap gap-3 text-sm"><Link href="/" className="inline-flex min-h-11 items-center underline">Hem</Link><Link href="/produkter" className="inline-flex min-h-11 items-center underline">Produktval</Link></nav>
      <p className="my-5 rounded-xl border border-line p-4 text-xs leading-relaxed">Inlägget innehåller reklam genom annonslänkar för {merchants.join(" och ")}. Vi kan få ersättning om du handlar via en annonslänk.</p>
      <header className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-wine">Två val · Ett behov</p>
        <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{page.title}</h1>
        <p className="mt-5 text-base leading-relaxed text-ink-soft" data-first-answer>{page.answer}</p>
        <p className="mt-4 text-xs text-ink-soft">Fakta granskade <time dateTime={page.updatedAt}>{page.updatedAt}</time> · Källbaserad jämförelse, inte ett eget produkttest.</p>
      </header>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">{products.map((product, index) => <figure key={product.id} className="rounded-2xl border border-line bg-white p-5">
        <Image src={product.image.src} alt={product.image.alt} width={product.image.width} height={product.image.height} sizes="(max-width: 640px) 80vw, 420px" className="h-64 w-full object-contain" />
        <figcaption className="mt-3 text-xs text-ink-soft">{product.image.credit}</figcaption>
        <Link href={page.productPaths[index]} className="mt-3 inline-flex min-h-11 items-center font-bold text-wine underline">Läs guiden om {product.name}</Link>
      </figure>)}</div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <section className="rounded-2xl border border-line bg-surface p-6"><h2 className="font-display text-2xl font-bold">Passar dig om</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed">{page.fits.map(fit => <li key={fit}>{fit}</li>)}</ul></section>
        <section className="rounded-2xl border border-line p-6"><h2 className="font-display text-2xl font-bold">Avstå om</h2><p className="mt-4 text-sm leading-relaxed">{page.skip}</p></section>
      </div>
      {page.sections.map(section => <section key={section.question} className="mt-10 max-w-3xl"><h2 className="font-display text-2xl font-bold">{section.question}</h2><p className="mt-4 leading-relaxed text-ink-soft">{section.answer}</p></section>)}
      <section className="mt-10"><h2 className="font-display text-2xl font-bold">Skillnader mellan de exakta varianterna</h2>
        <div className="mt-6 space-y-3">{page.rows.map(([label, a, b]) => <dl key={label} className="rounded-2xl border border-line bg-surface p-5"><dt className="font-bold">{label}</dt><div className="mt-3 grid gap-4 sm:grid-cols-2"><dd className="min-w-0 text-sm leading-relaxed"><span className="block font-semibold text-wine">{products[0].name}</span>{a}</dd><dd className="min-w-0 text-sm leading-relaxed"><span className="block font-semibold text-wine">{products[1].name}</span>{b}</dd></div></dl>)}</div>
      </section>
      {page.visual ? <figure className="mt-10"><Image src={page.visual.infographic} width={1200} height={630} alt={`Beslutsöversikt: ${page.title}`} className="h-auto w-full rounded-2xl" /></figure> : null}
      <section id="butiker" className="mt-12 scroll-mt-28"><h2 className="font-display text-2xl font-bold">Jämför daterade priser och butiker</h2><p className="mt-3 text-sm text-ink-soft">Kontrollera variant, frakt och villkor hos butiken. Vi väljer inte rekommendation efter ersättning.</p><PartnerOfferCards productIds={page.productIds} now={now} /></section>
      <section id="kallor" className="mt-12 rounded-2xl border border-line p-6"><h2 className="font-display text-2xl font-bold">Källor och begränsningar</h2><p className="mt-4 text-sm leading-relaxed">Rekommendationerna är redaktionella bedömningar utifrån källorna, inte egna mätningar. Bilderna visar produkterna, inte en testad användning.</p><ul className="mt-5 space-y-5">{page.sources.map(source => <li key={source.url} className="text-sm"><a href={source.url} className="inline-flex min-h-11 items-center font-bold text-wine underline">{source.label}</a><p>{source.supports}</p><p className="mt-2 text-xs text-ink-soft">Hämtad {source.checkedAt}</p></li>)}</ul></section>
      <nav aria-label="Läs vidare" className="mt-8 flex flex-wrap gap-5">{page.related.map(([title, href]) => <Link key={href} href={href} className="inline-flex min-h-11 items-center font-bold text-wine underline">{title}</Link>)}</nav>
    </article>
  </main>;
}
