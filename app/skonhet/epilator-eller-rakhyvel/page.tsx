import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  epilatorEllerRakhyvelComparisonRows,
  epilatorEllerRakhyvelFaqItems,
  epilatorEllerRakhyvelPicks,
  epilatorEllerRakhyvelRelatedLinks,
} from "@/lib/epilator-eller-rakhyvel";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/epilator-eller-rakhyvel`;

const heroImage = {
  src: "/comparisons/epilator-eller-rakhyvel.webp",
  alt: "Epilator eller rakhyvel? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Epilator eller rakhyvel?", href: `/skonhet/epilator-eller-rakhyvel` },
];

export const metadata = createSeoMetadata({
  title: "Epilator eller rakhyvel? Vilken ska du välja | Elins val",
  description: "Epilator eller rakhyvel? Elin jämför slät hud i veckor mot snabb, smärtfri rakning så du väljer rätt metod för hårborttagning.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function EpilatorEllerRakhyvelPage() {
  return (
    <DecisionComparisonPage
      h1={"Epilator eller rakhyvel?"}
      intro={"Epilator och rakhyvel tar båda bort hår, men resultatet håller olika länge. En epilator drar upp håret med roten så du är slät i veckor, medan en rakhyvel klipper håret vid ytan – snabbt och smärtfritt, men växer tillbaka snabbare."}
      badges={["Hårborttagning","Slät längre vs smärtfritt","Vardag"]}
      howToChoose={"Välj en epilator om du vill vara slät länge och inte har något emot lite känsla i början – resultatet håller i veckor och håret växer tillbaka finare med tiden. Välj en rakhyvel om du vill ha en snabb, smärtfri lösning som funkar precis innan du ska ut, även om du behöver göra om det oftare."}
      verdict={"Det beror på vad du prioriterar. Epilatorn vinner om du vill vara slät i veckor och slippa raka ofta, medan rakhyveln är oslagbar för snabb, smärtfri hårborttagning här och nu. Många använder rakhyvel i vardagen och epilator inför längre slätt."}
      heroImage={heroImage}
      picks={epilatorEllerRakhyvelPicks}
      comparisonRows={epilatorEllerRakhyvelComparisonRows}
      faqItems={epilatorEllerRakhyvelFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={epilatorEllerRakhyvelRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
