import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { EditorialByline } from "@/components/EditorialByline";
import { JsonLd } from "@/components/JsonLd";
import { formatSwedishDate } from "@/lib/page-dates";
import { gisouCampaign as product } from "@/lib/gisou-campaign";
import styles from "./GisouCampaign.module.css";

function ProductImage({ priority = false }: { priority?: boolean }) {
  return <Image {...product.image} alt={product.image.alt} priority={priority} unoptimized />;
}

function MerchantLink({ placement }: { placement: string }) {
  return (
    <a href={product.merchantHref} rel="sponsored nofollow noopener" data-merchant="kicks" data-product={product.id} data-placement={placement} className={styles.button}>
      Se pris hos KICKS <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

function PriceNote() {
  return <p className={styles.priceNote}>Senast kontrollerat: {product.price.amount} kr hos KICKS, <time dateTime={product.price.checkedAt}>{formatSwedishDate(product.price.checkedAt.slice(0, 10))}</time>. Frakt kan tillkomma. Butikens pris vid köpet gäller.</p>;
}

function CampaignHero({ home = false }: { home?: boolean }) {
  return (
    <section aria-labelledby={home ? "home-title" : "gisou-title"} className={styles.hero}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>En liten burk. En rimlig fråga.</p>
        <h1 id={home ? "home-title" : "gisou-title"}><em>{product.price.amount} kr</em> för den här lilla burken? <span aria-hidden="true">👀</span></h1>
      </div>
      <figure className={styles.visual}>
        <span className={styles.imageLabel}>Läppvård på nära håll</span>
        <ProductImage priority />
        <figcaption>GISOU HONEY GLAZE · ORIGINAL · 15 ML</figcaption>
      </figure>
      <div className={styles.intro}>
        <p>{home ? "Nyfiken på Gisous läppmask? Kika på vad du får, hur den används och om den passar din rutin." : "Du får 15 ml doftsatt läppmask och en liten spatel. Ett tunt lager på dagen, ett tjockare före läggdags. Här är det som är bra att veta innan du bestämmer dig."}</p>
        {!home && <p className={styles.productName}>{product.name}<br />{product.variant}</p>}
      </div>
      <div className={styles.actions}>
        {home ? (
          <Link href={product.path} className={styles.button}>Se vad du får <ArrowRight size={18} aria-hidden="true" /></Link>
        ) : <MerchantLink placement="gisou-hero" />}
        <PriceNote />
        {!home && <a href="#sa-anvander-du-den" className={styles.secondary}>Så använder du den <ArrowRight size={15} aria-hidden="true" /></a>}
      </div>
    </section>
  );
}

export function GisouHomeFeature() {
  return <div className={`${styles.campaign} ${styles.homeHero}`}><CampaignHero home /></div>;
}

/** Schematic instructions, not a rendering of product texture or a result claim. */
function SpatulaIllustration() {
  return (
    <svg className={styles.stepArt} viewBox="0 0 240 172" role="img" aria-label="Ta en liten mängd på spetsen av den medföljande spateln">
      <g transform="translate(25 6) rotate(-27 95 80)">
        <rect x="37" y="67" width="106" height="19" rx="9.5" fill="#e7c06a" stroke="#845b2b" strokeWidth="2" />
        <path d="M137 66 C158 58 184 55 188 75 C188 94 162 96 137 86Z" fill="#e7c06a" stroke="#845b2b" strokeWidth="2" />
        <ellipse cx="168" cy="73" rx="14" ry="6" fill="#fff6d9" stroke="#a17842" strokeWidth="1.5" />
      </g>
      <path d="M145 39 L162 28 M165 44 L180 40" stroke="#a17842" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LipLayerIllustration({ night = false }: { night?: boolean }) {
  return (
    <svg className={styles.stepArt} viewBox="0 0 240 172" role="img" aria-label={night ? "Ett tjockare lager på läpparna före läggdags" : "Ett tunt lager på läpparna under dagen"}>
      {night ? <path d="M188 25 A15 15 0 1 0 208 44 A17 17 0 0 1 188 25Z" fill="#6e507d" /> : <g stroke="#aa7834" strokeWidth="2" strokeLinecap="round"><circle cx="192" cy="37" r="10" fill="#f2d491" /><path d="M192 19V14 M192 60V55 M174 37H169 M215 37H210 M179 24L175 20 M205 50L209 54 M179 50L175 54 M205 24L209 20" /></g>}
      <path d="M45 93 C71 84 82 61 103 74 Q120 84 137 74 C158 61 169 84 195 93 C164 101 158 130 120 130 C82 130 76 101 45 93Z" fill="#d9959f" stroke="#875261" strokeWidth="2" />
      <path d="M45 93 Q80 87 103 93 Q120 97 137 93 Q162 87 195 93" fill="none" stroke="#875261" strokeWidth="2" />
      <path d="M79 104 Q120 121 161 104" fill="none" stroke={night ? "#ffe5a1" : "#fff2d1"} strokeWidth={night ? "12" : "4"} strokeLinecap="round" />
    </svg>
  );
}

export function GisouCampaignPage() {
  return (
    <main id="content" tabIndex={-1} className={`${styles.campaign} mx-auto max-w-6xl px-5 pb-16 pt-5 md:px-8 md:pt-8`}>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: product.faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }} />
      <p className="text-xs leading-relaxed text-ink-soft">Annons / Reklam för KICKS</p>
      <nav aria-label="Brödsmulor" className="mt-4 flex flex-wrap gap-2 text-xs text-ink-soft">
        <Link href="/" className={styles.bodyLink}>Hem</Link><span aria-hidden="true">/</span><Link href="/skonhet" className={styles.bodyLink}>Skönhet</Link><span aria-hidden="true">/</span><span>Vad får du i Gisous läppmask?</span>
      </nav>
      <CampaignHero />
      <dl className={styles.facts} aria-label="Det viktigaste om läppmasken">
        <div className={styles.fact}><dt>15 ml</dt><dd>Läppmask + spatel</dd></div>
        <div className={styles.fact}><dt>Dag & kväll</dt><dd>Du väljer hur tjockt</dd></div>
        <div className={styles.fact}><dt>Doftsatt</dt><dd>Honey Buttercream</dd></div>
      </dl>

      <section id="sa-anvander-du-den" aria-labelledby="usage-title" className={`${styles.section} scroll-mt-24`}>
        <p className={styles.eyebrow}>Så enkelt är det</p>
        <h2 id="usage-title" className={`${styles.sectionTitle} mt-3`}>Samma burk. Två sätt.</h2>
        <p className={styles.sectionLead}>Börja med lite på spateln. Välj sedan det lager som passar stunden.</p>
        <div className={styles.usage}>
          <article className={styles.step}><SpatulaIllustration /><div className={styles.stepBody}><span className={styles.stepNumber}>1</span><h3>Ta en liten mängd</h3><p>Använd spateln som följer med.</p></div></article>
          <article className={styles.step}><LipLayerIllustration /><div className={styles.stepBody}><span className={styles.stepNumber}>2a</span><h3>På dagen: tunt</h3><p>Fördela ett tunt lager över läpparna.</p></div></article>
          <article className={styles.step}><LipLayerIllustration night /><div className={styles.stepBody}><span className={styles.stepNumber}>2b</span><h3>Före läggdags: mer</h3><p>Applicera ett tjockare lager inför natten.</p></div></article>
        </div>
        <p className={styles.sourceNote}>Förenklad illustration enligt <a href={product.manufacturer} rel="noopener">Gisous instruktioner</a>.</p>
      </section>

      <section aria-labelledby="fit-title" className={styles.section}>
        <p className={styles.eyebrow}>Din rutin avgör</p>
        <h2 id="fit-title" className={`${styles.sectionTitle} mt-3`}>En liten lyx för dig?</h2>
        <div className={styles.fit}>
          <div className={styles.fitBox}><h3>Ja, om det här lockar</h3><p>Du gillar doftsatt läppvård i burk och vill lägga en extra stund på rutinen. Spateln och valet mellan ett tunt och ett tjockare lager passar hur du vill använda den.</p></div>
          <div className={styles.fitBox}><h3>Du kan också skippa den</h3><p>Trivs du redan med ditt läppbalsam behövs ingen extra produkt. Söker du oparfymerad läppvård är just den här varianten fel val.</p></div>
        </div>
      </section>

      <section aria-labelledby="ingredients-title" className={`${styles.section} ${styles.ingredients}`}>
        <div><p className={styles.eyebrow}>En titt i burken</p><h2 id="ingredients-title" className={`${styles.sectionTitle} mt-3`}>Det här ingår.</h2></div>
        <div><div className={styles.ingredientList} aria-label="Exempel från ingredienslistan"><span>Honung</span><span>Ceramid</span><span>Hyaluronsyra</span></div><p>Ingredienslistan innehåller bland annat honung, Ceramide NP och Sodium Hyaluronate. Den innehåller också parfym eller arom. Kontrollera hela listan hos butiken om du undviker ett visst ämne.</p><a href={product.price.source} rel="noopener" className={styles.secondary}>Se hela innehållet hos KICKS <ArrowUpRight size={15} aria-hidden="true" /></a></div>
      </section>

      <section aria-labelledby="buy-title" className={`${styles.section} ${styles.shopping}`}>
        <ProductImage />
        <div><p className={styles.eyebrow}>Sugen på en närmare titt?</p><h2 id="buy-title">Gisou Honey Glaze</h2><p>Collagen Therapy Lip Mask<br />{product.variant}</p><p>Annons / Reklam för KICKS</p></div>
        <div className={styles.shoppingAction}><p className={styles.shoppingPrice}>{product.price.amount} kr</p><MerchantLink placement="gisou-final" /></div>
        <div className="col-span-full"><PriceNote /></div>
      </section>

      <section aria-labelledby="faq-title" className={styles.section}>
        <h2 id="faq-title" className={`${styles.sectionTitle} mb-6`}>Snabba svar före köp</h2>
        <div className={styles.faq}>{product.faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <footer className={styles.footnotes}>
        <EditorialByline reviewedAt="2026-10-06" />
        <p className="mt-3">Det här är en källbaserad genomgång. Vi har inte testat läppmasken själva. <Link href="/sa-gor-vi" className={styles.bodyLink}>Så arbetar vi</Link>.</p>
        <p className="mt-3">Källor:</p>
        <ul><li><a href={product.manufacturer} rel="noopener" className={styles.bodyLink}>Gisou: storlek, doft, innehåll och användning</a> (6 oktober 2026)</li><li><a href={product.price.source} rel="noopener" className={styles.bodyLink}>KICKS: produktvariant, pris och produktbild</a> ({formatSwedishDate(product.price.checkedAt.slice(0, 10))})</li></ul>
        <p>Elins val kan få ersättning när du handlar via en annonslänk.</p>
        <div className={styles.related}><Link href="/skonhet/lappmask-eller-lappolja" className={styles.bodyLink}>Läppmask eller läppolja?</Link><Link href="/skonhet/ole-henriksen-pout-preserve" className={styles.bodyLink}>Läppvård i tub: Ole Henriksen</Link><Link href="/skonhet" className={styles.bodyLink}>Fler frågor om skönhet</Link></div>
      </footer>
    </main>
  );
}
