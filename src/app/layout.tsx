import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

// Clash Display — police de titrage (display), grotesque géométrique moderne
const clash = localFont({
  variable: "--font-clash",
  display: "swap",
  src: [
    { path: "./fonts/ClashDisplay-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/ClashDisplay-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/ClashDisplay-Semibold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/ClashDisplay-Bold.ttf", weight: "700", style: "normal" },
  ],
});

// Satoshi — police de corps (body), grotesque contemporain très lisible
const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "./fonts/Satoshi-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.ttf", weight: "700", style: "normal" },
  ],
});

// Space Mono — police des labels / kickers (touche technique éditoriale)
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Quantix — police de titre / logo de HUNTERS (case study)
const quantix = localFont({
  variable: "--font-quantix",
  display: "swap",
  src: [
    { path: "./fonts/Quantix-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Quantix-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
});

// Overused Grotesk — police de corps de HUNTERS (variable font)
const overused = localFont({
  variable: "--font-overused",
  display: "swap",
  src: [
    {
      path: "./fonts/OverusedGrotesk-VF.woff2",
      weight: "300 800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://du-logo-a-la-scene.vercel.app"),
  title: "Du logo à la scène — Livre Blanc",
  description:
    "Décrypter et concevoir l'identité visuelle d'une équipe esport. Six cas d'étude, une méthode applicable, une équipe fictive : HUNTERS.",
  openGraph: {
    title: "Du logo à la scène — Livre Blanc",
    description:
      "Décrypter et concevoir l'identité visuelle d'une équipe esport.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${clash.variable} ${satoshi.variable} ${spaceMono.variable} ${quantix.variable} ${overused.variable}`}
    >
      <body className="font-body bg-ink text-bone antialiased">
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
