import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react({
    include: ['**/react/*'],
  }),],
  prefetch: true,
  output: 'server',
  adapter: netlify(),
  server: {
    // port: 3000,
    host: true
  }
});