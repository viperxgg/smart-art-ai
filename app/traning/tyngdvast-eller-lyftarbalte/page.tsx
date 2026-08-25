import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  tyngdvastEllerLyftarbalteComparisonRows,
  tyngdvastEllerLyftarbalteFaqItems,
  tyngdvastEllerLyftarbaltePicks,
  tyngdvastEllerLyftarbalteRelatedLinks,
} from "@/lib/tyngdvast-eller-lyftarbalte";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/tyngdvast-eller-lyftarbalte`;

const heroImage = {
  src: "/comparisons/tyngdvast-eller-lyftarbalte.webp",
  alt: "Tyngdväst eller lyftarbälte? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Tyngdväst eller lyftarbälte?", href: `/traning/tyngdvast-eller-lyftarbalte` },
];

export const metadata = createSeoMetadata({
  title: "Tyngdväst eller lyftarbälte? Så väljer du | Elins val",
  description: "Tyngdväst gör kroppen tyngre – lyftarbältet stöttar när du lyfter tungt. Elin jämför Eric Flags viktväst med C.P. Sports bälte och reder ut vilket din träning behöver. (Annons)",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function TyngdvastEllerLyftarbaltePage() {
  return (
    <DecisionComparisonPage
      h1={"Tyngdväst eller lyftarbälte?"}
      intro={"Båda spänns fast runt kroppen, men där slutar likheten. En tyngdväst (även kallad viktväst) gör kroppen tyngre så att promenader, armhävningar och pull-ups blir hårdare träning. Ett lyftarbälte gör motsatsen till att belasta – det stöttar bålen när du lyfter tungt i marklyft och knäböj. Elin reder ut vilket redskap som matchar din träning."}
      badges={["Olika jobb","Hemmaträning","Styrka"]}
      howToChoose={"Välj en tyngdväst om du vill göra kroppsviktsträning och promenader tuffare: gåturer, armhävningar, utfall och pull-ups får omedelbart mer motstånd, och Eric Flags väst låter dig justera vikten stegvis. Välj ett lyftarbälte om du tränar tunga basövningar med skivstång – bältet hjälper dig att spänna bålen och hålla tekniken när vikterna blir tunga. De löser alltså olika problem: västen lägger på belastning, bältet hjälper dig att hantera den."}
      verdict={"Inget antingen-eller i vanlig mening – redskapen tillhör olika träningsstilar. Promenerar du och kör kroppsvikt: tyngdvästen ger mest träning per krona av de två. Lyfter du tungt med stång: bältet är det klassiska stödet. Tränar du både och? Då är det behovet just nu som avgör."}
      heroImage={heroImage}
      picks={tyngdvastEllerLyftarbaltePicks}
      comparisonRows={tyngdvastEllerLyftarbalteComparisonRows}
      faqItems={tyngdvastEllerLyftarbalteFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={tyngdvastEllerLyftarbalteRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
