export type EditorialScore = {
  value: number;
  performance: number;
  promise: number;
  proven: number;
  total: number;
  verdict: string;
};

export const scoreWeights = {
  value: 30,
  performance: 30,
  promise: 25,
  proven: 15,
} as const;

export type ScoreTier = {
  label: "Utmärkt" | "Bra" | "Helt okej" | "Rekommenderas inte";
  tone: "excellent" | "good" | "okay" | "low";
};

export function getScoreTier(total: number): ScoreTier {
  if (total >= 90) {
    return { label: "Utmärkt", tone: "excellent" };
  }

  if (total >= 75) {
    return { label: "Bra", tone: "good" };
  }

  if (total >= 60) {
    return { label: "Helt okej", tone: "okay" };
  }

  return { label: "Rekommenderas inte", tone: "low" };
}

export const editorialScores: Record<string, EditorialScore> = {
  "traningsband-4-nivaer": {
    value: 26,
    performance: 22,
    promise: 21,
    proven: 11,
    total: 80,
    verdict: "Smart förstaval för hemmaträning",
  },
  "jakkofoxx-loopband": {
    value: 27,
    performance: 21,
    promise: 20,
    proven: 14,
    total: 82,
    verdict: "Mest beprövade loop-bandet för ben och rumpa",
  },
  "amazon-basics-gjutjarns-kettlebell": {
    value: 28,
    performance: 25,
    promise: 20,
    proven: 13,
    total: 86,
    verdict: "Elins val - mest kettlebell för pengarna",
  },
  "proiron-mjuk-kettlebell": {
    value: 20,
    performance: 23,
    promise: 22,
    proven: 14,
    total: 79,
    verdict: "Golvsnällt nybörjarval för hemmet",
  },
  "proiron-neoprenhantlar": {
    value: 26,
    performance: 23,
    promise: 21,
    proven: 14,
    total: 84,
    verdict: "Elins val - enklast och mest beprövat för pengarna",
  },
  "songmics-hantelset-med-stallning": {
    value: 23,
    performance: 23,
    promise: 22,
    proven: 14,
    total: 82,
    verdict: "Färdigt startset med ställning för hemmaträning",
  },
  "prosourcefit-extra-tjock-yogamatta": {
    value: 27,
    performance: 22,
    promise: 21,
    proven: 14,
    total: 84,
    verdict: "Elins val - mest komfort för pengarna",
  },
  "yogati-tpe-yogamatta": {
    value: 23,
    performance: 26,
    promise: 21,
    proven: 13,
    total: 83,
    verdict: "Greppvalet för yoga och balans",
  },
  "bodymate-foam-roller-care": {
    value: 27,
    performance: 22,
    promise: 21,
    proven: 14,
    total: 84,
    verdict: "Elins val - enkel, fast och prisvärd foam roller",
  },
  "elvire-deep-tissue-massageset": {
    value: 24,
    performance: 23,
    promise: 20,
    proven: 13,
    total: 80,
    verdict: "Komplett deep-tissue-set med tydlig caveat",
  },
  "beurer-mg-99-massagepistol": {
    value: 21,
    performance: 22,
    promise: 20,
    proven: 13,
    total: 76,
    verdict: "Tryggt, kompakt märkesval",
  },
  "bdbkmg-massagepistol": {
    value: 25,
    performance: 23,
    promise: 21,
    proven: 11,
    total: 80,
    verdict: "Mest massage för pengarna",
  },
  "remington-s8540-plattang": {
    value: 26,
    performance: 24,
    promise: 22,
    proven: 14,
    total: 86,
    verdict: "Prisvärt, beprövat vardagsval",
  },
  "remington-mini-s2880-plattang": {
    value: 22,
    performance: 16,
    promise: 20,
    proven: 11,
    total: 69,
    verdict: "Smart för resan – ärligt begränsad",
  },
  "panasonic-es-ey30-epilator": {
    value: 23,
    performance: 26,
    promise: 21,
    proven: 14,
    total: 84,
    verdict: "Prisvärt premiumval för len, smidig epilering",
  },
  "braun-silk-epil-9": {
    value: 18,
    performance: 27,
    promise: 23,
    proven: 13,
    total: 81,
    verdict: "Premiumvalet – för dig som vill ha det yppersta",
  },
  "remington-proluxe-ac9140-hartork": {
    value: 25,
    performance: 27,
    promise: 22,
    proven: 14,
    total: 88,
    verdict: "Elins val – mest hårtork för pengarna i premiumklass",
  },
  "beurer-hc-25-hartork": {
    value: 25,
    performance: 20,
    promise: 21,
    proven: 14,
    total: 80,
    verdict: "Det prisvärda rese- och budgetvalet",
  },
  "babyliss-c325e-locktang": {
    value: 25,
    performance: 22,
    promise: 20,
    proven: 14,
    total: 81,
    verdict: "Elins val - mest locktång för pengarna",
  },
  "tymo-curlpro-locktang": {
    value: 18,
    performance: 27,
    promise: 21,
    proven: 14,
    total: 80,
    verdict: "Premiumvalet - effortless för långt och tjockt hår",
  },
  "babyliss-as126e-varmluftsborste": {
    value: 24,
    performance: 22,
    promise: 20,
    proven: 12,
    total: 78,
    verdict: "Elins val - mångsidig 4-i-1 för volym och brushing",
  },
  "remington-as7100-varmluftsborste": {
    value: 24,
    performance: 17,
    promise: 19,
    proven: 12,
    total: 72,
    verdict: "Budgetvalet - billigast och bäst på kort hår",
  },
  "st-tropez-self-tan-express": {
    value: 20,
    performance: 27,
    promise: 22,
    proven: 14,
    total: 83,
    verdict: "Premiumvalet för en naturlig sommarglow",
  },
  "elf-skin-bronzing-drops": {
    value: 26,
    performance: 22,
    promise: 21,
    proven: 12,
    total: 81,
    verdict: "Prisvärt glow-val du blandar själv",
  },
  "nivea-sun-after-sun-lotion": {
    value: 28,
    performance: 24,
    promise: 22,
    proven: 14,
    total: 88,
    verdict: "Prisvärt och beprövat after sun-val",
  },
  "moroccanoil-harolja": {
    value: 19,
    performance: 28,
    promise: 23,
    proven: 15,
    total: 85,
    verdict: "Premiumvalet - ikonisk hårolja för glans och mjukhet",
  },
  "moroccanoil-torrschampo": {
    value: 19,
    performance: 25,
    promise: 22,
    proven: 14,
    total: 80,
    verdict: "Premium torrschampo som mattar fett och gulton för ljust hår",
  },
  "vxdoirk-elektrisk-fotfil": {
    value: 26,
    performance: 23,
    promise: 21,
    proven: 12,
    total: 82,
    verdict: "Prisvärt och laddbart - mjuka, sandalfina fötter hemma",
  },
  "loreal-elvital-varmeskydd": {
    value: 27,
    performance: 24,
    promise: 22,
    proven: 14,
    total: 87,
    verdict: "Prisvärt värmeskydd som skyddar håret vid styling",
  },
  "kobo-clara-bw": {
    value: 24,
    performance: 27,
    promise: 22,
    proven: 15,
    total: 88,
    verdict: "Smart sommarro - papperslik läsro som syns i solen",
  },
};

export function getEditorialScore(productSlug: string) {
  return editorialScores[productSlug];
}
