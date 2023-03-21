/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        'custom': '0 0 5px rgba(0, 0, 0, 0.3)',
        'custom1': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      colors: {
        blue:'#1d75de',
        blue2:'#0d72ea',
        dark:'#000000',
        light:'#FFFFFF',
        green:'#1ed760',
        darkgreen:'#056952',
        darkgreen1:'#04513f',
        fontlime:'#c5f0c9',
        dark1:'#191414',
        dark2:'#222326',
        dark3:'#efefef',
        fontgray:'#535353',
        orange:'#f59b23',
        custviolet:'#af2796',
        custblue:'#509bf5',
        custlviolet:'#b49bc8',
        custpink:'#f4739f',
        custdorange:'#c83e2f',
        custdgreen:'#088461',
      },
    },
  },
  plugins: [],
}
