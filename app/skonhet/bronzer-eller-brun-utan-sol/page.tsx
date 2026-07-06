import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  bronzerEllerBrunUtanSolComparisonRows,
  bronzerEllerBrunUtanSolFaqItems,
  bronzerEllerBrunUtanSolPicks,
  bronzerEllerBrunUtanSolRelatedLinks,
} from "@/lib/bronzer-eller-brun-utan-sol";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/bronzer-eller-brun-utan-sol`;

const heroImage = {
  src: "/comparisons/bronzer-eller-brun-utan-sol.webp",
  alt: "Bronzer eller brun utan sol? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Bronzer eller brun utan sol?", href: `/skonhet/bronzer-eller-brun-utan-sol` },
];

export const metadata = createSeoMetadata({
  title: "Bronzer eller brun utan sol? Solkysst utan sol | Elins val",
  description: "Bronzer eller brun utan sol? Elin jämför en tvättbar glow för dagen mot en färg som håller i flera dagar så du väljer rätt för din solkyssta look.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function BronzerEllerBrunUtanSolPage() {
  return (
    <DecisionComparisonPage
      h1={"Bronzer eller brun utan sol?"}
      intro={"Bronzer och brun-utan-sol ger båda en solkysst look utan sol, men på olika sätt och tidsskala. Bronzing drops blandar du i din kräm för en direkt glow som tvättas av på kvällen, medan brun-utan-sol utvecklas till en verklig färg som håller i flera dagar."}
      badges={["Solkysst utan sol","Direkt vs håller","Sommar"]}
      howToChoose={"Välj bronzer/bronzing drops om du vill ha en glow för dagen som du sköljer av på kvällen och gilla att kunna styra intensiteten från gång till gång. Välj brun-utan-sol om du vill ha en verklig, jämn färg som håller i flera dagar utan att sminka om. Många har bronzing drops för snabb glow och brun-utan-sol inför längre tillfällen."}
      verdict={"Det handlar om hur länge du vill vara solkysst. Bronzing drops vinner för en snabb, tvättbar glow, medan brun-utan-sol vinner för en färg som håller i dagar. Vill du ha en – välj drops för flexibel glow och brun-utan-sol för hållbar färg."}
      heroImage={heroImage}
      picks={bronzerEllerBrunUtanSolPicks}
      comparisonRows={bronzerEllerBrunUtanSolComparisonRows}
      faqItems={bronzerEllerBrunUtanSolFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={bronzerEllerBrunUtanSolRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
