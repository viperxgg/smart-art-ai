import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  rengoringsoljaEllerMicellarvattenComparisonRows,
  rengoringsoljaEllerMicellarvattenFaqItems,
  rengoringsoljaEllerMicellarvattenPicks,
  rengoringsoljaEllerMicellarvattenRelatedLinks,
} from "@/lib/rengoringsolja-eller-micellarvatten";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/rengoringsolja-eller-micellarvatten`;

const heroImage = {
  src: "/comparisons/rengoringsolja-eller-micellarvatten.webp",
  alt: "Rengöringsolja eller micellärvatten? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Rengöringsolja eller micellärvatten?", href: `/skonhet/rengoringsolja-eller-micellarvatten` },
];

export const metadata = createSeoMetadata({
  title: "Rengöringsolja eller micellärvatten? | Elins val",
  description: "Rengöringsolja eller micellärvatten? Elin jämför djup sminkborttagning mot snabb, skonsam rengöring så du väljer rätt första steg i din hudvård.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function RengoringsoljaEllerMicellarvattenPage() {
  return (
    <DecisionComparisonPage
      h1={"Rengöringsolja eller micellärvatten?"}
      intro={"Rengöringsolja och micellärvatten tar båda bort smink och smuts, men på olika sätt. En rengöringsolja löser upp även vattenfast smink och solkräm effektivt och sköljs av, medan micellärvatten är ett snabbt, skonsamt sätt att torka bort lättare smink utan att skölja."}
      badges={["Rengöring","Djup vs snabb","Hudvård"]}
      howToChoose={"Välj en rengöringsolja om du använder mycket smink, vattenfast mascara eller solkräm och vill lösa upp allt ordentligt som första steg i en dubbelrengöring. Välj micellärvatten om du vill ha något snabbt och skonsamt för lättare dagar eller för att fräscha upp huden – du torkar bara med en bomullspad. Många oljerengör på kvällen och använder micellärvatten på morgonen."}
      verdict={"De löser olika behov. Rengöringsoljan vinner för att ta bort mycket eller vattenfast smink grundligt, medan micellärvattnet vinner för snabb, skonsam rengöring utan sköljning. Mycket smink – olja. Snabbt och enkelt – micellärvatten."}
      heroImage={heroImage}
      picks={rengoringsoljaEllerMicellarvattenPicks}
      comparisonRows={rengoringsoljaEllerMicellarvattenComparisonRows}
      faqItems={rengoringsoljaEllerMicellarvattenFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={rengoringsoljaEllerMicellarvattenRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
