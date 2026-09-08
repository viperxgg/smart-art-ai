import { indoorAirDecision } from "@/lib/indoor-air-decision";
// Content refresh 2026-08-28: länk till luftavfuktare-eller-luftrenare (lufttriangeln komplett).
import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  luftfuktareEllerLuftrenareComparisonRows,
  luftfuktareEllerLuftrenareFaqItems,
  luftfuktareEllerLuftrenarePicks,
  luftfuktareEllerLuftrenareRelatedLinks,
} from "@/lib/luftfuktare-eller-luftrenare";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/luftfuktare-eller-luftrenare`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Luftfuktare eller luftrenare?", href: `/halsa/luftfuktare-eller-luftrenare` },
];

export const metadata = createSeoMetadata({
  title: "Luftrenare eller luftfuktare – vilken behöver du? | Elins val",
  description: "Mät fukten, identifiera partiklarna och kontrollera ventilationen före köp. Classic 300S och Core 200S med källor, skötsel och tydliga begränsningar.",
  url: pageUrl,
});

export default function LuftfuktareEllerLuftrenarePage() {
  return (
    <DecisionComparisonPage
      h1={"Luftfuktare eller luftrenare?"}
      intro={"Behöver luften mer fukt, färre partiklar eller bättre ventilation? Classic 300S tillför fukt, Core 200S filtrerar luft. Börja med att förstå problemet – och kontrollera om du behöver köpa någon av dem."}
      badges={["Mät före köp", "Fukt eller partiklar"]}
      howToChoose={"Kontrollera fuktnivån innan du tillför vatten till luften. Vid partiklar: minska källorna och se över ventilationen innan du väljer kompletterande filtrering. Skötsel och rätt produktvariant ingår i beslutet."}
      verdict={"Ingen av apparaterna är en generell lösning på dålig inomhusluft. Välj först efter konstaterat behov och räkna med underhåll. Vid fukt- eller ventilationsproblem i bostaden: utred orsaken i stället för att köpa båda."}
      decision={indoorAirDecision}
      hideUnverifiedImages
      picks={luftfuktareEllerLuftrenarePicks}
      comparisonRows={luftfuktareEllerLuftrenareComparisonRows}
      faqItems={luftfuktareEllerLuftrenareFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={luftfuktareEllerLuftrenareRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
