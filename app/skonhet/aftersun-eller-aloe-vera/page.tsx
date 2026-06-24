import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  aftersunEllerAloeVeraComparisonRows,
  aftersunEllerAloeVeraFaqItems,
  aftersunEllerAloeVeraPicks,
  aftersunEllerAloeVeraRelatedLinks,
} from "@/lib/aftersun-eller-aloe-vera";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/aftersun-eller-aloe-vera`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "After sun eller aloe vera?", href: "/skonhet/aftersun-eller-aloe-vera" },
];

export const metadata = createSeoMetadata({
  title: "After sun eller aloe vera? | Elins val",
  description:
    "After sun eller aloe vera? Elin jämför NIVEA After Sun och Naissance Aloe Vera så du väljer rätt svalka och fukt efter solen.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${aftersunEllerAloeVeraPicks[0].product.image}`,
    width: 1200,
    height: 900,
    alt: aftersunEllerAloeVeraPicks[0].product.imageAlt,
  },
});

export default function AftersunEllerAloeVeraPage() {
  return (
    <DecisionComparisonPage
      h1="After sun eller aloe vera?"
      intro="After sun eller aloe vera passar båda efter en dag i solen, men på olika sätt. After sun-lotion är mjukgörande hudvård för hela kroppen, medan ren aloe vera-gel ger en lätt, kylande känsla."
      badges={["Svalkar efter solen", "Återfuktar", "Sommar"]}
      howToChoose="Välj NIVEA After Sun om du vill ha en närande, mjukgörande lotion för kroppen. Välj Naissance Aloe Vera om du vill ha en lättare, svalkande gel som är mer mångsidig. Många har gärna båda hemma under sommaren."
      verdict="Båda hör hemma i sommarväskan. NIVEA After Sun får högre poäng som mjukgörande helkroppsvård efter solen, medan aloe vera-gelen är det lätta, svalkande och mest mångsidiga komplementet."
      picks={aftersunEllerAloeVeraPicks}
      comparisonRows={aftersunEllerAloeVeraComparisonRows}
      faqItems={aftersunEllerAloeVeraFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={aftersunEllerAloeVeraRelatedLinks}
    />
  );
}
