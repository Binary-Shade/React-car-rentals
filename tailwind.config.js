/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],  // Ensure Poppins is defined with a fallback
      },
      backgroundColor:{
        'default': 'rgb(17 24 39 / var(--tw-bg-opacity))'
      }
    },
  },
  plugins: [],
}
