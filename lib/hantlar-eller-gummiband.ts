import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const hantlarEllerGummibandFaqItems = [
  { question: "Betyder 4 kg två hantlar på 4 kg?", answer: "Inte för PRKNED02K: det granskade paret består av två hantlar på 2 kg vardera. Kontrollera vikt per styck och antal separat; ett familjenamn kan omfatta flera paket." },
  { question: "Kan bandens nivåer jämföras direkt med hantlarnas kilo?", answer: "Inte från de här uppgifterna. För LD40 saknar vi verifierad kraft vid en bestämd töjning. Lätt, medel och tung beskriver nivåer inom setet och räcker inte för en direkt jämförelse med en 2 kg-hantel." },
  { question: "Kan jag ändra vikten på dessa hantlar?", answer: "Nej, PROIRON neoprenhantlar är fasta vikter. En annan belastning kräver en annan hantel. Blanda inte ihop dem med justerbara hantlar med viktskivor." },
  { question: "Ersätter miniband alla långa träningsband?", answer: "Nej. Kontrollera bandets längd och vilka övningar det är avsett för. Ett kort miniband ska inte väljas utifrån instruktioner för ett långt band med handtag eller dörrfäste." },
  { question: "Är band alltid skonsammare?", answer: "Det har vi inget jämförande underlag för. Val av övning, belastning och utförande spelar roll. Vi rekommenderar inte någon av produkterna som behandling eller rehabilitering." },
  { question: "Måste jag köpa båda?", answer: "Nej. Utgå från de övningar du redan gör och den utrustning du har. Köp först när du kan beskriva vilken funktion som saknas." },
];

export const hantlarEllerGummibandDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    { productSlug: "proiron-neoprenhantlar", model: "PROIRON PRKNED02K – 2 × 2 kg", variant: "Referens: PRKNED02K, äppelgrönt par med två fasta 2 kg-hantlar, totalt 4 kg. Butikslänken kontrollerades mot ASIN B01C9MU966 den 9 september 2026. Kontrollera att samma vikt och antal är valda även när du beställer.", chooseIf: "du behöver två fasta 2 kg-hantlar för dina övningar. Paketets sammanlagda 4 kg betyder inte att varje hantel väger 4 kg.", avoidIf: "du vill ändra vikten på samma hantel med lösa skivor. Då behöver du jämföra ett justerbart redskap i stället.", sourceIds: ["T1", "T3"], merchantVariantVerified: true },
    { productSlug: "elvire-miniband", model: "Elvire Sport LD40 – Short Blue and Black", variant: "Amazon.se listar LD40, ASIN B07NK18M4J: tre korta band i blått/svart, tre motståndsnivåer, mått 36 × 8,1 cm och bärpåse. Exakt töjningsmått och full materialsammansättning är inte bekräftade. Butikslänken kontrollerades mot denna variant den 9 september 2026. Kontrollera vald färg och bandtyp före beställning.", chooseIf: "din övning kräver ett kort band och du först kan kontrollera att längd och motstånd passar. Butikens tre motståndsnivåer är inte en verifierad belastning i kilogram.", avoidIf: "du söker ett långt band för en övning med handtag eller dörrfäste, eller behöver bekräftad materialsammansättning som vi saknar.", sourceIds: ["T2", "T4"], merchantVariantVerified: true },
  ],
  payMoreWhen: "Betala för en funktion du saknar: en annan fast vikt, ett justerbart redskap eller ett band med rätt längd. Köp inte ett större paket enbart för att det innehåller fler delar. Dagens priser och frakt till Sverige är inte verifierade.",
  noPurchaseWhen: "Utrustningen du redan äger fungerar för dina övningar. Du behöver inte köpa både hantlar och band för att följa en produktjämförelse.",
  swedishContext: "Kontrollera vikt per hantel, antal i paketet och totalpris inklusive frakt till din adress. För band: begär mått, material och bruksanvisning för just varianten. Vi har inte verifierat lager eller svensk leverans.",
  testing: "Vi har inte provtränat med dessa produkter, mätt bandmotstånd eller jämfört grepp och hållbarhet. Ingen personlig tränings- eller rehabiliteringsbedömning har gjorts.",
  limitations: "Modell- och paketuppgifter kommer från Amazon.se:s produktposter, inte från egen mätning. PROIRONs detaljerade tillverkarsida visar 404. Studien identifierar inte LD40 och styrker inte att banden är bättre än hantlar. Butikens nylonuppgift är ingen fullständig materialdeklaration eller garanti om latexfrihet. Produktbilder med verifierad användningsrätt saknas fortfarande. Länkarnas variantmatchning är en daterad kontroll, inte en garanti om framtida sortiment eller lager.",
  sources: [
    { id: "T1", title: "PROIRON – hantelsortiment", url: "https://proiron.com/collections/dumbbell", checkedAt: "2026-09-08", supports: "Tillverkaren listar neoprenhantlar separat från justerbara hantelset. Ingen exakt svensk köpvariant har matchats." },
    { id: "T3", title: "Amazon.se – PROIRON PRKNED02K", url: "https://www.amazon.se/dp/B01C9MU966", checkedAt: "2026-09-09", supports: "Vald variant Apple Green-2x2kg, modell PRKNED02K och två hantlar. Butiksuppgift om paketet, inte oberoende test av grepp eller hållbarhet." },
    { id: "T4", title: "Amazon.se – Elvire Sport LD40", url: "https://www.amazon.se/dp/B07NK18M4J", checkedAt: "2026-09-09", supports: "LD40 Short Blue and Black, tre band och nivåer, angivna mått 36 × 8,1 cm samt bärpåse. Bekräftar inte kraft vid en viss töjning eller full materialsammansättning." },
    { id: "T2", title: "Scientific Reports – pilotstudie med motståndsband", url: "https://www.nature.com/articles/s41598-025-27567-9", checkedAt: "2026-09-08", supports: "Metoden beskriver tre Elvire-tygband med olika motstånd. Den saknar modellidentifiering för vår butikspost och jämför inte dessa produkter med PROIRON-hantlar." },
  ],
};

export const dumbbellBandGuide: DecisionGuide = {
  parent: { name: "Träning", href: "/traning" },
  path: "/traning/hantlar-eller-gummiband",
  title: "Hantlar eller miniband – vad kräver dina övningar?",
  intro: "Här jämför vi fasta neoprenhantlar med korta miniband. Börja med en bestämd övning: behöver du en vikt i handen eller ett kort band? Kontrollera sedan vad du redan har och vad som faktiskt saknas.",
  decision: hantlarEllerGummibandDecision,
  productPaths: ["/traning/hantlar/proiron-neopren", "/traning/miniband"],
  questions: [
    { question: "Vad ska jag skriva upp före köp?", answer: "Övningen, om den kräver ett eller två redskap och den vikt eller bandtyp som fungerar för dig. Kontrollera paketet mot listan. Ett större antal delar är bara en fördel om du använder dem." },
    ...hantlarEllerGummibandFaqItems,
  ],
  related: [{ href: "/traning/kettlebell-eller-hantlar", text: "Kettlebell eller flera fasta hantlar?" }],
};
