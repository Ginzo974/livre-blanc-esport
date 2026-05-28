"use client";

import { motion } from "motion/react";
import Image from "next/image";

/**
 * BrandBookConstruction
 *
 * Pentagram-style brand book page rendered directly in the page flow.
 * Cream background (printed-page feel) contrasts with the dark site,
 * making it feel like a physical artifact inserted into the digital read.
 *
 * Uses the real HUNTERS PNG with a mathematically precise SVG construction
 * overlay (no AI artifacts, fully vectorial, scales perfectly).
 */
export function BrandBookConstruction() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Page brand book : construction du logo HUNTERS"
      className="relative w-screen left-1/2 -translate-x-1/2 my-20 md:my-28"
      style={{
        background: "#f4f1ea",
        color: "#0a0a0a",
      }}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-10 md:py-14 font-body">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-black/80">
          <div className="font-display text-[0.75rem] md:text-sm tracking-[0.2em] uppercase">
            HUNTERS&nbsp;/&nbsp;Brand Identity
          </div>
          <div className="font-mono text-[0.7rem] md:text-xs tracking-[0.2em] uppercase opacity-70">
            01&nbsp;/&nbsp;Logo Construction
          </div>
          <div className="font-mono text-[0.7rem] md:text-xs tracking-[0.2em] opacity-70">
            v1.0 — 2026
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="mt-8 md:mt-12 grid grid-cols-12 gap-8 md:gap-12">
          {/* CONSTRUCTION — LEFT */}
          <div className="col-span-12 lg:col-span-8">
            <ConstructionFigure />
          </div>

          {/* PANELS — RIGHT */}
          <aside className="col-span-12 lg:col-span-4 flex flex-col gap-10">
            <AnatomyPanel />
            <PalettePanel />
            <TypographyPanel />
          </aside>
        </div>

        {/* FOOTER */}
        <footer className="mt-12 md:mt-16 pt-4 border-t border-black/80 flex items-center justify-between">
          <span className="font-mono text-[0.65rem] md:text-xs tracking-[0.25em] uppercase opacity-70">
            © 2026 HUNTERS Esports / Design System
          </span>
          <span className="font-mono text-[0.65rem] md:text-xs tracking-[0.25em] uppercase opacity-50">
            Plate 01 — Construction
          </span>
        </footer>
      </div>
    </motion.section>
  );
}

/* ───────────────────────── CONSTRUCTION ───────────────────────── */

