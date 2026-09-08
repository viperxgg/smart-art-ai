import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { niacinamideDecision } from "@/lib/niacinamide-decision";

export const vitaminCDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "la-roche-posay-vitamin-c10-serum",
    model: "La Roche-Posay Pure Vitamin C10 Serum, 30 ml",
    variant: "C10 enligt brittisk produktinformation: 10% C-vitamin och salicylsyra. Inte C12. Katalogens ASIN B07QL32ZLR är inte verifierad mot en aktuell svensk förpackning.",
    chooseIf: "du vill undersöka ett serum som tillverkaren riktar mot brist på lyster, och har kontrollerat att det verkligen är C10 du jämför. Det är ett angivet användningsområde, inte ett löfte om resultat för dig.",
    avoidIf: "du söker ett parfymfritt serum: Parfum finns i den publicerade ingredienslistan. Välj inte utifrån att namnet C-vitamin ensamt skulle beskriva hela formulan eller dess tolerans.",
    sourceIds: ["V1", "V2", "V3"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Du kan identifiera en relevant skillnad i den färdiga produkten och ett aktuellt totalpris. Vi har inget jämförande underlag som visar att C10, C12 eller ett niacinamidserum ger bäst värde för dig. Högre procenttal motiverar inte automatiskt ett dyrare köp.",
  noPurchaseWhen: "Din rutin fungerar och du inte har ett tydligt behov av ytterligare ett serum. En ingredienstrend är inget krav på att byta eller lägga till produkter.",
  swedishContext: "Det svenska märkesinnehållet beskriver fortfarande C10, men produktlänken leder vid kontroll till C12 med 12% C-vitamin. Kontrollera namn, koncentration, volym och ingredienslista på den vara du erbjuds. Vi har inte fastställt att C10 är slut hos alla svenska återförsäljare.",
  testing: "Vi har jämfört tillverkarens produktinformation och följt den svenska produktlänken. Vi har inte testat serumet på huden, kontrollerat innehållet i en flaska eller genomfört ett jämförande effekttest.",
  limitations: "Den brittiska ingredienslistan är tekniskt dåligt formaterad och tillverkaren hänvisar till förpackningens aktuella lista. Vi gör därför ingen fullständig formelmatchning. Bildrättigheter, svensk butiksvariant och pris är inte verifierade. Tillverkarens känslig-hud-marknadsföring är ingen individuell toleransgaranti.",
  sources: [
    { id: "V1", title: "La Roche-Posay UK – Pure Vitamin C10 Serum, 30 ml", url: "https://www.laroche-posay.co.uk/en_GB/pure-vitamin-c10-serum-for-sensitive-skin-30ml/3337875660570.html", checkedAt: "2026-09-09", supports: "Identifierar C10, 30 ml, 10% C-vitamin, salicylsyra och Parfum. Produkten marknadsförs för bland annat lyster. Ingen svensk erbjudandematchning eller oberoende effektjämförelse." },
    { id: "V2", title: "La Roche-Posay Sverige – serumöversikt", url: "https://www.laroche-posay.se/serum/la-roche-posay-serum", checkedAt: "2026-09-09", supports: "Artikeln beskriver C10 med 10% C-vitamin; dess produktlänk leder vid kontroll till C12. Artikeln styrker inte att dagens svenska butiksvara är C10." },
    { id: "V3", title: "La Roche-Posay Sverige – Pure Vitamin C12", url: "https://www.laroche-posay.se/vitamin-c/vitamin-c12-serum", checkedAt: "2026-09-09", supports: "Den aktuella sidan avser C12, 30 ml och 12% C-vitamin. Dessa specifikationer får inte överföras till katalogens C10. Inget bevis på att C12 är ett bättre köp." },
  ],
};

export const vitaminCOrNiacinamideGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" },
  path: "/skonhet/vitamin-c-eller-niacinamid",
  title: "Vitamin C eller niacinamid – behöver du ett nytt serum?",
  intro: "Börja med vad du vill förändra och vad du redan använder. Här jämför vi två namngivna produkter, inte alla C-vitamin- och niacinamidserum. INKEY är inte automatiskt det mildare valet, och C10 ska inte förväxlas med C12.",
  decision: {
    ...vitaminCDecision,
    options: [...vitaminCDecision.options, ...niacinamideDecision.options],
    sources: [...vitaminCDecision.sources, ...niacinamideDecision.sources],
    limitations: "Ingen av produkterna har testats av oss på huden eller mot den andra. INKEYs kombinationsråd är inte helt samstämmiga mellan huvudtext och FAQ. Vi ger ingen generell rekommendation att kombinera dessa serum; kontrollera råden för de exakta förpackningarna. Svenska erbjudanden och bildrättigheter återstår att verifiera.",
  },
  productPaths: ["/skonhet/vitamin-c-serum", "/skonhet/niacinamide-serum"],
  questions: [
    { question: "Är niacinamid alltid det mildare nybörjarvalet?", answer: "Det har vi inte belägg för. Ingrediensnamnet och procenttalet räcker inte för att rangordna två färdiga produkters tolerans. Läs hela formulan och produktens anvisningar i stället för att välja på etiketten mild." },
    { question: "Kan jag köpa C12 när sidan säger C10?", answer: "Behandla det som en annan variant. Den svenska C12-sidan anger 12%, medan den här katalogposten avser C10. Vi har inte visat att ett byte är bättre eller att produktbilder, erbjudanden och instruktioner är utbytbara." },
    { question: "Behöver jag båda för en komplett rutin?", answer: "Nej, vi har inget underlag som visar att du behöver båda. Utgå från ett konkret behov. Följ de exakta produkternas anvisningar; en allmän morgon/kväll-uppdelning löser inte automatiskt motstridiga kombinationsråd." },
    { question: "Vad avgör om ett serum är värt pengarna?", answer: "Ett behov som din nuvarande rutin inte redan täcker, en identifierad produkt och ett rimligt totalpris. Vi kan inte utse en prisvinnare utan matchade svenska erbjudanden och jämförbart underlag om resultat." },
  ],
  related: [{ href: "/guider/niacinamide-10-vs-20", text: "Vad skulle motivera en högre koncentration?" }],
};
