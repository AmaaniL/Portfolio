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
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {

    },
  },
  plugins: [
    
  require('flowbite/plugin'),
  require("tw-elements/dist/plugin")],
  darkMode: 'class',
}
