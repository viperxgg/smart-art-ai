import { getDemoHref, type AppLocale, type InternalPathname } from "@/lib/site";

export type DemoKind = "customer" | "admin" | "kitchen";

export interface DemoCardContent {
  kind: DemoKind;
  label?: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  openInNewTab?: boolean;
}

export interface DemoSectionContent {
  type: DemoKind | "flow";
  eyebrow?: string;
  title: string;
  description: string;
  demos: DemoCardContent[];
  microcopy?: string[];
}

interface RestaurantDemoSections {
  featured?: DemoSectionContent;
  primary?: DemoSectionContent;
}

interface BlogDemoSections {
  inline: DemoSectionContent;
  live: DemoSectionContent;
  final: DemoSectionContent;
}

function getSharedMicrocopy(locale: AppLocale) {
  return locale === "sv"
    ? ["Tar några sekunder", "Fungerar direkt i mobilen", "Ingen installation behövs"]
    : ["Takes a few seconds", "Works directly on mobile", "No installation needed"];
}

function buildDemoCard(
  locale: AppLocale,
  kind: DemoKind,
  overrides: Partial<DemoCardContent> = {},
): DemoCardContent {
  const base =
    locale === "sv"
      ? {
          customer: {
            kind: "customer" as const,
            title: "Se hur beställningen fungerar",
            description: "Öppna gästvyn och se hur menyn startar direkt från bordet.",
            ctaLabel: "Testa hur en gäst beställer",
            href: getDemoHref(locale, "menu"),
            openInNewTab: false,
          },
          admin: {
            kind: "admin" as const,
            title: "Se hur du hanterar beställningar",
            description: "Öppna adminvyn och följ hur beställningar och serviceärenden landar.",
            ctaLabel: "Se hur du hanterar beställningar",
            href: getDemoHref(locale, "admin"),
            openInNewTab: false,
          },
          kitchen: {
            kind: "kitchen" as const,
            title: "Se hur köket tar emot beställningar",
            description: "Öppna köksläget och se hur nästa steg blir tydligt för köket.",
            ctaLabel: "Se hur köket tar emot beställningar",
            href: getDemoHref(locale, "kitchen"),
            openInNewTab: false,
          },
        }
      : {
          customer: {
            kind: "customer" as const,
            title: "See how ordering works",
            description: "Open the guest view and see how the menu starts directly at the table.",
            ctaLabel: "Try how a guest orders",
            href: getDemoHref(locale, "menu"),
            openInNewTab: false,
          },
          admin: {
            kind: "admin" as const,
            title: "See how you manage orders",
            description: "Open the admin view and follow how orders and service requests arrive.",
            ctaLabel: "See how you manage orders",
            href: getDemoHref(locale, "admin"),
            openInNewTab: false,
          },
          kitchen: {
            kind: "kitchen" as const,
            title: "See how the kitchen receives orders",
            description: "Open the kitchen view and see how the next step becomes clearer for the line.",
            ctaLabel: "See how the kitchen receives orders",
            href: getDemoHref(locale, "kitchen"),
            openInNewTab: false,
          },
        };

  return {
    ...base[kind],
    ...overrides,
  };
}

export function getHomepageDemoSection(locale: AppLocale): DemoSectionContent {
  return locale === "sv"
    ? {
        type: "customer",
        eyebrow: "Snabb demo",
        title: "Testa hur en gäst beställer",
        description:
          "Det här är den enda demo som behövs på startsidan. Öppna gästflödet och förstå upplevelsen direkt.",
        demos: [
          buildDemoCard(locale, "customer", {
            description: "Se hur menyn öppnas i mobilen när gästen skannar QR-koden vid bordet.",
          }),
        ],
        microcopy: getSharedMicrocopy(locale),
      }
    : {
        type: "customer",
        eyebrow: "Quick demo",
        title: "Try how a guest orders",
        description:
          "This is the only demo shown on the homepage. Open the guest flow and understand the experience fast.",
        demos: [
          buildDemoCard(locale, "customer", {
            description: "See how the menu opens on mobile when the guest scans the table QR code.",
          }),
        ],
        microcopy: getSharedMicrocopy(locale),
      };
}

