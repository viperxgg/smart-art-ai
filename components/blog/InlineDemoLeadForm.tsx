"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormValues = {
  namn: string;
  foretag: string;
  email: string;
  telefonnummer: string;
};

type FormErrors = Partial<Record<keyof FormValues | "submit", string>>;

const initialValues: FormValues = {
  namn: "",
  foretag: "",
  email: "",
  telefonnummer: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function InlineDemoLeadForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fieldConfig = useMemo(
    () => [
      {
        id: "namn",
        label: "Namn",
        placeholder: "Ditt namn",
        type: "text" as const,
        autoComplete: "name",
      },
      {
        id: "foretag",
        label: "Företag",
        placeholder: "Företagsnamn",
        type: "text" as const,
        autoComplete: "organization",
      },
      {
        id: "email",
        label: "E-post",
        placeholder: "din@email.se",
        type: "email" as const,
        autoComplete: "email",
      },
      {
        id: "telefonnummer",
        label: "Telefonnummer (valfritt)",
        placeholder: "07X-XXX XX XX",
        type: "tel" as const,
        autoComplete: "tel",
      },
    ],
    [],
  );

  const validate = (nextValues: FormValues) => {
    const nextErrors: FormErrors = {};

    if (!nextValues.namn.trim()) {
      nextErrors.namn = "Vänligen fyll i ditt namn.";
    }

    if (!nextValues.foretag.trim()) {
      nextErrors.foretag = "Vänligen fyll i företagsnamn.";
    }

    if (!nextValues.email.trim() || !emailPattern.test(nextValues.email.trim())) {
      nextErrors.email = "Vänligen ange en giltig e-postadress.";
    }

    return nextErrors;
  };

  const handleBlur = (field: keyof FormValues) => {
    const nextErrors = validate(values);
    setErrors((current) => ({
      ...current,
      [field]: nextErrors[field],
    }));
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => {
      const nextErrors = { ...current };
      delete nextErrors[field];
      delete nextErrors.submit;
      return nextErrors;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          namn: values.namn.trim(),
          foretag: values.foretag.trim(),
          email: values.email.trim(),
          telefonnummer: values.telefonnummer.trim(),
          source: "/blog/scandinavian-digital-menu",
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setIsSuccess(true);
      setValues(initialValues);
    } catch (error) {
      setErrors({
        submit: "Något gick fel. Försök igen om en stund.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="glass-panel rounded-[2rem] border border-cyan-400/20 px-6 py-8 text-center shadow-[0_0_30px_rgba(34,211,238,0.08)] md:px-8">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <p className="text-lg font-semibold text-white">
          Tack för din förfrågan! Vi återkommer till dig så snart som möjligt.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          Tack för att du kontaktade Smart Art AI.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-panel rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_30px_rgba(255,255,255,0.02)] md:p-8">
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {fieldConfig.map((field) => {
            const error = errors[field.id as keyof FormValues];
            const isWide = field.id === "email" || field.id === "telefonnummer";

            return (
              <div
                key={field.id}
                className={isWide ? "md:col-span-2" : undefined}
              >
                <label
                  htmlFor={field.id}
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  value={values[field.id as keyof FormValues]}
                  onChange={(event) =>
                    handleChange(field.id as keyof FormValues, event.target.value)
                  }
                  onBlur={() => handleBlur(field.id as keyof FormValues)}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? `${field.id}-error` : undefined}
                  className={`w-full rounded-2xl border bg-[#0b0b0b] px-4 py-3.5 text-base text-white outline-none transition-all placeholder:text-white/25 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/15 ${
                    error ? "border-red-400/70" : "border-white/10"
                  }`}
                />
                {error ? (
                  <p
                    id={`${field.id}-error`}
                    className="mt-2 text-sm text-red-300"
                  >
                    {error}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        {errors.submit ? (
          <p className="text-sm text-red-300">{errors.submit}</p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full border border-cyan-400/30 bg-cyan-400 px-6 py-4 text-sm font-black tracking-[0.18em] text-black uppercase transition-all hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
        >
          <span className="flex items-center justify-center gap-2">
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {isSubmitting ? "Skickar..." : "Skicka förfrågan"}
          </span>
        </button>
      </form>
    </div>
  );
}
