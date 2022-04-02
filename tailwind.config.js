module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'ptsans': ['Big Shoulders Display, cursive'],
      'bakbak': ['Bakbak One, cursive'],
      'roboto': ['Roboto Condensed, sans-serif'],
      'fredoka': ['Fredoka, sans-serif'],
      'racing': ['Racing Sans One, cursive'],
      'guy': ['Luckiest Guy, cursive'],
      'book': ['Futura Book'],
      'futura': ['Futura Medium'],
      'futura2': ['Futura Regular']
    },
    borderRadius: {
      'supboxes': '10px 10px 0 0',
      'infboxes': '0 0 10px 10px',
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      'full': '9999px',
      'large': '12px',
    },
    textShadow: {
      'default': '0 2px 0 #000',
      'fort': '0 0 6px black',
      'md': '0 2px 2px white',
      'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
      'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
    },
    extend: {
      colors: {
        amarillo: '#ffb300',
        celeste: '#0095ff',
      },
      dropShadow: {
        'plus': '0 2px 3px rgba(0, 0, 0, 0.45)',
      },
      animation: {
        anicolor: 'anicolor 30s linear infinite',
        anicolor2: 'anicolor2 10s ease infinite',
        disappear: 'disappear 2s ease-in 1',
        appear: 'appear .5s ease-in-out 1',
      },

      keyframes: {
        anicolor: {
          '0%, 100%': { color: 'white' },
          '50%': { color: '#ffb300' },
        },
        anicolor2: {
          '0%, 100%': { color: 'white' },
          '50%': { color: '#ffb300' },
        },
        disappear: {
          '0%': { opacity: 1 },
          '1%': { opacity: 1 },
          '70%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        appear: {
          '0%': { opacity: 0 },
          '70%': { opacity: 0.3 },
          '100%': { opacity: 1 },
        },
      },
      boxShadow: {
        'boxes': '0 0 9px 1px #a1a1a1',
        'superhover': '0 13px 12px 4px rgb(0 0 0 / 41%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
