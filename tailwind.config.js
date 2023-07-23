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
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        e: {
          "0%, 100%": { transform: "translateX(1.5rem)" },
          "50%": { transform: "translateX(3rem)" },
        },
        emd: {
          "0%, 100%": { transform: "translateX(1.5rem)" },
          "50%": { transform: "translateX(4rem)" },
        },
        ra: {
          "0%, 100%": { transform: "translateX(1.5rem) scale(1)" },
          "20%, 80%": {
            transform: "translateX(1.5rem) scale(.002)",
          },
          "50%": { transform: "scale(0)" },
        },
        tern: {
          "0%, 100%": { transform: "scale(0)" },
          "20%, 80%": { transform: "scale(.002)" },
          "50%": { transform: "translateX(1rem) scale(1)" },
        },
        dan: {
          "0%, 100%": { transform: "translateX(-2rem)" },
          "20%, 80%": {
            transform: "translateX(-2rem) scale(.002)",
          },
          "50%": { transform: "scale(0)" },
        },
        danmd: {
          "0%, 100%": { transform: "translateX(-2.5rem)" },
          "20%, 80%": {
            transform: "translateX(-2.5rem) scale(.002)",
          },
          "50%": { transform: "scale(0)" },
        },
        al: {
          "0%, 100%": { transform: "translateX(-1.5rem)" },
          "50%": {
            transform: "translateX(-2rem)",
          },
        },
        almd: {
          "0%, 100%": { transform: "translateX(-1.5rem)" },
          "50%": {
            transform: "translateX(-3rem)",
          },
        },
        if: {
          "0%, 100%": { transform: "translateX(-1.5rem)" },
          "20%, 80%": {
            transform: "translateX(-1.5rem) scale(.002)",
          },
          "50%": { transform: "scale(0)" },
        },
      },
      animation: {
        e: "e 6s ease-in-out infinite",
        emd: "emd 6s ease-in-out infinite",
        ra: "ra 6s ease-in-out infinite",
        tern: "tern 6s ease-in-out infinite",
        dan: "dan 6s ease-in-out infinite",
        danmd: "dan 6s ease-in-out infinite",
        al: "al 6s ease-in-out infinite",
        almd: "almd 6s ease-in-out infinite",
        if: "if 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
