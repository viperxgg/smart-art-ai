import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const bottleDecision: DecisionRecord = {
  reviewedAt: "2026-09-08",
  options: [
    { productSlug: "stanley-termos", model: "Stanley Classic Legendary Bottle – 1,0 L", variant: "EU-sidans Hammertone Green, SKU 100000127613. Inte 0,94 L eller andra storlekar i serien. Katalogens ASIN B000T21JFE är inte matchad mot denna aktuella variant.", chooseIf: "du behöver vakuumisolering och vill hälla drycken i en separat kopp. Tillverkaren anger dubbelväggad konstruktion och ett isolerat lock som också är kopp.", avoidIf: "du främst behöver en lätt flaska för korta turer och inte behöver isolering. Tillverkaren anger 807 g redan utan dryck; kontrollera platsen i väskan.", sourceIds: ["B1", "B2"], merchantVariantVerified: false },
    { productSlug: "twsoul-vattenflaska", model: "TWSOUL vattenflaska", variant: "Katalogposten säger 2 L med tidsmarkeringar, ASIN B0BVB3GDHG. Vi har inte verifierat volym, material, temperaturgräns, lock, täthet eller skötselråd i aktuell produktdokumentation.", chooseIf: "du vill jämföra en större flaska utan krav på verifierad isolering och först kan kontrollera volym, lock och skötsel hos säljaren. Detta är ett villkor för fortsatt jämförelse, inte en rekommendation av den obekräftade modellen.", avoidIf: "du behöver varm dryck, säker packning i väskan eller maskindisk utan att först kunna bekräfta att just flaskan är avsedd för det.", sourceIds: ["B3"], merchantVariantVerified: false },
  ],
  payMoreWhen: "Du behöver en dokumenterad funktion som saknas i din nuvarande flaska: isolering, rätt öppning eller ett lock som passar användningen. Ett större kärl eller tidsmarkeringar bevisar inte bättre hälsa. Vi har inte jämförbara aktuella totalpriser.",
  noPurchaseWhen: "Flaskan, termosen eller glaset du redan använder fungerar där du dricker. Möjlighet att fylla på kan vara viktigare än större volym. Det finns inget skäl att köpa båda bara för att de jämförs här.",
  swedishContext: "Jämför liter, tomvikt och mått med det du ska bära. Stanleys lästa EU-sida visade ett erbjudande i euro; det är inte ett verifierat svenskt totalpris eller besked om leverans till din adress. Matcha fullständigt modellnamn och volym innan du jämför butiker.",
  testing: "Vi har inte mätt temperaturhållning, läckage, falltålighet eller påverkan på hur mycket någon dricker. Stanleys funktionsbeskrivning är tillverkarens uppgift, inte vårt test. Vi saknar motsvarande aktuell dokumentation för TWSOUL.",
  limitations: "Tidsmarkeringar på en flaska är inte ett individuellt vätskeråd, och kärlets volym anger inte hur mycket du behöver dricka. Butiksvarianter, kundbetyg och bildrättigheter återstår att verifiera. Ingen av produkterna utses till allmän vinnare.",
  sources: [
    { id: "B1", title: "Stanley Europe – Classic Legendary Bottle 1,0 L", url: "https://eu.stanley1913.com/products/classic-legendary-bottle-1-1-qt", checkedAt: "2026-09-08", supports: "Aktuell grön variant/SKU, 18/8-stål, vakuumisolering, kopplock, 807 g och angiven maskindisk. Ingen matchning mot vår ASIN eller egen testverifikation." },
    { id: "B2", title: "Amazon Sverige – katalogens Stanley-ASIN", url: "https://www.amazon.se/dp/B000T21JFE", checkedAt: "2026-09-08", status: "unavailable", supports: "Läsningen gav ett tekniskt fel. Modell, volym, paket och aktuellt erbjudande kunde inte verifieras." },
    { id: "B3", title: "Amazon Sverige – katalogens TWSOUL-ASIN", url: "https://www.amazon.se/dp/B0BVB3GDHG", checkedAt: "2026-09-08", status: "unavailable", supports: "Läsningen gav ett tekniskt fel. Volym, material, skötsel och aktuellt erbjudande är inte verifierade." },
  ],
};

export const bottleQuestions = [
  { question: "Behöver jag en termos för vanligt vatten?", answer: "Bara om du behöver isolering eller någon annan särskild funktion. Om du är nöjd med temperaturen och kan fylla på fungerar den flaska eller det glas du redan har som utgångspunkt." },
  { question: "Visar tidsmarkeringarna hur mycket jag bör dricka?", answer: "Nej, en tryckt skala är inte ett personligt vätskeråd. Vi har inget test som visar att TWSOUL förbättrar dryckesvanor och rekommenderar inte att alla följer samma volym eller tidsschema." },
  { question: "Kan båda diskas i maskin?", answer: "Stanley anger maskindisk för den dokumenterade Classic Legendary Bottle 1,0 L. Det bevisar inte vad som gäller äldre varianter eller TWSOUL. Följ instruktionerna för den produkt du faktiskt har." },
  { question: "Kan jag använda TWSOUL till varm dryck?", answer: "Det kan vi inte bekräfta. Vi saknar aktuell temperaturgräns och materialdokumentation och ger därför inget sådant användningsråd." },
] as const;
export const bottleGuide: DecisionGuide = {
  path: "/halsa/termos-eller-vattenflaska", parent: { name: "Hälsa & vardag", href: "/halsa" },
  title: "Termos eller vattenflaska – behöver du isolering?",
  intro: "Välj efter temperaturen du behöver, hur du vill dricka och vad du orkar bära. En termos och en stor tidsmarkerad flaska fyller olika funktioner; ingen av dem gör automatiskt dina dryckesvanor bättre.",
  decision: bottleDecision, productPaths: ["/halsa/termos", "/halsa/motiverande-vattenflaska"], questions: bottleQuestions,
  related: [{ href: "/halsa", text: "Fler vardagsbeslut" }],
};
