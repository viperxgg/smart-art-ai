import Link from "next/link";
import { ArrowUpRight, Monitor, ScanLine, Smartphone } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { DemoPreviewPanel } from "@/components/demo/DemoPreviewPanel";
import { demoInterfacePreviews } from "@/lib/demo-data";
import { type DemoKind, type DemoSectionContent } from "@/lib/demo";

interface DemoSectionProps extends DemoSectionContent {
  className?: string;
}

function DemoPlaceholder({ kind }: { kind: DemoKind }) {
  const preview = demoInterfacePreviews[kind];
  const title =
    kind === "customer"
      ? "Guest view"
      : kind === "admin"
        ? "Admin dashboard"
        : "Kitchen display";

  return (
    <DemoPreviewPanel
      src={preview.src}
      alt={preview.alt}
      eyebrow="Preview"
      title={title}
      className="bg-[var(--bg-card)]"
      imageClassName={kind === "customer" ? "max-h-[420px] object-contain bg-[var(--bg-main)]" : ""}
    />
  );
}

function getIcon(kind: DemoKind) {
  if (kind === "customer") {
    return Smartphone;
  }

  if (kind === "admin") {
    return Monitor;
  }

  return ScanLine;
}

export function DemoSection({
  type,
  eyebrow,
  title,
  description,
  demos,
  microcopy,
  className = "",
}: DemoSectionProps) {
  const isSingle = demos.length === 1;
  const sectionClassName = twMerge(
    "sai-panel p-8 md:p-10",
    className,
  );
  const gridClassName = isSingle
    ? "mt-10 grid gap-5"
    : demos.length === 2
      ? "mt-10 grid gap-5 md:grid-cols-2"
      : "mt-10 grid gap-5 xl:grid-cols-3";

  return (
    <div className={sectionClassName}>
      {eyebrow ? (
        <p className="sai-eyebrow">{eyebrow}</p>
      ) : null}
      <div className="mt-4 max-w-3xl">
        <h2 className="sai-title-lg">{title}</h2>
        <p className="sai-copy-lg mt-5">{description}</p>
      </div>

      {microcopy?.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {microcopy.map((item) => (
            <span
              key={item}
              className="sai-chip text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}

      <div className={gridClassName}>
        {demos.map((demo) => {
          const Icon = getIcon(demo.kind);
          const cardClassName = isSingle
            ? "sai-card p-6"
            : "sai-card p-6";

          return (
            <article key={`${demo.kind}-${demo.ctaLabel}`} className={cardClassName}>
              <div className={isSingle ? "grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center" : "space-y-6"}>
                <div>
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      {demo.label ? (
                        <p className="sai-eyebrow">
                          {demo.label}
                        </p>
                      ) : (
                        <p className="sai-eyebrow text-[var(--text-muted)]">
                          {type === "flow" ? "Demo" : "Live demo"}
                        </p>
                      )}
                    </div>
                    <div className="sai-icon">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white">{demo.title}</h3>
                  <p className="mt-4 leading-7 text-[var(--text-muted)]">{demo.description}</p>
                  {demo.href.startsWith("http") ? (
                    <a
                      href={demo.href}
                      target={demo.openInNewTab === false ? undefined : "_blank"}
                      rel={demo.openInNewTab === false ? undefined : "noreferrer"}
                      className="sai-button sai-button-primary mt-6"
                    >
                      <span>{demo.ctaLabel}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      href={demo.href}
                      className="sai-button sai-button-primary mt-6"
                    >
                      <span>{demo.ctaLabel}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
                <DemoPlaceholder kind={demo.kind} />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
