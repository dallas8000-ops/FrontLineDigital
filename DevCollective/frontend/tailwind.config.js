/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f8fb',
          100: '#c8eef5',
          200: '#9ddfe9',
          300: '#72cfdd',
          400: '#45bccf',
          500: '#1a8fa5',
          600: '#177f93',
          700: '#136779',
          800: '#0f4f5e',
          900: '#0a3742',
        },
        accent: {
          50: '#fff8eb',
          100: '#ffedc7',
          200: '#ffe09e',
          300: '#ffd173',
          400: '#f7b13c',
          500: '#e8800e',
          600: '#cd6f0e',
          700: '#a95710',
          800: '#864513',
          900: '#6b3813',
        },
        dark: {
          50: '#d9e6ef',
          100: '#b8cfdd',
          200: '#93b5c8',
          300: '#6e9ab0',
          400: '#527f95',
          500: '#3e657a',
          600: '#2f5061',
          700: '#203a47',
          800: '#122631',
          900: '#07131f',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Segoe UI', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
