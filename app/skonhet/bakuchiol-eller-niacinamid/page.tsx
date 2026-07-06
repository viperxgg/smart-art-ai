import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  bakuchiolEllerNiacinamidComparisonRows,
  bakuchiolEllerNiacinamidFaqItems,
  bakuchiolEllerNiacinamidPicks,
  bakuchiolEllerNiacinamidRelatedLinks,
} from "@/lib/bakuchiol-eller-niacinamid";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/bakuchiol-eller-niacinamid`;

const heroImage = {
  src: "/comparisons/bakuchiol-eller-niacinamid.webp",
  alt: "Bakuchiol eller niacinamid? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Bakuchiol eller niacinamid?", href: `/skonhet/bakuchiol-eller-niacinamid` },
];

export const metadata = createSeoMetadata({
  title: "Bakuchiol eller niacinamid? Vilket serum passar dig | Elins val",
  description: "Bakuchiol eller niacinamid? Elin jämför ett skonsamt, slätande alternativ mot en balanserande allrounder så du väljer rätt serum för din hud.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function BakuchiolEllerNiacinamidPage() {
  return (
    <DecisionComparisonPage
      h1={"Bakuchiol eller niacinamid?"}
      intro={"Bakuchiol och niacinamid är två milda, populära hudvårdsingredienser, men med olika fokus. Bakuchiol är känt som ett skonsamt, växtbaserat alternativ som ger huden ett slätare, jämnare intryck, medan niacinamid är en allround-favorit som hjälper huden att kännas balanserad och mindre glansig."}
      badges={["Serum","Skonsamt vs balans","Hudvård"]}
      howToChoose={"Välj bakuchiol om du vill ha en mild ingrediens som ger huden ett slätare, jämnare uttryck och gilla växtbaserat och skonsamt, även på kvällen. Välj niacinamid om du vill ha en allround-ingrediens som balanserar och lugnar, bra om huden lätt blir glansig. Båda är snälla och kan användas dagligen."}
      verdict={"Båda är milda och lätta att gilla. Bakuchiol vinner om du vill ha ett skonsamt, slätande alternativ, medan niacinamid vinner som balanserande allrounder. Vill du ha ett slätare uttryck – bakuchiol. Vill du jämna ut och matta glans – niacinamid."}
      heroImage={heroImage}
      picks={bakuchiolEllerNiacinamidPicks}
      comparisonRows={bakuchiolEllerNiacinamidComparisonRows}
      faqItems={bakuchiolEllerNiacinamidFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={bakuchiolEllerNiacinamidRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
