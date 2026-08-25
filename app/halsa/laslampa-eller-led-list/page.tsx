import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  laslampaEllerLedListComparisonRows,
  laslampaEllerLedListFaqItems,
  laslampaEllerLedListPicks,
  laslampaEllerLedListRelatedLinks,
} from "@/lib/laslampa-eller-led-list";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/laslampa-eller-led-list`;

const heroImage = {
  src: "/comparisons/laslampa-eller-led-list.webp",
  alt: "Läslampa eller LED-list? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Läslampa eller LED-list?", href: `/halsa/laslampa-eller-led-list` },
];

export const metadata = createSeoMetadata({
  title: "Läslampa eller LED-list? Ljus för mörka kvällar | Elins val",
  description: "Riktat läsljus eller mysig stämningsbelysning? Elin jämför Gritins uppladdningsbara läslampa med Govee Neon Rope inför höstens mörka kvällar. (Annons)",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function LaslampaEllerLedListPage() {
  return (
    <DecisionComparisonPage
      h1={"Läslampa eller LED-list?"}
      intro={"När kvällarna blir mörka vill många göra hemmet mysigare med bättre ljus – men en läslampa och en LED-list löser helt olika problem. Läslampan är riktat arbetsljus för boken, virkningen eller sängläsningen, medan LED-listen är stämningsljus som förvandlar rummets känsla. Elin jämför Gritins klämbara läslampa med Govees Neon Rope så du köper rätt ljus för rätt behov."}
      badges={["Mörka kvällar","Mysbelysning","Olika jobb"]}
      howToChoose={"Välj läslampan om du faktiskt ska SE något: läsa i sängen utan att väcka någon, handarbeta i soffan eller ha riktat ljus vid skrivbordet – Gritins klämlampa sitter fast var som helst, är uppladdningsbar och har flera ljuslägen. Välj LED-listen om du vill förändra rummets stämning: ett mjukt ljussken bakom TV:n, runt bokhyllan eller i fönstret – Govees Neon Rope formas som du vill och styrs i appen med färger och scener. Kort sagt: uppgiftsljus mot stämningsljus."}
      verdict={"Två olika köp för två olika kvällar. Läslampan är det praktiska valet som gör mörka kvällar användbara – hög poäng, lågt pris i sin kategori och laddningsbar frihet. LED-listen är stämningshöjaren som gör rummet mysigt på riktigt men inte hjälper dig läsa en enda sida. Många slutar med båda: listen för rummet, lampan för boken."}
      heroImage={heroImage}
      picks={laslampaEllerLedListPicks}
      comparisonRows={laslampaEllerLedListComparisonRows}
      faqItems={laslampaEllerLedListFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={laslampaEllerLedListRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
