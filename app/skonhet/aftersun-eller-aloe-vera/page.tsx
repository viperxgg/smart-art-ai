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
  { name: "Aftersun eller aloe vera?", href: "/skonhet/aftersun-eller-aloe-vera" },
];

export const metadata = createSeoMetadata({
  title: "Aftersun eller aloe vera – vad huden behöver | Elins val",
  description:
    "Aftersun eller aloe vera efter solen? Elin jämför svalka, fukt och känsla – och säger när ren aloe vera-gel räcker och när en aftersun gör mer nytta.",
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
      h1="Aftersun eller aloe vera?"
      intro="Aftersun eller aloe vera – vad behöver huden efter solen? Båda passar efter en dag i solen, men på olika sätt. After sun-lotion är mjukgörande hudvård för hela kroppen, medan ren aloe vera-gel ger en lätt, kylande känsla."
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
