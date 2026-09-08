import { olaplexMaskDecision } from "@/lib/hair-mask-decision";
import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  olaplexEllerHarinpackningComparisonRows,
  olaplexEllerHarinpackningFaqItems,
  olaplexEllerHarinpackningPicks,
  olaplexEllerHarinpackningRelatedLinks,
} from "@/lib/olaplex-eller-harinpackning";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/olaplex-eller-harinpackning`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Olaplex eller hårinpackning – värt det?", href: `/skonhet/olaplex-eller-harinpackning` },
];

export const metadata = createSeoMetadata({
  title: "Olaplex eller inpackning – vilken gör nytta? | Elins val",
  description: "Behandling före eller mask efter schampo? Jämför Olaplex N°.3 PLUS och Absolut Repair Thick Hair med exakta varianter och tydliga begränsningar.",
  url: pageUrl,
});

export default function OlaplexEllerHarinpackningPage() {
  return (
    <DecisionComparisonPage
      h1={"Olaplex eller hårinpackning – värt det?"}
      intro={"Vilket steg saknar du i din rutin? Olaplex N°.3 PLUS används före schampo, Absolut Repair Thick Hair efter. Här jämför vi användning och exakta varianter, utan att utse en vinnare som vi inte har testunderlag för."}
      badges={["Före eller efter schampo", "Exakt variant"]}
      howToChoose={"Börja med användningssättet. Om din nuvarande rutin redan fungerar behöver du inte lägga till ett steg. Kontrollera PLUS respektive Thick Hair på förpackningen innan du jämför pris eller instruktioner."}
      verdict={"Kontrollera den exakta formulan, användningen och vad du vill förändra i din rutin. Vi har inget stöd här för att beskriva en inpackning som enbart döljande eller för att motivera ett högre pris med en odokumenterad poäng."}
      decision={olaplexMaskDecision}
      hideUnverifiedImages
      picks={olaplexEllerHarinpackningPicks}
      comparisonRows={olaplexEllerHarinpackningComparisonRows}
      faqItems={olaplexEllerHarinpackningFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={olaplexEllerHarinpackningRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
