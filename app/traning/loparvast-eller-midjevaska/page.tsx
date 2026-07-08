import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  loparvastEllerMidjevaskaComparisonRows,
  loparvastEllerMidjevaskaFaqItems,
  loparvastEllerMidjevaskaPicks,
  loparvastEllerMidjevaskaRelatedLinks,
} from "@/lib/loparvast-eller-midjevaska";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/loparvast-eller-midjevaska`;

const heroImage = {
  src: "/comparisons/loparvast-eller-midjevaska.webp",
  alt: "Löparväst eller midjeväska? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Löparväst eller midjeväska?", href: `/traning/loparvast-eller-midjevaska` },
];

export const metadata = createSeoMetadata({
  title: "Löparväst eller midjeväska? Så väljer du | Elins val",
  description: "Löparväst eller midjeväska? Elin jämför Salomon Active Skin mot HAISSKY löparbälte ärligt – när vätskan kräver väst och när ett billigt bälte räcker gott.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function LoparvastEllerMidjevaskaPage() {
  return (
    <DecisionComparisonPage
      h1={"Löparväst eller midjeväska?"}
      intro={"Löparväst eller midjeväska – frågan är egentligen hur långt du springer. Midjeväskan rymmer mobil, nycklar och kort och kostar en bråkdel, medan löparvästen bär vatten och packning för långpassen. Många köper väst när ett bälte hade räckt – och tvärtom."}
      badges={["Löpning","Sommarrundor","Budget vs premium"]}
      howToChoose={"Välj midjeväskan om dina rundor är upp till en timme och du mest vill ha mobil och nycklar säkert med – den är billig, lätt och studsar inte. Välj löparvästen om du springer långpass och behöver vätska med dig – flaskorna fram och packvolymen är hela poängen, och det kan inget bälte ersätta."}
      verdict={"Elins ärliga svar: de flesta som springer vardagsrundor behöver bara midjeväskan – därför får den högre poäng som köp. Löparvästen är rätt först när du faktiskt springer så långt att vatten måste med. Köp inte västen för att den ser mer seriös ut."}
      heroImage={heroImage}
      picks={loparvastEllerMidjevaskaPicks}
      comparisonRows={loparvastEllerMidjevaskaComparisonRows}
      faqItems={loparvastEllerMidjevaskaFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={loparvastEllerMidjevaskaRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
