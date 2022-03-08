module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'ptsans': ['Big Shoulders Display, cursive'],
      'bakbak': ['Bakbak One, cursive'],

    },
    extend: {
      colors: {
        amarillo: '#ffb300',
      },

      animation: {
        anicolor: 'anicolor 30s linear infinite',
      },

      keyframes: {
        anicolor: {
          '0%, 100%': { color: 'white' },
          '50%': { color: '#ffb300' },
        }
      },
    },
  },
  plugins: [],
}
