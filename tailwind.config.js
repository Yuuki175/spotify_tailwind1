/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue:'#1d75de',
        dark:'#000000',
        light:'#FFFFFF',
        green:'#1ed760',
      }
    },
    // container:{
    //   center: true,
    //   padding:'15px',
    //   max-with
    // },  
  },
  plugins: [],
}
