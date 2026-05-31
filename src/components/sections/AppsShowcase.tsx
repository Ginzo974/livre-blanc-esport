"use client";

import { motion } from "motion/react";
import Image from "next/image";

/**
 * AppsShowcase
 *
 * Two-app comparison for the "app communautaire" section of Chapter 4.
 * Each app gets a phone-mockup gallery (one hero device + two staggered behind)
 * plus a text block describing its design philosophy. KC (pragmatic companion)
 * vs Gentle Mates (content-first). V.Hive dropped per author's decision.
 */

type App = {
  team: string;
  product: string;
  accent: string;
  philo: string;
  desc: string;
  tags: string[];
  shots: string[]; // [hero, secondary, tertiary]
  reverse?: boolean;
};

const APPS: App[] = [
  {
    team: "Karmine Corp",
    product: "KC App",
    accent: "#3a7bff",
    philo: "Companion pragmatique",
    desc: "Suivi multi-jeux du Blue Wall, prochain match en un coup d'œil, dernières vidéos, boutique intégrée. Pas de blockchain, pas d'esbroufe, un outil qui sert le fan au quotidien.",
    tags: ["Calendrier", "Résultats live", "Boutique", "KWordle"],
    shots: [
      "/images/20-app-kc-accueil.png",
      "/images/21-app-kc-esport.png",
      "/images/22-app-kc-shop.png",
    ],
  },
  {
    team: "Gentle Mates",
    product: "M8 App",
    accent: "#ff3d9a",
    philo: "Contenu d'abord",
    desc: "L'app prolonge l'ADN créateur de la structure. Intégration YouTube, replays, matchs en mode spoiler-free, calendrier personnalisable. Le média et l'esport dans la même poche.",
    tags: ["News", "YouTube", "Spoiler-free", "Bing'M8"],
    shots: [
      "/images/23-app-m8-home.png",
      "/images/24-app-m8-matchs.png",
      "/images/25-app-m8-calendrier.png",
    ],
    reverse: true,
  },
];

export function AppsShowcase() {
  return (
    <div className="my-12 md:-mx-12 flex flex-col gap-px bg-bone/10">
      {APPS.map((app) => (
        <AppBlock key={app.product} app={app} />
      ))}
    </div>
  );
}

function AppBlock({ app }: { app: App }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative bg-ink-2 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center p-7 md:p-12 ${
        app.reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Accent glow */}
      <span
        aria-hidden
        className="absolute -top-24 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{
          background: app.accent,
          left: app.reverse ? "auto" : "-4rem",
          right: app.reverse ? "-4rem" : "auto",
        }}
      />

      {/* Phone gallery */}
      <PhoneGallery shots={app.shots} accent={app.accent} alt={app.product} />

      {/* Text */}
      <div className="relative">
        <div
          className="font-ui text-[0.65rem] uppercase tracking-[0.3em] mb-2"
          style={{ color: app.accent }}
        >
          {app.team}
        </div>
        <h4 className="font-display text-3xl md:text-4xl text-bone leading-none mb-1">
          {app.product}
        </h4>
        <div className="font-display text-lg md:text-xl text-fog mb-5">
          {app.philo}
        </div>
        <p className="text-sm md:text-base text-bone/80 leading-relaxed mb-6 max-w-md">
          {app.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {app.tags.map((t) => (
            <span
              key={t}
              className="font-ui text-[0.6rem] uppercase tracking-[0.2em] text-bone/70 border border-bone/15 px-3 py-1.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PhoneGallery({
  shots,
  accent,
  alt,
}: {
  shots: string[];
  accent: string;
  alt: string;
}) {
  const [hero, second, third] = shots;
  return (
    <div className="relative mx-auto w-full max-w-[420px] aspect-[4/3] flex items-center justify-center">
      {/* Tertiary phone, far back, left */}
      {third && (
        <Phone
          src={third}
          alt={`${alt}, écran 3`}
          accent={accent}
          className="absolute left-[6%] top-1/2 -translate-y-1/2 w-[34%] rotate-[-9deg] opacity-70 z-0"
          dim
        />
      )}
      {/* Secondary phone, back, right */}
      {second && (
        <Phone
          src={second}
          alt={`${alt}, écran 2`}
          accent={accent}
          className="absolute right-[6%] top-1/2 -translate-y-1/2 w-[34%] rotate-[9deg] opacity-70 z-0"
          dim
        />
      )}
      {/* Hero phone, front, center */}
      <Phone
        src={hero}
        alt={`${alt}, écran principal`}
        accent={accent}
        className="relative w-[42%] z-10"
      />
    </div>
  );
}

function Phone({
  src,
  alt,
  accent,
  className = "",
  dim = false,
}: {
  src: string;
  alt: string;
  accent: string;
  className?: string;
  dim?: boolean;
}) {
  return (
    <div className={className}>
      <div
        className="relative aspect-[9/19.5] rounded-[1.4rem] p-[3px] bg-ink-3"
        style={{
          boxShadow: dim
            ? "0 10px 30px rgba(0,0,0,0.5)"
            : `0 18px 50px rgba(0,0,0,0.6), 0 0 0 1px ${accent}33`,
        }}
      >
        <div className="relative w-full h-full rounded-[1.2rem] overflow-hidden bg-ink">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="220px"
            className="object-cover object-top"
          />
        </div>
        {/* notch */}
        <span
          aria-hidden
          className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[28%] h-[5px] rounded-b-[6px] bg-ink-3 z-10"
        />
      </div>
    </div>
  );
}
