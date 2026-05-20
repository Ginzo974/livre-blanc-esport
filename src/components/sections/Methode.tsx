"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const STEPS = [
  {
    n: "01",
    title: "Le brief",
    body: "Une page maximum. Quel jeu, quelles valeurs, quelle audience. Tout ce qui suit en dépend.",
    rule: "Si tu ne sais pas le résumer en une page, tu ne sais pas encore ce que tu crées.",
  },
  {
    n: "02",
    title: "Le nom",
    body: "Court et géométrique invite à la simplicité radicale. Narratif invite à la métaphore visuelle.",
    rule: "Évite les noms trop spécifiques à un jeu. Si tu changes de discipline, tu es coincé.",
  },
  {
    n: "03",
    title: "Le logo",
    body: "Trente directions dans une approche, trois retenues, une finalisée. Teste en favicon 24 px.",
    rule: "Le favicon est ton juge le plus impitoyable.",
  },
  {
    n: "04",
    title: "La palette",
    body: "Deux à trois couleurs maximum. Testées sur fond noir, blanc, gris. Confrontées à dix concurrents.",
    rule: "La couleur amplifie ce que le logo dit. Elle ne l'invente pas.",
  },
  {
    n: "05",
    title: "La typographie",
    body: "Une sans-serif qui dialogue avec ton nom. Lisible en jersey (10 m), overlay (16 px), pouce social.",
    rule: "La typo paresseuse rend tout le système paresseux.",
  },
  {
    n: "06",
    title: "Le système 360",
    body: "Jersey, 3 templates social par plateforme, overlay broadcast, site, merch. Kit téléchargeable.",
    rule: "Sans kit, ta marque dérive en deux mois.",
  },
  {
    n: "07",
    title: "La maintenance",
    body: "Itère, ne réécris pas. La règle Sam Mathews : refines, mais ne réécris pas ce qui marche.",
    rule: "Tu n'es pas le public cible de ton identité. Ne change pas parce que tu t'ennuies.",
  },
];

export function Methode() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  return (
    <section
      ref={ref}
      id="methode"
      className="relative bg-ink-2 py-28 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-display text-blood text-sm tracking-widest">
            05
          </span>
          <span className="h-px w-20 bg-blood/40" />
          <span className="text-fog text-xs uppercase tracking-[0.3em]">
            Chapitre 5 · La méthode
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight max-w-4xl mb-6"
        >
          Sept étapes.
          <br />
          <span className="text-fog">Dans cet ordre.</span>
          <br />
          <span className="text-blood">Sans raccourci.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fog max-w-2xl mb-20"
        >
          Si tu changes ton logo après avoir choisi ta palette, tu devras
          probablement revalider la palette. L&apos;ordre n&apos;est pas
          arbitraire.
        </motion.p>

        <div className="relative grid grid-cols-1 md:grid-cols-[80px_1fr] gap-x-8">
          {/* Vertical progress bar */}
          <div className="hidden md:block sticky top-32 self-start h-[600px]">
            <div className="relative h-full w-px bg-bone/10 mx-auto">
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute inset-0 origin-top bg-blood"
              />
            </div>
          </div>

          <ol className="space-y-12 md:space-y-16">
            {STEPS.map((s, i) => (
              <Step key={s.n} step={s} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Step({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 30%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-30, 0]);

  return (
    <motion.li
      ref={ref}
      style={{ opacity, x }}
      className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-6 items-start"
    >
      <div>
        <div className="font-display text-blood text-3xl md:text-4xl">
          {step.n}
        </div>
        <div className="h-px w-10 bg-blood/40 mt-2" />
      </div>
      <div>
        <h3 className="font-display text-2xl md:text-3xl text-bone mb-3">
          {step.title}
        </h3>
        <p className="text-bone/80 leading-relaxed max-w-2xl mb-3">
          {step.body}
        </p>
        <p className="text-fog text-sm italic max-w-2xl border-l-2 border-blood/40 pl-4">
          {step.rule}
        </p>
      </div>
    </motion.li>
  );
}
