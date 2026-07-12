import Link from "next/link";

type ElinBylineProps = {
  className?: string;
};

export function ElinByline({ className = "" }: ElinBylineProps) {
  return (
    <Link
      href="/om-oss"
      className={`inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-surface/72 px-3 text-xs font-black text-wine shadow-[0_12px_32px_rgba(185,131,166,0.1)] transition hover:-translate-y-0.5 hover:bg-surface ${className}`}
    >
      <span className="relative grid size-7 shrink-0 place-items-center rounded-full bg-gradient-signature">
        <span className="absolute inset-[1.5px] rounded-full bg-bg" />
        <span className="relative font-display text-sm text-ink">E</span>
      </span>
      Utvald av Elin
    </Link>
  );
}
