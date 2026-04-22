"use client";

import React, { useState } from "react";
import { Monitor, ScanLine, Smartphone } from "lucide-react";
import ContactFormModal from "@/components/ui/ContactFormModal";

interface BlogBodyProps {
  content: string;
  locale: string;
}

export default function BlogBody({ content, locale }: BlogBodyProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isSwedish = locale === "sv";

  // Split content by special blocks
  const sections = content.split('\n\n');

  return (
    <>
      <div className="space-y-10">
        {sections.map((section, i) => {
          const trimmed = section.trim();
          if (!trimmed) return null;

          // 1. Render Images
          if (trimmed.startsWith('![')) {
            const match = trimmed.match(/!\[(.*?)\]\((.*?)\)/);
            if (match) {
              return (
                <div key={i} className="my-12 relative group">
                  <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={match[2]} 
                    alt={match[1]} 
                    className="relative w-full rounded-2xl border border-white/10 shadow-2xl"
                  />
                  {match[1] && (
                    <p className="mt-4 text-center text-white/30 text-[10px] uppercase font-mono tracking-widest italic">{match[1]}</p>
                  )}
                </div>
              );
            }
          }

          // 2. Render Headers
          if (trimmed.startsWith('## ')) {
            return (
              <h2 key={i} className="text-2xl md:text-4xl font-black text-white italic tracking-tighter pt-12 border-t border-white/5">
                {trimmed.replace('## ', '')}
              </h2>
            );
          }

          // 3. Render Demo Button (The target of the bug fix)
          // Look for "Boka din demo idag" or similar patterns
          if (trimmed.includes('Boka din demo') || trimmed.includes('Book your demo')) {
            return (
              <div key={i} className="py-8 flex justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-12 py-5 rounded-2xl bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10">
                    {locale === 'sv' ? 'Boka din demo idag' : 'Book your demo today'}
                  </span>
                </button>
              </div>
            );
          }

          // 4. Render Live Demo Blocks
          if (trimmed.includes('[LIVE_DEMO]')) {
             const guestUrl = `https://smartartai.se/${isSwedish ? "sv" : "en"}/demo/menu/nordic-bistro?table=12`;
             const staffUrl = `https://smartartai.se/${isSwedish ? "sv" : "en"}/demo/admin`;
             const kitchenUrl = `https://smartartai.se/${isSwedish ? "sv" : "en"}/demo/kitchen`;
             const guestQr = `/qr/${isSwedish ? "menu-sv" : "menu-en"}.png`;
             const staffQr = `/qr/${isSwedish ? "admin-sv" : "admin-en"}.png`;
             const kitchenQr = `/qr/${isSwedish ? "kitchen-sv" : "kitchen-en"}.png`;

             return (
               <div key={i} className="py-20 space-y-12">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {/* Guest Card */}
                   <div className="relative group p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col items-center text-center">
                     <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-white/10 text-cyan-400">
                       <Smartphone className="w-7 h-7" />
                     </div>
                     <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tighter italic">
                       {locale === 'sv' ? 'Gästens Meny' : 'Guest Menu'}
                     </h4>
                     <div className="relative p-5 rounded-2xl bg-white flex items-center justify-center mb-8">
                         <img src={guestQr} className="w-28 h-28" alt="Guest menu QR code" />
                     </div>
                     <a href={guestUrl} target="_blank" rel="noreferrer" className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                       {locale === 'sv' ? 'Öppna meny' : 'Open Menu'}
                     </a>
                   </div>

                   {/* Admin Card */}
                   <div className="relative group p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all flex flex-col items-center text-center">
                     <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 border border-white/10 text-purple-400">
                       <Monitor className="w-7 h-7" />
                     </div>
                     <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tighter italic">
                       {locale === 'sv' ? 'Administration' : 'Admin Panel'}
                     </h4>
                     <div className="relative p-5 rounded-2xl bg-white flex items-center justify-center mb-8">
                         <img src={staffQr} className="w-28 h-28" alt="Admin demo QR code" />
                     </div>
                     <a href={staffUrl} target="_blank" rel="noreferrer" className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all">
                       {locale === 'sv' ? 'Öppna Admin' : 'Open Admin'}
                     </a>
                   </div>

                   {/* Kitchen Card */}
                   <div className="relative group p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-amber-500/30 transition-all flex flex-col items-center text-center">
                     <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-white/10 text-amber-500">
                       <ScanLine className="w-7 h-7" />
                     </div>
                     <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tighter italic">
                       {locale === 'sv' ? 'Kökssystem (KDS)' : 'Kitchen (KDS)'}
                     </h4>
                     <div className="relative p-5 rounded-2xl bg-white flex items-center justify-center mb-8">
                         <img src={kitchenQr} className="w-28 h-28" alt="Kitchen demo QR code" />
                     </div>
                     <a href={kitchenUrl} target="_blank" rel="noreferrer" className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all">
                       {locale === 'sv' ? 'Öppna KDS' : 'Open KDS'}
                     </a>
                   </div>
                 </div>
               </div>
             );
          }

          // 5. Default Paragraph
          return <p key={i} className="text-white/70 font-mono tracking-tight leading-loose antialiased">{trimmed}</p>;
        })}
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceType="Blog Demo Request" />
    </>
  );
}
