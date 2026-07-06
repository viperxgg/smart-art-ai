import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  studsmattaEllerHopprepComparisonRows,
  studsmattaEllerHopprepFaqItems,
  studsmattaEllerHopprepPicks,
  studsmattaEllerHopprepRelatedLinks,
} from "@/lib/studsmatta-eller-hopprep";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/studsmatta-eller-hopprep`;

const heroImage = {
  src: "/comparisons/studsmatta-eller-hopprep.webp",
  alt: "Studsmatta eller hopprep? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Studsmatta eller hopprep?", href: `/traning/studsmatta-eller-hopprep` },
];

export const metadata = createSeoMetadata({
  title: "Studsmatta eller hopprep? Bäst kondition hemma | Elins val",
  description: "Studsmatta eller hopprep? Elin jämför skonsam, kul studsträning mot billig, platssnål hoppträning så du väljer rätt för kondition hemma.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function StudsmattaEllerHopprepPage() {
  return (
    <DecisionComparisonPage
      h1={"Studsmatta eller hopprep?"}
      intro={"Studsmatta och hopprep ger båda pulshöjande konditionsträning hemma, men känns olika. En liten fitness-studsmatta är skonsam mot lederna och kul att studsa på, medan ett hopprep är billigt, tar ingen plats och ger snabbt hög puls."}
      badges={["Kondition hemma","Skonsamt vs effektivt","Kul"]}
      howToChoose={"Välj en studsmatta om du vill ha skonsam, ledvänlig kondition och gilla att det känns lekfullt – skönt för knän och rygg. Välj ett hopprep om du vill ha maximal effekt på minimal yta och budget, och inte har något emot lite mer stöt i varje hopp. Studsmatta för skonsamt och kul, hopprep för snabbt och platssnålt."}
      verdict={"Båda höjer pulsen hemma. Studsmattan vinner för skonsam, ledvänlig och rolig träning, medan hopprepet vinner för pris, plats och ren effektivitet. Har du ont om plats eller pengar – hopprep. Vill du skona lederna och ha kul – studsmatta."}
      heroImage={heroImage}
      picks={studsmattaEllerHopprepPicks}
      comparisonRows={studsmattaEllerHopprepComparisonRows}
      faqItems={studsmattaEllerHopprepFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={studsmattaEllerHopprepRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
