/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@siyuqian/commerce-ui/dist/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2k': '2400px',
        '4k': '4000px',
      },
      colors: {
        primary: {
          50: '#e8eafb',
          100: '#c4caf4',
          200: '#9ca8ec',
          300: '#7186e5',
          400: '#4d6adf',
          500: '#1d4fd8',
          600: '#1547cd',
          700: '#003cc1',
          800: '#0031b5',
          900: '#001ca3',
        },
        secondary: {
          50: '#fcfcfc',
          100: '#f7f7f7',
          200: '#f2f2f2',
          300: '#eaeaea',
          400: '#c8c8c8',
          500: '#ababab',
          600: '#818181',
          700: '#6c6c6c',
          800: '#4c4c4c',
          900: '#2a2a2a',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
