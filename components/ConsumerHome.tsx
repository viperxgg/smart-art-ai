import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HomeProductCard } from "@/components/HomeProductCard";
import { curatedHomeProducts, newHomeOffers, selectHomeProducts } from "@/lib/home-products";
import { getPartnerOfferImage } from "@/lib/partner-image-assets";

const comparisons = [
  {
    category: "Skönhet",
    title: "CeraVe eller Cetaphil – vad behöver din rengöring göra?",
    description: "Börja med din hud och din nuvarande rutin när du jämför de två rengöringarna.",
    href: "/skonhet/cerave-eller-cetaphil",
  },
  {
    category: "Hälsa & vardag",
    title: "Kindle eller Kobo – hur vill du läsa?",
    description: "Utgå från böckerna och tjänsterna du använder innan du väljer läsplatta.",
    href: "/halsa/kindle-eller-kobo",
  },
  {
    category: "Träning",
    title: "Hantlar eller miniband – vad kräver dina övningar?",
    description: "Tänk igenom övningar, utrymme och utrustningen du redan har.",
    href: "/traning/hantlar-eller-gummiband",
  },
] as const;

export function ConsumerHome() {
  const { curated, recent } = selectHomeProducts(curatedHomeProducts, newHomeOffers);
  const featured = curated[0];
  const featuredImage = featured && getPartnerOfferImage(featured.offer.productSlug, featured.offer.merchantId);
  return (
    <main id="content" tabIndex={-1} className="min-h-screen bg-bg text-ink">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-6 md:px-8 md:pt-14">
        <p className="mb-6 text-xs leading-relaxed text-ink-soft">Sidan innehåller reklam genom annonslänkar för NordicFeel och Kjell &amp; Company. Som Amazon-associates tjänar vi pengar på kvalificerade köp.</p>
        <p className="mb-8 font-display text-xl font-bold md:hidden">Elins val</p>
        <section aria-labelledby="home-title" className="grid items-center gap-8 pb-12 md:grid-cols-[1.2fr_1fr] md:gap-12 md:pb-16">
          <div>
          <p className="mb-4 text-sm font-bold tracking-wide text-wine">Skönhet · Hälsa & vardag · Träning</p>
          <div className="flex items-center gap-4 md:block">
          <h1 id="home-title" className="min-w-0 flex-1 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Vad passar dig – och vad kan du skippa?
          </h1>
          {featured && featuredImage ? <Link href={featured.href} aria-label={featured.linkLabel} className="block w-28 shrink-0 rounded-2xl border border-line bg-white px-2 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine sm:w-40 md:hidden">
            <Image src={featuredImage.src} alt={featuredImage.alt} width={featuredImage.width} height={featuredImage.height} unoptimized priority className="h-40 w-full object-contain sm:h-48" />
            <span className="mt-2 block text-center text-xs font-semibold text-wine">{featured.title}</span>
          </Link> : null}
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Jämför skillnader, nackdelar och pris. Hitta det som passar dina behov
            – och när det du redan har räcker.
          </p>
          <a href="#valj-jamforelse" className="mt-7 inline-flex min-h-12 items-center rounded-full bg-wine px-6 py-3 font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine">
            Hitta en jämförelse
          </a>
          <a href="#utvalda-produkter" className="mt-3 inline-flex min-h-12 items-center gap-2 px-4 font-semibold text-wine underline underline-offset-4">Se våra produktval <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          {featured && featuredImage ? <figure className="hidden overflow-hidden rounded-[2rem] border border-line bg-surface p-5 shadow-[0_20px_65px_rgba(113,55,71,0.08)] sm:p-7 md:block">
            <p className="text-xs font-bold uppercase tracking-widest text-wine">Ett val att förstå före köp</p>
            <Link href={featured.href} className="mt-4 block rounded-2xl bg-white p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine" aria-label={featured.linkLabel}>
              <Image src={featuredImage.src} alt={featuredImage.alt} width={featuredImage.width} height={featuredImage.height} unoptimized priority className="h-60 w-full object-contain sm:h-72" />
            </Link>
            <figcaption className="mt-5">
              <p className="text-xs font-semibold text-ink-soft">{featured.offer.variant}</p>
              <p className="mt-2 font-display text-2xl font-bold">{featured.title}</p>
              <Link href={featured.href} className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-wine underline underline-offset-4">{featured.linkLabel}<ArrowRight size={16} aria-hidden="true" /></Link>
              <p className="mt-2 text-xs text-ink-soft">{featuredImage.credit}</p>
            </figcaption>
          </figure> : null}
        </section>

        {curated.length + recent.length > 0 ? <section id="utvalda-produkter" aria-labelledby="products-title" className="mb-12 scroll-mt-28 border-t border-line pt-8 md:mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-wine">Bilden, priset och det viktiga före köp</p>
            <h2 id="products-title" className="mt-3 font-display text-3xl font-bold sm:text-4xl">Utvalda produkter att läsa mer om</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">Se vem produkten kan passa och vad du behöver tänka på. Välj butik för samma modell och storlek, och kontrollera pris och frakt före köp.</p>
            <p className="mt-4 text-xs leading-relaxed text-ink-soft">Annonsinformation: Produkterna länkar till anslutna butiker. Elins val kan få ersättning när du handlar via länkarna.</p>
          </div>
          <div className="mt-7 grid items-stretch gap-5 md:grid-cols-2">
            {curated.map((product) => <HomeProductCard key={product.offer.productSlug} product={product} />)}
            {recent.map((product) => <HomeProductCard key={product.offer.productSlug} product={product} recent />)}
          </div>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          <Link href="/produkter#lyko" className="inline-flex min-h-12 items-center gap-2 font-bold text-wine underline underline-offset-4">Fem nya produktval från Lyko <ArrowRight size={18} aria-hidden="true" /></Link>
          <Link href="/produkter" className="inline-flex min-h-12 items-center gap-2 font-bold text-wine underline underline-offset-4">Utforska alla våra produktval <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        </section> : null}

        <section id="valj-jamforelse" aria-labelledby="comparison-title" className="scroll-mt-28 border-t border-line pt-8">
          <h2 id="comparison-title" className="font-display text-2xl font-bold sm:text-3xl">Vilket beslut står du inför?</h2>
          <p className="mt-3 text-ink-soft">Tre frågor att börja med. Du behöver inte använda chatten.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {comparisons.map((comparison) => (
              <article key={comparison.href} className="flex flex-col rounded-2xl border border-line bg-surface p-6">
                <p className="text-sm font-bold text-wine">{comparison.category}</p>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug">
                  <Link href={comparison.href} className="underline decoration-line underline-offset-4 hover:decoration-wine">{comparison.title}</Link>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{comparison.description}</p>
              </article>
            ))}
          </div>
          <Link href="/jamforelser" className="mt-6 inline-flex min-h-11 items-center font-bold text-wine underline underline-offset-4">Se alla jämförelser →</Link>
        </section>

        <section aria-labelledby="before-buying" className="mt-12 rounded-2xl border border-line p-6 md:p-8">
          <h2 id="before-buying" className="font-display text-2xl font-bold">Börja med behovet, innan du köper</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">Vad fungerar inte med det du använder i dag? Vilken konkret skillnad behöver ett nytt köp göra? Om du inte kan peka ut den skillnaden kan det vara klokt att vänta.</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-wine">
            <Link href="/om-oss" className="underline underline-offset-4">Om redaktionen</Link>
            <Link href="/elins-poang" className="underline underline-offset-4">Om bedömningar och underlag</Link>
            <Link href="/fraga-elin" className="underline underline-offset-4">Fråga Elin – valfri AI-hjälp</Link>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink-soft">Annonsinformation: Webbplatsen innehåller affiliatelänkar. Elins val kan få ersättning när du handlar via dem. Elin är en AI-assistent och kan göra fel.</p>
        </section>
      </div>
    </main>
  );
}
