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
        primary: {
          DEFAULT: "#2E7D32", // Manager's Green
          light: "#43A047",
          muted: "#E8F5E9",
          dark: "#1B5E20",
        },
        accent: {
          gold: "#C5A059",
          orange: "#E67E22",
          sand: "#F4F1EA",
        },
        brand: {
          jade: "#2E7D32",
          green: "#2E7D32",
          soft: "#F1F8F4",
          dark: "#0A1F11", // Even darker for premium depth
          text: "#1F2937",
        },
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
      },
      spacing: {
        "section-desktop": "120px",
        "section-tablet": "80px",
        "section-mobile": "60px",
      },
      fontSize: {
        "h1": ["56px", "64px"],
        "h2": ["40px", "48px"],
        "h3": ["24px", "32px"],
        "body": ["16px", "24px"],
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        script: ["var(--font-dancing)", "cursive"],
      },
      letterSpacing: {
        ultra: "0.25em",
      },
    },
  },
  plugins: [],
} satisfies Config;
