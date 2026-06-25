import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/traningsband-dyrt-vs-billigt`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Dyra träningsband vs billiga – värt skillnaden?",
    href: "/guider/traningsband-dyrt-vs-billigt",
  },
];

const sections = [
  {
    heading: "Det här gör billiga latex- och TPE-band",
    bullets: [
      "Billiga band i naturlatex eller TPE ger smidig, progressiv resistans och funkar för hela kroppen.",
      "Lätta att ta med på resa och prisvärda att komma igång med.",
    ],
    closing: "För de flesta övningar gör de jobbet utan dyr prislapp.",
  },
  {
    heading: "Det här får du med dyrare tygband",
    bullets: [
      "Tygband ligger platt och rullar inte ihop på låren – skönt vid ben- och rumpövningar.",
      "De är ofta mer slitstarka och bekvämare mot huden, men kostar mer och är mindre elastiska.",
    ],
    closing:
      "Du betalar extra främst för komfort, att de inte rullar och längre livslängd.",
  },
] as const;

const faqItems = [
  {
    question: "Är dyra tygband bättre än billiga latexband?",
    answer:
      "För komfort och att de inte rullar, ja. Men billiga latex- eller TPE-band ger smidig resistans och funkar för det mesta.",
  },
  {
    question: "Vilket band ska jag börja med?",
    answer:
      "Ett prisvärt latex- eller loop-band räcker långt. Uppgradera till tygband om rullande band stör dig vid benträning.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Dyra träningsband vs billiga – värt skillnaden? | Elins val",
  description:
    "Elin jämför dyra tygband och billiga latexband ärligt – vad du betalar för och när de billiga räcker.",
  url: pageUrl,
});

export default function TraningsbandDyrtVsBilligtPage() {
  return (
    <GuidePage
      h1="Dyra träningsband vs billiga – värt skillnaden?"
      intro="Träningsband finns från några tior till dyra tygband. Behöver du de dyra? Elin går igenom det ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "Vill du ha prisvärt och mångsidigt för hela kroppen och resan räcker billiga latex- eller TPE-band gott. Gör du mycket ben- och rumpträning och stör dig på att band rullar ihop kan dyrare tygband vara värda det. Börja billigt och uppgradera bara om du saknar något.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/traning/traningsband-naturlatex",
            label: "WuGU – prisvärda latexband",
          },
          {
            href: "/traning/traningsband/loopband-jakkofoxx",
            label: "JAKKOFOXX – loop-band för ben & rumpa",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/traning/traningsband-naturlatex",
          label: "Elins val",
          text: "WuGU – prisvärda latexband",
        },
        {
          href: "/traning/traningsband/loopband-jakkofoxx",
          label: "Loop-band",
          text: "JAKKOFOXX – loop-band för ben & rumpa",
        },
      ]}
    />
  );
}
