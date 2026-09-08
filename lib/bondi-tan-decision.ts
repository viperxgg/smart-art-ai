import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { bronzingDropsDecision } from "@/lib/bronzing-drops-decision";

export const bondiTanDecision: DecisionRecord = {
  reviewedAt: "2026-09-08",
  options: [{
    productSlug: "bondi-sands-mousse",
    model: "Bondi Sands Self Tanning Foam Ultra Dark, 200 ml",
    variant: "Ultra Dark Self Tanning Foam på tillverkarens brittiska sida. Inte Aero 225 ml, Ultra Express eller ett paket med handske. Katalogens ASIN B09T2MF7K5 är inte matchad mot aktuell svensk förpackning.",
    chooseIf: "du söker den mörka Ultra Dark-varianten och kan planera in 6–8 timmars utveckling före dusch. Tillverkaren beskriver applicering med handske på ren hud utan fuktkräm.",
    avoidIf: "du vill ha lätt eller tillfällig makeupfärg, behöver en kort verkningstid eller söker parfymfritt. Formulan innehåller Parfum. Tillverkaren säger att produkten inte ska användas på skadad eller inflammerad hud.",
    sourceIds: ["F1"], merchantVariantVerified: false,
  }],
  payMoreWhen: "En verifierad formula eller användning passar ditt behov bättre. Vi har inte jämfört aktuella totalpriser, nyanser eller förbrukning och rekommenderar inte Ultra Dark enbart för att få mer färg för pengarna.",
  noPurchaseWhen: "Du är nöjd med hudens färg eller redan har en produkt som fungerar. Ett mörkare resultat är inte en förbättring i sig.",
  swedishContext: "Underlaget är brittiskt. Kontrollera Ultra Dark, 200 ml, ingredienser och instruktioner på förpackningen som säljs i Sverige. Räkna in eventuell handske och frakt; vi har inte verifierat att tillbehör ingår.",
  testing: "Vi har läst tillverkarens produktuppgifter, instruktioner och varningar. Vi har inte applicerat moussen, jämfört hudtoner eller testat doft, jämnhet, färgöverföring och hållbarhet.",
  limitations: "Tillverkaren anger ett test på underarmen 24 timmar före användning och att sluta använda produkten vid irritation. Följ hela förpackningens instruktion. Moussen saknar solskydd enligt varningen. Bildrättigheter och butiksvariant återstår.",
  sources: [{ id: "F1", title: "Bondi Sands UK – Ultra Dark Self Tanning Foam 200 ml", url: "https://bondisands.co.uk/products/self-tanning-foam-ultra-dark", checkedAt: "2026-09-08", supports: "Exakt variant och volym, 6–8 timmar före varm dusch utan tvål, appliceringshandske, Parfum samt tillverkarens test- och användningsvarningar. Ingen oberoende jämförelse eller verifiering av svensk butik." }],
};

export const bronzerOrSelfTanGuide: DecisionGuide = {
  path: "/skonhet/bronzer-eller-brun-utan-sol", parent: { name: "Skönhet", href: "/skonhet" },
  title: "Bronzer eller brun utan sol – tvätta bort eller låta färgen utvecklas?",
  intro: "Jämför e.l.f. Rose Golds tillfälliga skimmer med Bondi Sands Ultra Dark och dess 6–8 timmars verkningstid. Namngivna produkter och användningssätt hjälper mer än ett generellt vinnarbetyg.",
  decision: {
    ...bondiTanDecision,
    options: [bronzingDropsDecision.options[0], bondiTanDecision.options[0]],
    sources: [...bronzingDropsDecision.sources, ...bondiTanDecision.sources],
    payMoreWhen: "Det valda användningssättet fyller ett konkret behov. Vi har inte jämfört totalpris eller förbrukning, och tillfällig makeup är inte en likvärdig billigare version av självbrunande mousse.",
    noPurchaseWhen: "Du inte vill ändra hudton eller redan har en produkt som fungerar. Vi ser inget underlag för att rekommendera båda som en standardrutin.",
    swedishContext: "e.l.f.-källan gäller Rose Gold 30 ml i USA; Bondi Sands-källan gäller Ultra Dark 200 ml i Storbritannien. Kontrollera exakt svensk förpackning, tillbehör och totalpris innan köp.",
    testing: "Vi har jämfört tillverkarinstruktioner, inte produkter på hud. Vi kan inte utse en vinnare för jämnhet, nyans, nybörjare eller hållbarhet.",
    limitations: "e.l.f. avråder från att blanda dropparna i solskydd. Bondi Sands anger ett test på underarmen 24 timmar före användning och avråder från skadad eller inflammerad hud. Ingen av produkterna används som solskydd. Bildrättigheter och butiksmatchning återstår.",
  },
  productPaths: ["/skonhet/bronzing-drops", "/skonhet/brun-utan-sol-mousse"],
  questions: [
    { question: "Kan jag använda samma tidsplan som för Express?", answer: "Inte utifrån namnet mousse. Bondi Sands anger 6–8 timmar för den här Ultra Dark-varianten före dusch. Kontrollera instruktionen för just din förpackning." },
    { question: "Vilken är lättast att få jämn?", answer: "Det har vi inte testat. Vi anger hur tillverkarna beskriver användningen, inte vilket resultat du kommer att få." },
    { question: "Behöver jag båda?", answer: "Nej, det följer inte av att användningssätten skiljer sig. Börja med om du vill ha tillfälligt skimmer, utvecklad färg eller inget nytt alls." },
  ],
  related: [{ href: "/skonhet/sommarglow-utan-sol", text: "Jämför dropparna med St.Tropez Express" }],
};
