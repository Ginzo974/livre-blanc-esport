"use client";

import { motion } from "motion/react";

type Team = {
  name: string;
  years: string;
  story: string;
  primary: string;
  primaryName: string;
  secondary: string;
  secondaryName: string;
  accent?: string;
  accentName?: string;
};

const TEAMS: Team[] = [
  {
    name: "Fnatic",
    years: "2004 → +21 ans",
    story:
      "L'orange est risquée. Mal contrastée, elle disparaît sur fond blanc et hurle sur fond noir. Fnatic l'a embrassée et tenue depuis 2004.",
    primary: "#ff6700",
    primaryName: "Fnatic Orange",
    secondary: "#0a0a0a",
    secondaryName: "Noir signature",
  },
  {
    name: "Karmine Corp",
    years: "Janvier 2026",
    story:
      "Cinq ans de bleu institutionnel. Puis Kameto annonce un split chromatique structurel : rouge pour la LEC, bleu pour KC Blue. La couleur devient taxonomie.",
    primary: "#e10600",
    primaryName: "KC Red — LEC",
    secondary: "#0036a7",
    secondaryName: "KC Blue — KCB",
    accent: "#f4f1ea",
    accentName: "Bone",
  },
  {
    name: "NAVI",
    years: "2011 → +15 ans",
    story:
      "Quinze ans sans bouger. Le jaune NAVI est défiant et cool — il surnage dans le noir, résiste à la compression vidéo des streams. Constance comme stratégie.",
    primary: "#ffe600",
    primaryName: "NAVI Yellow",
    secondary: "#0a0a0a",
    secondaryName: "Black combat",
  },
];

export function Couleur() {
  return (
    <section
      id="couleur"
      className="relative bg-ink-2 py-28 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-display text-blood text-sm tracking-widest">
            03
          </span>
          <span className="h-px w-20 bg-blood/40" />
          <span className="text-fog text-xs uppercase tracking-[0.3em]">
            Chapitre 3 · La couleur
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight max-w-4xl mb-6"
        >
          Un logo donne la silhouette.
          <br />
          <span className="text-blood">La couleur donne le sang.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fog max-w-2xl mb-20"
        >
          Trois équipes, trois logiques. Aucune ne tombe dans le piège du
          noir-néon-générique qui sature l&apos;industrie.
        </motion.p>

        <div className="space-y-8">
          {TEAMS.map((t, i) => (
            <TeamRow key={t.name} team={t} index={i} />
          ))}
        </div>

        <ContrastTest />
      </div>
    </section>
  );
}

function TeamRow({ team, index }: { team: Team; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-px bg-ink"
    >
      <div className="lg:col-span-4 p-8 md:p-10 bg-ink-2">
        <div className="text-xs uppercase tracking-[0.3em] text-fog mb-3">
          {team.years}
        </div>
        <h3 className="font-display text-4xl text-bone mb-4">{team.name}</h3>
        <p className="text-fog text-sm leading-relaxed">{team.story}</p>
      </div>
      <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-px bg-ink">
        <Swatch color={team.primary} label={team.primaryName} large />
        <Swatch color={team.secondary} label={team.secondaryName} />
        {team.accent && (
          <Swatch color={team.accent} label={team.accentName ?? ""} />
        )}
        {!team.accent && (
          <div className="bg-ink-2 p-6 flex items-end">
            <span className="text-xs uppercase tracking-widest text-fog">
              Discipline · binôme tenu
            </span>
          </div>
        )}
      </div>
    </motion.article>
  );
}

function Swatch({
  color,
  label,
  large,
}: {
  color: string;
  label: string;
  large?: boolean;
}) {
  const isDark = color.toLowerCase() === "#0a0a0a";
  return (
    <motion.div
      whileHover={{ scale: 0.99 }}
      className={`relative p-6 md:p-8 flex flex-col justify-between min-h-[180px] md:min-h-[220px] ${
        large ? "md:row-span-2 md:min-h-[460px]" : ""
      }`}
      style={{ background: color }}
    >
      <span
        className="font-display text-xs tracking-widest"
        style={{ color: isDark ? "#f4f1ea" : "rgba(10,10,10,0.7)" }}
      >
        {color.toUpperCase()}
      </span>
      <span
        className="font-display text-lg"
        style={{ color: isDark ? "#f4f1ea" : "#0a0a0a" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

function ContrastTest() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-20 border-t border-bone/10 pt-12"
    >
      <div className="text-fog text-xs uppercase tracking-[0.3em] mb-4">
        Le test des 3 fonds
      </div>
      <p className="font-display text-2xl md:text-3xl text-bone max-w-3xl mb-10 leading-tight">
        Si ta couleur disparaît sur le stream, le site ou l&apos;overlay — change-la.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bone/10">
        {[
          { bg: "#0a0a0a", label: "Le stream", sub: "Fond noir" },
          { bg: "#f4f1ea", label: "Le site", sub: "Fond clair" },
          { bg: "#3a3a3a", label: "L'overlay", sub: "Fond gris" },
        ].map((f) => (
          <div
            key={f.label}
            className="p-12 flex flex-col items-center justify-center min-h-[200px]"
            style={{ background: f.bg }}
          >
            <div
              className="font-display text-4xl mb-2"
              style={{ color: "#c81d25" }}
            >
              HUNTERS
            </div>
            <div
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: f.bg === "#f4f1ea" ? "#0a0a0a" : "#f4f1ea" }}
            >
              {f.label} · {f.sub}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
