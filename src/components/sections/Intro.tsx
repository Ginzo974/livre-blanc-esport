"use client";

import { motion } from "motion/react";
import { ChapterSection, Prose, H3, Lead, DropCap, PullQuote, AsideNote } from "@/components/article/Article";
import { ImageCard } from "@/components/ImageCard";

export function Intro() {
  return (
    <ChapterSection
      id="intro"
      number="01"
      kicker="Introduction"
      title={<>Quelque chose à propos d&apos;un K bleu.</>}
      accent="kc-blue-bright"
    >
      <Prose>
        <Lead>
          C&apos;était en 2021, sur Twitch. La Karmine Corp venait de débarquer
          en LFL et montait trop vite pour ce qu&apos;on attendait d&apos;une
          équipe française neuve.
        </Lead>

        <DropCap letter="J">
          e regardais les matchs sans vraiment savoir qui jouait. Et la première
          chose qui m&apos;est restée, ce n&apos;est pas une partie ou un
          highlight, ni même Kameto qui hurlait dans le micro. C&apos;est un K.
          Un K bleu, anguleux, posé sur l&apos;écran. Trois lignes simples qui
          semblaient avoir toujours été là. Je pouvais le redessiner de mémoire
          deux minutes après l&apos;avoir vu.
        </DropCap>

        <p>
          À l&apos;époque je n&apos;avais aucun vocabulaire pour expliquer
          pourquoi ce logo me marquait autant. Aujourd&apos;hui j&apos;ai à peu
          près celui qu&apos;il faut pour le dire.
        </p>
        <p>
          Cinq ans plus tard, je suis étudiant en design graphique. Je joue à
          League of Legends depuis dix ans. Et je sais que ce K n&apos;est pas
          un accident. Derrière, il y a des choix précis : la forme géométrique,
          la couleur, l&apos;angle, la simplicité, la décision de ne pas mettre
          un animal ou un casque de gamer. Des choix qui ont fait que ce logo me
          marque encore. Et qui font marquer des milliers d&apos;autres
          spectateurs toutes les semaines.
        </p>
      </Prose>

      <PullQuote accent="kc-blue-bright">
        Quand tu regardes les équipes esport autour de toi,{" "}
        <span className="text-fog">tu vois deux mondes coexister.</span>
      </PullQuote>

      <H3>Deux mondes dans l&apos;esport</H3>
      <Prose>
        <p>
          D&apos;un côté, une poignée d&apos;équipes qui ont construit une
          identité visuelle réfléchie. Cohérente du logo aux jerseys, des
          socials au merch, du brief jusqu&apos;à la scène.{" "}
          <strong>
            Karmine Corp, T1, G2 Esports, Fnatic, NAVI, Team Vitality.
          </strong>{" "}
          Leurs designs ne se ressemblent pas, mais ils ont un point commun :
          chaque détail visuel a été pensé.
        </p>
        <p>
          De l&apos;autre, la majorité. Des dizaines d&apos;équipes qui empilent
          les choix de design sans logique, qui copient ce qui marche ailleurs
          sans comprendre pourquoi, qui s&apos;étonnent ensuite de ne pas être
          reconnues. Logos qui se ressemblent tous. Couleurs au choix. Jerseys
          oubliés. Identité qui ne tient pas.
        </p>
        <p>
          Pourquoi cette différence ? Parce que la première moitié connaît une
          méthode. La seconde, non.
        </p>
      </Prose>

      <H3>Pourquoi ce livre</H3>
      <Prose>
        <p>
          Honnêtement, j&apos;ai commencé à écrire ce livre parce que je
          cherchais des ressources sérieuses sur l&apos;identité visuelle des
          équipes esport et que je n&apos;en trouvais quasiment pas. Les rares
          guides existants restent à la surface, listent des principes sans
          expliquer comment les appliquer, ou pire, brodent autour de chiffres
          inventés. Aucun ne te donne vraiment la méthode pour créer la tienne.
        </p>
        <p>Et pourtant l&apos;enjeu n&apos;est plus marginal.</p>
      </Prose>

      <StatsInline />

      <Prose>
        <p>
          Selon le baromètre <strong>France Esports 2025</strong>, 15,4 millions
          de Français sont aujourd&apos;hui des consommateurs esport, soit une
          croissance de 18 % en deux ans. Parmi eux, 7,1 millions suivent les
          compétitions chaque mois. La France est passée troisième en Europe
          pour les revenus directs du secteur.{" "}
          <em>
            Concevoir une identité d&apos;équipe esport, ce n&apos;est plus
            dessiner pour une niche.
          </em>
        </p>
        <p>
          À ma connaissance, ce livre blanc est le premier en français à
          proposer une méthodologie applicable d&apos;identité visuelle esport,
          fondée sur six cas d&apos;étude actualisés en 2026 et complétée par
          une identité fictive entièrement conçue pour illustrer la méthode en
          pratique.
        </p>
        <p>
          Ce n&apos;est pas un catalogue descriptif. Ce n&apos;est pas une
          analyse marketing. <strong>C&apos;est un manuel pour démarrer.</strong>{" "}
          À la fin de ces vingt pages, tu comprends comment se construit une
          identité visuelle d&apos;équipe esport, et tu disposes de la méthode
          pour démarrer la tienne dans la bonne direction.
        </p>
      </Prose>

      <H3>Six équipes, six leçons</H3>
      <Prose>
        <p>
          J&apos;ai choisi six équipes pour balayer les grandes facettes de
          l&apos;identité visuelle esport. Pas pour avoir l&apos;air exhaustif,
          pour avoir des angles vraiment différents. Et surtout, six équipes que
          je suis depuis plusieurs années et que je peux analyser sans
          approximation.
        </p>
        <ul>
          <li>
            <strong>Karmine Corp.</strong>{" "}Communauté française incarnée par un
            K minimaliste, devenu icône en cinq ans. Seul cas d&apos;une double
            palette de couleurs (rouge LEC, bleu KCB), annoncée en janvier 2026.
          </li>
          <li>
            <strong>T1.</strong>{" "}Héritage coréen, aile cachée dans le T. Vingt
            ans d&apos;identité SK Telecom résumés dans un logo qui semble
            minimaliste mais porte tout un passé.
          </li>
          <li>
            <strong>G2 Esports.</strong>{" "}Opposé exact de la simplicité. Le
            samurai cicatrisé fondé en 2014, un logo riche qui raconte une
            histoire et tient cette image sur dix ans dans toute la marque.
          </li>
          <li>
            <strong>Fnatic.</strong>{" "}L&apos;orange et le noir tenus depuis vingt
            et un ans. L&apos;une des plus vieilles signatures couleur de
            l&apos;esport, avec une règle simple : faire évoluer, jamais tout
            réécrire.
          </li>
          <li>
            <strong>NAVI.</strong>{" "}Sobriété ukrainienne en jaune et noir, quinze
            ans de palette identique. Exception de constance dans une industrie
            qui rebrand tous les deux ans.
          </li>
          <li>
            <strong>Team Vitality.</strong>{" "}Le jaune et noir français. Dix
            disciplines compétitives, une app communautaire (V.Hive) et un
            partenariat avec le PSG en EAFC.
          </li>
        </ul>
      </Prose>

      <H3>Comment lire ce livre</H3>
      <Prose>
        <p>
          Six chapitres conçus pour s&apos;enchaîner. Tu peux revenir à un
          chapitre quand tu en as besoin, mais lis l&apos;introduction et le
          chapitre 1 d&apos;abord. Ils posent les règles du jeu.
        </p>
        <p>
          Chaque chapitre se ferme sur une méthode applicable. Le chapitre 6
          applique la méthode complète à <strong>HUNTERS</strong>, une équipe
          fictive conçue de zéro pour démontrer que ça marche, pas seulement en
          théorie.
        </p>
      </Prose>

      <AudienceTags />

      <AuthorPresentation />
    </ChapterSection>
  );
}

