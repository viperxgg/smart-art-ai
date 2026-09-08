import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const yogaPropsDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "bodymate-yogablock",
      model: "BODYMATE yogablock i kork – 2-pack",
      variant: "Tillverkarens tvåpack: varje block 22 × 12 × 7,5 cm och 400 g, med rundade kanter. Material anges som 100 % naturkork. Svensk butiksvariant är inte matchad.",
      chooseIf: "din planerade yogaövning behöver ett separat stöd mot underlaget och de här måtten passar. Kontrollera först vilken höjd och hur många block du faktiskt behöver.",
      avoidIf: "du söker ett band att hålla i eller ett mjukt skumblock. Vi har inte testat halkmotstånd, komfort under belastning eller om blocken passar just din position.",
      sourceIds: ["YB1"], merchantVariantVerified: false,
    },
    {
      productSlug: "bodymate-yogabalte",
      model: "BODYMATE yogagurt – 250 × 3,8 cm med D-ringar",
      variant: "Bandväv i 100 % bomull, D-ringar i rostfri metall och etikett i konstläder. Inte tillverkarens separata 190 cm-band med tio fasta öglor. Färg och svensk butiksvariant är inte matchade.",
      chooseIf: "din övning kräver ett justerbart band som du håller i och längden 250 cm passar. Det ger en annan greppmöjlighet än ett block; det är inget löfte om större rörlighet.",
      avoidIf: "du behöver ett fast stöd mot golvet eller ett band med fasta, numrerade greppöglor. Vi har inte testat hur D-ringarna håller inställningen eller hur bandet känns i handen.",
      sourceIds: ["YS1", "YS2"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "En verifierad storlek, annan grepputformning eller extra del behövs i din övning. Köp inte två redskap bara för att de säljs som yogatillbehör. Vi har inte jämfört aktuella priser, frakt eller hållbarhet.",
  noPurchaseWhen: "Din nuvarande utrustning fungerar eller du ännu inte vet vilken hjälp övningen kräver. Ett block och ett band är olika redskap; inget av dem är ett obligatoriskt nybörjarköp.",
  swedishContext: "Underlaget kommer från tillverkarens tyska butik. Matcha tvåpack och mått per block, respektive 250 cm-band med D-ringar, mot det svenska erbjudandet. Kontrollera instruktioner och totalpris med leverans; detta är inte verifierat här.",
  testing: "Vi har läst tillverkarens mått-, material- och paketuppgifter. Vi har inte provat positioner, mätt halkmotstånd eller draghållfasthet, eller utvärderat effekter på balans, smärta och rörlighet.",
  limitations: "Produktspecifikationer visar inte att ett redskap gör din teknik korrekt eller att du bör gå djupare i en stretch. Vi anger ingen träningsdos eller rehabiliteringsplan. Bildrättigheter, exakt butikspaket och användarprov återstår.",
  sources: [
    { id: "YB1", title: "BODYMATE – yogablock i kork, tvåpack", url: "https://shop.bodymate.de/products/bodymate-2-pack-yoga-block", checkedAt: "2026-09-09", supports: "Två block; 22 × 12 × 7,5 cm och 400 g per block, naturkork och rundade kanter. Marknadsföring om halksäkerhet och bättre träning är inte vårt testresultat." },
    { id: "YS1", title: "BODYMATE – yogagurt 250 cm", url: "https://shop.bodymate.de/products/bodymate-yoga-gurt-yoga-schlaufe", checkedAt: "2026-09-09", supports: "250 × 3,8 cm; bomullsband, metallringar och konstläderetikett. Ingen oberoende verifiering av träningsresultat eller spännets hållbarhet." },
    { id: "YS2", title: "BODYMATE – separat band med tio öglor", url: "https://shop.bodymate.de/products/dehnungsband-mit-10-schlaufen", checkedAt: "2026-09-09", supports: "Ett annat band: 190 cm och tio fasta öglor. Dess utförande ska inte blandas ihop med 250 cm-yogagurten." },
  ],
};

export const yogaPropsGuide: DecisionGuide = {
  path: "/traning/yogablock-eller-yogabalte", parent: { name: "Träning", href: "/traning" },
  title: "Yogablock eller yogabälte – stöd mot golvet eller ett band att hålla i?",
  intro: "Utgå från en bestämd övning. Ett korkblock och ett justerbart bomullsband hjälper på olika sätt; vi lovar inte bättre balans eller djupare stretch och rekommenderar inte båda som standardpaket.",
  decision: yogaPropsDecision, productPaths: ["/traning/yogablock", "/traning/yogabalte"],
  questions: [
    { question: "Måste jag köpa båda som nybörjare?", answer: "Nej. Välj först en övning och kontrollera om du saknar ett stöd eller ett band. Om din nuvarande utrustning fungerar behöver du inte köpa fler tillbehör." },
    { question: "Är alla BODYMATE-band samma modell?", answer: "Nej. Här beskriver vi 250 cm-bandet med D-ringar. Tillverkaren säljer också ett 190 cm-band med tio fasta öglor. Kontrollera beteckning, längd och grepp innan köp." },
    { question: "Är 400 gram vikten på hela blockpaketet?", answer: "Nej. Tillverkaren anger 400 gram per block och två block i paketet. Måtten 22 × 12 × 7,5 cm gäller också ett block." },
    { question: "Kan ni lova att bältet förbättrar min rörlighet?", answer: "Nej. Vi har inte gjort ett användar- eller träningstest. Ett redskap och en produktspecifikation räcker inte för att bedöma din teknik eller förväntade resultat." },
  ],
  related: [{ href: "/traning/yogamatta", text: "Vilket underlag behöver dina övningar?" }],
};
