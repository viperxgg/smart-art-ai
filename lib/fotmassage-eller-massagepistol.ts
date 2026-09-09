import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { massageGunDecision } from "@/lib/massage-gun-decision";

export const footMassageDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "beurer-fotmassage", model: "Beurer FM 90",
      variant: "Artikel 64506, EAN 4211125645069. Katalogens ASIN B07H7QZVSP är inte matchat mot ett aktuellt svenskt erbjudande. Inte fotbadet FB 35.",
      chooseIf: "du vill ha fotmassage när du sitter och har plats för apparaten och elanslutningen. Beurer beskriver shiatsu, tre nivåer av lufttryck och valbar värme, med passform upp till EU-storlek 46.",
      avoidIf: "du behöver massage på andra kroppsdelar eller har skadad eller inflammerad hud på fötterna. Manualen kräver läkarkontakt före användning vid bland annat diabetes, nedsatt smärtkänsel eller oklar smärta. Läs hela begränsningslistan.",
      sourceIds: ["F1", "F2"], merchantVariantVerified: false,
    },
    massageGunDecision.options[0],
  ],
  payMoreWhen: "En skillnad i passform, grepp eller reglage löser ett konkret behov. En fotapparat och en handhållen pistol ersätter inte automatiskt varandra. Vi har inte jämfört ljud, tryck, effekt eller aktuella totalpriser och anger ingen prisvinnare.",
  noPurchaseWhen: "Du saknar ett tydligt användningsbehov eller redan har något som fungerar. Köp inte en apparat för att själv behandla oförklarad smärta. En present är inte skäl att bortse från mottagarens önskemål eller manualens begränsningar.",
  swedishContext: "FM 90 anges till 36 × 42 × 25 cm och 4,6 kg utan förpackning på Beurers globala sida. Kontrollera plats, förvaring och egen fotpassform; EU 46 är ingen individuell garanti. Rätt nätadapter, begripliga instruktioner och svensk leverans måste bekräftas för båda modellerna.",
  testing: "Vi har jämfört Beurers modelluppgifter och manualer, inte provat apparaterna. Vi vet inte hur trycket känns, hur snabbt värmen märks eller vilken som upplevs tystast. Tillverkarens massagefunktioner är inte bevis för snabbare återhämtning.",
  limitations: "Båda är avsedda för privat användning, inte medicinsk behandling. FM 90 ska användas sittande och högst 15 minuter enligt manualen; avstängningen ersätter inte tillsyn. MG 99 får inte användas överallt på kroppen. Inga löften om smärtlindring, förbättrad cirkulation eller träningsresultat ges. Bildrättigheter och erbjudanden återstår.",
  sources: [
    { id: "F1", title: "Beurer – FM 90, artikel 64506", url: "https://www.beurer.com/global/p/64506/", checkedAt: "2026-09-09", supports: "Artikel/EAN, shiatsu och lufttryck, valbar värme, storleksgräns, mått och vikt utan förpackning. Globala produktuppgifter, inte verifierad svensk leverans." },
    { id: "F2", title: "Beurer – FM 90 bruksanvisning, 2021-03-26", url: "https://pim.beurer.com/images/attribut/645.06_FM90_2021-03-26_04_IM1_BEU.pdf", checkedAt: "2026-09-09", supports: "Engelska sidor 15–20: avsedd användning, kontraindikationer, sittande användning och tidsgräns. Läs fullständiga instruktioner, inte bara denna sammanfattning." },
    ...massageGunDecision.sources.map(source => ({ ...source, checkedAt: "2026-09-09" })),
  ],
};

export const footMassageGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" },
  path: "/halsa/fotmassage-eller-massagepistol",
  title: "Fotmassage sittande eller ett redskap du styr själv?",
  intro: "FM 90 arbetar med fötterna i en golvplacerad apparat. MG 99 hålls och riktas för hand. Börja med användningsområde, passform och manualens begränsningar – inte löften om återhämtning.",
  decision: footMassageDecision,
  productPaths: ["/halsa/fotmassage", "/halsa/massagepistol/beurer-mg-99"],
  questions: [
    { question: "Passar FM 90 alla upp till storlek 46?", answer: "Beurer anger upp till EU 46, men vi har inte provat passformen. Fotens form och önskat utrymme kan påverka hur apparaten känns. Kontrollera passform och returvillkor i det aktuella erbjudandet." },
    { question: "Kan jag somna medan FM 90 går?", answer: "Nej. Manualen förbjuder användning under sömn och utan tillsyn. Den automatiska avstängningen gör inte sovande användning tillåten." },
    { question: "Kan MG 99 användas över hela kroppen?", answer: "Nej. Manualen utesluter bland annat huvud, ansikte, ryggrad och skadad vävnad. Den nämner fotsulan för ett särskilt huvud, men det är inte ett generellt råd att behandla fötter med valfritt mjukt huvud. Läs modellens instruktioner och begränsningar först." },
    { question: "Vilken ger bäst återhämtning?", answer: "Det har vi inte underlag för att avgöra. Vi har varken jämförande kroppstester eller belägg för att någon av modellerna förbättrar dina träningsresultat. Välj efter tillåten användning och praktisk passform, om du alls behöver köpa." },
  ],
  related: [
    { href: "/halsa/massagepistol", text: "Kontrollera massagepistolens begränsningar" },
    { href: "/halsa/massagepistol-eller-spikmatta", text: "Massagepistol eller spikmatta?" },
    { href: "/halsa", text: "Fler beslut för vardagen" },
  ],
};
