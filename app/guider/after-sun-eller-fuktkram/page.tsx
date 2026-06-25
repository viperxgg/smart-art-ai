import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/after-sun-eller-fuktkram`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "After sun eller fuktkräm – behöver du båda?",
    href: "/guider/after-sun-eller-fuktkram",
  },
];

const sections = [
  {
    heading: "Det här gör after sun",
    bullets: [
      "Återfuktar och ger en svalkande, lugnande känsla efter sol, bad och värme.",
      "Innehåller ofta aloe vera eller liknande som känns skönt på varm hud.",
    ],
    closing: "Mycket av poängen är fukt plus en svalkande känsla.",
  },
  {
    heading: "När en fuktkräm räcker",
    bullets: [
      "En vanlig, mild fuktkräm återfuktar också huden efter solen.",
      "Skillnaden ligger mest i den svalkande känslan och konsistensen – inte i någon magisk ingrediens.",
    ],
    closing: "Har du en bra fuktkräm hemma gör den en stor del av jobbet.",
  },
] as const;

const faqItems = [
  {
    question: "Behöver jag after sun om jag har fuktkräm?",
    answer:
      "Inte nödvändigtvis. En mild fuktkräm återfuktar också; after sun tillför mest en svalkande känsla.",
  },
  {
    question: "Ersätter after sun solskydd?",
    answer: "Nej. After sun används efter solen och skyddar inte mot UV.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "After sun eller vanlig fuktkräm – behöver du båda? | Elins val",
  description:
    "Elin jämför after sun och fuktkräm ärligt – vad after sun tillför och när en fuktkräm räcker.",
  url: pageUrl,
});

export default function AfterSunEllerFuktkramPage() {
  return (
    <GuidePage
      h1="After sun eller fuktkräm – behöver du båda?"
      intro="Efter en dag i solen – räcker din vanliga fuktkräm, eller behöver du en after sun? Elin går igenom det ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "After sun är skönt och svalkande, men inte ett måste om du redan har en mild fuktkräm. Vill du ha den där extra svalkande känslan – gärna med aloe vera – är en after sun eller ren aloe vera-gel värd det. Och kom ihåg: after sun ersätter inte solskydd.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/skonhet/aftersun",
            label: "NIVEA SUN – prisvärt after sun",
          },
          {
            href: "/skonhet/aloe-vera-gel",
            label: "Naissance – svalkande aloe vera",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/skonhet/aftersun",
          label: "Elins val",
          text: "NIVEA SUN – prisvärt after sun",
        },
        {
          href: "/skonhet/aloe-vera-gel",
          label: "Aloe vera",
          text: "Naissance – svalkande aloe vera",
        },
      ]}
    />
  );
}