function ConstructionFigure() {
  // SVG viewBox = 120 x 120 units. The logo "lives" inside a 12x12 inner grid
  // (each grid cell = 10 units). Construction lines are mathematically aligned.
  const GRID_LEFT = 8;
  const GRID_TOP = 8;
  const GRID_W = 100; // 10 cells * 10 units, leaves room for annotations
  const GRID_H = 100;
  const cell = GRID_W / 10;
  const center = GRID_LEFT + GRID_W / 2;

  return (
    <figure>
      <div className="relative aspect-square w-full max-w-[620px] mx-auto">
        {/* Real logo PNG underneath */}
        <div className="absolute inset-[8.5%]">
          <Image
            src="/images/1x/hunters-rouge.png"
            alt="Logo HUNTERS — vue construction"
            fill
            sizes="(min-width: 1024px) 620px, 100vw"
            className="object-contain"
            priority
          />
        </div>

        {/* SVG construction overlay */}
        <svg
          viewBox="0 0 120 120"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden
        >
          <defs>
            <pattern
              id="bbg-grid"
              width={cell}
              height={cell}
              x={GRID_LEFT}
              y={GRID_TOP}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={`M ${cell} 0 L 0 0 0 ${cell}`}
                fill="none"
                stroke="#0a0a0a"
                strokeOpacity="0.18"
                strokeWidth="0.18"
              />
            </pattern>
          </defs>

          {/* 12x12 inner grid */}
          <rect
            x={GRID_LEFT}
            y={GRID_TOP}
            width={GRID_W}
            height={GRID_H}
            fill="url(#bbg-grid)"
          />

          {/* Outer construction circles */}
          <circle
            cx={center}
            cy={center}
            r={GRID_W / 2}
            fill="none"
            stroke="#0a0a0a"
            strokeOpacity="0.45"
            strokeWidth="0.25"
          />
          <circle
            cx={center}
            cy={center}
            r={GRID_W / 2.4}
            fill="none"
            stroke="#0a0a0a"
            strokeOpacity="0.25"
            strokeWidth="0.18"
            strokeDasharray="0.8 0.6"
          />

          {/* Diagonals from corners to opposite */}
          <line
            x1={GRID_LEFT}
            y1={GRID_TOP}
            x2={GRID_LEFT + GRID_W}
            y2={GRID_TOP + GRID_H}
            stroke="#0a0a0a"
            strokeOpacity="0.22"
            strokeWidth="0.18"
            strokeDasharray="0.6 0.6"
          />
          <line
            x1={GRID_LEFT + GRID_W}
            y1={GRID_TOP}
            x2={GRID_LEFT}
            y2={GRID_TOP + GRID_H}
            stroke="#0a0a0a"
            strokeOpacity="0.22"
            strokeWidth="0.18"
            strokeDasharray="0.6 0.6"
          />

          {/* Vertical center axis (symmetry) */}
          <line
            x1={center}
            y1={GRID_TOP - 3}
            x2={center}
            y2={GRID_TOP + GRID_H + 3}
            stroke="#0a0a0a"
            strokeOpacity="0.7"
            strokeWidth="0.22"
            strokeDasharray="1.6 0.8"
          />
          {/* SYM marker */}
          <circle cx={center} cy={GRID_TOP - 2} r="0.6" fill="#0a0a0a" />
          <text
            x={center + 1.5}
            y={GRID_TOP - 1.6}
            fontSize="2"
            fontFamily="ui-monospace, monospace"
            fill="#0a0a0a"
            fontWeight="600"
          >
            SYM
          </text>

          {/* Top measurement: 12x */}
          <Measurement
            x1={GRID_LEFT}
            y1={GRID_TOP - 4}
            x2={GRID_LEFT + GRID_W}
            y2={GRID_TOP - 4}
            label="12x"
            vertical={false}
          />

          {/* Left measurement: 12x */}
          <Measurement
            x1={GRID_LEFT - 4}
            y1={GRID_TOP}
            x2={GRID_LEFT - 4}
            y2={GRID_TOP + GRID_H}
            label="12x"
            vertical
          />

          {/* Right measurements: 1x / 2x / 3.5x stacked */}
          <Measurement
            x1={GRID_LEFT + GRID_W + 4}
            y1={GRID_TOP + cell}
            x2={GRID_LEFT + GRID_W + 4}
            y2={GRID_TOP + cell * 3}
            label="1x"
            vertical
            side="right"
          />
          <Measurement
            x1={GRID_LEFT + GRID_W + 4}
            y1={GRID_TOP + cell * 3}
            x2={GRID_LEFT + GRID_W + 4}
            y2={GRID_TOP + cell * 6}
            label="2x"
            vertical
            side="right"
          />
          <Measurement
            x1={GRID_LEFT + GRID_W + 4}
            y1={GRID_TOP + cell * 6}
            x2={GRID_LEFT + GRID_W + 4}
            y2={GRID_TOP + cell * 11}
            label="3.5x"
            vertical
            side="right"
          />

          {/* Angle annotations top-left and bottom-left */}
          <AngleMarker x={GRID_LEFT + cell * 1.7} y={GRID_TOP + cell * 1.2} label="32°" />
          <AngleMarker x={GRID_LEFT + cell * 1.4} y={GRID_TOP + cell * 9} label="78°" />

          {/* Bottom equal-radius brackets */}
          <EqualRadius
            x1={GRID_LEFT}
            x2={center}
            y={GRID_TOP + GRID_H + 4}
            label="EQUAL RADIUS"
          />
          <EqualRadius
            x1={center}
            x2={GRID_LEFT + GRID_W}
            y={GRID_TOP + GRID_H + 4}
            label="EQUAL RADIUS"
          />

          {/* Center axis label */}
          <text
            x={center}
            y={GRID_TOP + GRID_H + 8}
            fontSize="1.8"
            fontFamily="ui-monospace, monospace"
            fill="#0a0a0a"
            fontWeight="700"
            textAnchor="middle"
            letterSpacing="0.2"
          >
            CENTER AXIS
          </text>
        </svg>
      </div>
    </figure>
  );
}

/* SVG helper sub-components */

