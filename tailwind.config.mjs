/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        serif: ["'Playfair Display'", "serif"], // Classic, philosophical feel
      },
      colors: {
        primary: {
          DEFAULT: "#2dd4bf", // Neon Teal - "Glowing accents"
          hover: "#14b8a6",
        },
        dark: {
          bg: "#0f172a", // Slate 900 - Global background
          surface: "#1e293b", // Slate 800 - Component background
          border: "#334155", // Slate 700 - Borders
        },
        burgundy: {
          DEFAULT: "#450a0a", // Deep Red 950 - "Rich Velvet"
          hover: "#7f1d1d", // Red 900
          light: "#991b1b", // Red 800
        },
        text: {
          main: "#e2e8f0", // Light Gray - Main text
          muted: "#94a3b8", // Slate 400 - Muted text
        },
      },
      boxShadow: {
        glow: "0 0 20px -5px rgba(45, 212, 191, 0.3)", // Neon glow effect
      },
    },
  },
  plugins: [],
};
