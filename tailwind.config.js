module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F0F0F5',
        grayborder: '#DCDCE5',
        lightGray: '#A8A8B3',
        redHero: '#E02041',
        mainTitle: '#13131A',
        texts: '#737380',
      },
      fontFamily: {
        default: ['Roboto', 'sans-serif', 'Helvetica'],
      },
    },
  },
  plugins: [],
};
