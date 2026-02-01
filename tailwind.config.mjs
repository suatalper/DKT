/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        serif: ["'Merriweather'", "serif"],
      },
      colors: {
        // "Use the Teal-700 color mainly for text headings and icons"
        primary: {
          DEFAULT: "#0f766e", // Teal 700
          hover: "#0d6a62", // Slightly darker teal
        },
        // "Use Red-900 only for small accents and button borders"
        accent: {
          DEFAULT: "#7f1d1d", // Red 900
        },
        // Neutral palette for minimalist look
        neutral: {
          50: "#f8fafc", // Slate 50
          100: "#f1f5f9", // Slate 100
          200: "#e2e8f0", // Slate 200
          800: "#1e293b", // Slate 800
          900: "#0f172a", // Slate 900
        },
      },
      // Removed brutal box-shadows and patterns
    },
  },
  plugins: [],
};
