module.exports = {
  purge: {
    enabled: true,
    mode: 'all',
    content: ['./src/**/*.html', './src/**/*.js'],
    options: {
      keyframes: true
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        github: '#24292e',
        youtube: '#dd1111', 
        twitter: '#1d91d2',
        instagram: '#dd2a7b'

        // YouTube original brand color is #ff0000,
        // Twitter original brand color is #1da1f2,
        // but I've changed them to keep colors nicer to look at.
        // Also, I'm not 100% sure of the Instagram pink color hex code,
        // different sources gives us a different code

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}