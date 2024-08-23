/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        jetbrains: 'JetBrains Mono'
      },
      colors: {
        dark: {
          1000: '#141414',
          900: '#1a1a1a',
          800: '#1f1f1f',
          700: '#242424',
          600: '#292929',
          500: '#2e2e2e',
          400: '#333333',
          300: '#383838',
          200: '#3d3d3d',
          100: '#424242'
        },
        light: {
          1000: '#ebebeb',
          900: '#e5e5e5',
          800: '#e0e0e0',
          700: '#dbdbdb',
          600: '#d6d6d6',
          500: '#d1d1d1',
          400: '#cccccc',
          300: '#c7c7c7',
          200: '#c2c2c2',
          100: '#bdbdbd'
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true, preferredStrategy: 'pseudoelements' }),
    require('@tailwindcss/forms')
  ]
}
