import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
export const groomingDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "philips-oneblade-360", model: "Philips OneBlade 360 QP2834/31",
      variant: "Ansikte + kropp QP2834/31. Inte andra OneBlade-paket; butikens aktuella förpackning är inte matchad.",
      chooseIf: "du vill trimma och forma kanter samt använda verktyget på våt eller torr hud. Philips anger fyra stubbkammar: 1, 2, 3 och 5 mm.",
      avoidIf: "du behöver fler längdval eller vill behålla ett skägg längre än de medföljande stubbkammarna medger. Räkna med att ersättningsblad behöver köpas; vi har inte jämfört raknärhet eller hudkomfort i praktiken.",
      sourceIds: ["G1"], merchantVariantVerified: false,
    },
    {
      productSlug: "philips-skaggtrimmer-3000", model: "Philips Beardtrimmer 3000 BT3206/14",
      variant: "BT3206/14. Inte andra Series 3000-modeller. Säljarens modell och medföljande laddare är inte matchade.",
      chooseIf: "du främst vill hålla en bestämd skägglängd. Philips anger ett längdområde på 0,5–10 mm och ett inställningsvred, i stället för OneBlades fyra stubbkammar.",
      avoidIf: "du behöver snabb uppladdning eller söker våtrakning. Angiven laddningstid är 10 timmar för upp till 45 minuters sladdlös drift. Rengöringsrådet gäller det löstagbara huvudet, inte att skölja hela apparaten.",
      sourceIds: ["G2", "G3"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "Den funktion du saknar faktiskt ingår i rätt paket: våt användning och kantformning, eller ett längdvred för skägget. Jämför inköp, tillbehör och ersättningsdelar tillsammans. Självslipande blad bevisar inte att trimmern blir billigast över tid.",
  noPurchaseWhen: "Verktyget du har ger den längd och form du vill ha. Köp inte båda bara för att de marknadsförs för olika moment; börja med att identifiera vad din nuvarande rutin saknar.",
  swedishContext: "Kontrollera hela modellnumret, kammar, kroppstillbehör och laddningslösning i det svenska erbjudandet. Ett liknande produktnamn räcker inte. Aktuellt totalpris och butikens variant är inte verifierade.",
  testing: "Tillverkarens svenska modelluppgifter har granskats. Ingen egen rakning, batterimätning eller jämförelse av irritation har genomförts. Vi utser ingen vinnare i raknärhet, komfort eller livstidskostnad.",
  limitations: "För BT3206 beskriver Philips att huvudet tas av, sköljs och torkas före återmontering. Följ respektive bruksanvisning för användning och rengöring. OneBlade-bladens verkliga livslängd är inte mätt här. Bildrättigheter och erbjudandematchning återstår.",
  sources: [
    { id: "G1", title: "Philips Sverige – OneBlade 360 QP2834/31", url: "https://www.philips.se/c-p/QP2834_31/oneblade-360-face-plus-body", checkedAt: "2026-09-09", supports: "Exakt modell, våt/torr användning, fyra stubbkammar och ersättningsblad. Recensioner för andra modeller används inte som bevis." },
    { id: "G2", title: "Philips Sverige – Beardtrimmer BT3206/14", url: "https://www.philips.se/c-p/BT3206_14/beardtrimmer-series-3000-skaeggtrimmer", checkedAt: "2026-09-09", supports: "Modell, längdinställning, laddning och rengöring av löstagbart huvud." },
    { id: "G3", title: "Philips – svenskt produktblad BT3206/14", url: "https://www.documents.philips.com/assets/20220423/f52e8592a20e431097b4ae8000d2e4f1.pdf", checkedAt: "2026-09-09", supports: "Tillverkarens produktblad från 2022: längdområde 0,5–10 mm, 45 minuters drift efter 10 timmars laddning. Inget oberoende hållbarhetstest." },
  ],
};
export const groomingGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" },
  path: "/skonhet/oneblade-eller-skaggtrimmer",
  title: "OneBlade eller skäggtrimmer – kanter eller längdkontroll?",
  intro: "Börja med resultatet du vill ha: forma kanter och kort stubb, eller hålla en bestämd skägglängd. Här jämförs QP2834/31 med BT3206/14, utan löften om vilket verktyg som blir billigast.",
  decision: groomingDecision,
  related: [{ href: "/jamforelser", text: "Fler frågor inför köp" }],
  productPaths: ["/skonhet/grooming/oneblade-360", "/skonhet/grooming/philips-skaggtrimmer"],
  questions: [
    { question: "Är skäggtrimmern billigare över tid?", answer: "Det är inte verifierat. Jämför inköpspris och faktiska kostnader för blad, tillbehör och andra ersättningsdelar under samma tidsperiod. Självslipande blad är ingen garanti för lägst totalkostnad." },
    { question: "Kan hela BT3206 sköljas under kranen?", answer: "Philips instruktion är att lossa huvudet, skölja det och torka före återmontering. Den uppgiften ger inget stöd för att skölja hela apparaten eller använda den i duschen." },
    { question: "Behöver jag både OneBlade och skäggtrimmer?", answer: "Inte om ditt befintliga verktyg ger det resultat du vill ha. Ett andra verktyg är bara motiverat om det löser ett konkret behov som det första inte klarar." },
  ],
};
