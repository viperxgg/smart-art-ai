import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { jojobaDecision } from "@/lib/jojoba-decision";

export const bodyOilDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "bio-oil", model: "Bio-Oil Skincare Oil Original",
    variant: "Original, inte Skincare Oil Natural, Dry Skin Gel eller Body Lotion. Den granskade produktinformationen är version 10 från 2020; den aktuella svenska flaskans storlek och formula är inte matchade.",
    chooseIf: "du vill pröva en färdig blandning av oljor för kosmetisk hudvård och accepterar parfym. Produktbladet beskriver en blandning med bland annat oljor, estrar, parfym och färgämne. Vi har inte visat bättre resultat än med jojoba.",
    avoidIf: "du söker parfymfritt, en enda olja som ingrediens eller ett säkert löfte om att ärr och bristningar försvinner. Använd inte på skadad hud enligt produktbladet.",
    sourceIds: ["B1", "B2"], merchantVariantVerified: false,
  }, jojobaDecision.options[0]],
  payMoreWhen: "Skillnaden i formula, förpackning eller användning fyller ett konkret behov som din nuvarande produkt inte löser. Vi har ingen pris- eller effektjämförelse som motiverar ett generellt merpris för någon av dessa oljor.",
  noPurchaseWhen: "Din befintliga hudvård fungerar och en extra olja bara skulle dubblera ett steg. Att en produkt har fler användningsområden eller ett välkänt namn är inte i sig skäl att köpa den.",
  swedishContext: "Kontrollera Original respektive Kanzy Jojoba Oil, flaskstorlek och innehåll på den svenska förpackningen. USA-sidan och ett äldre produktblad verifierar inte svensk variant, leverans eller totalpris. Jämför samma mängd först när erbjudandena är matchade.",
  testing: "Vi har läst tillverkarinformation, inte provat produkterna eller gjort en direkt jämförelse. Bio-Oils resultatsiffror är marknadsförda studieresultat som vi inte har granskat i fulltext. Vi utser ingen vinnare för ärr, känslig hud, absorption eller prisvärde.",
  limitations: "Bio-Oils produktblad anger utvärtes bruk, att undvika ögonen och att avbryta vid irritation. Följ den aktuella flaskans anvisningar. För Kanzy återstår certifikat- och flaskkontroll. Bildrättigheter och butiksmatchning är inte klara.",
  sources: [
    { id: "B1", title: "Bio-Oil – produktblad version 10, 2020", url: "https://m.media-amazon.com/images/I/9136W5VFY8L.pdf", checkedAt: "2026-09-09", supports: "Tillverkarblad för Skincare Oil, formula GL/SCO/001.2, publicerat 2020 och lagrat hos Amazon. Blandning med parfym och färgämne; användningsbegränsningar. Inte aktuell svensk flaskmatchning eller fullständig INCI." },
    { id: "B2", title: "Bio-Oil USA – Original Skincare Oil", url: "https://us.shopbiooil.com/products/bio-oil-skincare-oil-original", checkedAt: "2026-09-09", supports: "Aktuell amerikansk Original-produkt och dess marknadsförda användningsområden. Ingen verifiering av svensk förpackning, leverans eller oberoende resultat." },
    ...jojobaDecision.sources,
  ],
};
export const bodyOilGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" },
  path: "/skonhet/bio-oil-eller-jojobaolja",
  title: "Bio-Oil eller jojobaolja – vilken formula vill du ha?",
  intro: "Jämför en parfymerad oljeblandning med Kanzy Jojoba Oil utifrån innehåll och din rutin. Vi kallar inte den ena renare eller bättre: antalet ingredienser är inget resultatmått.",
  decision: bodyOilDecision,
  productPaths: ["/skonhet/bio-oil", "/skonhet/jojobaolja"],
  questions: [
    { question: "Är jojoba automatiskt ett bättre val?", answer: "Nej. En kort ingrediensbeskrivning säger inte hur produkten fungerar för dig. Kanzy beskriver kallpressad jojobaolja, men vi har inte jämfört känsla, tolerans eller effekt med Bio-Oil." },
    { question: "Är Original samma som Natural?", answer: "Nej, behandla dem som olika varianter. Den här jämförelsen gäller Original. Kontrollera namnet och innehållet på flaskan; för över inte uppgifter från en annan Bio-Oil-produkt." },
    { question: "Kan vi lova att ärr försvinner?", answer: "Nej. Bio-Oil marknadsför förbättrat utseende, inte ett garanterat försvinnande. Vi har inte granskat de fullständiga studierna eller testat produkten och ger inget sådant löfte." },
  ],
  related: [{ href: "/guider/jojobaolja-multitalang", text: "Behöver rutinen en extra olja?" }],
};
