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
    <section className="mt-7 rounded-[2rem] border border-[#F1D8DD] bg-white/68 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
      <h2 className="editorial-color-kiss font-display text-3xl">{title}</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {visibleLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex min-h-24 items-center justify-between gap-4 rounded-3xl bg-[#FFF4F5] p-5 transition hover:-translate-y-0.5 hover:bg-[#F9E0E3]"
          >
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.12em] text-[#D8788D]">
                {link.label}
              </span>
              <span className="mt-2 block font-display text-[1.35rem] font-black leading-tight text-[#5f4a54]">
                {link.text}
              </span>
            </span>
            <ArrowUpRight
              size={20}
              className="shrink-0 text-[#B983A6] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
