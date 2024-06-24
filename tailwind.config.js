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
      'green': '#45D40C',
      'gradient1': '#052B4D',
      'gradient2': '#09141E',
      'lightgradient1': '#6EBDF5',
      'lightgradient2': '#09141E',
      'buttongradient1': '#F9F9F9',
      'buttongradient2': '#9E9E9E',
      'buttontext': '#606060',
    },
    fontFamily: {
      'sans': ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      'code': ['"IBM Plex Mono"', 'ui-monospace']
    }
  },
  plugins: [],
}
