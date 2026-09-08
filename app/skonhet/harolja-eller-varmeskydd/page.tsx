import { hairStylingDecision } from "@/lib/hair-styling-decision";
import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  haroljaEllerVarmeskyddComparisonRows,
  haroljaEllerVarmeskyddFaqItems,
  haroljaEllerVarmeskyddPicks,
  haroljaEllerVarmeskyddRelatedLinks,
} from "@/lib/harolja-eller-varmeskydd";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/harolja-eller-varmeskydd`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Hårolja eller värmeskydd?", href: "/skonhet/harolja-eller-varmeskydd" },
];

export const metadata = createSeoMetadata({
  title: "Hårolja med värmeskydd – räcker oljan? | Elins val",
  description:
    "Jämför Moroccanoil Original och Heat Slayer: olika uppgifter, exakta produktnamn, källor och när du kan avstå från ett extra köp.",
  url: pageUrl,

});

export default function HaroljaEllerVarmeskyddPage() {
  return (
    <DecisionComparisonPage
      h1="Hårolja eller värmeskydd – vad saknas i din rutin?"
      intro="Styling och finish är inte samma uppgift som ett uttryckligt värmeskydd. Här jämför vi två namngivna produkter och vad deras egna instruktioner faktiskt säger."
      badges={["Olika uppgifter", "Svenska tillverkarkällor", "Inget eget test"]}
      decision={hairStylingDecision}
      hideUnverifiedImages
      howToChoose="Kontrollera först vad du redan använder och vilken funktion som saknas. Matcha sedan hela produktnamnet och följ instruktionerna för just den produkten."
      verdict="Du behöver inte köpa båda. Välj efter behov och underlag; vi har inte testat att någon av dessa produkter ger ett bättre resultat än den andra."
      picks={haroljaEllerVarmeskyddPicks}
      comparisonRows={haroljaEllerVarmeskyddComparisonRows}
      faqItems={haroljaEllerVarmeskyddFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={haroljaEllerVarmeskyddRelatedLinks}
    />
  );
}
