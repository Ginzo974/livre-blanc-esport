"use client";

import {
  ChapterSection,
  Prose,
  H3,
  H4,
  Lead,
  PullQuote,
  WarningBlock,
  MethodList,
  HorsJV,
} from "@/components/article/Article";
import { motion } from "motion/react";
import Image from "next/image";

export function Chapter2() {
  return (
    <ChapterSection
      id="chap-2"
      number="03"
      kicker="Chapitre 2 · Le logo"
      accent="bone"
      title={
        <>
          Le logo, <span className="text-bone">point d&apos;ancrage visuel.</span>
        </>
      }
      subtitle="C'est la première chose que ton fan rencontre. Si le logo rate, tout le reste rame derrière."
    >
      <Lead>
        Réussir un logo, ce n&apos;est pas une question de goût, et ce
        n&apos;est pas non plus une question d&apos;être simple à tout prix.
      </Lead>
      <Prose>
        <p>
          Quand tu regardes les meilleurs logos de la scène esport, tu vois{" "}
          <strong>trois approches très différentes qui marchent toutes</strong>.
        </p>
      </Prose>

      {/* --- Approche 1 : KC --- */}
      <H3 accent="auto">Approche 1 · La simplicité radicale (Karmine Corp)</H3>

      <LogoFigure
        src="/images/04-kc-noir.png"
        alt="Le K de Karmine Corp — version monochrome"
        kicker="Karmine Corp · 2020"
        caption="Trois lignes anguleuses, géométriques, et c'est tout. Le K se redessine de mémoire en cinq secondes."
        accent="bone"
        invertWhite
      />

      <Prose>
        <p>
          Karmine Corp a fait le choix le plus radical possible.{" "}
          <strong>Un seul caractère, le K.</strong> Pas de mascotte, pas
          d&apos;animal, pas de symbole exotique. Trois lignes anguleuses,
          géométriques, et c&apos;est tout.
        </p>
        <p>
          Ce K a même traversé un rebrand. L&apos;organisation s&apos;appelait
          Kameto Corp à sa création en mars 2020, et est devenue Karmine Corp
          en novembre de la même année. Le nom a changé. Le K, lui, est resté.{" "}
          <em>
            C&apos;est la preuve d&apos;un logo conçu pour durer au-delà du
            nom qui l&apos;a fait naître.
          </em>
        </p>
        <p>
          Le K se redessine de mémoire en cinq secondes. Il fonctionne en
          favicon, en avatar Twitter, en logo brodé sur le maillot, en lumière
          géante sur la scène de l&apos;Adidas Arena.{" "}
          <strong>
            Aucune perte de sens entre vingt-quatre pixels et vingt-quatre
            mètres.
          </strong>
        </p>
      </Prose>

      <ForceLimit
        force="Scalabilité parfaite, signe communautaire reconnu seul, vieillissement bien mieux que toute complexité."
        limite="Elle exige d'avoir quelque chose derrière. Sans palmarès, le K géométrique ressemble à un logo d'agence web."
      />

      {/* --- Approche 2 : T1 --- */}
      <H3 accent="auto">Approche 2 · L&apos;héritage codé (T1)</H3>

      <LogoFigure
        src="/images/05-logo-t1.webp"
        alt="Logo T1 — le T avec l'aile dissimulée, héritage Wings of Happiness"
        kicker="T1 · 2019"
        caption="Couche visible : un T élégant. Couche initiée : vingt ans d'archives SK Telecom."
        accent="t1"
      />

      <Prose>
        <p>
          À première vue, le logo T1 ressemble à deux caractères typographiques
          épurés. Une approche simplicité radicale comme KC.{" "}
          <strong>Sauf que c&apos;est un piège.</strong>
        </p>
        <p>
          Si tu regardes attentivement le T, tu verras{" "}
          <strong>trois lignes diagonales ascendantes</strong> intégrées dans
          la lettre. Ce ne sont pas des décorations. Ce sont des ailes. Et ces
          ailes racontent une histoire de vingt ans.
        </p>
        <p>
          L&apos;aile dans le T vient directement de l&apos;identité{" "}
          <em>Wings of Happiness</em>, introduite par SK Telecom en 2005. Quand
          SK Telecom T1 est devenu simplement T1 en octobre 2019, les
          designers ont fait un choix précis :{" "}
          <strong>garder l&apos;aile, supprimer le cercle.</strong> Le nom
          raccourcit, l&apos;héritage reste.
        </p>
      </Prose>

      <PullQuote>
        Le logo travaille à deux niveaux de lecture.
        <br />
        <span className="text-fog">
          Pour un fan averti, c&apos;est évident. Pour un nouveau venu,
          c&apos;est juste un beau logo.
        </span>
      </PullQuote>

      <Prose>
        <p>
          T1 démontre une approche que peu d&apos;équipes osent.{" "}
          <strong>Le minimalisme chargé d&apos;archives.</strong> Le palmarès
          de T1 — six titres Worlds, dont les deux derniers en 2024 et 2025 —
          légitime ce logo qui semble simple mais qui porte un legs.
        </p>
      </Prose>

      <ForceLimit
        force="Profondeur narrative invisible au premier regard, double lecture que seuls les initiés saisissent."
        limite="L'héritage doit exister. Tu ne peux pas coder une histoire que tu n'as pas encore vécue."
      />

      {/* --- Approche 3 : G2 --- */}
      <H3 accent="auto">Approche 3 · Le récit illustratif (G2 Esports)</H3>

      <Prose>
        <p>
          G2 Esports a fait l&apos;inverse exact de KC.{" "}
          <strong>Pas du tout la simplicité.</strong> Un logo riche, narratif,
          illustratif, qui raconte tout immédiatement.
        </p>
        <p>
          Quand Carlos « Ocelote » Rodriguez a fondé l&apos;équipe en 2014, il
          cherchait un symbole qui incarne ce qu&apos;il voulait construire. Il
          a choisi <strong>le samurai. Patient, fort, sage.</strong> Le logo G2
          mélange une silhouette de samurai avec une typographie dessinée à la
          main, et porte une cicatrice de bataille diagonale qui symbolise le
          combat mené pour arriver au sommet.
        </p>
        <p>
          Ce qui rend ce logo défendable, c&apos;est que la métaphore samurai
          est tenue dans le temps. Si Carlos avait choisi un samurai juste pour
          faire cool, ça ne marcherait pas.{" "}
          <strong>Il a construit dix ans de communication autour de ce concept.</strong>{" "}
          En 2025, G2 célèbre ses dix ans avec deux éditions de jerseys qui
          prolongent l&apos;imaginaire samurai jusque dans le merch.
        </p>
      </Prose>

      <ForceLimit
        force="Narrativité immédiate, logo-monde qui génère tout un univers de communication."
        limite="La complexité visuelle rend la déclinaison difficile. Il faut une version simplifiée pour les petits formats, et tenir la métaphore sur des années."
      />

      {/* --- Outil de décision --- */}
      <H3>Quelle approche choisir ?</H3>
      <Prose>
        <p>
          Avant de dessiner quoi que ce soit, réponds à six questions. Chaque
          oui t&apos;oriente vers une approche. Si tu as plusieurs oui pour des
          approches différentes, lis les limites de chacune avant de trancher.
        </p>
        <p className="text-fog text-sm">
          Note : plusieurs oui valides indiquent que ton cas est hybride.
          Commence par la simplicité radicale, tu pourras enrichir par couches
          ensuite. <em>L&apos;inverse fonctionne rarement.</em>
        </p>
      </Prose>

      <DecisionMatrix />

      <WarningBlock label="Piège à éviter · Le logo agressif générique">
        <p>
          KC avec sa simplicité radicale, T1 avec son héritage codé, G2 avec
          son récit illustratif. Trois approches opposées, et personne
          n&apos;est tombé dans le même piège.
        </p>
        <p>
          Ce piège, c&apos;est <strong>le logo agressif générique</strong>. Tu
          le vois dans toutes les équipes Tier 3, dans les rebrands sans
          budget, dans les nouvelles structures qui veulent faire compétitif
          sans avoir réfléchi à ce qu&apos;elles racontent.
        </p>
        <ul>
          <li>Loup ou renard en flammes, vue de trois quarts, tracé en polygones géométriques.</li>
          <li>Aigle stylisé avec des éclairs sortant des ailes, en dégradé bleu-violet.</li>
          <li>Crâne avec un casque de gamer, en symétrie parfaite, couleur noir + néon vert.</li>
          <li>Dragon en vol, tracé en lignes fines, avec une orbite de particules autour de lui.</li>
        </ul>
        <p>
          <strong>La règle :</strong> si tu peux remplacer le nom de ton équipe
          par n&apos;importe quel autre nom d&apos;équipe esport sans que le
          logo paraisse incohérent, le logo est générique. Recommence.
        </p>
      </WarningBlock>

      <MethodList
        title="Ta méthode en cinq étapes"
        steps={[
          {
            title: "Le brief d'abord",
            body: "Une page maximum. Quelles valeurs, quelle audience, quels jeux. Cette étape détermine quelle approche te convient.",
          },
          {
            title: "Choisis ton approche avant de dessiner",
            body: "Simplicité radicale, héritage codé, ou récit illustratif. Cette décision change tout ce qui suit.",
          },
          {
            title: "Exploration large",
            body: "Trente directions visuelles dans l'approche choisie. Quantité avant qualité.",
          },
          {
            title: "Simplification ou enrichissement",
            body: "Si tu fais simple, élimine tout ce qui n'est pas indispensable. Si tu fais narratif, vérifie que chaque élément a un sens, pas juste une fonction décorative.",
          },
          {
            title: "Test réel sur cinq supports",
            body: "Favicon 24 px, jersey, overlay broadcast, écran de smartphone, mur d'arène. Un logo simple doit rester reconnaissable. Un logo complexe doit rester lisible.",
          },
        ]}
      />

      <HorsJV>
        Toute marque digitale qui doit choisir entre minimalisme et richesse
        narrative gagne à se poser trois questions avant l&apos;esthétique :
        ai-je un héritage à porter ? une histoire à raconter ? je parle par
        épure ou par récit ?
      </HorsJV>
    </ChapterSection>
  );
}

