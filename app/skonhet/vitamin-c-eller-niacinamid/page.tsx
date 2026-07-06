import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  vitaminCEllerNiacinamidComparisonRows,
  vitaminCEllerNiacinamidFaqItems,
  vitaminCEllerNiacinamidPicks,
  vitaminCEllerNiacinamidRelatedLinks,
} from "@/lib/vitamin-c-eller-niacinamid";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/vitamin-c-eller-niacinamid`;

const heroImage = {
  src: "/comparisons/vitamin-c-eller-niacinamid.webp",
  alt: "Vitamin C eller niacinamid? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Vitamin C eller niacinamid?", href: `/skonhet/vitamin-c-eller-niacinamid` },
];

export const metadata = createSeoMetadata({
  title: "Vitamin C eller niacinamid? Vilket serum först | Elins val",
  description: "Vitamin C eller niacinamid? Elin jämför lyster mot balans så du väljer rätt serum för din hud – och hur du kan använda båda.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function VitaminCEllerNiacinamidPage() {
  return (
    <DecisionComparisonPage
      h1={"Vitamin C eller niacinamid?"}
      intro={"Vitamin C och niacinamid är två av de mest populära serumingredienserna, men de gör olika saker för huden. Vitamin C är känt för att ge lyster och en piggare hudton, medan niacinamid är mer allround och uppskattas för att jämna ut och lugna huden."}
      badges={["Serum","Lyster vs balans","Hudvård"]}
      howToChoose={"Välj ett vitamin C-serum om du främst vill ha mer lyster och en piggare, jämnare hudton – skönt att använda på morgonen. Välj ett niacinamid-serum om du vill ha en mildare allrounder som hjälper huden att kännas balanserad och mindre glansig. Många använder faktiskt båda vid olika tider på dygnet."}
      verdict={"De konkurrerar inte, de kompletterar. Vitamin C vinner om ditt mål är lyster och glow, medan niacinamid vinner om du vill ha en mild, balanserande allrounder. Ska du börja med ett – välj efter om du mest vill ha glow eller lugnare, jämnare hud."}
      heroImage={heroImage}
      picks={vitaminCEllerNiacinamidPicks}
      comparisonRows={vitaminCEllerNiacinamidComparisonRows}
      faqItems={vitaminCEllerNiacinamidFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={vitaminCEllerNiacinamidRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
