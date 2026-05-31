"use client";

import {
  Prose,
  H3,
  H4,
  Lead,
  PullQuote,
  AsideNote,
} from "@/components/article/Article";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { BrandBookConstruction } from "@/components/sections/BrandBookConstruction";
import { ImageCard } from "@/components/ImageCard";

export function Chapter6() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["8%", "-10%"]);

  return (
    <section
      id="chap-6"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden py-28 md:py-36"
      style={{
        background:
          "linear-gradient(to bottom, #0a0a0a, #1a0303 35%, #0a0a0a 75%, #0a0a0a)",
      }}
    >
      {/* Background blood vignette + claw marks */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(200,29,37,0.16), transparent 70%)",
          }}
        />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          viewBox="0 0 1200 1200"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <g stroke="#c81d25" strokeWidth="2" fill="none">
            <path d="M -50 100 L 250 1100" />
            <path d="M 100 50 L 400 1150" />
            <path d="M 250 80 L 550 1120" />
            <path d="M 700 90 L 1000 1120" />
            <path d="M 850 50 L 1150 1100" />
            <path d="M 1000 100 L 1300 1150" />
          </g>
        </svg>
      </motion.div>

      <div className="relative mx-auto max-w-3xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-display text-blood text-sm tracking-widest">
              07
            </span>
            <span className="h-px w-16 bg-blood" />
            <span className="font-ui text-blood text-[0.7rem] uppercase tracking-[0.3em]">
              Chapitre 6 · La méthode en action
            </span>
          </div>
          <h2 className="sr-only">HUNTERS</h2>
          <div
            className="relative w-full max-w-[560px]"
            style={{
              aspectRatio: "1131 / 148",
              filter: "drop-shadow(0 0 40px rgba(200,29,37,0.35))",
            }}
            aria-hidden
          >
            <Image
              src="/images/logo-hunters/logo-typo-rouge-crop.png"
              alt="HUNTERS"
              fill
              priority
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-contain object-left"
            />
          </div>
          <p className="mt-6 text-lg md:text-xl text-bone/80 leading-snug max-w-2xl">
            Une équipe que j&apos;invente, pas pour exister demain, mais pour
            démontrer qu&apos;une identité d&apos;équipe esport peut se
            construire avec discipline, étape par étape, sans rien copier des
            autres.
          </p>
        </motion.div>

        <Prose>
          <Lead>
            Tout le livre s&apos;arrête à la théorie si je ne te montre pas la
            méthode en action.
          </Lead>
          <p>
            Ce dernier chapitre applique la roadmap du chapitre 5 sur une
            équipe fictive conçue de zéro. Je l&apos;appelle HUNTERS.
          </p>
        </Prose>

        {/* HUNTERS logo big */}
        <motion.div style={{ y: logoY }} className="my-14 flex justify-center">
          <HuntersLogoSVG />
        </motion.div>

        <H3 accent="blood">Étape 1 · Le brief en une page</H3>
        <Prose>
          <ul>
            <li>
              <strong>Jeu principal :</strong>{" "}League of Legends, avec ambition
              d&apos;arriver en LEC à moyen terme.
            </li>
            <li>
              <strong>Valeurs centrales :</strong>{" "}la meute solidaire dans
              l&apos;effort, mais redoutable face à l&apos;adversaire. La
              poursuite collective de l&apos;objectif sans qu&apos;aucun joueur
              ne soit laissé en arrière.
            </li>
            <li>
              <strong>Audience cible :</strong>{" "}joueurs et spectateurs
              francophones de 18 à 35 ans, qui veulent appartenir à un groupe
              qui chasse ensemble plutôt qu&apos;à une équipe de solo-carries.
            </li>
            <li>
              <strong>Positionnement :</strong>{" "}l&apos;esport vu comme une
              meute, pas comme un alignement d&apos;individus. HUNTERS assume
              une esthétique prédatrice, pas pour faire peur, pour exprimer
              que le collectif est plus fort que la somme des joueurs.
            </li>
            <li>
              <strong>Mot fondateur :</strong>{" "}hunters = chasseurs, poursuite,
              meute. <em>Le nom est sa thèse.</em>
            </li>
          </ul>
        </Prose>

        <H3 accent="blood">Étape 2 · Le logo</H3>
        <AsideNote audiences={["designer"]} />
        <Prose>
          <p>
            Selon l&apos;outil de décision du chapitre 2 : le nom HUNTERS a une
            métaphore centrale forte et documentée, l&apos;équipe peut tenir
            la narrative sur 5 ans.{" "}
            <strong>L&apos;approche retenue est le récit illustratif</strong>,
            plus proche de G2 que de la simplicité radicale de KC. Le logo
            assume sa complexité pour porter immédiatement un sens.
          </p>
          <p>
            Ce qu&apos;on voit dans la version finale : au centre,{" "}
            <strong>une lance effilée descendante</strong>, comme une déchirure
            laissée par une griffure. Trois pointes ascendantes qui encadrent
            la lance et forment l&apos;arête supérieure. De part et d&apos;autre,
            des extensions latérales en griffure qui composent{" "}
            <strong>deux H</strong>{" "}quand on prend du recul.
          </p>
          <p>
            Le double H est subtil. Il apparaît seulement après que l&apos;œil
            ait traversé l&apos;effet général de griffure. C&apos;est le même
            type de double lecture que l&apos;aile cachée dans le T de T1, mais
            dans un autre style. Dans les espaces vides entre la lance centrale
            et les pointes latérales, on peut deviner{" "}
            <strong>des yeux de chasseur</strong>,{" "}pas frontaux, pas
            explicites, plutôt suggérés par les espaces noirs entre les
            éléments rouges. <em>Le logo te regarde autant que tu le regardes.</em>
          </p>
          <p>
            La symétrie verticale parfaite équilibre l&apos;agressivité des
            griffures. Sans cette symétrie, l&apos;ensemble serait chaotique.
            Avec elle, le chaos prend une forme stable.
          </p>
        </Prose>

        <div className="my-10 border border-blood/30 bg-blood/5 p-6">
          <div className="font-display text-blood text-[0.7rem] tracking-[0.3em] mb-3">
            CONTRAINTE DE L&apos;APPROCHE ILLUSTRATIVE
          </div>
          <p className="text-sm text-bone/85 leading-relaxed">
            Le logo a des détails fins (pointes effilées, griffures étroites).
            À 24 px, ces détails se compressent. Une{" "}
            <strong>version simplifiée pour les petits formats</strong>{" "}est
            obligatoire : double H et effet griffure conservés, nombre de
            pointes réduit. C&apos;est la même discipline qu&apos;a appliquée
            G2 avec son samurai.
          </p>
        </div>
      </div>

      {/* Full-bleed brand book : preuve de rigueur design system */}
      <BrandBookConstruction />

      <div className="relative mx-auto max-w-3xl px-6 md:px-8">
        <H3 accent="blood">Étape 3 · La palette</H3>
        <AsideNote audiences={["designer", "curieux"]} />
        <Prose>
          <p>
            <strong>Rouge sang. Noir profond. Et c&apos;est tout, ou presque.</strong>
          </p>
        </Prose>

        <HuntersPalette />

        <Prose>
          <p>
            <strong>Rouge sang</strong>{" "}comme couleur primaire. Pas un rouge
            corporate, pas un rouge ketchup. Un rouge dense qui évoque la trace
            laissée par la griffure, la marque du prédateur. Le rouge est codé
            « ennemi » dans le moteur de LoL, et HUNTERS l&apos;assume.{" "}
            <em>L&apos;équipe se présente comme l&apos;adversaire à craindre.</em>
          </p>
          <p>
            <strong>Noir profond</strong>{" "}comme fond et ancre. La nuit pendant
            la chasse, l&apos;invisibilité du prédateur avant l&apos;embuscade.
            Le noir n&apos;est pas une absence de couleur. C&apos;est le
            contraste qui fait exister le rouge.
          </p>
          <p>
            Cette palette pose un risque à reconnaître.{" "}
            <strong>
              Le rouge sur noir est ultra-saturé en esport (FaZe Clan,
              Sentinels, OG).
            </strong>{" "}
            Pour ne pas être confondu avec eux, HUNTERS compense par la
            singularité de son traitement graphique : la griffure rouge
            n&apos;est pas un rouge plat, elle est déchirée, dynamique, jamais
            lisse. <em>C&apos;est cette texture qui rend HUNTERS reconnaissable
            au-delà de la couleur.</em>
          </p>
        </Prose>

        <H3 accent="blood">Étape 4 · La typographie</H3>
        <AsideNote audiences={["designer"]} />
        <Prose>
          <p>
            HUNTERS travaille avec <strong>deux polices</strong>, chacune avec
            un rôle clair. Une police de titre pour la marque, une police de
            corps pour tout le reste.
          </p>
          <p>
            <strong>Quantix</strong>{" "}porte le logo et les titres. Une
            sans-serif aux angles vifs et aux terminaisons coupées net : ses
            verticales tendues prolongent l&apos;effet griffure du logo. C&apos;est
            la voix forte de la marque, celle qu&apos;on lit avec le souffle
            court.
          </p>
          <p>
            <strong>Overused Grotesk</strong>{" "}prend le relais pour le corps de
            texte. Plus neutre, très lisible à petite taille, elle laisse Quantix
            briller sur les titres sans jamais fatiguer l&apos;œil sur les
            paragraphes. Le duo classique : une police qui claque, une police
            qui se lit.
          </p>
        </Prose>

        <FontSpecimen />

        <Prose>
          <p>
            Concrètement : les terminaisons des lettres sont coupées droites
            avec un biseau qui rappelle la pointe d&apos;une lame. Les
            verticales sont fermes, presque tendues. Les lettres restent bien
            ouvertes pour que HUNTERS reste lisible même compressé.{" "}
            <strong>L&apos;esprit général est martial, pas accueillant.</strong>
          </p>
        </Prose>

        <PullQuote accent="blood">
          HUNTERS doit se lire avec le souffle court.{" "}
          <span className="text-fog">Pas avec la voix douce.</span>
        </PullQuote>

        <H3 accent="blood">Étape 5 · L&apos;écosystème 360</H3>

        <H4>Le jersey</H4>
        <Prose>
          <p>
            Noir dominant, HUNTERS et logo en rouge sang sur le torse. Numéro
            et handle du joueur dans le haut du dos, également en rouge. Un{" "}
            <strong>patch meute</strong>{" "}discret sur la manche gauche, symbole
            de l&apos;appartenance collective, pas du joueur individuel. Coupe
            contemporaine, ni trop ample ni trop sportif, inspirée de la
            collaboration Fulllife de KC en termes de matière et de
            positionnement streetwear.
          </p>
        </Prose>

        <div className="my-10 md:-mx-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-blood/20">
          <ImageCard
            src="/images/29-hunters-jersey-product.png"
            alt="Jersey HUNTERS 2026 · vue produit"
            kicker="Jersey · Produit"
            caption="Noir dominant, griffure rouge sang, logo brodé. Le loup hurlant en filigrane."
            accent="blood"
            aspect="4/5"
            fit="contain"
            frame="light"
          />
          <ImageCard
            src="/images/27-hunters-jersey-street.png"
            alt="Jersey HUNTERS porté en streetwear"
            kicker="Jersey · Streetwear"
            caption="Pensé pour la scène ET la rue. L'objet culturel, pas l'uniforme."
            accent="blood"
            aspect="4/5"
          />
        </div>

        <H4>Réseaux sociaux · Trois templates fixes</H4>
        <SocialTemplates />

        <H4>Broadcast overlay</H4>
        <Prose>
          <p>
            Noir dominant en bas, rouge pour les éléments interactifs (kills,
            scores, objectifs). L&apos;effet griffure peut apparaître
            discrètement dans les transitions, jamais sur l&apos;overlay
            principal.{" "}
            <strong>
              La lisibilité du gameplay prime sur l&apos;esthétique de la
              marque.
            </strong>
          </p>
        </Prose>

        <div className="my-10 md:-mx-12">
          <ImageCard
            src="/images/28-hunters-stage.png"
            alt="L'équipe HUNTERS en compétition sur scène"
            kicker="Broadcast · Compétition"
            caption="La meute en match. Jerseys, fond de scène, identité cohérente jusqu'en cabine."
            accent="blood"
            aspect="16/10"
          />
        </div>

        <H4>Merch · Phase 1</H4>
        <Prose>
          <p>
            Un drop par saison, en collaboration avec une marque française de
            lifestyle à définir. Hoodies noirs avec logo rouge brodé.
            Casquettes minimalistes. Éditions limitées, esthétique streetwear
            premium contenu. L&apos;app communautaire arrive après la
            troisième saison,{" "}
            <em>si la meute l&apos;appelle.</em>
          </p>
        </Prose>
      </div>

      {/* Team shot, full-bleed climax : "voici la meute" */}
      <motion.figure
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="relative w-screen left-1/2 -translate-x-1/2 my-16 md:my-24"
      >
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
          <Image
            src="/images/26-hunters-team.png"
            alt="L'équipe HUNTERS au complet · la meute"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 45%)",
            }}
          />
          <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-center">
            <span className="font-hunter font-bold uppercase text-bone text-[clamp(1.25rem,2.6vw,2rem)] tracking-tight leading-tight">
              Une équipe qui n&apos;existe pas.{" "}
              <span className="text-blood">Et qui tient debout.</span>
            </span>
          </figcaption>
        </div>
      </motion.figure>

      <div className="relative mx-auto max-w-3xl px-6 md:px-8">
        <H3>Ce que HUNTERS démontre</H3>
        <Prose>
          <p>
            HUNTERS est une équipe qui n&apos;existe pas. Pourtant, en suivant
            la méthode du chapitre 5, elle a :
          </p>
          <ul>
            <li>un nom avec une histoire,</li>
            <li>un logo bâti sur le récit illustratif,</li>
            <li>une palette assumée et testée sur trois fonds,</li>
            <li>une typographie qui dialogue avec ses valeurs (Quantix pour le titre, Overused Grotesk pour le corps),</li>
            <li>un système 360 qui se décline cohéremment.</li>
          </ul>
          <p>
            Le logo n&apos;est pas simple, mais il n&apos;est jamais gratuit :
            chaque trait a une intention, chaque pointe une fonction. Le rouge
            sur noir aurait pu se fondre dans la masse ; la texture de griffure
            le rend reconnaissable, et le double H ancre l&apos;équipe dans le
            symbole.
          </p>
        </Prose>

        <PullQuote accent="blood">
          Une équipe qui n&apos;existe pas, mais dont l&apos;identité tient
          parce qu&apos;elle suit une méthode.{" "}
          <span className="text-fog">C&apos;est tout l&apos;enjeu.</span>
        </PullQuote>

        <Prose>
          <p className="text-fog italic">
            C&apos;est tout ce que ce livre voulait te dire.
          </p>
        </Prose>
      </div>
    </section>
  );
}

