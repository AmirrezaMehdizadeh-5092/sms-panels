/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '481px',
      'lg': '769px',
      'xl': '1024px',
    },
    extend: {}
  },
  plugins: [],
}
