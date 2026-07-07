import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  mikrofiberhanddukEllerFrottehanddukComparisonRows,
  mikrofiberhanddukEllerFrottehanddukFaqItems,
  mikrofiberhanddukEllerFrottehanddukPicks,
  mikrofiberhanddukEllerFrottehanddukRelatedLinks,
} from "@/lib/mikrofiberhandduk-eller-frottehandduk";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/sommar/resa/mikrofiberhandduk-eller-frottehandduk`;

const heroImage = {
  src: "/comparisons/mikrofiberhandduk-eller-frottehandduk.webp",
  alt: "Mikrofiberhandduk eller frottéhandduk? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Resa", href: "/sommar/resa" },
  { name: "Mikrofiberhandduk eller frottéhandduk?", href: `/sommar/resa/mikrofiberhandduk-eller-frottehandduk` },
];

export const metadata = createSeoMetadata({
  title: "Mikrofiberhandduk eller frottéhandduk? Vilken välja | Elins val",
  description: "Mikrofiberhandduk eller frottéhandduk? Elin jämför packvänlig snabbtork mot mjuk, sugande bomull så du väljer rätt handduk för resan och stranden.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function MikrofiberhanddukEllerFrottehanddukPage() {
  return (
    <DecisionComparisonPage
      h1={"Mikrofiberhandduk eller frottéhandduk?"}
      intro={"Båda torkar dig efter duschen, poolen och stranden – men de gör det på helt olika sätt. En mikrofiberhandduk är tunn, ultralätt och snabbtorkande och packar ihop till nästan ingenting, medan en frottéhandduk är den mjuka, sugande bomullsklassikern som känns lyxig mot huden men tar mer plats och torkar långsammare."}
      badges={["Packvänligt vs komfort","Snabbtork vs mjukhet","Resa & strand"]}
      howToChoose={"Välj en mikrofiberhandduk om du reser lätt och vill spara plats och vikt i väskan – den torkar snabbt och är perfekt för gym, strand och backpacking. Välj en frottéhandduk om du prioriterar den mjuka, sugande komforten hemma, på hotellet eller vid poolen och inte bryr dig om att den tar mer plats. Många har en mikrofiberhandduk i resväskan och frotté hemma."}
      verdict={"Det handlar om plats mot komfort. Mikrofibern vinner om målet är att packa lätt och torka snabbt, medan frottén vinner om du vill ha den mjuka, sugande känslan. Packa lätt – mikrofiber. Mysig komfort – frotté."}
      heroImage={heroImage}
      picks={mikrofiberhanddukEllerFrottehanddukPicks}
      comparisonRows={mikrofiberhanddukEllerFrottehanddukComparisonRows}
      faqItems={mikrofiberhanddukEllerFrottehanddukFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={mikrofiberhanddukEllerFrottehanddukRelatedLinks}
      backHref={"/sommar/resa"}
      backLabel={"Tillbaka till Elins reseval"}
    />
  );
}
