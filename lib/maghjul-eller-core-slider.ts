import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const rollerSliderDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    { productSlug: "amonax-maghjul", model: "Amonax Black 3 in 1 Combo Set", variant: "ASIN B098B22J3W: maghjul med knämatta, ett par armhävningshandtag och hopprep. Hjulet kan monteras i enkel- eller dubbelhjulsläge. Butikslänken öppnade detta svarta paket, inte ett fristående maghjul.", chooseIf: "du behöver ett hjul för planerade utrullningar och även har användning för paketets handtag och hopprep. Kontrollera fri rörelseyta och monteringen enligt anvisningarna.", avoidIf: "du bara behöver ett maghjul eller redan äger övriga delar. Då kan paketet ge onödiga dubbletter. Välj inte redskapet enbart utifrån löften om synliga magmuskler.", sourceIds: ["R1", "R3"], merchantVariantVerified: true },
    { productSlug: "gorilla-core-slider", model: "Gorilla Sports Floor Sliders – svart 2-pack", variant: "ASIN B08THT9W5L. Två dubbelsidiga glidplattor, 17,5 cm i diameter och 0,8 cm höga, med bärpåse. Den svenska sidan beskriver loggsidan för glatta golv och undersidan för matta.", chooseIf: "din övning kräver att händer eller fötter glider och du har kontrollerat att rätt sida fungerar på ditt underlag. Formatet passar om du vill kunna packa ned redskapet i en liten påse.", avoidIf: "du behöver fast stöd utan glidning eller inte vet om underlaget tål användningen. Två glidytor gör inte automatiskt redskapet lättare eller skonsammare än ett maghjul.", sourceIds: ["R2", "R4"], merchantVariantVerified: true },
  ],
  payMoreWhen: "Tillbehör du faktiskt saknar eller en kontrollerad funktion motiverar skillnaden. Jämför ett helt Amonax-paket med kostnaden för de delar du behöver; ett högre paketpris är inte bevis på ett bättre maghjul. Vi har inte jämfört dagens totalpriser.",
  noPurchaseWhen: "Ditt nuvarande upplägg fungerar utan hjul eller glidplattor. Du behöver inte köpa ett nytt redskap för att träna hemma. Prova gärna typen där du redan tränar innan du köper något med okänd golvkänsla eller montering.",
  swedishContext: "Kontrollera golvets och redskapets anvisningar tillsammans, särskilt på känslig parkett. Rätt glidyta är inte en garanti mot repor. Mät utrymmet för hela rörelsen och kontrollera paketnamnet i beställningen; butikens huvudrubrik kan vara bredare än den valda varianten.",
  testing: "Vi har läst tillverkarnas produktbeskrivningar och kontrollerat båda länkade varianterna på Amazon.se. Vi har inte provat friktion, golvskydd, hållbarhet eller övningarnas svårighet. Detta är en jämförelse av redskap och paket, inte ett personligt träningsprogram.",
  limitations: "Ingen jämförande träningsstudie eller egen provning ligger bakom ett påstående om vilket redskap som ger bäst resultat. Vi använder inte butikernas kalorilöften eller belastningsfält som testbevis. Bilder med verifierad användningsrätt saknas. Länkmatchningen gäller kontrolltillfället.",
  sources: [
    { id: "R1", title: "Amonax – Ab Roller Home Workout Set", url: "https://www.amonax.com/products/ab-roller-home-workout-set", checkedAt: "2026-09-09", supports: "Paket med omställbart maghjul, hopprep och armhävningshandtag. Tillverkarens resultat- och kaloripåståenden används inte som effektbevis." },
    { id: "R2", title: "Gorilla Sports Sverige – Slide Pads Floor Sliders", url: "https://www.gorillasports.se/products/slide-pads-floor-sliders", checkedAt: "2026-09-09", supports: "Ett par, bärpåse, diameter 17,5 cm, höjd 0,8 cm och vilken sida som anges för glatta golv respektive matta." },
    { id: "R3", title: "Amazon.se – Amonax Black 3 in 1 Combo Set", url: "https://www.amazon.se/dp/B098B22J3W", checkedAt: "2026-09-09", supports: "Vald svart 3-i-1-variant, ASIN, knämatta, hjul med två monteringslägen, hopprep och handtag. Den breda rubriken ensam identifierar inte paketet." },
    { id: "R4", title: "Amazon.se – Gorilla Sports glidplattor 2-pack", url: "https://www.amazon.se/dp/B08THT9W5L", checkedAt: "2026-09-09", supports: "Länkad svart tvåpacksversion med påse och mått som överensstämmer med den svenska produktsidan. Inget eget golvtest." },
  ],
};

export const rollerSliderGuide: DecisionGuide = {
  parent: { name: "Träning", href: "/traning" },
  path: "/traning/maghjul-eller-core-slider",
  title: "Maghjul eller core sliders – vad passar övningen och golvet?",
  intro: "Ett hjul och två glidplattor ger olika kontakt med golvet. Utgå från rörelsen du vill göra och underlaget hemma. Observera att Amonax-länken gäller ett 3-i-1-paket med fler redskap, medan Gorilla-alternativet är två glidplattor med påse.",
  decision: rollerSliderDecision,
  productPaths: ["/traning/maghjul", "/traning/core-slider"],
  questions: [
    { question: "Får jag bara ett maghjul från Amonax?", answer: "Inte med den variant vi kontrollerade. Black 3 in 1 Combo Set innehåller också hopprep och ett par armhävningshandtag; knämatta anges med hjulet. Kontrollera det valda paketet före köp, inte bara produktens huvudrubrik." },
    { question: "Fungerar glidplattorna på alla golv?", answer: "Tillverkaren beskriver olika sidor för glatta golv och matta. Vi har inte testat ditt underlag eller verifierat skydd mot repor. Följ både golvets skötselråd och redskapets anvisningar; anta inte att samma sida fungerar överallt." },
    { question: "Behöver jag köpa fyra glidplattor?", answer: "Paketet innehåller två. Köp inte ett extra par utan att din planerade övning faktiskt kräver det. Antalet redskap säger inte i sig något om träningsresultatet." },
    { question: "Är sliders självklart bättre för nybörjare?", answer: "Vi har inte underlag för en sådan generell rangordning. Svårigheten beror också på övning, rörelseomfång och underlag. Välj efter ett upplägg du kan använda, inte efter en etikett som lovar att redskapet är lätt eller skonsamt." },
  ],
  related: [{ href: "/traning/balansplatta-eller-gymboll", text: "Behöver övningen en balansplatta eller en boll?" }],
};
