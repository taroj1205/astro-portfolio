import { defineConfig } from "astro/config"
import vercelStatic from "@astrojs/vercel/static"

// https://astro.build/config
export default defineConfig({
  site: "https://astro-taroj.vercel.app",
  output: "static",
  adapter: vercelStatic({
    imageService: true,
    devImageService: "sharp",
  }),
})
