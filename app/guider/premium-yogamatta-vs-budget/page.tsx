import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/premium-yogamatta-vs-budget`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Dyr yogamatta eller budget – värd skillnaden?",
    href: "/guider/premium-yogamatta-vs-budget",
  },
];

const sections = [
  {
    heading: "Det här får du med en premium-matta",
    bullets: [
      "Riktigt bra grepp som håller även när du blir svettig – ofta utan att behöva handduk.",
      "Hög hållbarhet (vissa håller i många år) och ibland markeringslinjer för positionering.",
    ],
    closing:
      "För frekvent eller svettig yoga är greppet och hållbarheten en verklig skillnad.",
  },
  {
    heading: "När en budgetmatta räcker",
    bullets: [
      "För hemmabruk, stretch och lugnare pass räcker en prisvärd matta gott.",
      "En greppig TPE-matta med markeringslinjer ger mycket stabilitet för pengarna; en extra tjock matta ger mer komfort för knän och rygg.",
    ],
    closing:
      "Billiga mattor kan bli halare när de blir svettiga och slits fortare – men täcker vardagsbehovet.",
  },
] as const;

const faqItems = [
  {
    question: "Är en dyr yogamatta värd det?",
    answer:
      "För frekvent eller svettig yoga, ofta ja – bättre grepp och hållbarhet. För hemmabruk räcker en prisvärd matta.",
  },
  {
    question: "Tjock eller tunn matta?",
    answer:
      "Tjock ger mer komfort för leder och golvövningar; tunnare ger mer stabilitet i balanspositioner.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Dyr yogamatta vs budget – värd skillnaden? | Elins val",
  description:
    "Elin jämför premium- och budgetyogamattor ärligt – vad du betalar för och när en prisvärd matta räcker.",
  url: pageUrl,
});

export default function PremiumYogamattaVsBudgetPage() {
  return (
    <GuidePage
      h1="Dyr yogamatta eller budget – värd skillnaden?"
      intro="En premium-yogamatta kan kosta mångdubbelt mer än en budgetmatta. Är greppet och hållbarheten värt det? Elin går igenom det ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "Gör du yoga ofta, svettigt eller vill ha en matta för livet kan en premium-matta vara värd priset. För hemmaträning och lugnare pass räcker en prisvärd matta gott – välj greppig TPE för stabilitet eller extra tjock för komfort.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/traning/yogamatta/yogati-tpe",
            label: "YOGATI TPE – grepp & stabilitet",
          },
          {
            href: "/traning/yogamatta/prosourcefit-13mm",
            label: "ProSourceFit 13 mm – extra komfort",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/traning/yogamatta/yogati-tpe",
          label: "Elins val",
          text: "YOGATI TPE – grepp & stabilitet",
        },
        {
          href: "/traning/yogamatta/prosourcefit-13mm",
          label: "Komfort",
          text: "ProSourceFit 13 mm – extra komfort",
        },
      ]}
    />
  );
}
