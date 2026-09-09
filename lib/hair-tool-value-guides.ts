import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { straightenerSizeDecision } from "@/lib/mini-or-full-straightener";
import { airStylerDecision } from "@/lib/air-styler-decisions";

export const straightenerValueGuide: DecisionGuide = {
  path: "/guider/dyr-plattang-eller-budget",
  title: "Dyr plattång eller budget – vad skulle du betala extra för?",
  intro: "Börja med funktionen som saknas: valbar temperatur, format eller grepp. S8540 och S2880 visar två olika funktionspaket; de är inte ett test av hela premium- och budgetmarknaden.",
  decision: {
    ...straightenerSizeDecision,
    payMoreWhen: "En dokumenterad funktion löser ett problem i din rutin. S8540 erbjuder temperaturval som S2880 saknar. Det kan motivera en prisskillnad om du behöver funktionen, men vi har inte verifierat aktuella priser eller att en dyrare modell håller längre.",
    noPurchaseWhen: "Din befintliga plattång fungerar, har de inställningar du behöver och används enligt sin manual. Priset på en ny modell är inte i sig ett skäl att byta.",
    testing: "Vi har granskat de två modellernas dokumentation, inte mätt temperaturjämnhet, slitage, hårskador eller antal drag. Vi har inget underlag för att förklara premium eller mellanklass som bäst för de flesta.",
  },
  productPaths: ["/skonhet/plattang/remington-s8540", "/skonhet/plattang/remington-mini-s2880"],
  questions: [
    { question: "Är 185 grader alltid rätt temperatur?", answer: "Nej. PRO+ på S8540 väljer 185 °C, men det är inte modellens lägsta läge eller ett personligt råd för alla. Följ rätt manual och dess råd att börja med lägre värme." },
    { question: "Bevisar högre pris jämnare värme och längre livslängd?", answer: "Inte i vårt underlag. Sådana jämförelser kräver mätningar av de aktuella modellerna. Ett påstående om material eller beläggning är inte ett livslängdstest." },
    { question: "Hur jämför jag kostnaden?", answer: "Utgå från samma modell och paket, inklusive frakt och tillbehör du faktiskt behöver. Fråga sedan vilken funktion prisskillnaden köper. Vi anger ingen besparing utan matchade aktuella erbjudanden." },
  ],
  related: [{ href: "/skonhet/plattang", text: "Mini eller fullstor – jämför format och temperaturval" }, { href: "/skonhet/varmluftsborste-eller-plattang", text: "Saknar du i stället borstning med luft?" }],
};

