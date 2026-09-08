export type ScoreValues = {
  value: number;
  performance: number;
  promise: number;
  proven: number;
  total: number;
  verdict: string;
};

export type ScoreEvidence = {
  productSlug: string;
  modelAndVariant: string;
  reviewedAt: string;
  reviewUrl: string;
  score: ScoreValues;
  criteria: Record<"value" | "performance" | "promise" | "proven", {
    rationale: string;
    sources: readonly string[];
  }>;
};

// Only add a record after reviewing the exact model, the sources and each
// criterion. Legacy numbers alone are not evidence for a public rating.
export const reviewedScoreEvidence: Readonly<Record<string, ScoreEvidence>> = {};

const maxima = { value: 30, performance: 30, promise: 25, proven: 15 } as const;
const keys = Object.keys(maxima) as (keyof typeof maxima)[];

function isHttpsUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !!url.hostname && !url.username && !url.password;
  } catch {
    return false;
  }
}

export function hasReviewedScore(
  slug: string,
  score: ScoreValues | undefined,
  evidence: ScoreEvidence | undefined,
) {
  if (!score || !evidence || evidence.productSlug !== slug || !evidence.modelAndVariant.trim()) return false;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(evidence.reviewedAt) || !Number.isFinite(Date.parse(evidence.reviewedAt))) return false;
  if (!isHttpsUrl(evidence.reviewUrl) || !score.verdict.trim() || evidence.score.verdict !== score.verdict) return false;
  if (keys.reduce((total, key) => total + score[key], 0) !== score.total || evidence.score.total !== score.total) return false;
  return keys.every((key) => {
    const criterion = evidence.criteria[key];
    return Number.isFinite(score[key]) && score[key] >= 0 && score[key] <= maxima[key]
      && evidence.score[key] === score[key] && !!criterion?.rationale.trim()
      && criterion.sources.length > 0 && criterion.sources.every(isHttpsUrl);
  });
}
