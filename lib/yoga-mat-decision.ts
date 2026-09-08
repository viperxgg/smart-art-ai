import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const yogaMatPaths = ["/traning/yogamatta/prosourcefit-13mm", "/traning/yogamatta/yogati-tpe"] as const;
export const yogaMatDecision: DecisionRecord = {
  reviewedAt: "2026-09-08",
  options: [
    {
      productSlug: "prosourcefit-extra-tjock-yogamatta",
      model: "ProsourceFit Extra Thick Yoga and Pilates Mat – 13 mm",
      variant: "½-tumsvarianten i NBR, cirka 180 × 61 cm. Tillverkaren säljer även 25 mm; blanda inte ihop dem. Vår katalogs ASIN B00FY0GW08 är inte matchad mot aktuell svensk butiksvariant.",
      chooseIf: "du söker extra dämpning vid golvövningar och accepterar ett mjukare underlag. Tillverkaren beskriver denna avvägning för sin tjocka matta.",
      avoidIf: "du prioriterar fast golvkontakt i stående balansövningar. Mer skum kan göra underlaget mindre stabilt; tjockast är inte automatiskt bäst.",
      sourceIds: ["Y1", "Y2", "Y5"], merchantVariantVerified: false,
    },
    {
      productSlug: "yogati-tpe-yogamatta",
      model: "YOGATI Tapis Bleu – 6 mm",
      variant: "Den blå mattan på varumärkets franska sida: 183 × 61 cm, 800 g och bärrem. TPE-materialet och kopplingen till katalogens ASIN B07ML1VMPD är inte styrkta i de lästa källorna.",
      chooseIf: "du söker en 6 mm-matta med markeringslinjer och först kan bekräfta att butiken säljer just den dokumenterade varianten.",
      avoidIf: "du behöver bevisat grepp med svettiga händer eller väljer efter ett löfte om att aldrig glida. Vi har inget sådant test och kan inte utse den till greppvinnare.",
      sourceIds: ["Y3", "Y4", "Y6"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "En verifierad egenskap löser ett konkret problem: tillräcklig längd, en fastare yta eller dämpning du saknar. Pris och materialnamn bevisar inte bättre grepp eller längre livslängd. Jämför samma variant och totalpris med frakt.",
  noPurchaseWhen: "Din nuvarande matta fungerar för övningarna och ger den golvkontakt du vill ha. Du behöver inte byta för färg, ett premium-namn eller för att börja en ny rutin.",
  swedishContext: "Kontrollera mått i centimeter, tjocklek i millimeter och vad som ingår. YOGATI har Sverige i landväljaren, men Sverige saknas i den lästa listan över gratis frakt. Svenskt totalpris, lager och de två butikslänkarna är inte verifierade.",
  testing: "Vi har läst tillverkarsidor, inte tränat på mattorna eller mätt friktion, kompression och slitage. ProsourceFits guide från 2016 förklarar dämpning kontra golvkontakt; den är inte ett jämförande test av YOGATI.",
  limitations: "Vi lovar inte smärtlindring, skadeförebyggande effekt eller halkfrihet. Kundbetyg, bildrättigheter och butikernas modellmatchning återstår. Råden gäller val av underlag, inte individuell behandling eller träningsteknik.",
  sources: [
    { id: "Y1", title: "ProsourceFit – Extra Thick Yoga and Pilates Mat", url: "https://www.prosourcefit.com/products/extra-thick-yoga-and-pilates-mat", checkedAt: "2026-09-08", supports: "Skiljer 13 och 25 mm. Anger 71 × 24 tum, NBR och bärrem. Avtorkning och torkning, inte maskintvätt. Ingen svensk butiksmatchning." },
    { id: "Y2", title: "ProsourceFit – How to Choose a Yoga Mat (2016)", url: "https://www.prosourcefit.com/blogs/news/how-to-choose-a-yoga-mat", checkedAt: "2026-09-08", supports: "Tillverkarens förklaring av dämpning kontra stabilitet och mjukt NBR. Inte oberoende produkttest eller stöd för att YOGATI har bättre grepp." },
    { id: "Y3", title: "YOGATI – Tapis Bleu", url: "https://yogatilife.com/products/tapisyogableu", checkedAt: "2026-09-08", supports: "Blå matta, 183 × 61 cm, 6 mm, 800 g, bärrem och markeringslinjer. Landväljare och angivna fri-fraktländer. Material/ASIN och svensk leveranskostnad inte matchade." },
    { id: "Y4", title: "YOGATI – sortiment", url: "https://yogatilife.com/collections/all", checkedAt: "2026-09-08", supports: "Separata blå/lila mattor och grå gummimatta. Varumärket identifierar inte en enda gemensam modell eller formula." },
    { id: "Y5", title: "Amazon Sverige – katalogens ProsourceFit-ASIN", url: "https://www.amazon.se/dp/B00FY0GW08", checkedAt: "2026-09-08", status: "unavailable", supports: "Läsningen gav ett tekniskt fel. Aktuell färg, paket, variant och erbjudande är inte verifierade." },
    { id: "Y6", title: "Amazon Sverige – katalogens YOGATI-ASIN", url: "https://www.amazon.se/dp/B07ML1VMPD", checkedAt: "2026-09-08", status: "unavailable", supports: "Läsningen gav ett tekniskt fel. Koppling till den blå tillverkarmattan och aktuellt erbjudande är inte verifierade." },
  ],
};

export const yogaMatQuestions = [
  { question: "Vilken har bäst grepp?", answer: "Det vet vi inte. Båda marknadsförs med grepp, men vi saknar jämförbara tester på torrt och fuktigt underlag. Varken 6 mm, TPE eller pris räcker för att utse en vinnare." },
  { question: "Är mer dämpning alltid bättre?", answer: "Nej. ProsourceFits guide beskriver att mer dämpning kan ge mindre stabilitet i stående positioner. Utgå från övningen och din upplevelse av underlaget, inte bara antal millimeter." },
  { question: "Hur sköter jag mattan?", answer: "För ProsourceFit anger tillverkaren avtorkning med våt trasa eller svamp och ordentlig torkning, inte maskintvätt. Överför inte detta automatiskt till YOGATI; följ skötselråden för den variant du faktiskt har." },
  { question: "Behöver jag en ny matta för att börja yoga?", answer: "Inte om underlaget du redan använder fungerar för dina övningar. Beskriv först vad som saknas innan du jämför ett köp." },
] as const;
const related = [{ href: "/traning", text: "Fler frågor om träningsutrustning" }];
export const yogaMatGuide: DecisionGuide = {
  parent: { name: "Träning", href: "/traning" }, path: "/traning/yogamatta",
  title: "Vilken yogamatta passar dina övningar?",
  intro: "Behöver du mer dämpning mot golvet eller fastare kontakt när du står? Börja där. Här jämför vi en dokumenterad 13 mm-variant med YOGATIs blå 6 mm-matta, med tydliga gränser för vad som är verifierat.",
  decision: yogaMatDecision, productPaths: yogaMatPaths, questions: yogaMatQuestions,
  related: [...related, { href: "/guider/premium-yogamatta-vs-budget", text: "När är ett högre pris motiverat?" }],
};
export const yogaThicknessGuide: DecisionGuide = {
  ...yogaMatGuide, path: "/traning/tjock-eller-tunn-yogamatta", title: "Tjock eller tunn yogamatta – dämpning eller golvkontakt?",
  intro: "Mer skum och fastare golvkontakt löser olika behov. Jämför 13 och 6 mm utan att anta att en viss tjocklek garanterar grepp, bättre balans eller mindre smärta.",
};
export const yogaPriceGuide: DecisionGuide = {
  ...yogaMatGuide, parent: { name: "Guider", href: "/guider" }, path: "/guider/premium-yogamatta-vs-budget", title: "När är en dyrare yogamatta värd pengarna?",
  intro: "Betala mer först när du vet vilken egenskap som saknas. Vi har inget stöd för att en premium-matta automatiskt håller längre eller greppar bättre. De två exemplen här är inte en verifierad prisrangordning.",
  questions: [{ question: "Vad ska jag jämföra utöver priset?", answer: "Mått, tjocklek, material, vikt att bära, skötsel och eventuella testvillkor för grepp. Kontrollera innehållet i samma variant och frakt till din adress. En högre prislapp är ingen testmetod." }, ...yogaMatQuestions],
  related: [...related, { href: "/traning/tjock-eller-tunn-yogamatta", text: "Dämpning eller golvkontakt?" }],
};
