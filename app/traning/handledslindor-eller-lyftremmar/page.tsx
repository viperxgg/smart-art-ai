import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  handledslindorEllerLyftremmarComparisonRows,
  handledslindorEllerLyftremmarFaqItems,
  handledslindorEllerLyftremmarPicks,
  handledslindorEllerLyftremmarRelatedLinks,
} from "@/lib/handledslindor-eller-lyftremmar";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/handledslindor-eller-lyftremmar`;

const heroImage = {
  src: "/comparisons/handledslindor-eller-lyftremmar.webp",
  alt: "Handledslindor eller lyftremmar? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Handledslindor eller lyftremmar?", href: `/traning/handledslindor-eller-lyftremmar` },
];

export const metadata = createSeoMetadata({
  title: "Handledslindor eller lyftremmar? Press eller drag | Elins val",
  description: "Handledslindor eller lyftremmar? Elin jämför stöd vid press mot grepp vid drag – bänk och axelpress mot marklyft och rodd – så du köper rätt gymstöd.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function HandledslindorEllerLyftremmarPage() {
  return (
    <DecisionComparisonPage
      h1={"Handledslindor eller lyftremmar?"}
      intro={"Handledslindor och lyftremmar blandas ihop hela tiden, men de gör motsatta jobb. Lindor stabiliserar handleden när du pressar – bänk, axelpress, dips. Remmar kopplar handen till stången när du drar – marklyft, rodd, shrugs – så att greppet inte tar slut före ryggen. Elin reder ut vilken du faktiskt behöver."}
      badges={["Gymstöd","Press vs drag","Styrketräning"]}
      howToChoose={"Utgå från passet. Viker sig handleden bakåt eller känns ostadig i bänkpress, axelpress och dips – då är det lindor du ska ha: de håller leden rak och trygg under tunga press. Släpper greppet före ryggen i marklyft och rodd – då är det remmar: de tar bort greppet som flaskhals så att de stora musklerna får jobba klart. Tränar du både tunga press och tunga drag är det här två olika verktyg för två olika dagar."}
      verdict={"Elin väljer efter rörelsen. För pressdagar vinner ASIPRO:s lindor – stumt, justerbart stöd som håller handleden i linje. För dragdagar vinner Fitgriffs vadderade remmar – enkelt grepp som låter marklyft och rodd fortsätta där handstyrkan tar slut. Behöver du bara en: ta den som matchar ditt tyngsta lyft."}
      heroImage={heroImage}
      picks={handledslindorEllerLyftremmarPicks}
      comparisonRows={handledslindorEllerLyftremmarComparisonRows}
      faqItems={handledslindorEllerLyftremmarFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={handledslindorEllerLyftremmarRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
