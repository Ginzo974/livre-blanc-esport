"use client";

import {
  ChapterSection,
  Prose,
  H3,
  Lead,
  PullQuote,
} from "@/components/article/Article";
import { motion } from "motion/react";

export function ConclusionLong() {
  return (
    <ChapterSection
      id="conclusion"
      number="✦"
      kicker="Conclusion"
      title={
        <>
          Retour au{" "}
          <span className="text-[var(--color-blood)]">K bleu.</span>
        </>
      }
      accent="blood"
    >
      <Lead>
        J&apos;ai ouvert ce livre par un K bleu vu sur Twitch en 2021. Je le
        ferme par la même image, mais avec un regard différent.
      </Lead>

      <Prose>
        <p>
          Ce K n&apos;était pas un dessin. C&apos;était une décision de design
          parfaitement maîtrisée, reprise sur tous les supports, tenue pendant
          cinq ans, et assez solide pour traverser un grand changement de marque
          sans s&apos;effacer.
        </p>
        <p>
          <strong>
            Aucune des autres équipes que j&apos;ai analysées dans ces pages
            n&apos;a fait moins.
          </strong>{" "}
          T1 a gardé son aile cachée à travers vingt ans de transitions
          corporate. Fnatic a tenu son orange depuis 2004 en faisant évoluer
          trois fois son logo sans toucher à la palette. NAVI n&apos;a pas
          bougé ses couleurs depuis 2011, quinze ans sans céder. Vitality,
          Gentle Mates, tous ont construit des systèmes visuels disciplinés,
          pensés, défendus. <em>Aucun n&apos;improvise.</em>
        </p>
      </Prose>

      <PullQuote accent="blood">
        C&apos;est ça, la différence entre une équipe esport qui existe et{" "}
        <span className="text-fog">une équipe esport qu&apos;on retient.</span>
      </PullQuote>

      <H3>Ce que ce livre voulait te dire</H3>
      <Prose>
        <p>
          Une équipe esport, ce n&apos;est pas un logo posé sur un fond noir
          avec un nom anglo-saxon vaguement agressif. C&apos;est un{" "}
          <strong>système visuel cohérent</strong>{" "}qui vit sur des écrans qui
          ne s&apos;éteignent jamais, devant une communauté qui n&apos;a pas
          de stade, à travers des supports qui changent toutes les saisons.
        </p>
      </Prose>

      <H3>Trois leçons à garder en partant</H3>
      <ThreeLessons />

      <H3>Pourquoi ça dépasse l&apos;esport</H3>
      <Prose>
        <p>
          Toute marque qui vit principalement sur écran, qui s&apos;adresse à
          une communauté digitale plutôt qu&apos;à un public local, gagne à
          appliquer la grammaire de l&apos;esport.{" "}
          <strong>
            Ce que l&apos;esport a inventé en quinze ans va devenir la norme
            pour beaucoup d&apos;autres secteurs dans les dix prochaines années.
          </strong>
        </p>
        <p>
          Tu n&apos;as pas besoin de te lancer dans une équipe esport pour
          utiliser ce que ce livre t&apos;a appris. Tu peux l&apos;appliquer à
          ta marque, à ton projet, à ton portfolio.{" "}
          <em>La discipline est la même.</em>
        </p>
        <p>
          Tu as la méthode. Tu as les exemples. Tu as les pièges à éviter.{" "}
          <strong>Tu n&apos;as plus aucune excuse. À toi.</strong>
        </p>
      </Prose>

      <CTABlock />

      <H3>Remerciements</H3>
      <Prose>
        <p>
          À mon professeur <strong>Damien Paris</strong>, pour m&apos;avoir
          laissé creuser un sujet à la croisée de mon métier en formation et
          d&apos;une passion personnelle que je traîne depuis dix ans.
        </p>
        <p>
          Aux six équipes analysées dans ces pages, Karmine Corp, T1, Fnatic,
          Team Vitality, NAVI, Gentle Mates, pour avoir construit des
          identités dont on peut vraiment apprendre quelque chose.
        </p>
        <p>
          À la Karmine Corp en particulier. Sans le K bleu vu sur Twitch en
          2021, je n&apos;aurais probablement pas écrit ce livre. Vous
          m&apos;avez donné, sans le savoir, l&apos;envie de regarder
          l&apos;esport en designer.
        </p>
        <p>
          À mon cousin, pour les longues conversations gaming qui ont nourri
          ce livre sans qu&apos;on s&apos;en rende compte sur le moment.
        </p>
        <p>
          À ma compagne, qui a relu sans flatterie et qui m&apos;a aidé à voir
          clair sur le titre, le sous-titre, et beaucoup d&apos;autres détails
          qui font la différence entre un livre fini et un livre bâclé.
        </p>
        <p>
          <strong>À toi qui me lis.</strong>{" "}Si tu as lu jusqu&apos;ici,
          continue. L&apos;esport a besoin de designers qui prennent ces
          questions au sérieux.
        </p>
      </Prose>

      <Footer />
    </ChapterSection>
  );
}

