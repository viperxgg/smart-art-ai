import Link from "next/link";

import { formatSwedishDate } from "@/lib/page-dates";
import { siteConfig } from "@/lib/site";

export type EditorialChange = {
  date: string;
  note: string;
};

type EditorialBylineProps = {
  /** Date of the documented fact review, not a build or publication date. */
  reviewedAt?: string;
  /** Only recorded changes supported by the page's editorial history. */
  changes?: readonly EditorialChange[];
  className?: string;
};

export function EditorialByline({
  reviewedAt,
  changes = [],
  className = "",
}: EditorialBylineProps) {
  const datedChanges = [...changes].sort((left, right) =>
    right.date.localeCompare(left.date),
  );

  return (
    <div className={`text-sm leading-6 text-ink-soft ${className}`}>
      <p>
        Elins val-redaktionen · Ansvarig utgivare:{" "}
        <Link
          href="/om-oss#azzam"
          className="font-semibold text-wine underline underline-offset-4"
        >
          {siteConfig.operatorName}
        </Link>
      </p>
      <p className="mt-1">
        {reviewedAt ? <>Fakta granskade <time dateTime={reviewedAt}>{formatSwedishDate(reviewedAt)}</time></> : "Faktagranskning saknar dokumenterat datum."}
      </p>
      {datedChanges.length > 0 ? (
        <ul aria-label="Uppdateringslogg" className="mt-1 space-y-1">
          {datedChanges.map((change, index) => (
            <li key={`${change.date}-${change.note}`}>
              {index === 0 ? "Senast uppdaterad" : "Tidigare uppdatering"}{" "}
              <time dateTime={change.date}>{formatSwedishDate(change.date)}</time>
              {`: ${change.note}`}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
