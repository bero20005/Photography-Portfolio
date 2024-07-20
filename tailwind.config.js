/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Mulish',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',

        accent: '#EEF7F9',


        instagram: {
          DEFAULT: '#E1306C',
          light: '#F56040',
          dark: '#C13584',
          'gradient-start': '#F58529',
          'gradient-end': '#DD2A7B',
          'gradient-purple': '#8134AF',
          'gradient-blue': '#515BD4',
          'gradient-cyan': '#405DE6',
        }
      },
    },
  },
  plugins: [],
}

