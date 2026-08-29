import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  prosourcefitYogaMatProduct,
  yogatiTpeYogaMatProduct,
} from "@/lib/products";

export const tjockEllerTunnYogamattaFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på tjock och tunn yogamatta?","answer":"Tjockleken avgör känslan. En extra tjock matta har mer skum som dämpar mot golvet – skönt för knän och rygg i stilla positioner. En tunnare TPE-matta ger mer golvkontakt, vilket gör stående balansövningar stadigare och plankor stabilare."},{"question":"Vilken är bäst för känsliga knän?","answer":"Den tjocka. Det är i knästående och liggande positioner som centimetern skum märks mest – hårda golv slutar tränga igenom. Många med känsliga knän lägger annars en vikt filt under knäna, men en tjock matta löser det direkt."},{"question":"Vinglar man inte på en tjock matta?","answer":"I stående balansövningar sjunker foten djupare i ett tjockt skum, så det kan kännas vingligare. Står du mycket på ett ben eller kör flöden är den tunnare mattan stadigare. Tränar du mest på knä och rygg märker du det knappt."},{"question":"Vilken passar vanliga träningspass hemma?","answer":"Den tunnare TPE-mattan. Den ligger stilla, greppar åt båda hållen och ger ett stabilt underlag för plankor, utfall och hopp. Den tjocka är i första hand en komfortmatta för yoga, stretch och golvövningar i lugnt tempo."}];

export const tjockEllerTunnYogamattaComparisonRows = [["Snabba signaler","Extra tjockt skum; mjuk landning","TPE med grepp på båda sidor"],["Känsla","Mjuk och dämpad","Stabil med tydlig golvkontakt"],["Bäst för","Knästående, stretch, avslappning","Stående balans, flöden, träningspass"],["Skonar","Knän, höfter, svanskota","Handleder via stadigt underlag"],["Balans","Mjukare – stående vinglar mer","Stadigare i ett ben och plankor"],["Att bära med","Tjockare rulle, mest hemmabruk","Lättare rulle, följer med till passet"],["Elins poäng","84/100","83/100"]] as const;

export const tjockEllerTunnYogamattaPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: prosourcefitYogaMatProduct,
    path: "/traning/yogamatta/prosourcefit-13mm",
    badge: "Knävänlig",
    headline: "ProSourceFit extra tjock – komfort för knän och rygg",
    shortBody: "Välj den tjocka mattan om knän, höfter eller svanskota brukar säga ifrån mot golvet. Den extra centimetern skum gör knästående och liggande positioner bekväma även på hårt golv.",
  },
  {
    product: yogatiTpeYogaMatProduct,
    path: "/traning/yogamatta/yogati-tpe",
    badge: "Stabil & grepp",
    headline: "YOGATI TPE – golvkontakt för balans och flöden",
    shortBody: "Välj den tunnare TPE-mattan om du står, balanserar och flödar mycket. Du känner golvet under fötterna, greppet håller i plankor och hundar, och den är lätt att rulla ihop och ta med.",
  },
];

export const tjockEllerTunnYogamattaRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/yogamatta/prosourcefit-13mm","label":"Tjock matta","text":"Läs Elins genomgång av ProSourceFit extra tjock."},{"href":"/traning/yogamatta/yogati-tpe","label":"TPE-matta","text":"Läs Elins genomgång av YOGATI yogamatta."},{"href":"/traning/yogablock-eller-yogabalte","label":"Jämförelse","text":"Yogablock eller yogabälte? Rätt stöd för djupare positioner."},{"href":"/traning/gjutjarn-eller-mjuk-kettlebell","label":"Jämförelse","text":"Gjutjärns- eller mjuk kettlebell? Nästa steg för hemmagymmet."}];
