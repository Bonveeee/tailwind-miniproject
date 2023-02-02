/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html'],
  theme: {
    //breakpoints
    screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',

    },
    extend: {
      //customization
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBLue: 'hsl(228, 39%, 23%)',
        darkGrayisBlue: 'hsl(227, 12%, 61%)',
        verydarkBlue: 'hsl(223, 12%, 13%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}
