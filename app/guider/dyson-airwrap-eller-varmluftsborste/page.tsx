import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/dyson-airwrap-eller-varmluftsborste`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Dyson Airwrap eller varmluftsborste?",
    href: "/guider/dyson-airwrap-eller-varmluftsborste",
  },
];

const sections = [
  {
    heading: "Det här får du med en Dyson Airwrap",
    bullets: [
      "Coanda-effekt: en luftström lindar håret runt verktyget och formar lockar och vågor – utan hög direktvärme.",
      "Skonsam värme: intelligent värmekontroll håller temperaturen under cirka 150 °C för att skydda håret.",
      "Mångsidighet: en multi-styler med flera munstycken för att torka, släta, locka och ge volym.",
      "Premiumkänsla – och på den uppkopplade modellen styrning via app.",
    ],
    closing:
      "Kort sagt gör den sådant en vanlig varmluftsborste inte kan – framför allt luftbaserad lockning med låg värme.",
  },
  {
    heading: "Det här gör en varmluftsborste",
    bullets: [
      "Torkar och ger volym i ett enda steg med en varm, ofta roterande borste.",
      "Slätar och formar håret snabbt i vardagen – BaByliss AS126E är till och med en 4-i-1 för mer mångsidighet.",
      "Kostar en bråkdel av priset.",
    ],
    closing:
      "Den täcker de flesta vardagsbehov – men den använder direkt värme (oftast varmare än Airwrapen) och ersätter inte den luftbaserade lockningen.",
  },
  {
    heading: "Den ärliga skillnaden",
    body: "Det här är ingen ren kopia – de löser delvis olika saker:",
    bullets: [
      "Vill du locka håret med luft, ha skonsammare låg värme och flera verktyg i ett? Då är det det du betalar premium för.",
      "Vill du främst torka håret och få volym snabbt i vardagen? Då gör en bra varmluftsborste jobbet för en bråkdel av priset.",
    ],
    closing:
      "En varmluftsborste blir alltså inte en Airwrap. Men för många är vardagsbehovet just torka och volym – och då behöver du inte premium-prislappen. Använd alltid värmeskydd, oavsett verktyg.",
  },
] as const;

const faqItems = [
  {
    question: "Kan en varmluftsborste locka håret som en Dyson Airwrap?",
    answer:
      "Inte på samma sätt. Airwrapen använder en luftström (Coanda-effekten) för att forma lockar med låg värme. En varmluftsborste formar och ger volym med en varm borste, men gör inte samma luftbaserade lockning.",
  },
  {
    question: "Är Dyson Airwrap skonsammare för håret?",
    answer:
      "Den håller temperaturen under cirka 150 °C med intelligent värmekontroll, vilket kan vara skonsammare än en varmluftsborstes direktvärme. Använd alltid värmeskydd oavsett verktyg.",
  },
  {
    question: "Behöver jag verkligen en Dyson Airwrap?",
    answer:
      "Om du vill ha luftbaserad lockning, låg värme och flera verktyg i ett kan den vara värd priset. Vill du mest torka håret och få volym i vardagen räcker en prisvärd varmluftsborste.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Dyson Airwrap eller varmluftsborste – värt priset? | Elins val",
  description:
    "Elin jämför Dyson Airwrap och en prisvärd varmluftsborste ärligt – vad du faktiskt får och när det billigare alternativet räcker.",
  url: pageUrl,
});

export default function DysonAirwrapEllerVarmluftsborstePage() {
  return (
    <GuidePage
      h1="Dyson Airwrap eller varmluftsborste – värt priset?"
      intro="Dyson Airwrap har en premium-prislapp, medan en varmluftsborste kostar en bråkdel. Men gör de samma jobb? Elin går igenom den ärliga skillnaden – vad du faktiskt betalar för, och när det billigare alternativet räcker."
      transparencyNote="Den här guiden länkar bara vidare till våra egna varmluftsborste-sidor, inte till Dyson."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "Dyson Airwrap är värd priset om du vill ha luftlockning, skonsam låg värme och mångsidighet, och är okej med en premium-investering. Vill du främst ha snabb torkning och volym i vardagen räcker en prisvärd varmluftsborste gott – till en bråkdel av priset. Börja där, så vet du om du ens saknar det extra.",
      }}
      cta={{
        heading: "Elins prisvärda val",
        links: [
          {
            href: "/skonhet/varmluftsborste",
            label: "Se Elins jämförelse av varmluftsborstar",
          },
          {
            href: "/skonhet/varmluftsborste/babyliss-as126e",
            label: "BaByliss AS126E – mångsidig 4-i-1",
          },
          {
            href: "/skonhet/varmluftsborste/remington-as7100",
            label: "Remington AS7100 – budgetvalet",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/skonhet/varmluftsborste-eller-fon",
          label: "Jämför",
          text: "Varmluftsborste eller vanlig fön?",
        },
        {
          href: "/skonhet/varmluftsborste-eller-plattang",
          label: "Jämför",
          text: "Varmluftsborste eller plattång?",
        },
        {
          href: "/skonhet/varmeskydd",
          label: "Värmeskydd",
          text: "Se värmeskydd innan du stylar med värme.",
        },
      ]}
    />
  );
}
