"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { useEffect, useRef } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  source?: string;
  decimals?: number;
};

const STATS: Stat[] = [
  {
    value: 15.4,
    suffix: "M",
    label: "Consommateurs esport en France",
    source: "Baromètre France Esports 2025",
    decimals: 1,
  },
  {
    value: 18,
    suffix: "%",
    label: "Croissance en deux ans",
    source: "France Esports",
  },
  {
    value: 7.1,
    suffix: "M",
    label: "Suivent les compétitions chaque mois",
    decimals: 1,
  },
  {
    value: 120000,
    suffix: "",
    label: "Spectateurs simultanés LFL, 28 jan. 2026",
  },
];

export function Stats() {
  return (
    <section className="relative bg-ink-2 py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--color-blood) 0 1px, transparent 1px 60px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-fog text-xs uppercase tracking-[0.3em] mb-4"
        >
          L&apos;enjeu n&apos;est plus marginal
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight max-w-4xl mb-16"
        >
          Concevoir une identité d&apos;équipe esport,
          <br />
          <span className="text-fog">ce n&apos;est plus dessiner pour une niche.</span>
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10">
          {STATS.map((s, i) => (
            <StatCard key={i} stat={s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    stat.decimals ? v.toFixed(stat.decimals) : Math.round(v).toLocaleString("fr-FR")
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(count, stat.value, {
        duration: 1.8,
        ease: "easeOut",
        delay,
      });
      return controls.stop;
    }
  }, [inView, count, stat.value, delay]);

  return (
    <div
      ref={ref}
      className="bg-ink-2 p-8 md:p-10 group hover:bg-ink-3 transition-colors"
    >
      <div className="font-display text-bone text-4xl md:text-6xl flex items-baseline gap-1">
        <motion.span>{rounded}</motion.span>
        <span className="text-blood">{stat.suffix}</span>
      </div>
      <div className="mt-4 text-sm text-bone/80 leading-snug">{stat.label}</div>
      {stat.source && (
        <div className="mt-3 text-[0.65rem] uppercase tracking-widest text-fog">
          {stat.source}
        </div>
      )}
    </div>
  );
}
