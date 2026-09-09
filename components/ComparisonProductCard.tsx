import Image from "next/image";
import Link from "next/link";
import type { DecisionOption } from "@/lib/decision-record";
import { getElinProductEvidence } from "@/lib/elin-product-evidence";
import { getApprovedProductImage } from "@/lib/product-image-approvals";
import { DecisionProductImage } from "@/components/DecisionProductImage";
import type { Product } from "@/lib/products";

/** Product evidence can support a preview without approving the whole comparison. */
export function ComparisonProductCard({ product, href, option, hideImage = false }: {
  product: Product;
  href: string;
  option?: DecisionOption;
  hideImage?: boolean;
}) {
  if (option && option.productSlug !== product.slug) throw new Error("Comparison card model mismatch.");
  const evidence = getElinProductEvidence(product);
  const currentOption = option ?? evidence.decision?.options[0];
  const title = currentOption?.model ?? evidence.title;
  const image = hideImage ? undefined : getApprovedProductImage(product.slug, product.image);

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-surface/72">
      {image ? <div className="relative aspect-[4/3] bg-rose/8">
        <Image src={image.image} alt={image.alt} fill sizes="(max-width: 768px) 92vw, 470px" className="object-contain" />
      </div> : null}
      <div className="p-5 sm:p-6">
        <h2 className="[overflow-wrap:anywhere] font-display text-2xl font-bold leading-tight">{currentOption ? `Passar ${title} dig?` : `Vad vet vi om ${title}?`}</h2>
        {!hideImage ? <DecisionProductImage productSlug={product.slug} model={title} /> : null}
        {currentOption ? <dl className="mt-4 space-y-3 leading-relaxed">
          <div><dt className="font-bold">Välj om …</dt><dd>{currentOption.chooseIf}</dd></div>
          <div><dt className="font-bold">Avstå om …</dt><dd>{currentOption.avoidIf}</dd></div>
        </dl> : <p className="mt-4 leading-relaxed text-ink-soft">{evidence.summary}</p>}
        <Link href={href} className="mt-5 inline-flex min-h-11 items-center font-bold text-wine underline underline-offset-4">{currentOption ? "Läs modellens underlag och begränsningar" : "Se vad som återstår att kontrollera"}</Link>
      </div>
    </article>
  );
}
