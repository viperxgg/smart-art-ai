import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const detanglingDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "tangle-teezer-original", model: "Tangle Teezer The Original",
    variant: "Original Regular, inte Mini, Fine & Fragile eller Ultimate Detangler. Källan visar Pink Fizz; färg och ASIN B0086QEO7K är inte matchade mot ett aktuellt svenskt erbjudande.",
    chooseIf: "du söker utredning för rakt till vågigt hår, den hårtyp tillverkaren riktar Original till. Den har två längder på tänderna och anges för både vått och torrt hår.",
    avoidIf: "du behöver en borste för föning med värme. Tillverkaren säger uttryckligen att Original ska hållas borta från värme. Vi har inte jämfört hur den känns i olika händer eller fungerar i täta lockar.",
    sourceIds: ["B1"], merchantVariantVerified: false,
  }, {
    productSlug: "wet-brush-original", model: "Wet Brush Original Detangler",
    variant: "Original Detangler; källan gäller Frost Black. Inte Pro, Mini, Speed Dry eller Frizz-Free. ASIN B005LPN8R6 och färg är inte matchade mot aktuell svensk förpackning.",
    chooseIf: "du vill undersöka en utredningsborste som märket anger för både vått och torrt hår, även lockigt och krulligt. Den har IntelliFlex-borst; detta är tillverkarens användningsområde, inte ett löfte om att den passar ditt hår.",
    avoidIf: "du köper den för att vi skulle ha visat att den gör mindre ont än Tangle Teezer. Det har vi inte. Den lästa produktsidan räcker inte heller för att välja den som värmetålig fönborste.",
    sourceIds: ["B2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Den exakta borstens grepp och funktion löser ett problem som din nuvarande borste har. Vi har inte testat grepp, utredningstid eller livslängd och kan inte räkna hem ett högre pris med färre avbrutna hårstrån.",
  noPurchaseWhen: "Din nuvarande borste eller kam redan reder ut håret på ett sätt som fungerar för dig. Två utredningsborstar behövs inte bara för att du ibland borstar vått och ibland torrt hår.",
  swedishContext: "Underlaget kommer från brittisk respektive amerikansk märkessida. Kontrollera modell, färg, skötsel och totalpris hos den svenska säljaren. Lager, butiksmatchning och bildrättigheter återstår att verifiera.",
  testing: "Vi har granskat tillverkarnas produktuppgifter, inte borstat hår med produkterna. Ingen egen jämförelse av smärta, hårbrott, känslig hårbotten eller olika hårtyper finns här.",
  limitations: "Wet Brushs uppgift om mindre hårbrott namnger inte jämförelseprodukten på sidan. Tangle Teezers självskattning om hårets utseende visar inte att den slår Wet Brush. Vi använder därför inte uppgifterna för att utse en vinnare.",
  sources: [
    { id: "B1", title: "Tangle Teezer – The Original", url: "https://tangleteezer.com/products/the-original", checkedAt: "2026-09-09", supports: "Original Regular, Pink Fizz, två tandlängder, riktad till rakt–vågigt hår, vått/torrt bruk och uttryckligt förbud mot värme. Rengöringsavsnitten skiljer sig om torkriktning; ingen gemensam riktning återges här." },
    { id: "B2", title: "Wet Brush – Original Detangler, Frost Black", url: "https://wetbrush.com/products/original-detangler-frost-black", checkedAt: "2026-09-09", supports: "Modell, färg, IntelliFlex och tillverkarens angivna hårtyper samt vått/torrt bruk. Fotnoten till jämförelseanspråket identifierar inte konkurrenten. Kundbetyg och AI-sammanfattning används inte som egna testresultat." },
  ],
};

export const detanglingGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/tangle-teezer-eller-harborste",
  title: "Tangle Teezer eller Wet Brush – behöver du en ny borste?",
  intro: "Båda Original-modellerna anges för vått och torrt hår. Börja med ditt behov och rätt modell; namnet Wet Brush bevisar inte att den är bättre i vått hår.",
  decision: detanglingDecision, productPaths: ["/skonhet/tangle-teezer", "/skonhet/wet-brush"],
  questions: [
    { question: "Vilken gör minst ont?", answer: "Vi har inget direkt jämförande test av dessa två modeller. Märkenas komfortpåståenden räcker inte för att lova smärtfri borstning eller utse den bästa för känslig hårbotten." },
    { question: "Måste jag ha olika borstar för vått och torrt hår?", answer: "Inte enbart av det skälet: båda tillverkarna anger båda användningsområdena. Om din befintliga kam eller borste fungerar finns inget visat behov av att köpa någon av dem." },
    { question: "Kan jag föna med Original?", answer: "Tangle Teezer avråder uttryckligen från värme för Original. Wet Brush-sidan som vi granskat bekräftar inte värmetålighet för Original Detangler. Välj inte fönborste utifrån ordet detangler; kontrollera instruktionen för exakt modell." },
  ],
  related: [{ href: "/skonhet/denman-borste", text: "En annan funktion: undersök en stylingborste" }, { href: "/skonhet", text: "Fler produktval inom skönhet" }],
};
