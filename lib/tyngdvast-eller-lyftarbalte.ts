import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const vestBeltDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "eric-flag-viktvast", model: "Eric Flag viktväst – 20 kg-versionen",
      variant: "Vi granskar versionen som säljs som 20 kg: 16 löstagbara vikter märkta 1,2 kg och en justerrem. 10 kg-versionen är ett annat paket. ASIN B09WB1BF81 är inte matchat mot aktuell svensk leverans.",
      chooseIf: "du redan har en plan för extra belastning i kroppsviktsövningar och vill kunna ta bort eller lägga till enskilda vikter. Kontrollera att västens passform fungerar i dina rörelser.",
      avoidIf: "du bara vill göra vanliga promenader mer värdefulla, saknar en plan för belastningen eller behöver en garanti för komfort. Vi har inte provat passform eller effekten av att gå eller träna med västen.",
      sourceIds: ["V1"], merchantVariantVerified: false,
    },
    {
      productSlug: "cpsports-lyftarbalte", model: "C.P. Sports T9 Profi-Powerlifting-Gürtel",
      variant: "T9 med Powerschnalle, inte T4. Tillverkaren anger 9,5 cm bredd och 1 cm tjocklek i läder. ASIN B005GP8I8A, storlek och aktuellt handelspaket är inte matchade.",
      chooseIf: "du söker ett läderbälte för planerad styrketräning och vill ha T9:s hävarmsspänne. Mät midjan i navelhöjd mot tillverkarens storlekstabell och kontrollera monteringen före användning.",
      avoidIf: "du vill lägga till vikt på kroppen, vill ändra passformen utan verktyg eller förväntar dig att bältet automatiskt korrigerar tekniken eller förhindrar skador. Spännets grundläge justeras med skruvar.",
      sourceIds: ["V2"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "En verifierad kapacitet, passform eller spänneslösning behövs för din planerade träning. Välj inte en större viktkapacitet bara för att den finns. Produkterna löser olika uppgifter, så vi utser ingen gemensam prisvinnare och har inte kontrollerat dagens prisskillnad.",
  noPurchaseWhen: "Din nuvarande träning och utrustning redan fyller behovet. Du behöver inte köpa extra belastning för att en promenad ska räknas, och ett bälte är inte ett krav för att börja styrketräna. Ta reda på vad som saknas innan du köper ett redskap.",
  swedishContext: "Västpaketets vikt och bältets midjemått måste anges i rätt enheter och matchas mot den artikel som levereras. Klädstorlek räcker inte för att välja T9. Kontrollera frakt till Sverige och returvillkor om passformen inte fungerar. Vi har inte verifierat svenskt totalpris eller tävlingsgodkännande.",
  testing: "Vi har granskat de två tillverkarnas modellbeskrivningar. Vi har inte provat västen eller bältet, mätt träningsresultat eller jämfört skaderisk. Tillverkarnas påståenden om skadefritt eller effektivare tränande är inte våra slutsatser.",
  limitations: "20 kg är västens försäljningsbenämning; tillverkaren anger tolerans för totalvikten. T9:s spänne levereras inte förmonterat enligt produktsidan. Följ tillverkarens monteringsanvisning. Vi ger inget individuellt belastnings- eller rehabiliteringsprogram. Bildrättigheter och båda butikspaketen återstår att kontrollera.",
  sources: [
    { id: "V1", title: "Eric Flag – viktväst, 10 och 20 kg", url: "https://ericflag.com/en/products/weighted-vest", checkedAt: "2026-09-09", supports: "Separata viktpaket, löstagbara vikter, justerrem och tillverkarens viktolerans. Ingen verifiering av individuell passform eller träningsresultat." },
    { id: "V2", title: "C.P. Sports – T9 med Powerschnalle", url: "https://cp-sports.de/https/cp-sportsde/Profi-Powerlifting-Guertel", checkedAt: "2026-09-09", supports: "Artikel T9, läder, mått, midjemätning samt skruvjustering och ej förmonterat spänne. Inget bevis för skadefri träning eller korrekt teknik." },
  ],
};

export const vestBeltGuide: DecisionGuide = {
  parent: { name: "Träning", href: "/traning" },
  path: "/traning/tyngdvast-eller-lyftarbalte",
  title: "Viktväst eller lyftarbälte – vilken uppgift saknar du stöd för?",
  intro: "Västen lägger till belastning på kroppen. T9 är ett bälte runt midjan för styrketräning. Börja med uppgiften du vill lösa; de är inte två prisnivåer av samma redskap.",
  decision: vestBeltDecision,
  productPaths: ["/traning/viktvast", "/traning/lyftarbalte"],
  questions: [
    { question: "Är viktväst och lyftarbälte utbytbara?", answer: "Nej. Ett bälte som T9 ersätter inte västens extra vikter. Välj först utifrån hur redskapet ska användas i din befintliga träning." },
    { question: "Måste jag välja 20 kg?", answer: "Nej. Vi granskar det paketet för att tydliggöra innehållet, inte som en rekommenderad träningsbelastning. Den större kapaciteten är inget skäl att köpa mer än du behöver." },
    { question: "Kan T9 justeras snabbt mellan olika midjemått?", answer: "Spännet kan öppnas, men grundläget på bältet justeras med skruvar. Kontrollera detta om flera personer ska dela bältet." },
    { question: "Förebygger bältet skador?", answer: "Vi har inget modellbundet underlag som styrker en sådan garanti. Vår genomgång gäller konstruktion och köpval, inte medicinsk effekt eller en bedömning av din lyftteknik." },
  ],
  related: [{ href: "/traning/kettlebell-eller-hantlar", text: "Vilken belastning behöver dina övningar?" }],
};
