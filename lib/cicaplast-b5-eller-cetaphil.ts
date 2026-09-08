import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const moisturizerDecision: DecisionRecord = {
  reviewedAt: "2026-09-08",
  options: [
    { productSlug: "la-roche-posay-cicaplast-b5", model: "La Roche-Posay Cicaplast Baume B5+", variant: "B5+ enligt svensk tillverkarinformation, inte SPF50. Katalogens 40 ml och ASIN B00ST2GSRK är inte matchade mot aktuellt butikserbjudande.", chooseIf: "du söker ett parfymfritt balm för ett torrt område och föredrar den fylliga konsistens som tillverkaren beskriver.", avoidIf: "du behöver solskydd eller tänker använda det på öppna sår eller runt ögonen. Tillverkaren skiljer ut SPF50-versionen och avråder från dessa appliceringsområden.", sourceIds: ["M1"], merchantVariantVerified: false },
    { productSlug: "cetaphil-moisturizing-cream", model: "Cetaphil Moisturizing Cream", variant: "Svensk sida: 250 g, FIL.1765.V00. Inte verifierad som samma formula eller förpackning som katalogens 453 g, ASIN B003IO05U0.", chooseIf: "du behöver en kräm för torr hud på kropp eller ansikte och formulan passar dina tidigare erfarenheter.", avoidIf: "du vet att du reagerar på en ingrediens, eller väljer en annan marknadsvariant utan att kontrollera innehållet. Den svenska listan innehåller sötmandelolja.", sourceIds: ["M2"], merchantVariantVerified: false },
  ],
  payMoreWhen: "En annan konsistens eller förpackning löser ett konkret problem med det du använder. Vi har inget jämförande test som visar att Cicaplast ger bättre resultat. Jämför rätt variant och totalpris; gram och milliliter är inte direkt utbytbara.",
  noPurchaseWhen: "Din befintliga kräm fungerar. Köp inte båda bara för att de presenteras som en kombination.",
  swedishContext: "Cetaphils svenska sida anger 250 g, vår äldre katalog 453 g. Kontrollera innehållet på förpackningen. Svenska butikserbjudanden och totalpriser är inte verifierade.",
  testing: "Vi har läst svenska tillverkaruppgifter, inte provat krämerna. La Roche-Posays testfotnoter gäller obehandlad hud respektive självutvärdering, inte jämförelse med Cetaphil.",
  limitations: "Tillverkarpåståenden avgör inte vad din hud föredrar. Vi garanterar inte att krämerna passar tillsammans och utser ingen vinnare. Bildrättigheter och butiksvarianter återstår.",
  sources: [
    { id: "M1", title: "La Roche-Posay Sverige – Cicaplast B5+", url: "https://www.laroche-posay.se/torr-och-irriterad-hud/cicaplast-baume-b5", checkedAt: "2026-09-08", supports: "Parfymfritt, fylligt balm enligt tillverkaren. Undvik ögonområdet och öppna sår. SPF50 separat. Testfotnoterna avser inte Cetaphil." },
    { id: "M2", title: "Cetaphil Sverige – Moisturizing Cream", url: "https://www.cetaphil.se/aterfuktare/moisturizing-cream/3499320014373.html", checkedAt: "2026-09-08", supports: "250 g, FIL.1765.V00, användning på torr hud och ingredienslista med sötmandelolja. Ingen matchning mot 453 g." },
  ],
};
export const moisturizerGuide: DecisionGuide = {
  path: "/skonhet/cicaplast-b5-eller-cetaphil", parent: { name: "Skönhet", href: "/skonhet" },
  title: "Cicaplast eller Cetaphil – behöver du byta kräm?",
  intro: "Börja med vad din nuvarande kräm inte gör för dig. Jämför användning och förpackning före pris och varumärke.",
  decision: moisturizerDecision, productPaths: ["/skonhet/cicaplast-b5", "/skonhet/fuktkram"],
  questions: [
    { question: "Behöver jag båda?", answer: "Inte som standard. Behåll det som fungerar och välj en tydlig anledning innan du lägger till något. Vi har inte testat kombinationen." },
    { question: "Är den stora burken samma svenska produkt?", answer: "Det är inte verifierat. Svenska sidan anger 250 g och en identifierad formula; katalogen anger 453 g. Namnet räcker inte för att matcha dem." },
    { question: "Vilken fungerar bäst?", answer: "Vi har inget jämförande hudtest som avgör det. En ingredienslista eller ett varumärke räcker inte för att utse en vinnare." },
  ],
  related: [{ href: "/skonhet/cerave-eller-cetaphil", text: "Jämför rengöringar" }],
};
