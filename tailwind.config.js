/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      'darkblue': '#0B3256',
      'overlay': '#09141E',
      'black': '#0E0E0E',
      'white': '#F2F2F2',
      'gradient1': '#052B4D',
      'gradient2': '#09141E',
      'lightgradient1': '#6EBDF5',
      'lightgradient2': '#09141E',
      'button1': '#F9F9F9',
      'buttontext': '#606060',
    }
  },
  plugins: [],
}
