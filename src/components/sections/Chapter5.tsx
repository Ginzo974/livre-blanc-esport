"use client";

import {
  ChapterSection,
  Prose,
  H3,
  H4,
  Lead,
  PullQuote,
} from "@/components/article/Article";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const STEPS = [
  {
    n: "01",
    title: "Le brief",
    body: "Une page maximum, pas plus. Quel jeu, quelles valeurs, quelle audience, quel niveau de compétition visé. Si tu ne sais pas le résumer en une page, tu ne sais pas encore ce que tu veux créer. Tout ce qui suit en dépend. Ne passe pas à l'étape 2 tant que le brief n'est pas écrit.",
  },
  {
    n: "02",
    title: "Le nom",
    body: "Le nom détermine la typographie et parfois le logo. Un nom court et géométrique (KC, T1) invite à la simplicité radicale. Un nom narratif (HUNTERS, Karmine) invite à chercher une métaphore visuelle. Évite les noms trop spécifiques à un jeu : si tu changes de discipline, tu es coincé.",
  },
  {
    n: "03",
    title: "Le logo",
    body: "Utilise l'outil de décision du chapitre 2 pour choisir ton approche. Trente directions dans cette approche, trois retenues, une finalisée. Teste en favicon 24 px avant de valider : c'est ton juge le plus impitoyable. Le choix de l'approche logo influence directement le choix de la typographie (étape 5).",
  },
  {
    n: "04",
    title: "La palette",
    body: "Deux à trois couleurs maximum, jamais plus. Testées sur fond noir (le stream), fond blanc (le site), fond gris (l'overlay). Confrontées à dix concurrents pour vérifier que tu ne ressembles pas à eux. Confirme la palette après le logo, pas avant : la couleur doit amplifier ce que le logo dit, pas l'inventer.",
  },
  {
    n: "05",
    title: "La typographie",
    body: "Une sans-serif qui dialogue avec ton nom et ton logo. Si ton logo est radical et géométrique (KC), ta typo est ferme et sobre. Si ton logo est narratif (G2, HUNTERS), ta typo peut avoir plus de caractère, à condition que la lisibilité en broadcast reste garantie. Teste sur jersey (dix mètres), overlay (16 px), et post social (pouce).",
  },
  {
    n: "06",
    title: "Le système 360",
    body: "Jersey, trois templates de réseaux sociaux par plateforme, overlay broadcast, page d'accueil de ton site, merch. Crée un kit de marque téléchargeable avec logo, typo, couleurs et exemples d'application. Sans kit, ta marque dérive en deux mois.",
  },
  {
    n: "07",
    title: "La maintenance",
    body: "Une identité n'est jamais figée. Tu vas vouloir la faire évoluer dans deux ans, dans cinq ans. La règle de Sam Mathews (Fnatic) vaut comme boussole : itérer, pas réécrire. Tu peux raffiner. Ne réécris pas ce qui marche parce que tu t'ennuies.",
  },
];

const ERREURS = [
  {
    t: "Faire le logo avant le brief",
    d: "Tu vas refaire le logo trois fois quand tu réaliseras ce que tu voulais vraiment dire. C'est l'erreur la plus chère du métier.",
  },
  {
    t: "Choisir une palette sur fond blanc uniquement",
    d: "Le stream est sombre. Si tu ne testes pas en stream, ta marque est invisible la moitié du temps.",
  },
  {
    t: "Sous-estimer la typo",
    d: "Le lecteur la voit plus souvent que ton logo. Une typo paresseuse, et tout ton système visuel paraît paresseux.",
  },
  {
    t: "Improviser le merch après coup",
    d: "Quand tu réalises que ton logo ne marche pas en broderie, c'est trop tard. Teste en broderie dès la validation du logo.",
  },
  {
    t: "Rebrand parce que tu t'ennuies",
    d: "Tu n'es pas le public cible de ton identité visuelle. Ne touche pas à ce qui marche parce que ça te lasse.",
  },
];

