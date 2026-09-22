import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { MerchantPrice } from "@/components/MerchantPrice";
import { createSeoMetadata } from "@/lib/metadata";
import { getMerchantOffer } from "@/lib/merchant-offers";
import { selectedProducts } from "@/lib/selected-products";
import { siteConfig } from "@/lib/site";

// 2026-09-22: Kjell prices were reverified in the canonical product records;
// this dated comment moves the product hub's sitemap date.
const swedishOnes = ["noll", "en", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio"];
const swedishTeens = ["tio", "elva", "tolv", "tretton", "fjorton", "femton", "sexton", "sjutton", "arton", "nitton"];

function swedishCount(value: number) {
  if (value < 10) return swedishOnes[value];
  if (value < 20) return swedishTeens[value - 10];
  return value.toLocaleString("sv-SE");
}

function sentenceCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const selectedProductCount = swedishCount(selectedProducts.length);
export const revalidate = 3600;
export const metadata = createSeoMetadata({
  title: "Utvalda produkter – bilder, köpguider och priser | Elins val",
  description: `Utforska ${selectedProductCount} produktval inom skönhet, ljud och smart vardag. Se originalbilder, daterade butikspriser och vad du behöver veta innan köp.`,
  url: `${siteConfig.url}/produkter`, type: "website",
  image: { url: `${siteConfig.url}${selectedProducts[0].images[0].src}`, width: 1500, height: 1500, alt: selectedProducts[0].images[0].alt },
});

export default function ProductsPage() {
  const groups = ["lyko", "skonhet", "harverktyg", "projektorer", "vardag"].map((id) => {
    const products = selectedProducts.filter((product) => product.hubGroup === id);
    const title = id === "lyko"
      ? `${sentenceCase(swedishCount(products.length))} nya produktval från Lyko`
      : id === "skonhet" ? "Mer skönhet & hårrutin" : id === "harverktyg" ? "Hårverktyg" : id === "projektorer" ? "Projektor & hemunderhållning" : "Ljud & smart vardag";
    return { id, title, products };
  });
  return <main id="content" tabIndex={-1} className="min-h-screen bg-bg text-ink">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", url: `${siteConfig.url}/produkter`, name: "Utvalda produkter", inLanguage: "sv-SE", mainEntity: {
      "@type": "ItemList", itemListElement: selectedProducts.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: `${siteConfig.url}${product.path}` })),
    } }} />
    <div className="mx-auto max-w-6xl px-5 pb-16 pt-8 md:px-8 md:pt-12">
      <p className="mb-6 text-xs leading-relaxed text-ink-soft">Produktguiderna innehåller reklam genom annonslänkar för Lyko, NordicFeel och Kjell &amp; Company samt Amazon.se.</p>
      <Link href="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-wine underline underline-offset-4">Hem</Link>
      <header className="mb-10 mt-5 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-wine">Skönhet · Ljud · Smart vardag</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">{sentenceCase(selectedProductCount)} produktval att förstå före köp</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">Se hur produkten passar in i din vardag, vad du behöver kontrollera och när du kan avvakta. Varje guide samlar bilder, källor och ett daterat butikspris.</p>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">Urvalet är redaktionellt och är ingen topplista från ett eget produkttest. Guiderna innehåller annonslänkar som kan ge oss ersättning vid köp.</p>
      </header>
      <nav aria-label="Produktkategorier" className="mb-8 flex flex-wrap gap-3">
        {groups.filter(group => group.products.length).map(({title,id}) => <a key={id} href={`#${id}`} className="inline-flex min-h-12 items-center rounded-full border border-line bg-surface px-5 text-sm font-bold text-wine">{title}</a>)}
      </nav>
      {groups.map((group, categoryIndex) => <section key={group.id} id={group.id} aria-labelledby={`category-${categoryIndex}`} className="mb-12 scroll-mt-28">
        <h2 id={`category-${categoryIndex}`} className="mb-6 font-display text-3xl font-bold">{group.title}</h2>
        {group.id === "lyko" ? <p className="mb-6 max-w-3xl text-sm leading-relaxed text-ink-soft">Läppvård, basmakeup, hudvård och två olika steg för håret. Jämför rätt storlek och nyans. Priserna gäller en styck utan eventuella kombinationsrabatter.</p> : null}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {group.products.map((product, index) => {
            const offer = getMerchantOffer(product.id)!; const image = product.images[0];
            return <article key={product.id} className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-line bg-surface p-5" data-product-card={product.id}>
              <Link href={product.path} aria-label={`Läs guiden om ${product.shortName}`} className="block rounded-2xl bg-white p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine">
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority={categoryIndex === 0 && index === 0} sizes="(min-width: 1024px) 300px, (min-width: 640px) 44vw, 90vw" className="h-56 w-full object-contain" />
              </Link>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-wine">{product.topic}</p>
              <h3 className="mt-2 font-display text-2xl font-bold leading-tight"><Link href={product.path}>{product.shortName}</Link></h3>
              <p className="mt-3 text-xs leading-relaxed text-ink-soft">{product.variant}</p>
              <p className="mb-4 mt-4 text-sm leading-relaxed">{product.targetQuery ?? product.question}</p>
              <div className="mt-auto"><p className="text-sm font-bold">{offer.merchantName}</p>{offer.price ? <MerchantPrice price={offer.price} /> : null}
                <Link href={product.path} className="mt-4 inline-flex min-h-12 items-center gap-2 font-bold text-wine underline underline-offset-4">Läs guiden och se butiker<ArrowRight size={18} aria-hidden="true" /></Link>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">{image.credit}</p>
              </div>
            </article>;
          })}
        </div>
      </section>)}
    </div>
  </main>;
}
