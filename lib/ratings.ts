export type ReviewEvidence = {
  modelAndVariant: string;
  sourceUrl: string;
  checkedAt: string;
  summary: string;
  highlights: readonly string[];
  cautions: readonly string[];
  quotes: readonly { text: string; attribution: string; sourceUrl: string }[];
};

// A receipt must be populated from an actual source review. Validation checks
// completeness and matching text, not whether the observation itself is true.
export function hasReviewEvidence(evidence: ReviewEvidence | undefined): evidence is ReviewEvidence {
  if (!evidence?.modelAndVariant.trim() || !evidence.summary.trim()) return false;
  const validUrl = (value: string) => {
    try { const url = new URL(value); return url.protocol === "https:" && !!url.hostname && !url.username && !url.password; }
    catch { return false; }
  };
  const date = evidence.checkedAt;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date || !validUrl(evidence.sourceUrl)) return false;
  return evidence.highlights.every(text => !!text.trim()) && evidence.cautions.every(text => !!text.trim())
    && evidence.quotes.every(quote => !!quote.text.trim() && !!quote.attribution.trim() && validUrl(quote.sourceUrl));
}

export function hasReviewedSignal(signal: {
  sourceUrl: string; ratingSummary: string; ratingCheckedAt?: string;
  highlights: readonly string[]; cautions: readonly string[]; reviewEvidence?: ReviewEvidence;
}) {
  const evidence = signal.reviewEvidence;
  return hasReviewEvidence(evidence) && evidence.sourceUrl === signal.sourceUrl
    && evidence.checkedAt === signal.ratingCheckedAt && evidence.summary === signal.ratingSummary
    && JSON.stringify(evidence.highlights) === JSON.stringify(signal.highlights)
    && JSON.stringify(evidence.cautions) === JSON.stringify(signal.cautions);
}

export function formatRatingSummary(ratingSummary: string, ratingCheckedAt?: string, evidence?: ReviewEvidence) {
  if (!hasReviewEvidence(evidence) || evidence.summary !== ratingSummary || evidence.checkedAt !== ratingCheckedAt) {
    return "Vi har inget verifierat kundbetyg att visa.";
  }
  return `${ratingSummary} (källan kontrollerad ${evidence.checkedAt})`;
}
