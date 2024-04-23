import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import AstroPWA from "@vite-pwa/astro"

// https://astro.build/config
export default defineConfig({
  site: "https://taroj1205.poyo.jp",
  output: "static",
  integrations: [sitemap(), AstroPWA()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },
})
