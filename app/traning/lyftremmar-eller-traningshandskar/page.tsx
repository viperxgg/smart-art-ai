import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  lyftremmarEllerTraningshandskarComparisonRows,
  lyftremmarEllerTraningshandskarFaqItems,
  lyftremmarEllerTraningshandskarPicks,
  lyftremmarEllerTraningshandskarRelatedLinks,
} from "@/lib/lyftremmar-eller-traningshandskar";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/lyftremmar-eller-traningshandskar`;

const heroImage = {
  src: "/comparisons/lyftremmar-eller-traningshandskar.webp",
  alt: "Lyftremmar eller träningshandskar? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Lyftremmar eller träningshandskar?", href: `/traning/lyftremmar-eller-traningshandskar` },
];

export const metadata = createSeoMetadata({
  title: "Lyftremmar eller träningshandskar? Vilket behöver du | Elins val",
  description: "Lyftremmar eller träningshandskar? Elin jämför att avlasta greppet vid tunga lyft mot att skydda händerna så du väljer rätt gymtillbehör.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function LyftremmarEllerTraningshandskarPage() {
  return (
    <DecisionComparisonPage
      h1={"Lyftremmar eller träningshandskar?"}
      intro={"Lyftremmar och träningshandskar hjälper båda greppet i gymmet, men på olika sätt. Lyftremmar avlastar greppet vid tunga lyft som marklyft och rodd så du orkar fler repetitioner, medan träningshandskar skyddar handflatorna mot skavsår och ger ett stadigare grepp."}
      badges={["Gymtillbehör","Avlasta grepp vs skydda händer","Styrka"]}
      howToChoose={"Välj lyftremmar om du lyfter tungt och märker att greppet ger upp innan musklerna – de hjälper dig hålla i stången längre i drag- och lyftövningar. Välj träningshandskar om du främst vill skydda händerna mot skavsår och valkar och ha ett stadigare grepp i allmän träning. Många använder handskar till vardags och remmar för de tyngsta lyften."}
      verdict={"Det handlar om ditt behov. Lyftremmar vinner för tunga lyft där greppet är begränsningen, medan träningshandskar vinner för handskydd och komfort i allmän träning. Tunga drag – remmar. Skydda händerna – handskar."}
      heroImage={heroImage}
      picks={lyftremmarEllerTraningshandskarPicks}
      comparisonRows={lyftremmarEllerTraningshandskarComparisonRows}
      faqItems={lyftremmarEllerTraningshandskarFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={lyftremmarEllerTraningshandskarRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
