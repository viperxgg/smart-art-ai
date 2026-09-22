import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, CircleHelp } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { MerchantPrice } from "@/components/MerchantPrice";
import { SelectedProductGallery } from "@/components/SelectedProductGallery";
import { PartnerOfferCards } from "@/components/PartnerOfferCards";
import { getAmazonOffer } from "@/lib/amazon-offers";
import { getMerchantOffer } from "@/lib/merchant-offers";
import { getSelectedOfferState, selectedProductSchema, type SelectedProduct } from "@/lib/selected-products";

const buttonClass = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-wine px-6 py-3 text-center font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine";

export function SelectedProductPage({ product, sizeNotice }: { product: SelectedProduct; sizeNotice?: ReactNode }) {
  const offer = getMerchantOffer(product.id)!;
  const amazon = getAmazonOffer(product.id);
  const directLink = offer.linkKind === "direct";
  const { now, campaignActive } = getSelectedOfferState(product);
  return <main id="content" tabIndex={-1} className="bg-bg text-ink">
    <JsonLd data={selectedProductSchema(product, now)} />
    <article className="mx-auto max-w-6xl px-5 pb-16 pt-7 md:px-8 md:pt-10" data-selected-product={product.id}>
      <nav aria-label="Brödsmulor" className="mb-7 text-sm text-ink-soft">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li><Link href="/" className="inline-flex min-h-11 items-center underline underline-offset-4">Hem</Link></li>
          <li aria-hidden="true">/</li><li><Link href="/produkter" className="inline-flex min-h-11 items-center underline underline-offset-4">Produktval</Link></li>
          <li aria-hidden="true">/</li><li aria-current="page">{product.shortName}</li>
        </ol>
      </nav>
      {!directLink || amazon ? <p className="mb-6 rounded-xl border border-line px-4 py-3 text-xs leading-relaxed text-ink-soft">{!directLink ? `Inlägget innehåller reklam genom annonslänkar för ${offer.merchantName}. ` : ""}Vi kan få ersättning om du handlar via en annonslänk.{amazon ? " Som Amazon-associates tjänar vi pengar på kvalificerade köp." : ""}</p> : null}
      <div className="grid items-start gap-6 md:grid-cols-2 md:gap-x-12">
        <header className="md:col-start-2 md:row-start-1">
          <p className="text-xs font-bold uppercase tracking-widest text-wine">{product.topic} · Produktguide</p>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{product.heading ?? product.shortName}</h1>
          {product.targetQuery ? <p className="mt-4 text-base leading-relaxed text-ink-soft" data-first-answer>{product.answer}</p> : <p className="mt-4 text-sm font-semibold text-ink-soft">{product.variant}</p>}
        </header>
        <div className="md:col-start-2 md:row-start-2">
          {!product.targetQuery ? <><h2 className="text-xl font-bold leading-snug">{product.question}</h2><p className="mt-3 text-base leading-relaxed text-ink-soft">{product.answer}</p></> : <p className="text-sm text-ink-soft">{product.variant}</p>}
          <a href="#butiker" className={`${buttonClass} mt-6`}>Se pris och butik <ArrowRight size={18} aria-hidden="true" /></a>
          <p className="mt-4 text-xs text-ink-soft">Fakta granskade <time dateTime={product.updatedAt}>{new Intl.DateTimeFormat("sv-SE", { dateStyle: "long", timeZone: "Europe/Stockholm" }).format(new Date(`${product.updatedAt}T12:00:00Z`))}</time> · <Link href="#kallor" className="underline underline-offset-4">Källor och metod</Link></p>
        </div>
        <div className="min-w-0 md:col-start-1 md:row-span-2 md:row-start-1"><SelectedProductGallery images={product.images} name={product.shortName} /></div>
      </div>
      {sizeNotice}
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <section aria-labelledby="passar" className="rounded-2xl border border-line bg-surface p-6">
          <h2 id="passar" className="flex items-center gap-2 font-display text-2xl font-bold"><Check size={22} aria-hidden="true" />Kan passa om</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed">{product.fits.map(fit => <li key={fit}>{fit}</li>)}</ul>
        </section>
        <section aria-labelledby="avvakta" className="rounded-2xl border border-line p-6">
          <h2 id="avvakta" className="flex items-center gap-2 font-display text-2xl font-bold"><CircleHelp size={22} aria-hidden="true" />När du kan avvakta</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{product.skip}</p>
        </section>
      </div>
      {product.decisionSections?.map(section => <section key={section.question} className="mt-10 max-w-3xl">
        <h2 className="font-display text-2xl font-bold">{section.question}</h2>
        <p className="mt-4 leading-relaxed text-ink-soft">{section.answer}</p>
        <p className="mt-2 text-xs text-ink-soft">Källor: {section.sourceUrls.map((url, i) => <a key={url} href={url} className="mr-3 inline-flex min-h-11 items-center underline">{product.sources.find(s => s.url === url)?.label ?? `Källa ${i + 1}`}</a>)}</p>
      </section>)}
      {product.visual ? <figure className="mt-10"><Image src={product.visual.infographic} width={1200} height={630} alt={`Beslutsöversikt: ${product.heading}`} sizes="(max-width: 768px) 90vw, 1000px" className="h-auto w-full rounded-2xl" /></figure> : null}
      {product.visual?.context ? <figure className="mt-10 max-w-3xl"><Image src={product.visual.context} width={1200} height={800} alt="Illustrerad miljö utan produkt" className="h-auto w-full rounded-2xl" /><figcaption className="mt-2 text-xs">Illustration</figcaption></figure> : null}
      <section aria-labelledby="beslut" className="mt-12 max-w-3xl">
        <h2 id="beslut" className="font-display text-2xl font-bold sm:text-3xl">{product.decisionTitle}</h2>
        <p className="mt-5 leading-relaxed text-ink-soft">{product.decision}</p>
      </section>
      <section aria-labelledby="innan-du-borjar" className="mt-12">
        <h2 id="innan-du-borjar" className="font-display text-2xl font-bold sm:text-3xl">Tre steg att ha koll på</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {product.steps.map(([title, body], index) => <li key={title} className="rounded-2xl border border-line bg-surface p-6">
            <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full bg-wine font-display text-xl font-bold text-white">{index + 1}</span>
            <h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-soft">{body}</p>
          </li>)}
        </ol>
      </section>
      <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
        <section aria-labelledby="fakta">
          <h2 id="fakta" className="font-display text-2xl font-bold sm:text-3xl">Fakta om just den här varianten</h2>
          <dl className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface">
            {product.facts.map(([label, value]) => <div key={label} className="grid gap-1 border-b border-line px-5 py-4 last:border-0 sm:grid-cols-[2fr_3fr] sm:gap-4">
              <dt className="text-sm font-bold">{label}</dt><dd className="min-w-0 break-words text-sm leading-relaxed text-ink-soft">{value}</dd>
            </div>)}
          </dl>
        </section>
        <section id="butiker" aria-labelledby="butiker-title" className="scroll-mt-28 rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <h2 id="butiker-title" className="font-display text-2xl font-bold sm:text-3xl">{amazon ? "Välj butik" : "Pris hos butiken"}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">Jämför samma variant och antal. Frakt, medlemskap och leverans kan påverka totalpriset.</p>
          {product.targetQuery ? <PartnerOfferCards productIds={[product.id]} now={now} /> : <>
          <h3 className="mt-6 text-lg font-bold">{offer.merchantName}</h3>
          <p className="mt-2 text-xs leading-relaxed text-ink-soft">{offer.variant} · Artikel {product.merchantItemId}</p>
          {offer.price ? <MerchantPrice price={offer.price} /> : null}
          {offer.priceNote ? <p className="mt-3 text-xs leading-relaxed text-ink-soft">{offer.priceNote}</p> : null}
          {product.campaignEndsAt && campaignActive ? <p className="mt-3 text-xs leading-relaxed text-ink-soft">Kontrollerad kampanj till och med {new Intl.DateTimeFormat("sv-SE", { dateStyle: "long", timeZone: "Europe/Stockholm" }).format(new Date(product.campaignEndsAt))}. Priset kan ändras.</p> : null}
          <a href={offer.href} rel={directLink ? "nofollow noopener" : "sponsored nofollow noopener"} data-merchant={offer.merchantId} data-product={offer.productSlug} data-placement="selected-product-offer" className={`${buttonClass} mt-5 w-full`}>Se pris hos {offer.merchantName}<ArrowUpRight size={18} aria-hidden="true" /></a>
          <p className="mt-2 text-xs text-ink-soft">{directLink ? "Butikslänk" : `Annons / Reklam för ${offer.merchantName}`}</p>
          {amazon ? <div className="mt-6 border-t border-line pt-6" data-amazon-offer={amazon.asin}>
            <h3 className="text-lg font-bold">Amazon.se</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{amazon.variant}. Se dagens pris, säljare och leverans hos Amazon. Kontrollera förpackningen innan köp.</p>
            <a href={amazon.href} rel="sponsored nofollow noopener" data-merchant="amazon" data-product={product.id} data-placement="selected-product-offer" className={`${buttonClass} mt-4 w-full`}>Se pris hos Amazon<ArrowUpRight size={18} aria-hidden="true" /></a>
            <p className="mt-2 text-xs text-ink-soft">Annonslänk · Kontrollera totalpriset inklusive frakt.</p>
          </div> : null}
          </>}
        </section>
      </div>
      <section aria-labelledby="fragor" className="mt-12 max-w-3xl">
        <h2 id="fragor" className="font-display text-2xl font-bold sm:text-3xl">Vanliga frågor om {product.shortName}</h2>
        <div className="mt-6 divide-y divide-line border-y border-line">
          {product.faqs.map(([question, answer]) => <details key={question} className="group py-1">
            <summary className="cursor-pointer py-5 pr-3 text-base font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-wine">{question}</summary>
            <p className="pb-5 text-sm leading-relaxed text-ink-soft">{answer}</p>
          </details>)}
        </div>
      </section>
      <section id="kallor" aria-labelledby="kallor-title" className="mt-12 scroll-mt-28 rounded-2xl border border-line p-6 sm:p-8">
        <h2 id="kallor-title" className="font-display text-2xl font-bold">Källor och hur guiden är gjord</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">Guiden bygger på produktuppgifter från märket och butiken, inte ett eget praktiskt test. Vi skiljer specifikationer från vår bedömning av vem produkten kan passa. Bilderna är butikens eller märkets material och visar inte ett test utfört av oss. Prisets kontrolltid finns vid erbjudandet.</p>
        <ul className="mt-5 space-y-4">{product.sources.map(source => <li key={source.url} className="text-sm leading-relaxed">
          <a href={source.url} className="inline-flex min-h-11 items-center font-semibold text-wine underline underline-offset-4">{source.label}</a>
          <p className="text-ink-soft">{source.supports}</p>
          {source.checkedAt ? <p className="text-xs text-ink-soft">Hämtad <time dateTime={source.checkedAt}>{source.checkedAt.slice(0, 10)}</time></p> : null}
        </li>)}</ul>
        <Link href="/om-oss" className="mt-4 inline-flex min-h-11 items-center font-semibold text-wine underline underline-offset-4">Om Elins val och vår metod</Link>
      </section>
      <nav aria-label="Läs vidare" className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
        {product.related.map(([title, href]) => <Link key={href} href={href} className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-wine underline underline-offset-4">{title}<ArrowRight size={16} aria-hidden="true" /></Link>)}
        {product.related.every(([, href]) => href !== "/produkter") ? <Link href="/produkter" className="inline-flex min-h-11 items-center text-sm font-bold text-wine underline underline-offset-4">Alla produktval</Link> : null}
      </nav>
    </article>
  </main>;
}
