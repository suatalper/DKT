/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a252f", // Darker Ink Blue (nearly black)
          hover: "#2c3e50",
        },
        secondary: {
          DEFAULT: "#6b0f0f", // Darker Maroon
          hover: "#800000",
        },
        accent: {
          DEFAULT: "#b08d45", // Darker Antique Gold for text visibility
          hover: "#c5a059",
        },
        vintage: {
          50: "#fdfbf7", // Old Paper Light
          100: "#f5f5dc", // Old Paper Darker
          200: "#e6e2d3",
          900: "#1a1a1a", // Deep Charcoal
        },
        "dark-bg": "#fdfbf7", // Replaced with Old Paper for compat
        "dark-surface": "#f5f5dc", // Replaced with Beige for compat
        "text-main": "#1a252f", // Replaced with Dark Ink
        "text-muted": "#3e2723", // Much Darker Sepia/Brown
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        mono: ["'Courier Prime'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }, // Reduced movement for heavier feel
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
      backgroundImage: {
        "paper-texture":
          "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
      },
    },
  },
  plugins: [],
};
