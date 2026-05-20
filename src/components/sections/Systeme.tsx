"use client";

import { motion } from "motion/react";

export function Systeme() {
  return (
    <section
      id="systeme"
      className="relative bg-ink py-28 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-display text-blood text-sm tracking-widest">
            04
          </span>
          <span className="h-px w-20 bg-blood/40" />
          <span className="text-fog text-xs uppercase tracking-[0.3em]">
            Chapitre 4 · Le système 360
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight max-w-4xl mb-6"
        >
          Un logo seul, c&apos;est un drapeau planté dans le vide.
          <br />
          <span className="text-fog">Le système, c&apos;est le pays autour.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fog max-w-2xl mb-16"
        >
          Typographie, jersey, broadcast, social, événement live, app
          communautaire, merch. C&apos;est là que la majorité des équipes
          improvisent — et c&apos;est là que les meilleures gagnent.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-[auto] gap-4 md:auto-rows-[180px]">
          <BentoCell className="md:col-span-3 md:row-span-2 bg-ink-2 group">
            <CellHeader idx="01" label="Typographie" />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <p className="font-display text-2xl md:text-3xl text-bone leading-tight mb-3">
                  La voix silencieuse de la marque.
                </p>
                <p className="text-sm text-fog">
                  T1 retire pour donner du poids. Vitality ajoute du mouvement.
                  Tu lis leur typo plus souvent que leur logo.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="border border-bone/10 p-4">
                  <div className="font-display text-3xl text-bone tracking-tight">
                    T1
                  </div>
                  <div className="text-[0.6rem] uppercase tracking-[0.25em] text-fog mt-1">
                    Sans-serif épurée
                  </div>
                </div>
                <div className="border border-bone/10 p-4">
                  <div
                    className="font-display text-3xl text-bone tracking-tight"
                    style={{ fontStyle: "italic", transform: "skewX(-8deg)" }}
                  >
                    VITALITY
                  </div>
                  <div className="text-[0.6rem] uppercase tracking-[0.25em] text-fog mt-1">
                    Diagonale dynamique
                  </div>
                </div>
              </div>
            </div>
          </BentoCell>

          <BentoCell className="md:col-span-3 bg-ink-3">
            <CellHeader idx="02" label="Jersey" />
            <p className="font-display text-xl text-bone leading-tight">
              Polyester recyclé Fulllife. Coupe boxy. Streetwear premium.
            </p>
            <p className="text-xs text-fog mt-2">
              KC × Fulllife · Portugal · 2026
            </p>
          </BentoCell>

          <BentoCell className="md:col-span-3 bg-ink-2">
            <CellHeader idx="03" label="Broadcast" />
            <p className="font-display text-xl text-bone leading-tight">
              Overlay sombre, contrastes hauts, lisible compressé.
            </p>
            <p className="text-xs text-fog mt-2">
              Cloud9 a conçu son logo pour 24 px en 2013.
            </p>
          </BentoCell>

          <BentoCell className="md:col-span-2 bg-ink-2">
            <CellHeader idx="04" label="Réseaux" />
            <p className="font-body text-sm text-bone leading-tight">
              3 templates fixes par plateforme. Si tu publies, tu suis. Pas
              d&apos;improvisation au cas par cas.
            </p>
          </BentoCell>

          <BentoCell className="md:col-span-2 bg-blood/10 border border-blood/30">
            <CellHeader idx="05" label="V.Hive" tone="blood" />
            <p className="font-display text-lg text-bone leading-tight">
              100 000+ téléchargements. 75 000 comptes actifs.
            </p>
            <p className="text-xs text-fog mt-2">
              Vitality · seul vrai cas d&apos;app communautaire esport.
            </p>
          </BentoCell>

          <BentoCell className="md:col-span-2 bg-ink-3">
            <CellHeader idx="06" label="Merch" />
            <p className="font-display text-lg text-bone leading-tight">
              Drops limités. Collabs mode.
            </p>
            <p className="text-xs text-fog mt-2">
              KC × RhinoShield · Gentle Mates × Lacoste · NAVI Pro Kit 90$
            </p>
          </BentoCell>
        </div>
      </div>
    </section>
  );
}

function BentoCell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`relative p-6 md:p-8 flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  );
}

function CellHeader({
  idx,
  label,
  tone = "default",
}: {
  idx: string;
  label: string;
  tone?: "default" | "blood";
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className={`font-display text-xs tracking-widest ${
          tone === "blood" ? "text-blood" : "text-fog"
        }`}
      >
        {idx}
      </span>
      <span className="h-px w-8 bg-bone/20" />
      <span className="text-[0.65rem] uppercase tracking-[0.3em] text-bone">
        {label}
      </span>
    </div>
  );
}
