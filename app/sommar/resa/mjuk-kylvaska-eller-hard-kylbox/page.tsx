import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  mjukKylvaskaEllerHardKylboxComparisonRows,
  mjukKylvaskaEllerHardKylboxFaqItems,
  mjukKylvaskaEllerHardKylboxPicks,
  mjukKylvaskaEllerHardKylboxRelatedLinks,
} from "@/lib/mjuk-kylvaska-eller-hard-kylbox";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/sommar/resa/mjuk-kylvaska-eller-hard-kylbox`;

const heroImage = {
  src: "/comparisons/mjuk-kylvaska-eller-hard-kylbox.webp",
  alt: "Mjuk kylväska eller hård kylbox? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Resa", href: "/sommar/resa" },
  { name: "Mjuk kylväska eller hård kylbox?", href: `/sommar/resa/mjuk-kylvaska-eller-hard-kylbox` },
];

export const metadata = createSeoMetadata({
  title: "Mjuk kylväska eller hård kylbox? | Elins val",
  description: "Mjuk kylväska eller hård kylbox? Elin jämför Lifewit kylryggsäck mot Coleman Xtreme ärligt – kyltid, vikt och vilken som passar stranddagen respektive campingen.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function MjukKylvaskaEllerHardKylboxPage() {
  return (
    <DecisionComparisonPage
      h1={"Mjuk kylväska eller hård kylbox?"}
      intro={"Mjuk kylväska eller hård kylbox – båda håller maten och drycken kall, men på helt olika villkor. Kylryggsäcken bärs bekvämt till stranden och håller kylan i timmar, medan den hårda kylboxen håller kylan i dagar men väger flera kilo tom. Valet handlar om hur du tar dig dit – och hur länge du stannar."}
      badges={["Strand & picknick","Camping","Sommar"]}
      howToChoose={"Välj den mjuka kylryggsäcken om du går eller cyklar till stranden och kommer hem samma dag – den bärs bekvämt och räcker gott för en dagsutflykt. Välj den hårda kylboxen om du packar bilen för camping, festival eller långhelg – då är dagarna av kyla och den robusta konstruktionen värda vikten."}
      verdict={"Utgå från hur du transporterar packningen, vilken volym du behöver och hur länge innehållet behöver hållas kallt. Vi har inte ett jämförande kyltest som visar att någon av dessa alltid är rätt val."}
      heroImage={heroImage}
      picks={mjukKylvaskaEllerHardKylboxPicks}
      comparisonRows={mjukKylvaskaEllerHardKylboxComparisonRows}
      faqItems={mjukKylvaskaEllerHardKylboxFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={mjukKylvaskaEllerHardKylboxRelatedLinks}
      backHref={"/sommar/resa"}
      backLabel={"Tillbaka till Elins reseval"}
    />
  );
}
