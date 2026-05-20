"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hunters() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["10%", "-15%"]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.08]);

  return (
    <section
      ref={ref}
      id="hunters"
      className="relative overflow-hidden py-32 md:py-44"
      style={{ background: "linear-gradient(to bottom, #0a0a0a, #1a0303 50%, #0a0a0a)" }}
    >
      {/* Blood vignette */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200,29,37,0.18), transparent 70%)",
          }}
        />
        {/* Claw marks faint texture */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <g stroke="#c81d25" strokeWidth="2" fill="none">
            <path d="M -50 100 L 250 700" />
            <path d="M 100 50 L 400 750" />
            <path d="M 250 80 L 550 720" />
            <path d="M 700 90 L 1000 720" />
            <path d="M 850 50 L 1150 700" />
            <path d="M 1000 100 L 1300 750" />
          </g>
        </svg>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-display text-blood text-sm tracking-widest">
            06
          </span>
          <span className="h-px w-20 bg-blood" />
          <span className="text-blood text-xs uppercase tracking-[0.3em]">
            Chapitre 6 · La méthode en action
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-fog text-xs uppercase tracking-[0.3em] mb-4"
            >
              Une équipe fictive · 100 % méthode
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-hunter font-bold text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] tracking-tight text-bone mb-6"
            >
              HUNT
              <br />
              <span className="text-blood">ERS.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-bone/80 max-w-md text-lg leading-snug"
            >
              La meute solidaire dans l&apos;effort.{" "}
              <span className="text-blood">Redoutable face à l&apos;adversaire.</span>{" "}
              Le collectif est plus fort que la somme des joueurs.
            </motion.p>
          </div>

          {/* HUNTERS logo */}
          <motion.div
            style={{ y: logoY, scale: logoScale }}
            className="flex justify-center"
          >
            <HuntersLogo />
          </motion.div>
        </div>

        {/* 5 method cards applied */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl text-bone mb-8 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-blood" />
          La méthode appliquée
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-blood/20">
          <MethodCard
            n="01"
            title="Brief"
            body="LoL, ambition LEC. Audience 18–35 ans francophones. Mot fondateur : meute."
          />
          <MethodCard
            n="02"
            title="Logo"
            body="Récit illustratif (G2). Lance + griffure + double H. Yeux suggérés en négatif."
            highlight
          />
          <MethodCard
            n="03"
            title="Palette"
            body="Rouge sang + noir profond. La trace du prédateur. Test 3 fonds : OK."
          />
          <MethodCard
            n="04"
            title="Typographie"
            body="Rajdhani Bold. Terminaisons biseautées, verticales tendues. Souffle court."
            font="hunter"
          />
          <MethodCard
            n="05"
            title="360"
            body="Jersey noir + patch meute. 3 templates social. Overlay sobre. Drop saisonnier."
          />
        </div>

        {/* Templates preview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Template
            kicker="Annonce"
            title="LA MEUTE CHASSE CE SOIR"
            sub="vs. T1 · 21:00 CET"
          />
          <Template
            kicker="Score"
            title="3 — 1"
            sub="HUNTERS vs. KARMINE"
            big
          />
          <Template
            kicker="Joueur"
            title="VIPER"
            sub="ADC · Top fragger de la meute"
          />
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 max-w-3xl"
        >
          <p className="font-hunter text-2xl md:text-3xl text-bone leading-tight">
            HUNTERS doit se lire avec le souffle court.{" "}
            <span className="text-blood">Pas avec la voix douce.</span>
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}

function HuntersLogo() {
  return (
    <svg
      viewBox="0 0 320 360"
      width="320"
      height="360"
      className="max-w-full drop-shadow-[0_0_50px_rgba(200,29,37,0.4)]"
      aria-label="Logo HUNTERS — lance et griffure"
    >
      <defs>
        <linearGradient id="bloodGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff2b3d" />
          <stop offset="60%" stopColor="#c81d25" />
          <stop offset="100%" stopColor="#7d0a0e" />
        </linearGradient>
      </defs>

      {/* Three central spear points top */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        d="M 130 30 L 160 100 L 190 30"
        stroke="url(#bloodGrad)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Central downward lance */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
        d="M 160 60 L 160 330"
        stroke="url(#bloodGrad)"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />

      {/* Left H stroke (vertical) */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        d="M 70 80 L 60 290"
        stroke="url(#bloodGrad)"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left H crossbar */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
        d="M 65 180 L 155 175"
        stroke="url(#bloodGrad)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left side claw extension */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
        d="M 20 110 L 90 65"
        stroke="url(#bloodGrad)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Right H stroke */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        d="M 250 80 L 260 290"
        stroke="url(#bloodGrad)"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right H crossbar */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
        d="M 165 175 L 255 180"
        stroke="url(#bloodGrad)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right claw extension */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
        d="M 300 110 L 230 65"
        stroke="url(#bloodGrad)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Hunter eyes — negative space dots that fade in */}
      <motion.circle
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 2.4 }}
        cx="115"
        cy="200"
        r="4"
        fill="#ff2b3d"
      />
      <motion.circle
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 2.4 }}
        cx="205"
        cy="200"
        r="4"
        fill="#ff2b3d"
      />
    </svg>
  );
}

function MethodCard({
  n,
  title,
  body,
  highlight,
  font,
}: {
  n: string;
  title: string;
  body: string;
  highlight?: boolean;
  font?: "hunter";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`p-6 md:p-7 min-h-[200px] flex flex-col ${
        highlight ? "bg-blood text-bone" : "bg-ink"
      }`}
    >
      <div
        className={`font-display text-xs tracking-widest mb-3 ${
          highlight ? "text-bone/80" : "text-blood"
        }`}
      >
        {n}
      </div>
      <h4
        className={`text-2xl mb-3 ${
          font === "hunter" ? "font-hunter font-bold" : "font-display"
        }`}
      >
        {title}
      </h4>
      <p
        className={`text-sm leading-relaxed ${
          highlight ? "text-bone/90" : "text-fog"
        }`}
      >
        {body}
      </p>
    </motion.div>
  );
}

function Template({
  kicker,
  title,
  sub,
  big,
}: {
  kicker: string;
  title: string;
  sub: string;
  big?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="aspect-[4/5] relative bg-ink-2 border border-blood/20 p-6 flex flex-col justify-between overflow-hidden group"
    >
      <div
        className="absolute inset-0 opacity-30 transition-opacity group-hover:opacity-50"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(200,29,37,0.4), transparent 60%)",
        }}
      />
      <div className="relative">
        <div className="text-[0.65rem] uppercase tracking-[0.3em] text-blood mb-2">
          / {kicker}
        </div>
      </div>
      <div className="relative">
        <h4
          className={`font-hunter font-bold text-bone leading-none mb-2 ${
            big ? "text-7xl" : "text-3xl"
          }`}
        >
          {title}
        </h4>
        <p className="text-fog text-xs uppercase tracking-widest">{sub}</p>
      </div>
      <div className="relative flex items-center justify-between text-[0.6rem] uppercase tracking-widest text-fog">
        <span>HUNTERS · 2026</span>
        <span className="font-hunter text-blood">/H</span>
      </div>
    </motion.div>
  );
}
