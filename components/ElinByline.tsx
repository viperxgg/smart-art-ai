import Link from "next/link";

type ElinBylineProps = {
  className?: string;
};

export function ElinByline({ className = "" }: ElinBylineProps) {
  return (
    <Link
      href="/om-oss"
      className={`inline-flex min-h-10 items-center gap-2 rounded-full border border-[#F1D8DD] bg-white/72 px-3 text-xs font-black text-[#8F5262] shadow-[0_12px_32px_rgba(185,131,166,0.1)] transition hover:-translate-y-0.5 hover:bg-white ${className}`}
    >
      <span className="grid size-7 place-items-center rounded-full bg-[#F9DDE2] font-display text-sm text-[#B96377]">
        E
      </span>
      Utvald av Elin
    </Link>
  );
}
