import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const runningCarryDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "haissky-loparbalte", model: "HAISSKY löparbälte – variant ej verifierad",
      variant: "Katalogen länkar till ASIN B08HYWNG9H. Vi har inte verifierat fickmått, midjeintervall, stängning, material eller flaskförvaring för den artikeln. Märkets olika väskor kan inte behandlas som samma modell.",
      chooseIf: "du vill undersöka ett bälte för telefon, nycklar och mindre saker och först kan kontrollera att just din packning ryms. Det är ett villkorat råd om bärsättet, inte en verifierad rekommendation av HAISSKY-modellen.",
      avoidIf: "du behöver bekräftad plats för en flaska eller förväntar dig ett löfte om att väskan inte studsar eller släpper in vatten. Sådana egenskaper är inte verifierade för den länkade varianten.",
      sourceIds: ["L1"], merchantVariantVerified: false,
    },
    {
      productSlug: "salomon-loparvast", model: "Salomon ACTIVE SKIN 4 – LC1757700",
      variant: "Unisexmodellen i Salomons serie LC10968, artikel LC1757700. Angiven packvolym 4 liter och två 500 ml-flaskor ingår. Kompatibel med 1,5 liters vätskeblåsa; det betyder inte att blåsan ingår. ASIN B0C5LZPRB2, storlek och svensk leverans är inte matchade.",
      chooseIf: "du vill bära flaskor framtill och behöver mer packutrymme än dina befintliga fickor ger. Prova med din planerade packning och kontrollera storleksguiden för just denna version före köp.",
      avoidIf: "du bara behöver förvara småsaker som redan ryms bra i det du har, behöver en annan kapacitet eller vill ha en garanti om passform och skavfrihet. Vi har inte provsprungit med västen.",
      sourceIds: ["L2"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "Du faktiskt använder extra packutrymme, åtkomliga flaskfickor eller en bättre passform som du själv har kunnat kontrollera. Jämför vilka flaskor som ingår och vilka tillbehör som köps separat. Vi har inte verifierat dagens prisskillnad eller utsett ett budgetalternativ.",
  noPurchaseWhen: "Telefon, nycklar och den övriga packning du planerar redan ryms i en lösning som fungerar för dig. En väst behövs inte bara för att rundan passerar en viss tidsgräns. Lista det du ska bära och välj sedan bärlösning.",
  swedishContext: "Skilj packvolym i liter från flaskornas vätskevolym. Kontrollera storlek, artikelnummer och medföljande flaskor i den svenska beställningen. Prova passformen med de kläder du använder och undersök returvillkoren före provning. Vi har inte kontrollerat totalpris, lager eller regnskydd för telefonen.",
  testing: "Vi har granskat Salomons beskrivning av LC1757700. Vi har inte provat studs, värme, skav, telefonpassning eller åtkomst under löpning. HAISSKY:s exakta butikspost kunde inte läsas. Vi bedömer packning och produktinnehåll, inte ditt individuella vätskebehov.",
  limitations: "Salomons angivna packvolym garanterar inte att din jacka och övriga saker passar tillsammans med flaskorna. Produktens storlek och last påverkar vad du behöver prova. Bilder med kontrollerad användningsrätt och matchade svenska butikspaket återstår.",
  sources: [
    { id: "L1", title: "HAISSKY – katalogens butikslänk, ej verifierad", url: "https://www.amazon.se/dp/B08HYWNG9H", checkedAt: "2026-09-09", status: "unavailable", supports: "Kontrollförsök utan läsbart produktunderlag. Bekräftar inte mått, stängning, flaskförvaring, pris eller lager." },
    { id: "L2", title: "Salomon – ACTIVE SKIN 4, LC1757700", url: "https://www.salomon.com/en-gb/product/active-skin-4-lc10968", checkedAt: "2026-09-09", supports: "Artikelreferens, 4 liters packvolym, två 500 ml-flaskor och kompatibilitet med 1,5 liters vätskeblåsa. Brittisk produktsida; inte bevis för svensk leverans eller individuell komfort." },
  ],
};

export const runningCarryGuide: DecisionGuide = {
  parent: { name: "Träning", href: "/traning" },
  path: "/traning/loparvast-eller-midjevaska",
  title: "Löparväst eller midjeväska – vad ska du bära?",
  intro: "Telefon och nycklar, eller även flaskor och extra packning? Börja med innehållet och hur du vill komma åt det. En viss löptid avgör inte automatiskt vilken väska som passar.",
  decision: runningCarryDecision,
  productPaths: ["/traning/loparbalte", "/traning/loparvast"],
  questions: [
    { question: "Betyder ACTIVE SKIN 4 att fyra liter vatten ingår?", answer: "Nej. Fyra liter är den angivna packvolymen. De två medföljande flaskorna rymmer 500 ml var, sammanlagt en liter. Volymerna beskriver olika saker." },
    { question: "Ingår en vätskeblåsa?", answer: "Salomon anger två flaskor som inkluderade och 1,5 liters blåsa som kompatibel. Räkna inte blåsan som medföljande utan en uttrycklig paketbeskrivning." },
    { question: "Kan inget löparbälte bära vatten?", answer: "Det går inte att dra den slutsatsen från denna jämförelse. Kontrollera flasklösningen för det bälte du överväger. HAISSKY-artikelns konstruktion är inte verifierad här." },
    { question: "Går det att garantera att bältet eller västen inte studsar?", answer: "Vi har inget sådant testresultat. Prova med den packning du ska använda och följ modellens justeringsanvisningar. Köparberöm är inte en garanti för din passform." },
  ],
  related: [{ href: "/traning", text: "Fler köpfrågor för träning" }],
};
