# Livre Blanc — Comment créer une identité visuelle complète pour les teams e-sport

Landing page **scrollytelling** présentant ce livre blanc.

## Stack

- **Next.js 16.2.5** (App Router, Turbopack) + **React 19.2**
- **TypeScript 5** + **Tailwind CSS v4**
- **Motion 12** (ex-Framer Motion) — animations
- **Lenis 1.3** — smooth scroll natif pour le scrollytelling

## Démarrer

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande | Action |
|---|---|
| `npm run dev` | Serveur de dev (Turbopack) |
| `npm run build` | Build production |
| `npm run start` | Lance le build production |
| `npm run lint` | ESLint |

## Structure

```
src/
└── app/
    ├── layout.tsx       # Layout racine
    ├── page.tsx         # Landing page (à remplir)
    └── globals.css      # Tailwind v4 + variables
```

## Outils Claude Code associés

Ces outils sont **déjà disponibles** dans l'environnement Claude Code (pas besoin de les installer dans le projet) :

- **`ui-ux-pro-max`** — skill Claude Code (palettes, composants, design intelligence)
- **`21st.dev Magic`** — serveur MCP (à activer dans `~/.claude/settings.json` si besoin)

## Note Next.js 16

Cette version contient des breaking changes par rapport aux versions antérieures. Voir `AGENTS.md`.