/* --- Helpers --- */

function LogoFigure({
  src,
  alt,
  kicker,
  caption,
  accent = "bone",
  invertWhite = false,
}: {
  src: string;
  alt: string;
  kicker: string;
  caption: string;
  accent?: "blood" | "t1" | "g2" | "bone";
  invertWhite?: boolean;
}) {
  const accentBorder = {
    blood: "border-blood/20",
    t1: "border-[#e2012d]/30",
    g2: "border-bone/15",
    bone: "border-bone/15",
  }[accent];
  const accentDot = {
    blood: "bg-blood",
    t1: "bg-[#e2012d]",
    g2: "bg-bone",
    bone: "bg-bone",
  }[accent];
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className={`my-10 md:-mx-12 bg-ink-2 border ${accentBorder} p-8 md:p-12 flex flex-col items-center`}
    >
      <div className="flex items-center gap-3 mb-8 self-start">
        <span className={`h-1.5 w-1.5 ${accentDot}`} />
        <span className="font-ui text-[0.7rem] uppercase tracking-[0.3em] text-fog">
          {kicker}
        </span>
      </div>
      <div
        className="relative w-[180px] h-[180px] md:w-[240px] md:h-[240px] mb-8"
        style={{
          filter: invertWhite
            ? "brightness(0) invert(1) drop-shadow(0 0 25px rgba(244,241,234,0.25))"
            : "drop-shadow(0 0 25px rgba(0,0,0,0.4))",
        }}
      >
        <Image src={src} alt={alt} fill sizes="240px" className="object-contain" />
      </div>
      <figcaption className="font-ui text-sm text-fog text-center max-w-md leading-snug">
        {caption}
      </figcaption>
    </motion.figure>
  );
}

