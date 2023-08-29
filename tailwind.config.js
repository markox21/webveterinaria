/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary': '#f4f4f4',
      'grayy': '#808080',
    },

    transition:{
      'nav': 'transition: opacity 0.3s ease-in-out',
    },
    extend: {},
  },
  plugins: [],
}

