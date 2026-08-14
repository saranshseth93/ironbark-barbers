# Ironbark Barbers

A **fictional** barbershop in Collingwood, Melbourne, designed and built by
[Pixel Pundit](https://pixelpundit.com.au) as a portfolio spec piece.

Ironbark Barbers is not a real business. The services, prices, hours,
availability, address and phone number are illustrative.

There are deliberately **no reviews, star ratings or client numbers** anywhere
on this site, and **no "meet the team" section**: a demo should not put invented
names and biographies onto photographs of real people who modelled for a stock
library. Booking picks a *chair* and a specialisation instead, which is also
closer to how a walk-in shop actually works. The booking flow is inert and says
so at the confirmation step.

**Live:** https://saranshseth93.github.io/ironbark-barbers/

## What it demonstrates

- A three-step booking flow (service, chair, time) with real state, real back
  navigation and genuinely unavailable slots — a picker that says yes to
  everything is not a picker.
- A full price list grouped into cuts, beard work and combinations, with the
  minutes you are actually in the chair next to every price.
- A FAQ built on native `<details>`/`<summary>`, so keyboard, screen reader and
  find-in-page all work with no JavaScript.
- Scroll reveals with no animation library: one IntersectionObserver toggling a
  class against a CSS keyframe. The hidden state is scoped to a `.js-reveal`
  class set before first paint, so the page still reads as plain content if the
  script never runs.

## Stack

Next.js 16 static export, Tailwind CSS 4, no runtime UI dependencies. Deployed
to GitHub Pages by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Photography

Every photo is royalty-free and credited in [CREDITS.md](./CREDITS.md).

Images are not committed. They are resolved from a provider API, pinned in
`images.lock.json`, then downloaded and turned into responsive AVIF/WebP
derivatives at build time.

| Command | What it does |
|---|---|
| `pnpm images:resolve` | Pins a real photo to each slot in `images.config.mjs`, recording photographer, licence and source page. Only fills slots that are missing or whose query changed. |
| `pnpm images:resolve --force` | Re-pins every slot. |
| `pnpm images:build` | Downloads the pins, generates derivatives, writes `CREDITS.md`. |
| `pnpm images:build --offline` | Procedural stand-ins, so the site builds with no network. |
| `pnpm images:verify` | Deploy gate: fails if any slot is a stand-in, unbuilt or uncredited. |

Uses [Pexels](https://www.pexels.com/license/) when a `PEXELS_API_KEY`
repository secret is set, falling back to [Openverse](https://openverse.org)
(CC0 and public domain, no key needed) when it is not.

To pin a photo by hand, edit its entry in `images.lock.json` and add
`"manual": true` — the resolver will leave it alone.

## Local development

```bash
pnpm install
pnpm images:build --offline   # or `pnpm images:build` with a network
pnpm dev
```

| Command | |
|---|---|
| `pnpm dev` | Dev server |
| `pnpm build` | Static export to `out/` |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | `tsc --noEmit` |
