/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C5A059',
          hover: '#B38E46',
          light: '#FBF4E6',
        }
      }
    },
  },
  plugins: [],
}
