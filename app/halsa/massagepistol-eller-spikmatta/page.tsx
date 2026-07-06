import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  massagepistolEllerSpikmattaComparisonRows,
  massagepistolEllerSpikmattaFaqItems,
  massagepistolEllerSpikmattaPicks,
  massagepistolEllerSpikmattaRelatedLinks,
} from "@/lib/massagepistol-eller-spikmatta";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/massagepistol-eller-spikmatta`;

const heroImage = {
  src: "/comparisons/massagepistol-eller-spikmatta.webp",
  alt: "Massagepistol eller spikmatta? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Massagepistol eller spikmatta?", href: `/halsa/massagepistol-eller-spikmatta` },
];

export const metadata = createSeoMetadata({
  title: "Massagepistol eller spikmatta? Bäst återhämtning | Elins val",
  description: "Massagepistol eller spikmatta? Elin jämför aktiv muskelbearbetning mot passiv avslappning så du väljer rätt för återhämtning och nedvarvning.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function MassagepistolEllerSpikmattaPage() {
  return (
    <DecisionComparisonPage
      h1={"Massagepistol eller spikmatta?"}
      intro={"Massagepistol och spikmatta används båda för återhämtning och avslappning, men på olika sätt. En massagepistol ger riktad, aktiv bearbetning av spända muskler, medan en spikmatta är passiv – du ligger på den och låter trycket från spikarna slappna av kroppen."}
      badges={["Återhämtning","Aktiv vs passiv","Avslappning"]}
      howToChoose={"Välj en massagepistol om du vill bearbeta spända muskler riktat efter träning eller en lång dag, och gilla att styra själv var och hur mycket. Välj en spikmatta om du vill slappna av passivt – lägg dig ner, andas och låt kroppen mjukna – och vill ha ett lugnt kvällsritual. Många har nytta av båda för olika stunder."}
      verdict={"De fyller olika behov. Massagepistolen vinner för riktad muskelbearbetning efter träning, medan spikmattan vinner för passiv avslappning och nedvarvning på kvällen. Vill du ha en – välj efter om du helst är aktiv eller vill bara ligga ner och koppla av."}
      heroImage={heroImage}
      picks={massagepistolEllerSpikmattaPicks}
      comparisonRows={massagepistolEllerSpikmattaComparisonRows}
      faqItems={massagepistolEllerSpikmattaFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={massagepistolEllerSpikmattaRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
