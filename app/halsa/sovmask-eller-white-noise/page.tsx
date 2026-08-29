import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  sovmaskEllerWhiteNoiseComparisonRows,
  sovmaskEllerWhiteNoiseFaqItems,
  sovmaskEllerWhiteNoisePicks,
  sovmaskEllerWhiteNoiseRelatedLinks,
} from "@/lib/sovmask-eller-white-noise";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/sovmask-eller-white-noise`;

const heroImage = {
  src: "/comparisons/sovmask-eller-white-noise.webp",
  alt: "Sovmask eller white noise? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Sovmask eller white noise?", href: `/halsa/sovmask-eller-white-noise` },
];

export const metadata = createSeoMetadata({
  title: "Sovmask eller white noise? Ljus eller ljud först | Elins val",
  description: "Sovmask eller white noise-maskin? Elin jämför mörker mot ljudkuliss – vilken sömntjuv du ska stoppa först och när kombinationen är värd det.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function SovmaskEllerWhiteNoisePage() {
  return (
    <DecisionComparisonPage
      h1={"Sovmask eller white noise?"}
      intro={"Sovmask och white noise-maskin angriper varsin sömntjuv. Masken gör det becksvart när gatlyktor, laddlampor och tidiga soluppgångar stör – ljudmaskinen lägger en jämn ljudkuliss över grannar, trafik och tickande element. Elin jämför ljus mot ljud så att du sätter pengarna på rätt problem först."}
      badges={["Sömn","Ljus vs ljud","Höstrutin"]}
      howToChoose={"Fundera på vad som faktiskt väcker dig. Vaknar du av ljusstrimman från persiennen, skärmar som blinkar eller att det ljusnar tidigt – då är det mörkret som saknas, och en formad sovmask som Manta gör jobbet. Somnar du svårt för att huset knäpper, grannen duschar eller trafiken brusar – då är det en jämn ljudkuliss du behöver. Är du osäker: börja med det som stör oftast, det andra går att lägga till senare."}
      verdict={"Elin väljer efter störningen, inte prylen. Mot ljus vinner Manta – becksvart utan tryck mot ögonen. Mot ljud vinner Magicteam, som med sina många ljud och minnesfunktion är den enklaste vägen till en jämn nattkuliss. Bor du ljust och lyhört är kombinationen svårslagen."}
      heroImage={heroImage}
      picks={sovmaskEllerWhiteNoisePicks}
      comparisonRows={sovmaskEllerWhiteNoiseComparisonRows}
      faqItems={sovmaskEllerWhiteNoiseFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={sovmaskEllerWhiteNoiseRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
