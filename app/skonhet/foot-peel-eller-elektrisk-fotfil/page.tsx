import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  footPeelEllerElektriskFotfilComparisonRows,
  footPeelEllerElektriskFotfilFaqItems,
  footPeelEllerElektriskFotfilPicks,
  footPeelEllerElektriskFotfilRelatedLinks,
} from "@/lib/foot-peel-eller-elektrisk-fotfil";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/foot-peel-eller-elektrisk-fotfil`;

const heroImage = {
  src: "/comparisons/foot-peel-eller-elektrisk-fotfil.webp",
  alt: "Foot peel mask eller elektrisk fotfil? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Foot peel mask eller elektrisk fotfil?", href: `/skonhet/foot-peel-eller-elektrisk-fotfil` },
];

export const metadata = createSeoMetadata({
  title: "Foot peel mask eller elektrisk fotfil? | Elins val",
  description: "Foot peel mask eller elektrisk fotfil? Elin jämför djup flagning över tid mot direkt filning så du får sandalfina fötter till sommaren.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function FootPeelEllerElektriskFotfilPage() {
  return (
    <DecisionComparisonPage
      h1={"Foot peel mask eller elektrisk fotfil?"}
      intro={"Foot peel mask och elektrisk fotfil ger båda sandalfina fötter, men jobbar helt olika. En foot peel mask får torr hud på fötterna att flagna av av sig själv under en till två veckor, medan en elektrisk fotfil filar bort hård hud direkt när du vill."}
      badges={["Sandalfina fötter","Flagnar vs filar","Sommar"]}
      howToChoose={"Välj en foot peel mask om du vill ha ett djupare resultat och inte har något emot att fötterna flagnar under en tid – planera den ett par veckor innan sommaren. Välj en elektrisk fotfil om du vill file bort hård hud direkt och underhålla lite då och då, utan flagningsperiod."}
      verdict={"Det handlar om tålamod mot direkt resultat. Foot peel mask vinner för ett djupare, jämnare resultat om du planerar i tid, medan den elektriska fotfilen vinner för snabbt, kontrollerat underhåll när du vill. Många gör en peel inför sommaren och underhåller sedan med fotfil."}
      heroImage={heroImage}
      picks={footPeelEllerElektriskFotfilPicks}
      comparisonRows={footPeelEllerElektriskFotfilComparisonRows}
      faqItems={footPeelEllerElektriskFotfilFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={footPeelEllerElektriskFotfilRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
