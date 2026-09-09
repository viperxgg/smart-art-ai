import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const strapsGlovesDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "fitgriff-lifting-straps", model: "Fitgriff lyftremmar – modell ej verifierad",
      variant: "Katalogen länkar till ASIN B01F2OGJQM. Vi har inte kunnat kontrollera aktuell artikel, remtyp, längd, material eller förpackningsinnehåll. Köp inte utifrån en generisk Fitgriff-beskrivning.",
      chooseIf: "du vill undersöka remmar för ett bestämt dragmoment där greppet begränsar dig. Kontrollera först att den exakta remtypen är avsedd för övningen och att du förstår tillverkarens användningsanvisning. Detta är ett kategorival, inte en verifierad Fitgriff-rekommendation.",
      avoidIf: "du främst vill täcka handflatan, träna utan redskap runt stången eller saknar instruktioner för den aktuella remmen. Vi lovar varken fler repetitioner eller starkare grepp på sikt.",
      sourceIds: ["R1", "R2"], merchantVariantVerified: false,
    },
    {
      productSlug: "ihuan-traningshandskar", model: "ihuan träningshandskar – modell ej verifierad",
      variant: "Katalogen länkar till ASIN B07D2XMDJB. Fingerutförande, storlekstabell, material och handledsdel är inte bekräftade för den aktuella artikeln. Liknande produktnamn räcker inte för en matchning.",
      chooseIf: "du vill ha ett lager mellan handflatan och redskapet och kan prova passformen utan att förlora returrätten. Kontrollera sömmar, greppkänsla och rörelsefrihet. Det är en anledning att undersöka handskar, inte ett belägg för att just ihuan passar dig.",
      avoidIf: "du vill ha en garanti mot valkar eller skavsår, förväntar dig stadigare grepp i alla övningar eller söker en ersättning för lyftremmar. Dessa effekter är inte verifierade för modellen.",
      sourceIds: ["R3"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "Den exakta produktens passform, konstruktion och instruktioner motsvarar ett behov som billigare alternativ inte uppfyller. Vi har inte jämfört aktuella priser eller hållbarhet och utser ingen prisvinnare. Köp inte både remmar och handskar bara för att de säljs som gymtillbehör.",
  noPurchaseWhen: "Du redan kan genomföra din planerade träning med ett grepp som fungerar och inte vill ha extra material på händerna. Identifiera först vilken övning eller kontakt med redskapet som faktiskt stör dig; ett oklart problem motiverar inte ett nytt tillbehör.",
  swedishContext: "Matcha ASIN, vald storlek och utförande före betalning. Kontrollera om priset avser ett par, hur handen ska mätas samt frakt och returvillkor till Sverige. Vi har inte verifierat svenska butikspaket, totalpris eller tävlingsregler.",
  testing: "Vi har läst sammanfattningen av en studie där 20 män utförde marklyft med och utan remmar vid två tillfällen. Resultaten skilde sig mellan villkoren. Det är inte ett test av Fitgriff eller ihuan och visar inte långsiktig grepputveckling, skydd mot hudbesvär eller vad varje person behöver. Vi har inte provat produkterna.",
  limitations: "Båda exakta modellerna saknar verifierat produktunderlag. Butikssidorna gick inte att läsa vid kontrollen. Därför anger vi inga materialmått, belastningsgränser, storleksråd eller produktbetyg. Bilder med verifierad modell och användningsrätt återstår också.",
  sources: [
    { id: "R1", title: "Jukic med flera (2020) – marklyft med och utan remmar", url: "https://pubmed.ncbi.nlm.nih.gov/33044371/", checkedAt: "2026-09-09", supports: "Sammanfattning av en studie med 20 män och två testtillfällen. Underlag för att skilja testvillkoren åt; ingen verifiering av dessa två produkter eller av skadeförebyggande effekt." },
    { id: "R2", title: "Fitgriff – katalogens butikslänk, ej verifierad", url: "https://www.amazon.se/dp/B01F2OGJQM", status: "unavailable", checkedAt: "2026-09-09", supports: "Kontrollförsök utan läsbart produktunderlag. Bekräftar inte variant, material, mått, pris eller lager." },
    { id: "R3", title: "ihuan – katalogens butikslänk, ej verifierad", url: "https://www.amazon.se/dp/B07D2XMDJB", status: "unavailable", checkedAt: "2026-09-09", supports: "Kontrollförsök utan läsbart produktunderlag. Bekräftar inte utförande, storlek, material, pris eller lager." },
  ],
};

export const strapsGlovesGuide: DecisionGuide = {
  parent: { name: "Träning", href: "/traning" },
  path: "/traning/lyftremmar-eller-traningshandskar",
  title: "Lyftremmar eller handskar – vad vill du ändra med greppet?",
  intro: "Börja med skillnaden mellan hjälp att hålla redskapet och ett lager över handflatan. Här får du frågor att avgöra köpet med. Fitgriff- och ihuan-modellerna är ännu inte verifierade, så vi kan inte rekommendera ett specifikt butikspaket.",
  decision: strapsGlovesDecision,
  productPaths: ["/traning/lifting-straps", "/traning/traningshandskar"],
  questions: [
    { question: "Ger remmar automatiskt fler repetitioner?", answer: "Nej, vi kan inte lova det. Studien R1 undersökte maximal belastning och rörelsehastighet i marklyft, inte en garanti om fler repetitioner med Fitgriff. Resultat från ett bestämt test ska inte omvandlas till ett allmänt köplöfte." },
    { question: "Skyddar ihuan mot valkar och skavsår?", answer: "Vi har inte verifierat det. Kontrollera passform, sömmarnas placering och hur handen kan röra sig. Ett lager material är inte i sig bevis för bättre komfort eller förebyggda hudbesvär." },
    { question: "Behöver jag köpa båda?", answer: "Börja med ett konkret behov. Det finns ingen verifierad anledning här att rekommendera ett paket med både handskar och remmar till alla som tränar." },
    { question: "Vilken storlek eller remlängd ska jag välja?", answer: "Vi saknar en verifierad tabell för de länkade artiklarna. Använd instruktionerna för exakt modell och variant; överför inte mått från en liknande produkt eller ett annat märke." },
  ],
  related: [{ href: "/traning/handledslindor-eller-lyftremmar", text: "Handledslindor eller lyftremmar?" }],
};
