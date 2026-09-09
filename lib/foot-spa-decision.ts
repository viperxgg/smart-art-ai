import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
export const footSpaDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "beurer-fb35-fotbad", model: "Beurer FB 35",
    variant: "FB 35, artikel 63705. Inte andra FB-modeller. Butikens aktuella förpackning och medföljande delar är inte matchade.",
    chooseIf: "du vill ha bubblor med värmefunktion och kunna lägga till vibration, och har plats för en apparat på 40 × 37 × 20,6 cm. Beurer anger passform upp till EU-storlek 44; det är ingen individuell passformsgaranti.",
    avoidIf: "du bara vill blötlägga fötterna, behöver hopfällbar förvaring eller vill köra vibration separat. Den svenska manualen tillåter inte fristående vibration. Använd inte vid öppna sår eller andra fotförändringar som manualen avråder från.",
    sourceIds: ["F1", "F2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Du verkligen kommer att använda bubblor, värmefunktionen och tillkopplingsbar vibration. De extra funktionerna måste väga upp platsbehov, sladd, tömning och rengöring. Vi har inte mätt komfort, ljud, uppvärmningstid eller kostnad per användning.",
  noPurchaseWhen: "En lämplig balja du redan har räcker för din rutin och du inte saknar de elektriska funktionerna. Köp inte en apparat enbart för ett löfte om bättre cirkulation eller en spakänsla.",
  swedishContext: "Det finns en svensk manual. Kontrollera modell, märkspänning, kontakt och tillbehör hos säljaren. Beurers globala sida anger Eurokontakt, men det verifierar inte den enskilda leveransen. Aktuellt totalpris är inte kontrollerat.",
  testing: "Vi har granskat Beurers produktsida och den svenska manualen från augusti 2026. Vi har inte provat fotbadet. Vi gör ingen medicinsk effektbedömning och utser ingen vinnare mot en viss enkel balja.",
  limitations: "Manualen anger sittande användning, urkoppling före påfyllning, flytt och rengöring samt högst 40 minuters drift följt av minst 15 minuters avsvalning. Vid diabetes, trombos, oklar smärta eller osäker lämplighet anger Beurer läkarkontakt före användning. Läs hela säkerhetsavsnittet. Bildrättigheter och butiksmatchning återstår.",
  sources: [
    { id: "F1", title: "Beurer – FB 35, artikel 63705", url: "https://www.beurer.com/global/p/63705/", checkedAt: "2026-09-09", supports: "Modell, mått, EU-storlek 44 och Eurokontakt. Sidans uppgift om separat vibration motsägs av manualen; manualens driftvillkor används här." },
    { id: "F2", title: "Beurer – FB 35, svensk manual s. 46–49", url: "https://res.cloudinary.com/beurer/image/upload/v1788246637/stibo-live/63705_FB35_2026-08-26_10_IM1_BEU.pdf", checkedAt: "2026-09-09", supports: "Vibration kräver bubblor, infrarött ljus och värmefunktion. Användnings- och säkerhetsvillkor; inga egna effektmätningar. Tillverkarens manual från 2026." },
  ],
};
export const footSpaGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" },
  path: "/skonhet/elektriskt-eller-enkelt-fotbad",
  title: "Elektriskt fotbad eller baljan du har – vad saknar du?",
  intro: "FB 35 ger fler funktioner, men också mer att förvara och rengöra. Här jämför vi behovet av elfunktioner med att behålla en lämplig balja. Vi har inte testat en namngiven budgetbalja mot Beurer.",
  decision: footSpaDecision,
  productPaths: ["/skonhet/fotbad/beurer-fb35"],
  questions: [
    { question: "Kan vibration köras separat?", answer: "Inte enligt den svenska manualen. Bubblor, infrarött ljus och värmefunktion körs tillsammans; vibration kan läggas till. Produktsidans formulering om separat val ska inte tolkas som fristående vibration." },
    { question: "Värmer den snabbt kallt vatten?", answer: "Vi har ingen mätning av uppvärmningstid och lovar ingen snabb uppvärmning från kallt vatten. En värmefunktion är inte samma sak som ett verifierat tids- eller temperaturresultat." },
    { question: "När räcker en vanlig balja?", answer: "När du endast vill blötlägga fötterna och den balja du har passar uppgiften. Den här jämförelsen ger inget skäl att köpa en ny balja om den befintliga fungerar." },
  ],
  related: [{ href: "/skonhet/fotbad", text: "Vad behöver du kontrollera före ett fotbadsköp?" }],
};
export const footSpaOverview: DecisionGuide = {
  ...footSpaGuide, path: "/skonhet/fotbad", title: "Fotbad – behöver du de elektriska funktionerna?",
  related: [{ href: footSpaGuide.path, text: "Elektriskt eller behålla baljan?" }],
};
