import Image from "next/image";
import Link from "next/link";

type ElinBylineProps = {
  className?: string;
};

export function ElinByline({ className = "" }: ElinBylineProps) {
  return (
    <Link
      href="/om-oss"
      className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface/72 px-3 text-xs font-black text-wine shadow-[0_12px_32px_rgba(185,131,166,0.1)] transition hover:-translate-y-0.5 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine ${className}`}
    >
      <span className="relative block size-7 shrink-0 overflow-hidden rounded-full">
        <Image src="/elin/elin-avatar.webp" alt="" fill sizes="28px" className="object-cover" />
      </span>
      Om Elins val
    </Link>
  );
}
