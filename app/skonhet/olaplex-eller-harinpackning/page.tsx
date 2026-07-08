import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  olaplexEllerHarinpackningComparisonRows,
  olaplexEllerHarinpackningFaqItems,
  olaplexEllerHarinpackningPicks,
  olaplexEllerHarinpackningRelatedLinks,
} from "@/lib/olaplex-eller-harinpackning";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/olaplex-eller-harinpackning`;

const heroImage = {
  src: "/comparisons/olaplex-eller-harinpackning.webp",
  alt: "Olaplex eller hårinpackning – värt det? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Olaplex eller hårinpackning – värt det?", href: `/skonhet/olaplex-eller-harinpackning` },
];

export const metadata = createSeoMetadata({
  title: "Olaplex eller hårinpackning – värt det? | Elins val",
  description: "Olaplex No.3 eller vanlig hårinpackning? Elin jämför bond-kuren mot L'Oréal Absolut Repair ärligt – vad ditt hår behöver och när hypen är värd pengarna.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function OlaplexEllerHarinpackningPage() {
  return (
    <DecisionComparisonPage
      h1={"Olaplex eller hårinpackning – värt det?"}
      intro={"Olaplex No.3 och en vanlig hårinpackning låter som samma sak, men de gör olika jobb. Olaplex är en bond-kur som jobbar med hårets inre bindningar och används före schamponering, medan en inpackning som L'Oréal Absolut Repair mjukgör och återfuktar efter tvätten. Frågan är vad ditt hår faktiskt behöver."}
      badges={["Skadat hår","Hype-koll","Sommarhår"]}
      howToChoose={"Välj Olaplex om håret är blekt, slingat eller värmeslitet och känns skört – bond-kuren gör något en inpackning inte kan. Välj Absolut Repair om håret mest är torrt och trist av sol och värme och du vill ha omedelbar mjukhet och glans för mindre pengar. Många med riktigt slitet hår använder båda: Olaplex före tvätten, inpackningen efter."}
      verdict={"Elins ärliga svar: för de flesta räcker inpackningen – Absolut Repair får högre poäng för att den gör mer för fler till lägre pris. Olaplex är värd premiumpriset först när håret faktiskt är skadat av blekning eller värme, för då jobbar den på djupet där inpackningen bara döljer."}
      heroImage={heroImage}
      picks={olaplexEllerHarinpackningPicks}
      comparisonRows={olaplexEllerHarinpackningComparisonRows}
      faqItems={olaplexEllerHarinpackningFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={olaplexEllerHarinpackningRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
