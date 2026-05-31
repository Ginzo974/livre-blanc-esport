"use client";

import {
  ChapterSection,
  Prose,
  H3,
  H4,
  Lead,
  PullQuote,
  MethodList,
  HorsJV,
  AsideNote,
} from "@/components/article/Article";
import { AppsShowcase } from "@/components/sections/AppsShowcase";

export function Chapter4() {
  return (
    <ChapterSection
      id="chap-4"
      number="04"
      kicker="Chapitre 4 · Le système 360"
      accent="blood"
      title={
        <>
          Un logo seul, c&apos;est un drapeau planté dans le vide.{" "}
          <span className="text-[var(--color-blood)]">Le système, c&apos;est le pays autour.</span>
        </>
      }
      subtitle="Typographie, jersey, broadcast, social, événement live, app communautaire, merch. C'est là que la majorité des équipes échouent."
    >
      <Lead>
        Un logo te donne un point d&apos;ancrage. Une palette te donne une
        émotion. Mais une équipe esport vit dans un système visuel complet.
      </Lead>

      <Prose>
        <p>
          Ce système comprend la typographie, les jerseys, les overlays de
          broadcast, les templates de réseaux sociaux, les événements live, les
          apps communautaires et le merch.
        </p>
        <p>
          C&apos;est dans le système que la majorité des équipes esport
          échouent. Elles passent six mois à dessiner un beau logo, puis elles
          improvisent tout le reste.{" "}
          <strong>
            Ce chapitre te montre comment les meilleures équipes du monde
            évitent ce piège.
          </strong>
        </p>
      </Prose>

      {/* Partie A : typographie */}
      <H3 accent="auto">Partie A · La typographie, la voix silencieuse</H3>
      <AsideNote audiences={["designer"]} />
      <Prose>
        <p>
          Tu lis la typographie d&apos;une équipe esport plus souvent que son
          logo. Sur les jerseys, c&apos;est elle qui porte le nom du joueur et
          son numéro. Sur le broadcast, c&apos;est elle qui affiche les scores.
          Sur les réseaux sociaux, c&apos;est elle qui structure chaque post.
        </p>
        <p>
          L&apos;esport a développé sa propre grammaire typographique.{" "}
          <strong>Sans-serif angulaires, géométriques, modernes.</strong>{" "}Très
          peu d&apos;équipes utilisent du serif (jugé trop classique) ou du
          script (illisible en broadcast). Le centre de gravité est la
          sans-serif moderne, déclinée en plusieurs personnalités.
        </p>
      </Prose>

      <H4>T1 · La typo asiatique épurée</H4>
      <Prose>
        <p>
          La sans-serif T1 a trois caractéristiques visibles.{" "}
          <strong>Un italique léger</strong>{" "}qui suggère le mouvement.{" "}
          <strong>Des lettres bien ouvertes</strong>{" "}(les espaces à
          l&apos;intérieur des lettres restent larges) qui gardent la lisibilité
          en petit.{" "}
          <strong>Des terminaisons droites</strong>{" "}qui durcissent le rythme.
          C&apos;est une typo qui parle peu mais qui parle ferme.
        </p>
        <p>
          Sur les jerseys Worlds 2025, en noir et or, cette typo se contente
          d&apos;écrire les noms des joueurs en lettres capitales. Pas de
          fioriture, pas de flag décoratif.{" "}
          <em>
            La force vient de l&apos;absence d&apos;effet. T1 a confiance dans
            son palmarès, sa typo aussi.
          </em>
        </p>
      </Prose>

      <H4>Team Vitality · La typo française dynamique</H4>
      <Prose>
        <p>
          Là où T1 retire pour donner du poids, Vitality ajoute du mouvement.
          Les caractères Vitality tendent vers la diagonale, l&apos;inclinaison,
          l&apos;élan. Ce sont des caractères qui semblent toujours en train de
          partir vers l&apos;avant.
        </p>
        <p>
          Cette typo dialogue avec l&apos;idée que le mot Vitality évoque.
          L&apos;énergie, le dynamisme, la vivacité.{" "}
          <strong>Elle prolonge le nom dans la lettre.</strong>
        </p>
      </Prose>

      <FontComparison />

      <PullQuote>
        Beaucoup d&apos;équipes choisissent une sans-serif italique extrême,
        agressive, type racing game des années 2000.{" "}
        <span className="text-bone">Toutes ces typos se ressemblent.</span>
      </PullQuote>

      {/* Partie B : écosystème */}
      <H3 accent="auto">Partie B · L&apos;écosystème 360</H3>

      <H4>Le jersey, objet culturel</H4>
      <Prose>
        <p>
          Le jersey d&apos;une équipe esport n&apos;est pas un uniforme
          sportif. C&apos;est un objet culturel optimisé pour deux contraintes
          contradictoires :{" "}
          <strong>être lisible en broadcast et être désirable en streetwear.</strong>
        </p>
        <p>
          Karmine Corp a illustré cette double contrainte en janvier 2026. Les
          jerseys 2026, développés avec Fulllife, utilisent un polyester
          recyclé FL NanoMatter, fabriqué au Portugal. Coupe boxy, col rond,
          inserts oversize. Sponsor Razer sur la manche droite.{" "}
          <em>Le résultat fonctionne en compétition et en street.</em>
        </p>
        <p>
          NAVI a fait un choix différent pour son Pro Kit Jersey 2026. Design
          intégrant glitch et digital noise construits à partir des formes de
          leurs trophées. Une couche graphique qui transforme le jersey en
          récit visuel sans rompre la palette jaune et noir. Vendu 90 dollars,
          avec un message thank-you fans sur l&apos;étiquette externe.
        </p>
      </Prose>

      <JerseysGrid />

      <H4>Les réseaux sociaux, terrain principal</H4>
      <Prose>
        <p>
          Une équipe esport vit majoritairement sur Twitter, Twitch, TikTok,
          Instagram, Discord. Si ton identité ne se décline pas proprement sur
          les cinq, <strong>ton équipe est invisible quatre jours sur sept</strong>.
        </p>
        <p>
          Le travail consiste à concevoir des templates qui maintiennent la
          marque sans répétition lassante.
        </p>
      </Prose>

      <H4>Le broadcast et l&apos;événement live</H4>
      <Prose>
        <p>
          Le broadcast est l&apos;événement principal d&apos;une équipe esport.
          Overlays, commentateurs en cam, animations de score, transitions,
          écrans de pause,{" "}
          <em>
            tout ce qui est entre les actions est aussi important que les
            actions elles-mêmes.
          </em>
        </p>
      </Prose>

      <BroadcastShot />

      <Prose>
        <p>
          Karmine Corp pousse cette logique plus loin en transformant ses
          matchs domicile en spectacles physiques. Le LEC Summer Roadtrip 2026
          se tient à l&apos;<strong>Adidas Arena de Paris</strong>, du 24 au
          26 juillet, contre Vitality, G2 et MKOI. La salle accueille jusqu&apos;à
          neuf mille personnes, avec stands partenaires, zones de démo,
          meet-and-greet joueurs.
        </p>
      </Prose>

      <ArenaShot />

      <H4>L&apos;app communautaire, deux philosophies françaises</H4>
      <Prose>
        <p>
          Longtemps, l&apos;app communautaire a été le territoire vacant de
          l&apos;esport. Vitality a ouvert la voie avec V.Hive, une app de
          gamification sur blockchain. Mais ce sont aujourd&apos;hui{" "}
          <strong>deux clubs français</strong>{" "}qui structurent le mieux le
          terrain, avec deux philosophies opposées.
        </p>
        <p>
          <strong>Karmine Corp</strong>{" "}mise sur le companion pragmatique.
          Prochain match du Blue Wall en un coup d&apos;œil, résultats
          multi-jeux, dernières vidéos, boutique intégrée, mini-jeu KWordle.
          Pas de blockchain, pas d&apos;esbroufe, un outil qui sert le fan au
          quotidien. <em>Ça marche.</em>
        </p>
        <p>
          <strong>Gentle Mates</strong>{" "}mise sur le contenu. L&apos;app
          prolonge leur ADN de créateurs : intégration YouTube (vidéos et
          replays), matchs en mode spoiler-free, calendrier personnalisable,
          et le M8Box qui arrive en 2026.{" "}
          <strong>L&apos;app comme média, pas comme jeu.</strong>
        </p>
      </Prose>

      <AppsShowcase />

      <H4>Le merch suit le modèle streetwear</H4>
      <Prose>
        <p>
          Drops limités, collaborations avec des marques mode, séries capsule.
          Gentle Mates s&apos;associe avec Lacoste, KC avec Fulllife et
          RhinoShield, NAVI vend son Pro Kit à 90 dollars en édition limitée.
        </p>
        <p>
          Un drop par saison, fort visuellement, limité dans le temps.{" "}
          <strong>
            La rareté manufacturée prolonge la marque dans le désir.
          </strong>
        </p>
      </Prose>

      <AsideNote audiences={["designer", "dirigeant"]} />
      <MethodList
        title="Ta méthode 360 en cinq étapes"
        steps={[
          {
            title: "Liste tes supports",
            body: "Jersey, trois plateformes sociales, overlay broadcast, page d'accueil du site, merch. Cinq familles minimum.",
          },
          {
            title: "Adapte palette et typo à chaque support",
            body: "Le jersey demande plus de contraste, le social plus de variations, le broadcast plus de lisibilité petit format.",
          },
          {
            title: "Trois templates par plateforme sociale",
            body: "Annonce de match, score, photo joueur. Si tu publies, tu suis ces templates. Pas d'improvisation au cas par cas.",
          },
          {
            title: "Crée un kit de marque téléchargeable",
            body: "Logo, typo, couleurs, exemples d'application. Sans kit, ta marque dérive en deux mois.",
          },
          {
            title: "Pense l'événement live dès le brief",
            body: "Même si tu ne le feras pas la première année, conçois le logo et la palette pour qu'ils fonctionnent en lumière géante.",
          },
        ]}
      />

      <HorsJV>
        Toute marque qui vit sur plusieurs supports simultanés gagne à concevoir
        son identité dès le départ pour ce système intégré, plutôt que pour un
        logo isolé qu&apos;on déclinera plus tard. Le « plus tard » arrive
        toujours trop vite et trop mal.
      </HorsJV>
    </ChapterSection>
  );
}

