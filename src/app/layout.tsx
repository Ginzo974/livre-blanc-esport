import type { Metadata } from "next";
import { Russo_One, Chakra_Petch, Rajdhani, Inter } from "next/font/google";
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

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
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
      className={`${russo.variable} ${chakra.variable} ${rajdhani.variable} ${inter.variable}`}
    >
      <body className="font-body bg-ink text-bone antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
