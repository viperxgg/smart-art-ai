import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  solnedgangslampaEllerStjarnprojektorComparisonRows,
  solnedgangslampaEllerStjarnprojektorFaqItems,
  solnedgangslampaEllerStjarnprojektorPicks,
  solnedgangslampaEllerStjarnprojektorRelatedLinks,
} from "@/lib/solnedgangslampa-eller-stjarnprojektor";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/solnedgangslampa-eller-stjarnprojektor`;

const heroImage = {
  src: "/comparisons/solnedgangslampa-eller-stjarnprojektor.webp",
  alt: "Solnedgångslampa eller stjärnprojektor? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Solnedgångslampa eller stjärnprojektor?", href: `/halsa/solnedgangslampa-eller-stjarnprojektor` },
];

export const metadata = createSeoMetadata({
  title: "Solnedgångslampa eller stjärnprojektor? | Elins val",
  description: "Solnedgångslampa eller stjärnprojektor? Elin jämför varmt solnedgångsljus mot en stjärnhimmel i taket så du väljer rätt stämningsljus.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function SolnedgangslampaEllerStjarnprojektorPage() {
  return (
    <DecisionComparisonPage
      h1={"Solnedgångslampa eller stjärnprojektor?"}
      intro={"Solnedgångslampa och stjärnprojektor skapar båda en mysig stämning i rummet, men med olika effekt. En solnedgångslampa kastar ett varmt, gyllene ljus på väggen som en solnedgång, medan en stjärnprojektor fyller taket med rörliga stjärnor och nebulosor för en drömlik känsla."}
      badges={["Stämningsljus","Solnedgång vs stjärnhimmel","Mys"]}
      howToChoose={"Välj en solnedgångslampa om du vill ha ett varmt, gyllene ljus och den där lugna solnedgångskänslan – snyggt för mys, avkoppling och estetiska bilder. Välj en stjärnprojektor om du vill fylla hela taket med stjärnor och färger för en drömlik känsla – populärt i barnrummet, sovrummet eller för fest. De ger olika slags mys."}
      verdict={"Det handlar om vilken stämning du vill ha. Solnedgångslampan vinner för ett varmt, stilrent ljus, medan stjärnprojektorn vinner för en lekfull, drömlik stjärnhimmel. Lugnt och stilrent – solnedgång. Drömlikt och lekfullt – stjärnprojektor."}
      heroImage={heroImage}
      picks={solnedgangslampaEllerStjarnprojektorPicks}
      comparisonRows={solnedgangslampaEllerStjarnprojektorComparisonRows}
      faqItems={solnedgangslampaEllerStjarnprojektorFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={solnedgangslampaEllerStjarnprojektorRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
