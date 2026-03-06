import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f8fa",
          100: "#eef1f5",
          200: "#d9e0ea",
          300: "#b7c4d6",
          400: "#7f95b5",
          500: "#58729a",
          600: "#3f597d",
          700: "#324765",
          800: "#2b3c54",
          900: "#263347"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
