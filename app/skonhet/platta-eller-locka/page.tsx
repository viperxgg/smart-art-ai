import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  plattaEllerLockaComparisonRows,
  plattaEllerLockaFaqItems,
  plattaEllerLockaPicks,
  plattaEllerLockaRelatedLinks,
} from "@/lib/platta-eller-locka";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/platta-eller-locka`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Platta eller locka?", href: "/skonhet/platta-eller-locka" },
];

export const metadata = createSeoMetadata({
  title: "Platta eller locka? Så väljer du rätt hårverktyg 2026 | Elins val",
  description:
    "Elin jämför plattång och locktång: slätt hår och mjuka vågor med Remington S8540 eller definierade lockar med BaByliss C325E.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${plattaEllerLockaPicks[0].product.image}`,
    width: 1200,
    height: 900,
    alt: plattaEllerLockaPicks[0].product.imageAlt,
  },
});

export default function PlattaEllerLockaPage() {
  return (
    <DecisionComparisonPage
      h1="Platta eller locka?"
      intro="Plattången är mest mångsidig för slätt hår, polerad finish och mjuka vågor. Locktången är valet när du oftast vill ha definierade lockar. Beslutet styrs av vilken look du använder mest."
      badges={["Rakt & vågor", "Definierade lockar", "Mångsidig"]}
      howToChoose="För de flesta är Remington S8540 det smartaste förstavalet: högre Elin-poäng och mer användbar i vardagen eftersom den kan ge både slätt hår och mjuka vågor. Välj BaByliss C325E om din vanligaste look är tydliga, klassiska lockar."
      verdict="Remington S8540 vinner på mångsidighet och högre poäng: den passar flest när vardagen växlar mellan rakt, polerat och mjuka vågor. BaByliss C325E är ändå rätt val om definierade lockar är huvudmålet."
      picks={plattaEllerLockaPicks}
      comparisonRows={plattaEllerLockaComparisonRows}
      faqItems={plattaEllerLockaFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={plattaEllerLockaRelatedLinks}
    />
  );
}
