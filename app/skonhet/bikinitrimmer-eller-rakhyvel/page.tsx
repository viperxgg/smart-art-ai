import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  bikinitrimmerEllerRakhyvelComparisonRows,
  bikinitrimmerEllerRakhyvelFaqItems,
  bikinitrimmerEllerRakhyvelPicks,
  bikinitrimmerEllerRakhyvelRelatedLinks,
} from "@/lib/bikinitrimmer-eller-rakhyvel";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/bikinitrimmer-eller-rakhyvel`;

const heroImage = {
  src: "/comparisons/bikinitrimmer-eller-rakhyvel.webp",
  alt: "Bikinitrimmer eller rakhyvel? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Bikinitrimmer eller rakhyvel?", href: `/skonhet/bikinitrimmer-eller-rakhyvel` },
];

export const metadata = createSeoMetadata({
  title: "Bikinitrimmer eller rakhyvel? Skonsamt eller slätt | Elins val",
  description: "Bikinitrimmer eller rakhyvel för bikinilinjen? Elin jämför skonsam trimning mot en helt slät rakning så du väljer rätt med minsta irritation.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function BikinitrimmerEllerRakhyvelPage() {
  return (
    <DecisionComparisonPage
      h1={"Bikinitrimmer eller rakhyvel?"}
      intro={"Bikinitrimmer och rakhyvel sköter båda hår i bikinilinjen, men på olika sätt. En bikinitrimmer trimmar och formar utan att gå ända ner, med minimal risk för irritation, medan en rakhyvel ger en helt slät yta men kräver mer omsorg för att undvika rakknottror."}
      badges={["Bikinilinjen","Trimma vs slätt","Skonsamt"]}
      howToChoose={"Välj en bikinitrimmer om du vill trimma, snygga till eller korta ner utan att gå ända in på huden – skonsamt och snabbt, med mindre risk för irritation. Välj en rakhyvel om du vill ha en helt slät yta och är beredd att förbereda huden med gel och raka i hårets riktning för att slippa rakknottror."}
      verdict={"Det handlar om hur slät du vill vara. Bikinitrimmern vinner för skonsam trimning med minimal irritation, medan rakhyveln vinner för en helt slät yta. Vill du undvika rakknottror – trimmer. Vill du ha helt slätt – rakhyvel, med omsorg."}
      heroImage={heroImage}
      picks={bikinitrimmerEllerRakhyvelPicks}
      comparisonRows={bikinitrimmerEllerRakhyvelComparisonRows}
      faqItems={bikinitrimmerEllerRakhyvelFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={bikinitrimmerEllerRakhyvelRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
