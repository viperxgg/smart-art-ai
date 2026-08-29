// Content refresh 2026-08-29: länk till tjock-eller-tunn-yogamatta.
import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  yogablockEllerYogabalteComparisonRows,
  yogablockEllerYogabalteFaqItems,
  yogablockEllerYogabaltePicks,
  yogablockEllerYogabalteRelatedLinks,
} from "@/lib/yogablock-eller-yogabalte";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/yogablock-eller-yogabalte`;

const heroImage = {
  src: "/comparisons/yogablock-eller-yogabalte.webp",
  alt: "Yogablock eller yogabälte? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Yogablock eller yogabälte?", href: `/traning/yogablock-eller-yogabalte` },
];

export const metadata = createSeoMetadata({
  title: "Yogablock eller yogabälte? Vilket behöver du | Elins val",
  description: "Yogablock eller yogabälte? Elin reder ut skillnaden – stöd och höjd mot längre räckvidd i stretch – så du väljer rätt yogaredskap.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function YogablockEllerYogabaltePage() {
  return (
    <DecisionComparisonPage
      h1={"Yogablock eller yogabälte?"}
      intro={"Yogablock och yogabälte är två klassiska yogaredskap som hjälper dig i olika positioner. Ett yogablock ger stöd och höjd så du når golvet lättare och håller balansen, medan ett yogabälte förlänger räckvidden så du kan komma djupare i stretch utan att tvinga rörelsen."}
      badges={["Yoga","Stöd vs räckvidd","Nybörjare"]}
      howToChoose={"Välj ett yogablock om du vill ha stöd och höjd i positioner där du inte når golvet eller vill hålla balansen bättre. Välj ett yogabälte om du vill förlänga räckvidden i stretch – till exempel nå fötterna – och komma djupare utan att runda ryggen. Många nybörjare har nytta av båda, de kompletterar varandra."}
      verdict={"De gör olika saker och krockar inte. Yogablocket vinner för stöd och stabilitet, medan yogabältet vinner för att förlänga räckvidden i stretch. Vill du ha ett – block för stöd, bälte för stretch. Har du plats, ta gärna båda."}
      heroImage={heroImage}
      picks={yogablockEllerYogabaltePicks}
      comparisonRows={yogablockEllerYogabalteComparisonRows}
      faqItems={yogablockEllerYogabalteFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={yogablockEllerYogabalteRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
