# Gartner Trends Tracker - Design

## Overview
A static website that lets users explore Gartner's annual strategic technology trend predictions and see how well they've aged, with editorial accuracy scores.

## Tech Stack
- **Framework**: Astro (SSG)
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **Data**: JSON files per year

## Data Model
Each trend entry:
- `name` - trend name
- `year` - prediction year
- `category` - grouping (AI/ML, Security, Infrastructure, etc.)
- `description` - what Gartner predicted
- `accuracyScore` - editorial 1-5 rating
- `accuracyNote` - brief scoring rationale
- `status` - emerging | mainstream | faded | transformed | niche

## Pages

### Home/Dashboard (`/`)
- Hero with title and description
- Year selector timeline bar (2014-2026)
- Trend cards grid with name, category, accuracy, status
- Summary stats per year

### Trend Detail (`/trend/[year]/[slug]`)
- Full prediction description
- Editorial accuracy assessment
- Cross-year links for recurring trends
- Status timeline

### Overview (`/overview`)
- All trends across all years (heatmap/table)
- Filter by category, sort by accuracy
- Average accuracy by year chart

## UI Design
- Dashboard aesthetic, clean and modern
- Color-coded accuracy: red (1) to green (5)
- Category pills with distinct colors
- Status badges: Mainstream (green), Emerging (blue), Faded (gray), Transformed (purple)

## Future (v2)
- Community voting on accuracy
- AI-assisted trend research updates
