import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  kettlebellEllerHantlarComparisonRows,
  kettlebellEllerHantlarFaqItems,
  kettlebellEllerHantlarPicks,
  kettlebellEllerHantlarRelatedLinks,
} from "@/lib/kettlebell-eller-hantlar";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/kettlebell-eller-hantlar`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Kettlebell eller hantlar?", href: "/traning/kettlebell-eller-hantlar" },
];

export const metadata = createSeoMetadata({
  title: "Kettlebell eller hantlar - vad ska du börja med hemma? | Elins val",
  description:
    "Elin jämför Amazon Basics kettlebell och SONGMICS hantelset: ett mångsidigt redskap eller ett komplett startset för hemmaträning.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${kettlebellEllerHantlarPicks[0].product.image}`,
    width: 1200,
    height: 900,
    alt: kettlebellEllerHantlarPicks[0].product.imageAlt,
  },
});

export default function KettlebellEllerHantlarPage() {
  return (
    <DecisionComparisonPage
      h1="Kettlebell eller hantlar?"
      intro="Båda är smarta förstaval för hemmaträning, men passar olika upplägg. En kettlebell är ett mångsidigt redskap för svingar och helkroppsrörelser, medan ett hantelset ger fler vikter och en ställning att börja från."
      badges={["Hemmaträning", "Helkropp", "Nybörjarvänligt"]}
      howToChoose="Välj Amazon Basics kettlebell om du vill ha ett mångsidigt redskap för svingar och helkropp som tar lite plats. Välj SONGMICS hantelset om du vill träna klassisk styrka med flera vikter och en ställning. Många hemmagym har nytta av båda."
      verdict="Båda är bra förstaval för hemmaträning. Kettlebellen får högre poäng som mångsidigt och platssnålt redskap, medan hantelsetet passar dig som vill ha flera vikter och klassisk styrketräning direkt."
      picks={kettlebellEllerHantlarPicks}
      comparisonRows={kettlebellEllerHantlarComparisonRows}
      faqItems={kettlebellEllerHantlarFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={kettlebellEllerHantlarRelatedLinks}
    />
  );
}
