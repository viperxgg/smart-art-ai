import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  tangleTeezerEllerHarborsteComparisonRows,
  tangleTeezerEllerHarborsteFaqItems,
  tangleTeezerEllerHarborstePicks,
  tangleTeezerEllerHarborsteRelatedLinks,
} from "@/lib/tangle-teezer-eller-harborste";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/tangle-teezer-eller-harborste`;

const heroImage = {
  src: "/comparisons/tangle-teezer-eller-harborste.webp",
  alt: "Tangle Teezer eller vanlig hårborste? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Tangle Teezer eller vanlig hårborste?", href: `/skonhet/tangle-teezer-eller-harborste` },
];

export const metadata = createSeoMetadata({
  title: "Tangle Teezer eller vanlig hårborste? | Elins val",
  description: "Tangle Teezer eller Wet Brush? Elin jämför två skonsamma detangling-borstar så du väljer rätt för att reda ut tovor utan att slita på håret.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function TangleTeezerEllerHarborstePage() {
  return (
    <DecisionComparisonPage
      h1={"Tangle Teezer eller vanlig hårborste?"}
      intro={"Tangle Teezer och en vanlig detangling-borste reder båda ut tovor, men känns lite olika. Tangle Teezer har korta, flexibla borst i olika längder som glider genom trassel, medan en Wet Brush har mjuka, fjädrande borst som är extra snälla mot blött hår."}
      badges={["Håret","Reder ut tovor","Vardag"]}
      howToChoose={"Välj en Tangle Teezer om du vill ha en kompakt borste som effektivt glider genom tovor på både torrt och fuktigt hår. Välj en Wet Brush om du främst borstar blött hår och vill ha extra mjuka, fjädrande borst som ger mindre drag. Båda är snällare mot håret än en vanlig hård borste."}
      verdict={"Båda är sköna uppgraderingar från en hård borste. Tangle Teezer vinner på den kompakta formen och hur den glider genom trassel, medan Wet Brush vinner för blött hår med sina mjuka, fjädrande borst. Blött hår ofta – Wet Brush. Allround kompakt – Tangle Teezer."}
      heroImage={heroImage}
      picks={tangleTeezerEllerHarborstePicks}
      comparisonRows={tangleTeezerEllerHarborsteComparisonRows}
      faqItems={tangleTeezerEllerHarborsteFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={tangleTeezerEllerHarborsteRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
