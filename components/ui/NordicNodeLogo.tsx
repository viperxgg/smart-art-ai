interface NordicNodeLogoProps {
  className?: string;
}

export function NordicNodeLogo({ className = "" }: NordicNodeLogoProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.055] shadow-sm shadow-black/20 backdrop-blur-xl ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(142,230,199,0.22),transparent_42%),linear-gradient(135deg,rgba(15,76,58,0.5),rgba(15,76,58,0.08))]" />
      <svg
        viewBox="0 0 64 64"
        className="relative h-[62%] w-[62%]"
        role="img"
      >
        <defs>
          <linearGradient id="nordic-node-gradient" x1="8" y1="8" x2="56" y2="56">
            <stop offset="0%" stopColor="#B9F7DF" />
            <stop offset="42%" stopColor="#2A8C6D" />
            <stop offset="100%" stopColor="#0F4C3A" />
          </linearGradient>
        </defs>
        <path
          d="M32 9v46M12 20l40 24M52 20 12 44M20 12l24 40M44 12 20 52"
          fill="none"
          stroke="url(#nordic-node-gradient)"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          d="M32 15 47 24v16L32 49 17 40V24l15-9Z"
          fill="none"
          stroke="url(#nordic-node-gradient)"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <circle cx="32" cy="32" r="6" fill="#0F4C3A" stroke="#B9F7DF" strokeWidth="2.5" />
        <circle cx="32" cy="15" r="3.7" fill="#B9F7DF" />
        <circle cx="47" cy="24" r="3.7" fill="#72D8B4" />
        <circle cx="47" cy="40" r="3.7" fill="#2A8C6D" />
        <circle cx="32" cy="49" r="3.7" fill="#72D8B4" />
        <circle cx="17" cy="40" r="3.7" fill="#2A8C6D" />
        <circle cx="17" cy="24" r="3.7" fill="#72D8B4" />
      </svg>
    </div>
  );
}
