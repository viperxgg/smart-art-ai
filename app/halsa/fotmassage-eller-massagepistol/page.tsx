import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  fotmassageEllerMassagepistolComparisonRows,
  fotmassageEllerMassagepistolFaqItems,
  fotmassageEllerMassagepistolPicks,
  fotmassageEllerMassagepistolRelatedLinks,
} from "@/lib/fotmassage-eller-massagepistol";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/fotmassage-eller-massagepistol`;

const heroImage = {
  src: "/comparisons/fotmassage-eller-massagepistol.webp",
  alt: "Fotmassage eller massagepistol? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Fotmassage eller massagepistol?", href: `/halsa/fotmassage-eller-massagepistol` },
];

export const metadata = createSeoMetadata({
  title: "Fotmassage eller massagepistol? Så väljer du | Elins val",
  description: "Trötta fötter eller spända muskler? Elin jämför Beurer FM 90 shiatsu-fotmassage med massagepistolen MG 99 – njutning på autopilot mot verktyg du styr själv. (Annons)",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function FotmassageEllerMassagepistolPage() {
  return (
    <DecisionComparisonPage
      h1={"Fotmassage eller massagepistol?"}
      intro={"Mörka kvällar och mer tid inomhus gör återhämtning hemma till en riktig fråga: ska du satsa på en shiatsu-fotmassage som du bara sätter fötterna i, eller en massagepistol som du styr själv över hela kroppen? Elin jämför Beurers två populära val – FM 90 för fötterna och MG 99 för musklerna – så du väljer efter hur din trötthet faktiskt känns."}
      badges={["Återhämtning","Mysiga kvällar","Beurer mot Beurer"]}
      howToChoose={"Välj fotmassagen om det är fötterna som bär tröttheten – långa arbetsdagar på benen, kalla fötter på kvällen och en önskan om ren avkoppling utan ansträngning: sätt i fötterna, tryck på knappen, klart. Välj massagepistolen om du vill komma åt specifika muskler själv – vader, lår, axlar och rygg efter träning eller stillasittande – och vill kunna variera tryck och tempo. Fotmassagen är njutning på autopilot, pistolen är ett verktyg du riktar."}
      verdict={"Olika sorters trötthet, olika val. FM 90 vinner kvällsmyset – den kräver ingenting av dig och gör fotkvällen till en ritual. MG 99 är mångsidigare och följer med till hela kroppen, men du gör jobbet själv. Tränar du regelbundet: pistolen. Vill du bara landa i soffan: fotmassagen."}
      heroImage={heroImage}
      picks={fotmassageEllerMassagepistolPicks}
      comparisonRows={fotmassageEllerMassagepistolComparisonRows}
      faqItems={fotmassageEllerMassagepistolFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={fotmassageEllerMassagepistolRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
