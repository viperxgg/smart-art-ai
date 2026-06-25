import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/kettlebell-mjuk-vs-gjutjarn`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Mjuk kettlebell vs gjutjärn – värt det golvvänliga?",
    href: "/guider/kettlebell-mjuk-vs-gjutjarn",
  },
];

const sections = [
  {
    heading: "Det här får du med en mjuk kettlebell",
    bullets: [
      "Mjukt hölje (PVC med järnsand) som är snällare mot golv, tår och möbler om du tappar den.",
      "Tystare i lägenhet och tryggare i hem med barn eller husdjur.",
    ],
    closing: "Bäst när ljudnivå och golvskydd väger tungt.",
  },
  {
    heading: "Det här gör gjutjärn",
    bullets: [
      "Solid gjutjärn ger mest vikt för pengarna och håller i princip för evigt.",
      "Den kompakta formen och greppet känns stabilt i tunga svingar.",
    ],
    closing: "Men gjutjärn är hårt mot golv och tår – och låter mer.",
  },
] as const;

const faqItems = [
  {
    question: "Är en mjuk kettlebell värd det extra?",
    answer:
      "Om du tränar i lägenhet eller på hårt golv, ofta ja – den skyddar golv och tår och låter mindre. Annars ger gjutjärn mer vikt för pengarna.",
  },
  {
    question: "Vilken är bäst för nybörjare?",
    answer:
      "Båda fungerar. Mjuk är tryggare hemma; gjutjärn är billigare och mer hållbar. Välj efter ditt golv och din miljö.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Mjuk kettlebell vs gjutjärn – är det golvvänliga värt det? | Elins val",
  description:
    "Elin jämför mjuk och gjutjärns-kettlebell ärligt – när det golvvänliga är värt en högre peng och när gjutjärn räcker.",
  url: pageUrl,
});

export default function KettlebellMjukVsGjutjarnPage() {
  return (
    <GuidePage
      h1="Mjuk kettlebell vs gjutjärn – värt det golvvänliga?"
      intro="En mjuk kettlebell kostar ofta mer per kilo än en i gjutjärn. Är det golvvänliga värt det? Elin går igenom det ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "Tränar du i lägenhet, på hårt golv eller med barn och husdjur runt omkring kan en mjuk kettlebell vara värd den högre pengen. Har du en träningshörna med matta eller tränar i garaget är gjutjärn mest kettlebell för pengarna. Lägg en matta under oavsett.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/traning/kettlebell/proiron-mjuk",
            label: "PROIRON mjuk – golvsnäll",
          },
          {
            href: "/traning/kettlebell/amazon-basics",
            label: "Amazon Basics gjutjärn – mest för pengarna",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/traning/kettlebell/proiron-mjuk",
          label: "Elins val",
          text: "PROIRON mjuk – golvsnäll",
        },
        {
          href: "/traning/kettlebell/amazon-basics",
          label: "Gjutjärn",
          text: "Amazon Basics gjutjärn – mest för pengarna",
        },
      ]}
    />
  );
}
