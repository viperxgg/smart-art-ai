import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { kettlebellDumbbellDecision } from "@/lib/kettlebell-dumbbell-decision";

export const kettlebellEllerHantlarFaqItems = [
  { question: "Är ett set med flera hantelvikter justerbart?", answer: "Inte i sig. Med fasta hantlar byter du till en annan hantel för att ändra belastningen. Kontrollera att ett justerbart system uttryckligen kan ändra vikt på samma redskap." },
  { question: "Vilken vikt ska jag köpa?", answer: "Utgå från övningar och en belastning du vet fungerar för dig. Vi har inte bedömt din träningsnivå och anger ingen allmän nybörjarvikt. Kontrollera kg per redskap, antal och om paketvikten inkluderar ställningen." },
  { question: "Behöver jag båda?", answer: "Inte om det du redan har räcker för dina övningar. Köp ett extra redskap först när det fyller ett konkret behov." },
];


export const kettlebellDumbbellGuide: DecisionGuide = {
  parent: { name: "Träning", href: "/traning" },
  path: "/traning/kettlebell-eller-hantlar",
  title: "Kettlebell eller hantlar – vilket redskap saknas hemma?",
  intro: "Behöver du en kettlebell eller flera fasta hantlar? Lista övningarna, vikterna och om du behöver ett redskap eller ett par. Här granskar vi köpfrågorna; de två butiksposterna är ännu inte matchade mot exakta varianter.",
  decision: kettlebellDumbbellDecision,
  productPaths: ["/traning/kettlebell/amazon-basics", "/traning/hantlar/songmics-set"],
  questions: [
    { question: "Är paketets vikt samma som vikten jag håller i handen?", answer: "Inte nödvändigtvis. En totalsiffra kan avse flera redskap tillsammans. Kontrollera varje hantels vikt, antal av varje vikt och om ställningen räknas in. Jämför inte en sådan totalsiffra med vikten på en enskild kettlebell." },
    ...kettlebellEllerHantlarFaqItems,
  ],
  related: [
    { href: "/traning/hantlar-eller-gummiband", text: "Fast hantelvikt eller kort miniband?" },
    { href: "/traning/gjutjarn-eller-mjuk-kettlebell", text: "Gjutjärn eller mjuk kettlebell?" },
  ],
};
