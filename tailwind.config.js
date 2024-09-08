/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E64614',
        'secondary': '#FEC947',
      },
      screens: {
        'sm': '360px',
  
        'md': '768px',

        'lg': '1440px',
        
      }
    },
  },
  plugins: [],
}