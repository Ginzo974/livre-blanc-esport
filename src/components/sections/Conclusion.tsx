"use client";

import { motion } from "motion/react";

const LESSONS = [
  {
    n: "I",
    t: "L'esport a son propre langage.",
    d: "Pense écran, communauté digitale, drop streetwear. Le design pour stade ne marche pas ici.",
  },
  {
    n: "II",
    t: "La méthode bat l'improvisation.",
    d: "Brief, nom, logo, palette, typographie, écosystème 360, maintenance. Sept étapes, dans cet ordre, sans raccourci.",
  },
  {
    n: "III",
    t: "Les meilleures équipes ne crient pas plus fort.",
    d: "Elles dessinent plus juste. Pas d'effet de manche. De la discipline visuelle qui résiste au temps.",
  },
];

export function Conclusion() {
  return (
    <section
      id="pdf"
      className="relative bg-ink py-28 md:py-36 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0,54,167,0.2), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-display text-[var(--color-kc-blue-bright)] text-sm tracking-widest">
            ↺
          </span>
          <span className="h-px w-20 bg-kc-blue/40" />
          <span className="text-fog text-xs uppercase tracking-[0.3em]">
            Retour au K bleu
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[clamp(2rem,5.5vw,4.5rem)] leading-[1] tracking-tight max-w-4xl mb-16"
        >
          La différence entre une équipe esport qui existe et{" "}
          <span className="text-[var(--color-kc-blue-bright)]">une équipe qu&apos;on retient.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bone/10 mb-20">
          {LESSONS.map((l, i) => (
            <motion.div
              key={l.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-ink-2 p-8 md:p-10 min-h-[260px] flex flex-col"
            >
              <div className="font-display text-[var(--color-kc-blue-bright)] text-4xl mb-6">
                {l.n}
              </div>
              <h3 className="font-display text-xl text-bone mb-3 leading-tight">
                {l.t}
              </h3>
              <p className="text-fog text-sm leading-relaxed">{l.d}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-bone/10 bg-ink-2 p-10 md:p-16 grid lg:grid-cols-[1fr_auto] gap-8 items-center"
        >
          <div>
            <div className="text-fog text-xs uppercase tracking-[0.3em] mb-3">
              Le livre blanc complet
            </div>
            <h3 className="font-display text-3xl md:text-5xl text-bone mb-3 leading-tight">
              20 pages.
              <br />
              <span className="text-[var(--color-kc-blue-bright)]">6 cas d&apos;étude.</span> 1 méthode.
            </h3>
            <p className="text-fog max-w-xl">
              Karmine Corp · T1 · G2 Esports · Fnatic · NAVI · Team Vitality —
              et HUNTERS, l&apos;équipe fictive qui démontre la méthode en
              pratique.
            </p>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-4 self-start bg-blood hover:bg-claw transition-colors px-8 py-5 font-display text-bone tracking-widest text-sm"
          >
            TÉLÉCHARGER LE PDF
            <motion.svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              className="transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            >
              <path d="M0 7 H18 M12 1 L18 7 L12 13" />
            </motion.svg>
          </a>
        </motion.div>

        <Footer />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-24 pt-12 border-t border-bone/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
      <div>
        <div className="font-display text-bone text-base mb-3">
          DU LOGO À LA SCÈNE
        </div>
        <p className="text-fog leading-relaxed max-w-sm">
          Livre blanc · Master 2 Digital Design &amp; Creative Technologies ·
          Mai 2026.
        </p>
      </div>
      <div>
        <div className="text-fog text-xs uppercase tracking-[0.3em] mb-3">
          Auteur
        </div>
        <p className="text-bone">
          [Prénom Nom]
          <br />
          <span className="text-fog text-xs">
            5 ans de design · 10 ans de LoL
          </span>
        </p>
      </div>
      <div>
        <div className="text-fog text-xs uppercase tracking-[0.3em] mb-3">
          Contact
        </div>
        <ul className="space-y-1">
          {["email", "Behance", "Instagram"].map((l) => (
            <li key={l}>
              <a href="#" className="text-bone hover:text-blood transition-colors">
                {l}
                <span className="text-fog"> ↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-3 pt-8 border-t border-bone/5 text-fog text-xs flex flex-col md:flex-row justify-between gap-2">
        <span>
          © 2026 — Toute marque citée appartient à ses propriétaires
          respectifs.
        </span>
        <span>
          Conçu avec discipline. Next.js 16 · Motion · Lenis.
        </span>
      </div>
    </footer>
  );
}
