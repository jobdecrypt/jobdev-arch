const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaulttheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      sans: 'Inter var, Segoe UI, Helvetica Neue, Noto Sans, Apple Color Emoji, Segoe UI Symbol, Noto Color Emoji',
      serif: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif'
    },
    extend: {
      colors: {}
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
};
