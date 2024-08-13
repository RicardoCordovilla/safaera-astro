import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// import netlify from "@astrojs/netlify";
import netlify from '@astrojs/netlify/functions';
// https://astro.build/config
export default defineConfig({
  integrations: [react({
    include: ['**/react/*'],
  }),],
  prefetch: true,
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
  server: {
    // port: 3000,
    host: true
  }
});