/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abold: ["Almarai-Bold", "sans-serif"],
        aebold: ["Almarai-ExtraBold", "sans-serif"],
        alight: ["Almarai-Light", "sans-serif"],
        aregular: ["Almarai-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
