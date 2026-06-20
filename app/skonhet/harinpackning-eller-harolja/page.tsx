import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  harinpackningEllerHaroljaComparisonRows,
  harinpackningEllerHaroljaFaqItems,
  harinpackningEllerHaroljaPicks,
  harinpackningEllerHaroljaRelatedLinks,
} from "@/lib/harinpackning-eller-harolja";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/harinpackning-eller-harolja`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Hårinpackning eller hårolja?", href: "/skonhet/harinpackning-eller-harolja" },
];

export const metadata = createSeoMetadata({
  title: "Hårinpackning eller hårolja - vad räddar torrt sommarhår? | Elins val",
  description:
    "Elin jämför L'Oréal Absolut Repair inpackning och Moroccanoil hårolja: intensiv kur eller glansgivande leave-in-finish.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${harinpackningEllerHaroljaPicks[0].product.image}`,
    width: 1200,
    height: 900,
    alt: harinpackningEllerHaroljaPicks[0].product.imageAlt,
  },
});

export default function HarinpackningEllerHaroljaPage() {
  return (
    <DecisionComparisonPage
      h1="Hårinpackning eller hårolja?"
      intro="Båda räddar torrt sommarhår, men gör olika jobb. En hårinpackning är en intensiv kur som du sköljer ur, medan håroljan är en leave-in-finish för glans och mjukhet."
      badges={["Djup återfuktning", "Glans & mjukhet", "Sommarvård"]}
      howToChoose="Välj L'Oréal Absolut Repair om håret är mycket torrt och behöver en djup kur. Välj Moroccanoil Treatment om du mest vill ha glans och en len finish i vardagen. De fungerar fint tillsammans: inpackning i duschen, olja efteråt."
      verdict="Det här är inte vinnare-tar-allt. Inpackningen får något högre poäng som intensiv kur för torrt hår, medan håroljan är den smidiga finishen för glans och mjukhet. Tillsammans täcker de både djupvård och daglig finish."
      picks={harinpackningEllerHaroljaPicks}
      comparisonRows={harinpackningEllerHaroljaComparisonRows}
      faqItems={harinpackningEllerHaroljaFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={harinpackningEllerHaroljaRelatedLinks}
    />
  );
}
