import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const balanceBallDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    { productSlug: "gorilla-balansplatta", model: "Gorilla Sports GS Trä / Wood PRO – 40 cm", variant: "Rund träplatta, 40 × 40 × 8 cm. Den svenska GS-sidan anger högst 180 kg. Butikslänken matchades mot Wood PRO, ASIN B0DBV72564. Uppgifterna gäller inte plastversionen i samma produktfamilj.", chooseIf: "din planerade övning kräver en vippande platta och du vill ha ett redskap som kan förvaras utan att pumpas. Kontrollera övningens krav och platsen runt plattan.", avoidIf: "du behöver en stabil, stillastående yta eller väljer den som behandling utifrån ett allmänt löfte om bättre leder. Vi har inte bedömt rehabilitering eller lämplighet för dig.", sourceIds: ["B1", "B3"], merchantVariantVerified: true },
    { productSlug: "gorilla-gymboll", model: "Gorilla Sports fitnessboll – svart, 65 cm", variant: "Svart 65 cm-boll med pump, ASIN B01MSB4UKB, matchad via butikslänken. Serien finns även i 55 och 75 cm. Den svenska produktsidan anger att materialet kan behöva fyllas på i flera omgångar för att nå rätt storlek.", chooseIf: "du har en övning som kräver en stor uppblåsbar boll, har kontrollerat att 65 cm passar den och har utrymme för både bollen och rörelsen.", avoidIf: "du saknar plats för en uppblåst boll eller köper den enbart för ett löfte om bättre hållning vid skrivbordet. Vi har inget jämförande underlag som gör den till en bättre arbetsstol.", sourceIds: ["B2", "B4"], merchantVariantVerified: true },
  ],
  payMoreWhen: "Rätt storlek, en funktion du behöver eller tillbehör som saknas i det billigare paketet motiverar skillnaden. Pump anges ingå med den granskade bollen; räkna inte en extra pump som nödvändig utan att kontrollera paketet. En större boll är inte automatiskt ett bättre val.",
  noPurchaseWhen: "Dina övningar redan fungerar med det du har och du inte behöver ett instabilt redskap. Prova gärna samma storlek och typ där du tränar innan du tar upp plats hemma. Ingen av produkterna är ett obligatoriskt steg för hemmaträning.",
  swedishContext: "Kontrollera vald diameter, trä- eller plastversion och innehåll i beställningen. Mät även fri rörelseyta, inte bara platsen där redskapet ska förvaras. Följ anvisningarna för just produkten om underlag, belastning och uppblåsning. Dagens totalpris och leveransvillkor har inte jämförts.",
  testing: "Vi har läst Gorilla Sports svenska produktuppgifter och kontrollerat de länkade Amazon.se-varianterna. Vi har inte provat balans, halkskydd, lufttäthet, belastningsgränser eller ergonomi. Vi ger inget individuellt tränings- eller rehabiliteringsprogram.",
  limitations: "Belastningsuppgifterna är leverantörens, inte våra testresultat. Bollens angivna 500 kg saknar här tillräcklig beskrivning av provvillkor för att användas som råd om kroppsvikt, hopp eller extra vikter. Anti-burst är inte bevis för att en boll aldrig kan gå sönder. Bilder med verifierad användningsrätt saknas. Länkmatchningen gäller kontrolltillfället.",
  sources: [
    { id: "B1", title: "Gorilla Sports Sverige – Balansplatta GS Trä", url: "https://www.gorillasports.se/products/balansplatta-gs-tra", checkedAt: "2026-09-09", supports: "Träversionens diameter 40 cm, höjd 8 cm och angiven maximal belastning 180 kg. Marknadsföring om rehabilitering används inte som effektbevis." },
    { id: "B2", title: "Gorilla Sports Sverige – Fitnessboll", url: "https://www.gorillasports.se/products/pilatesboll-yogaboll-fitnessboll", checkedAt: "2026-09-09", supports: "55/65/75 cm, pump i paketet och information om upprepad påfyllning. Anger 500 kg utan att här klargöra provvillkoren; inget oberoende jämförande ergonomitest." },
    { id: "B3", title: "Amazon.se – Wood PRO 40 cm", url: "https://www.amazon.se/dp/B0DBV72564", checkedAt: "2026-09-09", supports: "Butikslänkens valda trävariant, ASIN och 40 × 40 × 8 cm. Inte samma sak som att alla varianter i rubriken har samma belastningsgräns." },
    { id: "B4", title: "Amazon.se – svart fitnessboll 65 cm", url: "https://www.amazon.se/dp/B01MSB4UKB", checkedAt: "2026-09-09", supports: "Butikslänkens svarta 65 cm-variant och angiven pump. Effektpåståenden om rygg och hållning har inte antagits som bevisade." },
  ],
};

export const balanceBallGuide: DecisionGuide = {
  parent: { name: "Träning", href: "/traning" },
  path: "/traning/balansplatta-eller-gymboll",
  title: "Balansplatta eller gymboll – vad kräver din övning?",
  intro: "En vippande träplatta och en uppblåsbar boll löser olika uppgifter. Börja med övningen och utrymmet hemma. Här jämför vi Wood PRO 40 cm med en svart fitnessboll på 65 cm, utan att utse en vinnare för alla.",
  decision: balanceBallDecision,
  productPaths: ["/traning/balansplatta", "/traning/gymboll"],
  questions: [
    { question: "Vilken tar minst plats när den inte används?", answer: "Plattan mäter 40 × 40 × 8 cm, medan den granskade bollen har 65 cm diameter uppblåst. Det talar för plattan vid förvaring. Utrymmet du behöver under en övning är en annan fråga och beror på rörelsen." },
    { question: "Ingår pump och blir bollen rätt storlek direkt?", answer: "Pump anges ingå. Leverantören beskriver att bollen kan behöva fyllas på i flera omgångar när materialet sträcks ut. Följ produktens anvisningar i stället för att anta att den ska nå slutdiametern omedelbart." },
    { question: "Kan jag använda 500 kg som säker gräns för min träning?", answer: "Inte utifrån den här jämförelsen. Vi saknar tillräckliga provvillkor för att översätta uppgiften till tillåten användning med kroppsvikt, hopp eller andra vikter. Kontrollera bruksanvisningen för den aktuella bollen." },
    { question: "Ska jag ersätta kontorsstolen med bollen?", answer: "Vårt underlag räcker inte för den rekommendationen. Köp inte bollen enbart för leverantörens löften om hållning eller rygg. Jämförelsen gäller redskapets format och praktiska krav, inte en bedömning av din arbetsplats." },
    { question: "Är något av redskapen ett självklart rehabiliteringsköp?", answer: "Nej, vi kan inte avgöra det från produktbeskrivningarna. Följ ett individuellt upplägg om du har fått ett sådant; en produktjämförelse ersätter inte bedömningen av vilka övningar som passar dig." },
  ],
  related: [{ href: "/traning/hantlar-eller-gummiband", text: "Behöver övningen en fast vikt eller ett band?" }],
};
