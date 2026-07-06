import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  billaddareEllerPowerbankComparisonRows,
  billaddareEllerPowerbankFaqItems,
  billaddareEllerPowerbankPicks,
  billaddareEllerPowerbankRelatedLinks,
} from "@/lib/billaddare-eller-powerbank";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/sommar/resa/billaddare-eller-powerbank`;

const heroImage = {
  src: "/comparisons/billaddare-eller-powerbank.webp",
  alt: "Billaddare eller powerbank? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Resa", href: "/sommar/resa" },
  { name: "Billaddare eller powerbank?", href: `/sommar/resa/billaddare-eller-powerbank` },
];

export const metadata = createSeoMetadata({
  title: "Billaddare eller powerbank? Ladda smart på resan | Elins val",
  description: "Billaddare eller powerbank på road tripen? Elin jämför snabb laddning i bilen mot ström överallt så du väljer rätt för att hålla mobilen igång.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function BilladdareEllerPowerbankPage() {
  return (
    <DecisionComparisonPage
      h1={"Billaddare eller powerbank?"}
      intro={"På road tripen vill du hålla mobilen laddad – men en billaddare och en powerbank löser det olika. Billaddaren sitter i bilens 12V-uttag och laddar snabbt medan du kör, medan powerbanken ger ström även när du lämnat bilen och är ute utan uttag."}
      badges={["Ladda på resan","I bilen vs överallt","Resa"]}
      howToChoose={"Välj en billaddare om du mest laddar medan du kör och vill ha snabb laddning direkt från bilens uttag. Välj en powerbank om du också behöver ström när du lämnat bilen – på stranden, vandringen eller festivalen. Många har en billaddare fast i bilen och en powerbank i väskan för allt annat."}
      verdict={"De kompletterar varandra. Billaddaren vinner för snabb laddning medan du kör, medan powerbanken är oslagbar när du är ute utan uttag. Ska du bara välja en – utgå från om du oftast är i bilen eller på språng."}
      heroImage={heroImage}
      picks={billaddareEllerPowerbankPicks}
      comparisonRows={billaddareEllerPowerbankComparisonRows}
      faqItems={billaddareEllerPowerbankFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={billaddareEllerPowerbankRelatedLinks}
      backHref={"/sommar/resa"}
      backLabel={"Tillbaka till Elins reseval"}
    />
  );
}