function HuntersLogoSVG() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-[200px] md:w-[240px]"
      style={{ filter: "drop-shadow(0 0 60px rgba(200,29,37,0.45))" }}
    >
      <div className="relative w-full" style={{ aspectRatio: "665 / 832" }}>
        <Image
          src="/images/logo-hunters/hunters-rouge-crop.png"
          alt="Logo HUNTERS · trois lances ascendantes encadrées par des griffures formant un double H"
          fill
          sizes="(min-width: 768px) 240px, 200px"
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}

function HuntersPalette() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="my-10 md:-mx-12 grid grid-cols-2 gap-px bg-bone/10 min-h-[200px]"
    >
      <div className="p-6 md:p-8 flex flex-col justify-between" style={{ background: "#c81d25" }}>
        <span className="font-ui text-[0.65rem] uppercase tracking-widest" style={{ color: "rgba(244,241,234,0.85)" }}>
          #C81D25
        </span>
        <span className="font-hunter font-bold text-2xl text-bone">ROUGE SANG</span>
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-between bg-ink">
        <span className="font-ui text-[0.65rem] uppercase tracking-widest text-fog">
          #0A0A0A
        </span>
        <span className="font-hunter font-bold text-2xl text-bone">NOIR PROFOND</span>
      </div>
    </motion.div>
  );
}

