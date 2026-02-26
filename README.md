# Gartner Trends Tracker

A static site that tracks Gartner's annual strategic technology trend predictions (2014-2026) and scores how well they actually aged — with editorial accuracy ratings and honest assessments.

## What This Is

Every year Gartner publishes their "Top Strategic Technology Trends." This site takes those predictions and evaluates them against reality with:

- **Accuracy scores** (1-5) based on how well the prediction matched what actually happened
- **Status tracking**: mainstream, niche, emerging, transformed, or faded
- **Editorial notes** that call out vague predictions, wrong mechanisms, and observations-disguised-as-predictions

## Tech Stack

- **Astro** (static site generation)
- **Tailwind CSS** for styling
- **GitHub Pages** for deployment
- **JSON data files** per year (`src/data/trends/`)

## Pages

- `/` — Dashboard with year selector and trend cards
- `/overview` — All trends across all years with filtering
- `/trend/[year]/[slug]` — Individual trend detail pages

## Data Model

Each trend in `src/data/trends/{year}.json`:

```json
{
  "name": "Trend Name",
  "year": 2024,
  "slug": "trend-slug",
  "category": "AI/ML",
  "description": "What Gartner predicted",
  "accuracyScore": 3,
  "accuracyNote": "How it actually played out",
  "status": "mainstream"
}
```

**Status values**: `mainstream` | `niche` | `emerging` | `transformed` | `faded`

**Accuracy scale**: 1 (completely wrong) to 5 (spot on)

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview build locally before deploying      |
