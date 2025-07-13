const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],

  safelist: ["animate-slideInLeft"],

  theme: {
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
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-1000px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
    },

    // Use default breakpoints + your extensions if needed
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/typography"),
    require("tw-elements/dist/plugin"),
  ],

  darkMode: "class",
};
