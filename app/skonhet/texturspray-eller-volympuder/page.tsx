import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  texturaprayEllerVolympuderComparisonRows,
  texturaprayEllerVolympuderFaqItems,
  texturaprayEllerVolympuderPicks,
  texturaprayEllerVolympuderRelatedLinks,
} from "@/lib/texturspray-eller-volympuder";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/texturspray-eller-volympuder`;

const heroImage = {
  src: "/comparisons/texturspray-eller-volympuder.webp",
  alt: "Texturspray eller volympuder? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Texturspray eller volympuder?", href: `/skonhet/texturspray-eller-volympuder` },
];

export const metadata = createSeoMetadata({
  title: "Texturspray eller volympuder? Mer volym i håret | Elins val",
  description: "Texturspray eller volympuder? Elin jämför grepp och matt struktur mot snabbt rotlyft så du väljer rätt för mer liv och volym i håret.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function TexturaprayEllerVolympuderPage() {
  return (
    <DecisionComparisonPage
      h1={"Texturspray eller volympuder?"}
      intro={"Texturspray och volympuder ger båda mer liv i håret, men med olika känsla. En texturspray ger grepp, matt struktur och lätt fyllighet i hela håret, medan ett volympuder ger snabb lyft och volym vid rötterna där håret är plattast."}
      badges={["Hårstyling","Struktur vs lyft","Volym"]}
      howToChoose={"Välj en texturspray om du vill ha grepp och matt, sladdrig struktur i hela håret – bra för beach-look och uppsatt hår som håller. Välj ett volympuder om du främst vill ha snabb volym och lyft vid rötterna, till exempel om håret snabbt blir platt. Många använder texturspray för struktur och pudret för lyft vid behov."}
      verdict={"Det handlar om vad håret behöver. Texturspray vinner för struktur och grepp i hela håret, medan volympuder vinner för snabbt rotlyft. Vill du ha textur och håll – spray. Vill du bara ha volym vid rötterna – puder."}
      heroImage={heroImage}
      picks={texturaprayEllerVolympuderPicks}
      comparisonRows={texturaprayEllerVolympuderComparisonRows}
      faqItems={texturaprayEllerVolympuderFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={texturaprayEllerVolympuderRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
