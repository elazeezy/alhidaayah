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
        primary: {
          DEFAULT: "#1A5C38",
          50: "#f0f9f4",
          100: "#dcf0e6",
          200: "#bbe1ce",
          300: "#8acaad",
          400: "#53ab85",
          500: "#308e68",
          600: "#1A5C38",
          700: "#1a5233",
          800: "#17422a",
          900: "#143624",
          950: "#0a1f15",
        },
        gold: {
          DEFAULT: "#C9A227",
          50: "#fdf9ec",
          100: "#f9f0cc",
          200: "#f3df95",
          300: "#ecc957",
          400: "#e5b32e",
          500: "#C9A227",
          600: "#b8860b",
          700: "#956909",
          800: "#7a520d",
          900: "#674410",
          950: "#3a2405",
        },
        dark: "#0D1B2A",
        cream: "#F5F0E8",
        accent: "#B8860B",
      },
      fontFamily: {
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll": "scroll 30s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, rgba(26,92,56,0.85) 0%, rgba(13,27,42,0.9) 100%)",
        "gold-gradient": "linear-gradient(135deg, #C9A227 0%, #B8860B 100%)",
        "dark-gradient": "linear-gradient(180deg, transparent 0%, rgba(13,27,42,0.9) 100%)",
      },
      boxShadow: {
        "gold": "0 4px 20px rgba(201, 162, 39, 0.3)",
        "primary": "0 4px 20px rgba(26, 92, 56, 0.3)",
        "card": "0 2px 20px rgba(13, 27, 42, 0.08)",
        "card-hover": "0 8px 40px rgba(13, 27, 42, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
