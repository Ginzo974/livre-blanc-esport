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
import { motion } from "motion/react";
import Image from "next/image";

export function Chapter3() {
  return (
    <ChapterSection
      id="chap-3"
      number="03"
      kicker="Chapitre 3 · La couleur"
      accent="blood"
      title={
        <>
          La couleur,{" "}
          <span className="text-[var(--color-blood)]">langage émotionnel.</span>
        </>
      }
      subtitle="Un logo donne la silhouette de l'identité. La couleur lui donne le sang."
    >
      <Lead>
        Une équipe esport choisit ses couleurs pour deux raisons à la fois.
        Dire qui elle est et être lisible où elle joue.
      </Lead>

      <Prose>
        <p>
          Le premier point est émotionnel, culturel, parle au cœur. Le second
          est technique, broadcast, sans pardon. Une couleur qui sonne juste sur
          un mood board peut disparaître à l&apos;écran. Une couleur lisible peut
          être plate à l&apos;œil.{" "}
          <strong>
            Le métier consiste à trouver l&apos;équilibre.
          </strong>
        </p>
        <p>
          Trois équipes occupent ce chapitre. <strong>Fnatic</strong>{" "}avec un
          orange audacieux tenu pendant vingt et un ans.{" "}
          <strong>Karmine Corp</strong>{" "}avec une double palette de couleurs
          introduit en 2026. <strong>NAVI</strong>{" "}avec quinze ans de palette
          identique, par discipline plus que par paresse.
        </p>
      </Prose>

      {/* Fnatic */}
      <H3 accent="blood">Fnatic · L&apos;orange qui a duré vingt et un ans</H3>
      <AsideNote audiences={["curieux", "designer", "dirigeant"]} />
      <PaletteRow
        team="Fnatic"
        years="2004 → 21 ans"
        primary={{ hex: "#ff6700", label: "Fnatic Orange" }}
        secondary={{ hex: "#0a0a0a", label: "Noir signature" }}
        logo="/images/07-logo-fnatic.png"
        logoAlt="Logo Fnatic · orange iconique"
      />
      <Prose>
        <p>
          Fondée à Londres en 2004 par Sam et Anne Mathews, Fnatic est
          l&apos;une des plus vieilles structures de l&apos;esport.{" "}
          <strong>Vingt et un ans d&apos;existence.</strong>{" "}Et pendant ces
          vingt et un ans, deux couleurs n&apos;ont jamais bougé : orange et
          noir.
        </p>
        <p>
          C&apos;est un pari de longue durée que peu d&apos;équipes ont eu
          l&apos;audace de tenir. L&apos;orange est une couleur risquée. Trop
          saturée, elle vire au néon de pub des années 90. Mal contrastée, elle
          disparaît sur fond blanc et hurle sur fond noir. Beaucoup
          d&apos;équipes esport l&apos;évitent par sécurité.{" "}
          <strong>Fnatic l&apos;a embrassée et tenue.</strong>
        </p>
        <p>
          L&apos;orange Fnatic évoque la communication, l&apos;esprit
          d&apos;équipe, la chaleur d&apos;une compétition. Le noir
          contre-balance avec autorité, sophistication, confiance. Un binôme
          classique en design, mais peu d&apos;équipes esport l&apos;appliquent
          avec cette discipline.
        </p>
        <p>
          Fnatic a fait évoluer son logo trois fois en vingt et un ans. Premier
          logo manuscrit, inspiré de la sonorité du nom. Deuxième logo, affiné
          vers 2015, angles durcis, orange intensifié. Troisième logo, lancé en
          janvier 2020 : plus net, plus aiguisé, éléments décoratifs supprimés,
          géométrie raffinée. <em>À chaque rebrand, la palette est restée
          intacte.</em>
        </p>
      </Prose>

      <PullQuote
        accent="blood"
        author="Sam Mathews · CEO de Fnatic"
      >
        Un rebrand doit être une itération et un pas en avant,{" "}
        <span className="text-fog">pas une réécriture.</span>
      </PullQuote>

      <Prose>
        <p>
          Fnatic prouve qu&apos;une couleur audacieuse choisie tôt et tenue
          longtemps devient un héritage.{" "}
          <strong>L&apos;orange n&apos;est pas neutre, elle est risquée.</strong>{" "}
          Mais à force d&apos;apparaître depuis 2004, elle est devenue
          inséparable de Fnatic. Aucune autre équipe esport majeure ne peut
          prétendre à l&apos;orange aujourd&apos;hui sans être comparée à eux.
        </p>
      </Prose>

      {/* KC split */}
      <H3 accent="blood">Karmine Corp · La double palette de 2026</H3>
      <AsideNote audiences={["curieux", "dirigeant"]} />
      <PaletteRow
        team="Karmine Corp"
        years="Janvier 2026"
        primary={{ hex: "#e10600", label: "KC Red · LEC" }}
        secondary={{ hex: "#0036a7", label: "KC Blue · KCB" }}
        third={{ hex: "#f4f1ea", label: "Bone" }}
        logo="/images/04-kc-noir.png"
        logoAlt="Logo Karmine Corp"
        logoInvert
      />
      <Prose>
        <p>
          Pendant cinq ans, le K de Karmine Corp était bleu. Un bleu sérieux,
          presque officiel, qui fonctionnait comme couleur signature unique.
          Puis le <strong>7 janvier 2026</strong>, Kameto
          annonce en livestream une refonte qui sort de l&apos;ordinaire.
        </p>
        <p>
          KC adopte une <strong>palette double</strong>. Rouge pour
          l&apos;équipe LEC. Bleu pour KC Blue, le roster d&apos;académie qui
          joue en LFL et en LEC Versus.
        </p>
        <p>
          Ce choix est rare dans l&apos;esport. Là où la plupart des équipes
          utilisent une couleur primaire unique pour unifier toute la marque,{" "}
          <strong>
            KC utilise la couleur pour différencier ses propres rosters.
          </strong>{" "}
          Le rouge dit première équipe. Le bleu dit équipe satellite. Un fan
          qui regarde un match peut savoir, par la seule couleur du jersey, à
          quel niveau de structure il assiste.
        </p>
      </Prose>

      <PullQuote accent="blood">
        C&apos;est un <span className="text-[var(--color-blood)]">code couleur qui classe les équipes</span>.
        Comme une écurie de Formule 1 qui utiliserait deux décorations pour
        deux voitures d&apos;une même maison.
      </PullQuote>

      <Prose>
        <p className="text-fog text-sm italic">
          Note de prudence. Le raisonnement officiel de KC sur ce choix
          n&apos;est pas publié. Je traite ce double choix de couleur comme une
          observation personnelle, pas comme une intention déclarée.
        </p>
      </Prose>

      <KCSplitDuo />

      {/* NAVI */}
      <H3 accent="blood">NAVI · La constance comme stratégie</H3>
      <AsideNote audiences={["curieux", "dirigeant"]} />
      <PaletteRow
        team="NAVI"
        years="2011 → 15 ans"
        primary={{ hex: "#ffe600", label: "NAVI Yellow" }}
        secondary={{ hex: "#0a0a0a", label: "Black combat" }}
        logo="/images/08-logo-navi.png"
        logoAlt="Logo NAVI · Natus Vincere"
      />
      <Prose>
        <p>
          Depuis 2011, NAVI porte du jaune et du noir. <strong>Depuis quinze
          ans.</strong>{" "}À travers des dizaines de rosters, deux jeux principaux
          (Counter-Strike, Dota 2), des extensions multi-titres, des évolutions
          de logo, des changements de slogan, la palette n&apos;a jamais bougé.
        </p>
        <p>
          Dans une industrie où la moitié des équipes rebrand tous les deux
          ans, NAVI a fait un pari opposé. Le jaune et le noir sont devenus si
          associés à l&apos;équipe que tu peux les voir sur n&apos;importe quel
          support et identifier NAVI sans voir le logo.{" "}
          <em>C&apos;est ce que tu cherches quand tu construis une marque.</em>
        </p>
        <p>
          NAVI décrit son jaune comme <strong>défiant et cool</strong>, montrant
          l&apos;esprit combatif et le mood de victoire. Ce n&apos;est pas un
          jaune solaire ou amical, c&apos;est un jaune qui ne cède pas, qui
          surnage dans le noir, qui résiste à la compression vidéo des streams.
        </p>
        <p>
          Le jersey 2026 confirme la posture. NAVI a ajouté une couche graphique
          faite de glitch et de digital noise, construite à partir des formes
          de leurs trophées.{" "}
          <strong>
            La palette reste identique, mais la texture évolue.
          </strong>{" "}
          Discipline sur les couleurs, créativité dans le détail.
        </p>
      </Prose>

      {/* Synthèse */}
      <H3>Trois logiques, un piège à éviter</H3>
      <Prose>
        <p>
          Fnatic défend un orange audacieux par vingt et un ans de constance,
          en faisant évoluer son logo sans toucher aux couleurs. KC range ses
          équipes avec deux couleurs. NAVI garde la même palette depuis quinze
          ans, sans jamais en changer.
        </p>
        <p>
          Aucune des trois n&apos;est tombée dans le piège de couleur le plus
          courant de l&apos;esport :{" "}
          <strong>le noir avec un accent néon générique.</strong>{" "}Vert néon sur
          fond noir, violet électrique sur fond noir, cyan sur fond noir. Ces
          palettes saturent l&apos;industrie. Elles ne disent rien parce
          qu&apos;elles disent toutes la même chose.
        </p>
      </Prose>

      <ContrastTest />

      <MethodList
        title="Ta méthode en cinq étapes"
        steps={[
          {
            title: "L'audience d'abord",
            body: "Premium adulte, communauté locale ou niche compétitive ? Les trois appellent trois palettes différentes.",
          },
          {
            title: "Deux à trois couleurs maximum",
            body: "Une primaire forte, une secondaire de contraste, éventuellement un accent. Tout ajout au-delà dilue la mémorisation.",
          },
          {
            title: "Test sur trois fonds",
            body: "Fond noir (le stream), fond blanc (le site), fond gris (l'overlay). Si ta couleur disparaît sur l'un des trois, change-la.",
          },
          {
            title: "Confronte à dix concurrents",
            body: "Si ta palette ressemble à plus de trois équipes de ta scène, recommence. Se distinguer par la couleur est le premier sport de l'esport.",
          },
          {
            title: "Verrouille publiquement",
            body: "Publie ta palette dans un guide de marque. Si tu changes de couleur tous les six mois, tu n'as pas de marque, tu as une humeur.",
          },
        ]}
      />

      <HorsJV>
        Toute marque digitale qui apparaît sur écran compressé (apps, broadcast,
        intégrations vidéo) gagne à appliquer le test des trois fonds. Une
        couleur qui ne survit pas à la compression est une couleur fragile,
        quelle que soit sa beauté sur un mood board imprimé.
      </HorsJV>
    </ChapterSection>
  );
}

