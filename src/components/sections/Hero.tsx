"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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
            "radial-gradient(ellipse 60% 45% at 30% 32%, rgba(200,29,37,0.20) 0%, transparent 70%), radial-gradient(ellipse 50% 35% at 78% 70%, rgba(200,29,37,0.12) 0%, transparent 70%)",
        }}
      />
      {/* grid noise floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-30"
        style={{
          background:
            "linear-gradient(to top, rgba(200,29,37,0.20), transparent), repeating-linear-gradient(to right, rgba(255,255,255,0.04) 0 1px, transparent 1px 80px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.04) 0 1px, transparent 1px 80px)",
          maskImage:
            "linear-gradient(to top, black 20%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-6 pt-28 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.32em] text-fog"
        >
          <span className="h-px w-12 bg-blood" />
          <span>Livre Blanc, Quentin LOUIS</span>
          <span className="h-px w-12 bg-blood" />
        </motion.div>

        <motion.h1
          style={{ y: titleY, opacity: fade }}
          className="font-display text-center text-[clamp(3rem,9vw,8rem)] leading-[1.12] tracking-tight text-bone"
        >
          <span className="block">DU LOGO</span>
          <span
            className="block text-[var(--color-blood)]"
            style={{ textShadow: "0 0 45px rgba(200,29,37,0.3)" }}
          >
            À LA SCÈNE.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 md:mt-12 max-w-xl text-center text-base md:text-lg text-fog leading-relaxed"
        >
          Décrypter et concevoir l&apos;identité visuelle d&apos;une équipe
          esport. Six cas d&apos;étude, une méthode applicable, et une équipe
          créée de zéro.
        </motion.p>
      </div>

      {/* Scroll indicator, outside the centered content, anchored to the section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-fog">
          Scrolle
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="block h-8 w-px bg-bone/40"
        />
      </motion.div>
    </section>
  );
}

