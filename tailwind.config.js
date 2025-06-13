/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      'xl-max': { 'raw': '(max-width: 1440px)' },
      'lg-max': { 'raw': '(max-width: 1024px)' },
      'md-max': { 'raw': '(max-width: 768px)' },
      'sm-max': { 'raw': '(max-width: 576px)' }, 
    },
  },
  plugins: [],
}
