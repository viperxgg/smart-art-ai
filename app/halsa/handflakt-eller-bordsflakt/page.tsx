import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  handflaktEllerBordsflaktComparisonRows,
  handflaktEllerBordsflaktFaqItems,
  handflaktEllerBordsflaktPicks,
  handflaktEllerBordsflaktRelatedLinks,
} from "@/lib/handflakt-eller-bordsflakt";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/handflakt-eller-bordsflakt`;

const heroImage = {
  src: "/comparisons/handflakt-eller-bordsflakt.webp",
  alt: "Handfläkt eller bordsfläkt? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Handfläkt eller bordsfläkt?", href: `/halsa/handflakt-eller-bordsflakt` },
];

export const metadata = createSeoMetadata({
  title: "Handfläkt eller bordsfläkt? Vilken svalka passar dig | Elins val",
  description: "Handfläkt eller bordsfläkt? Elin jämför bärbar svalka på språng mot en stadig fläkt vid skrivbordet så du väljer rätt för sommarvärmen.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function HandflaktEllerBordsflaktPage() {
  return (
    <DecisionComparisonPage
      h1={"Handfläkt eller bordsfläkt?"}
      intro={"Handfläkt och bordsfläkt ger båda snabb svalka, men på olika platser. En handfläkt är liten och laddningsbar så du kan ta den med ut – på festivalen, bussen eller stan – medan en bordsfläkt står still och svalkar dig vid skrivbordet eller sängen."}
      badges={["Svalka","Bärbar vs på plats","Sommar"]}
      howToChoose={"Välj en handfläkt om du vill ha svalka på språng när det är varmt ute – den ryms i väskan och laddas via USB. Välj en bordsfläkt om du mest vill ha en stadig, lite starkare luftström där du sitter hemma eller på jobbet. Många har en handfläkt i väskan för sommaren och en bordsfläkt hemma."}
      verdict={"Det handlar om var du behöver svalkan. Handfläkten vinner för att ta med ut, medan bordsfläkten ger en stadigare och ofta starkare luftström på plats. Vill du ha en av dem – välj efter om du mest är ute eller hemma."}
      heroImage={heroImage}
      picks={handflaktEllerBordsflaktPicks}
      comparisonRows={handflaktEllerBordsflaktComparisonRows}
      faqItems={handflaktEllerBordsflaktFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={handflaktEllerBordsflaktRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
