import Link from "next/link";
import links from "@/lib/wave2-related-links.json";

/** Contextual link additions leave the existing decision prose intact. */
export function Wave2RelatedLinks({ path }: { path: string }) {
  const related = (links as Record<string, string[][]>)[path];
  if (!related?.length) return null;
  return <nav aria-label="Fler frågor i din rutin" className="mt-8 flex flex-wrap gap-x-5 gap-y-2">{related.map(([label, href]) => <Link key={href} href={href} className="inline-flex min-h-11 items-center text-sm font-semibold text-wine underline underline-offset-4">{label}</Link>)}</nav>;
}
