"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

/**
 * ActBreakHunters
 *
 * Cinematic act break inserted before Chapter 6. Full bleed (100vw / 100vh),
 * dark with blood halo + claw marks, animated reveal of HUNTERS logo,
 * massive typographic statement, scanlines.
 *
 * Acts as a "chapter card" film moment that resets the visual rhythm of the
 * long-read and primes the reader for the HUNTERS climax.
 */
export function ActBreakHunters() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Logo : enters scaled-up & blurred, settles in the middle, drifts up slightly on exit
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 0.95]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const logoBlur = useTransform(scrollYProgress, [0, 0.3], ["10px", "0px"]);
  const haloOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0.5]);

  // Statement : fades + slides up as the section enters
  const statementY = useTransform(scrollYProgress, [0, 0.6], ["40px", "0px"]);
  const statementOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <section
      ref={ref}
      aria-label="Transition vers le chapitre HUNTERS"
      className="relative w-screen left-1/2 -translate-x-1/2 min-h-[100svh] overflow-hidden bg-ink"
      style={{ marginTop: "0", marginBottom: "0" }}
    >
      {/* Blood radial halo */}
      <motion.div
        style={{ opacity: haloOpacity }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(200,29,37,0.30) 0%, rgba(125,10,14,0.18) 40%, transparent 75%)",
          }}
        />
      </motion.div>

      {/* Background claw marks SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.10] pointer-events-none"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="clawGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff2b3d" stopOpacity="0" />
            <stop offset="40%" stopColor="#c81d25" stopOpacity="1" />
            <stop offset="100%" stopColor="#7d0a0e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g stroke="url(#clawGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round">
          <path d="M -50 80 L 380 920" />
          <path d="M 100 40 L 530 950" />
          <path d="M 260 70 L 690 930" />
          <path d="M 920 60 L 1290 940" />
          <path d="M 1080 30 L 1450 920" />
          <path d="M 1240 80 L 1610 940" />
        </g>
      </svg>

      {/* Scanline overlay, broadcast feel */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.6) 0 1px, transparent 1px 3px)",
        }}
        aria-hidden
      />

      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
        aria-hidden
      />

      {/* Content, even vertical rhythm via a single gap */}
      <div className="relative z-10 min-h-[100svh] flex flex-col justify-center items-center px-6 pt-36 pb-24 md:pt-44 md:pb-28 gap-10 md:gap-12">
        {/* HUNTERS logo (symbole recadré) */}
        <motion.div
          style={{
            scale: logoScale,
            y: logoY,
            filter: useTransform(logoBlur, (b) => `blur(${b}) drop-shadow(0 0 70px rgba(200,29,37,0.45))`),
          }}
          className="relative w-[150px] md:w-[190px]"
        >
          <div className="relative w-full" style={{ aspectRatio: "665 / 832" }}>
            <Image
              src="/images/logo-hunters/hunters-rouge-crop.png"
              alt="Logo HUNTERS · lance et griffure"
              fill
              priority
              sizes="(min-width: 768px) 190px, 150px"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Wordmark, real HUNTERS typo under the logo */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="relative w-[280px] md:w-[380px]"
          style={{ aspectRatio: "1131 / 148" }}
        >
          <Image
            src="/images/logo-hunters/logo-typo-rouge-crop.png"
            alt="HUNTERS"
            fill
            sizes="(min-width: 768px) 380px, 280px"
            className="object-contain"
          />
        </motion.div>

        {/* Topline */}
        <motion.p
          style={{ y: statementY, opacity: statementOpacity }}
          className="max-w-3xl text-center font-hunter font-bold uppercase text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.05] tracking-tight text-bone"
        >
          Que la chasse
          <br />
          <span className="text-blood">commence.</span>
        </motion.p>

        {/* Down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="font-ui text-[0.6rem] uppercase tracking-[0.3em] text-fog">
            Méthode appliquée
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="block h-8 w-px bg-blood/60"
          />
        </motion.div>
      </div>
    </section>
  );
}
