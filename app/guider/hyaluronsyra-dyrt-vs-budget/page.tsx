import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/hyaluronsyra-dyrt-vs-budget`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Hyaluronsyra: dyrt vs budget – värt skillnaden?",
    href: "/guider/hyaluronsyra-dyrt-vs-budget",
  },
];

const sections = [
  {
    heading: "Så funkar hyaluronsyra",
    bullets: [
      "Hyaluronsyra är en fuktmagnet – den binder vatten och får huden att kännas återfuktad och slätare.",
      "Den fungerar bäst i flera molekylstorlekar: mindre som går djupare och större som ligger på ytan.",
      "Tillägg som PGA (polyglutaminsyra) och vitamin B5 hjälper huden att hålla kvar fukten.",
    ],
    closing: "Själva fukt-jobbet gör hyaluronsyra oavsett pris.",
  },
  {
    heading: "Det här betalar du extra för",
    bullets: [
      "Dyrare serum kan ha lyxigare textur, doft, finare förpackning och fler tillsatta ingredienser.",
      "Men kärnan – hyaluronsyra som binder fukt – är densamma.",
    ],
    closing:
      "Ett välformulerat budgetserum (flera HA-storlekar + PGA, parfymfritt) gör i princip samma jobb.",
  },
] as const;

const faqItems = [
  {
    question: "Är dyrt hyaluronsyra-serum bättre?",
    answer:
      "Inte för själva återfuktningen. Hyaluronsyra binder fukt oavsett pris; premium betalar du för textur, doft och extra ingredienser.",
  },
  {
    question: "Hur använder jag hyaluronsyra rätt?",
    answer:
      "Applicera på lätt fuktig hud och följ upp med en fuktkräm som låser in fukten.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Hyaluronsyra: dyrt vs budget-serum – värt skillnaden? | Elins val",
  description:
    "Elin jämför dyra och billiga hyaluronsyra-serum ärligt – vad du betalar för och när ett budgetserum räcker.",
  url: pageUrl,
});

export default function HyaluronsyraDyrtVsBudgetPage() {
  return (
    <GuidePage
      h1="Hyaluronsyra: dyrt vs budget – värt skillnaden?"
      intro="Hyaluronsyra-serum finns från några tior till lyxpris. Men är dyrt verkligen bättre? Elin går igenom det ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "För ren återfuktning räcker ett välformulerat budgetserum gott – som Minimalists 2% HA + PGA. Vill du ha en lyxigare upplevelse eller fler aktiva ingredienser kan ett dyrare serum kännas värt det. Applicera alltid på lätt fuktig hud och lås in med fuktkräm.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/skonhet/hyaluronsyra-serum",
            label: "Minimalist – Elins prisvärda fukt-serum",
          },
          {
            href: "/skonhet/niacinamide-serum",
            label: "Niacinamide för fet & blandhy",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/skonhet/hyaluronsyra-serum",
          label: "Elins val",
          text: "Minimalist – Elins prisvärda fukt-serum",
        },
        {
          href: "/skonhet/niacinamide-serum",
          label: "Hudvård",
          text: "Niacinamide för fet & blandhy",
        },
      ]}
    />
  );
}
