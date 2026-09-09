import { ProductDecisionPage } from "@/components/ProductDecisionPage";
import { kettlebellMaterialDecision } from "@/lib/gjutjarn-eller-mjuk-kettlebell";
import { kettlebellPicks } from "@/lib/kettlebell";
import { createSeoMetadata } from "@/lib/metadata";
import { getApprovedReviews } from "@/lib/reviews/reviews";
import { siteConfig } from "@/lib/site";

const pick = kettlebellPicks[1];
const decision = {
  ...kettlebellMaterialDecision,
  options: [kettlebellMaterialDecision.options[1]],
  category: { label: "Träning", href: "/traning" },
  comparison: { label: "Vad behöver du kontrollera före köp?", href: "/traning/gjutjarn-eller-mjuk-kettlebell" },
};
export const revalidate = 3600;
export const metadata = createSeoMetadata({
  title: "PROIRON mjuk kettlebell – underlag saknas inför köp",
  description: "Variant, vikt och material återstår att verifiera. Vi har inte testat golvskydd eller ljudnivå. Läs vilka uppgifter du behöver innan köp.",
  url: `${siteConfig.url}${pick.path}`,
});
export default async function Page() {
  const reviews = await getApprovedReviews(pick.product.slug);
  return <ProductDecisionPage pick={{ ...pick, href: pick.path }} decision={decision} reviews={reviews} />;
}
