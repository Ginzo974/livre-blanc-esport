"use client";

import { motion, useScroll, useTransform } from "motion/react";

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const bg = useTransform(
    scrollYProgress,
    [0, 0.03],
    ["rgba(10,10,10,0)", "rgba(10,10,10,0.75)"]
  );
  const border = useTransform(
    scrollYProgress,
    [0, 0.03],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor: bg, borderColor: border }}
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-sm tracking-widest text-bone hover:text-blood transition-colors"
        >
          DU&nbsp;LOGO&nbsp;À&nbsp;LA&nbsp;SCÈNE
        </a>
        <div className="flex items-center gap-5 md:gap-6 font-ui text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.25em] md:tracking-[0.3em] text-fog">
          <a
            href="/note-presentation"
            className="hidden sm:inline hover:text-bone transition-colors"
          >
            Présentation
          </a>
          <a
            href="/note-strategie"
            className="hidden sm:inline hover:text-bone transition-colors"
          >
            Stratégie
          </a>
          <span className="hidden md:inline text-fog/50">~ 25 min de lecture</span>
        </div>
      </div>
    </motion.nav>
  );
}
