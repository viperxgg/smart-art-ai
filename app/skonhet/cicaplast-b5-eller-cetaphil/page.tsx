import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  cicaplastB5EllerCetaphilComparisonRows,
  cicaplastB5EllerCetaphilFaqItems,
  cicaplastB5EllerCetaphilPicks,
  cicaplastB5EllerCetaphilRelatedLinks,
} from "@/lib/cicaplast-b5-eller-cetaphil";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/cicaplast-b5-eller-cetaphil`;

const heroImage = {
  src: "/comparisons/cicaplast-b5-eller-cetaphil.webp",
  alt: "Cicaplast B5 eller Cetaphil? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Cicaplast B5 eller Cetaphil?", href: `/skonhet/cicaplast-b5-eller-cetaphil` },
];

export const metadata = createSeoMetadata({
  title: "Cicaplast B5 eller Cetaphil? Bäst för torr hud | Elins val",
  description: "Torr och stram hud i höst? Elin jämför La Roche-Posay Cicaplast Baume B5+ med Cetaphil Moisturising Cream – lugnande balsam mot enkel vardagskräm. (Annons)",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function CicaplastB5EllerCetaphilPage() {
  return (
    <DecisionComparisonPage
      h1={"Cicaplast B5 eller Cetaphil?"}
      intro={"När kylan och elementvärmen sätter igång brukar torr och stram hud följa med. Två av de mest köpta lösningarna är La Roche-Posays Cicaplast Baume B5+ och Cetaphils klassiska Moisturising Cream – men de jobbar olika. Cicaplast är en tjock balsam som lugnar hud som redan är irriterad och sliten, medan Cetaphil är den enkla vardagskrämen som håller huden mjuk dag efter dag."}
      badges={["Torr hud","Höst & vinter","Känslig hud"]}
      howToChoose={"Välj Cicaplast B5+ som punktinsats: när huden är stressad, rödflammig eller sliten av kyla och vind – den lugnande balsamtexturen gör mest nytta på utsatta områden som händer, kinder och läppområde. Välj Cetaphil som daglig bas: en stor burk enkel, parfymfri kräm för hela kroppen som håller torrheten borta i vardagen. Många kombinerar: Cetaphil dagligen och Cicaplast där huden säger ifrån."}
      verdict={"Ingen förlorare här – de kompletterar varandra. Cetaphil är basen som sköter vardagen för både kropp och ansikte, medan Cicaplast B5+ är räddaren du tar fram när vinterhuden protesterar. Ska du bara välja en: Cetaphil för hela familjen och vardagen, Cicaplast om din hud ofta blir irriterad och stram."}
      heroImage={heroImage}
      picks={cicaplastB5EllerCetaphilPicks}
      comparisonRows={cicaplastB5EllerCetaphilComparisonRows}
      faqItems={cicaplastB5EllerCetaphilFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={cicaplastB5EllerCetaphilRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
