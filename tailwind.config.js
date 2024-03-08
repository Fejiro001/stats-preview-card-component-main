/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "main-bg": "hsl(233, 47%, 7%)",
        "card-bg": "hsl(244, 38%, 16%)",
        accent: "hsl(277, 64%, 61%)",
        white: "hsl(0, 0%, 100%)",
        "main-paragraph": "hsla(0, 0%, 100%, 0.75)",
        "stat-heading": "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        "inter-font": ["Inter", "sans-serif"],
        "lexend-font": ["Lexend Deca", serif],
      },
    },
  },
  plugins: [],
};
