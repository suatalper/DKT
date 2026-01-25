/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00E5FF", // Vivid Turquoise
          hover: "#00B8D4",
        },
        secondary: {
          DEFAULT: "#FF0040", // Vivid Maroon/Red
          hover: "#D50032",
        },
        accent: {
          DEFAULT: "#FACC15", // Bright Yellow
          purple: "#A855F7", // Vivid Purple
        },
        neutral: {
          50: "#FEFCE8", // Pale Yellow / Off-white
          100: "#F3F4F6", // Light Gray
          900: "#111827", // Almost Black
        },
        "dark-bg": "#FEFCE8", // Replaced with Pale Yellow for compat
        "dark-surface": "#FFFFFF", // Replaced with White for compat
        "text-main": "#000000", // Black
        "text-muted": "#374151", // Dark Gray
      },
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"],
        display: ["'Clash Display'", "sans-serif"],
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px rgba(0,0,0,1)",
        "brutal-lg": "8px 8px 0px 0px rgba(0,0,0,1)",
        "brutal-sm": "2px 2px 0px 0px rgba(0,0,0,1)",
      },
      backgroundImage: {
        "grid-pattern":
          "url('https://www.transparenttextures.com/patterns/graphy.png')",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
