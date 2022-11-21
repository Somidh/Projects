/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {

      // Min-width

      '5xlmin': { 'min': '1900px' },
      // => @media (min-width: 2000px) {...}

      // Max-width

      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1150px' },
      // => @media (max-width: 1150px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      '2md': { 'max': '950px' },
      // => @media (max-width: 767px) { ... }


      'sm': { 'max': '650px' },
      // => @media (max-width: 639px) { ... }

      's': { 'max': '450px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
