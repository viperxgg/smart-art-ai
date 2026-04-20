"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle2, User, Building2, Mail, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: string;
}

export default function ContactFormModal({ isOpen, onClose, serviceType = "Digital Revolution Demo" }: ContactFormModalProps) {
  const t = useTranslations("Solutions");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Namn: formData.fullName,
          Epost: formData.email,
          Telefon: formData.phone || "Ej angivet",
          Organisation: formData.organization || "Ej angivet",
          Tjänst: serviceType,
          Subject: `New Demo Request: ${serviceType}`
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
        setFormData({ fullName: "", email: "", phone: "", organization: "" });
      }, 3000);
    } catch (err) {
      setError("Något gick fel. Försök igen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-bottom border-white/5 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Boka din demo</h3>
                <p className="text-white/40 text-xs font-mono mt-1 uppercase tracking-widest">Neural Inquiry System</p>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 pt-0">
              {success ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 flex flex-col items-center text-center gap-6"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Tack!</h4>
                    <p className="text-white/60">Vi har mottagit din förfrågan och återkommer inom kort.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Fullständigt namn *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                      <input
                        required
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-white/20 transition-all"
                        placeholder="Erik Andersson"
                      />
                    </div>
                  </div>

                  {/* Organization */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Företag / Organisation *</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                      <input
                        required
                        value={formData.organization}
                        onChange={e => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-white/20 transition-all"
                        placeholder="Restaurang AB"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">E-postadress *</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-white/20 transition-all"
                        placeholder="erik@exempel.se"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Telefonnummer (frivilligt)</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-white/20 transition-all"
                        placeholder="070-123 45 67"
                      />
                    </div>
                  </div>

                  {error && <p className="text-red-500 text-xs font-mono">{error}</p>}

                  <button
                    disabled={loading}
                    className="w-full py-5 rounded-[1.5rem] bg-white text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white/90 transition-all mt-4 disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Skicka förfrågan</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
