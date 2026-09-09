import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { strapsGlovesDecision } from "@/lib/lyftremmar-eller-traningshandskar";

export const wrapsStrapsDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "asipro-handledslindor", model: "ASIPRO handledslindor – modell ej verifierad",
      variant: "Katalogens ASIN är B09WJ5QZQ8. Beteckningen 18 tum finns i katalogen men vi har inte verifierat längd, styvhet, material eller innehåll mot aktuell svensk artikel. Handledslindor och lyftremmar kan ha förväxlingsbara engelska produktnamn.",
      chooseIf: "du uttryckligen söker en linda runt handleden, inte en rem runt stången, och kan kontrollera modellens instruktioner och passform före användning. Vi kan ännu inte rekommendera just ASIPRO utifrån verifierade modellegenskaper.",
      avoidIf: "du vill få hjälp att hålla stången, saknar modellens användningsanvisning eller förväntar dig att lindan automatiskt håller handleden rak, gör ett tungt lyft säkert eller behandlar besvär. Sådana effekter är inte styrkta här.",
      sourceIds: ["W1"], merchantVariantVerified: false,
    },
    strapsGlovesDecision.options[0],
  ],
  payMoreWhen: "Du har kontrollerat att en viss konstruktion, passform eller justering behövs i din träning. Längre och styvare är inte automatiskt bättre köp. Vi har inte jämfört aktuella priser eller verifierat egenskaper som motiverar ett pristillägg för dessa modeller.",
  noPurchaseWhen: "Din nuvarande träning fungerar utan tillbehören eller du ännu inte vet vilket problem du vill lösa. Att dagens pass innehåller press eller drag är inte i sig ett skäl att köpa något. Vi rekommenderar inte båda produkterna som ett standardpaket.",
  swedishContext: "Kontrollera att artikeln faktiskt är en handledslinda eller en lyftrem, trots liknande engelska benämningar. Matcha ASIN, mått, variant, antal i paketet och instruktioner. Kontrollera leverans och returvillkor till Sverige. Aktuellt totalpris och eventuellt tävlingsgodkännande är inte verifierade.",
  testing: "Vi har inte provat produkterna. R1 gäller marklyft med och utan remmar, inte ASIPRO:s handledslindor eller en långsiktig träningsplan. Vi har inget modellbundet underlag för bättre teknik, skydd mot skador eller bibehållen greppstyrka.",
  limitations: "Butiksunderlaget gick inte att läsa för dessa ASIN. Därför ger vi inget recept på lindningstryck, antal varv, belastning eller vilka set som ska göras med remmar. Exakta modeller, användningsanvisningar, tillåtna produktbilder och svenska butikspaket återstår att verifiera.",
  sources: [
    { id: "W1", title: "ASIPRO – katalogens butikslänk, ej verifierad", url: "https://www.amazon.se/dp/B09WJ5QZQ8", status: "unavailable", checkedAt: "2026-09-09", supports: "Kontrollförsök utan läsbart produktunderlag. Bekräftar inte mått, styvhet, material, pris, lager eller användningsinstruktioner." },
    ...strapsGlovesDecision.sources.filter((source) => source.id === "R1" || source.id === "R2"),
  ],
};

export const wrapsStrapsGuide: DecisionGuide = {
  parent: { name: "Träning", href: "/traning" },
  path: "/traning/handledslindor-eller-lyftremmar",
  title: "Handledslindor eller lyftremmar – runt handleden eller runt stången?",
  intro: "Börja med vilket redskap du söker och vad det ska göra. Namnen räcker inte: en handledslinda är inte samma sak som en rem för att hålla en stång. Här skiljer vi köpfrågorna åt, men ASIPRO- och Fitgriff-modellerna är ännu inte verifierade.",
  decision: wrapsStrapsDecision,
  productPaths: ["/traning/handledslindor", "/traning/lifting-straps"],
  questions: [
    { question: "Vilken ska jag köpa först?", answer: "Välj inte efter vilket lyft som är tyngst. Beskriv först vad du saknar i den aktuella övningen, kontrollera om ett tillbehör behövs och läs anvisningen för rätt redskap. Ingen av modellerna har tillräckligt verifierat underlag för en köprekommendation här." },
    { question: "Hur hårt ska ASIPRO-lindorna sitta?", answer: "Vi saknar verifierade anvisningar för den länkade modellen och anger därför inget tryck eller antal varv. Rådet att dra åt tills handleden hålls rak är inte en verifierad instruktion. Begär modellens bruksanvisning före användning." },
    { question: "Bevarar remmar greppstyrkan om jag bara använder dem på tunga set?", answer: "Vi har inget underlag för den garantin eller för att föreskriva en sådan fördelning av dina set. R1 är inte en långtidsstudie av greppträning." },
    { question: "Kan jag lita på ordet wrist straps i butikens rubrik?", answer: "Kontrollera konstruktionen och artikelnumret, inte bara namnet. Bekräfta om produkten lindas runt handleden eller också ska fästas runt redskapet. Överför inte en annan modells instruktioner till den du köper." },
  ],
  related: [{ href: "/traning/lyftremmar-eller-traningshandskar", text: "Lyftremmar eller handskar – vilket behov vill du lösa?" }],
};
