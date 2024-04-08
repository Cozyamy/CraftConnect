/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens:{
        'sm-max': {'max': '770px'},
        'md-max': {'max': '900px'}
      },
    },
  },
  plugins: [],
}

