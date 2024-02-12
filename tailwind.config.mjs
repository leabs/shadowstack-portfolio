/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "skew-scroll": "skew-scroll 24s linear infinite",
        
      },
      colors: {
        "secondary": "#1a1a1a",
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#1a1a1a",
        },
      },
    },
    fontFamily: {
      body: [
        "IndustryBlack",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "IndustryBlack",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    keyframes: {
      "skew-scroll": {
        "0%": {
          transform:
            "rotatex(13deg) rotateZ(-13deg) skewX(13deg) translateZ(0) translateY(110%)",
        },
        "95%": {
          opacity: 1,
        },
        "100%": {
          transform:
            "rotatex(13deg) rotateZ(-13deg) skewX(13deg) translateZ(0) translateY(-430%)",
            opacity: 0,
        },
      },

    },

  },
  plugins: [],
};
