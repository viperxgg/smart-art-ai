import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/snail-mucin-vart-hypen`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Snail mucin – värt hypen?",
    href: "/guider/snail-mucin-vart-hypen",
  },
];

const sections = [
  {
    heading: "Vad snail mucin faktiskt gör",
    bullets: [
      "Snigelsekret är en fukt-magnet som hjälper huden att kännas återfuktad och slätare.",
      "Det ger ofta en dewy lyster och en lugnande känsla, utan att kännas fett.",
      "I COSRX dual-essence kombineras det med niacinamide som hjälper jämna ut hudtonen.",
    ],
    closing:
      "I grunden är det en lätt, återfuktande ingrediens som ger glow.",
  },
  {
    heading: "Vem passar det – och vem inte",
    bullets: [
      "Bra för dig som vill ha fukt och lyster och gillar en lätt essence i rutinen.",
      'Konsistensen kan kännas lite "slajmig" i början – men den absorberas snabbt.',
    ],
    closing:
      "Det är ingen mirakelkur – men ett trevligt fukt- och lyster-steg.",
  },
  {
    heading: "Den ärliga domen",
    body: "Snail mucin gör samma grundjobb som andra fukt-ingredienser, fast med en egen dewy finish:",
    bullets: [
      "Vill du ha en viral, prisvärd fukt-essence med lyster? Då är den värd att testa.",
      "Vill du lösa ett specifikt mål (fett/glans, ojämn ton)? Då gör ett riktat serum mer.",
    ],
    closing:
      "Hypen handlar mest om den sköna, dewy återfuktningen – och den levererar den.",
  },
] as const;

const faqItems = [
  {
    question: "Vad är snail mucin?",
    answer:
      "Det är filtrerat snigelsekret som används i hudvård för att återfukta och ge lyster. I COSRX dual-essence kombineras det med niacinamide.",
  },
  {
    question: "Är snail mucin värt hypen?",
    answer:
      "För återfuktning och en dewy lyster, ja – det är en prisvärd, omtyckt ingrediens. Men det är ett fukt- och lyster-steg, inte en mirakelkur.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Snail mucin – värt hypen? | Elins val",
  description:
    "Elin går igenom snigelsekret (snail mucin) ärligt – vad det gör för huden och om det virala ryktet håller.",
  url: pageUrl,
});

export default function SnailMucinVartHypenPage() {
  return (
    <GuidePage
      h1="Snail mucin – värt hypen?"
      intro="Snigelsekret (snail mucin) har blivit en av de mest virala hudvårdsingredienserna. Men håller hypen? Elin går igenom det ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "Vill du ha en prisvärd, viral fukt-essence som ger lyster och en slät känsla är COSRX snail mucin värd hypen. Förvänta dig återfuktning och glow – inte mirakel.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/skonhet/snail-mucin-essence",
            label: "COSRX – Elins K-beauty-favorit",
          },
          {
            href: "/skonhet/niacinamide-serum",
            label: "Niacinamide för fet & blandhy",
          },
          {
            href: "/skonhet/hyaluronsyra-serum",
            label: "Hyaluronsyra för fukt",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/skonhet/snail-mucin-essence",
          label: "Elins val",
          text: "COSRX – Elins K-beauty-favorit",
        },
        {
          href: "/skonhet/niacinamide-serum",
          label: "Hudvård",
          text: "Niacinamide för fet & blandhy",
        },
        {
          href: "/skonhet/hyaluronsyra-serum",
          label: "Hudvård",
          text: "Hyaluronsyra för fukt",
        },
      ]}
    />
  );
}
