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
        "titleFont":"#263238",
        "grey900":"#717171",
        "white800":"#cccccc",
        "brandPrimary":"#003546",
      },
      margin: {
        '15': '5rem',
        '30': '30rem',
      },
    },
  },
  plugins: [],
}

