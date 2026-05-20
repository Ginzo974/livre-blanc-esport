"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export function Logo() {
  return (
    <section
      id="logo"
      className="relative bg-ink py-28 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-display text-blood text-sm tracking-widest">
            02
          </span>
          <span className="h-px w-20 bg-blood/40" />
          <span className="text-fog text-xs uppercase tracking-[0.3em]">
            Chapitre 2 · Le logo
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight max-w-4xl mb-6"
        >
          Trois approches.
          <br />
          <span className="text-fog">Zéro compromis.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fog max-w-2xl mb-20"
        >
          Quand tu regardes les meilleurs logos esport, trois familles
          émergent. Aucune n&apos;est meilleure. Toutes exigent de la discipline.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-bone/10">
          <ApproachCard
            index="A1"
            team="Karmine Corp"
            year="2020"
            title="Simplicité radicale"
            color="#0036a7"
            force="Scalabilité parfaite, redessinable de mémoire, traverse les rebrands."
            limite="Exige un palmarès derrière. Sans, le K géométrique ressemble à un logo d'agence."
            Illustration={<KIllustration />}
          />
          <ApproachCard
            index="A2"
            team="T1"
            year="2019"
            title="Héritage codé"
            color="#e2012d"
            force="Double lecture : minimaliste en surface, vingt ans d'archives en dessous."
            limite="Tu ne peux pas coder une histoire que tu n'as pas encore vécue."
            Illustration={<TIllustration />}
          />
          <ApproachCard
            index="A3"
            team="G2 Esports"
            year="2014"
            title="Récit illustratif"
            color="#dcdcdc"
            force="Narrativité immédiate, logo-monde qui génère un univers entier."
            limite="Complexité difficile à décliner, métaphore à tenir sur dix ans."
            Illustration={<SamuraiIllustration />}
          />
        </div>

        <PiegeBanner />
      </div>
    </section>
  );
}

function ApproachCard({
  index,
  team,
  year,
  title,
  color,
  force,
  limite,
  Illustration,
}: {
  index: string;
  team: string;
  year: string;
  title: string;
  color: string;
  force: string;
  limite: string;
  Illustration: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className="relative bg-ink-2 p-8 md:p-10 min-h-[640px] flex flex-col group hover:bg-ink-3 transition-colors"
      ref={ref}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span
            className="font-display text-sm"
            style={{ color }}
          >
            {index}
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-fog">
            {team} · {year}
          </span>
        </div>
        <span
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>

      <motion.div
        style={{ y }}
        className="relative flex-1 flex items-center justify-center mb-6"
      >
        {Illustration}
      </motion.div>

      <h3 className="font-display text-3xl text-bone mb-4">{title}</h3>

      <div className="space-y-4 text-sm">
        <div>
          <div className="text-[0.65rem] uppercase tracking-[0.25em] text-blood mb-1">
            Force
          </div>
          <p className="text-bone/80 leading-relaxed">{force}</p>
        </div>
        <div>
          <div className="text-[0.65rem] uppercase tracking-[0.25em] text-fog mb-1">
            Limite
          </div>
          <p className="text-fog leading-relaxed">{limite}</p>
        </div>
      </div>
    </motion.div>
  );
}

function PiegeBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-20 border border-blood/40 bg-blood/5 p-8 md:p-10"
    >
      <div className="flex flex-col md:flex-row gap-6 md:items-center">
        <div className="font-display text-blood text-xs tracking-[0.3em]">
          PIÈGE À ÉVITER
        </div>
        <p className="flex-1 text-bone/90 text-lg leading-snug">
          Le logo agressif générique.{" "}
          <span className="text-fog">
            Loup en flammes, aigle avec éclairs, crâne avec casque de gamer — si
            tu peux remplacer le nom de ton équipe sans que le logo paraisse
            incohérent, recommence.
          </span>
        </p>
      </div>
    </motion.div>
  );
}

/* --- ILLUSTRATIONS --- */

function KIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05 }}
      className="relative w-[180px] h-[200px]"
      style={{
        // Temp: invert le K noir pour le rendre blanc sur fond sombre
        // À remplacer par /images/04-k-blanc.webp dès qu'il est fourni
        filter:
          "brightness(0) invert(1) drop-shadow(0 0 25px rgba(244,241,234,0.25))",
      }}
    >
      <Image
        src="/images/04-kc-noir.png"
        alt="Logo Karmine Corp — version monochrome, simplicité radicale"
        fill
        sizes="180px"
        className="object-contain"
      />
    </motion.div>
  );
}

function TIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05 }}
      className="relative w-[220px] h-[150px]"
      style={{ filter: "drop-shadow(0 0 30px rgba(226,1,45,0.45))" }}
    >
      <Image
        src="/images/05-logo-t1.webp"
        alt="Logo T1 — le T à l'aile dissimulée, héritage Wings of Happiness"
        fill
        sizes="220px"
        className="object-contain"
      />
    </motion.div>
  );
}

function SamuraiIllustration() {
  return (
    <motion.svg
      viewBox="0 0 220 240"
      width="180"
      height="200"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      aria-label="G2 — silhouette samurai cicatrisé"
    >
      {/* Helmet base */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        d="M 60 90 Q 110 30 160 90 L 165 150 Q 110 175 55 150 Z"
        stroke="#dcdcdc"
        strokeWidth="3"
        fill="#1c1c1c"
      />
      {/* Helmet ridge */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
        d="M 110 30 L 110 100"
        stroke="#dcdcdc"
        strokeWidth="3"
        fill="none"
      />
      {/* Eye slits */}
      <motion.rect
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.4 }}
        x="75"
        y="105"
        width="25"
        height="6"
        fill="#dcdcdc"
      />
      <motion.rect
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.4 }}
        x="120"
        y="105"
        width="25"
        height="6"
        fill="#dcdcdc"
      />
      {/* Diagonal scar */}
      <motion.line
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.7 }}
        x1="50"
        y1="40"
        x2="180"
        y2="170"
        stroke="#e2012d"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* G2 text */}
      <motion.text
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 2 }}
        x="110"
        y="215"
        textAnchor="middle"
        fontFamily="var(--font-russo)"
        fontSize="22"
        fill="#dcdcdc"
        letterSpacing="0.1em"
      >
        G2
      </motion.text>
    </motion.svg>
  );
}
