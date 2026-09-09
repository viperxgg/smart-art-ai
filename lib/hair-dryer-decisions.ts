import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const hairDryerDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "remington-proluxe-ac9140-hartork", model: "Remington PROluxe AC9140",
    variant: "AC9140, inte AC9140B Midnight Edition. Manualen listar två koncentratorer och en diffusor, alltså tre tillbehör totalt. Svensk produktsida anger 2400 W AC-motor och 3 m sladd.",
    chooseIf: "du behöver en diffusor eller koncentrator och vill välja värme och luftflöde separat. Tre värmelägen, två hastigheter och en separat kalluftsknapp finns enligt manualen.",
    avoidIf: "du främst söker en hopfällbar resetork eller tolkar Style Shot som kalluft. Style Shot höjer temperaturen; manualen säger att diffusorn inte ska användas på högsta värmen. Rundborste ingår inte.",
    sourceIds: ["D1", "D2"], merchantVariantVerified: false,
  }, {
    productSlug: "beurer-hc-25-hartork", model: "Beurer HC 25",
    variant: "HC 25, artikel 591.13: hopfällbart handtag och ett smalt munstycke. Datablad och manual anger cirka 426 g och växling mellan 100–120 V och 220–240 V. Kontrollera rätt version hos säljaren.",
    chooseIf: "du behöver ett handtag som går att fälla in för packning och klarar dig med ett munstycke. Kalluft väljs med en knapp som hålls in; de två vanliga lägena kombinerar värme och luftflöde.",
    avoidIf: "du behöver diffusor i paketet eller automatisk spänningsanpassning. HC 25 har en spänningsomkopplare. Maxeffekten 1600 W gäller inte hela spänningsområdet, och rätt stickkontakt måste fortfarande kontrolleras.",
    sourceIds: ["D3", "D4"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Diffusor, separata reglage eller en längre sladd gör konkret nytta där du använder hårtorken. Vi har inte visat att fler watt ger bättre finish, kortare torktid eller längre livslängd mellan dessa två modeller.",
  noPurchaseWhen: "Din befintliga hårtork fungerar och har de tillbehör du behöver. Kontrollera också om boendet redan erbjuder en lämplig hårtork innan du köper en extra för resan.",
  swedishContext: "Matcha modell, kontakt och paket. Beurer anger 800–1200 W vid det lägre spänningsområdet och 1350–1600 W vid det högre. Kontrollera rätt omkopplarläge enligt märkplåt och manual före anslutning; en kontaktadapter väljer inte läge åt dig. Aktuella svenska erbjudanden är inte matchade.",
  testing: "Vi har läst tillverkarnas produktblad och manualer. Vi har inte vägt exemplaren eller mätt ljud, torktid, hårpåverkan, motorlivslängd eller frizz. Ingen av modellerna utses till testvinnare.",
  limitations: "AC9140:s Style Shot beskrivs för hår som är 70–80 procent torrt; vanlig torkning har en annan förberedelse. Håll luftintag fria, stäng av och dra ur efter användning och låt apparaten svalna före rengöring. Följ den medföljande manualen. Bildrättigheter, aktuella paket och jämförbar vikt för AC9140 återstår.",
  sources: [
    { id: "D1", title: "Remington Sverige – PROluxe AC9140", url: "https://se.remington-europe.com/produkter/ac9140-proluxe-dryer", checkedAt: "2026-09-09", supports: "Modell, 2400 W AC-motor och 3 m sladd. Löften om frizz och salongsresultat är tillverkarens marknadsföring, inte våra mätningar." },
    { id: "D2", title: "Remington – AC9140 bruksanvisning (PDF)", url: "https://cdn-img.remington-europe.com/manager/remington-europe_com/User%20Manuals/ac9140_int.pdf", checkedAt: "2026-09-09", supports: "Två koncentratorer plus diffusor, separata reglage, Style Shot och kalluft, värmebegränsning för diffusorn och separat rundborste. Svensk text finns i manualen." },
    { id: "D3", title: "Beurer – HC 25 produktblad (PDF)", url: "https://pim.beurer.com/images/attribut/591.13_HC25_2021-12-17_01_DS_EN_BEU.pdf", checkedAt: "2026-09-09", supports: "Artikel 591.13, cirka 426 g, vikbart handtag och spänningsberoende effekt. Äldre datablad, inte bevis för en aktuell säljares exemplar." },
    { id: "D4", title: "Beurer – HC 25 manual, revision 2024-10-31 (PDF)", url: "https://res.cloudinary.com/beurer/image/upload/v1772030940/stibo-live/59113_HC25_2024-10-31_06_IM1_BEU_EN.pdf", checkedAt: "2026-09-09", supports: "Tillverkarens manual: ett munstycke, vikhandtag, spänningsomkopplare, två kombinerade lägen, kalluftsknapp och skötsel. Ingen verifiering av svensk kontakt eller lager." },
  ],
};
export const hairDryerGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/hartork",
  title: "Vilken hårtork passar din rutin – tillbehör hemma eller vikbart handtag?",
  intro: "AC9140 erbjuder diffusor och separata reglage. HC 25 har vikbart handtag och manuell spänningsväxling. Börja med funktionen du behöver, inte bara wattalet.",
  decision: hairDryerDecision,
  productPaths: ["/skonhet/hartork/remington-proluxe-ac9140", "/skonhet/hartork/beurer-hc-25"],
  questions: [
    { question: "Är Style Shot samma sak som kalluft?", answer: "Nej. På AC9140 höjer Style Shot temperaturen. Kalluft har en separat knapp. Följ manualens anvisningar för respektive funktion och diffusorns värmebegränsning." },
    { question: "Kan HC 25 automatiskt anpassa sig på resan?", answer: "Den har en spänningsomkopplare, inte verifierad automatisk anpassning. Kontrollera modellens märkplåt, rätt läge och rätt stickkontakt innan du ansluter den." },
    { question: "Torkar 2400 W alltid snabbare än 1600 W?", answer: "Vi har inte gjort ett jämförande torktest. Wattalet är en effektuppgift, inte ett tidsmått för ditt hår. Luftflöde, värmeläge, teknik och mängden hår ingår i rutinen." },
  ],
  related: [{ href: "/skonhet/varmluftsborste-eller-fon", text: "Behöver du torkning eller borstning med luft?" }, { href: "/skonhet/varmluftsborste", text: "Vilka borsttillbehör skulle du använda?" }],
};
