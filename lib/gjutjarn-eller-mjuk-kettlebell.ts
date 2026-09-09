import type { DecisionGuide } from "@/components/DecisionGuidePage";
import type { DecisionRecord } from "@/lib/decision-record";
import { kettlebellDumbbellDecision } from "@/lib/kettlebell-dumbbell-decision";

/** Unresolved product evidence. Do not register PROIRON as a reviewed recommendation. */
export const kettlebellMaterialDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    kettlebellDumbbellDecision.options[0],
    {
      productSlug: "proiron-mjuk-kettlebell",
      model: "PROIRON mjuk kettlebell",
      variant: "Katalogposten anger ASIN B09BDQK6G4. Exakt vikt, material, mått och levererad variant är inte bekräftade från en tillgänglig aktuell produktsida. Blanda inte ihop en mjuk kropp med en gjutjärnskärna som har neoprenöverdrag.",
      chooseIf: "du vill undersöka ett alternativ med mjuk kropp och först kan bekräfta vikten, handtagets mått och att konstruktionen passar dina planerade övningar. Underlaget räcker ännu inte för att rekommendera denna butikspost.",
      avoidIf: "köpet bygger på att den är ofarlig att tappa, inte kan skada parkett eller säkert stör grannarna mindre. Vi har inga jämförande prov som styrker de löftena.",
      sourceIds: ["P1", "P2"],
      merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "Du har provat eller verifierat en praktisk skillnad som spelar roll för dig, exempelvis att handen får plats och att rätt vikt finns. Jämför samma vikt och antal inklusive leverans. Vi har inte underlag för en vinnare i pris per kilo, hållbarhet eller ljudnivå.",
  noPurchaseWhen: "Din nuvarande kettlebell fungerar för dina övningar. Köp inte en extra enbart för löften om golvskydd. Om du inte vet vilken vikt eller vilket grepp du behöver, prova lånad utrustning eller ett exemplar på plats innan du väljer modell.",
  swedishContext: "Kontrollera kg per redskap, antal i paketet, leverans till Sverige och totalpris. Materialnamnet ensamt säger inte vad som händer med just ditt golv. Förvaring, golvunderlag och hur vikten sätts ned behöver också bedömas.",
  testing: "Ingen egen vägning, greppbedömning, fallprovning eller ljudmätning. Vi har försökt läsa de registrerade produktsidorna. De kunde inte användas för aktuell variantkontroll; detta är en köpcheck med öppna kunskapsluckor, inte ett produkttest.",
  limitations: "Vi kan inte utse något av dessa modeller till bäst för nybörjare, säkrast i hem med barn eller mest hållbart. PROIRON-sidan gav 404 vid kontrollen och Amazon-sidorna kunde inte läsas. Bilder, exakta varianter och aktuella erbjudanden är fortfarande overifierade.",
  sources: [
    { ...kettlebellDumbbellDecision.sources[0], checkedAt: "2026-09-09" },
    { id: "P1", title: "PROIRON – Soft Kettlebell, registrerad produktsida", url: "https://proiron.com/products/proiron-soft-kettlebell-2-4-6-8-10kg", status: "unavailable", checkedAt: "2026-09-09", supports: "Direktlänken gav 404. En äldre sökträff beskriver PVC, järnsand och flera kg-varianter, men det bekräftar inte dagens produkt eller butikspost. Skydds- och säkerhetslöften används inte som bevis." },
    { id: "P2", title: "Amazon Sverige – registrerat ASIN B09BDQK6G4", url: "https://www.amazon.se/dp/B09BDQK6G4", status: "unavailable", checkedAt: "2026-09-09", supports: "Sidan kunde inte läsas. Ingen vikt, paketmängd eller variant verifierad." },
  ],
};

export const kettlebellMaterialGuide: DecisionGuide = {
  parent: { name: "Träning", href: "/traning" },
  path: "/traning/gjutjarn-eller-mjuk-kettlebell",
  title: "Gjutjärns- eller mjuk kettlebell – vad behöver du kontrollera?",
  intro: "Börja med rätt vikt och ett handtag som passar dina övningar. Här skiljer vi köpfrågorna från löften om golv, ljud och säkerhet som vi inte har kunnat styrka för dessa två butiksposter.",
  decision: kettlebellMaterialDecision,
  productPaths: ["/traning/kettlebell/amazon-basics", "/traning/kettlebell/proiron-mjuk"],
  questions: [
    { question: "Betyder mjuk att golv och fötter är skyddade?", answer: "Nej, vi har inget underlag för en sådan garanti. En tung produkt blir inte ofarlig för att kroppen beskrivs som mjuk. Vi har inte provat vad någon av modellerna gör med parkett eller vid ett fall." },
    { question: "Är den mjuka modellen tystare i en lägenhet?", answer: "Vi har inte mätt eller jämfört ljud och vibrationer. Konstruktion, golv och hur vikten används spelar in; inget av underlagen här bevisar att grannarna störs mindre." },
    { question: "Vilken vikt ska jag köpa?", answer: "Vi kan inte ange en personlig startvikt från dessa produktposter. Prova en vikt du kan kontrollera i de övningar du planerar. Bekräfta sedan vikt per redskap och antal i paketet; en lista med varianter är inte ett set." },
    { question: "Vilka modelluppgifter saknas?", answer: "Amazon Basics-postens exakta vikt och levererade modell är fortfarande okända. För PROIRON saknas aktuell bekräftelse av variant, vikt, material och mått. Därför visas varken produktbilder, prisvinnare eller köpknappar." },
  ],
  related: [{ href: "/traning/kettlebell-eller-hantlar", text: "Behöver du en kettlebell eller flera fasta hantlar?" }],
};
