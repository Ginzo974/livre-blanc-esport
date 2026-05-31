import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Shared layout for the annex document pages (note de présentation, note de
 * stratégie inbound). Simple top bar + centered document column, same design
 * tokens as the main long-read.
 */
export function AnnexShell({
  kicker,
  title,
  intro,
  children,
}: {
  kicker: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main className="relative min-h-screen bg-ink text-bone">
      {/* Top bar */}
      <nav className="sticky top-0 z-50 border-b border-bone/10 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-display text-sm tracking-widest text-bone hover:text-blood transition-colors"
          >
            DU&nbsp;LOGO&nbsp;À&nbsp;LA&nbsp;SCÈNE
          </Link>
          <div className="flex items-center gap-5 font-ui text-[0.65rem] uppercase tracking-[0.25em]">
            <Link href="/" className="text-fog hover:text-bone transition-colors">
              Le livre
            </Link>
            <Link
              href="/note-presentation"
              className="text-fog hover:text-bone transition-colors"
            >
              Présentation
            </Link>
            <Link
              href="/note-strategie"
              className="text-fog hover:text-bone transition-colors"
            >
              Stratégie
            </Link>
          </div>
        </div>
      </nav>

      {/* Ambient red halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[min(800px,90vw)] h-72 opacity-[0.08]"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-blood) 0%, transparent 70%)",
        }}
      />

      <article className="relative mx-auto max-w-3xl px-6 md:px-8 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-display text-blood text-sm tracking-widest">
            ✦
          </span>
          <span className="h-px w-16 bg-blood/50" />
          <span className="font-ui text-fog text-[0.7rem] uppercase tracking-[0.3em]">
            {kicker}
          </span>
        </div>

        <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] tracking-tight text-bone mb-6">
          {title}
        </h1>

        {intro && (
          <p className="font-display text-lg md:text-xl text-fog leading-snug max-w-2xl mb-12">
            {intro}
          </p>
        )}

        <div className="prose-reading">{children}</div>

        <footer className="mt-20 pt-8 border-t border-bone/10 flex flex-col sm:flex-row justify-between gap-3 font-ui text-[0.7rem] uppercase tracking-[0.25em] text-fog">
          <span>Quentin Louis · ESD Bordeaux · 2026</span>
          <Link href="/" className="text-bone hover:text-blood transition-colors">
            ← Retour au livre blanc
          </Link>
        </footer>
      </article>
    </main>
  );
}

/** Labelled field block used inside the annex documents. */
export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-8 border-l-2 border-blood/40 pl-5">
      <div className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-blood mb-2">
        {label}
      </div>
      <div className="text-bone/85 leading-relaxed">{children}</div>
    </div>
  );
}
