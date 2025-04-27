import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      hot: !process.env.VITEST,
      compilerOptions: {
        runes: true
      }
    })
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{test,spec}.{js,ts}'],
    // Add browser mode for Svelte 5 compatibility
    browser: {
      enabled: true,
      name: 'chrome',
      headless: true
    }
  },
});
