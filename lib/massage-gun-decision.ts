import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const massageGunDecision: DecisionRecord = {
  reviewedAt: "2026-09-08",
  options: [{
    productSlug: "beurer-mg-99-massagepistol",
    model: "Beurer MG 99 Compact",
    variant: "Artikel 650.03, fyra medföljande huvuden och fem intensitetsnivåer. Tillverkarens cirka 620 g gäller utan huvud och nätadapter. Svensk butiksvariant och nätkontakt är inte verifierade.",
    chooseIf: "du söker ett kompakt redskap för privat muskelmassage och har kontrollerat att manualens begränsningar inte utesluter din användning. Fem nivåer och fyra huvuden är dokumenterade; upplevd styrka har vi inte testat.",
    avoidIf: "du behöver ett medicinskt behandlingsredskap eller omfattas av manualens förbud, exempelvis pacemaker, graviditet eller skadad/inflammerad vävnad. Vid oklar smärta säger manualen att läkare ska rådfrågas före användning.",
    sourceIds: ["D1", "D2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "En verifierad skillnad i grepp, reglage eller utrustning passar din användning bättre. Antal lägen och känt varumärke visar inte ensamma effekt eller säkerhet; vi har inte jämfört aktuella totalpriser eller tryckkraft.",
  noPurchaseWhen: "Du saknar ett tydligt användningsbehov eller redan har ett redskap som fungerar. Köp inte en massagepistol för att själv behandla smärta vars orsak är okänd.",
  swedishContext: "Den länkade manualen är engelsk. Kontrollera att du får begripliga instruktioner, rätt nätadapter och rätt MG 99-variant i erbjudandet för Sverige. Manualen anger laddning med medföljande nätadapter; vi lovar inte USB-C-laddning.",
  testing: "Vi har läst Beurers produktsida och manual, inte provat apparaten på muskler. Vi har inte mätt ljud, slagkraft, batteritid eller om första nivån känns mild. Produktens vikt är inte angiven med alla tillbehör monterade.",
  limitations: "Manualen säger att detta inte är en medicinteknisk produkt och listar fler begränsningar än sammanfattningen här. Läs avsnitt 2 före användning. Automatisk avstängning efter 10 minuter är ingen rekommendation om daglig dosering. Bildrättigheter och butiksvariant återstår.",
  sources: [
    { id: "D1", title: "Beurer – MG 99 Compact, artikel 65003", url: "https://www.beurer.com/uk/p/65003/", checkedAt: "2026-09-08", supports: "Modell, fyra huvuden, fem nivåer och länkar till manual. Tillverkarens effektbeskrivningar är inte vårt jämförande test." },
    { id: "D2", title: "Beurer – MG 99 bruksanvisning, 2023-03-17", url: "https://res.cloudinary.com/beurer/image/upload/v1744513001/stibo-live/65003_MG99_2023-03-17_05_IM1_BEU_EN.pdf", checkedAt: "2026-09-08", supports: "Sidor 5–6: privat bruk och begränsningar. Sidor 9–10: laddning, nivåer och automatisk avstängning. Sida 12: cirka 620 g utan huvud/adapter. Inte ett underlag för ett generellt dagligt behandlingsschema." },
  ],
};

export const massageGunGuide: DecisionGuide = {
  path: "/halsa/massagepistol", parent: { name: "Hälsa & vardag", href: "/halsa" },
  title: "Massagepistol – passar användningen dig?",
  intro: "Börja med begränsningarna och manualen. Beurer MG 99 är ett dokumenterat exempel här; vi har inte verifierat den äldre BDBKMG-postens modelluppgifter och utser ingen pris- eller kraftvinnare.",
  decision: massageGunDecision, productPaths: ["/halsa/massagepistol/beurer-mg-99"],
  questions: [
    { question: "Betyder fler lägen bättre massage?", answer: "Inte en slutsats vi kan dra. Reglagens antal visar inte kraften under belastning eller hur användningen upplevs. Vi har inte gjort en sådan jämförelse." },
    { question: "Hur ofta ska jag använda den?", answer: "Vi anger inget generellt dagligt schema. Kontrollera först att manualen tillåter din användning, och följ dess instruktioner. Oklar smärta ska inte bli skäl till ett självvalt behandlingsprogram." },
    { question: "Är 620 gram vikten i handen?", answer: "Manualens cirka 620 gram avser apparaten utan massagehuvud och nätadapter. Vi har inte vägt den med ett huvud monterat." },
  ],
  related: [{ href: "/halsa", text: "Fler frågor inför ditt val för vardagen" }],
};

export const massageGunPriceGuide: DecisionGuide = {
  path: "/guider/dyr-massagepistol-vs-budget",
  title: "Dyrare massagepistol – vilken skillnad behöver du?",
  intro: "Börja med en funktion du faktiskt saknar. Vi har underlag för Beurer MG 99, men inget jämförande test som visar att dyrare massagepistoler är tystare, starkare eller bättre för dig.",
  decision: {
    ...massageGunDecision,
    payMoreWhen: "Du kan belägga en relevant skillnad mellan två exakta modeller, exempelvis grepp eller reglage som passar din användning. Jämför samma testförhållanden för ljud och belastning. Vi har inte sådana jämförande mätningar och anger därför ingen prispremie som värd pengarna.",
    noPurchaseWhen: "Din nuvarande utrustning fungerar eller du saknar ett tydligt användningsbehov. Ett nytt varumärke, fler lägen eller ett erbjudande är inte i sig ett skäl att byta.",
    limitations: "MG 99:s manual beskriver en modell; den bevisar inte vad alla billiga eller dyra apparater klarar. Vi har varken verifierat BDBKMG:s exakta modell eller jämfört aktuella svenska totalpriser. Ingen budget- eller premiumvinnare utses. Bildrättigheter och butiksvariant återstår.",
  },
  productPaths: ["/halsa/massagepistol/beurer-mg-99"],
  questions: [
    { question: "Är högre pris bevis för lägre ljud eller högre kraft?", answer: "Nej, vi har inga mätningar här som styrker det. Begär data för de exakta modellerna vid jämförbara inställningar och belastning. Antal lägen beskriver inte ljudnivå eller kraft under användning." },
    { question: "Betyder längre slag att massagen passar mig bättre?", answer: "Vi har inte belägg för den slutsatsen och rekommenderar inte att du söker djupast möjliga påverkan. Kontrollera först modellens avsedda användning och begränsningar. Ett tekniskt mått är inte ett individuellt behandlingsråd." },
    { question: "Räcker MG 99 som budgetval?", answer: "Vi kan beskriva dess fyra huvuden, fem nivåer och manualens begränsningar. Vi har inte provat den eller verifierat dagens pris, så vi kallar den varken budgetvinnare eller tillräcklig för alla hemmaanvändare." },
    { question: "Vad ska jag jämföra i det svenska erbjudandet?", answer: "Exakt modell, medföljande huvuden och laddare, begripliga instruktioner samt totalpris med frakt. Kontrollera också säljarens returvillkor om grepp och reglage inte passar. Dessa erbjudandeuppgifter är inte verifierade här." },
  ],
  related: [{ href: "/halsa/massagepistol", text: "Kontrollera användningsbegränsningarna före köp" }],
};
