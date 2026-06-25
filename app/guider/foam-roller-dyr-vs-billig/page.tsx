import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/foam-roller-dyr-vs-billig`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Foam roller: dyr vs billig – värt skillnaden?",
    href: "/guider/foam-roller-dyr-vs-billig",
  },
];

const sections = [
  {
    heading: "Det här gör grundjobbet",
    bullets: [
      "En enkel, fast rulle bearbetar stora muskelgrupper och rygg riktigt bra.",
      "Fast skum (EPP) håller formen länge och ger ett tydligt tryck.",
    ],
    closing: "För de flesta gör en enkel, fast rulle nästan hela jobbet.",
  },
  {
    heading: "Det här betalar du extra för",
    bullets: [
      "Texturerade rullar ger mer intensiv, punktriktad massage; vibrerande modeller lägger till en extra dimension.",
      "Set kan inkludera massageboll och fotrulle för fler ställen.",
    ],
    closing:
      "Extrafunktionerna är trevliga tillägg – sällan nödvändiga för grundåterhämtning.",
  },
] as const;

const faqItems = [
  {
    question: "Är en dyr foam roller bättre?",
    answer:
      "För grundåterhämtning gör en enkel fast rulle nästan samma jobb. Texturerade och vibrerande modeller är trevliga tillägg, inte ett måste.",
  },
  {
    question: "Hård eller mjuk rulle?",
    answer:
      "Hård (EPP) ger djupare tryck; en mjukare rulle är skonsammare om du är känslig eller nybörjare.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Foam roller: dyr vs billig – värt skillnaden? | Elins val",
  description:
    "Elin jämför dyra och billiga foam rollers ärligt – vad du betalar extra för och när en enkel rulle räcker.",
  url: pageUrl,
});

export default function FoamRollerDyrVsBilligPage() {
  return (
    <GuidePage
      h1="Foam roller: dyr vs billig – värt skillnaden?"
      intro="Foam rollers finns från en billig slät rulle till dyra texturerade och vibrerande modeller. Behöver du den dyra? Elin går igenom det ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "För vanlig återhämtning räcker en enkel, fast foam roller gott – som BODYMATE. Vill du ha mer intensiv massage eller fler verktyg kan ett texturerat set vara värt det, men det är ett tillägg, inte ett måste.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/traning/foam-roller/bodymate-care",
            label: "BODYMATE – enkel & prisvärd",
          },
          {
            href: "/traning/foam-roller/elvire-deep-tissue",
            label: "Elvire – komplett set",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/traning/foam-roller/bodymate-care",
          label: "Elins val",
          text: "BODYMATE – enkel & prisvärd",
        },
        {
          href: "/traning/foam-roller/elvire-deep-tissue",
          label: "Set",
          text: "Elvire – komplett set",
        },
      ]}
    />
  );
}
