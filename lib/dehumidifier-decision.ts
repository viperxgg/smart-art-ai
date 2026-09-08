import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { indoorAirDecision } from "@/lib/indoor-air-decision";

export const dehumidifierDecision: DecisionRecord = {
  reviewedAt: "2026-09-08",
  options: [{
    productSlug: "pro-breeze-luftavfuktare", model: "Pro Breeze luftavfuktare",
    variant: "Katalogens ASIN B0F13YQHWJ kunde inte läsas. Pro Breeze listar flera 20-litersmodeller; beteckningen 20 l/dygn räcker inte för att fastställa exakt version, kapacitet i ditt rum eller tankstorlek.",
    chooseIf: "du har ett dokumenterat behov av avfuktning och kan matcha rätt modell, manual och kapacitet vid rummets temperatur och fuktighet. Underlaget räcker ännu inte för att rekommendera just denna listning.",
    avoidIf: "du vill lösa oklar instängd luft, en läcka eller en misstänkt fuktskada enbart genom att köpa en apparat. Orsaken behöver undersökas; vi har inte verifierat modellens ljud eller lämplighet för sovrum eller våtrum.",
    sourceIds: ["D1", "D2", "A5"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Rätt modell ger en styrkt funktion och kapacitet för ditt behov. Be om förhållandena bakom liter-per-dygn-värdet och kontrollera skötsel, placering och driftkostnad. Vi har inte jämförbara priser eller energimätningar som motiverar ett dyrare val.",
  noPurchaseWhen: "Du ännu inte vet om problemet är fukt, partiklar eller ventilation, eller om det du redan har fungerar. Imma och instängd lukt kan vara tecken på ventilationsproblem; de avgör inte ensamma vilken produkt du behöver.",
  swedishContext: "Folkhälsomyndigheten rekommenderar att ventiler hålls öppna och rena utan att deras inställning ändras. I flerbostadshus tas problem först med hyresvärd, fastighetsägare eller förening; kommunens miljö- och hälsoskyddskontor kan kontaktas om hjälpen uteblir. Svensk leveransvariant och tillåten placering måste kontrolleras separat.",
  testing: "Vi har inte testat avfuktning, energiförbrukning, ljud eller automatisk avstängning. Pro Breezes modellförteckning visar att olika varianter finns; den bevisar inte vilken produkt ASIN-listningen levererar. Inga kundbetyg används som effektbevis.",
  limitations: "Modellkod, manual, svensk butiksmatchning, kapacitetens mätvillkor och bildrättigheter återstår. Vi lovar inte att en apparat åtgärdar mögel, en byggnadsskada eller hälsobesvär. Avfuktare, luftfuktare och partikelfilter har olika uppgifter.",
  sources: [
    { id: "D1", title: "Pro Breeze EU – modellförteckning", url: "https://eu.probreeze.com/pages/warranty-registration", checkedAt: "2026-09-08", supports: "Skilda modellreferenser, bland annat PB-D-08W-W-EU-1-FBA och PB-D-23W-W-EU-1-FBA. Ingen matchning mellan ASIN och modell bevisas av förteckningen." },
    { id: "D2", title: "Katalogens Pro Breeze-listning – ej läst", url: "https://www.amazon.se/dp/B0F13YQHWJ", checkedAt: "2026-09-08", status: "unavailable", supports: "Läsningen gav ett verktygsfel. Inga aktuella specifikationer eller leveransvillkor verifierades från sidan." },
    indoorAirDecision.sources.find((source) => source.id === "A5")!,
  ],
};

function airChoice(path: string, title: string, secondIndex: number, secondPath: string, intro: string): DecisionGuide {
  const second = indoorAirDecision.options[secondIndex];
  const sources = [...dehumidifierDecision.sources, ...indoorAirDecision.sources.filter(source => source.id !== "A5")];
  return {
    path, title, intro, parent: { name: "Hälsa & vardag", href: "/halsa" },
    decision: { ...dehumidifierDecision, options: [dehumidifierDecision.options[0], second], sources,
      testing: dehumidifierDecision.testing + " Levoit-uppgifterna kommer från tillverkaren; vi har inte heller testat deras fukt- eller filtereffekt.",
    },
    productPaths: ["/halsa/luftavfuktare", secondPath],
    questions: [
      { question: "Räcker det att luften känns instängd för att välja?", answer: "Nej. Folkhälsomyndigheten beskriver instängd lukt och imma som möjliga tecken på bristande ventilation. Börja med att förstå orsaken; en apparat ersätter inte en fungerande ventilation." },
      { question: "Behöver jag båda apparaterna?", answer: "Inte automatiskt. Köp först när du har ett tydligt behov och rätt modell kan fylla det. Skillnader mellan två produktkategorier är inte ett skäl att köpa två produkter." },
      { question: "Vilken är tystast i sovrummet?", answer: "Vi har inget jämförande ljudtest och utser ingen vinnare. Kontrollera exakt modell och ljud vid ett driftläge som faktiskt fyller ditt behov." },
    ],
    related: [{ href: "/halsa/luftfuktare-eller-luftrenare", text: "Tillföra fukt eller filtrera partiklar?" }],
  };
}
export const dehumidifierPurifierGuide = airChoice("/halsa/luftavfuktare-eller-luftrenare", "Behöver du minska fukt eller filtrera partiklar?", 1, "/halsa/luftrenare", "Utgå från ett konstaterat behov. Pro Breezes exakta variant är ännu inte matchad; Levoit Core 200S har ett källunderlag för partikelfiltrering. Ingen av dem rekommenderas enbart för att luften känns instängd.");
export const dehumidifierHumidifierGuide = airChoice("/halsa/luftavfuktare-eller-luftfuktare", "Behöver luften mindre eller mer fukt?", 0, "/halsa/luftfuktare", "Kontrollera luftfuktigheten och orsaken innan du väljer mellan att ta bort eller tillföra fukt. Vi visar Pro Breezes modellluckor och Levoit Classic 300S EU-underlag, utan att gissa ditt behov utifrån årstid eller en känsla.");
