import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const airStylerDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "babyliss-as126e-varmluftsborste", model: "BaByliss AS126E Perfect Finish",
    variant: "AS126E. Manualen beskriver 38 mm volymborste, 20 mm mjuk borste, plattningstillbehör och torkningsmunstycke. Kontrollera att just dessa delar ingår i erbjudandet.",
    chooseIf: "du vill växla mellan borstar och plattningstillbehör och kan arbeta med en slinga i taget. Två värmelägen och kalluft ger fler inställningsval än ett enda fast läge.",
    avoidIf: "du väntar dig färdig frisyr direkt från genomblött hår. Manualen utgår från cirka 80 procent torrt, genomkammat hår. Fler tillbehör betyder också fler byten; resultatet är inte automatiskt.",
    sourceIds: ["A1"], merchantVariantVerified: false,
  }, {
    productSlug: "remington-as7100-varmluftsborste", model: "Remington AS7100 Blow Dry and Style",
    variant: "400 W-modell med 19 och 25 mm borstar och två kombinerade värme-/hastighetslägen. Den granskade manualen är brittisk; rätt kontakt och aktuellt svenskt paket måste kontrolleras.",
    chooseIf: "du främst behöver mindre borstdiametrar för formning och klarar dig utan separat plattningstillbehör. Tillverkaren riktar modellen mot kort hår; kontrollera att slingorna kan läggas runt borsten i din frisyr.",
    avoidIf: "du behöver kalluft eller de extra tillbehören i AS126E-paketet. Manualen rekommenderar 70–80 procent torrt hår före styling. Vi har inte visat att modellen är billigast, snabbast eller bäst för allt kort hår.",
    sourceIds: ["A2", "A3"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Ett extra tillbehör eller kalluftsläge löser ett återkommande behov. Betala inte för fler delar som blir liggande, eller för ett högre wattal som om det bevisade bättre finish.",
  noPurchaseWhen: "Din nuvarande borste och fön redan fungerar. Prova först om du behöver ett nytt grepp eller verkligen saknar ett tillbehör; du behöver inte byta en fungerande rutin mot ett kombinationsverktyg.",
  swedishContext: "Matcha modell, kontakt och hela tillbehörspaketet före köp. Den svenska Remington-sidan stöder modellens grunduppgifter, men bekräftar inte ett visst butikserbjudande. Pris, lager och garantivillkor hos en svensk säljare är inte kontrollerade.",
  testing: "Vi har läst tillverkarnas dokumentation. Vi har inte provat grepp, ljud, stylingtid, frizz eller hur länge frisyren håller. Ingen testvinnare eller kundrecension används som bevis för resultat.",
  limitations: "Förberedande torkning ingår i rutinen. AS7100:s rotationslås hjälper borsten att rotera fritt när håret lossas; det är inte motordriven styling. Stäng av, dra ur och låt apparaten svalna före rengöring. Följ rätt manual, även för filter och tillbehör. Bildrättigheter och butiksmatchning återstår.",
  sources: [
    { id: "A1", title: "BaByliss – AS126E bruksanvisning, svensk text (PDF)", url: "https://www.babyliss.com/on/demandware.static/-/Sites-ml-babyliss-Library/nl_BE/v1756477780261/information-booklets/AS126E_IB.pdf", checkedAt: "2026-09-09", supports: "Fyra tillbehör, 38/20 mm borstar, förtorkning, två värmelägen plus kalluft och skötsel. Tillverkarens instruktioner, inte vårt produkttest." },
    { id: "A2", title: "Remington Sverige – AS7100", url: "https://se.remington-europe.com/produkter/blow-dry-style-caring-400w-varmluftsborste-AS7100", checkedAt: "2026-09-09", supports: "400 W, 19/25 mm borstar och två värme-/hastighetslägen. Inriktningen på kort hår kommer från tillverkaren; den bevisar inte individuell passform." },
    { id: "A3", title: "Remington – AS7100 UK-manual, version 04/22 (PDF)", url: "https://cdn-img.remington-europe.com/manager/User%20Manuals/EU/aw21/45759540100_9709.pdf", checkedAt: "2026-09-09", supports: "Förtorkning, kombinerade inställningar, rotationslåsets frigöringsfunktion och rengöring. Brittisk manual är inte bevis för svensk kontakt eller aktuellt butikspaket." },
  ],
};

export const airStylerGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/varmluftsborste",
  title: "Vilka tillbehör behöver du i en varmluftsborste?",
  intro: "AS126E har fyra typer av tillbehör och kalluft. AS7100 har två mindre borstar. Båda rutinerna börjar med till stor del torrt hår – välj efter momenten du faktiskt vill göra.",
  decision: airStylerDecision,
  productPaths: ["/skonhet/varmluftsborste/babyliss-as126e", "/skonhet/varmluftsborste/remington-as7100"],
  questions: [
    { question: "Kan jag hoppa över förtorkningen?", answer: "Räkna med förberedelsen i din morgonrutin: AS126E-manualen anger cirka 80 procent torrt hår och AS7100-manualen 70–80 procent. Vi har inte mätt total tidsvinst jämfört med separat fön och borste." },
    { question: "Roterar AS7100 av sig själv?", answer: "Manualen beskriver ett lås som kan frigöra borsten så att den roterar fritt när du lossar håret. Det är inte ett löfte om en motor som rullar upp slingorna åt dig." },
    { question: "Är fyra tillbehör alltid bättre än två?", answer: "Bara om de extra funktionerna behövs. AS126E har även plattnings- och torkningstillbehör; AS7100 fokuserar på två mindre borstar. Vi har inte jämfört finish eller hållbarhet i användning." },
  ],
  related: [{ href: "/skonhet/varmluftsborste-eller-plattang", text: "Borstning med luft eller plattång på torrt hår?" }, { href: "/skonhet/varmluftsborste-eller-fon", text: "Behöver du främst torka eller forma?" }],
};