const TIERS = [
  {
    tier: "Tier 3 · Budget serré",
    desc: "Designer freelance junior, budget < 5 k€. Concentre tout sur logo + palette. Improvise merch et social. Réutilise des templates open-source.",
  },
  {
    tier: "Tier 2 · Structure établie",
    desc: "Studio design ou designer senior interne. Logo + palette + typo + kit social complet. Premier drop merch en série limitée.",
  },
  {
    tier: "Tier 1 · LEC / LCS / LCK",
    desc: "Direction artistique dédiée, partenariats marques mode. Système 360 complet, événements live, app communautaire envisagée.",
  },
];

export function Chapter5() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  return (
    <ChapterSection
      id="chap-5"
      number="06"
      kicker="Chapitre 5 · La méthode"
      title={
        <>
          Sept étapes. Dans cet ordre.{" "}
          <span className="text-blood">Sans raccourci.</span>
        </>
      }
      subtitle="Les quatre chapitres précédents t'ont donné des leçons par fragments. Voici la chaîne complète."
    >
      <Lead>
        Le logo, la couleur, la typographie, le système 360 ne sont pas des
        étapes indépendantes : chaque décision contraint celle qui suit.
      </Lead>

      <Prose>
        <p>
          Si tu changes ton logo après avoir choisi ta palette, tu devras
          probablement revalider la palette. Si tu changes de nom après avoir
          choisi le logo, tu perds peut-être la cohérence logo-typo.{" "}
          <strong>L&apos;ordre n&apos;est pas arbitraire.</strong>
        </p>
      </Prose>

      <div ref={ref} className="relative md:-mx-12 my-14">
        <div className="hidden md:block absolute left-[20px] top-0 bottom-0 w-px bg-bone/10">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute inset-0 origin-top bg-blood"
          />
        </div>
        <ol className="space-y-10">
          {STEPS.map((s, i) => (
            <Step key={s.n} step={s} index={i} />
          ))}
        </ol>
      </div>

      <PullQuote>
        La règle de Sam Mathews vaut comme boussole :{" "}
        <span className="text-blood">itérer, pas réécrire.</span>
      </PullQuote>

      <H3>Cinq erreurs à ne pas commettre</H3>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-3">
        {ERREURS.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-ink-2 border border-blood/20 p-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="font-display text-blood text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-bone text-base leading-tight">
                {e.t}
              </span>
            </div>
            <p className="text-xs text-fog leading-relaxed">{e.d}</p>
          </motion.div>
        ))}
      </div>

      <H3>Avec des moyens limités · Trois niveaux réalistes</H3>
      <Prose>
        <p>
          80 % des équipes qui lisent ce livre sont en Tier 3, avec un budget
          serré et un designer freelance junior.{" "}
          <strong>Cette méthode s&apos;applique à tous les niveaux.</strong>
        </p>
        <p>
          Ce qui change, c&apos;est la sophistication des outils et des
          prestataires, pas l&apos;ordre des étapes.
        </p>
      </Prose>

      <div className="my-10 space-y-3">
        {TIERS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-4 items-baseline bg-ink-2 border-l-2 border-blood/40 p-5"
          >
            <span className="font-display text-bone text-sm leading-tight">
              {t.tier}
            </span>
            <span className="text-sm text-fog leading-relaxed">{t.desc}</span>
          </motion.div>
        ))}
      </div>

      <Prose>
        <p>
          <strong>Règle clé pour les budgets serrés :</strong> investis sur le
          logo et la palette. Tu peux improviser le merch au Tier 1. Tu ne peux
          pas improviser le logo sans perdre la lisibilité de toute la marque.
        </p>
      </Prose>
    </ChapterSection>
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
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.li
      ref={ref}
      style={{ opacity }}
      className="relative grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr] gap-4 md:gap-8 items-start"
    >
      <div className="relative">
        <span className="absolute left-0 top-1 hidden md:block w-3 h-3 -translate-x-[6px] bg-blood rounded-full ring-4 ring-ink" />
        <span className="font-display text-blood text-2xl md:text-3xl">
          {step.n}
        </span>
      </div>
      <div>
        <h4 className="font-display text-xl md:text-2xl text-bone mb-2 leading-tight">
          {step.title}
        </h4>
        <p className="text-sm md:text-base text-fog leading-relaxed">
          {step.body}
        </p>
      </div>
    </motion.li>
  );
}
