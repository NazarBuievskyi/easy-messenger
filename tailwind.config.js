/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsBold: 'PoppinsBold',
        poppinsRegular: 'PoppinsRegular',
        poppinsMedium: 'PoppinsMedium',
      },
    },
  },
  plugins: [],
}