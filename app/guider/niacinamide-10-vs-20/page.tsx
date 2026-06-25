import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/niacinamide-10-vs-20`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Niacinamide 10% vs 20% – behöver du den starka?",
    href: "/guider/niacinamide-10-vs-20",
  },
];

const sections = [
  {
    heading: "Varför 10% oftast är sweet spot",
    bullets: [
      "Niacinamide (vitamin B3) hjälper till att matta fett och glans och jämna ut hudtonen.",
      "Hudexperter pekar på att runt 2–10% ger god effekt – att gå högre ökar sällan nyttan nämnvärt.",
      "10% räknas som en bra balans mellan effekt och mild känsla för fet och blandhy.",
    ],
    closing: "Mer niacinamide ger inte automatiskt bättre resultat.",
  },
  {
    heading: "Det här gör 20%",
    bullets: [
      "Höga halter (15–20%) marknadsförs för envis ojämn hudton, men de behöver introduceras försiktigt.",
      "Den vanligaste effekten av att gå för högt är ökad risk för irritation – inte snabbare resultat.",
    ],
    closing: "För de flesta är 20% mer än vad huden behöver i vardagen.",
  },
] as const;

const faqItems = [
  {
    question: "Är 20% niacinamide bättre än 10%?",
    answer:
      "Sällan i vardagen. Runt 2–10% ger god effekt; högre halter ökar mest risken för irritation utan tydligt bättre resultat.",
  },
  {
    question: "Kan niacinamide irritera huden?",
    answer:
      "Det är oftast väl tolererat, men höga halter kan reta känslig hud. Börja lågt och följ upp med fuktkräm.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Niacinamide 10% vs 20% – behöver du den starka? | Elins val",
  description:
    "Elin går igenom niacinamide-styrkor ärligt – varför 10% oftast räcker och när mer inte är bättre.",
  url: pageUrl,
});

export default function Niacinamide10Vs20Page() {
  return (
    <GuidePage
      h1="Niacinamide 10% vs 20% – behöver du den starka?"
      intro="Niacinamide-serum finns i allt från 5% till 20%. Mer måste väl vara bättre? Inte nödvändigtvis. Elin går igenom det ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "För daglig vård av fet och blandhy räcker 10% niacinamide gott – som The INKEY Lists serum. Spara de starkaste halterna för specifika behov och introducera dem långsamt. Börja med en ärtstor mängd och följ upp med fuktkräm.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/skonhet/niacinamide-serum",
            label: "The INKEY List 10% – Elins prisvärda val",
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
          href: "/skonhet/niacinamide-serum",
          label: "Elins val",
          text: "The INKEY List 10% – Elins prisvärda val",
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