export function getRestaurantDemoSections(
  locale: AppLocale,
  pathname: InternalPathname,
): RestaurantDemoSections {
  if (pathname === "/restaurant-digital-menu") {
    return locale === "sv"
      ? {
          featured: {
            type: "customer",
            eyebrow: "Testa själv först",
            title: "Testa hur en gäst beställer",
            description:
              "Det här är den snabbaste vägen att förstå varför en digital meny känns tydligare direkt vid bordet.",
            demos: [
              buildDemoCard(locale, "customer", {
                description: "Öppna gästflödet och se hur beställningen fungerar utan app eller extra steg.",
              }),
            ],
            microcopy: getSharedMicrocopy(locale),
          },
          primary: {
            type: "flow",
            eyebrow: "Systemdemo",
            title: "Se hela flödet",
            description:
              "Börja med gästens vy. Titta sedan på admin och kök för att förstå hela systemet på under 30 sekunder.",
            demos: [
              buildDemoCard(locale, "customer", {
                label: "Gäst",
                description: "Se hur gästen öppnar menyn och kommer vidare till ett tydligt val.",
                href: getDemoHref(locale, "menu"),
                openInNewTab: false,
              }),
              buildDemoCard(locale, "admin", {
                label: "Beställning",
                description: "Se hur beställningar och serviceärenden landar i adminvyn.",
                href: getDemoHref(locale, "admin"),
                openInNewTab: false,
              }),
              buildDemoCard(locale, "kitchen", {
                label: "Kök",
                description: "Se hur köket tar emot nästa steg när flödet byggs vidare.",
                href: getDemoHref(locale, "kitchen"),
                openInNewTab: false,
              }),
            ],
            microcopy: getSharedMicrocopy(locale),
          },
        }
      : {
          featured: {
            type: "customer",
            eyebrow: "Try it first",
            title: "Try how a guest orders",
            description:
              "This is the fastest way to understand why a digital menu feels clearer at the table.",
            demos: [
              buildDemoCard(locale, "customer", {
                description: "Open the guest flow and see how ordering starts without an app or extra steps.",
              }),
            ],
            microcopy: getSharedMicrocopy(locale),
          },
          primary: {
            type: "flow",
            eyebrow: "System demo",
            title: "See the full flow",
            description:
              "Start with the guest view, then open admin and kitchen to understand the full system in under 30 seconds.",
            demos: [
              buildDemoCard(locale, "customer", {
                label: "Guest",
                description: "See how the guest opens the menu and moves into a clearer choice.",
                href: getDemoHref(locale, "menu"),
                openInNewTab: false,
              }),
              buildDemoCard(locale, "admin", {
                label: "Order",
                description: "See how orders and service requests arrive in the admin view.",
                href: getDemoHref(locale, "admin"),
                openInNewTab: false,
              }),
              buildDemoCard(locale, "kitchen", {
                label: "Kitchen",
                description: "See how the kitchen receives the next step when the flow expands.",
                href: getDemoHref(locale, "kitchen"),
                openInNewTab: false,
              }),
            ],
            microcopy: getSharedMicrocopy(locale),
          },
        };
  }

  if (pathname === "/restaurant-qr-menu") {
    return {
      primary:
        locale === "sv"
          ? {
              type: "customer",
              eyebrow: "QR-demo",
              title: "Se hur beställningen fungerar",
              description:
                "Den här sidan ska visa gästens första steg. Därför ligger bara kunddemon här.",
              demos: [
                buildDemoCard(locale, "customer", {
                  description: "Öppna QR-flödet och se hur gästen börjar direkt från bordet.",
                }),
              ],
              microcopy: getSharedMicrocopy(locale),
            }
          : {
              type: "customer",
              eyebrow: "QR demo",
              title: "See how ordering works",
              description:
                "This page should focus on the guest’s first step, so it only shows the customer demo.",
              demos: [
                buildDemoCard(locale, "customer", {
                  description: "Open the QR flow and see how the guest starts directly from the table.",
                }),
              ],
              microcopy: getSharedMicrocopy(locale),
            },
    };
  }

  if (pathname === "/restaurant-ordering-system") {
    return {
      primary:
        locale === "sv"
          ? {
              type: "flow",
              eyebrow: "Driftdemo",
              title: "Se hur beställningen går vidare",
              description:
                "Här är admin och kök viktigast. De visar hur ordern blir tydlig efter att gästen har valt.",
              demos: [
                buildDemoCard(locale, "admin", {
                  label: "Beställning",
                  description: "Följ hur order och serviceärenden hanteras i adminvyn.",
                }),
                buildDemoCard(locale, "kitchen", {
                  label: "Kök",
                  description: "Se hur köket tar emot beställningar i ett tydligare nästa steg.",
                }),
              ],
              microcopy: getSharedMicrocopy(locale),
            }
          : {
              type: "flow",
              eyebrow: "Operations demo",
              title: "See how the order moves forward",
              description:
                "Admin and kitchen matter most here. They show what happens after the guest has chosen.",
              demos: [
                buildDemoCard(locale, "admin", {
                  label: "Order",
                  description: "Follow how orders and service requests are handled in the admin view.",
                }),
                buildDemoCard(locale, "kitchen", {
                  label: "Kitchen",
                  description: "See how the kitchen receives orders in a clearer next step.",
                }),
              ],
              microcopy: getSharedMicrocopy(locale),
            },
    };
  }

  if (pathname === "/restaurant-digital-menu-sweden") {
    return {
      primary:
        locale === "sv"
          ? {
              type: "customer",
              eyebrow: "Snabb demo",
              title: "Testa menyupplevelsen direkt",
              description:
                "För den här sidan räcker det att visa kundupplevelsen tydligt och utan krångel.",
              demos: [
                buildDemoCard(locale, "customer", {
                  description: "Se hur en gäst i mobilen öppnar menyn direkt utan installation.",
                }),
              ],
              microcopy: getSharedMicrocopy(locale),
            }
          : {
              type: "customer",
              eyebrow: "Quick demo",
              title: "Try the menu experience directly",
              description:
                "For this page, showing the guest experience clearly is enough.",
              demos: [
                buildDemoCard(locale, "customer", {
                  description: "See how a guest opens the menu on mobile without installation.",
                }),
              ],
              microcopy: getSharedMicrocopy(locale),
            },
    };
  }

  return {};
}

