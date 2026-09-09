import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  miniProjektorEllerStjarnprojektorComparisonRows,
  miniProjektorEllerStjarnprojektorFaqItems,
  miniProjektorEllerStjarnprojektorPicks,
  miniProjektorEllerStjarnprojektorRelatedLinks,
} from "@/lib/mini-projektor-eller-stjarnprojektor";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/mini-projektor-eller-stjarnprojektor`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  {
    name: "Mini-projektor eller stjärnprojektor?",
    href: "/halsa/mini-projektor-eller-stjarnprojektor",
  },
];

export const metadata = createSeoMetadata({
  title: "Mini-projektor eller stjärnprojektor - vilken ska du välja? | Elins val",
  description:
    "Elin jämför en mini-projektor och en stjärnprojektor: bärbar bio för film på väggen eller en drömmig galaxhimmel på taket.",
  url: pageUrl,
});

export default function MiniProjektorEllerStjarnprojektorPage() {
  return (
    <DecisionComparisonPage
      h1="Mini-projektor eller stjärnprojektor?"
      intro="Båda förvandlar rummet på kvällen, men gör helt olika saker. En mini-projektor visar film och serier på väggen, medan en stjärnprojektor fyller taket med en drömmig galaxhimmel."
      badges={["Smart hem", "Mysbelysning", "Kvällsmys"]}
      howToChoose="Välj mini-projektorn om du vill ha en bärbar bio för film och serier. Välj stjärnprojektorn om du vill skapa en drömmig, mysig stämning i rummet. De löser helt olika behov - innehåll på väggen eller stämning på taket."
      verdict={"Börja med vad du vill visa: film och annat bildinnehåll, eller dekorativt ljus. Kontrollera funktionerna för just modellen; produkterna löser olika uppgifter och en poäng avgör inte ditt behov."}
      picks={miniProjektorEllerStjarnprojektorPicks}
      comparisonRows={miniProjektorEllerStjarnprojektorComparisonRows}
      faqItems={miniProjektorEllerStjarnprojektorFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={miniProjektorEllerStjarnprojektorRelatedLinks}
    />
  );
}
