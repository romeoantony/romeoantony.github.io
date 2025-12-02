/** @type {import('tailwindcss').Config} */
export default {
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
