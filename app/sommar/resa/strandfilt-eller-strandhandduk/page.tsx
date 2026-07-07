import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  strandfiltEllerStrandhanddukComparisonRows,
  strandfiltEllerStrandhanddukFaqItems,
  strandfiltEllerStrandhanddukPicks,
  strandfiltEllerStrandhanddukRelatedLinks,
} from "@/lib/strandfilt-eller-strandhandduk";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/sommar/resa/strandfilt-eller-strandhandduk`;

const heroImage = {
  src: "/comparisons/strandfilt-eller-strandhandduk.webp",
  alt: "Strandfilt eller strandhandduk? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Resa", href: "/sommar/resa" },
  { name: "Strandfilt eller strandhandduk?", href: `/sommar/resa/strandfilt-eller-strandhandduk` },
];

export const metadata = createSeoMetadata({
  title: "Strandfilt eller strandhandduk? Vad ta med | Elins val",
  description: "Strandfilt eller strandhandduk? Elin jämför en sandfri sittyta för sällskapet mot en mjuk handduk att torka sig med – så du packar rätt för stranden.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function StrandfiltEllerStrandhanddukPage() {
  return (
    <DecisionComparisonPage
      h1={"Strandfilt eller strandhandduk?"}
      intro={"Ska du ta med en sandfri strandfilt eller räcker en vanlig strandhandduk? En stor strandfilt ger en rymlig, sandfri bas att sitta och ligga på för hela sällskapet, medan en frottéhandduk är personlig, mjuk att svepa in sig i och den du ändå torkar dig med efter badet. De löser olika saker på stranden."}
      badges={["Sittplats vs torkning","Sandfri bas vs komfort","Strand & bad"]}
      howToChoose={"Välj strandfilten om du vill ha en stor, sandfri yta att sitta och ligga på tillsammans – perfekt för familjen och picknick. Välj strandhandduken om du framför allt vill torka dig och ha något mjukt och personligt att svepa om dig. De flesta har faktiskt nytta av båda: filten som bas på sanden och handduken till att torka sig."}
      verdict={"De gör olika jobb. Strandfilten vinner som sandfri sittyta för sällskapet, medan strandhandduken vinner till att torka sig och svepa in sig. Bas på sanden – strandfilt. Torka och mysa – strandhandduk."}
      heroImage={heroImage}
      picks={strandfiltEllerStrandhanddukPicks}
      comparisonRows={strandfiltEllerStrandhanddukComparisonRows}
      faqItems={strandfiltEllerStrandhanddukFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={strandfiltEllerStrandhanddukRelatedLinks}
      backHref={"/sommar/resa"}
      backLabel={"Tillbaka till Elins reseval"}
    />
  );
}
