import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  pressOnEllerGelnaglarComparisonRows,
  pressOnEllerGelnaglarFaqItems,
  pressOnEllerGelnaglarPicks,
  pressOnEllerGelnaglarRelatedLinks,
} from "@/lib/press-on-eller-gelnaglar";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/press-on-eller-gelnaglar`;

const heroImage = {
  src: "/comparisons/press-on-eller-gelnaglar.webp",
  alt: "Press-on naglar eller gelnaglar hemma? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Press-on naglar eller gelnaglar hemma?", href: `/skonhet/press-on-eller-gelnaglar` },
];

export const metadata = createSeoMetadata({
  title: "Press-on naglar eller gelnaglar hemma? | Elins val",
  description: "Press-on naglar eller gelnaglar hemma? Elin jämför snabb manikyr på minuter mot hållbara gelnaglar i veckor så du väljer rätt för dina naglar.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function PressOnEllerGelnaglarPage() {
  return (
    <DecisionComparisonPage
      h1={"Press-on naglar eller gelnaglar hemma?"}
      intro={"Press-on naglar och gelnaglar hemma ger båda en fin manikyr utan salong, men på olika sätt. Press-on naglar trycker du bara fast på några minuter och tar av när du vill, medan gelnaglar med UV/LED-lampa håller i veckor men tar längre tid att göra."}
      badges={["Naglar hemma","Snabbt vs hållbart","Ung"]}
      howToChoose={"Välj press-on naglar om du vill ha en snygg manikyr på några minuter inför en kväll eller helg, och gilla att kunna byta färg ofta. Välj gelnaglar hemma om du vill att manikyren ska hålla i veckor och inte har något emot att lägga lite mer tid med baslack, färg och lampa."}
      verdict={"Det handlar om tid mot hållbarhet. Press-on vinner för snabbhet och flexibilitet – perfekt när du vill fixa naglarna sista minuten. Gelnaglar hemma vinner om du vill ha en manikyr som håller i veckor och är beredd att lägga tiden."}
      heroImage={heroImage}
      picks={pressOnEllerGelnaglarPicks}
      comparisonRows={pressOnEllerGelnaglarComparisonRows}
      faqItems={pressOnEllerGelnaglarFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={pressOnEllerGelnaglarRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
