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
      },

      // ✅ KEEP YOUR EXISTING ONE
      keyframes: {
        scrollUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },

        // ✅ ADD THESE
        scrollSlow: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        scrollMedium: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        scrollFast: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        }
      },

      animation: {
        scrollUp: "scrollUp 15s linear infinite",

        // ✅ ADD THESE
        scrollSlow: "scrollSlow 25s linear infinite",
        scrollMedium: "scrollMedium 18s linear infinite",
        scrollFast: "scrollFast 12s linear infinite",

        // ✅ NEW
        scrollLeft: "scrollLeft 30s linear infinite",
      },

    }
  },
  plugins: [],
}