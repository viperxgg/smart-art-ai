export const siteConfig = {
  name: "Elins val",
  brand: "Elins val",
  legalName: "FRAMFORM",
  title: "Elins val – jämför skönhet, hälsa och träning",
  url: "https://www.smartartai.se",
  email: "hello@smartartai.se",
  description:
    "Vad passar dig och vad kan du skippa? Jämför skillnader och nackdelar inom skönhet, hälsa och träning med dina behov som utgångspunkt.",
  // Operator / imprint. Source of truth: https://framform.se/sv/foretagsinformation
  // (fetched 2026-09-05). The organisationsnummer is deliberately not printed on
  // the site — for an enskild firma it equals a personal identity number.
  operatorName: "Azzam Khalaf",
  operatorRole: "Ansvarig utgivare & redaktör",
  operatorLegalForm: "enskild näringsidkare",
  operatorCity: "Backe",
  operatorCountry: "Sverige",
  companySiteUrl: "https://framform.se",
  companyUrl: "https://framform.se/sv/foretagsinformation",
  companyLinkedIn: "https://www.linkedin.com/company/135326580/",
  operatorLinkedIn: "https://www.linkedin.com/in/azzamkhalaf/",
  // Portrait used on /om-oss#azzam and as Person.image in the Organization
  // schema. Stays null until public/team/azzam-khalaf.webp exists — run
  // `node scripts/make-team-photo.mjs` to convert the source photo; the script
  // sets this to "/team/azzam-khalaf.webp".
  operatorImage: "/team/azzam-khalaf.webp" as string | null,
} as const;

// Elins vals egna konton. Håll dessa i synk med publiceringsflödet.
// Rendered in the footer and emitted as Organization.sameAs.
export const socialProfiles = [
  { href: "https://www.instagram.com/elinsval/", label: "Instagram" },
  { href: "https://www.tiktok.com/@elinsval", label: "TikTok" },
  { href: "https://www.pinterest.com/elinsval/", label: "Pinterest" },
  { href: "https://www.facebook.com/1093709150502504", label: "Facebook" },
] as const;

export const DEFAULT_RATING_CHECKED_AT = "juni 2026";
