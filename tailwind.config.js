/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-gray": "#2F2D2E",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/HomeHero.jpg')",
      },
    },
  },
  plugins: [],
};
