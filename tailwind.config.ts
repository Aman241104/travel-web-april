import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jade: {
          DEFAULT: "#00695C",
          light: "#4DB6AC",
          darkest: "#004D40",
          soft: "#E0F2F1",
        },
        gold: {
          DEFAULT: "#D4AF37",
          hover: "#C5A059",
          muted: "rgba(212, 175, 55, 0.1)",
        },
        "jade-black": "#1A1D1C",
        "jade-white": "#FFFFFF",
        cream: "#FAF9F6", // High-end light background
        sand: "#F2E8D5",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.2em",
      },
    },
  },
  plugins: [],
} satisfies Config;
