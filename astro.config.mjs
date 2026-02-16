import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  site: "https://danialkhilji.github.io",
  base: "/portfolio/",
  integrations: [tailwind(), icon()],
});
