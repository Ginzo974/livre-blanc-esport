"use client";

import { motion } from "motion/react";

type Ref = {
  org: string;
  title: string;
  detail?: string;
  year: string;
  href?: string;
  hrefLabel?: string;
};

const GROUPS: { heading: string; refs: Ref[] }[] = [
  {
    heading: "Données & audience",
    refs: [
      {
        org: "France Esports & Médiamétrie",
        title: "Baromètre France Esports 2025",
        detail:
          "15,4 millions de consommateurs esport en France, dont 7,1 millions de suiveurs réguliers ; +18 % en deux ans.",
        year: "2025",
        href: "https://www.france-esports.org/mots-cles/barometre/",
        hrefLabel: "france-esports.org",
      },
      {
        org: "Influencia · Webedia",
        title:
          "La ligue officielle de League of Legends dépasse les 120 000 spectateurs",
        detail:
          "Record d'audience de la LFL au lancement de la saison 2026, le 28 janvier 2026, avec 120 000 spectateurs simultanés.",
        year: "2026",
        href: "https://www.influencia.net/esport-francais-la-ligue-officielle-de-league-of-legends-depasse-deja-les-120-000-spectateurs/",
        hrefLabel: "influencia.net",
      },
    ],
  },
  {
    heading: "Déclarations & marques",
    refs: [
      {
        org: "Esports Insider",
        title:
          "Fnatic CEO on logo change : « We don't want to rewrite our history »",
        detail:
          "Interview de Sam Mathews sur le rebrand de Fnatic. « Un rebrand doit être une itération et un pas en avant, pas une réécriture. »",
        year: "2020",
        href: "https://esportsinsider.com/2020/07/fnatic-new-logo-interview",
        hrefLabel: "esportsinsider.com",
      },
    ],
  },
  {
    heading: "Identités & historiques des équipes",
    refs: [
      {
        org: "Sites officiels & chartes de marque",
        title:
          "Karmine Corp · T1 · G2 Esports · Fnatic · NAVI · Team Vitality · Gentle Mates",
        detail:
          "Logos, palettes, dates de fondation et évolutions de marque, d'après les supports officiels des équipes.",
        year: "2026",
      },
      {
        org: "Liquipedia",
        title: "League of Legends & Counter-Strike Wiki",
        detail:
          "Historiques d'équipes, dates de création et refontes de logo.",
        year: "2026",
        href: "https://liquipedia.net",
        hrefLabel: "liquipedia.net",
      },
    ],
  },
];

export function Sources() {
  let n = 0;
  return (
    <section
      id="sources"
      data-chapter="sources"
      className="relative scroll-mt-24 py-24 md:py-32 overflow-hidden border-t border-bone/10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[min(900px,90vw)] h-[420px] opacity-[0.06]"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-blood) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-display text-blood text-sm tracking-widest">
              §
            </span>
            <span className="h-px w-16 bg-blood/50" />
            <span className="font-ui text-fog text-[0.7rem] uppercase tracking-[0.3em]">
              Références
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] tracking-tight text-bone">
            Sources
          </h2>
          <p className="mt-6 text-lg md:text-xl text-fog leading-snug max-w-2xl">
            Les chiffres et déclarations cités dans ce livre s&apos;appuient sur
            des sources publiques vérifiables. Liens consultés en 2026.
          </p>
        </motion.div>

        <div className="space-y-12">
          {GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="font-ui text-[0.7rem] uppercase tracking-[0.3em] text-blood mb-5">
                {group.heading}
              </h3>
              <ol className="space-y-6">
                {group.refs.map((r) => {
                  n += 1;
                  const num = String(n).padStart(2, "0");
                  return (
                    <motion.li
                      key={r.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-bone/10 pt-5"
                    >
                      <span className="font-display text-fog/60 text-sm pt-0.5">
                        {num}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-3">
                          <span className="font-ui text-[0.7rem] uppercase tracking-[0.2em] text-fog">
                            {r.org}
                          </span>
                          <span className="font-ui text-[0.7rem] tracking-[0.2em] text-fog/50">
                            {r.year}
                          </span>
                        </div>
                        <p className="font-display text-bone text-base md:text-lg leading-snug mt-1">
                          {r.title}
                        </p>
                        {r.detail && (
                          <p className="text-sm text-fog leading-relaxed mt-2">
                            {r.detail}
                          </p>
                        )}
                        {r.href && (
                          <a
                            href={r.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mt-2 font-ui text-xs tracking-wide text-bone hover:text-blood transition-colors break-all"
                          >
                            {r.hrefLabel ?? r.href}
                            <span className="text-blood">↗</span>
                          </a>
                        )}
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>

        <p className="mt-14 pt-6 border-t border-bone/10 text-xs text-fog/70 leading-relaxed max-w-2xl">
          Toutes les marques, logos et images d&apos;équipes citées appartiennent
          à leurs propriétaires respectifs et sont reproduits à des fins
          d&apos;analyse et d&apos;illustration pédagogique.
        </p>
      </div>
    </section>
  );
}
