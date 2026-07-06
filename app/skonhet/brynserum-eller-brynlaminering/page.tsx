import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  brynserumEllerBrynlamineringComparisonRows,
  brynserumEllerBrynlamineringFaqItems,
  brynserumEllerBrynlamineringPicks,
  brynserumEllerBrynlamineringRelatedLinks,
} from "@/lib/brynserum-eller-brynlaminering";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/brynserum-eller-brynlaminering`;

const heroImage = {
  src: "/comparisons/brynserum-eller-brynlaminering.webp",
  alt: "Brynserum eller brynlaminering? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Brynserum eller brynlaminering?", href: `/skonhet/brynserum-eller-brynlaminering` },
];

export const metadata = createSeoMetadata({
  title: "Brynserum eller brynlaminering? Fylligare bryn | Elins val",
  description: "Brynserum eller brynlaminering hemma? Elin jämför en daglig rutin mot en fyllig, uppborstad look direkt så du väljer rätt för dina bryn.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function BrynserumEllerBrynlamineringPage() {
  return (
    <DecisionComparisonPage
      h1={"Brynserum eller brynlaminering?"}
      intro={"Brynserum och brynlaminering ger båda fylligare bryn, men på olika sätt och tidsskala. Ett brynserum används dagligen för att med tiden ge intrycket av tätare, fylligare bryn, medan brynlaminering hemma sätter och borstar upp håren för en fyllig, uppborstad look direkt som håller i veckor."}
      badges={["Fylligare bryn","Långsiktigt vs direkt","Bryn"]}
      howToChoose={"Välj ett brynserum om du vill jobba långsiktigt och gilla en enkel daglig rutin – du stryker på och låter tiden göra jobbet. Välj brynlaminering hemma om du vill ha en fyllig, uppborstad bryn-look direkt som håller i veckor, och inte har något emot ett par steg med kit. Många använder serum dagligen och laminering då och då."}
      verdict={"Det handlar om direkt look mot långsiktigt uttryck. Brynserumet vinner för en enkel daglig rutin, medan brynlamineringen vinner för en fyllig, uppborstad effekt direkt. Vill du ha båda: serum i vardagen och laminering inför tillfällen."}
      heroImage={heroImage}
      picks={brynserumEllerBrynlamineringPicks}
      comparisonRows={brynserumEllerBrynlamineringComparisonRows}
      faqItems={brynserumEllerBrynlamineringFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={brynserumEllerBrynlamineringRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
