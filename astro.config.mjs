import { defineConfig } from "astro/config"

import singleFile from "astro-single-file"

// https://astro.build/config
export default defineConfig({
  site: "https://astro-taroj.vercel.app",
  integrations: [singleFile()],
})