/* --- Présentation de l'auteur --- */
function AuthorPresentation() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="mt-16 md:-mx-12 border border-bone/10 bg-ink-2/60 p-7 md:p-10"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="h-1.5 w-1.5 bg-[var(--color-kc-blue-bright)]" />
        <span className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-fog">
          Qui écrit ces pages
        </span>
      </div>
      <h3 className="font-display text-2xl md:text-3xl text-bone mb-5 leading-tight">
        Quentin <span className="text-[var(--color-kc-blue-bright)]">Louis</span>
      </h3>
      <div className="prose-reading max-w-2xl">
        <p>
          Passionné de jeux vidéo depuis tout petit, j&apos;ai découvert{" "}
          <strong>League of Legends en 2016</strong>,{" "}et je n&apos;ai jamais
          vraiment lâché la scène esport depuis. Pas observée de loin : vécue de
          l&apos;intérieur.
        </p>
        <p>
          Côté métier, <strong>cinq ans dans le design</strong>, dont quatre
          en alternance. Au fil des années, j&apos;ai construit une patte
          graphique qui me ressemble, et appris à analyser comme à créer des
          logos qui fonctionnent. Je ne prétends pas tout maîtriser, ce métier
          s&apos;apprend en continu, mais j&apos;ai de quoi en parler.
        </p>
        <p>
          Ce livre blanc est né de la rencontre de mes passions :{" "}
          <strong>le design, le jeu vidéo et le monde de l&apos;esport</strong>,
          qui m&apos;animent depuis aussi loin que je me souvienne.{" "}
          <em>Des mondes que je n&apos;avais encore jamais vraiment réunis.</em>
        </p>
      </div>
    </motion.aside>
  );
}

