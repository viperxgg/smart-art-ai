import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  hantlarEllerGummibandComparisonRows,
  hantlarEllerGummibandDecision,
  hantlarEllerGummibandFaqItems,
  hantlarEllerGummibandPicks,
  hantlarEllerGummibandRelatedLinks,
} from "@/lib/hantlar-eller-gummiband";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/hantlar-eller-gummiband`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Hantlar eller gummiband?", href: `/traning/hantlar-eller-gummiband` },
];

export const metadata = createSeoMetadata({
  title: "Hantlar eller miniband – vad kräver dina övningar? | Elins val",
  description: "Fasta hantlar eller korta miniband? Jämför redskapens uppgift, begränsningar och vad du måste kontrollera före köp.",
  url: pageUrl,

});

export default function HantlarEllerGummibandPage() {
  return (
    <DecisionComparisonPage
      h1={"Hantlar eller miniband – vad kräver dina övningar?"}
      intro={"Här jämför vi fasta neoprenhantlar med korta miniband. Börja med övningen: behöver du en vikt i handen eller ett kort band? Produkterna ersätter inte automatiskt varandra."}
      badges={["Fast vikt eller kort band", "Kontrollera varianten", "Inget eget produkttest"]}
      decision={hantlarEllerGummibandDecision}
      hideUnverifiedImages
      howToChoose={"Kontrollera en konkret övning och vad som saknas i utrustningen du redan har. Matcha sedan hantelns vikt eller bandets längd och motstånd. Exakta butiksvarianter återstår att verifiera."}
      verdict={"Välj redskap för en bestämd uppgift. Vi utser ingen vinnare och har inget stöd för att dessa band generellt är skonsammare eller att hantlar alltid ger bättre träning."}
      picks={hantlarEllerGummibandPicks}
      comparisonRows={hantlarEllerGummibandComparisonRows}
      faqItems={hantlarEllerGummibandFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={hantlarEllerGummibandRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
