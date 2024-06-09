/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["Dm Sans", "sans-serif"],
      },
      colors: {
        goldCrayola: "hsl(38, 61%, 73%)",
        eerieBlack1: "hsla(210, 4%, 9%, 1)",
        eerieBlack2: "hsla(210, 4%, 11%, 1)",
        eerieBlack4: "hsla(0, 0%, 13%, 1)",
        whiteAlpha10: "hsla(0, 0%, 100%, 0.1)",
        whiteAlpha20: "hsla(0, 0%, 100%, 0.2)",
        smokyBlack1: "hsla(40, 12%, 5%, 1)",
        smokyBlack2: "hsla(30, 8%, 5%, 1)",
        quickSilver: "hsla(0, 0%, 65%, 1)",
        blackAlpha80: "hsla(0, 0%, 0%, 0.8)",
      },
      animation: {
        scaleUp: "scaleUp 5s linear forwards",
        shine: "shine 1s",
        move: "move 5s linear infinite",
      },

      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(1)", opacity: "0" },
          "10%": { opacity: "100%" },
          "100%": { transform: "scale(1.15)" },
        },
        shine: {
          "100%": { left: "100%" },
        },
        move: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(30px)" },
        },
      },
      animationDelay: {},
    },
  },
  plugins: [],
};
