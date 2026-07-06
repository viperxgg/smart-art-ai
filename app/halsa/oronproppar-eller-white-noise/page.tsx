import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  oronpropparEllerWhiteNoiseComparisonRows,
  oronpropparEllerWhiteNoiseFaqItems,
  oronpropparEllerWhiteNoisePicks,
  oronpropparEllerWhiteNoiseRelatedLinks,
} from "@/lib/oronproppar-eller-white-noise";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/oronproppar-eller-white-noise`;

const heroImage = {
  src: "/comparisons/oronproppar-eller-white-noise.webp",
  alt: "Öronproppar eller white noise? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Öronproppar eller white noise?", href: `/halsa/oronproppar-eller-white-noise` },
];

export const metadata = createSeoMetadata({
  title: "Öronproppar eller white noise? Bäst för sömnen | Elins val",
  description: "Öronproppar eller white noise-maskin? Elin jämför att dämpa ljud mot att maskera störande ljud så du väljer rätt för att sova bättre.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function OronpropparEllerWhiteNoisePage() {
  return (
    <DecisionComparisonPage
      h1={"Öronproppar eller white noise?"}
      intro={"Öronproppar och en white noise-maskin hjälper båda dig att sova bättre när det är stökigt runt omkring, men på motsatt sätt. Öronproppar dämpar ljudet du hör, medan en white noise-maskin lägger till ett jämnt bakgrundsljud som maskerar störande ljud."}
      badges={["Bättre sömn","Dämpa vs maskera","Avslappning"]}
      howToChoose={"Välj öronproppar om du vill ha det så tyst som möjligt och gillar känslan av dämpat ljud – smidigt på resan, i sovrummet eller mot snarkningar. Välj en white noise-maskin om du hellre somnar till ett jämnt, lugnande ljud som suddar ut plötsliga ljud som trafik eller grannar. Vissa kombinerar båda."}
      verdict={"Det handlar om hur du helst somnar. Öronproppar vinner om du vill ha tystnad och något att ta med överallt, medan white noise vinner om du somnar bäst till ett jämnt bakgrundsljud. Testa vad din hjärna gillar – helt tyst eller ett mjukt sus."}
      heroImage={heroImage}
      picks={oronpropparEllerWhiteNoisePicks}
      comparisonRows={oronpropparEllerWhiteNoiseComparisonRows}
      faqItems={oronpropparEllerWhiteNoiseFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={oronpropparEllerWhiteNoiseRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
