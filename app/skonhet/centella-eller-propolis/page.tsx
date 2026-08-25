import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  centellaEllerPropolisComparisonRows,
  centellaEllerPropolisFaqItems,
  centellaEllerPropolisPicks,
  centellaEllerPropolisRelatedLinks,
} from "@/lib/centella-eller-propolis";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/centella-eller-propolis`;

const heroImage = {
  src: "/comparisons/centella-eller-propolis.webp",
  alt: "Centella eller propolis? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Centella eller propolis?", href: `/skonhet/centella-eller-propolis` },
];

export const metadata = createSeoMetadata({
  title: "Centella eller propolis? Rätt serum för känslig hy | Elins val",
  description: "Två lugnande K-beauty-favoriter jämförda: COSRX centella-ampoule mot Beauty of Joseons propolis-serum – vilken din känsliga hösthy behöver. (Annons)",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function CentellaEllerPropolisPage() {
  return (
    <DecisionComparisonPage
      h1={"Centella eller propolis?"}
      intro={"Två av K-beautys mest älskade lugnande ingredienser – men de gör lite olika saker för huden. Centella (cica) är den klassiska lugnaren för känslig och stressad hy, medan propolis kombinerar det milda med en varm glow. När höstkylan och elementvärmen börjar reta huden är det här valet många står inför. Elin reder ut vilket serum som passar din hud."}
      badges={["K-beauty","Känslig hy","Lugn & glow"]}
      howToChoose={"Välj centella om din hud lätt blir röd, stram eller irriterad och du vill ha ett så milt och avskalat lugnande steg som möjligt – COSRX ampoule är lätt, vattnig och enkel att lägga under vilken kräm som helst. Välj propolis om huden mest känns trött och glåmig och du vill ha lugnande vård som samtidigt ger lyster – Beauty of Joseons serum har en mjukare, lite tjockare känsla och niacinamide som hjälper hudtonen se jämnare ut. Båda är milda nog för daglig användning."}
      verdict={"Två trygga K-beauty-val som löser olika problem. Centella-ampoulen är förstahandsvalet för reaktiv, lättirriterad hy som behöver lugn och ro. Propolis-serumet vinner när du vill ha både det milda och en varm glow i samma steg. Osäker? Utgå från huden i spegeln: röd och stressad – centella; trött och matt – propolis."}
      heroImage={heroImage}
      picks={centellaEllerPropolisPicks}
      comparisonRows={centellaEllerPropolisComparisonRows}
      faqItems={centellaEllerPropolisFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={centellaEllerPropolisRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
