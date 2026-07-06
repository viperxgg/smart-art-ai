import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  termosEllerVattenflaskaComparisonRows,
  termosEllerVattenflaskaFaqItems,
  termosEllerVattenflaskaPicks,
  termosEllerVattenflaskaRelatedLinks,
} from "@/lib/termos-eller-vattenflaska";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/termos-eller-vattenflaska`;

const heroImage = {
  src: "/comparisons/termos-eller-vattenflaska.webp",
  alt: "Termos eller vattenflaska? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Termos eller vattenflaska?", href: `/halsa/termos-eller-vattenflaska` },
];

export const metadata = createSeoMetadata({
  title: "Termos eller vattenflaska? Vilken ska du välja | Elins val",
  description: "Termos eller motiverande vattenflaska? Elin jämför att hålla drycken kall/varm mot att dricka mer vatten så du väljer rätt flaska för din vardag.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function TermosEllerVattenflaskaPage() {
  return (
    <DecisionComparisonPage
      h1={"Termos eller vattenflaska?"}
      intro={"En isolerad termos och en motiverande vattenflaska hjälper båda dig att dricka mer under dagen, men med olika fokus. Termosen håller drycken kall eller varm i timmar tack vare dubbla väggar, medan den motiverande vattenflaskan har tidsmarkeringar som peppar dig att dricka jämnt över dagen."}
      badges={["Drick mer","Håll temperatur vs påminnelse","Vardag"]}
      howToChoose={"Välj en isolerad termos om det viktigaste är att drycken håller temperaturen länge – iskallt vatten en varm dag eller varmt kaffe på utflykten. Välj en motiverande vattenflaska om ditt mål är att dricka mer vatten och du gillar tidsmarkeringar som håller dig på banan. Många har en termos för temperatur och en motivationsflaska på skrivbordet."}
      verdict={"Det handlar om ditt mål. Termosen vinner om du vill hålla drycken kall eller varm länge, medan motivationsflaskan vinner om målet är att faktiskt dricka mer under dagen. Temperatur – termos. Vattenmål – motivationsflaska."}
      heroImage={heroImage}
      picks={termosEllerVattenflaskaPicks}
      comparisonRows={termosEllerVattenflaskaComparisonRows}
      faqItems={termosEllerVattenflaskaFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={termosEllerVattenflaskaRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
