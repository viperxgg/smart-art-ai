import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  leaveInEllerHaroljaComparisonRows,
  leaveInEllerHaroljaFaqItems,
  leaveInEllerHaroljaPicks,
  leaveInEllerHaroljaRelatedLinks,
} from "@/lib/leave-in-eller-harolja";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/leave-in-eller-harolja`;

const heroImage = {
  src: "/comparisons/leave-in-eller-harolja.webp",
  alt: "Leave-in eller hårolja? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Leave-in eller hårolja?", href: `/skonhet/leave-in-eller-harolja` },
];

export const metadata = createSeoMetadata({
  title: "Leave-in eller hårolja? Vilken hårvård passar dig | Elins val",
  description: "Leave-in eller hårolja? Elin jämför lätt återfuktning mot glans och antifriss så du väljer rätt vård för torrt eller frissigt hår.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function LeaveInEllerHaroljaPage() {
  return (
    <DecisionComparisonPage
      h1={"Leave-in eller hårolja?"}
      intro={"Leave-in conditioner och hårolja vårdar båda torrt hår, men vid olika tillfällen och på olika sätt. En leave-in är en lätt, återfuktande vård du sprayar eller applicerar i fuktigt hår för att reda ut och skydda, medan en hårolja är en mer koncentrerad vård som tämjer frissighet och ger glans, oftast i topparna."}
      badges={["Hårvård","Återfukta vs glans","Vardag"]}
      howToChoose={"Välj en leave-in om du vill återfukta och göra håret lättkammat direkt efter duschen, särskilt om det lätt blir torrt eller trassligt. Välj en hårolja om du vill tämja frissighet och ge glans, gärna på lite torra toppar. Många använder en leave-in i fuktigt hår och avslutar med några droppar hårolja i topparna."}
      verdict={"De kompletterar varandra. Leave-in vinner för lätt återfuktning och utredning i hela håret, medan håroljan vinner för glans och att tämja frissighet i topparna. Torrt, trassligt hår – leave-in. Frissigt, matt hår – hårolja."}
      heroImage={heroImage}
      picks={leaveInEllerHaroljaPicks}
      comparisonRows={leaveInEllerHaroljaComparisonRows}
      faqItems={leaveInEllerHaroljaFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={leaveInEllerHaroljaRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
