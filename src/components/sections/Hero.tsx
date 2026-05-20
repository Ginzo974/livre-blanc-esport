"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const kY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const kScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-ink grain"
    >
      {/* radial blue halo */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,54,167,0.35) 0%, transparent 70%)",
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
          className="mb-6 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.32em] text-fog"
        >
          <span className="h-px w-12 bg-kc-blue" />
          <span>Livre Blanc · Mai 2026</span>
          <span className="h-px w-12 bg-kc-blue" />
        </motion.div>

        {/* The K — real logo with motion entrance */}
        <motion.div
          style={{ y: kY, scale: kScale, opacity: fade }}
          className="relative my-2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px]"
            style={{
              filter: "drop-shadow(0 0 40px rgba(0,54,167,0.55))",
            }}
          >
            <Image
              src="/images/01-k-bleu.webp"
              alt="Le K bleu de la Karmine Corp"
              fill
              priority
              sizes="(min-width: 768px) 260px, 200px"
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          style={{ y: titleY, opacity: fade }}
          className="font-display text-center text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight text-bone mt-6"
        >
          DU LOGO
          <br />
          <span
            className="text-[var(--color-kc-blue-bright)]"
            style={{ textShadow: "0 0 30px rgba(77,142,255,0.35)" }}
          >
            À LA SCÈNE
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 max-w-xl text-center text-base text-fog md:text-lg"
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

