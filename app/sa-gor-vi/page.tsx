// Content created 2026-09-29: documented editorial method and price-review policy.
import Link from "next/link";

import { EditorialMeta } from "@/components/EditorialMeta";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pagePath = "/sa-gor-vi";
const pageTitle = "Så gör vi våra köpguider";

export const metadata = createSeoMetadata({
  title: "Så gör vi – urval, källor och priskontroller | Elins val",
  description:
    "Så väljer Elins val produkter, skiljer fakta från bedömningar, kontrollerar priser och rättar fel. Azzam Khalaf på FRAMFORM ansvarar för innehållet.",
  url: `${siteConfig.url}${pagePath}`,
});

const methodSections = [
  {
    id: "urval",
    title: "En verklig fråga före ett produktval",
    paragraphs: [
      "Vi börjar med ett behov och en fråga som går att besvara före köp: passar den här modellen mitt hår, min vardag eller den utrustning jag redan har? Sökfrågor och dokumenterad efterfrågan hjälper oss att välja ämnen. Popularitet är en signal om intresse, inte ett bevis på kvalitet eller att produkten passar alla.",
      "Innan ett nytt partnererbjudande tas med kontrollerar vi modell, storlek, färg när den är relevant och vad förpackningen innehåller. Vi undersöker vilka av våra partnerbutiker som har just den varianten. En snarlik produkt får inte ersätta en verifierad matchning. Provision avgör aldrig rekommendationen: användning, begränsningar och underlag ska förklara valet, även när slutsatsen är att avstå eller behålla det du har.",
    ],
  },
  {
    id: "underlag",
    title: "Tre sorters underlag hålls isär",
    paragraphs: [
      "Tillverkarens dokumentation använder vi för exempelvis mått, material, kompatibilitet och användningsanvisningar. Det är tillverkaruppgifter, inte egna mätningar. Butikens information använder vi för den erbjudna varianten, priset, köpvillkoren och den lagerstatus som gick att kontrollera vid tillfället. Butikens försäljningspåståenden blir inte automatiskt verifierade produktegenskaper.",
      "Den redaktionella bedömningen kopplar dessa uppgifter till läsarens fråga. Vi förklarar varför en funktion kan vara användbar och vilken kompromiss den innebär. Köparomdömen kan ge frågor att undersöka, men är varken laboratorieresultat eller våra egna erfarenheter. Källorna i guiden ska göra det möjligt att följa underlaget; när en uppgift saknar stöd lämnar vi den öppen.",
    ],
  },
  {
    id: "begransningar",
    title: "Vad en guide inte bevisar",
    paragraphs: [
      "Våra källbaserade köpguider är inte laboratorietester. Vi påstår inte att vi har hållit, använt eller testat produkten om en sådan dokumenterad egen granskning inte uttryckligen beskrivs på sidan. En produktbild visar produktens utseende, inte att vi har provat den. Illustrationer är inte resultatbevis.",
      "Vi hittar inte på betyg, effekter eller utmärkelser. Fördelar och nackdelar ska kunna härledas till underlaget, och råd om hud eller hälsa är inte diagnoser eller behandling. Läs också avsnitten om vem produkten passar och när ett enklare alternativ räcker: en bra köpguide ska kunna leda till att du inte köper något.",
    ],
  },
  {
    id: "priser",
    title: "Daterade priser och veckovis kontroll",
    paragraphs: [
      "Vår rutin är att granska produktpriser varje måndag klockan 09.00, svensk tid. Ett visat partnerpris är en daterad observation för en bestämd variant och butik. Vi kontrollerar också om priset kräver medlemskap, flera varor eller andra villkor. Texten Senast kontrollerat pris anger när kontrollen faktiskt lyckades; butikens pris vid köpet gäller.",
      "Om en kontroll misslyckas behåller vi det senast verifierade priset och dess ursprungliga datum. Ett passerat måndagsdatum betyder alltså inte att priset nyligen har kontrollerats. Amazon visas tills vidare med en länk för att kontrollera priset hos Amazon, utan ett manuellt inskrivet belopp. Fakta granskade avser guidens faktaunderlag och ska inte förväxlas med prisets kontrolldatum eller ett löfte om aktuellt lager.",
    ],
  },
  {
    id: "finansiering",
    title: "Så märker vi reklam",
    paragraphs: [
      "När en guide innehåller annonslänkar anger vi vilka butiker det gäller med formuleringen: Inlägget innehåller reklam genom annonslänkar för … Butiksnamnen ersätter punkterna. Vi kan få ersättning om du handlar via en sådan länk. För Amazon anger vi också att vi som Amazon-associates tjänar pengar på kvalificerade köp.",
      "En annonslänk ska gå till den angivna butiken och vara tydligt märkt. Ersättningen är sajtens finansiering, inte ett belägg för att en produkt är bättre. Vi döljer inte en dokumenterad nackdel för att ett köp kan ge provision.",
    ],
  },
];

export default function MethodPage() {
  return (
    <main id="content" className="min-h-screen bg-bg px-4 py-8 text-ink">
      <WebPageJsonLd path={pagePath} name={pageTitle} />
      <article className="mx-auto w-full max-w-3xl">
        <Link
          href="/om-oss"
          className="inline-flex min-h-11 items-center font-semibold text-wine underline underline-offset-4"
        >
          Om Elins val
        </Link>
        <header className="mt-6 rounded-[2rem] border border-line bg-surface/72 p-6 md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-rose">
            Vår metod
          </p>
          <h1 className="editorial-color-kiss mt-4 font-display text-4xl leading-tight md:text-5xl">
            {pageTitle}
          </h1>
          <EditorialMeta path={pagePath} className="mt-5" hideDisclosure />
          <p className="mt-5 text-lg leading-8">
            Elins val hjälper dig att förstå skillnaderna före köp. Här beskriver
            vi hur vi väljer, granskar och uppdaterar underlaget bakom våra råd.
          </p>
        </header>
        {methodSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mt-8 scroll-mt-28 rounded-[2rem] border border-line bg-surface/72 p-6 md:p-10"
          >
            <h2 className="editorial-color-kiss font-display text-3xl leading-tight">
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-8 text-ink-soft">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <section
          id="rattelser"
          className="mt-8 scroll-mt-28 rounded-[2rem] border border-line bg-surface/72 p-6 md:p-10"
        >
          <h2 className="editorial-color-kiss font-display text-3xl leading-tight">
            Rättelser och ansvar
          </h2>
          <p className="mt-4 leading-8 text-ink-soft">
            Hittar du fel variant, en trasig länk eller en uppgift som behöver
            rättas? Skicka sidans adress och vad du reagerat på till{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="break-words font-semibold text-wine underline underline-offset-4"
            >
              {siteConfig.email}
            </a>
            . Vi kontrollerar underlaget och rättar konstaterade fel. När en guide
            har en synlig uppdateringslogg visar den daterade, dokumenterade
            ändringar, inte en ny granskning bara för att kalendern har gått framåt.
          </p>
          <p className="mt-4 leading-8 text-ink-soft">
            Ansvarig utgivare och redaktör är{" "}
            <Link
              href="/om-oss#azzam"
              className="font-semibold text-wine underline underline-offset-4"
            >
              Azzam Khalaf
            </Link>
            , grundare av FRAMFORM. Han ansvarar för det som publiceras. Elin är
            vår redaktionella röst, inte en verklig person eller en produkttestare.
          </p>
        </section>
      </article>
    </main>
  );
}
