import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  mantaSleepMaskProduct,
  magicteamWhiteNoiseProduct,
} from "@/lib/products";

export const sovmaskEllerWhiteNoiseFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vilken gör störst skillnad för sömnen?","answer":"Den som träffar din största störning. Vaknar du av ljus är masken rätt första köp, somnar du svårt av ljud är ljudmaskinen rätt. Elins tumregel: åtgärda det som stör flest nätter i veckan först."},{"question":"Kan jag kombinera sovmask och white noise?","answer":"Ja, de jobbar på varsin kanal och krockar inte. Många i ljusa och lyhörda lägenheter använder båda – masken tar ljuset, kulissen tar ljuden. Börja gärna med en och lägg till den andra om det fortfarande stör."},{"question":"Trycker masken mot ögonen?","answer":"Mantas kåpor är formade så att de lämnar luft runt ögonen, vilket gör att det blir mörkt utan tryck. Remmen och kåporna justeras, så räkna med någon natt innan passformen sitter helt rätt."},{"question":"Måste white noise stå på hela natten?","answer":"Nej. Magicteam har timer så att ljudet kan stänga av sig när du somnat, eller så låter du den gå hela natten – den minns volym och ljudval till nästa kväll. Testa vad som känns bäst för dig."}];

export const sovmaskEllerWhiteNoiseComparisonRows = [["Snabba signaler","Formade kåpor; 100% mörkläggande","40 ljud; minns volym och val"],["Stoppar","Ljus – lyktor, lampor, ljusa morgnar","Ljud – grannar, trafik, knäppande hus"],["Känsla","Becksvart, inget tryck mot ögonen","Jämn kuliss som maskerar plötsliga ljud"],["Bäst för","Ljuskänsliga och skiftarbete","Lyhörda hem och oroliga kvällar"],["Att vänja sig","Någon natt för passformen","Några kvällar för rätt ljud och volym"],["På resa","Följer med i fickan","Kompakt men behöver eluttag"],["Elins poäng","79/100","87/100"]] as const;

export const sovmaskEllerWhiteNoisePicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: mantaSleepMaskProduct,
    path: "/halsa/sovmask",
    badge: "Mot ljus",
    headline: "Manta Sleep Mask – becksvart utan tryck",
    shortBody: "Välj sovmasken när det är ljuset som stör: gatlyktor, laddlampor eller ljusa morgnar. De formade kåporna gör det helt mörkt utan att trycka mot ögonen, och passformen justeras tills den sitter rätt.",
  },
  {
    product: magicteamWhiteNoiseProduct,
    path: "/halsa/white-noise",
    badge: "Mot ljud",
    headline: "Magicteam white noise – jämn ljudkuliss",
    shortBody: "Välj ljudmaskinen när det är ljud som stör: lyhört hus, trafik eller grannar. Den lägger en jämn kuliss som jämnar ut plötsliga ljud, minns din inställning och har timer om du vill somna till den.",
  },
];

export const sovmaskEllerWhiteNoiseRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/sovmask","label":"Sovmask","text":"Läs Elins genomgång av Manta Sleep Mask."},{"href":"/halsa/white-noise","label":"White noise","text":"Läs Elins genomgång av Magicteam-maskinen."},{"href":"/halsa/sov-battre-i-host","label":"Guide","text":"Sov bättre i höst: mörker, ljud och tyngd – hela kedjan."},{"href":"/halsa/oronproppar-eller-white-noise","label":"Jämförelse","text":"Öronproppar eller white noise? Två sätt att tysta natten."}];