function FontSpecimen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="my-10 md:-mx-12 bg-ink-2 border border-blood/20 p-8 md:p-12"
    >
      {/* --- QUANTIX : police de titre --- */}
      <div className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-blood mb-4">
        Quantix · Police de titre
      </div>
      {/* Wordmark blanc (Quantix) sur fond foncé */}
      <div
        className="relative w-full max-w-[520px] mb-5"
        style={{ aspectRatio: "1131 / 148" }}
      >
        <Image
          src="/images/logo-hunters/logo-typo-blanc-crop.png"
          alt="HUNTERS"
          fill
          sizes="(min-width: 768px) 520px, 100vw"
          className="object-contain object-left"
        />
      </div>
      <div className="font-hunter text-2xl text-fog tracking-wider mb-3" style={{ fontWeight: 800 }}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-10">
        {["VIPER", "RAVEN", "FANG", "WRAITH", "SHADE", "TALON"].map((p) => (
          <span
            key={p}
            className="font-hunter text-base text-bone tracking-wide"
            style={{ fontWeight: 800 }}
          >
            {p}
          </span>
        ))}
      </div>

      {/* --- OVERUSED GROTESK : police de corps --- */}
      <div className="border-t border-bone/10 pt-8">
        <div className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-fog mb-4">
          Overused Grotesk · Police de corps
        </div>
        <p className="font-overused text-bone text-lg md:text-xl leading-relaxed max-w-2xl mb-3">
          La meute chasse ensemble. Aucun joueur n&apos;est laissé en arrière.
          Le collectif est plus fort que la somme des individus.
        </p>
        <p className="font-overused text-fog text-sm tracking-wide">
          abcdefghijklmnopqrstuvwxyz · 0123456789 · &amp; ! ?
        </p>
      </div>
    </motion.div>
  );
}

