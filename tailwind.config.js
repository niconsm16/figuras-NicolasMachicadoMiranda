module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'ptsans': ['Big Shoulders Display, cursive'],
      'bakbak': ['Bakbak One, cursive'],

    },
    borderRadius: {
      'supboxes': '10px 10px 0 0',
      'infboxes': '0 0 10px 10px',
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
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
      boxShadow: {
        'boxes': '0 0 9px 1px #a1a1a1',
      },
    },
  },
  plugins: [],
}
