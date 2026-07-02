import { DEFAULT_RATING_CHECKED_AT } from "@/lib/site";

export function formatRatingSummary(
  ratingSummary: string,
  ratingCheckedAt = DEFAULT_RATING_CHECKED_AT,
) {
  if (/vid vår (?:senaste )?kontroll/i.test(ratingSummary)) {
    return ratingSummary;
  }

  if (ratingCheckedAt) {
    return `${ratingSummary} (vid vår kontroll ${ratingCheckedAt})`;
  }

  return `${ratingSummary} (vid vår senaste kontroll)`;
}

