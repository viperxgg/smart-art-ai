import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type RelatedLink = {
  href: string;
  label: string;
  text: string;
};

type RelatedLinksProps = {
  title?: string;
  links: RelatedLink[];
};

export function RelatedLinks({
  title = "Läs även",
  links,
}: RelatedLinksProps) {
  const visibleLinks = links.some((link) => link.href === "/jamforelser")
    ? links
    : [
        ...links,
        {
          href: "/jamforelser",
          label: "Jämförelser",
          text: "Se alla Elins jämförelser samlade efter kategori.",
        },
      ];

  return (
    <section className="reveal-fade mt-8 rounded-[2rem] border border-line bg-surface/68 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
      <h2 className="editorial-color-kiss font-display text-3xl">{title}</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {visibleLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex min-h-24 items-center justify-between gap-4 rounded-3xl bg-rose/8 p-5 transition hover:-translate-y-0.5 hover:bg-rose/15"
          >
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.12em] text-rose">
                {link.label}
              </span>
              <span className="mt-2 block font-display text-[1.35rem] font-black leading-tight text-ink">
                {link.text}
              </span>
            </span>
            <ArrowUpRight
              size={20}
              className="shrink-0 text-wine transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
