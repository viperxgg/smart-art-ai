"use client";

import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { useId, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, FileUp, ImagePlus, Loader2, Mail, Paperclip, Send, User, X } from "lucide-react";

type MenuUploadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  sourcePage?: string;
};

const MAX_FILES = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_TOTAL_SIZE = 20 * 1024 * 1024;
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png", "image/webp"];

function formatBytes(value: number) {
  if (value < 1024 * 1024) {
    return `${Math.max(1, Math.round(value / 1024))} KB`;
  }

  return `${(value / 1024 / 1024).toFixed(1)} MB`;
}

function validateFiles(files: File[]) {
  if (!files.length) {
    return "Lägg till minst en PDF eller bild.";
  }

  if (files.length > MAX_FILES) {
    return `Du kan skicka högst ${MAX_FILES} filer åt gången.`;
  }

  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  if (totalSize > MAX_TOTAL_SIZE) {
    return "Filerna är för stora tillsammans. Skicka max 20 MB åt gången.";
  }

  if (files.some((file) => !ALLOWED_TYPES.includes(file.type) || file.size > MAX_FILE_SIZE)) {
    return "Endast PDF, JPG, PNG eller WebP upp till 10 MB per fil.";
  }

  return null;
}

export default function MenuUploadModal({ isOpen, onClose, sourcePage = "/" }: MenuUploadModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    restaurant: "",
    message: "",
  });
  const totalSize = useMemo(() => files.reduce((sum, file) => sum + file.size, 0), [files]);

  function handleFilesChange(event: ChangeEvent<HTMLInputElement>) {
    const nextFiles = Array.from(event.target.files || []);
    setFiles(nextFiles);
    setError(validateFiles(nextFiles));
  }

  function closeModal() {
    if (!loading) {
      onClose();
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fileError = validateFiles(files);

    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Fyll i namn och e-postadress.");
      return;
    }

    if (fileError) {
      setError(fileError);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const payload = new FormData();
      payload.append("name", formData.name.trim());
      payload.append("email", formData.email.trim());
      payload.append("restaurant", formData.restaurant.trim());
      payload.append("message", formData.message.trim());
      payload.append("sourcePage", sourcePage);
      files.forEach((file) => payload.append("files", file));

      const response = await fetch("/api/menu-upload", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFiles([]);
        setFormData({ name: "", email: "", restaurant: "", message: "" });
        onClose();
      }, 2400);
    } catch {
      setError("Något gick fel. Försök igen eller maila info@smartartai.se direkt.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.button
            type="button"
            aria-label="Stäng filuppladdning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[rgba(22,15,11,0.72)] backdrop-blur-xl"
            onClick={closeModal}
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-[var(--restaurant-border)] bg-[var(--restaurant-surface)] text-[var(--restaurant-text)] shadow-[0_34px_110px_rgba(60,32,18,0.28)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--restaurant-tomato)] via-[var(--restaurant-saffron)] to-[var(--restaurant-basil)]" />
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="restaurant-eyebrow">Nord Smart Menu</p>
                  <h3 id={titleId} className="mt-3 text-3xl font-black tracking-normal text-[var(--restaurant-text)]">
                    Skicka din nuvarande meny
                  </h3>
                  <p id={descriptionId} className="mt-4 max-w-xl leading-7 text-[var(--restaurant-muted)]">
                    Bifoga din PDF-meny eller tydliga bilder så återkommer vi med ett konkret menyförslag.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--restaurant-border)] bg-[var(--restaurant-surface-warm)] text-[var(--restaurant-muted)] transition hover:text-[var(--restaurant-tomato)]"
                  aria-label="Stäng filuppladdning"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {success ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center py-14 text-center"
                >
                  <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(217,79,48,0.22)] bg-[#fff0e6] text-[var(--restaurant-tomato)]">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h4 className="text-2xl font-black tracking-normal text-[var(--restaurant-text)]">Tack, filerna är skickade</h4>
                  <p className="mt-3 max-w-sm leading-7 text-[var(--restaurant-muted)]">
                    Vi går igenom din meny och återkommer vanligtvis via e-post inom 24 timmar.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="rounded-2xl border border-[rgba(217,79,48,0.22)] bg-[#fff0e6] px-4 py-3 text-sm font-bold leading-6 text-[var(--restaurant-wine)]">
                    Vänlig påminnelse: kontrollera att bilderna är skarpa, ljusa och läsbara för att minska risken för fel.
                  </div>

                  <div className="grid items-start gap-x-5 gap-y-4 sm:grid-cols-2">
                    <UploadField label="Namn" icon={<User className="h-4 w-4" />}>
                      <input
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                        className="h-14 w-full rounded-xl border border-[var(--restaurant-border)] bg-white py-0 pl-12 pr-4 text-[var(--restaurant-text)] outline-none transition focus:border-[rgba(217,79,48,0.45)] focus:bg-[#fff8ef]"
                      />
                    </UploadField>

                    <UploadField label="E-postadress" hint="Viktigast" icon={<Mail className="h-4 w-4" />}>
                      <input
                        required
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                        className="h-14 w-full rounded-xl border border-[var(--restaurant-border)] bg-white py-0 pl-12 pr-4 text-[var(--restaurant-text)] outline-none transition focus:border-[rgba(217,79,48,0.45)] focus:bg-[#fff8ef]"
                      />
                    </UploadField>
                  </div>

                  <UploadField label="Restaurang / företag (frivilligt)" icon={<ImagePlus className="h-4 w-4" />}>
                    <input
                      autoComplete="organization"
                      value={formData.restaurant}
                      onChange={(event) => setFormData((current) => ({ ...current, restaurant: event.target.value }))}
                      className="h-14 w-full rounded-xl border border-[var(--restaurant-border)] bg-white py-0 pl-12 pr-4 text-[var(--restaurant-text)] outline-none transition focus:border-[rgba(217,79,48,0.45)] focus:bg-[#fff8ef]"
                    />
                  </UploadField>

                  <label className="grid gap-2">
                    <span className="text-[10px] font-black uppercase leading-4 tracking-[0.2em] text-[var(--restaurant-muted)]">
                      PDF eller bilder
                    </span>
                    <div className="relative rounded-2xl border border-dashed border-[rgba(217,79,48,0.34)] bg-white p-5 transition hover:bg-[#fff8ef]">
                      <input
                        required
                        multiple
                        type="file"
                        accept=".pdf,image/jpeg,image/png,image/webp"
                        onChange={handleFilesChange}
                        className="absolute inset-0 cursor-pointer opacity-0"
                      />
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0e6] text-[var(--restaurant-tomato)]">
                          <FileUp className="h-6 w-6" />
                        </div>
                        <p className="mt-3 font-black">Välj PDF eller bilder</p>
                        <p className="mt-1 text-sm leading-6 text-[var(--restaurant-muted)]">
                          PDF, JPG, PNG eller WebP. Max 5 filer, 10 MB per fil.
                        </p>
                      </div>
                    </div>
                  </label>

                  {files.length ? (
                    <div className="rounded-2xl border border-[var(--restaurant-border)] bg-white p-4">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm font-black">Valda filer</p>
                        <p className="text-xs font-bold text-[var(--restaurant-muted)]">{formatBytes(totalSize)}</p>
                      </div>
                      <div className="mt-3 grid gap-2">
                        {files.map((file) => (
                          <div key={`${file.name}-${file.size}`} className="flex items-center gap-3 rounded-xl bg-[var(--restaurant-surface-warm)] px-3 py-2 text-sm font-bold">
                            <Paperclip className="h-4 w-4 text-[var(--restaurant-tomato)]" />
                            <span className="min-w-0 flex-1 truncate">{file.name}</span>
                            <span className="shrink-0 text-xs text-[var(--restaurant-muted)]">{formatBytes(file.size)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <label className="grid gap-2">
                    <span className="text-[10px] font-black uppercase leading-4 tracking-[0.2em] text-[var(--restaurant-muted)]">
                      Meddelande (frivilligt)
                    </span>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                      className="w-full resize-none rounded-xl border border-[var(--restaurant-border)] bg-white px-4 py-3 text-[var(--restaurant-text)] outline-none transition focus:border-[rgba(217,79,48,0.45)] focus:bg-[#fff8ef]"
                      placeholder="Skriv gärna vad du vill förbättra med menyn."
                    />
                  </label>

                  {error ? <p className="text-sm font-bold text-[#b42318]">{error}</p> : null}

                  <button type="submit" disabled={loading} className="restaurant-button restaurant-button-primary w-full disabled:opacity-60">
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    <span>Skicka menyfiler</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

function UploadField({
  label,
  hint,
  icon,
  children,
}: {
  label: string;
  hint?: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <label className="grid min-w-0 gap-2">
      <div className="flex min-h-8 items-end justify-between gap-3">
        <span className="text-[10px] font-black uppercase leading-4 tracking-[0.2em] text-[var(--restaurant-muted)]">{label}</span>
        {hint ? <span className="shrink-0 text-[10px] font-black uppercase leading-4 tracking-[0.18em] text-[var(--restaurant-tomato)]">{hint}</span> : null}
      </div>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--restaurant-muted)]">{icon}</span>
        {children}
      </div>
    </label>
  );
}
