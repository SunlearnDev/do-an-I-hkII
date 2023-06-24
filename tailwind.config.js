/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],

  theme: {
    extend: {
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
  ],
  darkMode: "class"
}

