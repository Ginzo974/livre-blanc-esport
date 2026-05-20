"use client";

import Image from "next/image";
import { motion } from "motion/react";

type Props = {
  src: string;
  alt: string;
  /** Kicker label above the image (small uppercase tag). */
  kicker?: string;
  /** Main caption shown below the image. */
  caption?: string;
  /** Source / credit line shown at the bottom. */
  source?: string;
  /** Aspect ratio of the image frame. Default 16/10. */
  aspect?: "16/10" | "4/3" | "1/1" | "3/4" | "21/9";
  /** Color accent for the corner notch + kicker. */
  accent?: "blood" | "kc-blue" | "fnatic" | "navi" | "bone";
  /** Optional intrinsic width/height to help next/image. */
  width?: number;
  height?: number;
  /** Use `fill` instead of width/height (parent must be position:relative). */
  fill?: boolean;
  className?: string;
};

const ACCENT_MAP: Record<NonNullable<Props["accent"]>, { ring: string; text: string; bg: string }> = {
  blood: { ring: "ring-blood/30", text: "text-blood", bg: "bg-blood" },
  "kc-blue": { ring: "ring-kc-blue/30", text: "text-kc-blue", bg: "bg-kc-blue" },
  fnatic: { ring: "ring-fnatic-orange/40", text: "text-fnatic-orange", bg: "bg-fnatic-orange" },
  navi: { ring: "ring-navi-yellow/40", text: "text-navi-yellow", bg: "bg-navi-yellow" },
  bone: { ring: "ring-bone/20", text: "text-bone", bg: "bg-bone" },
};

const ASPECT_MAP: Record<NonNullable<Props["aspect"]>, string> = {
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "21/9": "aspect-[21/9]",
};

export function ImageCard({
  src,
  alt,
  kicker,
  caption,
  source,
  aspect = "16/10",
  accent = "blood",
  width,
  height,
  fill,
  className = "",
}: Props) {
  const a = ACCENT_MAP[accent];
  const ar = ASPECT_MAP[aspect];

  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`group relative bg-ink-2 ring-1 ${a.ring} overflow-hidden ${className}`}
    >
      {kicker && (
        <figcaption className="flex items-center gap-3 px-5 pt-4 pb-3 border-b border-bone/5">
          <span className={`h-1.5 w-1.5 ${a.bg}`} />
          <span className={`text-[0.65rem] uppercase tracking-[0.3em] ${a.text}`}>
            {kicker}
          </span>
        </figcaption>
      )}

      <div className={`relative ${ar} bg-ink overflow-hidden`}>
        {/* Corner notch */}
        <span
          aria-hidden
          className={`absolute top-0 right-0 z-10 h-6 w-6 ${a.bg} transition-transform duration-500 group-hover:scale-110`}
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        />
        {/* Scanline overlay */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.6) 0 1px, transparent 1px 3px)",
          }}
        />
        {/* Image */}
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width ?? 1600}
            height={height ?? 1000}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        )}
      </div>

      {(caption || source) && (
        <figcaption className="px-5 py-4 border-t border-bone/5 flex items-start justify-between gap-4">
          {caption && (
            <span className="text-sm text-bone/85 leading-snug">{caption}</span>
          )}
          {source && (
            <span className="shrink-0 text-[0.65rem] uppercase tracking-widest text-fog">
              {source}
            </span>
          )}
        </figcaption>
      )}
    </motion.figure>
  );
}
