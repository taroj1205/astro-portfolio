import { defineConfig } from "astro/config"
import vercelStatic from "@astrojs/vercel/static"

// https://astro.build/config
export default defineConfig({
  site: "https://taroj1205.poyo.jp",
  output: "static",
  adapter: vercelStatic({
    imageService: true,
    devImageService: "sharp",
  }),
})
