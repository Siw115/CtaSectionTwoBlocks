/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"TT Commons Pro"', 'sans-serif'],
        serif: ['"GT Alpina"', 'serif'],
      },
      fontWeight: {
        450: '450',
      },
    },
  },
  plugins: [],
}