import { motion } from "motion/react";
import Image from "next/image";

function FontComparison() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="my-10 md:-mx-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-bone/10"
    >
      <div className="bg-ink-2 p-8 flex flex-col">
        <div className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-fog mb-6">
          T1 · Sans-serif épurée
        </div>
        <div className="font-display text-6xl text-bone tracking-tight leading-none mb-2">
          T1
        </div>
        <div className="font-display text-2xl text-bone tracking-tight mb-4">
          FAKER · KERIA
        </div>
        <p className="text-xs text-fog leading-relaxed mt-auto">
          Terminaisons droites. Contre-formes ouvertes. Italique léger qui
          suggère le mouvement sans crier.
        </p>
      </div>
      <div className="bg-ink-2 p-8 flex flex-col">
        <div className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-fog mb-6">
          Vitality · Diagonale dynamique
        </div>
        <div
          className="font-display text-6xl text-bone leading-none mb-2 tracking-tight"
          style={{ fontStyle: "italic", transform: "skewX(-10deg)" }}
        >
          VIT
        </div>
        <div
          className="font-display text-2xl text-bone mb-4 tracking-tight"
          style={{ fontStyle: "italic", transform: "skewX(-8deg)" }}
        >
          PERKZ · CARZZY
        </div>
        <p className="text-xs text-fog leading-relaxed mt-auto">
          Diagonale, inclinaison, élan. Les caractères partent vers
          l&apos;avant. Le mot prolonge le nom.
        </p>
      </div>
    </motion.div>
  );
}