function ThreeLessons() {
  const lessons = [
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
      d: "Elles dessinent plus juste. Pas d'effet de manche, pas de néon générique. De la discipline visuelle qui résiste au temps.",
    },
  ];
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-bone/10">
      {lessons.map((l, i) => (
        <motion.div
          key={l.n}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className="bg-ink-2 p-6 md:p-7"
        >
          <div className="font-display text-[var(--color-blood)] text-3xl mb-4">
            {l.n}
          </div>
          <h4 className="font-display text-base md:text-lg text-bone mb-2 leading-tight">
            {l.t}
          </h4>
          <p className="text-sm text-fog leading-relaxed">{l.d}</p>
        </motion.div>
      ))}
    </div>
  );
}

function CTABlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="my-16 md:-mx-12 border border-bone/10 bg-ink-2 p-8 md:p-12"
    >
      <div className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-fog mb-3">
        Tu viens de terminer le livre blanc
      </div>
      <h3 className="font-display text-2xl md:text-4xl text-bone mb-3 leading-tight">
        ≈ 25 min.{" "}
        <span className="text-[var(--color-blood)]">6 cas d&apos;étude.</span>{" "}
        1 méthode.
      </h3>
      <p className="text-fog max-w-xl text-sm md:text-base mb-8">
        Ce site <strong className="text-bone">est</strong> le livre blanc, dans
        son intégralité. Pas de version papier, pas de résumé : tout est ici.
        S&apos;il t&apos;a servi, partage-le.
      </p>
      <div className="flex flex-wrap gap-3 font-display text-sm tracking-widest">
        <a
          href="#top"
          className="group inline-flex items-center gap-3 bg-blood hover:bg-claw transition-colors px-6 py-4 text-bone"
        >
          REVENIR AU DÉBUT
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            className="transition-transform group-hover:-translate-y-1 rotate-[-90deg]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          >
            <path d="M0 7 H18 M12 1 L18 7 L12 13" />
          </svg>
        </a>
        <a
          href="mailto:quentin.louis97400@gmail.com"
          className="inline-flex items-center px-6 py-4 border border-bone/20 text-bone hover:border-blood hover:text-blood transition-colors"
        >
          ME CONTACTER
        </a>
      </div>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="mt-20 pt-10 border-t border-bone/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
      <div>
        <div className="font-display text-bone text-base mb-3">
          DU LOGO À LA SCÈNE
        </div>
        <p className="text-fog leading-relaxed max-w-sm">
          Livre blanc · Master 2 Digital Design &amp; Creative Technologies ·
          ESD Bordeaux · 2026.
        </p>
      </div>
      <div>
        <div className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-fog mb-3">
          Auteur
        </div>
        <p className="text-bone">
          Quentin LOUIS
          <br />
          <span className="text-fog text-xs">
            5 ans de design · 10 ans de LoL
          </span>
        </p>
      </div>
      <div>
        <div className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-fog mb-3">
          Contact
        </div>
        <ul className="space-y-1">
          <li>
            <a
              href="mailto:quentin.louis97400@gmail.com"
              className="text-bone hover:text-blood transition-colors"
            >
              Email <span className="text-fog">↗</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/quentin_louis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone hover:text-blood transition-colors"
            >
              Behance <span className="text-fog">↗</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="md:col-span-3 pt-6 border-t border-bone/5 text-fog text-xs flex flex-col md:flex-row justify-between gap-2">
        <span>
          © 2026 · Toute marque citée appartient à ses propriétaires
          respectifs.
        </span>
        <span>Conçu avec discipline. Next.js 16 · Motion · Lenis.</span>
      </div>
    </footer>
  );
}
