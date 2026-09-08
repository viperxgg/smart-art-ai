import { kettlebellDumbbellDecision } from "@/lib/kettlebell-dumbbell-decision";
// Content refresh 2026-08-29: länk till gjutjarn-eller-mjuk-kettlebell.
import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  kettlebellEllerHantlarComparisonRows,
  kettlebellEllerHantlarFaqItems,
  kettlebellEllerHantlarPicks,
  kettlebellEllerHantlarRelatedLinks,
} from "@/lib/kettlebell-eller-hantlar";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/kettlebell-eller-hantlar`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Kettlebell eller hantlar?", href: "/traning/kettlebell-eller-hantlar" },
];

export const metadata = createSeoMetadata({
  title: "Kettlebell eller hantlar - vad ska du börja med hemma? | Elins val",
  description:
    "Kettlebell eller fasta hantlar? Välj efter övningar, vikt per redskap och paketets innehåll. Butiksvarianterna återstår att verifiera.",
  url: pageUrl,
});

export default function KettlebellEllerHantlarPage() {
  return (
    <DecisionComparisonPage
      decision={kettlebellDumbbellDecision}
      hideUnverifiedImages
      backHref="/traning"
      backLabel="Tillbaka till träning"
      h1="Kettlebell eller hantlar?"
      intro="Behöver du en kettlebell eller flera fasta hantlar? Börja med vilka övningar och vikter du använder. De två butiksposterna är ännu inte matchade mot exakta varianter; här får du hjälp att granska skillnaderna innan köp."
      badges={["Välj efter övningen", "Kontrollera paketet"]}
      howToChoose="Skriv upp vilka vikter du behöver och om övningarna kräver ett redskap eller ett par. Kontrollera sedan varje del i paketet. Ett set med fasta hantlar är inte ett justerbart system, och en kettlebell ersätter inte automatiskt ett hantelpar."
      verdict={"Välj utifrån dina övningar och de vikter du behöver. Kontrollera exakt vikt och paketets innehåll; en kettlebell och ett hantelset är inte automatiskt utbytbara."}
      picks={kettlebellEllerHantlarPicks}
      comparisonRows={kettlebellEllerHantlarComparisonRows}
      faqItems={kettlebellEllerHantlarFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={kettlebellEllerHantlarRelatedLinks}
    />
  );
}
