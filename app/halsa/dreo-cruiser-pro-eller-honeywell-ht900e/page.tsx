import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  dreoEllerHoneywellComparisonRows,
  dreoEllerHoneywellFaqItems,
  dreoEllerHoneywellPicks,
  dreoEllerHoneywellRelatedLinks,
} from "@/lib/dreo-cruiser-pro-eller-honeywell";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/dreo-cruiser-pro-eller-honeywell-ht900e`;

const heroImage = {
  src: "/comparisons/dreo-eller-honeywell.webp",
  alt: "Elins jämförelse: Dreo Cruiser Pro tornfläkt mot Honeywell HT900E luftcirkulator",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  {
    name: "Dreo Cruiser Pro eller Honeywell HT900E?",
    href: "/halsa/dreo-cruiser-pro-eller-honeywell-ht900e",
  },
];

export const metadata = createSeoMetadata({
  title: "Dreo Cruiser Pro eller Honeywell HT900E? | Elins val",
  description:
    "Dreo Cruiser Pro eller Honeywell HT900E? Elin jämför den tysta tornfläkten mot den kompakta kraftfläkten så du väljer rätt svalka för sovrum eller skrivbord.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function DreoEllerHoneywellPage() {
  return (
    <DecisionComparisonPage
      h1="Dreo Cruiser Pro eller Honeywell HT900E?"
      intro="Dreo Cruiser Pro och Honeywell HT900E löser samma sommarproblem – att bli sval – men på olika sätt. Dreo är en tyst tornfläkt som sprider luften i hela rummet, medan Honeywell är en liten kraftfull luftcirkulator som blåser en riktad, stark luftström där du sitter."
      badges={["Tyst i sovrummet", "Kraftfull punktkyla", "Sommar"]}
      howToChoose="Välj Dreo Cruiser Pro om du vill ha en tyst tornfläkt som svalkar hela sovrummet och kan stå på när du sover. Välj Honeywell HT900E om du vill ha billig, kraftfull kyla riktad mot dig själv vid skrivbordet eller i köket, i ett litet format."
      verdict={"Utgå från placering, utrymme och det fläktläge du tänker använda. Jämför ljuduppgifter bara om mätförhållandena är jämförbara; vi har inte gjort ett gemensamt ljud- eller luftflödestest."}
      heroImage={heroImage}
      picks={dreoEllerHoneywellPicks}
      comparisonRows={dreoEllerHoneywellComparisonRows}
      faqItems={dreoEllerHoneywellFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={dreoEllerHoneywellRelatedLinks}
      backHref="/halsa"
      backLabel="Tillbaka till hälsa"
    />
  );
}
