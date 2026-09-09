import type { DecisionRecord } from "@/lib/decision-record";

export const soundEnvironmentDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    { productSlug: "loop-oronproppar", model: "Loop Quiet 2 – svart, B0D3V61JC8", variant: "Återanvändbara silikonproppar med örontoppar i XS, S, M och L samt förvaringsetui. Tillverkaren anger upp till 24 dB SNR. Det är inte Quiet 2 Plus eller Dream; den svarta butiksversionen är matchad.", chooseIf: "du vill minska ljudet du hör utan att tillföra ljud i rummet och kan få en bekväm tätning med rätt toppstorlek. Passform och korrekt användning påverkar dämpningen.", avoidIf: "du behöver en garanti om full tystnad, en viss dämpning av snarkning eller tryckfrihet när du ligger på sidan. Vi har inte provat passformen i dina öron.", sourceIds: ["Q1", "Q2"], merchantVariantVerified: true },
    { productSlug: "magicteam-white-noise", model: "Magicteam ljudmaskin – svart, B07RQWQBXY", variant: "Länkad svart variant med angivna 40 ljud, 32 volymsteg, minne och timer för 1/2/3 timmar eller kontinuerlig drift. Rubriken anger nät- eller USB-drift, medan ett fält säger uppladdningsbar. Batteri och rätt nätadapter är inte verifierade.", chooseIf: "du redan vet att du föredrar ett bakgrundsljud och vill ha separata ljud-, volym- och timerreglage. Tänk på att ljudet också hörs av andra i rummet.", avoidIf: "du vill sänka den fysiska ljudnivån från grannar eller trafik, behöver verifierad batteridrift eller förväntar dig att fler ljud garanterar bättre sömn.", sourceIds: ["N2"], merchantVariantVerified: true },
  ],
  payMoreWhen: "Passform, användbara reglage eller verifierad strömförsörjning löser ett behov som din nuvarande lösning inte klarar. Köp inte fler ljud eller en dyrare propp enbart för ett sömnlöfte. Aktuella priser och löpande kostnader är inte jämförda.",
  noPurchaseWhen: "Du kan minska störningen vid källan eller det du redan använder fungerar. Köp inte två produkter automatiskt för att både dämpning och bakgrundsljud finns som möjligheter.",
  swedishContext: "Kontrollera rätt Quiet-generation och toppstorlek, respektive Magicteams strömkrav och adapter för svenska uttag. Om sömnbesvär inte blir bättre trots förändringar rekommenderar 1177 att söka hjälp. Den informationen är inte en rekommendation av dessa märken.",
  testing: "Vi har läst Loops produktsida, 1177 och de matchade svenska butikssidorna. Vi har inte mätt personlig ljuddämpning, ljudnivå vid kudden, komfort, maskering eller sömn. Ingen direkt jämförande effektstudie ligger bakom valet här.",
  limitations: "SNR är ett laboratoriebaserat värde, inte en garanti om samma minskning av varje ljud hemma. Magicteams 32 volymsteg är inte decibel eller bevis för säker ljudnivå i alla placeringar. Fullständig Magicteam-manual och produktbilder med användningsrätt saknas. Ingen spädbarns- eller behandlingsrekommendation ges.",
  sources: [
    { id: "Q1", title: "Loop – Quiet 2", url: "https://www.loopearplugs.com/products/quiet", checkedAt: "2026-09-09", supports: "Silikon, XS/S/M/L, etui och upp till 24 dB SNR. Tillverkaren förklarar att faktisk dämpning beror på rätt passform och användning. Komfort- och sömnmarknadsföring är inte egna tester." },
    { id: "Q2", title: "Amazon.se – Loop Quiet 2 svart", url: "https://www.amazon.se/dp/B0D3V61JC8", checkedAt: "2026-09-09", supports: "Länkad svart Quiet 2, fyra toppstorlekar och etui. Inte Quiet 2 Plus eller Dream." },
    { id: "N2", title: "Amazon.se – Magicteam 40 ljud, svart", url: "https://www.amazon.se/dp/B07RQWQBXY", checkedAt: "2026-09-09", supports: "Länkad svart variant, 40 ljud, 32 volymsteg, minne och 1/2/3-timmars eller kontinuerligt läge. Motstridigt uppladdningsfält; batteridrift och adapter inte bekräftade. Ingen ljudnivåmätning." },
    { id: "H1", title: "1177 – Sömnsvårigheter", url: "https://www.1177.se/liv--halsa/stresshantering-och-somn/somnsvarigheter/", checkedAt: "2026-09-09", supports: "Allmän vuxeninformation om förändringar i sovmiljön och att söka hjälp när problemen kvarstår. Inget produktgodkännande." },
  ],
};

export function getSoundProductDecision(slug: string): DecisionRecord {
  const options = soundEnvironmentDecision.options.filter(option => option.productSlug === slug);
  return {
    ...soundEnvironmentDecision, options,
    sources: soundEnvironmentDecision.sources.filter(source => source.id === "H1" || options.some(option => option.sourceIds.includes(source.id))),
    swedishContext: slug === "magicteam-white-noise"
      ? "Kontrollera strömkrav och adapter för svenska uttag; uppladdningsbar batteridrift är inte bekräftad. Ta hänsyn till andra som hör ljudet. 1177 beskriver när ihållande sömnproblem behöver hjälp; produkten är inte en behandling."
      : "Kontrollera Quiet 2-generationen och toppstorleken och följ tillverkarens användnings- och rengöringsanvisningar. 1177 beskriver när ihållande sömnproblem behöver hjälp; propparna är inget löfte om ett sömnresultat.",
    limitations: slug === "magicteam-white-noise"
      ? "32 steg beskriver reglaget, inte uppmätta decibel. Batteri, adapter och fullständig manual är inte verifierade. Vi har inte testat upplevd maskering eller ljudnivå och ger ingen rekommendation för spädbarn. Godkända produktbilder saknas."
      : "24 dB SNR är laboratoriebaserat. Personlig tätning, komfort och dämpning av en viss ljudkälla är inte testade här. Produktbilder med verifierad användningsrätt saknas.",
  };
}
export const magicteamDecision = getSoundProductDecision("magicteam-white-noise");
