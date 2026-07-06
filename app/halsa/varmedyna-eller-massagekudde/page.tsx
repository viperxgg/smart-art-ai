import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  varmedynaEllerMassagekuddeComparisonRows,
  varmedynaEllerMassagekuddeFaqItems,
  varmedynaEllerMassagekuddePicks,
  varmedynaEllerMassagekuddeRelatedLinks,
} from "@/lib/varmedyna-eller-massagekudde";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/varmedyna-eller-massagekudde`;

const heroImage = {
  src: "/comparisons/varmedyna-eller-massagekudde.webp",
  alt: "Värmedyna eller massagekudde? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Värmedyna eller massagekudde?", href: `/halsa/varmedyna-eller-massagekudde` },
];

export const metadata = createSeoMetadata({
  title: "Värmedyna eller massagekudde? Bäst avslappning | Elins val",
  description: "Värmedyna eller massagekudde? Elin jämför mjuk värme mot aktiv knådning så du väljer rätt för en spänd nacke och rygg.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function VarmedynaEllerMassagekuddePage() {
  return (
    <DecisionComparisonPage
      h1={"Värmedyna eller massagekudde?"}
      intro={"Värmedyna och massagekudde ger båda skön avslappning för spänd nacke och rygg, men på olika sätt. En värmedyna sprider mjuk värme som slappnar av musklerna, medan en massagekudde knådar med roterande noder för en mer aktiv massage."}
      badges={["Avslappning","Värme vs knådning","Återhämtning"]}
      howToChoose={"Välj en värmedyna om du gillar mjuk, avslappnande värme mot en spänd nacke eller rygg och vill ha något enkelt att bara luta dig mot. Välj en massagekudde om du vill ha en mer aktiv knådande massage som jobbar på spända punkter. Många har en värmedyna för lugn värme och en massagekudde när musklerna behöver mer bearbetning."}
      verdict={"Det handlar om vilken känsla du vill ha. Värmedynan vinner för mjuk, avslappnande värme, medan massagekudden vinner för aktiv knådning av spända muskler. Vill du bara varva ner – värme. Vill du bearbeta spänningar – massage."}
      heroImage={heroImage}
      picks={varmedynaEllerMassagekuddePicks}
      comparisonRows={varmedynaEllerMassagekuddeComparisonRows}
      faqItems={varmedynaEllerMassagekuddeFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={varmedynaEllerMassagekuddeRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
