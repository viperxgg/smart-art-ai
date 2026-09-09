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

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Resa", href: "/sommar/resa" },
  { name: "Magnetisk mobilhållare eller ventilklämma?", href: `/sommar/resa/magnetisk-mobilhallare-eller-ventilklamma` },
];

export const metadata = createSeoMetadata({
  title: "Magnetisk mobilhållare eller ventilklämma? | Elins val",
  description: "Magnetisk mobilhållare eller ventilklämma i bilen? Elin jämför Lamicall MagSafe mot Blukar klämma ärligt – en-handsgrepp mot passar-alla inför road trippen.",
  url: pageUrl,
});

export default function MagnetiskMobilhallareEllerVentilklammaPage() {
  return (
    <DecisionComparisonPage
      h1={"Magnetisk mobilhållare eller ventilklämma?"}
      intro={"Magnetisk mobilhållare eller klassisk ventilklämma – båda håller mobilen i sikte på semesterkörningen, men på olika sätt. Magneten låter dig sätta dit och ta loss mobilen med en hand, medan klämman passar alla mobiler utan magnetskal eller ring. Valet hänger på vilken mobil du har – och vilka som delar bilen."}
      badges={["Road trip","Navigering","Sommar"]}
      howToChoose={"Välj den magnetiska hållaren om du har iPhone med MagSafe eller redan kör magnetskal – smidigheten med en hand är svårslagen. Välj ventilklämman om du har Android utan magnet, inte vill köpa extra tillbehör, eller om flera i familjen med olika mobiler delar bil."}
      verdict={"Kontrollera hållarens krav mot just din telefon, ditt skal och bilens fäste. Varken magnetlösning eller klämma är ett universellt val; välj först när kompatibiliteten är bekräftad."}
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
