"use client";

import { motion } from "motion/react";
import { createContext, ReactNode, useContext } from "react";

/* ---------- Accent context : propagates chapter color to all children ---------- */

type Accent = "blood" | "kc-blue-bright" | "bone" | "fnatic" | "navi";

const AccentContext = createContext<Accent>("blood");
export const useAccent = () => useContext(AccentContext);

export const ACCENT_TOKEN: Record<Accent, { text: string; bg: string; varCss: string }> = {
  blood: { text: "text-blood", bg: "bg-blood", varCss: "var(--color-blood)" },
  "kc-blue-bright": {
    text: "text-[var(--color-kc-blue-bright)]",
    bg: "bg-[var(--color-kc-blue-bright)]",
    varCss: "var(--color-kc-blue-bright)",
  },
  bone: { text: "text-bone", bg: "bg-bone", varCss: "var(--color-bone)" },
  fnatic: {
    text: "text-fnatic-orange",
    bg: "bg-fnatic-orange",
    varCss: "var(--color-fnatic-orange)",
  },
  navi: {
    text: "text-navi-yellow",
    bg: "bg-navi-yellow",
    varCss: "var(--color-navi-yellow)",
  },
};

/** Chapter wrapper — handles section ID + intersection-aware fade-in. */
export function ChapterSection({
  id,
  kicker,
  number,
  title,
  subtitle,
  accent = "blood",
  children,
  className = "",
}: {
  id: string;
  kicker: string;
  number: string;
  title: ReactNode;
  subtitle?: ReactNode;
  accent?: Accent;
  children: ReactNode;
  className?: string;
}) {
  const t = ACCENT_TOKEN[accent];

  return (
    <AccentContext.Provider value={accent}>
      <section
        id={id}
        data-chapter={id}
        className={`relative scroll-mt-24 py-24 md:py-32 overflow-hidden ${className}`}
      >
        {/* Subtle accent glow tying the background to the chapter's narrative color */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[min(900px,90vw)] h-[420px] opacity-[0.07]"
          style={{
            background: `radial-gradient(ellipse at center, ${t.varCss} 0%, transparent 70%)`,
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-12 md:mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className={`font-display ${t.text} text-sm tracking-widest`}>
                {number}
              </span>
              <span
                className="h-px w-16 opacity-50"
                style={{ background: t.varCss }}
              />
              <span className="font-ui text-fog text-[0.7rem] uppercase tracking-[0.3em]">
                {kicker}
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] tracking-tight text-bone">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-6 text-lg md:text-xl text-fog leading-snug max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>
          {children}
        </div>
      </section>
    </AccentContext.Provider>
  );
}

/** Reading-optimized prose wrapper. */
export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`prose-reading ${className}`}>{children}</div>;
}

/** Sub-section heading inside a chapter.
 *  - no prop          → bone (neutral)
 *  - accent="auto"    → uses chapter accent from context
 *  - accent="blood"   → blood (etc.)
 */
export function H3({
  children,
  accent,
}: {
  children: ReactNode;
  accent?: Accent | "auto";
}) {
  const ctxAccent = useAccent();
  const finalAccent = accent === "auto" ? ctxAccent : accent;
  const color = finalAccent ? ACCENT_TOKEN[finalAccent].text : "text-bone";
  return (
    <motion.h3
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`font-display mt-16 mb-6 text-2xl md:text-3xl tracking-tight leading-tight ${color}`}
    >
      {children}
    </motion.h3>
  );
}

/** Smaller H4 for sub-sub-sections. */
export function H4({ children }: { children: ReactNode }) {
  return (
    <h4 className="font-display mt-10 mb-3 text-lg md:text-xl text-bone tracking-tight">
      {children}
    </h4>
  );
}

/** Lead paragraph — bigger, fog colored. Use on first paragraph of intro. */
export function Lead({ children }: { children: ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="font-display text-xl md:text-2xl leading-[1.4] text-bone tracking-tight mb-10"
    >
      {children}
    </motion.p>
  );
}

/** Drop cap on first paragraph of a chapter. Pass the first letter separately.
 *  Inherits chapter accent.
 */
export function DropCap({
  letter,
  children,
}: {
  letter: string;
  children: ReactNode;
}) {
  const accent = useAccent();
  return (
    <p className="relative">
      <span
        className={`font-display float-left mr-3 text-[5.5rem] leading-[0.85] ${ACCENT_TOKEN[accent].text}`}
        style={{ marginTop: "0.1em", marginBottom: "-0.1em" }}
      >
        {letter}
      </span>
      {children}
    </p>
  );
}