/* ----------------------------- JERSEYS GRID ----------------------------- */

function JerseysGrid() {
  const jerseys = [
    {
      src: "/images/14-jersey-kc-fulllife.webp",
      team: "Karmine Corp × Fulllife",
      year: "2026",
      accent: "#e10600",
      note: "Polyester recyclé FL NanoMatter. Coupe boxy. Streetwear premium.",
    },
    {
      src: "/images/12-jersey-navi.webp",
      team: "NAVI Pro Kit",
      year: "2026",
      accent: "#ffe600",
      note: "Glitch + digital noise construits depuis les formes des trophées.",
    },
    {
      src: "/images/13-jersey-vitality.webp",
      team: "Team Vitality",
      year: "2026",
      accent: "#ffd200",
      note: "Jaune et noir français. Diagonale typographique en signature.",
    },
    {
      src: "/images/11-jersey-fnatic.webp",
      team: "Fnatic",
      year: "2026",
      accent: "#ff6700",
      note: "Orange tenu depuis 2004. Itération sans réécriture.",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8 }}
      className="my-10 md:-mx-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-bone/10"
    >
      {jerseys.map((j) => (
        <figure key={j.team} className="bg-ink-2 group overflow-hidden">
          <div className="relative aspect-[3/4] bg-ink">
            <Image
              src={j.src}
              alt={`Jersey ${j.team} ${j.year}`}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <figcaption className="p-3 md:p-4">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="h-1.5 w-1.5 shrink-0" style={{ background: j.accent }} />
              <span className="font-ui text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.25em] text-fog">
                {j.year}
              </span>
            </div>
            <div className="font-display text-bone text-sm md:text-base leading-tight mb-1">
              {j.team}
            </div>
            <p className="text-[0.7rem] md:text-xs text-fog leading-snug hidden md:block">
              {j.note}
            </p>
          </figcaption>
        </figure>
      ))}
    </motion.div>
  );
}

