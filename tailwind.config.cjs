/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#1D92D6",
      black: "#222",
      lightBlack: "#777",
      white: "#fff",
      bgInput: "#6A59D1",
    },
    extend: {
      keyframes: {
        bounce :{
          "0%, 100% ":{
            transform:" translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)"
          },

         "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)"
          },
        },

        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
