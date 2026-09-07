import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          deep: "#061d24",
          dark: "#092831",
          base: "#0c3b45", // Exact match with Bie Hin suede cloth logo background
          medium: "#124955",
          light: "#1a5d6c",
        },
        gold: {
          dark: "#9c7736",
          base: "#dfb76c", // Exact match with Bie Hin metallic script
          bright: "#edd79c",
          light: "#f3e4bc",
          pale: "#faedd1",
        },
        ivory: {
          pure: "#ffffff",
          warm: "#fcfbf7",
          linen: "#f7f4ec",
          dark: "#ece5d8",
          border: "#e5dccc",
        },
        charcoal: {
          dark: "#0a1316",
          text: "#1e2427",
          muted: "#4e5659",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.24em",
        tightest: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
