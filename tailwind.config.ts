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
        "bg-light": "#FBF6EE",
        onyx: {
          DEFAULT: "#0F2F2A", // Deep Forest Green
          light: "#254F46",
          muted: "#36665B",
        },
        brand: {
          emerald: "#2F7F73", 
          softGreen: "#6FC3B2", // Soft luxury green
          subtext: "#D6E2DF", // Light subtext
          cream: "#F7F6F3", 
          muted: "#A8B3B0", 
          teal: "#6CB4A5",
          tealDark: "#5AA092",
          sand: "#FBF6EE",
          sandDark: "#F2EACC",
          navy: "#1C3B34",
          yellow: "#F8E8C1",
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
          blue: "#6CB4A5", // map to teal for backward compatibility
          violet: "#F8E8C1", // map to yellow for backward compatibility
          gold: "#D4AF37",
          champagne: "#F3E5AB",
        },
        jade: {
          DEFAULT: "#6CB4A5",
          darkest: "#1C3B34",
          vibrant: "#7BC8B8",
        },
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#A67C00",
        },
        azure: {
          DEFAULT: "#6CB4A5",
          dark: "#1C3B34",
        },
        "jade-black": "#1C3B34",
        "jade-white": "#FFFFFF",
        cream: "#FBF6EE",
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
