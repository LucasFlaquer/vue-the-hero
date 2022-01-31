module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#F0F0F5',
        'redHero': '#E02041'
      },
      fontFamily: {
        'default': ['Roboto', 'sans-serif', 'Helvetica']
      }
    },
  },
  plugins: [],
};
