import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  proironNeopreneDumbbellsProduct,
  elvireMinibandProduct,
} from "@/lib/products";

export const hantlarEllerGummibandFaqItems: DecisionComparisonFaqItem[] = [
  { question: "Kan jag ändra vikten på dessa hantlar?", answer: "Nej, PROIRON neoprenhantlar är fasta vikter. En annan belastning kräver en annan hantel. Blanda inte ihop dem med justerbara hantlar med viktskivor." },
  { question: "Ersätter miniband alla långa träningsband?", answer: "Nej. Kontrollera bandets längd och vilka övningar det är avsett för. Ett kort miniband ska inte väljas utifrån instruktioner för ett långt band med handtag eller dörrfäste." },
  { question: "Är band alltid skonsammare?", answer: "Det har vi inget jämförande underlag för. Val av övning, belastning och utförande spelar roll. Vi rekommenderar inte någon av produkterna som behandling eller rehabilitering." },
  { question: "Måste jag köpa båda?", answer: "Nej. Utgå från de övningar du redan gör och den utrustning du har. Köp först när du kan beskriva vilken funktion som saknas." },
];

export const hantlarEllerGummibandComparisonRows = [
  ["Typ som jämförs", "PROIRON neoprenhantlar med fast vikt", "Elvire korta miniband; exakt variant ej verifierad"],
  ["Ändra belastning", "Byt hantel, inte viktskivor", "Kontrollera bandets nivå och övningens utförande"],
  ["Vad måste matcha?", "Vikt per hantel och antal i paketet", "Längd, material och avsedd övning"],
  ["Förvaring", "Planera för vikten och en stabil plats", "Kontrollera mått; korta band kräver ingen hantelställning"],
  ["Viktig begränsning", "En fast vikt passar inte automatiskt alla övningar", "Inte samma redskap som långa band med handtag"],
  ["Verifierad svensk butiksvariant", "Nej", "Nej"],
] as const;

export const hantlarEllerGummibandPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  { product: proironNeopreneDumbbellsProduct, path: "/traning/hantlar/proiron-neopren", badge: "Fast vikt", headline: "Behöver du en bestämd vikt i handen?", shortBody: "Välj först vilken vikt dina övningar kräver. Detta är inte ett justerbart hantelset." },
  { product: elvireMinibandProduct, path: "/traning/miniband", badge: "Kort band", headline: "Kräver din övning ett kort miniband?", shortBody: "Kontrollera längd, material och motstånd. Vi har ännu inte verifierat den exakta Elvire-varianten." },
];

export const hantlarEllerGummibandRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/hantlar/proiron-neopren","label":"Hantlar","text":"Läs Elins recension av PROIRON neoprenhantlar."},{"href":"/traning/miniband","label":"Gummiband","text":"Läs Elins recension av Elvire miniband."},{"href":"/traning","label":"Träning","text":"Se alla Elins val för hemmaträning."}];


export const hantlarEllerGummibandDecision: import("@/lib/decision-record").DecisionRecord = {
  reviewedAt: "2026-09-08",
  options: [
    { productSlug: "proiron-neoprenhantlar", model: "PROIRON neoprenhantlar – fasta vikter", variant: "Vikt per hantel och antal i den svenska butikens paket är ännu inte matchade. Detta är en produktfamilj, inte en verifierad enskild köpvariant.", chooseIf: "du behöver en bestämd vikt i handen och har kontrollerat vilken vikt du faktiskt använder i dina övningar.", avoidIf: "du vill ändra vikten på samma hantel med lösa skivor. Då behöver du jämföra ett justerbart redskap i stället.", sourceIds: ["T1"], merchantVariantVerified: false },
    { productSlug: "elvire-miniband", model: "Elvire Sport – korta miniband, variant ej verifierad", variant: "Den befintliga produktposten avser ett kort 3-pack. Aktuell tillverkardokumentation, längd, materialsammansättning och exakt butikspaket är inte verifierade.", chooseIf: "din övning kräver ett kort band och du först kan kontrollera att längd och motstånd passar. Det är ett villkorat råd om redskapstypen, inte en rekommendation av den obekräftade varianten.", avoidIf: "du söker ett långt band för en övning med handtag eller dörrfäste, eller behöver bekräftad materialsammansättning som vi saknar.", sourceIds: ["T2"], merchantVariantVerified: false },
  ],
  payMoreWhen: "Betala för en funktion du saknar: en annan fast vikt, ett justerbart redskap eller ett band med rätt längd. Köp inte ett större paket enbart för att det innehåller fler delar. Dagens priser och frakt till Sverige är inte verifierade.",
  noPurchaseWhen: "Utrustningen du redan äger fungerar för dina övningar. Du behöver inte köpa både hantlar och band för att följa en produktjämförelse.",
  swedishContext: "Kontrollera vikt per hantel, antal i paketet och totalpris inklusive frakt till din adress. För band: begär mått, material och bruksanvisning för just varianten. Vi har inte verifierat lager eller svensk leverans.",
  testing: "Vi har inte provtränat med dessa produkter, mätt bandmotstånd eller jämfört grepp och hållbarhet. Ingen personlig tränings- eller rehabiliteringsbedömning har gjorts.",
  limitations: "PROIRONs sortimentssida skiljer neoprenhantlar från justerbara set; den detaljerade produktsidan gick inte att öppna vid kontrollen. En studie beskriver Elvire-band men identifierar inte vår butiksvariant. Den används inte som produktgodkännande eller bevis för överlägsenhet. Bilder och butiksval avvaktar verifiering.",
  sources: [
    { id: "T1", title: "PROIRON – hantelsortiment", url: "https://proiron.com/collections/dumbbell", checkedAt: "2026-09-08", supports: "Tillverkaren listar neoprenhantlar separat från justerbara hantelset. Ingen exakt svensk köpvariant har matchats." },
    { id: "T2", title: "Scientific Reports – pilotstudie med motståndsband", url: "https://www.nature.com/articles/s41598-025-27567-9", checkedAt: "2026-09-08", supports: "Metoden beskriver tre Elvire-tygband med olika motstånd. Den saknar modellidentifiering för vår butikspost och jämför inte dessa produkter med PROIRON-hantlar." },
  ],
};
