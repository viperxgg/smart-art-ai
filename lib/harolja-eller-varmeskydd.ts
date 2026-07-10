import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  lorealElvitalVarmeskyddProduct,
  moroccanoilHaroljaProduct,
} from "@/lib/products";

export const haroljaEllerVarmeskyddFaqItems: DecisionComparisonFaqItem[] = [
  {
    question: "Finns det hårolja med värmeskydd?",
    answer:
      "Vissa håroljor ger ett lätt skydd vid värmestyling, men ett dedikerat värmeskydd som L'Oréal Elvital Dream Length är gjort för värme upp till 230°C och skyddar bättre. Vill du ha båda effekterna: spraya värmeskydd före stylingen och avsluta med hårolja för glans.",
  },
  {
    question: "Behöver jag både värmeskydd och hårolja?",
    answer:
      "Många använder båda: värmeskydd före föning, plattång eller locktång, och hårolja efteråt för glans, mjukhet och mindre frizz.",
  },
  {
    question: "Kan jag använda hårolja som värmeskydd?",
    answer:
      "Nej, inte på samma sätt. Hårolja vårdar och ger glans, men ersätter inte ett värmeskydd som är gjort för föning, plattång eller locktång.",
  },
];

export const haroljaEllerVarmeskyddComparisonRows = [
  [
    "Snabba signaler",
    "Arganoljebaserad hårolja; glans; mjukhet",
    "Leave-in-spray; upp till 230°C; mindre frizz",
  ],
  [
    "Bäst för",
    "Torrt, soltrött hår som behöver glans",
    "Hår som fönas, plattas eller lockas",
  ],
  [
    "När används den?",
    "Efter styling eller i fuktigt/torrt hår för finish",
    "Före värmestyling, på fuktigt eller torrt hår",
  ],
  [
    "Caveat",
    "Premiumpris och silikonbaserad formula med arganolja",
    "För mycket spray kan lämna en lätt hinna",
  ],
  ["Elins poäng", "85/100", "87/100"],
] as const;

export const haroljaEllerVarmeskyddPicks: [
  DecisionComparisonPick,
  DecisionComparisonPick,
] = [
  {
    product: moroccanoilHaroljaProduct,
    path: "/skonhet/harolja",
    badge: "Glans & mjukhet",
    headline: "Moroccanoil Treatment - hårolja för finish",
    shortBody:
      "Prioritera håroljan om ditt sommarhår känns torrt, frissigt eller solslitet och du vill ha mer glans, mjukhet och en lenare finish.",
  },
  {
    product: lorealElvitalVarmeskyddProduct,
    path: "/skonhet/varmeskydd",
    badge: "Skyddar vid värme",
    headline: "L'Oréal Elvital Dream Length - värmeskydd före styling",
    shortBody:
      "Prioritera värmeskyddet om du fönar, plattar eller lockar håret ofta. Sprayen är gjord för värmestyling upp till 230°C.",
  },
];

export const haroljaEllerVarmeskyddRelatedLinks: DecisionComparisonRelatedLink[] =
  [
    {
      href: "/skonhet/sommarglow-utan-sol",
      label: "Sommar",
      text: "Jämför självbruna och bronzing drops.",
    },
    {
      href: "/sommar",
      label: "Sommar",
      text: "Se Elins samlade sommarfavoriter.",
    },
    {
      href: "/skonhet/harolja",
      label: "Hårolja",
      text: "Läs recensionen av Moroccanoil Treatment.",
    },
    {
      href: "/skonhet/varmeskydd",
      label: "Värmeskydd",
      text: "Läs recensionen av L'Oréal Elvital Dream Length.",
    },
    {
      href: "/skonhet/varmeskyddsspray",
      label: "Värmeskyddsspray",
      text: "Vill du ha spray i stället? Se Elins val av värmeskyddsspray.",
    },
  ];
