"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export const TOC_ITEMS = [
  { id: "top", num: "00", label: "Ouverture" },
  { id: "intro", num: "01", label: "Introduction" },
  { id: "chap-1", num: "02", label: "L'esport, un sport à part" },
  { id: "chap-2", num: "03", label: "Le logo" },
  { id: "chap-3", num: "04", label: "La couleur" },
  { id: "chap-4", num: "05", label: "Le système 360" },
  { id: "chap-5", num: "06", label: "La méthode" },
  { id: "chap-6", num: "07", label: "HUNTERS" },
  { id: "conclusion", num: "08", label: "Conclusion" },
];

export function Toc() {
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const sections = TOC_ITEMS.map((it) => document.getElementById(it.id)).filter(
      Boolean
    ) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of viewport that's still intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ProgressBar />
      <aside
        aria-label="Sommaire"
        className="hidden xl:block fixed left-6 top-1/2 -translate-y-1/2 z-40 max-w-[180px]"
      >
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
                      isActive ? "w-8 bg-blood" : "w-3 bg-fog/40 group-hover:w-5"
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
      </aside>
    </>
  );
}

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-blood"
      aria-hidden
    />
  );
}
