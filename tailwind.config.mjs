/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Space Grotesk'", "sans-serif"], // Quirky, modern sans
        mono: ["'Courier New'", "monospace"], // Raw feel
      },
      colors: {
        cream: "#fcfbf7", // Soft background
        "neo-teal": "#14b8a6", // Teal-500
        "neo-red": "#dc2626", // Red-600
        "neo-yellow": "#facc15", // Warning/Highlight
        black: "#000000", // Pure black for borders
      },
      boxShadow: {
        neo: "4px 4px 0px 0px rgba(0,0,0,1)", // Hard shadow
        "neo-lg": "8px 8px 0px 0px rgba(0,0,0,1)", // Deep hard shadow
        "neo-sm": "2px 2px 0px 0px rgba(0,0,0,1)", // Subtle hard shadow
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
