import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  hangandeEllerGenomskinligNecessarComparisonRows,
  hangandeEllerGenomskinligNecessarFaqItems,
  hangandeEllerGenomskinligNecessarPicks,
  hangandeEllerGenomskinligNecessarRelatedLinks,
} from "@/lib/hangande-necessar-eller-genomskinlig-necessar";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/sommar/resa/hangande-necessar-eller-genomskinlig-necessar`;

const heroImage = {
  src: "/comparisons/hangande-necessar-eller-genomskinlig-necessar.webp",
  alt: "Hängande necessär eller genomskinlig necessär? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Resa", href: "/sommar/resa" },
  { name: "Hängande necessär eller genomskinlig necessär?", href: `/sommar/resa/hangande-necessar-eller-genomskinlig-necessar` },
];

export const metadata = createSeoMetadata({
  title: "Hängande eller genomskinlig necessär? | Elins val",
  description: "Hängande necessär eller genomskinlig necessär? Elin jämför ordning på hotellbadrummet mot smidighet i säkerhetskontrollen så du packar necessären smart.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function HangandeEllerGenomskinligNecessarPage() {
  return (
    <DecisionComparisonPage
      h1={"Hängande necessär eller genomskinlig necessär?"}
      intro={"Hängande och genomskinlig necessär håller båda ordning på toalettsakerna på resan, men löser olika saker. Den hängande necessären hänger du på en krok och når allt utan att rota, medan den genomskinliga necessären låter dig se innehållet direkt – smidigt i säkerhetskontrollen."}
      badges={["Ordning på resan","Hänga vs se igenom","Resa"]}
      howToChoose={"Välj en hängande necessär om du vill ha maximal ordning på hotellbadrummet – häng upp den och nå allt utan att lägga ut sakerna på en trång yta. Välj en genomskinlig necessär om du vill se innehållet direkt och ha en smidig necessär att plocka fram i säkerhetskontrollen. Många reser med en hängande necessär för det mesta och en liten genomskinlig för vätskorna."}
      verdict={"De kompletterar varandra. Den hängande necessären vinner på ordning och överblick på plats, medan den genomskinliga necessären är smartast för säkerhetskontrollen och för att snabbt hitta smått. Kolla alltid flygplatsens aktuella regler för vätskor i handbagage."}
      heroImage={heroImage}
      picks={hangandeEllerGenomskinligNecessarPicks}
      comparisonRows={hangandeEllerGenomskinligNecessarComparisonRows}
      faqItems={hangandeEllerGenomskinligNecessarFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={hangandeEllerGenomskinligNecessarRelatedLinks}
      backHref={"/sommar/resa"}
      backLabel={"Tillbaka till Elins reseval"}
    />
  );
}
