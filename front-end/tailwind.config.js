/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple: {
          300: "#E0E7FF",
          600: "#5046E4",
        }
      },
      container: {
        padding: "1rem"
      }
    },
  },
  plugins: [],
}