import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  olaplexSchampoEllerBalsamComparisonRows,
  olaplexSchampoEllerBalsamFaqItems,
  olaplexSchampoEllerBalsamPicks,
  olaplexSchampoEllerBalsamRelatedLinks,
} from "@/lib/olaplex-schampo-eller-balsam";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/olaplex-schampo-eller-balsam`;

const heroImage = {
  src: "/comparisons/olaplex-schampo-eller-balsam.webp",
  alt: "Olaplex schampo eller balsam? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Olaplex schampo eller balsam?", href: `/skonhet/olaplex-schampo-eller-balsam` },
];

export const metadata = createSeoMetadata({
  title: "Olaplex schampo eller balsam – vilken först? | Elins val",
  description: "Olaplex No.4 eller No.5 – var gör pengarna störst nytta? Elin jämför schampot mot balsamet för blekt, torrt och slitet hår, och när du behöver båda. (Annons)",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function OlaplexSchampoEllerBalsamPage() {
  return (
    <DecisionComparisonPage
      h1={"Olaplex schampo eller balsam?"}
      intro={"Olaplex No.4 och No.5 säljs oftast tillsammans – men börjar du med bara en, vilken gör mest skillnad? Schampot rengör och bygger upp med Olaplex bond-teknik i varje tvätt, balsamet ger slitna längder mjukhet och glans. Elin reder ut var pengarna gör störst nytta för just ditt hår."}
      badges={["Slitet hår","Blekt & färgat","Bond-vård"]}
      howToChoose={"Välj schampot No.4 om du vill få in bond-vården i rutinen utan extra steg – det jobbar vid varje tvätt och passar dig med fint hår som lätt tyngs ned av balsam. Välj balsamet No.5 om dina längder är torra, blekta eller trassliga och du redan har ett schampo du gillar – det är balsamet som ger den där mjuka, glansiga känslan direkt. Har håret varit med om mycket blekning är kombinationen med kuren No.3 en vanlig trio."}
      verdict={"Jämnt lopp – de gör olika halvor av samma jobb. Störst omedelbar skillnad känner de flesta av balsamet No.5 i torra längder, medan No.4 är det smidiga sättet att få bond-vård i varje tvätt. Slitet, blekt hår mår bäst av båda; budgeten avgör var du börjar."}
      heroImage={heroImage}
      picks={olaplexSchampoEllerBalsamPicks}
      comparisonRows={olaplexSchampoEllerBalsamComparisonRows}
      faqItems={olaplexSchampoEllerBalsamFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={olaplexSchampoEllerBalsamRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
