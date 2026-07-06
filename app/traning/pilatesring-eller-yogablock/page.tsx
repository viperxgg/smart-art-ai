import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  pilatesringEllerYogablockComparisonRows,
  pilatesringEllerYogablockFaqItems,
  pilatesringEllerYogablockPicks,
  pilatesringEllerYogablockRelatedLinks,
} from "@/lib/pilatesring-eller-yogablock";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/pilatesring-eller-yogablock`;

const heroImage = {
  src: "/comparisons/pilatesring-eller-yogablock.webp",
  alt: "Pilatesring eller yogablock? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Pilatesring eller yogablock?", href: `/traning/pilatesring-eller-yogablock` },
];

export const metadata = createSeoMetadata({
  title: "Pilatesring eller yogablock? Vilket behöver du | Elins val",
  description: "Pilatesring eller yogablock? Elin jämför lätt motstånd i pilates mot stöd och stabilitet i yoga så du väljer rätt redskap för lugn hemmaträning.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function PilatesringEllerYogablockPage() {
  return (
    <DecisionComparisonPage
      h1={"Pilatesring eller yogablock?"}
      intro={"Pilatesring och yogablock används båda i lugn hemmaträning, men på olika sätt. En pilatesring ger ett lätt motstånd att pressa mot, vilket aktiverar muskler i lår, bål och armar, medan ett yogablock ger stöd och höjd så du håller balansen och når golvet i olika positioner."}
      badges={["Pilates & yoga","Motstånd vs stöd","Nybörjare"]}
      howToChoose={"Välj en pilatesring om du vill lägga till ett lätt motstånd i pilates- och bålövningar och känna att musklerna jobbar mer när du pressar. Välj ett yogablock om du vill ha stöd och stabilitet i yoga och stretch, till exempel för att nå golvet eller hålla balansen. De hör till olika slags träning men båda är nybörjarvänliga."}
      verdict={"Det handlar om vilken träning du gör. Pilatesringen vinner för att lägga till motstånd i pilates, medan yogablocket vinner för stöd och stabilitet i yoga. Pilates med extra jobb – ring. Yoga med stöd – block."}
      heroImage={heroImage}
      picks={pilatesringEllerYogablockPicks}
      comparisonRows={pilatesringEllerYogablockComparisonRows}
      faqItems={pilatesringEllerYogablockFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={pilatesringEllerYogablockRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
