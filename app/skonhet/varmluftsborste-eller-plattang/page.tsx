import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  varmluftsborsteEllerPlattangComparisonRows,
  varmluftsborsteEllerPlattangFaqItems,
  varmluftsborsteEllerPlattangPicks,
  varmluftsborsteEllerPlattangRelatedLinks,
} from "@/lib/varmluftsborste-eller-plattang";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/varmluftsborste-eller-plattang`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  {
    name: "Varmluftsborste eller plattång?",
    href: "/skonhet/varmluftsborste-eller-plattang",
  },
];

export const metadata = createSeoMetadata({
  title: "Varmluftsborste eller plattång? Så väljer du 2026 | Elins val",
  description:
    "Elin jämför BaByliss AS126E och Remington S8540: torka med volym i ett steg eller få slätt, polerat resultat med högre poäng.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${varmluftsborsteEllerPlattangPicks[1].product.image}`,
    width: 1200,
    height: 900,
    alt: varmluftsborsteEllerPlattangPicks[1].product.imageAlt,
  },
});

export default function VarmluftsborsteEllerPlattangPage() {
  return (
    <DecisionComparisonPage
      h1="Varmluftsborste eller plattång?"
      intro="Varmluftsborsten torkar och formar med mjuk volym i ett moment. Plattången ger slätare, mer polerad finish och är mer mångsidig för rakt hår och mjuka vågor."
      badges={["Allt-i-ett", "Slätt & polerat", "Volym"]}
      howToChoose="Välj BaByliss AS126E om du vill ha snabb volym, böj och brushing i ett steg. Välj Remington S8540 om du prioriterar slätt, polerat resultat, mer kontroll och högre Elin-poäng."
      verdict="BaByliss AS126E är smidigast när morgonrutinen handlar om volym i ett steg. Remington S8540 är starkare för de flesta som vill ha slätt, polerat hår och ett mer mångsidigt stylingverktyg."
      picks={varmluftsborsteEllerPlattangPicks}
      comparisonRows={varmluftsborsteEllerPlattangComparisonRows}
      faqItems={varmluftsborsteEllerPlattangFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={varmluftsborsteEllerPlattangRelatedLinks}
    />
  );
}
