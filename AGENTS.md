# Agents Guide

Instructions for AI agents working on this codebase.

## Project Overview

Static site tracking Gartner's annual strategic technology trend predictions (2014-2026) with editorial accuracy scores. Built with Astro + Tailwind CSS, deployed to GitHub Pages.

## Architecture

```
src/
├── data/trends/{year}.json   # One file per year (2014-2026), array of trend objects
├── lib/trends.ts             # Data access layer: getTrendsByYear(), getAllTrends(), getTrend()
├── lib/url.ts                # URL helpers (base path handling for GitHub Pages)
├── components/               # Astro components (TrendCard, ScoreDisplay, StatusBadge, etc.)
├── layouts/Layout.astro      # Base HTML layout
├── pages/
│   ├── index.astro           # Dashboard with year selector
│   ├── overview.astro        # All trends table with filtering
│   └── trend/[year]/[slug].astro  # Individual trend detail
└── styles/global.css         # Tailwind + CSS custom properties for colors
```

## Data Model

Each trend entry in `src/data/trends/{year}.json`:

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Trend name as Gartner labeled it |
| `year` | number | Year Gartner predicted this |
| `slug` | string | URL-safe identifier |
| `category` | string | One of: AI/ML, Security, Cloud, Data, IoT, Mobile, UX, Infrastructure, Platform, Architecture, Governance, Blockchain, Hardware, Sustainability |
| `description` | string | What Gartner predicted |
| `accuracyScore` | number \| null | Editorial 1-5 rating (null for current year) |
| `accuracyNote` | string | Brief scoring rationale |
| `status` | string | One of: `mainstream`, `niche`, `emerging`, `transformed`, `faded` |

## Scoring Guidelines

When editing accuracy scores and notes, follow these principles:

- **Score 5**: Specific, falsifiable prediction that materialized as described
- **Score 4**: Accurate direction AND mechanism — genuinely prescient
- **Score 3**: Directionally correct but vague, wrong mechanism, already happening, or "observation disguised as prediction"
- **Score 2**: Overhyped or significantly wrong on timeline/mechanism
- **Score 1**: Completely wrong or spectacularly bad call

**Common score inflation patterns to avoid:**
- Note says "vague", "obvious", or "already happening" but score is 4 → should be 3
- Note says "wrong mechanism" or "different technology" but score is 4 → should be 3
- Note says "observation, not prediction" but score is 4 → should be 3

**Status definitions:**
- `mainstream` — Widely adopted, part of standard practice
- `niche` — Real adoption but limited to specific industries/use cases
- `emerging` — Still developing, limited practical deployment
- `transformed` — The concept materialized but via completely different technology than predicted
- `faded` — Hype collapsed, minimal adoption

## Development

```sh
npm install     # Install dependencies
npm run dev     # Dev server at localhost:4321
npm run build   # Production build to ./dist/
```

Site is configured for GitHub Pages deployment at `https://ttu.github.io/gartner-trend-tracker/`.

## Key Conventions

- No client-side JavaScript — pure static Astro SSG
- Colors use CSS custom properties defined in `global.css` (e.g., `var(--color-score-3)`)
- Tailwind v4 via Vite plugin (not PostCSS)
- All trend data is JSON — no database, no API
- 2026 trends have `accuracyScore: null` (too early to score)
