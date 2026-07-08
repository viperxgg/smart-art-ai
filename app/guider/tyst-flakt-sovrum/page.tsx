import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/tyst-flakt-sovrum`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Tyst fläkt för sovrummet – vilken ska du välja?",
    href: "/guider/tyst-flakt-sovrum",
  },
];

const sections = [
  {
    heading: "Det här gör en fläkt sovrumsvänlig",
    bullets: [
      "Låg ljudnivå – helst ett jämnt, dämpat brus snarare än ett surr.",
      "Ett nattläge och en display som dämpas eller slocknar i mörkret.",
      "Timer så den kan stängas av medan du sover, och oscillering för jämn svalka.",
    ],
    closing:
      "Ljudet är det viktigaste – en fläkt du hör hela natten är fel fläkt.",
  },
  {
    heading: "Värde-valet: Midea FZ10",
    bullets: [
      "Oscillering, fjärrkontroll, 7-timmarstimer och ett tystare nattläge – till mellanpris.",
      "#1 bästsäljare bland tornfläktar och tyst på de lägre lägena.",
    ],
    closing:
      "Mycket sovrumsfläkt för pengarna – men den låter mer på högsta läget.",
  },
  {
    heading: "Det tysta premiumvalet: Dreo Cruiser Pro",
    bullets: [
      "Riktigt tyst drift (runt 20 dB) och en display som slocknar helt.",
      "9 hastigheter och oscillering för exakt den svalka du vill ha nattetid.",
    ],
    closing:
      "Köper du främst tystnad är det här fläkten – men den kostar mer.",
  },
] as const;

const faqItems = [
  {
    question: "Hur tyst behöver en sovrumsfläkt vara?",
    answer:
      "En tystgående fläkt ligger runt 20–35 dB upplevs som tyst nattetid. En tornfläkt på lågt läge eller med nattläge stör sällan; billiga bordsfläktar ligger ofta högre.",
  },
  {
    question: "Spelar nattläge och timer roll?",
    answer:
      "Ja. Nattläget dämpar både fläkt och display, och en timer låter den stängas av automatiskt så du inte väcks.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Tyst fläkt för sovrummet – vilken ska du välja? | Elins val",
  description:
    "Elin jämför tysta fläktar för sovrummet ärligt – nattläge, ljudnivå och när premium är värt det.",
  url: pageUrl,
});

export default function TystFlaktSovrumPage() {
  return (
    <GuidePage
      h1="Tyst fläkt för sovrummet – vilken ska du välja?"
      intro="En fläkt i sovrummet får inte störa sömnen. Elin går igenom vad som gör en fläkt sovrumsvänlig – och jämför ett prisvärt värde-val mot det tysta premiumvalet. En tystgående fläkt i sovrummet handlar om jämnt, dämpat ljud – inte bara låga decibel."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "Vill du ha en prisvärd, tyst-nog sovrumsfläkt med nattläge och timer räcker Midea FZ10 gott för de flesta. Är du känslig för ljud och vill ha absolut tystast drift är Dreo Cruiser Pro värd premium. En billig bordsfläkt kyler bra men låter ofta för mycket för känslig sömn.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/halsa/flakt/midea-fz10",
            label: "Midea FZ10 – bäst värde för sovrummet",
          },
          {
            href: "/halsa/flakt/dreo-cruiser-pro",
            label: "Dreo Cruiser Pro – tystast",
          },
          {
            href: "/guider/flakt-dyr-vs-billig",
            label: "Fläkt: dyr vs billig?",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/halsa/flakt/midea-fz10",
          label: "Värde",
          text: "Midea FZ10 – bäst värde för sovrummet",
        },
        {
          href: "/halsa/flakt/dreo-cruiser-pro",
          label: "Premium",
          text: "Dreo Cruiser Pro – tystast",
        },
        {
          href: "/halsa/flakt/honeywell-turboforce",
          label: "Budget",
          text: "Honeywell TurboForce HT900E – kraftfull budgetfläkt",
        },
        {
          href: "/halsa/dreo-cruiser-pro-eller-honeywell-ht900e",
          label: "Jämför",
          text: "Dreo Cruiser Pro eller Honeywell HT900E?",
        },
        {
          href: "/guider/flakt-dyr-vs-billig",
          label: "Jämför",
          text: "Fläkt: dyr vs billig?",
        },
      ]}
    />
  );
}
