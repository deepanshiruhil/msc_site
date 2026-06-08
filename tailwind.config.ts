import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Helvetica Neue system stack — used everywhere
        sans: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        blue: {
          soft:   "#4a90d9",
          mid:    "#2563eb",
          deep:   "#1e40af",
        },
        beige: {
          DEFAULT: "#f5f0e8",
          dark:    "#ede8dc",
          card:    "#f9f6f0",
        },
        navy: {
          DEFAULT: "#080d1a",
          card:    "#111827",
        },
      },
      borderRadius: {
        xl2: "20px",
        xl3: "28px",
      },
    },
  },
  plugins: [],
};

export default config;
