import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  ansiktstrimmerEllerRakapparatComparisonRows,
  ansiktstrimmerEllerRakapparatFaqItems,
  ansiktstrimmerEllerRakapparatPicks,
  ansiktstrimmerEllerRakapparatRelatedLinks,
} from "@/lib/ansiktstrimmer-eller-rakapparat-dam";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/ansiktstrimmer-eller-rakapparat-dam`;

const heroImage = {
  src: "/comparisons/ansiktstrimmer-eller-rakapparat-dam.webp",
  alt: "Ansiktstrimmer eller rakapparat för dam? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Ansiktstrimmer eller rakapparat för dam?", href: `/skonhet/ansiktstrimmer-eller-rakapparat-dam` },
];

export const metadata = createSeoMetadata({
  title: "Ansiktstrimmer eller rakapparat för dam? | Elins val",
  description: "Ansiktstrimmer eller rakapparat för dam? Elin jämför exakt formning av fina hår mot snabb, skonsam rakning av större ytor så du väljer rätt.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function AnsiktstrimmerEllerRakapparatPage() {
  return (
    <DecisionComparisonPage
      h1={"Ansiktstrimmer eller rakapparat för dam?"}
      intro={"Ansiktstrimmer och rakapparat för dam tar båda bort fina hår i ansiktet, men på olika sätt. En ansiktstrimmer är liten och exakt för att snygga till bryn, överläpp och kinder, medan en rakapparat för dam täcker större ytor snabbt och skonsamt på både ansikte och kropp."}
      badges={["Ansiktshår","Exakt vs snabbt","Skonsamt"]}
      howToChoose={"Välj en ansiktstrimmer om du vill ha ett litet, exakt verktyg för att forma bryn och ta bort fina hår på överläpp och kinder med precision. Välj en rakapparat för dam om du vill kunna raka större ytor snabbt och skonsamt, i ansiktet eller på kroppen. Många har en trimmer för detaljer och en rakapparat för större ytor."}
      verdict={"Det handlar om precision mot yta. Ansiktstrimmern vinner för exakt formning av små områden, medan rakapparaten vinner för att snabbt sköta större ytor. Detaljer och bryn – trimmer. Större ytor snabbt – rakapparat."}
      heroImage={heroImage}
      picks={ansiktstrimmerEllerRakapparatPicks}
      comparisonRows={ansiktstrimmerEllerRakapparatComparisonRows}
      faqItems={ansiktstrimmerEllerRakapparatFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={ansiktstrimmerEllerRakapparatRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
