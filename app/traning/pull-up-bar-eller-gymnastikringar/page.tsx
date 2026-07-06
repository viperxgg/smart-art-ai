import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  pullUpBarEllerGymnastikringarComparisonRows,
  pullUpBarEllerGymnastikringarFaqItems,
  pullUpBarEllerGymnastikringarPicks,
  pullUpBarEllerGymnastikringarRelatedLinks,
} from "@/lib/pull-up-bar-eller-gymnastikringar";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/pull-up-bar-eller-gymnastikringar`;

const heroImage = {
  src: "/comparisons/pull-up-bar-eller-gymnastikringar.webp",
  alt: "Pull-up bar eller gymnastikringar? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Pull-up bar eller gymnastikringar?", href: `/traning/pull-up-bar-eller-gymnastikringar` },
];

export const metadata = createSeoMetadata({
  title: "Pull-up bar eller gymnastikringar? Överkropp hemma | Elins val",
  description: "Pull-up bar eller gymnastikringar? Elin jämför enkel pull-up-träning mot mer utmanande ringträning så du väljer rätt för överkroppen hemma.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function PullUpBarEllerGymnastikringarPage() {
  return (
    <DecisionComparisonPage
      h1={"Pull-up bar eller gymnastikringar?"}
      intro={"Pull-up bar och gymnastikringar tränar båda överkroppen hemma, men på olika sätt. En pull-up bar sitter fast i dörrkarmen och är enkel för raka pull-ups och chins, medan gymnastikringar hänger fritt och tränar fler muskler samtidigt eftersom de utmanar stabiliteten."}
      badges={["Överkropp hemma","Enkelt vs utmanande","Kroppsvikt"]}
      howToChoose={"Välj en pull-up bar om du vill ha en enkel, stabil lösning för pull-ups och chins direkt i dörrkarmen. Välj gymnastikringar om du vill utmana dig mer och träna fler muskler samtidigt – de rör sig fritt, kräver mer stabilitet och kan hängas i dörrkarm, tak eller utomhus. Många börjar med en bar och lägger till ringar."}
      verdict={"Det handlar om nivå och variation. Pull-up baren vinner för enkelhet och att bara komma igång, medan gymnastikringarna vinner för variation och att de utmanar stabiliteten mer. Nybörjare – bar. Vill du ha mer utmaning och fler övningar – ringar."}
      heroImage={heroImage}
      picks={pullUpBarEllerGymnastikringarPicks}
      comparisonRows={pullUpBarEllerGymnastikringarComparisonRows}
      faqItems={pullUpBarEllerGymnastikringarFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={pullUpBarEllerGymnastikringarRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
