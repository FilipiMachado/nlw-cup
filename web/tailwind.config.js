/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },

      colors: {
        ignite: {
          500: "#129e57",
        },

        yellow: {
          500: "#f7dd43",
        },

        gray: {
          100: "#e1e1e6",
          800: "#202024",
          900: "#121214",
        },
      },
    },
  },
  plugins: [],
};
