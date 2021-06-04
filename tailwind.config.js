module.exports = {
  purge: ["./*.html", "./template_pages/**/*.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Montserrat", "serif"],
    },

    screens: {
      "3xl": { max: "1919px" },
      // => @media (max-width: 1535px) { ... }

      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        primary: "#c8102e",
        secondary: "#ffd00a",
        gray: {
          50: "#f7f7f7",
          100: "#efefef",
          200: "#dfdfdf",
          300: "#cacaca",
          400: "#a8a8a8",
          500: "#878787",
          600: "#6d6d6d",
          700: "#5f5f5f",
          800: "#4a4a4a",
          900: "#3d3d3d",
        },
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
