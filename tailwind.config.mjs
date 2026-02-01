/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "sans-serif"], // Keeping Inter for clean social look
        serif: ["'Merriweather'", "serif"], // Keeping for accents, though Social might prefer sans. Prompt didn't specify, sticking to current base.
      },
      colors: {
        primary: {
          DEFAULT: "#0d9488", // Teal 600 - "Use large, bold color blocks"
          dark: "#0f766e", // Teal 700
          light: "#2dd4bf", // Teal 400
        },
        secondary: {
          DEFAULT: "#7f1d1d", // Red 900 - "Buttons... solid Red-900"
          hover: "#991b1b", // Red 800
        },
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        pill: "9999px", // For buttons
      },
      boxShadow: {
        pop: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // Standard shadow-lg equivalent
        "pop-hover":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", // XL equivalent
      },
    },
  },
  plugins: [],
};
