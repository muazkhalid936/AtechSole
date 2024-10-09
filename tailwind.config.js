/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'rgba(22, 22, 156, 0.5)',
        'light':'#EDF5FF'
      }
    },
  },
  plugins: [],
}