const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/*.{html,js}",
  "./*.{html,js}",
  "./node_modules/tw-elements/dist/js/**/*.js",
  "./node_modules/flowbite/**/*.js"],
  
  theme: {
    screens: {

    },
    extend: {

    },
  },
  plugins: [
  require('flowbite/plugin'),
  require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}
