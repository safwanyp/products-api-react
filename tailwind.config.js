/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
    },
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        info: '#17a2b8',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#ebebeb',
        dark: '#343a40',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