/* --- Palette row : grand swatch primaire + secondaire + tertiaire optionnel --- */
function PaletteRow({
  team,
  years,
  primary,
  secondary,
  third,
  logo,
  logoAlt,
  logoInvert = false,
}: {
  team: string;
  years: string;
  primary: { hex: string; label: string };
  secondary: { hex: string; label: string };
  third?: { hex: string; label: string };
  logo?: string;
  logoAlt?: string;
  /** Invert the logo to white (for monochrome PNGs that are black) */
  logoInvert?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="my-10 md:-mx-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-bone/10 min-h-[180px]"
    >
      <div className="md:col-span-1 col-span-2 bg-ink-2 p-5 flex flex-col justify-between gap-3">
        <span className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-fog">
          {years}
        </span>
        {logo && (
          <div
            className="relative w-12 h-12 self-start"
            style={logoInvert ? { filter: "brightness(0) invert(1)" } : undefined}
          >
            <Image src={logo} alt={logoAlt ?? team} fill sizes="48px" className="object-contain" />
          </div>
        )}
        <span className="font-display text-2xl text-bone leading-tight">{team}</span>
      </div>
      <Swatch hex={primary.hex} label={primary.label} large />
      <Swatch hex={secondary.hex} label={secondary.label} />
      {third ? (
        <Swatch hex={third.hex} label={third.label} />
      ) : (
        <div className="hidden md:flex bg-ink-2 p-5 items-end">
          <span className="font-ui text-[0.65rem] uppercase tracking-widest text-fog">
            Discipline · binôme tenu
          </span>
        </div>
      )}
    </motion.div>
  );
}

