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
          200: '#ff4655',
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
          400: '#768079',
        },
        blue: {
          200: '#0e1921'
        },
      },
      fontSize: {
        '120': '4.5rem',
        '140': '8.75rem',
        '16': '1rem',
        '13': '0.8125rem',
        '60': '3.75rem',
      },
      borderRadius: {
        '12': '0.75rem',
        '7': '0.4375rem',
      },
      lineHeight: {
        //24px kaç rem
        '12': '1.5rem',
      },
      animation: {
        'slide-right': 'slide-right 0.6s',
      },
      keyframes: {
        'slide-right': {
          '100%': { transform: 'translateX()' },
          '100%': { transform: 'translateX(2rem)' },
        },
      },
    },
  },
  plugins: [],
}
