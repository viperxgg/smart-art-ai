import Link from "next/link";

import { formatSwedishDate, getPageLastModified } from "@/lib/page-dates";
import { siteConfig } from "@/lib/site";

type EditorialMetaProps = {
  /** Site-relative path of the page; looked up in the sitemap for its date. */
  path: string;
  className?: string;
  hideDate?: boolean;
  hideDisclosure?: boolean;
};

/**
 * Editorial meta line rendered under the H1 of every content page:
 * "Uppdaterad {d MMMM yyyy} · Redaktion: Elins val · Ansvarig utgivare: …"
 * followed by the affiliate disclosure. The date is the sitemap date for the
 * route (see lib/page-dates.ts), so it matches WebPage.dateModified and the
 * XML sitemap by construction. Strings are assembled in JS rather than as
 * adjacent JSX text so the rendered HTML contains them contiguously.
 */
export function EditorialMeta({ path, className = "", hideDate = false, hideDisclosure = false }: EditorialMetaProps) {
  const lastModified = getPageLastModified(path);
  const editorialLine = `Redaktion: ${siteConfig.name} · Ansvarig utgivare: `;

  return (
    <div className={`text-sm leading-6 text-ink-soft ${className}`}>
      <p>
        {lastModified && !hideDate ? (
          <time dateTime={lastModified}>
            {`Uppdaterad ${formatSwedishDate(lastModified)} · `}
          </time>
        ) : null}
        {editorialLine}
        <Link
          href="/om-oss#azzam"
          className="font-bold text-wine underline underline-offset-4"
        >
          {siteConfig.operatorName}
        </Link>
      </p>
      {!hideDisclosure ? <p className="mt-1">
        {`Innehåller reklamlänkar. ${siteConfig.name} kan få provision när du handlar via länkarna – det påverkar varken urvalet eller Elins poäng. `}
        <Link
          href="/om-oss#sa-tjanar-vi-pengar"
          className="font-bold text-wine underline underline-offset-4"
        >
          Så tjänar vi pengar →
        </Link>
      </p> : null}
    </div>
  );
}
