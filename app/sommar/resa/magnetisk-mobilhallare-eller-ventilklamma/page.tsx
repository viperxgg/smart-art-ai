import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  magnetiskMobilhallareEllerVentilklammaComparisonRows,
  magnetiskMobilhallareEllerVentilklammaFaqItems,
  magnetiskMobilhallareEllerVentilklammaPicks,
  magnetiskMobilhallareEllerVentilklammaRelatedLinks,
} from "@/lib/magnetisk-mobilhallare-eller-ventilklamma";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/sommar/resa/magnetisk-mobilhallare-eller-ventilklamma`;

const heroImage = {
  src: "/comparisons/magnetisk-mobilhallare-eller-ventilklamma.webp",
  alt: "Magnetisk mobilhållare eller ventilklämma? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Resa", href: "/sommar/resa" },
  { name: "Magnetisk mobilhållare eller ventilklämma?", href: `/sommar/resa/magnetisk-mobilhallare-eller-ventilklamma` },
];

export const metadata = createSeoMetadata({
  title: "Magnetisk mobilhållare eller ventilklämma? | Elins val",
  description: "Magnetisk mobilhållare eller ventilklämma i bilen? Elin jämför Lamicall MagSafe mot Blukar klämma ärligt – en-handsgrepp mot passar-alla inför road trippen.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function MagnetiskMobilhallareEllerVentilklammaPage() {
  return (
    <DecisionComparisonPage
      h1={"Magnetisk mobilhållare eller ventilklämma?"}
      intro={"Magnetisk mobilhållare eller klassisk ventilklämma – båda håller mobilen i sikte på semesterkörningen, men på olika sätt. Magneten låter dig sätta dit och ta loss mobilen med en hand, medan klämman passar alla mobiler utan magnetskal eller ring. Valet hänger på vilken mobil du har – och vilka som delar bilen."}
      badges={["Road trip","Navigering","Sommar"]}
      howToChoose={"Välj den magnetiska hållaren om du har iPhone med MagSafe eller redan kör magnetskal – smidigheten med en hand är svårslagen. Välj ventilklämman om du har Android utan magnet, inte vill köpa extra tillbehör, eller om flera i familjen med olika mobiler delar bil."}
      verdict={"Jämnt lopp – och ärligt talat vinner den som passar din mobil. Lamicall får en poäng mer för att en-handsgreppet är så smidigt i vardagen, men den kräver MagSafe eller ring. Blukar-klämman funkar med allt direkt ur kartongen och är därför familjebilens säkra kort."}
      heroImage={heroImage}
      picks={magnetiskMobilhallareEllerVentilklammaPicks}
      comparisonRows={magnetiskMobilhallareEllerVentilklammaComparisonRows}
      faqItems={magnetiskMobilhallareEllerVentilklammaFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={magnetiskMobilhallareEllerVentilklammaRelatedLinks}
      backHref={"/sommar/resa"}
      backLabel={"Tillbaka till Elins reseval"}
    />
  );
}
