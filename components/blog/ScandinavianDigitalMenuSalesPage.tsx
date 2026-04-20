/* eslint-disable @next/next/no-img-element */
import InlineDemoLeadForm from "@/components/blog/InlineDemoLeadForm";
import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  ChefHat,
  LayoutDashboard,
  QrCode,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TimerReset,
  UtensilsCrossed,
} from "lucide-react";

type PageLocale = "sv" | "en" | string;
type FinalAction = {
  label: string;
  href: string;
  external?: boolean;
};

const demoLinks = {
  guest: "https://codex-delta-liart.vercel.app/menu/nord-table?table=12",
  admin: "https://codex-delta-liart.vercel.app/admin",
  kitchen: "https://codex-delta-liart.vercel.app/kitchen",
};

const qrSize = "220x220";

const copy = {
  sv: {
    eyebrow: "Digital meny för restauranger i Sverige",
    title: "QR-meny, live-dashboard och köksflöde i ett enkelt system.",
    subtitle:
      "Låt gästen skanna, se menyn direkt och skicka beställningen in i restaurangens arbetsflöde utan extra väntan, papperslappar eller onödiga missförstånd.",
    primaryCta: "Testa live",
    secondaryCta: "Boka demo",
    trustBullets: [
      "Snabbare service från bord till kök",
      "Färre fel i beställningar och service",
      "Enkelt att testa utan tung onboarding",
    ],
    summaryTitle: "Det här får restaurangen direkt",
    summaryItems: [
      {
        title: "Gästens meny",
        text: "QR-baserad meny med tydliga kategorier, priser, ingredienser och enkel beställning vid bordet.",
      },
      {
        title: "Serviceöverblick",
        text: "Dashboard för order, waiter requests, ansvar och status i samma livevy.",
      },
      {
        title: "Kökssystem",
        text: "KDS som visar nya, pågående och färdiga ordrar i realtid på större skärmar eller surfplattor.",
      },
    ],
    problemTitle: "Det här skapar onödig stress i vardagen",
    problemIntro:
      "När meny, service och kök inte hänger ihop tappar restaurangen fart. Det märks direkt i väntetid, fel och hur gästen upplever besöket.",
    problems: [
      "Pappersmenyer och manuella steg gör starten långsam.",
      "Beställningar behöver ofta upprepas eller förklaras igen.",
      "Servicepersonalen springer mellan bord och kök för att jaga status.",
      "Gäster får vänta för länge på att få hjälp vid bordet.",
      "Köket saknar en tydlig realtidsvy när tempot går upp.",
      "Menyuppdateringar blir onödigt tunga att hålla aktuella.",
    ],
    solutionTitle: "En digital meny som faktiskt förenklar driften",
    solutionIntro:
      "Scandinavian Digital Menu är byggd för restauranger som vill göra flödet tydligare utan att göra upplevelsen mer teknisk för gästen.",
    solutionPillars: [
      {
        title: "För gästen",
        text: "Gästen skannar QR-koden, öppnar rätt meny direkt och beställer i lugn och ro från bordet.",
      },
      {
        title: "För serveringen",
        text: "Order, serviceförfrågningar och ansvar samlas i ett gemensamt dashboardflöde som är lätt att agera på.",
      },
      {
        title: "För köket",
        text: "Kitchen Mode visar orderstatus tydligt så att köket kan arbeta snabbare och lugnare även under hög belastning.",
      },
    ],
    howTitle: "Så fungerar det",
    howIntro:
      "Det ska gå att förstå på några sekunder. Flödet är byggt för att vara naturligt både för gästen och för teamet.",
    steps: [
      {
        title: "Gästen skannar",
        text: "QR-koden öppnar rätt meny direkt i rätt bordskontext utan extra steg.",
      },
      {
        title: "Gästen väljer och skickar",
        text: "Rätter, priser, ingredienser och totalsumma granskas innan beställningen skickas.",
      },
      {
        title: "Teamet hanterar live",
        text: "Servering och kök ser ordern direkt och kan följa den vidare i realtid.",
      },
    ],
    demoTitle: "Testa systemet live",
    demoIntro:
      "Här kan du prova samma tre delar som skapar hela flödet: gästens meny, administrationen och köksläget. Samma länkar som redan används i produkten är bevarade.",
    demoCards: [
      {
        badge: "Live Menu",
        title: "Gästens meny",
        text: "Se hur menyn öppnas från bordet och hur gästen möter ett tydligt, mobilanpassat beställningsflöde.",
        button: "Öppna meny",
        href: demoLinks.guest,
        icon: Smartphone,
        accent: "cyan",
      },
      {
        badge: "Admin",
        title: "Administration",
        text: "Testa livevyn där order, serviceärenden och status samlas i samma arbetsflöde.",
        button: "Öppna admin",
        href: demoLinks.admin,
        icon: LayoutDashboard,
        accent: "emerald",
      },
      {
        badge: "Kitchen",
        title: "Kökssystem",
        text: "Öppna KDS-läget och följ hur ordrar rör sig från ny till färdig i realtid.",
        button: "Öppna kökssystem",
        href: demoLinks.kitchen,
        icon: ChefHat,
        accent: "amber",
      },
    ],
    benefitsTitle: "Vad restaurangen vinner på det",
    benefitsIntro:
      "Det här handlar inte bara om att se modern ut. Det handlar om snabbare drift, tydligare samordning och en bättre upplevelse för gästen.",
    benefits: [
      {
        title: "Snabbare service",
        text: "Beställningen kommer in direkt och behöver inte flyttas manuellt vidare i kedjan.",
        icon: TimerReset,
      },
      {
        title: "Färre fel",
        text: "Gästen granskar ordern innan skickning, vilket minskar missförstånd och onödiga korrigeringar.",
        icon: CheckCircle2,
      },
      {
        title: "Bättre gästupplevelse",
        text: "Gästen får en lugnare upplevelse med snabbare menyåtkomst, tydlig orderbekräftelse och enkel hjälp vid bordet.",
        icon: Sparkles,
      },
      {
        title: "Tydligare servicearbete",
        text: "Teamet ser vem som tagit ett ärende, vad som väntar och vad som redan är klart.",
        icon: BellRing,
      },
      {
        title: "Livevy för köket",
        text: "Köket får ett fokuserat arbetsläge med tydliga statusbyten när tempot går upp.",
        icon: UtensilsCrossed,
      },
      {
        title: "Modernare intryck",
        text: "Den digitala upplevelsen signalerar ordning, kvalitet och ett mer samtida restaurangkoncept.",
        icon: ShieldCheck,
      },
    ],
    easyTitle: "Lätt att komma igång",
    easyIntro:
      "För många restauranger är det viktigaste att starten känns enkel. Därför är upplägget byggt för snabb testning och låg friktion.",
    easyPoints: [
      "Snabb setup anpassad efter er meny och ert arbetssätt.",
      "Enkelt att visa live för ägare, driftansvariga och kök innan beslut.",
      "Ingen tung utbildning för att förstå grundflödet.",
      "Passar restauranger, caféer, hotellservering och andra serviceintensiva koncept.",
    ],
    finalTitle: "Redo att testa ett enklare restaurangflöde?",
    finalIntro:
      "Öppna live-menyn, titta på dashboarden och se hur köksläget fungerar i praktiken. När du vill kan du också boka en genomgång för just din verksamhet.",
    finalActions: [
      { label: "Testa live-menyn", href: "#live-demo" },
      { label: "Se admin-flödet", href: demoLinks.admin, external: true },
      { label: "Boka demo", href: "#boka-demo" },
    ],
    formTitle: "Boka en genomgång av er meny och ert flöde",
    formText:
      "Vi visar hur systemet kan anpassas till er restaurang, hur orderflödet ser ut live och hur snabbt ni kan komma igång.",
  },
  en: {
    eyebrow: "Digital menu for restaurants in Sweden",
    title: "QR menu, live dashboard, and kitchen flow in one simple system.",
    subtitle:
      "Let guests scan, open the menu instantly, and send orders straight into the restaurant workflow without paper tickets, extra waiting, or unnecessary confusion.",
    primaryCta: "Try it live",
    secondaryCta: "Book a demo",
    trustBullets: [
      "Faster service from table to kitchen",
      "Fewer ordering and service mistakes",
      "Easy to test without heavy onboarding",
    ],
    summaryTitle: "What the restaurant gets immediately",
    summaryItems: [
      {
        title: "Guest menu",
        text: "QR-based menu with clear categories, prices, ingredients, and an easy table-side ordering flow.",
      },
      {
        title: "Service overview",
        text: "A live dashboard for orders, waiter requests, ownership, and status in one place.",
      },
      {
        title: "Kitchen system",
        text: "A KDS that shows new, active, and ready orders in real time on larger screens or tablets.",
      },
    ],
    problemTitle: "This is where restaurants lose time every day",
    problemIntro:
      "When menu, service, and kitchen do not work together, the restaurant slows down. Guests feel it in the waiting time and the team feels it in the pressure.",
    problems: [
      "Paper menus and manual steps slow the experience down.",
      "Orders often need to be repeated or clarified again.",
      "Staff move back and forth just to check status.",
      "Guests wait too long before they can get help at the table.",
      "The kitchen lacks a clear real-time view when pace increases.",
      "Menu updates are heavier than they need to be.",
    ],
    solutionTitle: "A digital menu that simplifies real restaurant work",
    solutionIntro:
      "Scandinavian Digital Menu is built for restaurants that want a cleaner workflow without making the guest experience feel technical.",
    solutionPillars: [
      {
        title: "For guests",
        text: "Guests scan the QR code, open the right menu instantly, and place orders directly from the table.",
      },
      {
        title: "For service",
        text: "Orders, service requests, and ownership are collected in one live dashboard that is easy to act on.",
      },
      {
        title: "For the kitchen",
        text: "Kitchen Mode keeps the order flow clear so the kitchen can work faster and more calmly under pressure.",
      },
    ],
    howTitle: "How it works",
    howIntro:
      "The value should be clear in seconds. The flow is built to feel natural for both guests and staff.",
    steps: [
      {
        title: "Guest scans",
        text: "The QR code opens the right menu instantly in the correct table context.",
      },
      {
        title: "Guest reviews and sends",
        text: "Dishes, prices, ingredients, and totals are checked before the order is sent.",
      },
      {
        title: "Team handles it live",
        text: "Service staff and kitchen see the order immediately and move it forward in real time.",
      },
    ],
    demoTitle: "Try the system live",
    demoIntro:
      "Test the same three parts that create the full workflow: the guest menu, the admin view, and the kitchen mode.",
    demoCards: [
      {
        badge: "Live Menu",
        title: "Guest menu",
        text: "See how the table-side menu opens and how the guest experiences a clean mobile ordering flow.",
        button: "Open menu",
        href: demoLinks.guest,
        icon: Smartphone,
        accent: "cyan",
      },
      {
        badge: "Admin",
        title: "Administration",
        text: "Test the live view where orders, service requests, and status appear in one workflow.",
        button: "Open admin",
        href: demoLinks.admin,
        icon: LayoutDashboard,
        accent: "emerald",
      },
      {
        badge: "Kitchen",
        title: "Kitchen system",
        text: "Open the KDS view and follow orders from new to ready in real time.",
        button: "Open kitchen",
        href: demoLinks.kitchen,
        icon: ChefHat,
        accent: "amber",
      },
    ],
    benefitsTitle: "What the restaurant gains",
    benefitsIntro:
      "This is not only about looking more modern. It is about clearer operations, faster service, and a better guest experience.",
    benefits: [
      {
        title: "Faster service",
        text: "Orders enter the workflow directly without manual handoffs.",
        icon: TimerReset,
      },
      {
        title: "Fewer mistakes",
        text: "Guests review their order before sending it, which reduces unnecessary corrections.",
        icon: CheckCircle2,
      },
      {
        title: "Better guest experience",
        text: "Guests get faster menu access, clear confirmation, and an easy way to ask for help.",
        icon: Sparkles,
      },
      {
        title: "Clearer service work",
        text: "The team sees ownership, status, and what still needs attention in one place.",
        icon: BellRing,
      },
      {
        title: "Live kitchen visibility",
        text: "The kitchen gets a focused operational view built for speed and clarity.",
        icon: UtensilsCrossed,
      },
      {
        title: "Stronger first impression",
        text: "The digital experience signals quality and a more modern restaurant concept.",
        icon: ShieldCheck,
      },
    ],
    easyTitle: "Easy to start",
    easyIntro:
      "Most restaurants do not want a complicated rollout. The setup is designed to be quick to understand and easy to test.",
    easyPoints: [
      "Fast setup adapted to your menu and service model.",
      "Simple to test live before making a decision.",
      "No heavy learning curve for the core flow.",
      "Fits restaurants, cafés, hotel dining, and other service-heavy concepts.",
    ],
    finalTitle: "Ready to test a cleaner restaurant workflow?",
    finalIntro:
      "Open the live menu, review the dashboard, and see how the kitchen mode works in practice. When you are ready, book a walkthrough for your own operation.",
    finalActions: [
      { label: "Try the live menu", href: "#live-demo" },
      { label: "See the admin flow", href: demoLinks.admin, external: true },
      { label: "Book a demo", href: "#book-demo" },
    ],
    formTitle: "Book a walkthrough for your menu and service flow",
    formText:
      "We show how the system can be adapted to your restaurant, what the live workflow looks like, and how quickly you can get started.",
  },
} as const;