/* ----------------------------- BROADCAST SHOT ----------------------------- */

function BroadcastShot() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8 }}
      className="my-10 md:-mx-12 relative bg-ink-2 ring-1 ring-bone/10 overflow-hidden group"
    >
      <div className="relative aspect-[16/9]">
        <Image
          src="/images/17-broadcast-overlay-lec.png"
          alt="Overlay broadcast LEC en match"
          fill
          sizes="(min-width: 768px) 80vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        {/* Subtle scanline overlay for broadcast feel */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.6) 0 1px, transparent 1px 3px)",
          }}
        />
      </div>
      <figcaption className="p-4 md:p-5 flex items-start justify-between gap-4 border-t border-bone/5">
        <div className="flex items-start gap-3">
          <span className="block h-1.5 w-1.5 mt-1.5 shrink-0 bg-bone" />
          <p className="text-sm text-bone/85 leading-snug">
            Overlay LEC en match, kill feed, scoreboard, cam joueurs.
            Chaque pixel entre deux actions est un point de contact marque.
          </p>
        </div>
        <span className="font-ui text-[0.6rem] uppercase tracking-widest text-fog whitespace-nowrap">
          Broadcast
        </span>
      </figcaption>
    </motion.figure>
  );
}

/* ----------------------------- ARENA SHOT ----------------------------- */

function ArenaShot() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8 }}
      className="my-10 md:-mx-12 relative bg-ink-2 ring-1 ring-bone/10 overflow-hidden group"
    >
      <div className="relative aspect-[21/9]">
        <Image
          src="/images/16-adidas-arena-kc.jpg"
          alt="Adidas Arena Paris · LEC Summer Roadtrip Karmine Corp"
          fill
          sizes="(min-width: 768px) 80vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <figcaption className="p-4 md:p-5 flex items-start justify-between gap-4 border-t border-bone/5">
        <div className="flex items-start gap-3">
          <span className="block h-1.5 w-1.5 mt-1.5 shrink-0 bg-blood" />
          <p className="text-sm text-bone/85 leading-snug">
            Adidas Arena · LEC Summer Roadtrip · 24-26 juillet 2026.
            9 000 personnes physiquement présentes. La scène devient
            cathédrale temporaire de la marque.
          </p>
        </div>
        <span className="font-ui text-[0.6rem] uppercase tracking-widest text-fog whitespace-nowrap">
          Event live
        </span>
      </figcaption>
    </motion.figure>
  );
}
