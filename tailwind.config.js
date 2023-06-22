/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    listStyleType: {
      square: 'square',
    },
    fontFamily: {
      'primary': ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}