function isExternalAction(action: FinalAction) {
  return Boolean(action.external);
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-cyan-300/70">
        {eyebrow}
      </p>
      <h2 className="text-3xl leading-tight font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-7 text-white/65 md:text-lg">
        {text}
      </p>
    </div>
  );
}

function DemoCard({
  badge,
  title,
  text,
  button,
  href,
  icon: Icon,
  accent,
}: {
  badge: string;
  title: string;
  text: string;
  button: string;
  href: string;
  icon: typeof Smartphone;
  accent: "cyan" | "emerald" | "amber";
}) {
  const accentStyles = {
    cyan: {
      border: "hover:border-cyan-400/40",
      icon: "bg-cyan-400/10 text-cyan-300",
      badge: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
      button: "hover:border-cyan-300/50 hover:text-cyan-200",
      glow: "bg-cyan-500/10",
      scan: "text-cyan-500",
    },
    emerald: {
      border: "hover:border-emerald-400/40",
      icon: "bg-emerald-400/10 text-emerald-300",
      badge: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
      button: "hover:border-emerald-300/50 hover:text-emerald-200",
      glow: "bg-emerald-500/10",
      scan: "text-emerald-500",
    },
    amber: {
      border: "hover:border-amber-400/40",
      icon: "bg-amber-400/10 text-amber-300",
      badge: "border-amber-400/20 bg-amber-400/10 text-amber-300",
      button: "hover:border-amber-300/50 hover:text-amber-200",
      glow: "bg-amber-500/10",
      scan: "text-amber-500",
    },
  }[accent];

  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition-all md:p-8 ${accentStyles.border}`}
    >
      <div
        className={`pointer-events-none absolute inset-x-10 top-0 h-28 blur-3xl ${accentStyles.glow}`}
      />
      <div className="relative space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] ${accentStyles.badge}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {badge}
          </div>
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accentStyles.icon}`}
          >
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-black tracking-tight text-white">
            {title}
          </h3>
          <p className="text-sm leading-6 text-white/65 md:text-base">
            {text}
          </p>
        </div>

        <div className="relative flex items-center justify-center rounded-[1.5rem] border border-white/10 bg-white p-5 shadow-[0_16px_50px_rgba(255,255,255,0.06)]">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}&data=${encodeURIComponent(href)}`}
            alt={`${title} QR`}
            className="h-44 w-44"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-[1.5rem] bg-white/95 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <ScanLine className={`h-8 w-8 ${accentStyles.scan}`} />
          </div>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-black/20 px-5 py-3 text-sm font-semibold text-white transition-all ${accentStyles.button}`}
        >
          {button}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export default function ScandinavianDigitalMenuSalesPage({
  locale,
}: {
  locale: PageLocale;
}) {
  const t = locale === "en" ? copy.en : copy.sv;

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
      <section className="relative overflow-hidden border-b border-white/5 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-12 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-300/80">
              <QrCode className="h-4 w-4" />
              {t.eyebrow}
            </div>

            <div className="space-y-5">
              <h1 className="max-w-5xl text-4xl leading-[0.95] font-black tracking-tight text-white md:text-6xl lg:text-7xl">
                {t.title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
                {t.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#live-demo"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-black transition-all hover:bg-cyan-300"
              >
                {t.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={locale === "en" ? "#book-demo" : "#boka-demo"}
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/[0.08]"
              >
                {t.secondaryCta}
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {t.trustBullets.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-white/72"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-white/45">
                  {t.summaryTitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    QR-meny
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70">
                    Live-dashboard
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70">
                    Kitchen Mode
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {t.summaryItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                  >
                    <h2 className="text-lg font-bold tracking-tight text-white">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Problem"
            title={t.problemTitle}
            text={t.problemIntro}
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.problems.map((problem) => (
              <div
                key={problem}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 text-base leading-7 text-white/72"
              >
                {problem}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Lösning"
            title={t.solutionTitle}
            text={t.solutionIntro}
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {t.solutionPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="rounded-[2rem] border border-white/10 bg-black/20 p-6 md:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-cyan-300/70">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-black tracking-tight text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/65">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hur-det-fungerar" className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Så fungerar det"
            title={t.howTitle}
            text={t.howIntro}
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {t.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 font-mono text-sm font-bold text-cyan-300">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-black tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/65">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="live-demo"
        className="border-y border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent px-6 py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Try it live"
            title={t.demoTitle}
            text={t.demoIntro}
          />

          <div className="grid gap-6 xl:grid-cols-3">
            {t.demoCards.map((card) => (
              <DemoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Fördelar"
            title={t.benefitsTitle}
            text={t.benefitsIntro}
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {t.benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/65">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Enkel start"
            title={t.easyTitle}
            text={t.easyIntro}
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {t.easyPoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5 text-base leading-7 text-white/72"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id={locale === "en" ? "book-demo" : "boka-demo"}
        className="px-6 py-20 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-cyan-300/70">
              CTA
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-black tracking-tight text-white md:text-5xl">
              {t.finalTitle}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/65 md:text-lg">
              {t.finalIntro}
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {(t.finalActions as readonly FinalAction[]).map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target={isExternalAction(action) ? "_blank" : undefined}
                  rel={isExternalAction(action) ? "noreferrer" : undefined}
                  className="inline-flex min-h-12 items-center justify-between rounded-full border border-white/12 bg-black/20 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  {action.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h3 className="text-2xl font-black tracking-tight text-white">
              {t.formTitle}
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/65">
              {t.formText}
            </p>
            <div className="mt-8">
              <InlineDemoLeadForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
