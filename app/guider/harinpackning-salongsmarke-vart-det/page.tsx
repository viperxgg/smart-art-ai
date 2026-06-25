import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/harinpackning-salongsmarke-vart-det`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Hårinpackning – är salongsmärket värt det?",
    href: "/guider/harinpackning-salongsmarke-vart-det",
  },
];

const sections = [
  {
    heading: "Det här får du med en salongsmask",
    bullets: [
      "Ofta mer koncentrerade, väl avvägda formler – L'Oréal Absolut Repair har t.ex. protein + gold quinoa för att bygga upp torrt, skadat hår.",
      "En lyxigare känsla, doft och konsistens.",
    ],
    closing:
      "För riktigt torrt eller skadat hår kan en proteinrik salongsmask göra tydlig skillnad.",
  },
  {
    heading: "När budget räcker",
    bullets: [
      "Grundkonceptet – en proteinrik/närande mask för torrt hår – finns även i billigare masker.",
      "För lättare underhåll och normalt hår räcker ofta en prisvärd inpackning.",
    ],
    closing:
      "Du betalar premium för koncentration, formel och upplevelse – inte för en magisk ingrediens.",
  },
] as const;

const faqItems = [
  {
    question: "Är salongshårinpackning värd pengarna?",
    answer:
      "För riktigt torrt eller skadat hår, ofta ja – formlerna är mer koncentrerade. För lättare behov räcker en budgetmask.",
  },
  {
    question: "Hur ofta ska jag använda en hårinpackning?",
    answer: "Oftast en till två gånger i veckan, beroende på hur torrt håret är.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Hårinpackning – är salongsmärket värt det? | Elins val",
  description:
    "Elin jämför salongs- och budgethårinpackningar ärligt – när den dyrare masken är värd det.",
  url: pageUrl,
});

export default function HarinpackningSalongsmarkeVartDetPage() {
  return (
    <GuidePage
      h1="Hårinpackning – är salongsmärket värt det?"
      intro="En salongshårinpackning kostar mer än en mask från mataffären. Men gör den skillnad? Elin går igenom det ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "Har du riktigt torrt, blekt eller skadat hår kan en salongsmask som Absolut Repair vara värd priset. Behöver håret mest lite extra mjukhet då och då räcker en billigare hårinpackning gott. Matcha masken efter hur slitet håret faktiskt är.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/skonhet/harinpackning",
            label: "Läs Elins omdöme av Absolut Repair",
          },
          {
            href: "/skonhet/harolja-eller-varmeskydd",
            label: "Hårolja eller värmeskydd?",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/skonhet/harinpackning",
          label: "Elins val",
          text: "Läs Elins omdöme av Absolut Repair",
        },
        {
          href: "/skonhet/harolja-eller-varmeskydd",
          label: "Jämför",
          text: "Hårolja eller värmeskydd?",
        },
      ]}
    />
  );
}
