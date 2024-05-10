/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,tsx,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "black":"#000000",
        "white":"#ffffff",
      }
    },
  },
  plugins: [],
}