export const airwrapValueDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "dyson-airwrap-id-straight-wavy", model: "Dyson Airwrap i.d. Straight+Wavy",
    variant: "Här avses i.d.-generationen och den svenska sidan för Prussian Blue/Copper, inte ursprungliga Airwrap, Co-anda2x eller Airstrait. Kontrollera tillbehörslistan för det exakta paketet; färg och paket kan skilja sig.",
    chooseIf: "du vill använda luftbaserad inrullning och den personliga i.d. curl-sekvensen, och kan lägga tid på att lära dig handgreppen. Funktionen ställs in via MyDyson-appen och Bluetooth enligt Dyson.",
    avoidIf: "du främst vill borsta och forma håret med luft, eller inte vill använda app för den personliga sekvensen. Vi har inte visat att den ger dig bättre lockar, sparar tid eller orsakar mindre hårskada än AS126E.",
    sourceIds: ["Y1", "Y2"], merchantVariantVerified: false,
  }, airStylerDecision.options[0]],
  payMoreWhen: "Du kommer att använda inrullningen och den personliga sekvensen regelbundet, utöver vanlig borststyling. Värdera den saknade funktionen innan du betalar extra; vi har inte räknat fram en verifierad prisskillnad eller testat om resultatet motiverar den för dig.",
  noPurchaseWhen: "Din nuvarande rutin redan fungerar. Du behöver inte köpa en enklare borste som ett obligatoriskt första steg mot Airwrap, och inte heller båda verktygen för att få en komplett rutin.",
  swedishContext: "Dysons svenska support anger att appfunktioner kan variera mellan marknader, kräver internet och har telefon-/systemkrav som behöver kontrolleras i appbutiken. Vi har inte testat din telefon eller verifierat ett aktuellt säljarpaket. Vid resor behöver märkplåt och kontakt kontrolleras separat.",
  testing: "Vi har läst tillverkarnas svenska produkt- och supportsidor samt BaByliss-manualen. Vi har inte jämfört hårtemperatur, skador, frizz, lockarnas hållbarhet eller arbetstid. Ett temperaturpåstående från ett varumärke bevisar inte överlägsen skonsamhet mot den andra modellen.",
  limitations: "AS126E kräver förtorkning och manuellt arbete med slingor. Airwrap-sekvensen betyder inte att hela frisyren görs automatiskt. Bildrättigheter, aktuella priser och exakt butiksmatchning är inte klara. Dyson-länken nedan leder till tillverkarens instruktioner; vi har inte produkttestat modellen.",
  sources: [
    { id: "Y1", title: "Dyson Sverige – Airwrap i.d. Straight+Wavy, Prussian Blue/Copper", url: "https://www.dyson.se/harvard/multistyler/airwrap-id/straight-wavy-prussian-blue-bright-copper", checkedAt: "2026-09-09", supports: "Den angivna i.d.-varianten, Bluetooth och personlig lockningssekvens. Sidans resultatlöften och omdömen är inte våra observationer; pris och lager används inte här." },
    { id: "Y2", title: "Dyson Sverige – stöd för Airwrap i.d.", url: "https://www.dyson.se/support/hair-care/hair-stylers/airwrap-id", checkedAt: "2026-09-09", supports: "Instruktions- och filterguider, appinstallation för personlig sekvens samt begränsningar för marknad, internet och telefon. Listade reservdelar bevisar inte innehållet i varje paket." },
    airStylerDecision.sources[0],
  ],
};
export const airwrapValueGuide: DecisionGuide = {
  path: "/guider/dyson-airwrap-eller-varmluftsborste",
  title: "Airwrap i.d. eller varmluftsborste – behöver du inrullningsfunktionen?",
  intro: "Jämför funktionen du saknar: Airwrap i.d. har en personlig lockningssekvens, medan AS126E erbjuder borst- och plattningstillbehör efter förtorkning. Vi utser ingen vinnare i snabbhet eller skonsamhet.",
  decision: airwrapValueDecision,
  productPaths: ["https://www.dyson.se/support/hair-care/hair-stylers/airwrap-id", "/skonhet/varmluftsborste/babyliss-as126e"],
  questions: [
    { question: "Gäller guiden alla Airwrap-versioner?", answer: "Nej. Den jämför i.d. Straight+Wavy med AS126E. Co-anda2x, äldre Airwrap och andra paket måste granskas separat; överför inte funktioner eller tillbehör mellan dem." },
    { question: "Är Airwrap bevisat skonsammare här?", answer: "Nej. Vi har inget jämförande test av de här två apparaternas hårpåverkan. En temperaturuppgift ensam räcker inte för att avgöra vilket resultat eller vilken hårpåverkan du får." },
    { question: "Kan AS126E ge samma automatiska lockningssekvens?", answer: "Den granskade AS126E-manualen beskriver manuell styling med borstar och andra tillbehör, inte en appstyrd inrullningssekvens. Välj utifrån vilken arbetsmetod du faktiskt vill använda." },
  ],
  related: [{ href: "/skonhet/varmluftsborste", text: "Vilka borsttillbehör behöver du?" }, { href: "/skonhet/heatless-lockar-eller-locktang", text: "Vill du i stället jämföra olika sätt att forma lockar?" }],
};
