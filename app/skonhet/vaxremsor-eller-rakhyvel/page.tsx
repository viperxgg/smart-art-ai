import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  vaxremsorEllerRakhyvelComparisonRows,
  vaxremsorEllerRakhyvelFaqItems,
  vaxremsorEllerRakhyvelPicks,
  vaxremsorEllerRakhyvelRelatedLinks,
} from "@/lib/vaxremsor-eller-rakhyvel";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/vaxremsor-eller-rakhyvel`;

const heroImage = {
  src: "/comparisons/vaxremsor-eller-rakhyvel.webp",
  alt: "Vaxremsor eller rakhyvel? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Vaxremsor eller rakhyvel?", href: `/skonhet/vaxremsor-eller-rakhyvel` },
];

export const metadata = createSeoMetadata({
  title: "Vaxremsor eller rakhyvel? Vilken ska du välja | Elins val",
  description: "Vaxremsor eller rakhyvel? Elin jämför slät hud i veckor mot snabb, smärtfri rakning så du väljer rätt metod för hårborttagning.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function VaxremsorEllerRakhyvelPage() {
  return (
    <DecisionComparisonPage
      h1={"Vaxremsor eller rakhyvel?"}
      intro={"Vaxremsor och rakhyvel tar båda bort hår, men resultatet håller olika länge. Vaxremsor drar bort håret med roten så du är slät i veckor, medan en rakhyvel klipper vid ytan – snabbt och smärtfritt, men växer tillbaka snabbare."}
      badges={["Hårborttagning","Slät längre vs smärtfritt","Vardag"]}
      howToChoose={"Välj vaxremsor om du vill vara slät i veckor och inte har något emot en kort stunds känsla när du drar – bra inför sommar och resa. Välj en rakhyvel om du vill ha en snabb, smärtfri lösning som funkar precis innan du ska ut, även om du får göra om det oftare. Många vaxar inför längre slätt och rakar i vardagen."}
      verdict={"Det handlar om hur länge du vill vara slät. Vaxremsor vinner för ett resultat som håller i veckor, medan rakhyveln vinner för snabb, smärtfri hårborttagning här och nu. Vaxa inför tillfällen, raka i vardagen."}
      heroImage={heroImage}
      picks={vaxremsorEllerRakhyvelPicks}
      comparisonRows={vaxremsorEllerRakhyvelComparisonRows}
      faqItems={vaxremsorEllerRakhyvelFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={vaxremsorEllerRakhyvelRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
