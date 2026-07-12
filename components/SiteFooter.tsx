import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-bg px-4 pb-8 text-ink">
      <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-line bg-surface/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.08)] md:p-8">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">
              Transparens
            </p>
            <p className="mt-3 max-w-3xl leading-7 text-ink-soft">
              Elins val innehåller redaktionella produkturval och reklamlänkar
              till Amazon. Recensioner från besökare modereras innan de
              publiceras. Vi använder inte annonseringspixlar, och sätter
              ingen analyscookie förrän du godkänner det i cookiebannern.
            </p>
            <p className="mt-3 max-w-3xl leading-7 text-ink-soft">
              Cloudflare Turnstile kan laddas på recensionsformulär när det är
              aktiverat, för att minska spam och skydda communityn.
            </p>
          </div>

          <nav aria-label="Sidfot" className="grid content-start gap-3">
            <Link
              href="/sok"
              className="link-underline w-fit font-bold text-ink-soft transition hover:text-wine"
            >
              Sök produkter
            </Link>
            <Link
              href="/om-oss"
              className="link-underline w-fit font-bold text-ink-soft transition hover:text-wine"
            >
              Om Elins val
            </Link>
            <Link
              href="/jamforelser"
              className="link-underline w-fit font-bold text-ink-soft transition hover:text-wine"
            >
              Jämförelser
            </Link>
            <Link
              href="/elins-poang"
              className="link-underline w-fit font-bold text-ink-soft transition hover:text-wine"
            >
              Så sätter vi Elins poäng
            </Link>
            <Link
              href="/integritetspolicy"
              className="link-underline w-fit font-bold text-ink-soft transition hover:text-wine"
            >
              Integritetspolicy
            </Link>
            <Link
              href="/cookies"
              className="link-underline w-fit font-bold text-ink-soft transition hover:text-wine"
            >
              Cookies
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-underline w-fit font-bold text-ink-soft transition hover:text-wine"
            >
              Kontakt
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-underline w-fit font-bold text-ink-soft transition hover:text-wine"
            >
              {siteConfig.email}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
