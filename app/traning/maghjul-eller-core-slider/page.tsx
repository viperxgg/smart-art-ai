import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  maghjulEllerCoreSliderComparisonRows,
  maghjulEllerCoreSliderFaqItems,
  maghjulEllerCoreSliderPicks,
  maghjulEllerCoreSliderRelatedLinks,
} from "@/lib/maghjul-eller-core-slider";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/maghjul-eller-core-slider`;

const heroImage = {
  src: "/comparisons/maghjul-eller-core-slider.webp",
  alt: "Maghjul eller core slider? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Maghjul eller core slider?", href: `/traning/maghjul-eller-core-slider` },
];

export const metadata = createSeoMetadata({
  title: "Maghjul eller core slider? Bäst för magen | Elins val",
  description: "Maghjul eller core slider? Elin jämför en intensiv magövning mot mångsidiga glidövningar så du väljer rätt för bål och mage hemma.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function MaghjulEllerCoreSliderPage() {
  return (
    <DecisionComparisonPage
      h1={"Maghjul eller core slider?"}
      intro={"Maghjul och core slider tränar båda magen och bålen hemma, men på olika sätt. Ett maghjul rullar du ut och in för en intensiv, tydlig magövning, medan core sliders är små tallrikar du glider med på golvet för mjukare, mångsidiga bål- och helkroppsövningar."}
      badges={["Bål & mage","Intensivt vs mångsidigt","Kroppsvikt"]}
      howToChoose={"Välj ett maghjul om du vill ha en intensiv, tydlig magövning och redan har lite bålstyrka – det utmanar rejält. Välj core sliders om du vill ha mjukare, mer varierade övningar för bål, ben och helkropp, och gilla att kunna anpassa svårighetsgraden. Nybörjare kan börja med sliders och bygga upp till maghjulet."}
      verdict={"Det handlar om intensitet mot variation. Maghjulet vinner för en tuff, effektiv magövning, medan core sliders vinner för mångsidighet och att kunna börja mjukare. Vill du ha en enda hård övning – maghjul. Vill du ha variation – sliders."}
      heroImage={heroImage}
      picks={maghjulEllerCoreSliderPicks}
      comparisonRows={maghjulEllerCoreSliderComparisonRows}
      faqItems={maghjulEllerCoreSliderFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={maghjulEllerCoreSliderRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
