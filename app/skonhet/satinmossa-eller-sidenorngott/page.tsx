import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  satinmossaEllerSidenorngottComparisonRows,
  satinmossaEllerSidenorngottFaqItems,
  satinmossaEllerSidenorngottPicks,
  satinmossaEllerSidenorngottRelatedLinks,
} from "@/lib/satinmossa-eller-sidenorngott";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/satinmossa-eller-sidenorngott`;

const heroImage = {
  src: "/comparisons/satinmossa-eller-sidenorngott.webp",
  alt: "Satinmössa eller sidenörngott? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Satinmössa eller sidenörngott?", href: `/skonhet/satinmossa-eller-sidenorngott` },
];

export const metadata = createSeoMetadata({
  title: "Satinmössa eller sidenörngott? Skydda håret på natten | Elins val",
  description: "Satinmössa eller sidenörngott? Elin jämför att samla håret mot en len yta så du väljer rätt för mindre frissigt hår och slitage medan du sover.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function SatinmossaEllerSidenorngottPage() {
  return (
    <DecisionComparisonPage
      h1={"Satinmössa eller sidenörngott?"}
      intro={"Satinmössa och sidenörngott skyddar båda håret medan du sover och minskar frissighet och slitage, men på olika sätt. En satinmössa håller ihop håret i en mjuk mössa medan du sover, medan ett sidenörngott låter håret ligga fritt mot en len yta som ger mindre friktion mot hela huvudet."}
      badges={["Hårvård natten","Samla vs fritt","Mys"]}
      howToChoose={"Välj en satinmössa om du vill hålla ihop håret och skydda en frisyr, utsläppt eller uppsatt, medan du sover – smidigt och billigt. Välj ett sidenörngott om du vill ha en len yta som är snäll mot både hår och hud, och gilla att håret ligger fritt. Många använder mössa för att skydda en look och örngott för allround-mjukhet."}
      verdict={"Båda minskar frissighet och slitage nattetid. Satinmössan vinner för att hålla ihop och skydda en frisyr, medan sidenörngottet vinner för en len yta som är snäll mot både hår och hud. Skydda en look – mössa. Allround mjukhet – örngott."}
      heroImage={heroImage}
      picks={satinmossaEllerSidenorngottPicks}
      comparisonRows={satinmossaEllerSidenorngottComparisonRows}
      faqItems={satinmossaEllerSidenorngottFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={satinmossaEllerSidenorngottRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
