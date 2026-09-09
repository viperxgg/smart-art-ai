import Image from "next/image";
import { getApprovedDecisionImage } from "@/lib/product-image-approvals";

export function DecisionProductImage({ productSlug, model }: { productSlug: string; model: string }) {
  const asset = getApprovedDecisionImage(productSlug, model);
  if (!asset?.attribution) return null;
  const credit = asset.attribution;
  return (
    <figure className="mt-4" data-licensed-product-image>
      <Image src={asset.image} alt={asset.alt} width={500} height={500} sizes="(max-width: 768px) 100vw, 420px" className="h-48 w-full rounded-lg object-contain" />
      <figcaption className="mt-2 text-xs leading-relaxed text-ink-soft">
        Foto: <a href={credit.originalPost} className="underline">{credit.creator}</a>{" · "}
        <a href={asset.source} className="underline">{credit.title}</a>{" · "}
        <a href={credit.licenseUrl} className="underline">{credit.license}</a>.
        <span className="mt-1 block">{credit.note}</span>
      </figcaption>
    </figure>
  );
}
