import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  naissanceAloeVeraGelProduct,
  niveaSunAfterSunLotionProduct,
} from "@/lib/products";

export const aftersunEllerAloeVeraFaqItems: DecisionComparisonFaqItem[] = [
  {
    question: "Vad är skillnaden mellan after sun och aloe vera?",
    answer:
      "After sun-lotion är en mjukgörande hudvård som återfuktar huden efter solen. Ren aloe vera-gel är lättare och ger främst en svalkande, kylande känsla.",
  },
  {
    question: "Kan jag använda aloe vera i ansiktet?",
    answer:
      "Ja, ren aloe vera-gel är lätt och kan användas på ansikte, hud och hår. After sun-lotion är främst tänkt för kroppen.",
  },
];

export const aftersunEllerAloeVeraComparisonRows = [
  [
    "Snabba signaler",
    "Mjukgörande after sun-lotion; återfuktar; för hela kroppen",
    "Ren aloe vera-gel; lätt och kylande; mångsidig",
  ],
  [
    "Bäst för",
    "Torr, soltrött hud som vill ha närande fukt",
    "Den som vill ha en lätt, svalkande gel",
  ],
  [
    "Konsistens",
    "Krämig lotion som bäddar in huden",
    "Lätt gel som snabbt absorberas",
  ],
  [
    "Använd också till",
    "Kroppen efter sol och dusch",
    "Ansikte, hår och hud - mångsidig",
  ],
  ["Elins poäng", "88/100", "85/100"],
] as const;

export const aftersunEllerAloeVeraPicks: [
  DecisionComparisonPick,
  DecisionComparisonPick,
] = [
  {
    product: niveaSunAfterSunLotionProduct,
    path: "/skonhet/aftersun",
    badge: "Återfuktar",
    headline: "NIVEA Sun After Sun - mjukgörande lotion",
    shortBody:
      "Välj NIVEA om du vill ha en krämig, mjukgörande lotion som återfuktar hela kroppen efter en dag i solen.",
  },
  {
    product: naissanceAloeVeraGelProduct,
    path: "/skonhet/aloe-vera-gel",
    badge: "Lätt & kylande",
    headline: "Naissance Aloe Vera Gel - svalkande och mångsidig",
    shortBody:
      "Välj aloe vera-gelen om du föredrar en lätt, kylande gel som går att använda på ansikte, hud och hår.",
  },
];

export const aftersunEllerAloeVeraRelatedLinks: DecisionComparisonRelatedLink[] =
  [
    {
      href: "/skonhet/sommarglow-utan-sol",
      label: "Sommar",
      text: "Jämför självbruna och bronzing drops.",
    },
    {
      href: "/skonhet/aftersun",
      label: "After sun",
      text: "Läs recensionen av NIVEA Sun After Sun.",
    },
    {
      href: "/skonhet/aloe-vera-gel",
      label: "Aloe vera",
      text: "Läs recensionen av Naissance Aloe Vera Gel.",
    },
    {
      href: "/sommar",
      label: "Sommar",
      text: "Se Elins samlade sommarfavoriter.",
    },
    {
      href: "/skonhet/tanning-drops",
      label: "Tanning drops",
      text: "Vill du ha glow utan sol? Se Elins recension av tanning drops.",
    },
  ];
