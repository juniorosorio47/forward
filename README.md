# forward

Personal site of Dari Osorio Junior — senior full-stack developer for POS terminals, self-service kiosks and B2B SaaS.

**Live:** https://juniorosorio47.github.io/forward/

## Concept

The site is designed as a checkout: the hero summarizes the career as a store receipt (with a PAID stamp), case studies are order tickets, and the contact section is the checkout itself. The domain I work in — point of sale — is the identity of the page.

## Stack

- Next.js 15 (App Router, static export)
- React 19, TypeScript strict
- CSS Modules, OKLCH design tokens, zero runtime CSS-in-JS
- Self-hosted fonts via `next/font` (Bricolage Grotesque + Fragment Mono)
- No client-side JS beyond React hydration; no external requests at runtime

## Principles

- Content lives in [`data/content.ts`](data/content.ts), separate from layout
- WCAG 2.2 AA: visible focus, semantic landmarks, `prefers-reduced-motion` respected
- First Load JS ~104 kB; no images above the fold

## Develop

```bash
bun install
bun run dev
```

`bun run build` exports the static site to `out/`. Pushing to `main` deploys to GitHub Pages via Actions.
