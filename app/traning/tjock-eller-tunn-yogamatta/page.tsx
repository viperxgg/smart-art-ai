import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  tjockEllerTunnYogamattaComparisonRows,
  tjockEllerTunnYogamattaFaqItems,
  tjockEllerTunnYogamattaPicks,
  tjockEllerTunnYogamattaRelatedLinks,
} from "@/lib/tjock-eller-tunn-yogamatta";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/tjock-eller-tunn-yogamatta`;

const heroImage = {
  src: "/comparisons/tjock-eller-tunn-yogamatta.webp",
  alt: "Tjock eller tunn yogamatta? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Tjock eller tunn yogamatta?", href: `/traning/tjock-eller-tunn-yogamatta` },
];

export const metadata = createSeoMetadata({
  title: "Tjock eller tunn yogamatta? Komfort mot balans | Elins val",
  description: "Tjock eller tunn yogamatta? Elin jämför knävänlig komfort mot golvkontakt och balans – så väljer du rätt matta när hemmayogan startar i höst.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function TjockEllerTunnYogamattaPage() {
  return (
    <DecisionComparisonPage
      h1={"Tjock eller tunn yogamatta?"}
      intro={"När yoga- och hemmapassen flyttar in i höst står valet mellan två skolor: en extra tjock matta som skonar knän och rygg mot hårda golv, eller en tunnare TPE-matta med bättre golvkontakt och grepp för balansövningar. Elin jämför komfort mot stabilitet så att du rullar ut rätt."}
      badges={["Hemmayoga","Komfort vs balans","Kom igång i höst"]}
      howToChoose={"Utgå från vad som gör ont – eller vad som vinglar. Känns knän, höfter och svanskota mot golvet i knästående, liggande och stilla positioner är den tjocka mattan rätt: centimetern skum gör hårda golv bekväma. Tappar du i stället balansen i stående positioner, eller glider händerna i plankor och hundar, är den tunnare TPE-mattan rätt: mer golvkontakt, stabilare stående och bra grepp åt båda hållen. Kör du mest träningspass med hopp och plankor snarare än yoga – gå på den tunnare."}
      verdict={"Elin väljer efter passet. För mjuk yoga, stretch och allt på knä vinner ProSourceFits tjocka matta – komforten gör att passen blir längre. För flöden, balans och svettigare träningspass vinner YOGATI – stadigare stående och grepp som håller. Osäker? Den som tränar mest på knä märker skillnaden först."}
      heroImage={heroImage}
      picks={tjockEllerTunnYogamattaPicks}
      comparisonRows={tjockEllerTunnYogamattaComparisonRows}
      faqItems={tjockEllerTunnYogamattaFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={tjockEllerTunnYogamattaRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
