import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-content": "#a7a7a7",
        "dark-content": "#666666",
        "light-text": "#cccccc",
        "dark-text": "#42446e",
        "purple-custom": "#E70FAA",
        "light-blue-custom": "#00c0fd",
        "card-bg-custom": "#363636",
      },
    },
  },
  plugins: [],
} satisfies Config;
