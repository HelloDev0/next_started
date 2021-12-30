module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // screen:{
    //   'sm':'375px',
    //   'md':'768px',
    //   'lg':'1024px'
    // },
    extend: {
      // backgroundImage:{
      //   'hero-pattern':"url('')"
      // }
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin'),
    require('daisyui'),
  ],
}
