import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  fitFlipMikrofiberhandukProduct,
  utopiaCabanaStrandhandduk,
} from "@/lib/products";

export const mikrofiberhanddukEllerFrottehanddukFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på mikrofiber och frotté?","answer":"Mikrofiber är ett tunt, lätt syntetmaterial som torkar snabbt och packar mycket litet. Frotté är vävd bomull som är mjuk och sugande men tjockare, tyngre och långsammare att torka."},{"question":"Vilken är bäst för resan?","answer":"Mikrofiberhanduken, eftersom den knappt tar plats och torkar snabbt mellan baden. Frotté är skönare mot huden men tar upp mycket mer plats i väskan."},{"question":"Suger mikrofiber lika bra som frotté?","answer":"Mikrofiber suger effektivt och torkar snabbt, men känns tunnare. Många upplever frotté som mjukare och mer 'insvept', vilket är dess styrka hemma och vid poolen."},{"question":"Kan jag ha båda?","answer":"Ja, en vanlig lösning är en mikrofiberhandduk i resväskan och gymväskan, och frottéhanddukar hemma för den mjuka komforten efter duschen."}];

export const mikrofiberhanddukEllerFrottehanddukComparisonRows = [["Snabba signaler","Tunn, ultralätt; snabbtork","Mjuk, sugande bomull; tar plats"],["Bäst för","Packa lätt, gym, resa","Komfort hemma, hotell, pool"],["Packmått","Mycket litet","Skrymmande"],["Torktid","Torkar snabbt","Torkar långsammare"],["Känsla mot huden","Tunnare","Mjuk och lyxig"],["Vikt","Ultralätt","Tyngre"],["Elins poäng","80/100","77/100"]] as const;

export const mikrofiberhanddukEllerFrottehanddukPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: fitFlipMikrofiberhandukProduct,
    path: "/sommar/resa/mikrofiberhandduk",
    badge: "Packar minimalt",
    headline: "Fit-Flip mikrofiberhandduk – lätt och snabbtorkande",
    shortBody: "Välj mikrofibern om du vill spara plats och vikt. Den är tunn, ultralätt och torkar snabbt – perfekt för gym, strand och resa.",
  },
  {
    product: utopiaCabanaStrandhandduk,
    path: "/sommar/resa/frottehandduk",
    badge: "Mjuk & sugande",
    headline: "Utopia frottéhandduk – mjuk bomullskomfort",
    shortBody: "Välj frottén om du vill ha den mjuka, sugande känslan mot huden. Skön hemma, på hotellet och vid poolen – men tar mer plats och torkar långsammare.",
  },
];

export const mikrofiberhanddukEllerFrottehanddukRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/sommar/resa/mikrofiberhandduk","label":"Mikrofiberhandduk","text":"Läs Elins genomgång av Fit-Flip mikrofiberhandduk."},{"href":"/sommar/resa/frottehandduk","label":"Frottéhandduk","text":"Läs Elins genomgång av Utopia frottéhandduk."},{"href":"/sommar/resa","label":"Resa","text":"Se alla Elins val för resan och stranden."}];
