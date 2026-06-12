import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#FFF9F7] px-4 pb-8 text-[#3E2F3A]">
      <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.08)] md:p-8">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
              Transparens
            </p>
            <p className="mt-3 max-w-3xl leading-7 text-[#6f5a64]">
              Elins val innehåller redaktionella produkturval och reklamlänkar
              till Amazon. Recensioner från besökare modereras innan de
              publiceras. Vi använder inte annonseringspixlar eller
              analyscookies i koden i dag.
            </p>
            <p className="mt-3 max-w-3xl leading-7 text-[#6f5a64]">
              Cloudflare Turnstile kan laddas på recensionsformulär när det är
              aktiverat, för att minska spam och skydda communityn.
            </p>
          </div>

          <nav aria-label="Sidfot" className="grid content-start gap-3">
            <Link
              href="/om-oss"
              className="font-bold text-[#6b4755] transition hover:text-[#B983A6]"
            >
              Om Elins val
            </Link>
            <Link
              href="/integritetspolicy"
              className="font-bold text-[#6b4755] transition hover:text-[#B983A6]"
            >
              Integritetspolicy
            </Link>
            <Link
              href="/cookies"
              className="font-bold text-[#6b4755] transition hover:text-[#B983A6]"
            >
              Cookies
            </Link>
            <Link
              href="/kontakt"
              className="font-bold text-[#6b4755] transition hover:text-[#B983A6]"
            >
              Kontakt
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-bold text-[#6b4755] transition hover:text-[#B983A6]"
            >
              {siteConfig.email}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
