import { twMerge } from "tailwind-merge";

interface MarketingVideoFrameProps {
  src: string;
  title: string;
  className?: string;
  preload?: "none" | "metadata" | "auto";
}

export function MarketingVideoFrame({
  src,
  title,
  className = "",
  preload = "metadata",
}: MarketingVideoFrameProps) {
  return (
    <div
      className={twMerge(
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-[0_24px_90px_rgba(0,0,0,0.28)]",
        className,
      )}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload={preload}
        aria-label={title}
        className="h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
    </div>
  );
}