function Measurement({
  x1,
  y1,
  x2,
  y2,
  label,
  vertical,
  side = "left",
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  vertical: boolean;
  side?: "left" | "right";
}) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  return (
    <g stroke="#0a0a0a" strokeWidth="0.18" fill="none">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      {/* End ticks */}
      {vertical ? (
        <>
          <line x1={x1 - 0.6} y1={y1} x2={x1 + 0.6} y2={y1} />
          <line x1={x2 - 0.6} y1={y2} x2={x2 + 0.6} y2={y2} />
        </>
      ) : (
        <>
          <line x1={x1} y1={y1 - 0.6} x2={x1} y2={y1 + 0.6} />
          <line x1={x2} y1={y2 - 0.6} x2={x2} y2={y2 + 0.6} />
        </>
      )}
      <text
        x={vertical ? (side === "right" ? mx + 1.2 : mx - 1.2) : mx}
        y={vertical ? my : my - 1}
        fontSize="2"
        fontFamily="ui-monospace, monospace"
        fill="#0a0a0a"
        fontWeight="700"
        textAnchor={vertical ? (side === "right" ? "start" : "end") : "middle"}
        dominantBaseline="middle"
      >
        {label}
      </text>
    </g>
  );
}

function AngleMarker({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="0.5" fill="#0a0a0a" />
      <line
        x1={x}
        y1={y}
        x2={x - 4}
        y2={y - 2}
        stroke="#0a0a0a"
        strokeWidth="0.18"
      />
      <text
        x={x - 5}
        y={y - 2.4}
        fontSize="2"
        fontFamily="ui-monospace, monospace"
        fontWeight="700"
        fill="#0a0a0a"
        textAnchor="end"
      >
        {label}
      </text>
    </g>
  );
}

function EqualRadius({
  x1,
  x2,
  y,
  label,
}: {
  x1: number;
  x2: number;
  y: number;
  label: string;
}) {
  const mx = (x1 + x2) / 2;
  return (
    <g stroke="#0a0a0a" strokeWidth="0.18" fill="none">
      <line x1={x1} y1={y} x2={x2} y2={y} />
      <line x1={x1} y1={y - 0.6} x2={x1} y2={y + 0.6} />
      <line x1={x2} y1={y - 0.6} x2={x2} y2={y + 0.6} />
      <text
        x={mx}
        y={y + 2.5}
        fontSize="1.8"
        fontFamily="ui-monospace, monospace"
        fontWeight="700"
        fill="#0a0a0a"
        textAnchor="middle"
        letterSpacing="0.25"
      >
        {label}
      </text>
    </g>
  );
}

/* ───────────────────────── ANATOMY ───────────────────────── */

function AnatomyPanel() {
  const items: Array<{
    label: string;
    highlight: "lances" | "h-forms" | "center" | "negative";
  }> = [
    { label: "Ascending lances", highlight: "lances" },
    { label: "Lateral H forms", highlight: "h-forms" },
    { label: "Center lance", highlight: "center" },
    { label: "Negative counter-forms", highlight: "negative" },
  ];

  return (
    <div>
      <PanelHeading idx="01" label="Anatomie du logo" />
      <div className="grid grid-cols-4 gap-2 md:gap-3">
        {items.map((it) => (
          <AnatomyCell key={it.label} {...it} />
        ))}
      </div>
    </div>
  );
}

