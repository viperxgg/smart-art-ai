import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  gjutjarnEllerMjukKettlebellComparisonRows,
  gjutjarnEllerMjukKettlebellFaqItems,
  gjutjarnEllerMjukKettlebellPicks,
  gjutjarnEllerMjukKettlebellRelatedLinks,
} from "@/lib/gjutjarn-eller-mjuk-kettlebell";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/gjutjarn-eller-mjuk-kettlebell`;

const heroImage = {
  src: "/comparisons/gjutjarn-eller-mjuk-kettlebell.webp",
  alt: "Gjutjärns- eller mjuk kettlebell? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Gjutjärns- eller mjuk kettlebell?", href: `/traning/gjutjarn-eller-mjuk-kettlebell` },
];

export const metadata = createSeoMetadata({
  title: "Gjutjärns- eller mjuk kettlebell? Rätt för ditt hem | Elins val",
  description: "Gjutjärns- eller mjuk kettlebell? Elin jämför klassisk järnkänsla mot golvvänlig sandfyllning – så väljer du rätt när hemmaträningen startar i höst.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function GjutjarnEllerMjukKettlebellPage() {
  return (
    <DecisionComparisonPage
      h1={"Gjutjärns- eller mjuk kettlebell?"}
      intro={"När hemmaträningen drar igång igen i höst är kettlebellen det enklaste sättet att få med både styrka och flås – men vilken sort? Den klassiska i gjutjärn ger äkta järnkänsla och tål allt, medan den mjuka med sandfyllning är snäll mot golv, tår och grannar. Elin jämför så att du köper rätt för ditt hem."}
      badges={["Hemmaträning","Järn vs mjuk","Kom igång i höst"]}
      howToChoose={"Utgå från golvet och grannarna. Tränar du i källare, garage eller på träningsmatta och vill ha den täta, klassiska järnkänslan med målat grepp – välj gjutjärn. Tränar du i lägenhet på parkett, med barn och tår i närheten eller tidiga morgonpass – välj den mjuka: sätter du ner den hårt hörs det knappt, och golvet klarar sig. Själva övningarna – svingar, goblet squats, rodd – funkar lika bra med båda."}
      verdict={"Elin väljer gjutjärn som förstahandsval: mest kettlebell för pengarna, beprövad och tål år av svingar. Men i lägenhet med känsligt golv vinner den mjuka på ren vardagslogik – den gör att passen faktiskt blir av när du inte behöver oroa dig för märken i parketten. Rätt svar sitter i ditt golv, inte i vikten."}
      heroImage={heroImage}
      picks={gjutjarnEllerMjukKettlebellPicks}
      comparisonRows={gjutjarnEllerMjukKettlebellComparisonRows}
      faqItems={gjutjarnEllerMjukKettlebellFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={gjutjarnEllerMjukKettlebellRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
