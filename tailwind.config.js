const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {

  content: ["./src/*.{html,js}",
  "./*.{html,js}",
  "./node_modules/tw-elements/dist/js/*.js",

  "./node_modules/flowbite/**/*.js"],

  safelist: [
    'animate-[fade-in_left_1s_ease-in-out]'
  ],

  theme: {
    screens: {

    },
    extend: {

    },
  },
  plugins: [
    
  require('flowbite/plugin'),
  require("tw-elements/dist/plugin")],
  darkMode: 'class',
}
