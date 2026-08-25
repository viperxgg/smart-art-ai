import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  knaskyddEllerLyftarbalteComparisonRows,
  knaskyddEllerLyftarbalteFaqItems,
  knaskyddEllerLyftarbaltePicks,
  knaskyddEllerLyftarbalteRelatedLinks,
} from "@/lib/knaskydd-eller-lyftarbalte";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/knaskydd-eller-lyftarbalte`;

const heroImage = {
  src: "/comparisons/knaskydd-eller-lyftarbalte.webp",
  alt: "Knäskydd eller lyftarbälte? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Knäskydd eller lyftarbälte?", href: `/traning/knaskydd-eller-lyftarbalte` },
];

export const metadata = createSeoMetadata({
  title: "Knäskydd eller lyftarbälte? Rätt stöd för lyften | Elins val",
  description: "Stöd för knäna eller bålen? Elin jämför Rehbands 5 mm-knäskydd med C.P. Sports lyftarbälte – vilket som lyfter dina benpass och marklyft mest. (Annons)",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function KnaskyddEllerLyftarbaltePage() {
  return (
    <DecisionComparisonPage
      h1={"Knäskydd eller lyftarbälte?"}
      intro={"När vikterna blir tyngre i höstens träningsrutin dyker samma fråga upp: ska du stötta knäna eller bålen först? Rehbands klassiska 5 mm-knäskydd ger värme och stöd åt knäna i böj, medan C.P. Sports lyftarbälte hjälper dig hålla bålen stabil i marklyft och tunga böj. Elin jämför de två så du lägger pengarna där dina lyft behöver dem mest."}
      badges={["Tunga lyft","Stöd & stabilitet","Olika jobb"]}
      howToChoose={"Välj knäskydden om det är knäna som känns i knäböj, utfall och benpass – neoprenet ger värme och en stadig, omslutande känsla som många lyftare inte vill vara utan. Välj bältet om du drar tunga marklyft eller böjer nära din max och vill ha något att spänna bålen emot – det är där ett bälte gör sitt jobb. Tränar du lättare cirklar eller mest maskiner behöver du oftast inget av dem ännu: båda är redskap för tyngre baslyft."}
      verdict={"Jämn poäng, olika kroppsdelar. Knäskydden är vardagsvalet för benpassen – värme och stöd varje gång du böjer. Bältet är för de tunga dagarna när marklyft och knäböj närmar sig max. Elins ärliga rekommendation: köp efter var det tar emot i dina lyft – och känner du inte behovet ännu, vänta tills vikterna kräver det."}
      heroImage={heroImage}
      picks={knaskyddEllerLyftarbaltePicks}
      comparisonRows={knaskyddEllerLyftarbalteComparisonRows}
      faqItems={knaskyddEllerLyftarbalteFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={knaskyddEllerLyftarbalteRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
