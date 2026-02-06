// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      target: ["es2022", "chrome100", "firefox100", "safari15"],
    },
  },

  integrations: [react()],
});
