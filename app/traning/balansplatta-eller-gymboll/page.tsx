import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  balansplattaEllerGymbollComparisonRows,
  balansplattaEllerGymbollFaqItems,
  balansplattaEllerGymbollPicks,
  balansplattaEllerGymbollRelatedLinks,
} from "@/lib/balansplatta-eller-gymboll";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/balansplatta-eller-gymboll`;

const heroImage = {
  src: "/comparisons/balansplatta-eller-gymboll.webp",
  alt: "Balansplatta eller gymboll? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Balansplatta eller gymboll?", href: `/traning/balansplatta-eller-gymboll` },
];

export const metadata = createSeoMetadata({
  title: "Balansplatta eller gymboll? Bäst för balans och bål | Elins val",
  description: "Balansplatta eller gymboll? Elin jämför fokuserad balansträning mot mångsidig bål- och stabilitetsträning så du väljer rätt för hemmaträningen.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function BalansplattaEllerGymbollPage() {
  return (
    <DecisionComparisonPage
      h1={"Balansplatta eller gymboll?"}
      intro={"Balansplatta och gymboll tränar båda balans och bål, men på olika sätt. En balansplatta är liten och utmanar balansen med små, kontrollerade rörelser, medan en gymboll är stor och används för fler övningar för bål, rygg och stabilitet – och som sittboll."}
      badges={["Balans & bål","Kompakt vs mångsidig","Stabilitet"]}
      howToChoose={"Välj en balansplatta om du vill träna balans och fotled på liten yta med kontrollerade rörelser, bra som komplement och för rehab. Välj en gymboll om du vill ha ett mångsidigt redskap för bål, rygg och stabilitet, och gilla att kunna sitta på den vid skrivbordet. Balansplatta för fokuserad balans, gymboll för fler övningar."}
      verdict={"Det handlar om fokus mot mångsidighet. Balansplattan vinner för fokuserad balansträning på liten yta, medan gymbollen vinner för fler bål- och stabilitetsövningar. Fokuserad balans – platta. Mångsidigt – gymboll."}
      heroImage={heroImage}
      picks={balansplattaEllerGymbollPicks}
      comparisonRows={balansplattaEllerGymbollComparisonRows}
      faqItems={balansplattaEllerGymbollFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={balansplattaEllerGymbollRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