function AnatomyCell({
  label,
  highlight,
}: {
  label: string;
  highlight: "lances" | "h-forms" | "center" | "negative";
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-square">
        {/* Base logo, dimmed */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/1x/hunters-rouge.png"
            alt=""
            fill
            sizes="120px"
            className="object-contain"
          />
        </div>
        {/* Highlight overlay */}
        <HighlightOverlay variant={highlight} />
      </div>
      <p className="font-mono text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.18em] leading-tight opacity-70">
        {label}
      </p>
    </div>
  );
}

function HighlightOverlay({
  variant,
}: {
  variant: "lances" | "h-forms" | "center" | "negative";
}) {
  // Each variant adds either a recoloured logo silhouette (via a second image
  // with CSS color blending) or annotation marks.
  if (variant === "lances") {
    return (
      <>
        {/* Full logo at full opacity */}
        <div className="absolute inset-0">
          <Image src="/images/1x/hunters-rouge.png" alt="" fill sizes="120px" className="object-contain" />
        </div>
        {/* 3 vertical bars indicating the 3 ascending lances */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          <g stroke="#0a0a0a" strokeWidth="0.5" strokeDasharray="2 1" fill="none">
            <line x1="22" y1="6" x2="22" y2="60" />
            <line x1="50" y1="2" x2="50" y2="90" />
            <line x1="78" y1="6" x2="78" y2="60" />
          </g>
        </svg>
      </>
    );
  }
  if (variant === "h-forms") {
    return (
      <>
        <div className="absolute inset-0 opacity-50">
          <Image src="/images/1x/hunters-rouge.png" alt="" fill sizes="120px" className="object-contain" />
        </div>
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          {/* Two H bounding regions */}
          <g fill="none" stroke="#c81d25" strokeWidth="0.6">
            <rect x="10" y="22" width="28" height="55" />
            <rect x="62" y="22" width="28" height="55" />
            <text x="24" y="55" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700" fill="#c81d25" textAnchor="middle">H</text>
            <text x="76" y="55" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700" fill="#c81d25" textAnchor="middle">H</text>
          </g>
        </svg>
      </>
    );
  }
  if (variant === "center") {
    return (
      <>
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/1x/hunters-rouge.png" alt="" fill sizes="120px" className="object-contain" />
        </div>
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          <g stroke="#c81d25" strokeWidth="0.6" fill="none">
            <rect x="44" y="4" width="12" height="92" />
          </g>
        </svg>
      </>
    );
  }
  // negative
  return (
    <>
      <div className="absolute inset-0">
        <Image src="/images/1x/hunters-rouge.png" alt="" fill sizes="120px" className="object-contain" />
      </div>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <g fill="none" stroke="#0a0a0a" strokeWidth="0.5">
          <circle cx="34" cy="42" r="3.5" strokeDasharray="1 0.8" />
          <circle cx="66" cy="42" r="3.5" strokeDasharray="1 0.8" />
          <line x1="34" y1="42" x2="20" y2="55" />
          <line x1="66" y1="42" x2="80" y2="55" />
        </g>
      </svg>
    </>
  );
}

/* ───────────────────────── PALETTE ───────────────────────── */

function PalettePanel() {
  return (
    <div>
      <PanelHeading idx="02" label="Palette couleur" />
      <div className="grid grid-cols-2 gap-3">
        <SwatchCard
          name="Blood"
          hex="#C81D25"
          rgb="200 29 37"
          pantone="186 C"
          bg="#c81d25"
          textColor="#f4f1ea"
        />
        <SwatchCard
          name="Ink"
          hex="#0A0A0A"
          rgb="10 10 10"
          pantone="Black 6 C"
          bg="#0a0a0a"
          textColor="#f4f1ea"
        />
      </div>
    </div>
  );
}

function SwatchCard({
  name,
  hex,
  rgb,
  pantone,
  bg,
  textColor,
}: {
  name: string;
  hex: string;
  rgb: string;
  pantone: string;
  bg: string;
  textColor: string;
}) {
  return (
    <div>
      <div
        className="aspect-[16/10] w-full mb-2"
        style={{ background: bg, color: textColor }}
        aria-label={`${name} ${hex}`}
      />
      <div className="font-display text-base md:text-lg leading-none mb-1">
        {name.toUpperCase()}
      </div>
      <dl className="font-mono text-[0.6rem] md:text-[0.65rem] leading-[1.5] tracking-tight">
        <div className="flex gap-2">
          <dt className="opacity-50 w-12">HEX</dt>
          <dd>{hex}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="opacity-50 w-12">RGB</dt>
          <dd>{rgb}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="opacity-50 w-12">PANTONE</dt>
          <dd>{pantone}</dd>
        </div>
      </dl>
    </div>
  );
}

/* ───────────────────────── TYPOGRAPHY ───────────────────────── */

function TypographyPanel() {
  return (
    <div>
      <PanelHeading idx="03" label="Typographie" />
      <div className="font-hunter font-bold text-3xl md:text-4xl tracking-tight leading-none mb-3">
        Rajdhani Bold
      </div>
      <div className="font-hunter font-bold text-sm md:text-base tracking-wider leading-tight mb-2">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </div>
      <div className="font-hunter font-bold text-sm md:text-base tracking-wider leading-tight mb-4">
        0123456789
      </div>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.2em]">
        <span className="opacity-50">Light</span>
        <span className="opacity-30">/</span>
        <span className="opacity-50">Regular</span>
        <span className="opacity-30">/</span>
        <span className="opacity-50">Medium</span>
        <span className="opacity-30">/</span>
        <span className="font-display text-black">Bold</span>
        <span className="opacity-30">/</span>
        <span className="opacity-50">Semibold</span>
      </div>
    </div>
  );
}

/* ───────────────────────── PANEL HEADING ───────────────────────── */

function PanelHeading({ idx, label }: { idx: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-4 pb-2 border-b border-black/20">
      <span className="font-mono text-[0.65rem] md:text-xs tracking-widest opacity-50">
        {idx}
      </span>
      <span className="font-display text-xs md:text-sm tracking-[0.18em] uppercase">
        {label}
      </span>
    </div>
  );
}
