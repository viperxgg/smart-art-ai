import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { yogaPropsDecision } from "@/lib/yogablock-eller-yogabalte";

export const ringBlockDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    { productSlug: "g5-pilatesring", model: "G5 HT SPORT GPR Pilates Ring Strong – svart/gul", variant: "ASIN B0D7J1MS35. Listningen anger modell GPR, diameter 38,5 cm och vadderade grepp på in- och utsidan. Titeln nämner även ett kit med andra redskap, men paketets innehåll är inte entydigt beskrivet. Vi lovar därför ingen medföljande matta eller thigh toner.", chooseIf: "din planerade övning kräver en ring att pressa mot och du först kan bekräfta att just detta utförande och paket passar. Beteckningen Strong anger inte en verifierad motståndskraft i kilo.", avoidIf: "du behöver ett fast stöd mot golvet eller ett känt, graderat motstånd. Köp inte den här listningen för extra tillbehör innan säljaren har klargjort innehållet.", sourceIds: ["PR1"], merchantVariantVerified: false },
    yogaPropsDecision.options[0],
  ],
  payMoreWhen: "En verifierad storlek, greppform eller ytterligare del behövs i din övning. Ett större paket är inte bättre om delarna blir oanvända. Vi har inte jämfört dagens priser eller visat att Strong ger bättre resultat än andra ringar.",
  noPurchaseWhen: "Din nuvarande utrustning räcker eller du ännu inte vet vilken funktion som saknas. Att träna både yoga och pilates betyder inte automatiskt att du behöver båda redskapen.",
  swedishContext: "Kontrollera stödets höjd i den position du använder och hur många block övningen kräver. BODYMATE-länken matchar ett tvåpack på Amazon.se. Ringens svenska listning har motsägelsefull paketinformation; extra tillbehör är inte bekräftade.",
  testing: "Vi har läst produktuppgifter och kontrollerat de länkade svenska butikssidorna. Vi har inte provat ringens motstånd, greppkomfort eller blockens friktion och belastning. Underlaget visar utförande, inte att din teknik eller rörlighet förbättras.",
  limitations: "Ringens rubrik och innehållsfält räcker inte för att verifiera hela paketet. Måttfält skiljer sig också åt: diameter anges som 38,5 cm medan ett annat fält visar 37 × 37 × 5 cm. Vi har inte kontrollmätt. Godkända produktbilder saknas och ingen generell nybörjarvinnare utses.",
  sources: [
    { id: "PR1", title: "Amazon.se – G5 HT SPORT GPR Strong svart/gul", url: "https://www.amazon.se/dp/B0D7J1MS35", checkedAt: "2026-09-09", supports: "Vald färg, modellnummer GPR, angiven diameter och grepp. Breda kitpåståenden i rubriken stöds inte av ett tydligt innehållsfält; måttuppgifterna är inte konsekventa. Ingen kalibrerad motståndskurva eller egen provning." },
    ...yogaPropsDecision.sources.filter(source => ["YB1", "YB2"].includes(source.id)),
  ],
};

export const ringBlockGuide: DecisionGuide = {
  parent: { name: "Träning", href: "/traning" }, path: "/traning/pilatesring-eller-yogablock",
  title: "Pilatesring eller yogablock – motstånd eller stöd mot golvet?",
  intro: "Utgå från vad övningen kräver. En ring att pressa mot och ett korkblock att använda som stöd fyller olika funktioner. Här redovisar vi också den oklara paketinformationen för G5-ringen, så att en bred butiksrubrik inte blir ett löfte om extra utrustning.",
  decision: ringBlockDecision, productPaths: ["/traning/pilatesring", "/traning/yogablock"],
  questions: [
    { question: "Är Strong ett mått på motståndet?", answer: "Inte i vårt underlag. Det är variantens beteckning; vi har ingen kalibrerad uppgift som låter oss jämföra presskraften med andra ringar eller med vikter." },
    { question: "Ingår matta och fler redskap med ringen?", answer: "Det är inte verifierat. Rubriken nämner ett kit, medan beskrivning och innehållsfält inte tydligt bekräftar alla delar. Vi håller därför butiksknappen tillbaka tills paketet kan identifieras utan det glappet." },
    { question: "Är måtten för ett block eller för hela tvåpacket?", answer: "22 × 12 × 7,5 cm gäller varje block. Kontrollera vilken höjd och hur många stöd din övning behöver innan du köper." },
    { question: "Behöver jag båda om jag gör både yoga och pilates?", answer: "Nej. Börja med ett konkret behov i övningen. Ingen av träningsformerna gör dessa två redskap till ett obligatoriskt paket." },
  ],
  related: [{ href: "/traning/yogablock-eller-yogabalte", text: "Behöver du ett block eller ett band att hålla i?" }],
};
