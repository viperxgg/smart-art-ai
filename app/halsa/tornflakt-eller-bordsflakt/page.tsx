import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  tornflaktEllerBordsflaktComparisonRows,
  tornflaktEllerBordsflaktFaqItems,
  tornflaktEllerBordsflaktPicks,
  tornflaktEllerBordsflaktRelatedLinks,
} from "@/lib/tornflakt-eller-bordsflakt";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/tornflakt-eller-bordsflakt`;

const heroImage = {
  src: "/comparisons/tornflakt-eller-bordsflakt.webp",
  alt: "Tornfläkt eller bordsfläkt? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Tornfläkt eller bordsfläkt?", href: `/halsa/tornflakt-eller-bordsflakt` },
];

export const metadata = createSeoMetadata({
  title: "Tornfläkt eller bordsfläkt? Vilken fläkt ska du välja | Elins val",
  description: "Tornfläkt eller bordsfläkt? Elin jämför svalka för hela rummet mot riktad punktkyla så du väljer rätt fläkt för sovrummet eller skrivbordet.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function TornflaktEllerBordsflaktPage() {
  return (
    <DecisionComparisonPage
      h1={"Tornfläkt eller bordsfläkt?"}
      intro={"Tornfläkt och bordsfläkt svalkar båda under varma dagar, men på olika sätt. En tornfläkt är hög och smal, oscillerar och sprider luften brett över rummet, medan en bordsfläkt är liten, riktad och ger sval luft precis där du sitter."}
      badges={["Svalka","Hela rummet vs punktkyla","Sommar"]}
      howToChoose={"Välj en tornfläkt om du vill svalka ett helt sovrum eller vardagsrum och gillar att luften sprids brett, ofta med tystare gång. Välj en bordsfläkt om du mest vill ha sval luft riktad mot dig själv vid skrivbordet eller sängen, i ett litet format som är lätt att flytta."}
      verdict={"Det handlar om hur du vill bli sval. Tornfläkten vinner för att svalka hela rummet och för en snyggare, mer diskret placering, medan bordsfläkten är smidigast och billigast för riktad svalka precis där du sitter."}
      heroImage={heroImage}
      picks={tornflaktEllerBordsflaktPicks}
      comparisonRows={tornflaktEllerBordsflaktComparisonRows}
      faqItems={tornflaktEllerBordsflaktFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={tornflaktEllerBordsflaktRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
