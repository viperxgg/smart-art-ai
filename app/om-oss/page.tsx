// Content refresh 2026-09-05: porträtt av ansvarig utgivare + ny Om oss – FRAMFORM och Azzam Khalaf, Elin = redaktionell röst, ankare #azzam/#elin/#sa-tjanar-vi-pengar/#kontakt.
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Heart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { EditorialMeta } from "@/components/EditorialMeta";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pagePath = "/om-oss";

export const metadata = createSeoMetadata({
  title: "Om Elins val – vem som står bakom och hur vi väljer | Elins val",
  description:
    "Elins val drivs av FRAMFORM med Azzam Khalaf som ansvarig utgivare. Så väljer vi produkter, vad vi inte gör och hur sajten finansieras.",
  url: `${siteConfig.url}${pagePath}`,
});

const sectionClass =
  "mt-8 scroll-mt-28 rounded-[2.4rem] border border-line bg-surface/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.1)] md:p-10";
const headingClass =
  "editorial-color-kiss font-display text-3xl leading-tight md:text-4xl";
const pillLinkClass =
  "inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-rose/8 px-5 text-sm font-black text-wine transition hover:bg-rose/15";

const selectionPillars = [
  {
    icon: Heart,
    title: "Värde först",
    text: "Elin väljer efter nytta, prisvärdhet och tydlig användning, inte efter hype.",
  },
  {
    icon: Sparkles,
    title: "Tre lager",
    text: "Redaktionellt urval, Amazon-köparnas signaler och vår community hålls isär.",
  },
  {
    icon: ShieldCheck,
    title: "Ärlig caveat",
    text: "Varje rekommendation ska ha minst en sak du bör känna till innan du klickar vidare.",
  },
];

