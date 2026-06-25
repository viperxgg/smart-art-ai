import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/torrschampo-dyrt-vs-billigt`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Torrschampo: dyrt vs billigt – värt skillnaden?",
    href: "/guider/torrschampo-dyrt-vs-billigt",
  },
];

const sections = [
  {
    heading: "Så funkar torrschampo",
    bullets: [
      "Grunden är stärkelse (ris-, majs- eller tapiokastärkelse) eller alkohol som suger upp fett vid hårbotten.",
      "Det fräschar upp och ger volym – men rengör inte håret. Det är en uppfräschare mellan tvättar.",
    ],
    closing:
      "Själva grundjobbet – att suga upp fett – gör i princip alla torrschampon.",
  },
  {
    heading: "Det här betalar du extra för",
    bullets: [
      "Premiumtorrschampo känns ofta mindre pudrigt/krittigt, har finare doft och lämnar mindre rester.",
      "Vissa, som Moroccanoil, har lila pigment som mattar gulton i ljust/blont hår – en finess budgetvarianter sällan har.",
    ],
    closing:
      "Budgetval suger upp fett mycket bra – men kan kännas torrare/krittigare.",
  },
] as const;

const faqItems = [
  {
    question: "Är dyrt torrschampo bättre än billigt?",
    answer:
      "Grundjobbet – att suga upp fett – gör båda. Premium ger ofta finare finish, mindre rester och ibland pigment för ljust hår.",
  },
  {
    question: "Kan torrschampo ersätta att tvätta håret?",
    answer:
      "Nej. Det fräschar upp mellan tvättar men rengör inte hårbotten.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Torrschampo: dyrt vs billigt – värt skillnaden? | Elins val",
  description:
    "Elin jämför premium- och budgettorrschampo ärligt – vad du betalar extra för och när det billiga räcker.",
  url: pageUrl,
});

export default function TorrschampoDyrtVsBilligtPage() {
  return (
    <GuidePage
      h1="Torrschampo: dyrt vs billigt – värt skillnaden?"
      intro="Torrschampo finns från några tior till premiumpris. Men gör de samma jobb? Elin går igenom det ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "Vill du bara fräscha upp håret mellan tvättar gör ett billigt torrschampo jobbet. Vill du ha finare finish, mindre rester, fin doft eller pigment för ljust hår kan ett premium-torrschampo vara värt det. Moroccanoils torrschampo är ett premiumval särskilt för ljust/blont hår.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/skonhet/torrschampo",
            label: "Läs Elins omdöme av Moroccanoil torrschampo",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/skonhet/torrschampo",
          label: "Elins val",
          text: "Läs Elins omdöme av Moroccanoil torrschampo",
        },
      ]}
    />
  );
}
