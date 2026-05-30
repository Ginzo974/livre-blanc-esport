import type { Metadata } from "next";
import { Russo_One, Chakra_Petch, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

const russo = Russo_One({
  variable: "--font-russo",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${russo.variable} ${chakra.variable} ${inter.variable} ${quantix.variable} ${overused.variable}`}
    >
      <body className="font-body bg-ink text-bone antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
