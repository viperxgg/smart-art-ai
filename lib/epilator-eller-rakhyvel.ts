import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const epilatorRazorDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "braun-silk-epil-9", model: "Braun Silk-épil 9-041",
      variant: "Silk-épil 9 med pivoterande huvud, inte Silk-épil 9 Flex. Modellunderlaget är från Braun AE; aktuellt svenskt paket och laddare är inte matchade.",
      chooseIf: "du vill dra ut hår med roten i stället för att raka vid hudytan och accepterar att epilering kan göra ont. Braun anger våt och torr användning samt ett separat rakhuvud och trimkam för 9-041.",
      avoidIf: "du inte vill dra ut hår eller bara behöver raka. Rakhuvudet är ett annat arbetssätt än epileringshuvudet; extra tillbehör är inte i sig ett skäl att ersätta en fungerande hyvel.",
      sourceIds: ["E1", "E2"], merchantVariantVerified: false,
    },
    {
      productSlug: "merkur-safety-razor", model: "Merkur 34C",
      variant: "Tvådelad hyvel med sluten kam, blank krom, artikel 34001. Inte justerbar Futur eller en annan ytfinish. Butiksvarianten är inte verifierad.",
      chooseIf: "du vill raka med en manuell hyvel och byta lösa blad i stället för att ladda en apparat. 34C har sluten kam och öppnas med vredet längst ned för bladbyte.",
      avoidIf: "du vill slippa hantera vassa lösa blad eller förväntar dig samma uppehåll som vid rotborttagning. Rakning kan ge skärsår och irritation; namnet safety razor är ingen garanti mot det.",
      sourceIds: ["E3", "E4", "E5"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "Rotborttagning är en funktion du faktiskt vill använda, eller ett återanvändbart hyvelhandtag passar din rutin bättre. Jämför även blad, laddare och tillbehör. Vi har inte räknat fram någon prisvinnare eller visat att något alternativ är bäst för miljön.",
  noPurchaseWhen: "Din nuvarande metod fungerar, eller du vill behålla håret. Har du redan en epilator med rakhuvud, kontrollera om den löser behovet innan du köper ytterligare en rakapparat eller hyvel.",
  swedishContext: "Kontrollera hela Braun-modellnamnet, EU-laddare och tillbehör i erbjudandet; 9-041 och 9 Flex ska inte blandas ihop. För Merkur behövs rätt lösa dubbelrakblad och en rutin för säkert bladbyte. Aktuella svenska totalpriser och paket är inte verifierade.",
  testing: "Vi har jämfört dokumenterade funktioner och AAD:s allmänna rakningsråd, inte använt produkterna. Ingen egen mätning av smärta, återväxt, batteritid eller rakresultat. Tillverkarens löfte om upp till en månad är inte ett garanterat resultat för dig.",
  limitations: "Epileringens känsla och resultat varierar. Vi lovar inte att håret blir permanent glesare. Braun-källan är en modellbeskrivning, inte en fullständig genomgång av svensk bruksanvisning och alla tillåtna kroppsdelar. Följ rätt apparatmanual. Bildrättigheter och butiksmatchning återstår.",
  sources: [
    { id: "E1", title: "Braun AE – Silk-épil 9-041", url: "https://ae.braun.com/en-ae/female-hair-removal/epilators/silk-epil-9/silk-epil-9-9-041", checkedAt: "2026-09-09", supports: "Pivoterande huvud, våt/torr användning, rakhuvud och trimkam. Regional modellbeskrivning; inget bevis för svenskt butikspaket eller individuell komfort." },
    { id: "E2", title: "Braun – hur epilatorer fungerar", url: "https://us.braun.com/en-us/female-hair-removal/epilators", checkedAt: "2026-09-09", supports: "Mekanisk rotborttagning och tillverkarens resonemang om obehag. Inte ett oberoende jämförande test." },
    { id: "E3", title: "Merkur – 34C, artikel 34001", url: "https://www.merkur-razors.com/produkt/rasierer-34c/", checkedAt: "2026-09-09", supports: "Tvådelad konstruktion, sluten kam och blank krom. Tyskt pris används inte som svenskt erbjudande." },
    { id: "E4", title: "Merkur – bladbyte för tvådelade hyvlar", url: "https://www.merkur-razors.com/wp-content/uploads/2024/07/safety-razor-two-piece-blade-replacement.pdf", checkedAt: "2026-09-09", supports: "Vred, torra händer och grepp om bladets oslipade kanter vid byte. Läs hela instruktionen före hantering." },
    { id: "E5", title: "American Academy of Dermatology – hårborttagningsmetoder", url: "https://www.aad.org/public/everyday-care/skin-care-basics/hair/remove-unwanted-hair", checkedAt: "2026-09-09", supports: "Rakning skär vid hudytan och kan behöva upprepas ofta; skärsår och irritation är möjliga. Ingen bedömning av Merkur specifikt." },
    { id: "E6", title: "American Academy of Dermatology – rakningsråd", url: "https://www.aad.org/public/everyday-care/skin-care-basics/hair/how-to-shave", checkedAt: "2026-09-09", supports: "Fukta hud och hår, använd rakprodukt, raka medhårs och låt hyveln torka mellan användningarna. Allmänna råd, inte ett produkttest." },
  ],
};
export const epilatorRazorGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" },
  path: "/skonhet/epilator-eller-rakhyvel",
  title: "Epilator eller hyvel – dra ut håret eller raka vid ytan?",
  intro: "Välj metod före prisklass. Braun Silk-épil 9-041 drar ut hår med epileringshuvudet; Merkur 34C rakar vid hudytan. Ingen av dem är ett nödvändigt köp om din nuvarande rutin fungerar.",
  decision: epilatorRazorDecision,
  productPaths: ["/skonhet/epilator/braun-silk-epil-9", "/skonhet/safety-razor"],
  related: [{ href: "/skonhet/ansiktstrimmer-eller-rakapparat-dam", text: "Behöver du i stället ett elektriskt rakverktyg?" }],
  questions: [
    { question: "Är något av alternativen smärtfritt?", answer: "Vi lovar inte det. Epilering drar ut hår och kan göra ont. Hyveln drar inte ut håren, men kan orsaka skärsår och irritation. Vi har inte testat komforten hos dessa produkter." },
    { question: "Blir håret permanent glesare?", answer: "Det är inte visat i vårt underlag för den här modellen. Köp inte epilatorn med ett löfte om permanent hårminskning som grund." },
    { question: "Hur sköter jag en hyvel?", answer: "AAD rekommenderar att fukta hud och hår, använda rakkräm eller gel och raka medhårs. Skölj under rakningen och förvara hyveln torrt. Följ Merkurs separata instruktion för bladbyte med torra händer." },
  ],
};