function Swatch({
  hex,
  label,
  large,
}: {
  hex: string;
  label: string;
  large?: boolean;
}) {
  const isDark = hex.toLowerCase() === "#0a0a0a";
  return (
    <div
      className={`relative p-4 md:p-5 flex flex-col justify-between ${
        large ? "md:col-span-1 row-span-1 md:row-auto" : ""
      }`}
      style={{ background: hex }}
    >
      <span
        className="font-ui text-[0.65rem] tracking-widest"
        style={{ color: isDark ? "rgba(244,241,234,0.6)" : "rgba(10,10,10,0.65)" }}
      >
        {hex.toUpperCase()}
      </span>
      <span
        className="font-display text-sm md:text-base mt-6"
        style={{ color: isDark ? "#f4f1ea" : "#0a0a0a" }}
      >
        {label}
      </span>
    </div>
  );
}

function ContrastTest() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="my-14 md:-mx-12"
    >
      <div className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-fog mb-4">
        Le test des 3 fonds
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bone/10">
        {[
          { bg: "#0a0a0a", label: "Le stream", sub: "Fond noir" },
          { bg: "#f4f1ea", label: "Le site", sub: "Fond clair" },
          { bg: "#3a3a3a", label: "L'overlay", sub: "Fond gris" },
        ].map((f) => (
          <div
            key={f.label}
            className="p-10 flex flex-col items-center justify-center min-h-[160px]"
            style={{ background: f.bg }}
          >
            <div
              className="relative w-[85%] max-w-[300px] mb-4"
              style={{ aspectRatio: "1131 / 148" }}
            >
              <Image
                src="/images/logo-hunters/logo-typo-rouge-crop.png"
                alt="Wordmark HUNTERS rouge"
                fill
                sizes="300px"
                className="object-contain"
              />
            </div>
            <div
              className="font-ui text-[0.65rem] uppercase tracking-[0.25em]"
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

/* --- KC Split Duo : 2 photos rouges/bleues côte à côte = preuve visuelle de la taxonomie chromatique --- */
function KCSplitDuo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8 }}
      className="my-12 md:-mx-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-bone/10"
    >
      {/* LEC main team, rouge */}
      <figure className="relative bg-ink-2 overflow-hidden group">
        <div className="relative aspect-[16/10]">
          <Image
            src="/images/18-kc-roster-rouge.avif"
            alt="Roster LEC Karmine Corp 2026 en jerseys rouges"
            fill
            quality={90}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 50%, rgba(225,6,0,0.18) 100%)",
            }}
          />
        </div>
        <figcaption className="p-5 border-t border-bone/5 flex items-start gap-4">
          <span className="block h-3 w-3 mt-1 shrink-0" style={{ background: "#e10600" }} />
          <div>
            <div className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-[#e10600] mb-1">
              LEC Roster 2026
            </div>
            <p className="text-sm text-bone/85 leading-snug">
              Équipe principale. Le rouge dit première équipe.
            </p>
          </div>
        </figcaption>
      </figure>

      {/* KCB academy, bleu */}
      <figure className="relative bg-ink-2 overflow-hidden group">
        <div className="relative aspect-[16/10]">
          <Image
            src="/images/19-kc-roster-bleu.jpg"
            alt="Roster KCB Karmine Corp Blue 2026 en jerseys bleus"
            fill
            quality={90}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 50%, rgba(0,54,167,0.22) 100%)",
            }}
          />
        </div>
        <figcaption className="p-5 border-t border-bone/5 flex items-start gap-4">
          <span className="block h-3 w-3 mt-1 shrink-0" style={{ background: "#0036a7" }} />
          <div>
            <div className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-blood)] mb-1">
              KCB en LEC · Académie
            </div>
            <p className="text-sm text-bone/85 leading-snug">
              Roster satellite. Le bleu dit équipe d&apos;académie.
            </p>
          </div>
        </figcaption>
      </figure>
    </motion.div>
  );
}
