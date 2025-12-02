/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#38bdf8",
        "primary-dark": "#0ea5e9",
      },
    },
  },
  plugins: [],
}
