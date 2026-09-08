import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { bedroomFanDecision, bedroomFanPaths } from "@/lib/bedroom-fan-decision";

function fanGuide(path: string, title: string, intro: string, indices: number[], questions: DecisionGuide["questions"]): DecisionGuide {
  return {
    path, title, intro,
    parent: path.startsWith("/halsa/") ? { name: "Hälsa & vardag", href: "/halsa" } : { name: "Guider", href: "/guider" },
    decision: { ...bedroomFanDecision, options: indices.map((index) => bedroomFanDecision.options[index]) },
    productPaths: indices.map((index) => bedroomFanPaths[index]),
    questions,
    related: [{ href: "/guider/tyst-flakt-sovrum", text: "Ljud och reglage i sovrummet" }],
  };
}

export const fanPriceGuide = fanGuide(
  "/guider/flakt-dyr-vs-billig", "När är en dyrare fläkt värd pengarna?",
  "Betala för en funktion du behöver och kan verifiera. Ett högre pris visar inte hur tyst fläkten är. För katalogens Dreo T1 och Honeywell HT900E saknas ännu tillräcklig modellmatchning för ett jämförande köpråd.", [0,4],
  [
    { question: "Vad ska jag jämföra innan jag betalar mer?", answer: "Utgå från användbar hastighet, placering och reglage. Kontrollera i rätt manual om display och knappljud kan stängas av, om du behöver det. Be om jämförbara ljuduppgifter innan du betalar extra för påstådd tystnad." },
    { question: "Vilken av dessa kostar minst?", answer: "Vi har inga jämförbara aktuella priser för verifierade varianter. Varken varumärke eller tornform är en prisuppgift. Kontrollera totalpris och leverans för samma modell innan du jämför." },
  ],
);
export const dreoHoneywellGuide = fanGuide(
  "/halsa/dreo-cruiser-pro-eller-honeywell-ht900e", "Dreo T1 eller Honeywell HT900E – vad behöver kontrolleras?",
  "Båda modellnamnen finns i vår katalog, men rätt version och funktioner är inte tillräckligt styrkta. Här visar vi vad som behöver kontrolleras innan du väljer. Vi utser ingen vinnare för sovrum eller skrivbord.", [0,4],
  [{ question: "Varför jämför ni inte antal hastigheter och ljudnivå?", answer: "Uppgifterna måste gälla just T1 och HT900E. En sida för Dreo TF518 eller Honeywell HT900 utan E räcker inte för att fylla luckorna. Fel variant kan ge ett missvisande köpbeslut." }],
);
export const towerDeskGuide = fanGuide(
  "/halsa/tornflakt-eller-bordsflakt", "Tornfläkt eller annan placering – vad passar din plats?",
  "Mät platsen där fläkten ska stå och kontrollera modellens avsedda användning. Vi jämför Midea FZ10-17JR med Mi Smart Standing Fan 2 Lite. Xiaomi-modellen benämns ståfläkt i den lästa specifikationen; vi antar inte att katalogens bordsfläktsetikett styrker en bordsplacering.", [1,3],
  [{ question: "Tar tornformen automatiskt minst plats?", answer: "Nej, jämför faktiska mått och placeringen som manualen tillåter. Mideas lästa sida anger 918 × 300 × 300 mm, Xiaomi 343 × 330 × 1000 mm. Måtten ensamma visar inte säker placering, luftspridning eller ljud vid din säng." }],
);
export const floorTowerGuide = fanGuide(
  "/halsa/golvflakt-eller-tornflakt", "Midea MFS400 eller FZ10-17JR – vilket underlag finns?",
  "FZ10-17JR har en läst tillverkarspecifikation. MFS400 är ännu inte säkert matchad. Därför kan vi beskriva skillnaden i underlag, men inte påstå att den ena ger mer luft eller är tystare.", [2,1],
  [{ question: "Kan jag välja efter golvfläkt eller tornfläkt?", answer: "Formen kan hjälpa dig planera platsen. Den ersätter inte uppgifter om exakt modell, reglage och ljud vid användbar hastighet. För MFS400 behöver även funktionerna verifieras innan du jämför dem med FZ10-17JR." }],
);
export const fanHubGuide = fanGuide(
  "/halsa/flakt", "Vilken fläkt passar din plats och dina vanor?",
  "Börja med vad du behöver ändra: placering, reglage eller ljudet från din nuvarande fläkt. Här samlar vi fem modellunderlag med tydliga källgränser. Du behöver inte byta en fläkt som redan fungerar för dig.", [0,1,2,3,4],
  [{ question: "Var börjar jag?", answer: "För sömn: läs guiden om ljud och reglage. För pris: välj vilka funktioner du verkligen använder innan du jämför samma verifierade variant i butik. För plats: mät och läs modellens monterings- och placeringsanvisning." }],
);
fanHubGuide.related = [
  { href: "/guider/tyst-flakt-sovrum", text: "Vad behöver du kontrollera för sovrummet?" },
  { href: "/guider/flakt-dyr-vs-billig", text: "När är det värt att betala mer?" },
  { href: "/halsa/tornflakt-eller-bordsflakt", text: "Vilket format passar platsen?" },
  { href: "/halsa/golvflakt-eller-tornflakt", text: "MFS400 eller FZ10-17JR?" },
];
