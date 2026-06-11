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

export const editorialScores: Record<string, EditorialScore> = {
  "traningsband-4-nivaer": {
    value: 28,
    performance: 23,
    promise: 22,
    proven: 11,
    total: 84,
    verdict: "Smart förstaval för hemmaträning",
  },
  "beurer-mg-99-massagepistol": {
    value: 22,
    performance: 23,
    promise: 20,
    proven: 13,
    total: 78,
    verdict: "Tryggt, kompakt märkesval",
  },
  "bdbkmg-massagepistol": {
    value: 27,
    performance: 24,
    promise: 22,
    proven: 11,
    total: 84,
    verdict: "Mest massage för pengarna",
  },
  "remington-s8540-plattang": {
    value: 28,
    performance: 25,
    promise: 24,
    proven: 14,
    total: 91,
    verdict: "Prisvärt, beprövat vardagsval",
  },
  "remington-mini-s2880-plattang": {
    value: 24,
    performance: 18,
    promise: 21,
    proven: 11,
    total: 74,
    verdict: "Smart för resan – ärligt begränsad",
  },
  "panasonic-es-ey30-epilator": {
    value: 24,
    performance: 27,
    promise: 22,
    proven: 14,
    total: 87,
    verdict: "Prisvärt premiumval för len, smidig epilering",
  },
  "braun-silk-epil-9": {
    value: 20,
    performance: 28,
    promise: 23,
    proven: 13,
    total: 84,
    verdict: "Premiumvalet – för dig som vill ha det yppersta",
  },
};

export function getEditorialScore(productSlug: string) {
  return editorialScores[productSlug];
}
