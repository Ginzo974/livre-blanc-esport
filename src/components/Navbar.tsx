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
        <div className="hidden md:flex items-center gap-6 font-ui text-[0.7rem] uppercase tracking-[0.3em] text-fog">
          <span>~ 25 min de lecture</span>
        </div>
        <a
          href="#conclusion"
          className="font-display text-xs tracking-widest text-bone border border-bone/20 px-4 py-2 hover:bg-blood hover:border-blood transition-colors"
        >
          PDF
        </a>
      </div>
    </motion.nav>
  );
}
