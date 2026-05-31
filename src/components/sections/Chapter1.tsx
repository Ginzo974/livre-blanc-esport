"use client";

import {
  ChapterSection,
  Prose,
  H3,
  H4,
  Lead,
  PullQuote,
  HorsJV,
  AsideNote,
} from "@/components/article/Article";
import { ImageCard } from "@/components/ImageCard";
import Image from "next/image";
import { motion } from "motion/react";

export function Chapter1() {
  return (
    <ChapterSection
      id="chap-1"
      number="02"
      kicker="Chapitre 1"
      accent="kc-blue-bright"
      title={
        <>
          L&apos;esport n&apos;est pas un sport{" "}
          <span className="text-[var(--color-kc-blue-bright)]">comme un autre.</span>
        </>
      }
      subtitle="Le sport classique a eu un siècle pour optimiser son visuel. L'esport en a eu quinze."
    >
      <Lead>Imagine deux soirées de match.</Lead>

      <Prose>
        <p>
          La première, tu regardes le PSG jouer à domicile. Le maillot bleu et
          rouge, le logo sur la poitrine, les supporters en tribune avec leurs
          écharpes. Tout fait sens. La caméra dézoome sur les drapeaux et on
          voit la Tour Eiffel au loin. L&apos;identité visuelle du club, tu la
          lis en quatre secondes parce qu&apos;elle existe depuis 1970, que tu
          l&apos;as vue cent fois, et qu&apos;elle ressemble à toutes les autres
          identités de clubs de foot français.
        </p>
      </Prose>

      <div className="my-10 md:-mx-12">
        <ImageCard
          src="/images/02-stade-psg.webp"
          alt="Le Parc des Princes, stade du Paris Saint-Germain"
          kicker="Parc des Princes · 1970"
          caption="50 000 personnes physiquement présentes. Le logo lu à trente mètres. Un siècle de codes éprouvés."
          accent="kc-blue"
          aspect="16/10"
        />
      </div>

      <Prose>
        <p>
          La seconde, tu regardes Karmine Corp jouer en LEC. Pas de tribunes
          physiques, ou plutôt si : une arène Twitch. Le chat qui scrolle à
          droite de l&apos;écran, les emotes qui défilent, le maillot rouge
          dans la cam des joueurs, le K dans le coin du broadcast, les overlays
          Riot Games dans la mise en page. Derrière l&apos;écran, des milliers
          de gens dans dix pays qui regardent en même temps.
        </p>
      </Prose>

      <div className="my-10 md:-mx-12">
        <ImageCard
          src="/images/03-broadcast-kc.webp"
          alt="L'équipe Karmine Corp célèbre une victoire sur la scène LEC"
          kicker="Karmine Corp · LEC 2025"
          caption="Une arène Twitch. Un overlay surchargé. Des milliers de fans répartis dans dix pays."
          accent="blood"
          aspect="16/10"
        />
      </div>

      <PullQuote>
        Deux soirées, deux sports.{" "}
        <span className="text-[var(--color-kc-blue-bright)]">Surtout, deux mondes de design.</span>
      </PullQuote>

      <H3>Le sport classique a eu un siècle pour optimiser son visuel</H3>
      <Prose>
        <p>
          Quand le PSG a dessiné son blason en 1970, il s&apos;inscrivait dans
          une tradition vieille de quatre-vingts ans. Les logos des clubs de
          foot suivent des règles éprouvées. Un blason, des couleurs
          municipales, parfois un animal local. Le maillot est conçu pour un
          stade, pour être lu à trente mètres par cinquante mille personnes
          physiquement présentes.
        </p>
        <blockquote>
          Le sport classique a optimisé son design pour un stade.
        </blockquote>
      </Prose>

      <H3>L&apos;esport a quinze ans, et tout est différent</H3>
      <Prose>
        <p>
          L&apos;esport, lui, n&apos;a pas eu cent ans. Une décennie, quinze
          pour les plus vieux titres compétitifs comme StarCraft ou
          Counter-Strike. Et tout, dans son écosystème, est différent du sport
          classique.
        </p>
        <p>
          Il n&apos;y a pas de stade physique principal. Le match se joue sur
          un écran, devant un autre écran, retransmis sur un troisième écran.
          L&apos;audience est mondiale, pas géographique. La communauté est en
          ligne, pas en tribune. Le merchandising n&apos;est pas un maillot
          replica acheté à la boutique du stade. C&apos;est un hoodie collector
          en drop limité, plus proche de Supreme que d&apos;Adidas.
        </p>
        <p>
          L&apos;audience grossit vite. La LFL a battu son record de viewership
          le <strong>28 janvier 2026 avec 120 000 spectateurs simultanés</strong>{" "}
          sur un match de saison régulière. Sur certaines compétitions
          internationales, les Worlds de League of Legends dépassent
          l&apos;audience des grandes finales de NBA. Quand toutes les
          contraintes du sport classique changent et que l&apos;audience suit,{" "}
          <em>le design doit changer aussi.</em>
        </p>
      </Prose>

      <H3 accent="auto">Trois ruptures qui imposent un nouveau langage</H3>

      <H4>Le broadcast remplace le stade</H4>
      <Prose>
        <p>
          Une équipe esport pense son visuel pour le stream. Concrètement :
          fonds sombres, parce que la majorité du contenu est consommé en mode
          sombre sur Twitch ou YouTube. Contrastes élevés, parce que la
          compression vidéo dégrade les détails fins. Logos lisibles dans le
          coin d&apos;un overlay déjà surchargé.
        </p>
        <p>
          <strong>Cloud9</strong>{" "}a conçu son logo en 2013 avec ces contraintes
          en tête. Le nuage à trois spirales est aussi lisible à vingt-quatre
          pixels que sur un mur de stade.{" "}
          <em>
            Aucun blason de club de foot français n&apos;a été dessiné avec
            cette précision technique.
          </em>
        </p>
      </Prose>

      <motion.figure
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="my-8 flex items-center gap-6 border border-bone/10 bg-ink-2/50 p-5 md:p-6"
      >
        <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
          <Image
            src="/images/10-logo-cloud9.png"
            alt="Logo Cloud9 · nuage à trois spirales"
            fill
            sizes="80px"
            className="object-contain"
          />
        </div>
        <div>
          <div className="font-ui text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-kc-blue-bright)] mb-1">
            Référence · 2013
          </div>
          <p className="text-sm text-bone/85 leading-snug">
            Le nuage à trois spirales de Cloud9, pensé pour rester lisible
            à 24 px dans un overlay broadcast, treize ans avant que ça devienne
            un standard.
          </p>
        </div>
      </motion.figure>

      <H4>La communauté remplace le supporter local</H4>
      <Prose>
        <p>
          Tu peux supporter le PSG parce que tu vis à Paris. Tu peux supporter
          Karmine Corp même si tu vis à Saint-Étienne ou à Montréal.
          L&apos;identité visuelle d&apos;une équipe esport s&apos;ancre dans
          une communauté en ligne, rassemblée autour d&apos;un univers visuel
          cohérent, pas dans un territoire géographique.
        </p>
        <p>
          Cette différence change tout. Le visuel d&apos;une équipe esport doit
          fonctionner sur Twitter, sur Twitch, sur TikTok, sur Discord. Il doit
          se décliner en avatar, en bannière, en sticker. Il doit créer du
          sentiment d&apos;appartenance sans qu&apos;on partage le même
          quartier.
        </p>
      </Prose>

      <H4>Le drop remplace le maillot replica</H4>
      <Prose>
        <p>
          Le merch esport ressemble plus à du streetwear qu&apos;à des produits
          dérivés sportifs. Drops limités, collections capsule, collaborations
          avec des marques de mode.{" "}
          <strong>Karmine Corp</strong>{" "}dévoile ses jerseys 2026 lors
          d&apos;un livestream en collaboration avec Fulllife.{" "}
          <strong>Gentle Mates</strong>{" "}s&apos;associe avec Lacoste.{" "}
          <strong>NAVI</strong>{" "}vend son Pro Kit Jersey 2026 à 90 dollars en
          édition limitée.
        </p>
        <blockquote>
          Le maillot d&apos;une équipe esport n&apos;est pas un uniforme.
          C&apos;est un objet culturel.
        </blockquote>
      </Prose>

      <H3>Pourquoi cette grammaire compte pour toi</H3>
      <AsideNote audiences={["curieux", "designer", "dirigeant"]} />
      <Prose>
        <p>
          Tu vas concevoir l&apos;identité visuelle d&apos;une équipe esport.
          Avant de dessiner ton premier logo, retiens ça :{" "}
          <strong>
            tu ne dessines pas pour un stade. Tu dessines pour un écran qui
            n&apos;est jamais éteint, une communauté qui n&apos;a pas de
            ville, et un objet de désir qui circule plus vite qu&apos;un
            maillot replica.
          </strong>
        </p>
        <p>
          Les cinq prochains chapitres décortiquent cette grammaire, élément
          par élément. Le prochain te montre les trois approches valides qui
          permettent à un logo esport d&apos;exister.
        </p>
      </Prose>
    </ChapterSection>
  );
}