function SocialTemplates() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="my-10 md:-mx-12 grid grid-cols-1 md:grid-cols-3 gap-3"
    >
      <Template kicker="ANNONCE" title="LA MEUTE CHASSE CE SOIR" sub="vs. T1 · 21:00 CET" />
      <Template kicker="SCORE" title="3 - 1" sub="HUNTERS vs. KARMINE" big />
      <Template kicker="JOUEUR" title="VIPER" sub="ADC · Top fragger" />
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
    <div className="aspect-[4/5] relative bg-ink-2 border border-blood/20 p-5 flex flex-col justify-between overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 30% 20%, rgba(200,29,37,0.4), transparent 60%)",
        }}
      />
      <div className="relative font-ui text-[0.6rem] uppercase tracking-[0.3em] text-blood">
        / {kicker}
      </div>
      <div className="relative">
        <h4 className={`font-hunter font-bold text-bone leading-none mb-2 ${big ? "text-6xl" : "text-2xl"}`}>
          {title}
        </h4>
        <p className="text-fog text-[0.65rem] uppercase tracking-widest">{sub}</p>
      </div>
      <div className="relative flex items-center justify-between text-[0.55rem] uppercase tracking-widest text-fog">
        <span>HUNTERS · 2026</span>
        <span className="font-hunter text-blood">/H</span>
      </div>
    </div>
  );
}
