/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"TT Commons Pro"', 'Inter', 'sans-serif'],
        serif: ['"GT Alpina"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

