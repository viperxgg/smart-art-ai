import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface DemoPreviewPanelProps {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  className?: string;
  imageClassName?: string;
}

export function DemoPreviewPanel({
  src,
  alt,
  eyebrow,
  title,
  className = "",
  imageClassName = "",
}: DemoPreviewPanelProps) {
  return (
    <div
      className={twMerge(
        "sai-card overflow-hidden",
        className,
      )}
    >
      {eyebrow || title ? (
        <div className="border-b border-[var(--border-soft)] px-5 py-4">
          {eyebrow ? (
            <p className="sai-eyebrow text-[var(--text-muted)]">{eyebrow}</p>
          ) : null}
          {title ? <p className="mt-2 text-sm font-semibold text-[var(--text-muted)]">{title}</p> : null}
        </div>
      ) : null}
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1100}
          sizes="(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 100vw"
          className={twMerge("h-auto w-full object-cover", imageClassName)}
        />
      </div>
    </div>
  );
}
