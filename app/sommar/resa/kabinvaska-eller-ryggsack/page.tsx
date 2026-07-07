import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  kabinvaskaEllerRyggsackComparisonRows,
  kabinvaskaEllerRyggsackFaqItems,
  kabinvaskaEllerRyggsackPicks,
  kabinvaskaEllerRyggsackRelatedLinks,
} from "@/lib/kabinvaska-eller-ryggsack";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/sommar/resa/kabinvaska-eller-ryggsack`;

const heroImage = {
  src: "/comparisons/kabinvaska-eller-ryggsack.webp",
  alt: "Kabinväska eller ryggsäck? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Resa", href: "/sommar/resa" },
  { name: "Kabinväska eller ryggsäck?", href: `/sommar/resa/kabinvaska-eller-ryggsack` },
];

export const metadata = createSeoMetadata({
  title: "Kabinväska eller ryggsäck? Vilken ska du välja | Elins val",
  description: "Kabinväska eller ryggsäck som handbagage? Elin jämför att rulla ett hårt skal mot att bära en rymlig ryggsäck så du väljer rätt för din resa.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function KabinvaskaEllerRyggsackPage() {
  return (
    <DecisionComparisonPage
      h1={"Kabinväska eller ryggsäck?"}
      intro={"Ska du rulla eller bära handbagaget? En kabinväska (hardcase) rullar smidigt på hjul, skyddar innehållet i ett hårt skal och går ofta att låsa – medan en kabinryggsäck rymmer mer, gör händerna fria och är smidigare i trappor, kullersten och trånga tåg. Båda är byggda för flygets kabinmått, men de passar olika resenärer."}
      badges={["Rulla vs bära","Hårt skal vs mer plats","Handbagage"]}
      howToChoose={"Välj kabinväskan om du vill rulla bagaget istället för att bära det, gillar hårt skal som skyddar och packar mest tröjor och toalettsaker för en weekend. Välj kabinryggsäcken om du vill ha händerna fria, rör dig mycket till fots eller i kollektivtrafik och vill kunna packa lite mer. Reser du blandat kan en lätt hardcase och en kabinryggsäck komplettera varandra."}
      verdict={"Det handlar om hur du rör dig. Väskan vinner om du vill rulla och skydda innehållet, medan ryggsäcken vinner om du vill ha händerna fria och packa mer. Rulla och skydda – kabinväska. Handsfree och rymligt – ryggsäck."}
      heroImage={heroImage}
      picks={kabinvaskaEllerRyggsackPicks}
      comparisonRows={kabinvaskaEllerRyggsackComparisonRows}
      faqItems={kabinvaskaEllerRyggsackFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={kabinvaskaEllerRyggsackRelatedLinks}
      backHref={"/sommar/resa"}
      backLabel={"Tillbaka till Elins reseval"}
    />
  );
}
