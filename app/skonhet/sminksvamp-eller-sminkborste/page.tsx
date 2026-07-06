import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  sminksvampEllerSminkborsteComparisonRows,
  sminksvampEllerSminkborsteFaqItems,
  sminksvampEllerSminkborstePicks,
  sminksvampEllerSminkborsteRelatedLinks,
} from "@/lib/sminksvamp-eller-sminkborste";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/sminksvamp-eller-sminkborste`;

const heroImage = {
  src: "/comparisons/sminksvamp-eller-sminkborste.webp",
  alt: "Sminksvamp eller sminkborste? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Sminksvamp eller sminkborste?", href: `/skonhet/sminksvamp-eller-sminkborste` },
];

export const metadata = createSeoMetadata({
  title: "Sminksvamp eller sminkborste? Bästa foundation-finish | Elins val",
  description: "Sminksvamp eller sminkborste? Elin jämför naturlig, hudlik finish mot snabb, jämn täckning så du väljer rätt verktyg för din foundation.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function SminksvampEllerSminkborstePage() {
  return (
    <DecisionComparisonPage
      h1={"Sminksvamp eller sminkborste?"}
      intro={"Sminksvamp och sminkborste lägger båda foundation, men ger olika finish. En fuktad sminksvamp klappar in produkten för en naturlig, hudlik finish, medan en sminkborste bygger täckning snabbt och jämnt och tar mindre produkt."}
      badges={["Foundation","Naturlig vs täckande","Makeup"]}
      howToChoose={"Välj en sminksvamp om du vill ha en naturlig, fräsch finish och gillar att klappa in produkten – bäst för en lätt, hudlik look. Välj en sminkborste om du vill bygga täckning snabbt och jämnt och slippa slösa produkt. Många använder borste för att lägga på och svamp för att klappa ut kanterna."}
      verdict={"Det handlar om finish. Sminksvampen vinner för en naturlig, hudlik look, medan sminkborsten vinner för snabb, jämn täckning med mindre produkt. Vill du ha en – välj svamp för fräsch finish och borste för täckning."}
      heroImage={heroImage}
      picks={sminksvampEllerSminkborstePicks}
      comparisonRows={sminksvampEllerSminkborsteComparisonRows}
      faqItems={sminksvampEllerSminkborsteFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={sminksvampEllerSminkborsteRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
