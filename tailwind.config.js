/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "var(--accent-color)",
        secondary: "var(--bg-secondary)",
        "background-light": "var(--bg-primary)", // Mapping to existing dark theme vars for consistency
        "background-dark": "var(--bg-primary)",
        "card-light": "var(--card-bg)",
        "card-dark": "var(--card-bg)",
        "text-light": "var(--text-primary)",
        "text-dark": "var(--text-primary)",
      },
      fontFamily: {
        sans: ['IBM Plex Mono', 'monospace'],
        display: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "0px",
        'sm': '0px',
        'md': '0px',
        'lg': '0px',
        'xl': '0px',
        '2xl': '0px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}

