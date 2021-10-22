const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "320px",
      md: "640px",
      lg: "768px",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#9BBFAE",
        secondary: "#3e2723",
      },
      width: {
        portrait: "320px",
        landscape: "768px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
