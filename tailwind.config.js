/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "main-bg": "hsl(233, 47%, 7%)",
        "card-bg": "hsl(244, 38%, 16%)",
        accent: "hsl(277, 64%, 61%)",
        "main-paragraph": "hsla(0, 0%, 100%, 0.75)",
        "stat-heading": "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        "inter-font": ["Inter", "sans-serif"],
        "lexend-font": ["Lexend Deca", "serif"],
      },
      fontSize: {
        h1: "clamp(1.77rem, 2.5vw, 2rem)",
        base: "clamp(1rem, 1vw, 1.5rem)",
        "2xl": "clamp(1.5rem, 1vw, 2rem)",
        "sm": "clamp(0.875rem, 1vw, 1rem)",
      },
      screens: {
        md: "900px",
      },
    },
  },
  plugins: [],
};

