import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { massageGunDecision } from "@/lib/massage-gun-decision";

export const bodymateCareDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "bodymate-foam-roller-care",
    model: "BODYMATE CARE – mittel-hart, 35 × 14 cm",
    variant: "En separat rulle, cirka 140 g enligt tillverkaren, med en runtgående ränna. CARE finns också som extra-hart och i set. Den svenska butikspostens hårdhet och paket är inte matchade.",
    chooseIf: "du söker en separat rulle i formatet 35 × 14 cm och har kontrollerat att just den medelhårda varianten passar den användning du planerar. Du behöver inte välja ett set för att få den här rullen.",
    avoidIf: "du söker en mjuk rulle, andra mått eller ett bekräftat komplett set. Vi har inte underlag för att rekommendera den för behandling av ryggsmärta eller för att kalla rännan ett skydd mot skada.",
    sourceIds: ["R1", "R2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "En annan verifierad storlek, hårdhet eller del fyller ett konkret behov. Fler delar, extra hårdhet och ord som deep tissue visar inte att användningen blir bättre för dig. Jämför exakt paket och totalpris, inte bara antal tillbehör.",
  noPurchaseWhen: "Du redan har en rulle som fungerar för den användning du planerar, eller inte vet vad den nya rullen ska tillföra. Det finns inget köptvång för att en guide handlar om återhämtning.",
  swedishContext: "Underlaget är från tillverkarens tyska butik. Kontrollera beteckningen mittel-hart respektive extra-hart, måtten och paketet i erbjudandet för Sverige. Svensk leverans, totalpris och instruktionernas språk är ännu inte verifierade.",
  testing: "Vi har kontrollerat tillverkarens material, mått och variantbeskrivning. Vi har inte provat rullen, mätt hårdhet eller hållbarhet, eller testat effekter på smärta och återhämtning.",
  limitations: "EPP betyder expanderad polypropen; rullen är alltså inte plastfri. Rännans form är dokumenterad, men tillverkarens hälsopåståenden är inte ett oberoende behandlingstest. Bildrättigheter och exakt butiksvariant återstår.",
  sources: [
    { id: "R1", title: "BODYMATE – CARE mittel-hart, produktspecifikation", url: "https://shop.bodymate.de/products/faszienrolle-care-standard", checkedAt: "2026-09-09", supports: "Separat medelhård CARE: 35 cm lång, 14 cm diameter, cirka 140 g, runtgående ränna och EPP (expanderad polypropen). Inte bevis för behandlingseffekt." },
    { id: "R2", title: "BODYMATE – CARE-sortiment", url: "https://shop.bodymate.de/collections/faszienrolle-care", checkedAt: "2026-09-09", supports: "Skiljer CARE mittel-hart från CARE extra-hart och Care-set. Samma familjenamn innebär inte samma variant eller paket." },
  ],
};

export const rollerMassageGuide: DecisionGuide = {
  path: "/traning/foam-roller-eller-massagepistol", parent: { name: "Träning", href: "/traning" },
  title: "Foam roller eller massagepistol – vilken användning söker du?",
  intro: "Här skiljer vi en separat BODYMATE CARE-rulle från Beurer MG 99:s motoriserade massage. Vi har inte jämfört återhämtning eller smärtlindring och rekommenderar inte att du automatiskt köper båda.",
  decision: {
    ...bodymateCareDecision,
    options: [...bodymateCareDecision.options, ...massageGunDecision.options],
    sources: [...bodymateCareDecision.sources, ...massageGunDecision.sources],
    payMoreWhen: "Den andra redskapstypen fyller ett konkret behov som din befintliga utrustning inte täcker. MG 99:s fem nivåer och fyra huvuden är dokumenterade; de bevisar inte bättre återhämtning än en rulle. Aktuella totalpriser är inte jämförda.",
    swedishContext: "Kontrollera CARE:s hårdhet och paket. För MG 99 behöver även laddare, nätkontakt och instruktioner matcha erbjudandet för Sverige. Ingen av butiksversionerna är färdigverifierad.",
    testing: "Vi har läst BODYMATE:s specifikation och Beurers manual. Vi har inte använt redskapen eller jämfört smärta, återhämtning, ljud eller upplevt tryck.",
    limitations: "MG 99:s manualbegränsningar gäller den modellen och kan inte överföras till rullen. Vi ger inget generellt behandlings- eller dagligt användningsschema. CARE:s EPP är en plast; dess ränna bevisar inte skadefri användning. Bilder och butiksvarianter återstår.",
  },
  productPaths: ["/traning/foam-roller/bodymate-care", "/halsa/massagepistol/beurer-mg-99"],
  questions: [
    { question: "Vilken ger bäst återhämtning?", answer: "Det kan vi inte avgöra från produktspecifikationerna. Vi har inget jämförande test och gör inte tillverkarnas effektpåståenden till vår slutsats." },
    { question: "Måste jag köpa båda?", answer: "Nej. Utgå från vad du saknar. Ett redskap eller den utrustning du redan använder kan vara tillräckligt; vi har inte belägg för att just den här kombinationen behövs." },
    { question: "Gäller samma instruktioner för båda?", answer: "Nej. Läs anvisningarna för exakt modell och användningssätt. Beurers manual innehåller särskilda förbud och begränsningar som framgår i dess källavsnitt." },
  ],
  related: [{ href: "/guider/foam-roller-dyr-vs-billig", text: "Vad behöver en dyrare rulle tillföra?" }],
};

export const rollerPriceGuide: DecisionGuide = {
  path: "/guider/foam-roller-dyr-vs-billig",
  title: "Dyrare foam roller – vad saknar du i den du har?",
  intro: "Utgå från mått, hårdhet och vilka delar du faktiskt behöver. BODYMATE CARE är ett dokumenterat exempel; vi har inte belägg för att en dyrare eller mer texturerad rulle ger bättre resultat.",
  decision: bodymateCareDecision,
  productPaths: ["/traning/foam-roller/bodymate-care"],
  questions: [
    { question: "Är extra hård samma sak som bättre?", answer: "Nej, en hårdhetsbeteckning är inte ett testresultat. CARE finns i olika hårdheter, men vi har inte jämfört hur de känns eller vilken som passar dig." },
    { question: "Är ett stort set mer prisvärt?", answer: "Bara antal delar avgör inte värdet. Skriv ned vilka delar du skulle använda och jämför exakt innehåll och totalpris. Vi har inte verifierat Elvire-setets aktuella variant och utser ingen setvinnare." },
    { question: "Är BODYMATE CARE plastfri?", answer: "Nej. Tillverkaren anger EPP, expanderad polypropen. Att beskriva den som plastfri vore fel." },
  ],
  related: [{ href: "/traning/foam-roller-eller-massagepistol", text: "Jämför rulle med MG 99 utan behandlingslöften" }],
};

export const rollerGuide: DecisionGuide = {
  ...rollerPriceGuide,
  path: "/traning/foam-roller", parent: { name: "Träning", href: "/traning" },
  title: "Foam roller – räcker en separat rulle?",
  intro: "Börja med format och hårdhet. Här finns dokumentation för BODYMATE CARE mittel-hart. Elvire-setets exakta modell och innehåll är ännu inte verifierade, så vi utser ingen vinnare mellan rulle och set.",
};
