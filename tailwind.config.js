/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  purge: [
    './pages/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/tyres/cars/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/locations/*.{js,ts,jsx,tsx,mdx}',
  ],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'uk-reg-plates': ['UKRegPlatesFont', 'sans-serif'],
      },
      colors: {
        ...colors,
        '24h-yellow': '#feea12',
        // 'taxi-yellow': '#feea12',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mobile-tyre-fitting-at-work': '/mobile-tyre-fitting/at-work.jpeg'

      },
    },
  },
  plugins: [require("daisyui")],
}
