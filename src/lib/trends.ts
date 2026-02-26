import data2014 from '../data/trends/2014.json';
import data2015 from '../data/trends/2015.json';
import data2016 from '../data/trends/2016.json';
import data2017 from '../data/trends/2017.json';
import data2018 from '../data/trends/2018.json';
import data2019 from '../data/trends/2019.json';
import data2020 from '../data/trends/2020.json';
import data2021 from '../data/trends/2021.json';
import data2022 from '../data/trends/2022.json';
import data2023 from '../data/trends/2023.json';
import data2024 from '../data/trends/2024.json';
import data2025 from '../data/trends/2025.json';
import data2026 from '../data/trends/2026.json';

export interface Trend {
  name: string;
  year: number;
  slug: string;
  category: string;
  description: string;
  accuracyScore: number | null;
  accuracyNote: string;
  status: 'emerging' | 'mainstream' | 'faded' | 'transformed' | 'niche';
}

const allData: Record<number, Trend[]> = {
  2014: data2014 as Trend[],
  2015: data2015 as Trend[],
  2016: data2016 as Trend[],
  2017: data2017 as Trend[],
  2018: data2018 as Trend[],
  2019: data2019 as Trend[],
  2020: data2020 as Trend[],
  2021: data2021 as Trend[],
  2022: data2022 as Trend[],
  2023: data2023 as Trend[],
  2024: data2024 as Trend[],
  2025: data2025 as Trend[],
  2026: data2026 as Trend[],
};

export const YEARS = Object.keys(allData).map(Number).sort();

export function getTrendsByYear(year: number): Trend[] {
  return allData[year] ?? [];
}

export function getAllTrends(): Trend[] {
  return YEARS.flatMap(year => getTrendsByYear(year));
}

export function getTrend(year: number, slug: string): Trend | undefined {
  return getTrendsByYear(year).find(t => t.slug === slug);
}

export function getRelatedTrends(trend: Trend): Trend[] {
  const nameWords = trend.name.toLowerCase().split(/\s+/);
  return getAllTrends().filter(t => {
    if (t.year === trend.year && t.slug === trend.slug) return false;
    const otherWords = t.name.toLowerCase().split(/\s+/);
    const overlap = nameWords.filter(w => w.length > 3 && otherWords.includes(w));
    return overlap.length >= 1 || t.category === trend.category && t.name.includes(trend.name.split(' ')[0]);
  });
}

export function getAverageScore(trends: Trend[]): number | null {
  const scored = trends.filter(t => t.accuracyScore !== null);
  if (scored.length === 0) return null;
  return Math.round((scored.reduce((sum, t) => sum + t.accuracyScore!, 0) / scored.length) * 10) / 10;
}

export function getCategoryColor(category: string): string {
  const map: Record<string, string> = {
    'AI/ML': 'var(--color-cat-ai)',
    'Security': 'var(--color-cat-security)',
    'Cloud': 'var(--color-cat-cloud)',
    'Data': 'var(--color-cat-data)',
    'IoT': 'var(--color-cat-iot)',
    'Mobile': 'var(--color-cat-mobile)',
    'UX': 'var(--color-cat-ux)',
    'Infrastructure': 'var(--color-cat-infra)',
    'Platform': 'var(--color-cat-platform)',
    'Architecture': 'var(--color-cat-arch)',
    'Governance': 'var(--color-cat-governance)',
    'Blockchain': 'var(--color-cat-blockchain)',
    'Hardware': 'var(--color-cat-hardware)',
    'Sustainability': 'var(--color-cat-sustainability)',
  };
  return map[category] ?? 'var(--color-text-muted)';
}

export function getScoreColor(score: number | null): string {
  if (score === null) return 'var(--color-text-dim)';
  if (score <= 1) return 'var(--color-score-1)';
  if (score <= 2) return 'var(--color-score-2)';
  if (score <= 3) return 'var(--color-score-3)';
  if (score <= 4) return 'var(--color-score-4)';
  return 'var(--color-score-5)';
}

export function getStatusColor(status: string): string {
  const map: Record<string, string> = {
    'mainstream': 'var(--color-status-mainstream)',
    'emerging': 'var(--color-status-emerging)',
    'faded': 'var(--color-status-faded)',
    'transformed': 'var(--color-status-transformed)',
    'niche': 'var(--color-status-niche)',
  };
  return map[status] ?? 'var(--color-text-muted)';
}
