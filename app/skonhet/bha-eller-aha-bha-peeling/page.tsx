import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  bhaEllerAhaBhaPeelingComparisonRows,
  bhaEllerAhaBhaPeelingFaqItems,
  bhaEllerAhaBhaPeelingPicks,
  bhaEllerAhaBhaPeelingRelatedLinks,
} from "@/lib/bha-eller-aha-bha-peeling";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/bha-eller-aha-bha-peeling`;

const heroImage = {
  src: "/comparisons/bha-eller-aha-bha-peeling.webp",
  alt: "BHA eller AHA/BHA-peeling? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "BHA eller AHA/BHA-peeling?", href: `/skonhet/bha-eller-aha-bha-peeling` },
];

export const metadata = createSeoMetadata({
  title: "BHA eller AHA/BHA-peeling? Vilken exfoliering | Elins val",
  description: "BHA eller AHA/BHA-peeling? Elin jämför porrengörande salicylsyra mot en allround-syrapeeling så du väljer rätt exfoliering för din hud.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function BhaEllerAhaBhaPeelingPage() {
  return (
    <DecisionComparisonPage
      h1={"BHA eller AHA/BHA-peeling?"}
      intro={"BHA och en AHA/BHA-peeling exfolierar båda huden kemiskt, men på lite olika sätt. En ren BHA (salicylsyra) går ner i porerna och passar oljig, ojämn hud, medan en AHA/BHA-peeling kombinerar syror för både ytlig och djupare exfoliering – en allround-uppfräschning."}
      badges={["Exfoliering","Porer vs allround","Hudvård"]}
      howToChoose={"Välj en ren BHA om du har oljig eller ojämn hud och vill jobba i porerna för en jämnare, mattare hy. Välj en AHA/BHA-peeling om du vill ha en allround-exfoliering som fräschar upp ytan och jämnar ut samtidigt. Börja långsamt oavsett vilken – ett par gånger i veckan – och trappa upp när huden vant sig."}
      verdict={"Det handlar om ditt fokus. Ren BHA vinner för oljig, ojämn hud och pormaskar, medan AHA/BHA-peelingen vinner för en allround-uppfräschning. Porer och oljighet – BHA. Allround glow – AHA/BHA."}
      heroImage={heroImage}
      picks={bhaEllerAhaBhaPeelingPicks}
      comparisonRows={bhaEllerAhaBhaPeelingComparisonRows}
      faqItems={bhaEllerAhaBhaPeelingFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={bhaEllerAhaBhaPeelingRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