export default function AboutPage() {
  return (
    <main id="content" className="min-h-screen bg-bg px-4 py-8 text-ink">
      <WebPageJsonLd path={pagePath} name="Om Elins val" />

      <div className="mx-auto w-full max-w-5xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-ink-soft transition hover:text-wine"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Tillbaka till Elins val
        </Link>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <article className="rounded-[2.4rem] border border-line bg-surface/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.1)] md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-rose">
              Om oss
            </p>
            <h1 className="editorial-color-kiss mt-4 font-display text-5xl leading-none md:text-7xl">
              Om Elins val
            </h1>
            <EditorialMeta path={pagePath} className="mt-5" />
            <p className="mt-6 text-lg leading-8 text-ink">
              Elins val är en svensk köpguide för skönhet, hälsa, träning och
              resa. Vi jämför produkter som säljs i Sverige, väger
              specifikationer mot tusentals verkliga köparomdömen och sätter
              Elins poäng – så att du slipper gissa.
            </p>
            <p className="mt-5 text-lg leading-8 text-ink">
              Målet är inte att lista allt. Målet är att göra valet{" "}
              <span className="font-semibold text-violet">lugnare</span>:
              varför något är intressant, vem det passar, vilken kompromiss som
              finns och när ett{" "}
              <span className="font-semibold text-mid">
                billigare eller enklare
              </span>{" "}
              alternativ räcker.
            </p>
          </article>

          <aside className="rounded-[2.4rem] border border-line bg-rose/8 p-6 shadow-[0_30px_90px_rgba(185,131,166,0.1)]">
            <div className="flex h-full min-h-[22rem] flex-col justify-between rounded-[2rem] bg-surface/58 p-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-rose">
                  Elins löfte
                </p>
                <h2 className="editorial-color-kiss mt-3 font-display text-4xl leading-tight">
                  Hellre ett tydligt nej än en lång lista.
                </h2>
              </div>
              <div className="mt-8 grid gap-3">
                {[
                  {
                    text: "Värde före hype.",
                    className: "border-rose/30 bg-rose/8 text-wine",
                  },
                  {
                    text: "Caveats innan klick.",
                    className: "border-violet/25 bg-violet/8 text-violet",
                  },
                  {
                    text: "Annons märks tydligt.",
                    className: "border-gold/35 bg-gold/12 text-[#755b35]",
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    className={`rounded-2xl border px-4 py-3 font-black ${item.className}`}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section id="azzam" className={sectionClass}>
          <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
            {siteConfig.operatorImage ? (
              <Image
                src={siteConfig.operatorImage}
                alt={`${siteConfig.operatorName}, ansvarig utgivare för Elins val`}
                width={160}
                height={160}
                className="h-40 w-40 rounded-[2rem] border border-line object-cover"
              />
            ) : null}
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-rose">
                {siteConfig.operatorRole}
              </p>
              <h2 className={`${headingClass} mt-3`}>
                Vem står bakom Elins val?
              </h2>
              <p className="mt-4 leading-8 text-ink">
                <strong>{siteConfig.operatorName}</strong>, grundare av FRAMFORM
                och ansvarig utgivare för Elins val. Webbutvecklare och
                AI-automationsspecialist; bygger och förvaltar sajten,
                fastställer urvalskriterierna och ansvarar för allt som
                publiceras. Elins val är ett av FRAMFORM:s egna projekt.
              </p>
              <p className="mt-4 leading-8 text-ink-soft">
                FRAMFORM är en digital produktions- och designstudio som drivs
                av {siteConfig.operatorName} som {siteConfig.operatorLegalForm}{" "}
                i Sverige, etablerad i {siteConfig.operatorCity}.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={siteConfig.operatorLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pillLinkClass}
                >
                  LinkedIn
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a
                  href={siteConfig.companyUrl}
                  target="_blank"
                  rel="noopener"
                  className={pillLinkClass}
                >
                  FRAMFORM – företagsinformation
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="elin" className={sectionClass}>
          <h2 className={headingClass}>Vad är Elin?</h2>
          <p className="mt-4 max-w-3xl leading-8 text-ink">
            Elin är namnet på Elins vals redaktionella röst – sättet vi väljer,
            jämför och skriver på. Elin är inte en person. Bakom varje text står
            redaktionen under ansvarig utgivare.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-ink-soft">
            När det står &quot;Elin jämför&quot; eller &quot;Elins poäng&quot;
            betyder det alltså att redaktionen har gått igenom produkten enligt
            de kriterier som beskrivs nedan – inte att en enskild person har
            provat den.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-ink-soft">
            Rösten är personlig för att texterna ska vara lätta att läsa.
            Ansvaret är det inte: vem som svarar för innehållet står alltid
            överst på varje sida och här på den här sidan.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Så väljer vi produkter</h2>
          <p className="mt-4 max-w-3xl leading-8 text-ink">
            Vi utgår från produkter som faktiskt säljs i Sverige och läser
            specifikationer, köparomdömen och återkommande klagomål innan något
            får en plats. Urvalet vilar på tre lager som hålls isär:
            redaktionens val, Amazon-köparnas signaler i form av betyg, antal
            omdömen och återkommande reservationer, och våra besökares egna
            recensioner, som modereras innan de publiceras.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-ink">
            Det vi väger in är sådant som går att kontrollera: vad produkten
            faktiskt gör, hur den skiljer sig från de närmaste alternativen,
            vilken prisnivå den ligger på och vad köpare återkommer till i
            både beröm och kritik. Exakta priser visar vi inte, eftersom Amazon
            ändrar pris och lagerstatus utan förvarning – i stället anger vi en
            prisnivå och ber dig kontrollera aktuellt pris innan köp.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {selectionPillars.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-line bg-rose/8 p-6"
                >
                  <Icon className="text-wine" size={24} aria-hidden="true" />
                  <h3 className="editorial-color-kiss mt-4 font-display text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-7 text-ink-soft">{item.text}</p>
                </article>
              );
            })}
          </div>
          <p className="mt-6 max-w-3xl leading-8 text-ink-soft">
            Varje sida visar överst när den senast uppdaterades. Datumet
            hämtas från vår publiceringshistorik och är samma datum som vi
            rapporterar till sökmotorerna, så det går inte att pynta.
          </p>
          <Link href="/elins-poang" className={`${pillLinkClass} mt-6`}>
            Så sätter vi Elins poäng
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Vad vi inte gör</h2>
          <p className="mt-4 max-w-3xl leading-8 text-ink">
            Vi skriver aldrig att en produkt är provad av oss när den inte är
            det. När vi har egna bilder, mätningar eller användning markeras det
            tydligt på sidan. Vi tar inte betalt för placeringar, publicerar
            inga gästinlägg och säljer inga länkar.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-ink-soft">
            Vi ger inte heller medicinska råd. Sidorna om hälsa och hud handlar
            om vilka produkter som är värda pengarna – inte om diagnoser eller
            behandling. Har du besvär ska du prata med vården, inte med en
            köpguide.
          </p>
        </section>

        <section id="sa-tjanar-vi-pengar" className={sectionClass}>
          <h2 className={headingClass}>Så tjänar vi pengar</h2>
          <p className="mt-4 max-w-3xl leading-8 text-ink">
            Elins val finansieras av provision: när du klickar på en länk märkt
            Annons/Reklamlänk och handlar hos Amazon.se eller någon av våra
            partnerbutiker kan vi få en ersättning. Det kostar dig inget extra
            och påverkar varken urvalet eller Elins poäng. Vi är deltagare i
            Amazon Associates-programmet och tjänar på kvalificerade köp.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-ink-soft">
            I praktiken ser du det så här: varje köpknapp har texten
            &quot;Reklamlänk – vi får provision vid köp&quot; under sig, och
            varje sida med sådana länkar säger det redan under rubriken. Ingen
            butik kan köpa sig en plats, ett högre betyg eller en mildare
            reservation.
          </p>
        </section>

        <section id="kontakt" className={sectionClass}>
          <h2 className={headingClass}>Kontakt</h2>
          <p className="mt-4 max-w-3xl leading-8 text-ink">
            Hittar du ett fel i en text, en produkt som utgått eller en länk som
            inte fungerar? Skriv till{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-bold text-wine underline underline-offset-4"
            >
              {siteConfig.email}
            </a>
            , så rättar vi. Elins val ges ut av FRAMFORM,{" "}
            {siteConfig.operatorCity}, {siteConfig.operatorCountry}.
          </p>
          <Link href="/kontakt" className={`${pillLinkClass} mt-5`}>
            Till kontaktsidan
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </main>
  );
}
