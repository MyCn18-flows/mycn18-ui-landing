// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import react from '@astrojs/react';

const REPO_NAME = 'mycn18-ui-landing';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), react()],
  site: `https://luke1606.github.io`, 
  base: `/${REPO_NAME}`, 
  trailingSlash: 'always',
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
});