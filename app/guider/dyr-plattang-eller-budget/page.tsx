import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/dyr-plattang-eller-budget`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Dyr plattång eller budget – behöver du den dyra?",
    href: "/guider/dyr-plattang-eller-budget",
  },
];

const sections = [
  {
    heading: "Det här får du med en dyr plattång",
    bullets: [
      "Riktiga keramik-/avancerade plattor som ger jämn värme utan kalla fläckar – slätare resultat på färre drag.",
      "Snabb upphettning och stabil temperatur (premiummodeller ligger ofta runt 185 °C).",
      "Ofta längre livslängd och bättre temperaturkontroll.",
    ],
    closing:
      "Premium ger jämnare värme och hållbarhet – en verklig skillnad, inte bara marknadsföring.",
  },
  {
    heading: "Faran med den allra billigaste",
    bullets: [
      "De absolut billigaste plattängerna har ofta bara en tunn keramikbeläggning som slits, ojämn värme (kalla fläckar) och ingen temperaturkontroll.",
      "Det kan bli dyrare i längden om du måste byta ofta – och tuffare mot håret.",
    ],
    closing: "Den allra billigaste är ofta en falsk besparing.",
  },
  {
    heading: "Den ärliga mellanvägen",
    bullets: [
      "Du behöver inte den dyraste – men hoppa över skräpmodellerna. En prisvärd plattång med riktig keramik, justerbar temperatur och skyddande beläggning ger dig det mesta för en bråkdel av priset.",
      "Remington S8540 Keratin Protect har keramik-/keratinbeläggning och temperaturlägen – en bra mellanväg.",
    ],
    closing: "Mellanklassen är oftast den smartaste pengar-för-värdet.",
  },
] as const;

const faqItems = [
  {
    question: "Är dyra plattänger bättre?",
    answer:
      "Ofta ja, på jämn värme, hållbarhet och temperaturkontroll. Men skillnaden mot en bra mellanklass-plattång är liten för de flesta – medan skillnaden mot de allra billigaste är stor.",
  },
  {
    question: "Vilken temperatur är lagom?",
    answer:
      "Många premiummodeller ligger runt 185 °C. Lägre temperatur och värmeskydd är skonsammare för håret.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Dyr plattång eller budget – behöver du den dyra? | Elins val",
  description:
    "Elin jämför dyra och billiga plattänger ärligt – när premium är värt det, och när en prisvärd plattång räcker.",
  url: pageUrl,
});

export default function DyrPlattangEllerBudgetPage() {
  return (
    <GuidePage
      h1="Dyr plattång eller budget – behöver du den dyra?"
      intro="En premium-plattång kostar mångdubbelt mer än en budgetmodell. Men hur stor är skillnaden – och behöver du betala för den? Elin går igenom det ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "Dyr plattång är värd det om du värmestylar ofta och vill ha absolut jämnast värme och lång livslängd. För de flesta räcker en prisvärd mellanklass-plattång med riktig keramik och temperaturkontroll gott. Använd alltid värmeskydd.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/skonhet/plattang",
            label: "Se Elins jämförelse av plattänger",
          },
          {
            href: "/skonhet/plattang/remington-s8540",
            label: "Remington S8540 – Elins prisvärda val",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/skonhet/plattang",
          label: "Elins val",
          text: "Se Elins jämförelse av plattänger",
        },
        {
          href: "/skonhet/plattang/remington-s8540",
          label: "Prisvärt",
          text: "Remington S8540 – Elins prisvärda val",
        },
      ]}
    />
  );
}
