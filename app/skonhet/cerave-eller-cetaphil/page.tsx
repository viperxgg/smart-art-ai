import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  ceraveEllerCetaphilComparisonRows,
  ceraveEllerCetaphilDecision,
  ceraveEllerCetaphilFaqItems,
  ceraveEllerCetaphilPicks,
  ceraveEllerCetaphilRelatedLinks,
} from "@/lib/cerave-eller-cetaphil";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/cerave-eller-cetaphil`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "CeraVe eller Cetaphil?", href: `/skonhet/cerave-eller-cetaphil` },
];

export const metadata = createSeoMetadata({
  title: "CeraVe eller Cetaphil – torr eller känslig hud? | Elins val",
  description: "Jämför CeraVe Hydrating Cleanser och Cetaphil Gentle Skin Cleanser: dokumenterade skillnader, vad vi inte vet och när du kan avstå från ett köp.",
  url: pageUrl,
});

export default function CeraveEllerCetaphilPage() {
  return (
    <DecisionComparisonPage
      h1={"CeraVe eller Cetaphil?"}
      intro="Två rengöringar, men inget självklart val för alla. Börja med det du behöver och vad som redan fungerar i din rutin."
      badges={["Rengöring", "Tillverkarkällor", "Inget eget test"]}
      howToChoose="Utgå från dina tidigare erfarenheter av rengöring. Kontrollera formulan på förpackningen och använd skillnaderna som frågor att ta ställning till, inte som bevis för att en produkt är bättre."
      verdict="Behåll det som fungerar. Om du behöver köpa nytt, jämför rätt produktvariant och totalkostnad; våra källor räcker inte för att utse en universell vinnare."
      decision={ceraveEllerCetaphilDecision}
      hideUnverifiedImages
      picks={ceraveEllerCetaphilPicks}
      comparisonRows={ceraveEllerCetaphilComparisonRows}
      faqItems={ceraveEllerCetaphilFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={ceraveEllerCetaphilRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
