const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['src/**/*.liquid'],
  theme: {
    extend: {
      colors: {
        gray: colors.gray
      },
    },
  },
  variants: {},
  plugins: [],
};
