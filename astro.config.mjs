import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import serviceWorker from "astrojs-service-worker"

// https://astro.build/config
export default defineConfig({
  site: "https://taroj1205.poyo.jp",
  output: "static",
  integrations: [sitemap(), serviceWorker()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },
})
