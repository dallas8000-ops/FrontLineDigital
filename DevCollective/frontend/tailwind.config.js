/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#12141d',
          card: '#1c222d',
          'card-hover': '#242b38',
          gold: '#ffb400',
          'gold-dim': '#e6a200',
          muted: '#9ca3af',
          line: '#2a3140',
        },
        primary: {
          50: '#fff8e6',
          100: '#ffefc2',
          200: '#ffe08a',
          300: '#ffd052',
          400: '#ffc21a',
          500: '#ffb400',
          600: '#e6a200',
          700: '#b37e00',
          800: '#805a00',
          900: '#4d3600',
        },
        accent: {
          50: '#fff8e6',
          100: '#ffefc2',
          200: '#ffe08a',
          300: '#ffd052',
          400: '#ffc21a',
          500: '#ffb400',
          600: '#e6a200',
          700: '#b37e00',
          800: '#805a00',
          900: '#4d3600',
        },
        dark: {
          50: '#e8eaef',
          100: '#c5cad4',
          200: '#9aa3b3',
          300: '#6f7b92',
          400: '#4a576d',
          500: '#2f3a4d',
          600: '#242b38',
          700: '#1c222d',
          800: '#161a24',
          900: '#12141d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 0 1px rgba(255, 180, 0, 0.35), 0 8px 32px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