/* --- Stats inline (compacté pour s'insérer dans le flux de lecture) --- */
import { useInView, useMotionValue, useTransform as useT, animate } from "motion/react";
import { useEffect, useRef } from "react";

const STATS = [
  { value: 15.4, suffix: "M", label: "Consommateurs esport en France", decimals: 1 },
  { value: 18, suffix: "%", label: "Croissance en 2 ans" },
  { value: 7.1, suffix: "M", label: "Suivent les compétitions / mois", decimals: 1 },
  { value: 120000, suffix: "", label: "Spectateurs LFL, 28 jan. 2026" },
];

function StatsInline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="my-14 md:-mx-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-bone/10"
    >
      {STATS.map((s, i) => (
        <StatCell key={i} s={s} delay={i * 0.08} />
      ))}
    </motion.div>
  );
}

function StatCell({ s, delay }: { s: (typeof STATS)[number]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useT(count, (v) =>
    s.decimals ? v.toFixed(s.decimals) : Math.round(v).toLocaleString("fr-FR")
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(count, s.value, {
        duration: 1.6,
        ease: "easeOut",
        delay,
      });
      return controls.stop;
    }
  }, [inView, count, s.value, delay]);

  return (
    <div ref={ref} className="bg-ink-2 p-5 md:p-6">
      <div className="font-display text-3xl md:text-4xl text-bone flex items-baseline gap-1 leading-none">
        <motion.span>{rounded}</motion.span>
        <span className="text-[var(--color-kc-blue-bright)] text-2xl md:text-3xl">{s.suffix}</span>
      </div>
      <div className="mt-3 text-xs text-fog leading-snug">{s.label}</div>
    </div>
  );
}

function AudienceTags() {
  const items = [
    { icon: "◆", label: "Curieux", desc: "Regard nouveau sur les logos et jerseys de chaque semaine" },
    { icon: "◇", label: "Designer", desc: "Bibliographie rare en français + méthode transposable" },
    { icon: "▣", label: "Dirigeant", desc: "Cadre stratégique avant de briefer un designer" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-3"
    >
      {items.map((it) => (
        <div key={it.label} className="border border-bone/10 bg-ink-2 p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[var(--color-kc-blue-bright)] font-display">{it.icon}</span>
            <span className="font-display text-bone text-sm tracking-widest">
              {it.label.toUpperCase()}
            </span>
          </div>
          <p className="text-xs text-fog leading-snug">{it.desc}</p>
        </div>
      ))}
    </motion.div>
  );
}
