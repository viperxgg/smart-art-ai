import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  lappmaskEllerLappoljaComparisonRows,
  lappmaskEllerLappoljaFaqItems,
  lappmaskEllerLappoljaPicks,
  lappmaskEllerLappoljaRelatedLinks,
} from "@/lib/lappmask-eller-lappolja";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/lappmask-eller-lappolja`;

const heroImage = {
  src: "/comparisons/lappmask-eller-lappolja.webp",
  alt: "Läppmask eller läppolja? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Läppmask eller läppolja?", href: `/skonhet/lappmask-eller-lappolja` },
];

export const metadata = createSeoMetadata({
  title: "Läppmask eller läppolja? Bäst för läpparna | Elins val",
  description: "Läppmask eller läppolja? Elin jämför djup nattvård mot glansig dagvård så du väljer rätt för mjuka, fina läppar.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function LappmaskEllerLappoljaPage() {
  return (
    <DecisionComparisonPage
      h1={"Läppmask eller läppolja?"}
      intro={"Läppmask och läppolja vårdar båda torra läppar, men vid olika tillfällen. En läppmask är en tjock nattbehandling som återfuktar medan du sover, medan en läppolja är en lätt, glansig vård du bär på dagen och som ofta ger en fin lyster."}
      badges={["Läppvård","Natt vs dag","Glow"]}
      howToChoose={"Välj en läppmask om dina läppar ofta känns torra och du vill ha en djup nattbehandling som gör dem mjuka till morgonen. Välj en läppolja om du vill ha en lätt, glansig vård med lyster som du bär hela dagen, gärna ovanpå läppstift eller för sig själv. Många har en läppmask på natten och en läppolja på dagen."}
      verdict={"De kompletterar varandra. Läppmasken vinner för djup återfuktning över natten, medan läppoljan vinner för daglig glans och lyster. Vill du ha en – välj läppmask för torra läppar och läppolja för glow."}
      heroImage={heroImage}
      picks={lappmaskEllerLappoljaPicks}
      comparisonRows={lappmaskEllerLappoljaComparisonRows}
      faqItems={lappmaskEllerLappoljaFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={lappmaskEllerLappoljaRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
