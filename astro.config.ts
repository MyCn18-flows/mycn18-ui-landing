// @ts-check
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import compress from "astro-compress";
import react from '@astrojs/react';
import icon from 'astro-icon';

const REPO_NAME = 'mycn18-ui-landing';
const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  experimental: {
    chromeDevtoolsWorkspace: true,
  },
  integrations: [robotsTxt(), icon(), compress(), react(), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
        es: 'es',
      },
    },
  })],
  
  site: isProd 
    ? `https://luke1606.github.io` 
    : `http://localhost:5000`,
  
  base: `/${REPO_NAME}`,
  
  trailingSlash: 'always',
  
  output: 'static', 
  
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
});