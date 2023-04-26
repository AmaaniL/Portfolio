const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}",
  "./*.{html,js}",
  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    screens: {

    },
    extend: {

    },
  },
  plugins: [require('@tailwindcss/forms'),
  require("tw-elements/dist/plugin.cjs")],
}
