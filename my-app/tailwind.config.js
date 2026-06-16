/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5A00",
        secondary: "#F5C542",
        dark: "#0B0B0B",
        card: "#111827"
      }
    }
  },
  plugins: [],
}
