/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1e40af",
          foreground: "#ffffff",
        },
      },
      animation: {
        wave: "wave 15s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite",
        float: "float 20s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(0) scale(1.05)" },
          "50%": { transform: "translateY(-5%) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
