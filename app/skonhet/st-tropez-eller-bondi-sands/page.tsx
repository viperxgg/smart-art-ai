import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  stTropezEllerBondiSandsComparisonRows,
  stTropezEllerBondiSandsFaqItems,
  stTropezEllerBondiSandsPicks,
  stTropezEllerBondiSandsRelatedLinks,
} from "@/lib/st-tropez-eller-bondi-sands";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/st-tropez-eller-bondi-sands`;

const heroImage = {
  src: "/comparisons/st-tropez-eller-bondi-sands.webp",
  alt: "St.Tropez eller Bondi Sands? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "St.Tropez eller Bondi Sands?", href: `/skonhet/st-tropez-eller-bondi-sands` },
];

export const metadata = createSeoMetadata({
  title: "St.Tropez eller Bondi Sands? Bästa brun utan sol | Elins val",
  description: "St.Tropez eller Bondi Sands? Elin jämför de två mest köpta självbruna så du väljer rätt för en naturlig, jämn sommarbrun färg utan sol.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function StTropezEllerBondiSandsPage() {
  return (
    <DecisionComparisonPage
      h1={"St.Tropez eller Bondi Sands?"}
      intro={"St.Tropez och Bondi Sands är två av de mest älskade självbruna – båda ger en fin, sommarbrun färg utan sol, men känns lite olika. St.Tropez Self Tan Express är känd för en naturlig, snabb färg du kan skölja av efter timmar, medan Bondi Sands mousse är enkel att applicera jämnt med en lätt guldton."}
      badges={["Brun utan sol","Naturlig färg","Sommar"]}
      howToChoose={"Välj St.Tropez Self Tan Express om du vill styra färgdjupet själv – ju längre du låter den sitta, desto mörkare – och gillar ett naturligt resultat. Välj Bondi Sands mousse om du vill ha en enkel, jämn applicering med guldig ton och tydlig färg som guidar var du redan lagt. Båda bygger på att du exfolierar och applicerar med vante."}
      verdict={"Båda ger en fin brun-utan-sol-färg. St.Tropez vinner på kontroll och ett naturligt resultat, medan Bondi Sands är enklast att lägga jämnt tack vare den färgade moussen. Vill du ha snabbast och mest kontroll – St.Tropez. Vill du ha lättast applicering – Bondi Sands."}
      heroImage={heroImage}
      picks={stTropezEllerBondiSandsPicks}
      comparisonRows={stTropezEllerBondiSandsComparisonRows}
      faqItems={stTropezEllerBondiSandsFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={stTropezEllerBondiSandsRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