/** Big pull quote that breaks visually out of the column. Inherits accent from context. */
export function PullQuote({
  children,
  author,
  accent,
}: {
  children: ReactNode;
  author?: string;
  accent?: Accent;
}) {
  const ctxAccent = useAccent();
  const finalAccent = accent ?? ctxAccent;
  const accentColor = ACCENT_TOKEN[finalAccent].varCss;

  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="my-16 md:my-24 md:-mx-12 relative isolate overflow-visible"
    >
      {/* Giant ghost quote mark behind everything — true watermark */}
      <span
        aria-hidden
        className="absolute top-0 left-0 -translate-y-6 md:-translate-y-10 -translate-x-2 md:-translate-x-6 font-display select-none leading-[0.7] pointer-events-none -z-10"
        style={{
          color: accentColor,
          opacity: 0.08,
          fontSize: "clamp(10rem, 22vw, 20rem)",
          filter: "blur(0.5px)",
        }}
      >
        “
      </span>

      {/* Left vertical accent rail */}
      <div className="grid grid-cols-[3px_1fr] md:grid-cols-[4px_1fr] gap-5 md:gap-8">
        <span
          aria-hidden
          className="block self-stretch"
          style={{
            background: `linear-gradient(to bottom, ${accentColor} 0%, ${accentColor} 70%, transparent 100%)`,
          }}
        />
        <div>
          <blockquote className="relative font-display text-2xl md:text-3xl lg:text-[2.5rem] leading-[1.18] tracking-tight text-bone">
            {children}
          </blockquote>
          {author && (
            <figcaption className="mt-6 md:mt-8 flex items-center gap-3 font-ui text-[0.7rem] uppercase tracking-[0.3em] text-fog">
              <span
                aria-hidden
                className="h-px w-10"
                style={{ background: accentColor }}
              />
              {author}
            </figcaption>
          )}
        </div>
      </div>
    </motion.figure>
  );
}

/** Highlighted aside : "Particulièrement utile pour ..." */
/** Audience-targeting note : "Particulièrement utile pour : Curieux · Designer · Dirigeant".
 *  Pass the audiences that apply. Markers + colors match the intro AudienceTags.
 */
const AUDIENCE_META: Record<
  "curieux" | "designer" | "dirigeant",
  { icon: string; label: string; color: string }
> = {
  curieux: { icon: "◆", label: "Curieux", color: "var(--color-blood)" },
  designer: { icon: "◇", label: "Designer", color: "var(--color-blood)" },
  dirigeant: { icon: "▣", label: "Dirigeant", color: "var(--color-blood)" },
};

export function AsideNote({
  label = "Particulièrement utile pour",
  audiences,
}: {
  label?: string;
  audiences: Array<"curieux" | "designer" | "dirigeant">;
}) {
  return (
    <div className="my-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-l-2 border-bone/15 pl-4 py-1">
      <span className="font-ui text-[0.6rem] uppercase tracking-[0.3em] text-fog">
        {label}
      </span>
      <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
        {audiences.map((a) => {
          const m = AUDIENCE_META[a];
          return (
            <span key={a} className="flex items-center gap-1.5">
              <span style={{ color: m.color }} className="text-xs leading-none">
                {m.icon}
              </span>
              <span className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-bone/85">
                {m.label}
              </span>
            </span>
          );
        })}
      </span>
    </div>
  );
}

/** Numbered method block — for the "Ta méthode en X étapes" pattern.
 *  Inherits chapter accent.
 */
export function MethodList({
  title = "Ta méthode",
  steps,
  accent,
}: {
  title?: string;
  steps: { title: string; body: string }[];
  accent?: Accent;
}) {
  const ctxAccent = useAccent();
  const finalAccent = accent ?? ctxAccent;
  const token = ACCENT_TOKEN[finalAccent];
  const ringColor =
    finalAccent === "blood"
      ? "border-blood/30"
      : finalAccent === "kc-blue-bright"
      ? "border-[var(--color-kc-blue-bright)]/30"
      : finalAccent === "fnatic"
      ? "border-fnatic-orange/30"
      : finalAccent === "navi"
      ? "border-navi-yellow/30"
      : "border-bone/20";
  const numColor = token.text;
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className={`my-14 border ${ringColor} bg-ink-2/50 p-6 md:p-8`}
    >
      <div className="font-ui text-[0.7rem] uppercase tracking-[0.3em] text-fog mb-6">
        {title}
      </div>
      <ol className="space-y-5">
        {steps.map((s, i) => (
          <li key={i} className="grid grid-cols-[2rem_1fr] gap-4 items-baseline">
            <span className={`font-display ${numColor} text-sm`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="font-display text-bone text-base md:text-lg leading-tight mb-1">
                {s.title}
              </div>
              <p className="font-body text-sm text-fog leading-relaxed">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </motion.aside>
  );
}

/** Warning / piège block. */
export function WarningBlock({
  label = "Piège à éviter",
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="my-12 border border-blood/40 bg-blood/5 p-6 md:p-8"
    >
      <div className="font-display text-blood text-[0.7rem] tracking-[0.3em] mb-3">
        ⚠ {label.toUpperCase()}
      </div>
      <div className="prose-reading">{children}</div>
    </motion.aside>
  );
}

/** Soft "leçon hors-JV" aside, italic, off to the side. */
export function HorsJV({ children }: { children: ReactNode }) {
  return (
    <motion.aside
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-12 border-t border-bone/10 pt-6"
    >
      <div className="font-ui text-[0.7rem] uppercase tracking-[0.3em] text-fog mb-2">
        Leçon hors-JV
      </div>
      <p className="font-body italic text-bone/80 leading-relaxed text-base md:text-lg">
        {children}
      </p>
    </motion.aside>
  );
}