function ForceLimit({ force, limite }: { force: string; limite: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="my-10 grid grid-cols-1 md:grid-cols-2 gap-3"
    >
      <div className="relative bg-ink-2 border-l-2 border-blood p-5 md:p-6 overflow-hidden group">
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background:
              "linear-gradient(120deg, rgba(200,29,37,0.08), transparent 60%)",
          }}
        />
        <div className="relative flex items-center gap-2 mb-3">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-blood">
            <path d="M2 7l3.5 3.5L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>
          <span className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-blood">
            Force
          </span>
        </div>
        <p className="relative text-sm md:text-base text-bone/90 leading-relaxed">{force}</p>
      </div>
      <div className="relative bg-ink-2 border-l-2 border-bone/15 p-5 md:p-6 overflow-hidden">
        <div className="flex items-center gap-2 mb-3">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-fog">
            <path d="M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
          </svg>
          <span className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-fog">
            Limite
          </span>
        </div>
        <p className="text-sm md:text-base text-fog leading-relaxed">{limite}</p>
      </div>
    </motion.div>
  );
}

function DecisionMatrix() {
  const questions = [
    { q: "Ton nom est-il court (1 à 3 caractères) ou très simple à dessiner ?", a: "Simplicité radicale" },
    { q: "Vises-tu une lecture mémoire en moins de 5 secondes ?", a: "Simplicité radicale" },
    { q: "As-tu un héritage de marque préexistant à préserver ?", a: "Héritage codé" },
    { q: "Ton organisation a-t-elle plus de 10 ans de palmarès ?", a: "Héritage codé" },
    { q: "Ton nom a-t-il une métaphore visuelle forte et défendable sur 10 ans ?", a: "Récit illustratif" },
    { q: "Veux-tu construire un univers visuel autour d'un personnage / animal / objet ?", a: "Récit illustratif" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="my-10 md:-mx-12 border border-bone/10 bg-ink-2/60"
    >
      <ol className="divide-y divide-bone/5">
        {questions.map((it, i) => (
          <li
            key={i}
            className="grid grid-cols-[3rem_1fr_auto] gap-4 items-center p-4 md:p-5"
          >
            <span className="font-display text-blood text-sm">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm md:text-base text-bone/90 leading-snug">
              {it.q}
            </span>
            <span className="font-ui text-[0.65rem] uppercase tracking-[0.25em] text-fog">
              → {it.a}
            </span>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}
