const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* Marin Academy brand palette */
        "ma-red":   "#dc2626",
        "ma-red-lt":"#ef4444",
        "ma-navy":  "#0a0a0a",
        "ma-navy-mid": "#1a1a1a",
      },
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
        head: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

/**
 * Exposes every Tailwind color as a CSS custom property so the Aurora
 * component can reference them via var(--blue-500), var(--indigo-300), etc.
 */
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({ ":root": newVars });
}
