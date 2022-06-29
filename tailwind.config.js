/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage:{
        blur: 'url(/src/assets/kz-background.png)'
      },
      fontFamily:{
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          300: '#c12424',
          500: '#A11917',
          700: '#8e1212',
        },
        blue: {
          500: '#3E4282',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#A11917',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [],
}
