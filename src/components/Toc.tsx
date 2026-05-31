"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export const TOC_ITEMS = [
  { id: "top", num: "", label: "Ouverture" },
  { id: "intro", num: "00", label: "Introduction" },
  { id: "chap-1", num: "01", label: "L'esport, un sport à part" },
  { id: "chap-2", num: "02", label: "Le logo" },
  { id: "chap-3", num: "03", label: "La couleur" },
  { id: "chap-4", num: "04", label: "Le système 360" },
  { id: "chap-5", num: "05", label: "La méthode" },
  { id: "chap-6", num: "06", label: "HUNTERS" },
  { id: "conclusion", num: "✦", label: "Conclusion" },
];

export function Toc() {
  const [active, setActive] = useState<string>("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = TOC_ITEMS.map((it) => document.getElementById(it.id)).filter(
      Boolean
    ) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Auto-close drawer on hash navigation
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <>
      <ProgressBar />

      {/* Desktop : sticky left sidebar */}
      <aside
        aria-label="Sommaire"
        className="hidden xl:block fixed left-6 top-1/2 -translate-y-1/2 z-40 max-w-[200px]"
      >
        <DesktopTocList active={active} />
      </aside>

      {/* Mobile/tablet : floating button + bottom drawer */}
      <button
        type="button"
        aria-label="Ouvrir le sommaire"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="xl:hidden fixed bottom-5 right-5 z-40 group flex items-center gap-2 bg-ink-2/90 backdrop-blur-md border border-blood/40 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:bg-blood transition-colors"
      >
        <span className="flex flex-col gap-[3px]">
          <span className="block h-px w-4 bg-bone" />
          <span className="block h-px w-4 bg-bone" />
          <span className="block h-px w-4 bg-bone" />
        </span>
        <span className="font-display text-bone text-[0.7rem] tracking-widest">
          {(() => {
            const it = TOC_ITEMS.find((i) => i.id === active) ?? TOC_ITEMS[0];
            return `${it.num ? it.num + " · " : ""}${it.label.toUpperCase()}`;
          })()}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              key="backdrop"
              type="button"
              aria-label="Fermer le sommaire"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm"
            />
            <motion.div
              key="drawer"
              role="dialog"
              aria-label="Sommaire"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-ink-2 border-t border-blood/30 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-bone/10 sticky top-0 bg-ink-2 z-10">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-blood" />
                  <span className="font-ui text-[0.7rem] uppercase tracking-[0.3em] text-fog">
                    Sommaire
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fermer"
                  className="text-fog hover:text-bone transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 4L16 16M16 4L4 16" />
                  </svg>
                </button>
              </div>
              <ol className="py-3">
                {TOC_ITEMS.map((it) => {
                  const isActive = active === it.id;
                  return (
                    <li key={it.id}>
                      <a
                        href={`#${it.id}`}
                        onClick={() => setOpen(false)}
                        className={`flex items-baseline gap-4 px-6 py-4 border-l-2 transition-colors ${
                          isActive
                            ? "border-blood bg-blood/5 text-bone"
                            : "border-transparent text-fog hover:text-bone hover:border-bone/20"
                        }`}
                      >
                        <span
                          className={`font-display text-xs tracking-widest ${
                            isActive ? "text-blood" : "text-fog/70"
                          }`}
                        >
                          {it.num}
                        </span>
                        <span className="font-display text-base leading-tight">
                          {it.label}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ol>
              <div className="px-6 py-4 border-t border-bone/5 text-[0.65rem] uppercase tracking-[0.3em] text-fog">
                ~ 25 min de lecture
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function DesktopTocList({ active }: { active: string }) {
  return (
    <>
      <div className="font-ui text-[0.6rem] uppercase tracking-[0.3em] text-fog mb-4">
        Sommaire
      </div>
      <ol className="space-y-2.5">
        {TOC_ITEMS.map((it) => {
          const isActive = active === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={`group flex items-center gap-3 text-xs transition-colors ${
                  isActive ? "text-bone" : "text-fog hover:text-bone/80"
                }`}
              >
                <span
                  className={`h-px transition-all ${
                    isActive
                      ? "w-8 bg-blood"
                      : "w-3 bg-fog/40 group-hover:w-5"
                  }`}
                />
                <span className="font-ui leading-tight">
                  <span
                    className={`block text-[0.6rem] tracking-widest ${
                      isActive ? "text-blood" : "text-fog/70"
                    }`}
                  >
                    {it.num}
                  </span>
                  {it.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </>
  );
}

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [marks, setMarks] = useState<number[]>([]);

  useEffect(() => {
    const compute = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const positions = TOC_ITEMS.slice(1) // skip "top" (already at 0%)
        .map((it) => document.getElementById(it.id))
        .filter(Boolean)
        .map((el) => (el as HTMLElement).offsetTop / docHeight)
        .filter((p) => p > 0.005 && p < 0.995);
      setMarks(positions);
    };
    compute();
    window.addEventListener("resize", compute);
    // Recompute once after fonts/images load (heights shift)
    const t = setTimeout(compute, 1500);
    return () => {
      window.removeEventListener("resize", compute);
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] pointer-events-none"
      aria-hidden
    >
      {/* Background track */}
      <div className="absolute inset-0 bg-bone/[0.06]" />
      {/* Filled progress */}
      <motion.div
        style={{ scaleX }}
        className="absolute inset-0 origin-left bg-blood"
      />
      {/* Chapter tick marks */}
      {marks.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 h-[2px] w-px bg-bone/30"
          style={{ left: `${p * 100}%` }}
        />
      ))}
    </div>
  );
}
