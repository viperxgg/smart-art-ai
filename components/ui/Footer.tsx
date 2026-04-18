"use client";

import { useLocale } from "next-intl";
import { Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  const locale = useLocale();

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-white/40 text-[11px] font-mono tracking-widest uppercase mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Legal Architecture
          </div>
          <p className="text-white/60 text-sm font-medium tracking-tight">
            © {new Date().getFullYear()} <span className="text-white font-bold">smartartai.se</span> - All intellectual property rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="text-white/40 text-[11px] font-mono tracking-widest uppercase mb-2">
            Connect
          </div>
          <a 
            href="mailto:hello@smartartai.se"
            className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all group"
          >
            <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold font-mono">hello@smartartai.se</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
