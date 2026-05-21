"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const TEAM_COLORS = [
  { hex: "#0036a7", name: "Karmine Corp" },
  { hex: "#e2012d", name: "T1" },
  { hex: "#f4f1ea", name: "G2 Esports" },
  { hex: "#ff6700", name: "Fnatic" },
  { hex: "#ffe600", name: "NAVI" },
  { hex: "#ffd200", name: "Team Vitality" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const linesY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-ink grain"
    >
      {/* Subtle ambient halos in book's palette */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 30%, rgba(0,54,167,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 35% at 80% 70%, rgba(200,29,37,0.16) 0%, transparent 70%)",
        }}
      />
      {/* grid noise floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-30"
        style={{
          background:
            "linear-gradient(to top, rgba(0,54,167,0.25), transparent), repeating-linear-gradient(to right, rgba(255,255,255,0.04) 0 1px, transparent 1px 80px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.04) 0 1px, transparent 1px 80px)",
          maskImage:
            "linear-gradient(to top, black 20%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.32em] text-fog"
        >
          <span className="h-px w-12 bg-blood" />
          <span>Livre Blanc · Mai 2026</span>
          <span className="h-px w-12 bg-blood" />
        </motion.div>

        <motion.h1
          style={{ y: titleY, opacity: fade }}
          className="font-display text-center text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-tight text-bone"
        >
          DU LOGO
          <br />
          <span
            className="text-[var(--color-kc-blue-bright)]"
            style={{ textShadow: "0 0 40px rgba(77,142,255,0.35)" }}
          >
            À LA SCÈNE.
          </span>
        </motion.h1>

        {/* Six teams chromatic signature — abstract, no team favored */}
        <motion.div
          style={{ y: linesY, opacity: fade }}
          className="mt-12 md:mt-16 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 md:gap-3">
            {TEAM_COLORS.map((t, i) => (
              <motion.span
                key={t.name}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block h-[3px] md:h-1 w-12 md:w-16 origin-left"
                style={{ backgroundColor: t.hex }}
                aria-label={t.name}
                title={t.name}
              />
            ))}
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="font-ui text-[0.65rem] uppercase tracking-[0.35em] text-fog"
          >
            Six équipes · Une méthode · Une fictive
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-12 max-w-xl text-center text-base text-fog md:text-lg leading-relaxed"
        >
          Décrypter et concevoir l&apos;identité visuelle d&apos;une équipe
          esport. Six cas d&apos;étude, une méthode applicable, une équipe fictive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-fog">
            Scrolle
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-8 w-px bg-bone/40"
          />
        </motion.div>
      </div>
    </section>
  );
}

