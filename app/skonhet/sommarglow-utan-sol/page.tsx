import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  sommarglowUtanSolComparisonRows,
  sommarglowUtanSolFaqItems,
  sommarglowUtanSolPicks,
  sommarglowUtanSolRelatedLinks,
} from "@/lib/sommarglow-utan-sol";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/sommarglow-utan-sol`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Sommarglow utan sol", href: "/skonhet/sommarglow-utan-sol" },
];

export const metadata = createSeoMetadata({
  title: "Sommarglow utan sol: självbruna eller bronzing drops? | Elins val",
  description:
    "Elin jämför St.Tropez Self Tan Express och e.l.f. SKIN Bronzing Drops: hållbar tan eller flexibel, tvättbar glow.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${sommarglowUtanSolPicks[0].product.image}`,
    width: 1200,
    height: 900,
    alt: sommarglowUtanSolPicks[0].product.imageAlt,
  },
});

export default function SommarglowUtanSolPage() {
  return (
    <DecisionComparisonPage
      h1="Sommarglow utan sol - självbruna eller bronzing drops?"
      intro="Det här är två olika resultat: St.Tropez ger en riktig tan som utvecklas och håller i flera dagar, medan e.l.f. ger en glow du blandar i din egen kräm och tvättar bort."
      badges={["Håller i dagar", "Tvättbar glow", "Sommar"]}
      howToChoose="Välj St.Tropez Self Tan Express när du vill ha en hållbar brun-utan-sol inför flera dagar. Välj e.l.f. Bronzing Drops om du vill kunna dosera lystern själv, blanda i din vanliga kräm och tvätta bort resultatet."
      verdict="St.Tropez är bäst när målet är en hållbar tan. e.l.f. är bäst när målet är flexibel, tvättbar glow. Det handlar mindre om bättre eller sämre och mer om vilket resultat du faktiskt vill ha."
      picks={sommarglowUtanSolPicks}
      comparisonRows={sommarglowUtanSolComparisonRows}
      faqItems={sommarglowUtanSolFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={sommarglowUtanSolRelatedLinks}
    />
  );
}
