import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  wakeUpLightEllerSolnedgangslampaComparisonRows,
  wakeUpLightEllerSolnedgangslampaFaqItems,
  wakeUpLightEllerSolnedgangslampaPicks,
  wakeUpLightEllerSolnedgangslampaRelatedLinks,
} from "@/lib/wake-up-light-eller-solnedgangslampa";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/wake-up-light-eller-solnedgangslampa`;

const heroImage = {
  src: "/comparisons/wake-up-light-eller-solnedgangslampa.webp",
  alt: "Wake-up light eller solnedgångslampa? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Wake-up light eller solnedgångslampa?", href: `/halsa/wake-up-light-eller-solnedgangslampa` },
];

export const metadata = createSeoMetadata({
  title: "Wake-up light eller solnedgångslampa? | Elins val",
  description: "Wake-up light eller solnedgångslampa? Elin jämför en mjukare väckning på morgonen mot varmt kvällsmys så du väljer rätt ljus för ditt behov.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function WakeUpLightEllerSolnedgangslampaPage() {
  return (
    <DecisionComparisonPage
      h1={"Wake-up light eller solnedgångslampa?"}
      intro={"Wake-up light och solnedgångslampa jobbar båda med ljus och stämning, men vid motsatta tider på dygnet. En wake-up light simulerar en gryning som gradvis ljusnar för att väcka dig mjukare på morgonen, medan en solnedgångslampa kastar ett varmt, färgat ljus för mysig stämning på kvällen."}
      badges={["Ljus & stämning","Morgon vs kväll","Sömn & mys"]}
      howToChoose={"Välj en wake-up light om du har svårt att vakna i mörka morgnar och vill väckas mjukare av ett ljus som ljusnar gradvis. Välj en solnedgångslampa om du vill ha en mysig, varm stämning på kvällen och gilla den där gyllene ljuseffekten på väggen. De löser olika saker – väckning respektive kvällsmys."}
      verdict={"De hör hemma i var sin ände av dagen. Wake-up light vinner för mjukare morgnar och mörka vintrar, medan solnedgångslampan vinner för kvällsmys och stämning. Svårt att vakna – wake-up light. Vill ha mys – solnedgångslampa."}
      heroImage={heroImage}
      picks={wakeUpLightEllerSolnedgangslampaPicks}
      comparisonRows={wakeUpLightEllerSolnedgangslampaComparisonRows}
      faqItems={wakeUpLightEllerSolnedgangslampaFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={wakeUpLightEllerSolnedgangslampaRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
