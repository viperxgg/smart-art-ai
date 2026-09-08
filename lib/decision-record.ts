export type DecisionSource = {
  id: string;
  title: string;
  url: string;
  checkedAt: string;
  supports: string;
};

export type DecisionOption = {
  productSlug: string;
  model: string;
  variant: string;
  chooseIf: string;
  avoidIf: string;
  sourceIds: readonly string[];
  merchantVariantVerified: boolean;
};

export type DecisionRecord = {
  reviewedAt: string;
  options: readonly DecisionOption[];
  payMoreWhen: string;
  noPurchaseWhen: string;
  swedishContext: string;
  testing: string;
  limitations: string;
  sources: readonly DecisionSource[];
};

export function validateDecisionRecord(record: DecisionRecord, productSlugs: readonly string[]) {
  const dateIsValid = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value)
    && Number.isFinite(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
  if (!dateIsValid(record.reviewedAt)) throw new Error("Decision review date is invalid.");
  record.sources.forEach((source) => {
    const url = new URL(source.url);
    if (url.protocol !== "https:" || url.username || url.password || !source.id.trim()
      || !source.title.trim() || !source.supports.trim() || !dateIsValid(source.checkedAt)) {
      throw new Error("Decision sources need explicit provenance and dates.");
    }
  });
  const ids = new Set(record.sources.map((source) => source.id));
  if (!record.options.length || record.options.length !== productSlugs.length || ids.size !== record.sources.length) {
    throw new Error("Decision record needs matching options and unique sources.");
  }
  record.options.forEach((option, index) => {
    if (option.productSlug !== productSlugs[index] || !option.model.trim() || !option.variant.trim()
      || !option.chooseIf.trim() || !option.avoidIf.trim() || !option.sourceIds.length
      || option.sourceIds.some((id) => !ids.has(id))) {
      throw new Error("Decision option identity, guidance or evidence is missing.");
    }
  });
  if (![record.payMoreWhen, record.noPurchaseWhen, record.swedishContext, record.testing, record.limitations].every((text) => text.trim())) {
    throw new Error("Decision guidance and limits must be explicit.");
  }
}
