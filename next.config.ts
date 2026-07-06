import type { NextConfig } from "next";
import path from "node:path";

/**
 * En-têtes de sécurité appliqués à toutes les routes.
 * Le site est statique (pas de backend, pas de formulaire, pas de secret),
 * donc l'objectif principal est de durcir le transport et le navigateur :
 * anti-clickjacking, anti MIME-sniffing, HTTPS forcé, et une CSP qui limite
 * les origines autorisées pour les scripts / styles / images.
 */
const securityHeaders = [
  // Force le HTTPS pendant 2 ans (Vercel sert déjà tout en HTTPS).
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Interdit d'afficher le site dans une iframe (anti-clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // Empêche le navigateur de "deviner" le type d'un fichier (anti MIME-sniffing).
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Ne transmet pas l'URL complète aux sites externes.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Désactive les API navigateur non utilisées par le site.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Content-Security-Policy : restreint d'où peut venir chaque type de ressource.
  // 'unsafe-inline' est nécessaire pour l'hydratation Next et les styles inline
  // de Motion ; sans contenu utilisateur, le risque XSS associé est négligeable.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self' https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Retire l'en-tête « X-Powered-By: Next.js » (moins d'info donnée à un attaquant).
  poweredByHeader: false,
  // Autorise une qualité d'image plus élevée (Next 16 limite à [75] par défaut).
  images: {
    qualities: [75, 90],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
