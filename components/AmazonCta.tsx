import { ArrowUpRight, ShieldCheck } from "lucide-react";

type AmazonCtaProps = {
  href: string;
  className?: string;
  panel?: boolean;
};

export function AmazonCta({ href, className = "", panel = false }: AmazonCtaProps) {
  const button = (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D8788D] to-[#EAA3AD] px-6 text-base font-black text-white shadow-[0_20px_48px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5 sm:text-lg"
    >
      Se aktuellt pris på Amazon
      <ArrowUpRight size={20} aria-hidden="true" />
    </a>
  );

  if (!panel) {
    return (
      <div className={className}>
        {button}
        <p className="mt-3 text-sm leading-6 text-[#8a6d78]">
          Priset visas inte här eftersom Amazon kan ändra pris och lagerstatus.
        </p>
      </div>
    );
  }

  return (
    <section
      className={`rounded-[2rem] border border-[#F1D8DD] bg-[#FFF4F5] p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8 ${className}`}
    >
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F9DDE2] text-[#B983A6]">
          <ShieldCheck size={24} aria-hidden="true" />
        </span>
        <div className="w-full">
          <h2 className="editorial-color-kiss font-display text-3xl">
            Se produkten
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#6f5a64]">
            Kontrollera alltid aktuell information på Amazon innan köp.
          </p>
          <div className="mt-7">{button}</div>
        </div>
      </div>
    </section>
  );
}
