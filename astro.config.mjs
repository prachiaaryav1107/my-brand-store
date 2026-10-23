// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import clerk from '@clerk/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [clerk({ injectMiddleware: false })],
  vite: {
    plugins: [tailwindcss()]
  }
});