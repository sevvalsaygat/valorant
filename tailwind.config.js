/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        red:{
          50: '#ff7d66',
          100: '#ff3041',
          150: '#ff3342',
          300: '#eb0029'
        },
        gray: {
          50: '#f9f9f9',
          100: '#333333',
          150: '#2b2a29',
          200: '#444444',
          250: '#292929',
          300: '#fcfcfc',
          350: '#e6e4e4',
        },
      },
      fontSize: {
        '13': '0.8125rem',
      },
      borderRadius: {
        '12': '0.75rem',
        '7': '0.4375rem',
      }
    },
  },
  plugins: [],
}
