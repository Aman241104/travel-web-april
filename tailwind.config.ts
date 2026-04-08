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
        "bg-light": "#F9FAFB",
        onyx: {
          DEFAULT: "#050505",
          light: "#1A1A1A",
          muted: "#262626",
        },
        titanium: {
          DEFAULT: "#1A1A1A",
          light: "#262626",
          dark: "#0F0F0F",
        },
        silver: {
          DEFAULT: "#E5E7EB",
          light: "#F3F4F6",
          dark: "#9CA3AF",
        },
        accent: {
          blue: "#3B82F6",
          violet: "#8B5CF6",
          gold: "#D4AF37",
          champagne: "#F3E5AB",
        },
        jade: {
          DEFAULT: "#3B82F6",
          darkest: "#050505",
          vibrant: "#60A5FA",
        },
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#A67C00",
        },
        azure: {
          DEFAULT: "#3B82F6",
          dark: "#1D4ED8",
        },
        "jade-black": "#050505",
        "jade-white": "#FFFFFF",
        cream: "#F9FAFB",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.25em",
      },
    },
  },
  plugins: [],
} satisfies Config;
