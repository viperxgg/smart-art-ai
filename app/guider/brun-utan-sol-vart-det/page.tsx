import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/brun-utan-sol-vart-det`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Brun utan sol – värt det?",
    href: "/guider/brun-utan-sol-vart-det",
  },
];

const sections = [
  {
    heading: "Det här gör brun utan sol",
    bullets: [
      "Ger en gradvis, solbränd färg på huden utan att du utsätter dig för solen.",
      "Premiumprodukter (som St.Tropez) är ofta lättare att applicera jämnt, har behagligare doft och en mer naturlig ton.",
    ],
    closing:
      "En bra mousse eller droppe ger färg du styr själv – från lätt glow till djupare ton.",
  },
  {
    heading: "Det här gör den INTE",
    bullets: [
      "Viktigt: brun utan sol ger färg, inte solskydd. Den skyddar inte mot UV.",
      "Du behöver fortfarande tänka på solen precis som vanligt.",
    ],
    closing: "Förväxla aldrig färgen med skydd – det är två olika saker.",
  },
  {
    heading: "Dyrt vs budget",
    bullets: [
      "Premium betalar du för jämnare resultat, ton och doft.",
      "Budgetalternativ (som bronzing-droppar du blandar i din kräm) kan ge fin glow billigare, men kräver ofta lite mer teknik för jämnhet.",
    ],
    closing:
      "Resultatet hänger mycket på appliceringen – handske och exfoliering först gör stor skillnad oavsett pris.",
  },
] as const;

const faqItems = [
  {
    question: "Skyddar brun utan sol mot solen?",
    answer:
      "Nej. Den ger färg men inte solskydd. Tänk på solen precis som vanligt.",
  },
  {
    question: "Hur får jag jämnast resultat?",
    answer:
      "Exfoliera först, applicera med handske och bygg färgen gradvis. Det spelar större roll än priset.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Brun utan sol – värt det? (och vad du behöver veta) | Elins val",
  description:
    "Elin går igenom brun-utan-sol ärligt – vad den gör, vad den INTE gör, och när premium är värt det.",
  url: pageUrl,
});

export default function BrunUtanSolVartDetPage() {
  return (
    <GuidePage
      h1="Brun utan sol – värt det?"
      intro="Brun utan sol ger färg utan att du behöver sola. Men gör dyrt verkligen skillnad – och vad bör du veta innan? Elin går igenom det ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "Vill du ha en jämn, naturlig färg med minimal ansträngning kan en premium brun-utan-sol som St.Tropez vara värd priset. Vill du dosera glow själv och spara pengar fungerar bronzing-droppar fint. Kom ihåg: det är färg, inte solskydd.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/skonhet/brun-utan-sol",
            label: "St.Tropez – Elins premiumval",
          },
          {
            href: "/skonhet/bronzing-drops",
            label: "e.l.f. Bronzing Drops – prisvärt glow",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/skonhet/brun-utan-sol",
          label: "Elins val",
          text: "St.Tropez – Elins premiumval",
        },
        {
          href: "/skonhet/bronzing-drops",
          label: "Glow",
          text: "e.l.f. Bronzing Drops – prisvärt glow",
        },
      ]}
    />
  );
}
