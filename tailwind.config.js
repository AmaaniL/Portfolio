const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  tailwindConfig: "./styles/tailwind.config.js",
  content: [
    "./src/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/tw-elements/dist/js/*.js",

    "./node_modules/flowbite/**/*.js",
  ],

  safelist: ["animate-[fade-in_left_1s_ease-in-out]"],

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        monokai: {
          yellow: "#e6db74",
          orange: "#fd971f",
          red: "#f92672",
          magenta: "#fd5ff0",
          violet: "#ae81ff",
          blue: "#66d9ef",
          cyan: "#a1efe4",
          green: "#a6e22e",
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),

    require("@tailwindcss/typography"),
    require("tw-elements/dist/plugin"),
  ],

  darkMode: "class",
};