function isWorkflowBlog(slug: string) {
  return [
    "ordering-system",
    "staff-pressure",
    "digital-work",
    "future-of-digital-work",
    "scandinavian-digital-menu",
  ].some((pattern) => slug.includes(pattern));
}

export function getBlogDemoSections(locale: AppLocale, slug: string): BlogDemoSections {
  if (isWorkflowBlog(slug)) {
    const demos = [
      buildDemoCard(locale, "admin", {
        label: locale === "sv" ? "Beställning" : "Order",
        description:
          locale === "sv"
            ? "Se hur order och serviceärenden hanteras när flödet blir tydligare."
            : "See how orders and service requests are handled when the flow becomes clearer.",
      }),
      buildDemoCard(locale, "kitchen", {
        label: locale === "sv" ? "Kök" : "Kitchen",
        description:
          locale === "sv"
            ? "Se hur köket tar emot nästa steg utan onödiga mellanled."
            : "See how the kitchen receives the next step without extra handoffs.",
      }),
    ];

    return locale === "sv"
      ? {
          inline: {
            type: "flow",
            eyebrow: "Demo i artikeln",
            title: "Se hur detta fungerar i praktiken",
            description:
              "Den här typen av artikel handlar om drift. Därför visar vi admin och kök, inte bara gästvyn.",
            demos,
            microcopy: getSharedMicrocopy(locale),
          },
          live: {
            type: "flow",
            eyebrow: "Live demo",
            title: "Öppna de delar som visar driften tydligast",
            description:
              "Se hur ordern följs vidare efter att gästen har valt.",
            demos,
            microcopy: getSharedMicrocopy(locale),
          },
          final: {
            type: "flow",
            eyebrow: "Nästa steg",
            title: "Testa driftflödet innan ni bokar",
            description:
              "Öppna admin och kök live om ni vill förstå arbetsflödet snabbare innan ni tar kontakt.",
            demos,
            microcopy: getSharedMicrocopy(locale),
          },
        }
      : {
          inline: {
            type: "flow",
            eyebrow: "In-article demo",
            title: "See how this works in practice",
            description:
              "This kind of article is about operations, so it shows admin and kitchen instead of only the guest view.",
            demos,
            microcopy: getSharedMicrocopy(locale),
          },
          live: {
            type: "flow",
            eyebrow: "Live demo",
            title: "Open the parts that show operations most clearly",
            description:
              "See how the order continues after the guest has made a choice.",
            demos,
            microcopy: getSharedMicrocopy(locale),
          },
          final: {
            type: "flow",
            eyebrow: "Next step",
            title: "Try the operations flow before you book",
            description:
              "Open admin and kitchen live if you want to understand the workflow faster before contacting us.",
            demos,
            microcopy: getSharedMicrocopy(locale),
          },
        };
  }

  const customerDemo = [
    buildDemoCard(locale, "customer", {
      description:
        locale === "sv"
          ? "Öppna gästvyn och se hur menyn startar direkt från bordet."
          : "Open the guest view and see how the menu starts directly from the table.",
    }),
  ];

  return locale === "sv"
    ? {
        inline: {
          type: "customer",
          eyebrow: "Demo i artikeln",
          title: "Se hur detta fungerar i praktiken",
          description:
            "Den här artikeln handlar om meny eller QR. Därför är kunddemon den snabbaste vägen till förståelse.",
          demos: customerDemo,
          microcopy: getSharedMicrocopy(locale),
        },
        live: {
          type: "customer",
          eyebrow: "Live demo",
          title: "Öppna gästupplevelsen direkt",
          description:
            "Se hur menyn fungerar i mobilen när gästen skannar QR-koden.",
          demos: customerDemo,
          microcopy: getSharedMicrocopy(locale),
        },
        final: {
          type: "customer",
          eyebrow: "Nästa steg",
          title: "Testa menyupplevelsen innan ni bokar",
          description:
            "Öppna kunddemon om ni vill se hur beställningen fungerar i praktiken innan ni tar nästa steg.",
          demos: customerDemo,
          microcopy: getSharedMicrocopy(locale),
        },
      }
    : {
        inline: {
          type: "customer",
          eyebrow: "In-article demo",
          title: "See how this works in practice",
          description:
            "This article is about menu or QR, so the customer demo is the fastest way to understand it.",
          demos: customerDemo,
          microcopy: getSharedMicrocopy(locale),
        },
        live: {
          type: "customer",
          eyebrow: "Live demo",
          title: "Open the guest experience directly",
          description:
            "See how the menu works on mobile when the guest scans the QR code.",
          demos: customerDemo,
          microcopy: getSharedMicrocopy(locale),
        },
        final: {
          type: "customer",
          eyebrow: "Next step",
          title: "Try the menu experience before you book",
          description:
            "Open the customer demo if you want to see how ordering works before taking the next step.",
          demos: customerDemo,
          microcopy: getSharedMicrocopy(locale),
        },
      };
}
