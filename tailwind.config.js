/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./index.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        "sage-1": "#f1f2ed",
        "sage-2": "#e7ece7",
        "sage-3": "#a7beb2",
        "sage-4": "#a0b69e",
        "sage-5": "#686859",
        "dark-1": "#747474",
        "dark-2": "#52525b",
      },
      fontFamily: {
        // sans: ["Nunito Sans", "sans-serif"],
        sans: ["Lato", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        "serif-2": ["Playfair Display SC", "serif"],
        display: ["Lobster Two", "cursive"],
        cursive: ["Great Vibes", "cursive"],
        pinyon: ["Pinyon Script", "cursive"],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
