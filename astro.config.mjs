// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ttu.github.io',
  base: '/gartner-trend-tracker',
  vite: {
    plugins: [tailwindcss()]
  }
});
