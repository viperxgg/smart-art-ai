import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { ElinByline } from "@/components/ElinByline";
import { siteConfig } from "@/lib/site";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
      <nav aria-label="Brödsmulor" className="min-w-0">
        <ol className="flex min-w-0 flex-wrap items-center gap-2 text-sm font-bold text-[#8a6d78]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={item.href}
                className="inline-flex min-w-0 items-center gap-2"
              >
                {index > 0 ? (
                  <ChevronRight
                    size={15}
                    className="shrink-0 text-[#D8A7B1]"
                    aria-hidden="true"
                  />
                ) : null}
                {isLast ? (
                  <span
                    className="max-w-[12rem] truncate text-[#4B2838] sm:max-w-none"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="max-w-[9rem] truncate transition hover:text-[#B983A6] sm:max-w-none"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <ElinByline />
    </div>
  );
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.href, siteConfig.url).toString(),
    })),
  };
}
