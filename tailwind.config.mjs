/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0891b2", // Teal-600
          hover: "#0e7490", // Teal-700
        },
        secondary: {
          DEFAULT: "#991b1b", // Red-800
          hover: "#7f1d1d", // Red-900
        },
        "swiss-bg": "#F8FAFC", // Slate-50
        "swiss-text": "#020617", // Slate-950
        "swiss-muted": "#64748b", // Slate-500
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-pattern": "4rem 4rem",
      },
    },
  },
  plugins: [],
};
