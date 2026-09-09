import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const hantlarEllerGummibandFaqItems = [
  { question: "Kan jag ändra vikten på dessa hantlar?", answer: "Nej, PROIRON neoprenhantlar är fasta vikter. En annan belastning kräver en annan hantel. Blanda inte ihop dem med justerbara hantlar med viktskivor." },
  { question: "Ersätter miniband alla långa träningsband?", answer: "Nej. Kontrollera bandets längd och vilka övningar det är avsett för. Ett kort miniband ska inte väljas utifrån instruktioner för ett långt band med handtag eller dörrfäste." },
  { question: "Är band alltid skonsammare?", answer: "Det har vi inget jämförande underlag för. Val av övning, belastning och utförande spelar roll. Vi rekommenderar inte någon av produkterna som behandling eller rehabilitering." },
  { question: "Måste jag köpa båda?", answer: "Nej. Utgå från de övningar du redan gör och den utrustning du har. Köp först när du kan beskriva vilken funktion som saknas." },
];

export const hantlarEllerGummibandDecision: DecisionRecord = {
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
