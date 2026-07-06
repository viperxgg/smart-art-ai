import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  heatlessLockarEllerLocktangComparisonRows,
  heatlessLockarEllerLocktangFaqItems,
  heatlessLockarEllerLocktangPicks,
  heatlessLockarEllerLocktangRelatedLinks,
} from "@/lib/heatless-lockar-eller-locktang";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/heatless-lockar-eller-locktang`;

const heroImage = {
  src: "/comparisons/heatless-lockar-eller-locktang.webp",
  alt: "Heatless lockar eller locktång? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Heatless lockar eller locktång?", href: `/skonhet/heatless-lockar-eller-locktang` },
];

export const metadata = createSeoMetadata({
  title: "Heatless lockar eller locktång? Skonsamt eller snabbt | Elins val",
  description: "Heatless lockar eller locktång? Elin jämför lockar utan värme mot snabba lockar med värme så du väljer rätt för håret och tempot.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function HeatlessLockarEllerLocktangPage() {
  return (
    <DecisionComparisonPage
      h1={"Heatless lockar eller locktång?"}
      intro={"Heatless lockar och locktång ger båda fina lockar, men på motsatt sätt. Ett heatless curl-set formar lockarna helt utan värme – du sätter upp håret och sover eller väntar – medan en locktång ger snygga lockar på minuter med värme, men sliter mer på håret."}
      badges={["Lockar","Utan värme vs snabbt","Ung"]}
      howToChoose={"Välj heatless lockar om du vill vara snäll mot håret och gilla att slippa värme – perfekt att sätta upp på kvällen och vakna med mjuka vågor. Välj en locktång om du vill ha lockar snabbt när det är bråttom och gilla att kunna styra formen exakt. Många använder heatless i vardagen och locktången när det ska gå fort."}
      verdict={"Det handlar om håret mot tiden. Heatless lockar vinner för att de är skonsamma och kräver ingen värme, medan locktången vinner för snabbhet och kontroll. Vill du skona håret – heatless. Vill du ha lockar på minuter – locktång."}
      heroImage={heroImage}
      picks={heatlessLockarEllerLocktangPicks}
      comparisonRows={heatlessLockarEllerLocktangComparisonRows}
      faqItems={heatlessLockarEllerLocktangFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={heatlessLockarEllerLocktangRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
