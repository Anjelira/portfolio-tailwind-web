/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding : '20px'
    },
    extend: {
      colors: {
        primary : '#f87171',
        secondary: '#fb7185',
      }
    },
  },
  plugins: [],
}