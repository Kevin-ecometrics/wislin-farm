import { defineConfig, squooshImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  integrations: [tailwind(), astroI18next()],
});
