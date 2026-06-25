import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/dyr-massagepistol-vs-budget`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Dyr massagepistol eller budget – behöver du premiummärket?",
    href: "/guider/dyr-massagepistol-vs-budget",
  },
];

const sections = [
  {
    heading: "Det här får du med en premiumpistol",
    bullets: [
      'Längre slaglängd (amplitud) och högre "stall force" – den når djupare och håller trycket bättre mot tunga muskler.',
      "Ofta tystare motor, app-styrning och en mer påkostad känsla.",
    ],
    closing:
      "För riktigt djup bearbetning och tyst drift finns en verklig skillnad.",
  },
  {
    heading: "När en budgetmodell räcker",
    bullets: [
      "För vanlig hemmaåterhämtning – stelhet, lätt till medeldjup massage – räcker en budgetpistol gott.",
      "Många budgetmodeller har flera lägen och huvuden som täcker vardagsbehoven.",
    ],
    closing: "Du betalar premium främst för djup, tystnad och varumärke.",
  },
] as const;

const faqItems = [
  {
    question: "Är dyra massagepistoler bättre?",
    answer:
      "De når ofta djupare (mer amplitud och stall force) och är tystare. Men för vanlig hemmaåterhämtning räcker en budgetmodell.",
  },
  {
    question: "Vad betyder amplitud och stall force?",
    answer:
      "Amplitud är hur djupt slaget går; stall force är hur väl trycket håller när du pressar. Premium har mer av båda.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Dyrt massagepistol-märke vs budget – värt det? | Elins val",
  description:
    "Elin jämför dyra och billiga massagepistoler ärligt – vad premium ger och när en budgetmodell räcker.",
  url: pageUrl,
});

export default function DyrMassagepistolVsBudgetPage() {
  return (
    <GuidePage
      h1="Dyr massagepistol eller budget – behöver du premiummärket?"
      intro="De dyraste massagepistolerna kostar mångdubbelt mer än en budgetmodell. Vad får du för pengarna – och behöver du det? Elin går igenom det ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "Tränar du hårt och vill ha djupast möjliga bearbetning och tyst drift kan en premiumpistol vara värd priset. För de flesta hemmaanvändare räcker en prisvärd modell som Beurer MG 99 eller en funktionsrik budgetpistol gott – till en bråkdel av priset.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/halsa/massagepistol/beurer-mg-99",
            label: "Beurer MG 99 – tryggt märke",
          },
          {
            href: "/halsa/massagepistol/kraftfull",
            label: "BDBKMG – mest funktioner för pengarna",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/halsa/massagepistol/beurer-mg-99",
          label: "Elins val",
          text: "Beurer MG 99 – tryggt märke",
        },
        {
          href: "/halsa/massagepistol/kraftfull",
          label: "Budget",
          text: "BDBKMG – mest funktioner för pengarna",
        },
      ]}
    />
  );
}
