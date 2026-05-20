"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageCard } from "@/components/ImageCard";

export function DeuxMondes() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={ref}
      id="deux-mondes"
      className="relative overflow-hidden bg-ink py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="01" title="Deux mondes, deux sports" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight max-w-4xl mb-20"
        >
          Le sport classique a eu un siècle pour optimiser son visuel.{" "}
          <span className="text-blood">L&apos;esport en a eu quinze.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div style={{ x: leftX }} className="flex flex-col gap-px bg-bone/10">
            <ImageCard
              src="/images/02-stade-psg.webp"
              alt="Le Parc des Princes, stade du Paris Saint-Germain"
              kicker="Sport classique · 1970"
              caption="Cinquante mille personnes physiquement présentes. Le maillot lu à trente mètres."
              source="Parc des Princes · Paris"
              accent="kc-blue"
              aspect="16/10"
            />
            <WorldCard
              kicker="Sport classique"
              title="Un stade"
              year="1970"
              dot="#1e3a8a"
              points={[
                "Logo lu à 30 m, 50 000 personnes en tribune.",
                "Blason, couleurs municipales, animal local.",
                "Une décennie d'optimisation visuelle, des règles éprouvées.",
              ]}
              accent="bg-[#1e3a8a]"
            />
          </motion.div>
          <motion.div style={{ x: rightX }} className="flex flex-col gap-px bg-bone/10">
            <ImageCard
              src="/images/03-broadcast-kc.webp"
              alt="L'équipe Karmine Corp célèbre une victoire sur la scène LEC"
              kicker="Esport · 2025"
              caption="Pas de tribunes physiques. Une arène Twitch, un overlay, et des milliers de fans dans dix pays."
              source="Karmine Corp · LEC"
              accent="blood"
              aspect="16/10"
            />
            <WorldCard
              kicker="Esport"
              title="Un écran"
              year="2025"
              dot="#c81d25"
              points={[
                "Logo lu à 24 px dans le coin d'un overlay broadcast.",
                "Drop streetwear, audience mondiale, communauté Discord.",
                "Une décennie pour réinventer la grammaire du visuel.",
              ]}
              accent="bg-blood"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-16 grid grid-cols-3 max-w-3xl gap-8"
        >
          {[
            ["Broadcast", "remplace le stade"],
            ["Communauté", "remplace le supporter local"],
            ["Drop", "remplace le maillot replica"],
          ].map(([k, v]) => (
            <div key={k} className="border-l border-blood/40 pl-4">
              <div className="font-display text-lg text-blood">{k}</div>
              <div className="text-sm text-fog mt-1">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-display text-blood text-sm tracking-widest">
        {index}
      </span>
      <span className="h-px flex-1 max-w-[80px] bg-blood/40" />
      <span className="text-fog text-xs uppercase tracking-[0.3em]">
        {title}
      </span>
    </div>
  );
}

function WorldCard({
  kicker,
  title,
  year,
  points,
  accent,
  dot,
}: {
  kicker: string;
  title: string;
  year: string;
  points: string[];
  accent: string;
  dot: string;
}) {
  return (
    <div className="relative bg-ink-2 p-8 md:p-12 h-full min-h-[420px]">
      <div className="flex items-center justify-between mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-fog">
          {kicker}
        </span>
        <span className="font-display text-fog text-sm">{year}</span>
      </div>
      <h3 className="font-display text-5xl md:text-6xl text-bone mb-8 flex items-baseline gap-3">
        {title}
        <span
          className={`h-2 w-2 rounded-full ${accent}`}
          style={{ backgroundColor: dot }}
        />
      </h3>
      <ul className="space-y-4 text-fog">
        {points.map((p, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed">
            <span className="text-blood font-display mt-0.5">{i + 1}</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
