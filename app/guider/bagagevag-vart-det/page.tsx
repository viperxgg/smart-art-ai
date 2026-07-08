import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/bagagevag-vart-det`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Bagagevåg – värt det eller kan du chansa?",
    href: "/guider/bagagevag-vart-det",
  },
];

const sections = [
  {
    heading: "Därför blir det dyrt vid gaten",
    bullets: [
      "Lågprisbolag väger både handbagage och incheckat strikt – och avgiften vid disken kostar ofta mer än vågen själv.",
      "Reglerna skiljer sig mellan bolag och biljettyper, så kolla alltid ditt flygbolags aktuella gränser.",
      "Det är ovissheten som skapar stressen: packar du nära gränsen vet du helt enkelt inte om du klarar dig.",
    ],
    closing:
      "En bagagevåg tar bort gissandet – du vet vikten innan du lämnar hemmet.",
  },
  {
    heading: "Värde-valet: GRIFEMA GA2006",
    bullets: [
      "Väger upp till 50 kg, med bakgrundsbelyst display och tara-funktion.",
      "Amazon visar 4,7 av 5 från 457 omdömen – köpare beskriver den som lätt, noggrann och enkel att ta med.",
      "Liten nog att följa med i väskan, så du kan väga om inför hemresan när souvenirerna åkt ner.",
    ],
    closing:
      "Du lyfter väskan för hand när du väger – riktigt tunga väskor blir lite otympliga.",
  },
  {
    heading: "Elins ärliga hoppa över",
    bullets: [
      "Packar du alltid lätt och reser med liten kabinväska? Då behöver du ingen bagagevåg.",
      "Gratis-hacket hemma: ställ dig på badrumsvågen med och utan väskan – skillnaden är väskans vikt.",
      "Vågen är för dig som packar nära gränsen, shoppar på resan eller ofta flyger lågprisbolag.",
    ],
    closing:
      "Köp inte mer än du behöver – det gäller även prylar som ska förhindra avgifter.",
  },
] as const;

const faqItems = [
  {
    question: "Hur funkar en bagagevåg?",
    answer:
      "Du fäster remmen runt väskans handtag, lyfter väskan i vågen och läser av vikten på displayen. Tara-funktionen nollställer så du kan väga exakt.",
  },
  {
    question: "Kan jag väga väskan utan bagagevåg?",
    answer:
      "Ja – väg dig själv på badrumsvågen med och utan väskan, skillnaden är väskans vikt. Det funkar bra hemma men är mindre smidigt på resan, där en liten bagagevåg är enklare.",
  },
  {
    question: "Räcker en billig bagagevåg?",
    answer:
      "För de flesta, ja. GRIFEMA GA2006 är ett prisvärt val där köpare beskriver den som lätt och noggrann (4,7 av 5 från 457 omdömen). Väg alltid med lite marginal till flygbolagets gräns.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Bagagevåg – värt det eller kan du chansa? | Elins val",
  description:
    "Elin går igenom om en bagagevåg är värd det – när den räddar dig från överviktsavgift vid gaten och när badrumsvågen hemma räcker.",
  url: pageUrl,
});

export default function BagagevagVartDetPage() {
  return (
    <GuidePage
      h1="Bagagevåg – värt det eller kan du chansa?"
      intro="Överviktsavgiften vid gaten är en av resans tråkigaste överraskningar. En liten digital bagagevåg låter dig väga väskan hemma – men alla behöver faktiskt ingen. Elin går igenom när den är värd plats i väskan och när du kan hoppa över."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt det?",
        text: "Packar du nära gränsen, shoppar på resan eller flyger ofta lågprisbolag är en bagagevåg en billig försäkring mot en dyr överraskning. Packar du alltid lätt: hoppa över – badrumsvågen hemma räcker gott.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/sommar/resa/bagagevag",
            label: "GRIFEMA bagagevåg – väg hemma, res lugnare",
          },
          {
            href: "/sommar/resa/packkuber-eller-kompressionspasar",
            label: "Packkuber eller kompressionspåsar?",
          },
          {
            href: "/sommar/resa/kabinvaska",
            label: "Cabin Max kabinväska – lätt hardcase",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/sommar/resa/bagagevag",
          label: "Bagagevåg",
          text: "GRIFEMA bagagevåg – väg hemma, res lugnare",
        },
        {
          href: "/sommar/resa/packkuber-eller-kompressionspasar",
          label: "Packning",
          text: "Packkuber eller kompressionspåsar – packa väskan smart",
        },
        {
          href: "/sommar/resa/kabinvaska-eller-ryggsack",
          label: "Väskval",
          text: "Kabinväska eller ryggsäck – vilken passar din resa?",
        },
        {
          href: "/sommar/resa",
          label: "Resa",
          text: "Se alla Elins val för resan och stranden",
        },
      ]}
    />
  );
}
