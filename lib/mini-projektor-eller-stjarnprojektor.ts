import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import { miniProjektorProduct, stjarnprojektorProduct } from "@/lib/products";

export const miniProjektorEllerStjarnprojektorFaqItems: DecisionComparisonFaqItem[] =
  [
    {
      question: "Vad är skillnaden på en mini-projektor och en stjärnprojektor?",
      answer:
        "En mini-projektor visar film och serier på väggen. En stjärnprojektor visar stjärnor och galaxfärger på taket för stämning - den visar alltså inget innehåll.",
    },
    {
      question: "Vilken passar bäst för barnrummet?",
      answer:
        "Stjärnprojektorn ger en lugn, drömmig stämning som många uppskattar i barnrummet. Mini-projektorn passar bättre för filmkväll.",
    },
  ];

export const miniProjektorEllerStjarnprojektorComparisonRows = [
  [
    "Snabba signaler",
    "Bärbar projektor; film och serier; på väggen",
    "Stjärn- och galaxsken; stämning; på taket",
  ],
  ["Bäst för", "Filmkväll och bärbar bio hemma", "Mys, sömn och drömmig stämning"],
  ["Vad visas?", "Bild och video från dina enheter", "Roterande stjärnor och nebulosa-färger"],
  ["Använd i", "Vardagsrum, sovrum, utomhus på kvällen", "Sovrum och myshörna"],
  ["Elins poäng", "84/100", "79/100"],
] as const;

export const miniProjektorEllerStjarnprojektorPicks: [
  DecisionComparisonPick,
  DecisionComparisonPick,
] = [
  {
    product: miniProjektorProduct,
    path: "/halsa/mini-projektor",
    badge: "Film på väggen",
    headline: "Mini-projektor - bärbar bio hemma",
    shortBody:
      "Välj mini-projektorn om du vill se film och serier stort på väggen, var du vill i hemmet.",
  },
  {
    product: stjarnprojektorProduct,
    path: "/halsa/stjarnprojektor",
    badge: "Galaxhimmel",
    headline: "Stjärnprojektor - drömmig galaxhimmel",
    shortBody:
      "Välj stjärnprojektorn om du vill ha mysig stämning med stjärnor och galaxfärger på taket.",
  },
];

export const miniProjektorEllerStjarnprojektorRelatedLinks: DecisionComparisonRelatedLink[] =
  [
    {
      href: "/halsa/mini-projektor",
      label: "Mini-projektor",
      text: "Läs recensionen av mini-projektorn.",
    },
    {
      href: "/halsa/stjarnprojektor",
      label: "Stjärnprojektor",
      text: "Läs recensionen av stjärnprojektorn.",
    },
    {
      href: "/halsa",
      label: "Smart hem",
      text: "Se fler smarta hem- och livsstilsval.",
    },
    {
      href: "/sommar",
      label: "Sommar",
      text: "Se Elins samlade sommarfavoriter.",
    },
  ];
