import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0B",
        surface: "#111113",
        elevated: "#18181B",
        border: "#27272A",
        "border-hover": "#3F3F46",
        accent: "#3B82F6",
        "text-primary": "#FAFAFA",
        "text-secondary": "#A1A1AA",
        "text-dim": "#52525B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        "2xl": "42rem",
      },
    },
  },
  plugins: [],
};
export default config;