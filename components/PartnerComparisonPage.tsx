import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { EditorialByline } from "@/components/EditorialByline";
import { PartnerOfferCards } from "@/components/PartnerOfferCards";
import { CompactMerchantChoices } from "@/components/CompactMerchantChoices";
import { Wave2RelatedLinks } from "@/components/Wave2RelatedLinks";
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
      <p className={`${page.wave === 2 ? "my-2 p-2" : "my-5 p-4"} rounded-xl border border-line text-xs leading-relaxed`}>Inlägget innehåller reklam genom annonslänkar för {merchants.join(" och ")}. Vi kan få ersättning om du handlar via en annonslänk.</p>
      <header className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-wine">{page.decisionPage ? "Ordning i rutinen" : "Två val · Ett behov"}</p>
        <h1 className={`${page.wave === 2 ? "mt-2 text-2xl" : "mt-4 text-3xl"} font-display font-bold leading-tight sm:text-4xl lg:text-5xl`}>{page.title}</h1>
        <p className={`${page.wave === 2 ? "mt-3 text-sm" : "mt-5 text-base"} leading-relaxed text-ink-soft`} data-first-answer>{page.answer}</p>
        {page.wave === 2 ? <CompactMerchantChoices productIds={page.decisionPage ? page.productIds.slice(0, 2) : page.productIds} now={now} /> : <a href="#butiker" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-wine px-6 py-3 text-center font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine">Se pris och butik <ArrowRight size={18} aria-hidden="true" /></a>}
        <EditorialByline reviewedAt={page.updatedAt} changes={page.changes} className="mt-4" />
        <p className="mt-1 text-xs text-ink-soft">Källbaserad jämförelse, inte ett eget produkttest.</p>
      </header>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">{products.map((product, index) => <figure key={product.id} className="rounded-2xl border border-line bg-white p-5">
        <Image src={product.image.src} alt={product.image.alt} width={product.image.width} height={product.image.height} sizes="(max-width: 640px) 80vw, 420px" className="h-64 w-full object-contain" />
        <figcaption className="mt-3 text-xs text-ink-soft">{product.image.credit}</figcaption>
        {page.wave === 2 ? <dl className="mt-3 space-y-1 text-xs"><div><dt className="font-semibold">Exakt variant</dt><dd>{product.variant}</dd></div>{product.gtin ? <div><dt className="font-semibold">EAN</dt><dd>{product.gtin}</dd></div> : null}<div><dt className="font-semibold">Artikel</dt><dd>{product.offer.merchantName}: {product.merchantItemId}; {product.additionalOffers?.map(offer => `${offer.merchantName}: ${offer.merchantItemId}`).join('; ')}</dd></div></dl> : null}
        <Link href={page.productPaths[index]} className="mt-3 inline-flex min-h-11 items-center font-bold text-wine underline">Läs guiden om {product.name}</Link>
      </figure>)}</div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <section className="rounded-2xl border border-line bg-surface p-6"><h2 className="font-display text-2xl font-bold">Passar dig om</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed">{page.fits.map(fit => <li key={fit}>{fit}</li>)}</ul></section>
        <section className="rounded-2xl border border-line p-6"><h2 className="font-display text-2xl font-bold">Avstå om</h2><p className="mt-4 text-sm leading-relaxed">{page.skip}</p></section>
      </div>
      {page.sections.map(section => <section key={section.question} className="mt-10 max-w-3xl"><h2 className="font-display text-2xl font-bold">{section.question}</h2><p className="mt-4 leading-relaxed text-ink-soft">{section.answer}</p></section>)}
      {page.tradeoffs ? <div className="mt-10 grid gap-5 sm:grid-cols-2">{([['Fördelar', page.tradeoffs.advantages], ['Nackdelar', page.tradeoffs.limitations]] as const).map(([heading, items]) => items.length >= 2 ? <section key={heading} className="rounded-2xl border border-line p-6"><h2 className="font-display text-2xl font-bold">{heading}</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm">{items.slice(0, 4).map(item => <li key={item}>{item}</li>)}</ul></section> : null)}</div> : null}
      <section className="mt-10"><h2 className="font-display text-2xl font-bold">{page.decisionPage ? "Stegen för de namngivna exemplen" : "Skillnader mellan de exakta varianterna"}</h2>
        <div className="mt-6 space-y-3">{page.rows.map(([label, a, b]) => <dl key={label} className="rounded-2xl border border-line bg-surface p-5"><div><dt className="font-bold">{label}</dt><dd className="mt-3 grid gap-4 sm:grid-cols-2"><span className="min-w-0 text-sm leading-relaxed">{!page.decisionPage ? <span className="block font-semibold text-wine">{products[0].name}</span> : null}{a}</span><span className="min-w-0 text-sm leading-relaxed">{!page.decisionPage ? <span className="block font-semibold text-wine">{products[1].name}</span> : null}{b}</span></dd></div></dl>)}</div>
      </section>
      {page.visual ? <figure className="mt-10"><Image src={page.visual.infographic} width={1200} height={630} alt={`Beslutsöversikt: ${page.title}`} className="h-auto w-full rounded-2xl" /></figure> : null}
      <section id="butiker" className="mt-12 scroll-mt-28"><h2 className="font-display text-2xl font-bold">Jämför daterade priser och butiker</h2><p className="mt-3 text-sm text-ink-soft">Kontrollera variant, frakt och villkor hos butiken. Vi väljer inte rekommendation efter ersättning.</p><PartnerOfferCards productIds={page.productIds} now={now} /></section>
      <section id="kallor" className="mt-12 rounded-2xl border border-line p-6"><h2 className="font-display text-2xl font-bold">Källor och begränsningar</h2><p className="mt-4 text-sm leading-relaxed">Rekommendationerna är redaktionella bedömningar utifrån källorna, inte egna mätningar. Bilderna visar produkterna, inte en testad användning.</p><ul className="mt-5 space-y-5">{page.sources.map(source => <li key={source.url} className="text-sm"><a href={source.url} className="inline-flex min-h-11 items-center font-bold text-wine underline">{source.label}</a><p>{source.supports}</p><p className="mt-2 text-xs text-ink-soft">Hämtad {source.checkedAt}</p></li>)}</ul><Link href="/sa-gor-vi" className="mt-4 inline-flex min-h-11 items-center font-semibold text-wine underline underline-offset-4">Så gör vi våra guider</Link></section>
      {page.visual?.context ? <figure className="mt-12 max-w-3xl"><Image src={page.visual.context} width={1200} height={800} alt="Illustrerad miljö utan produkt" className="h-auto w-full rounded-2xl" /><figcaption className="mt-2 text-xs">Illustration</figcaption></figure> : null}
      <nav aria-label="Läs vidare" className="mt-8 flex flex-wrap gap-5">{page.related.map(([title, href]) => <Link key={href} href={href} className="inline-flex min-h-11 items-center font-bold text-wine underline">{title}</Link>)}</nav>
      <Wave2RelatedLinks path={page.path} />
    </article>
  </main>;
}
