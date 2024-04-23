import { defineConfig } from "astro/config"

import singleFile from "astro-single-file"

// https://astro.build/config
export default defineConfig({
  site: "https://taroj1205.poyo.jp",
  output: "static",
  integrations: [singleFile()],
})
