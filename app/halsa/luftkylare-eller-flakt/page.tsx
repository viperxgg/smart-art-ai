import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  luftkylareEllerFlaktComparisonRows,
  luftkylareEllerFlaktFaqItems,
  luftkylareEllerFlaktPicks,
  luftkylareEllerFlaktRelatedLinks,
} from "@/lib/luftkylare-eller-flakt";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/luftkylare-eller-flakt`;

const heroImage = {
  src: "/comparisons/luftkylare-eller-flakt.webp",
  alt: "Luftkylare eller fläkt? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Luftkylare eller fläkt?", href: `/halsa/luftkylare-eller-flakt` },
];

export const metadata = createSeoMetadata({
  title: "Luftkylare eller fläkt? Vilken svalka ska du välja | Elins val",
  description: "Luftkylare eller fläkt? Elin jämför en enkel luftström mot en fuktad, sval bris så du väljer rätt personlig svalka för sommarvärmen.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function LuftkylareEllerFlaktPage() {
  return (
    <DecisionComparisonPage
      h1={"Luftkylare eller fläkt?"}
      intro={"Luftkylare och fläkt svalkar båda under varma dagar, men på lite olika sätt. En fläkt rör luften så det känns svalare, medan en liten luftkylare drar luft genom vatten för en extra sval, fuktad bris precis framför dig."}
      badges={["Svalka","Bris vs fuktad kyla","Sommar"]}
      howToChoose={"Välj en fläkt om du vill ha en enkel, stark luftström som rör om luften i rummet eller riktas mot dig. Välj en liten luftkylare om du vill ha en extra sval, fuktad bris precis framför dig vid skrivbordet – men ha rätt förväntningar, det är en personlig modell, inte en AC. Båda är personliga svalkalösningar snarare än rumskylare."}
      verdict={"Det handlar om vilken känsla du vill ha. Fläkten vinner för en enkel, stark luftström och är oftast billigare, medan den lilla luftkylaren ger en extra sval, fuktad bris på nära håll. Ingen av dem kyler ett helt rum som en AC – båda är personlig svalka."}
      heroImage={heroImage}
      picks={luftkylareEllerFlaktPicks}
      comparisonRows={luftkylareEllerFlaktComparisonRows}
      faqItems={luftkylareEllerFlaktFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={luftkylareEllerFlaktRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
