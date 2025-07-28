module.exports = {
  content : [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'based-red': '#DD1D25',
        'based-blue': '#104C64',
        
        // Neutral colors
        'based-light': '#C6C6D0',
        
        // Accent colors (wood tones)
        'based-wood-light': '#D59D80',
        'based-wood-medium': '#C0754D',
        'based-wood-dark': '#B6410F'
      },
    },
  },
  plugins: [],
}