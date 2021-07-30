module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
   theme: {
    extend: {
      height: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',

      },

      colors: { 
        primary: 'rgba(83, 181, 235, 1)' , 
        secondary: 'FFFFF',
        main : 'rgba(243, 247, 250, 1)',
      },
      backgroundImage: theme => ({
        'about': "url('./img/about.jpg')",
        })

      },
     
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
