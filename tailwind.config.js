/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "*.html",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {    },
    fontFamily: {
      'Lato' :['Lato', 'sans-serif']
    },
  },
  plugins: [],
}

