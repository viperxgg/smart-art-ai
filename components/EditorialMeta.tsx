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
 * Page update date followed by the affiliate disclosure. Publisher details
 * live on the dedicated About page instead of being repeated on content pages.
 */
export function EditorialMeta({ path, className = "", hideDate = false, hideDisclosure = false }: EditorialMetaProps) {
  const lastModified = getPageLastModified(path);

  if ((!lastModified || hideDate) && hideDisclosure) return null;

  return (
    <div className={`text-sm leading-6 text-ink-soft ${className}`}>
      {lastModified && !hideDate ? (
        <p>
          <time dateTime={lastModified}>
            {`Uppdaterad ${formatSwedishDate(lastModified)}`}
          </time>
        </p>
      ) : null}
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
