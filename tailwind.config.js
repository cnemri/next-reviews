/** @type {import('tailwindcss').Config} */
module.exports = {
  // add patterns for nextjs
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        sans: ["var(--font-exo-2)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
