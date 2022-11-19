/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'main-1': '#D2120F',
        'main-2': '#D93937',
        'main-3': '#E1615F',
        'main-4': '#E88887',
        'main-5': '#F0B0AF',
        'main-6': '#F6D0CF',
        'main-7': '#AF0F0C',
        'main-8': '#1D2939',
      
        'sec-1': '#04172A',
        'sec-2': '#04172AE5',
        'sec-3': '#04172ACC',
        'sec-4': '#04172AB2',
        'sec-5': '#04172A99',
        'sec-6': '#04172A80'
      },

      fontFamily: {
        avenir: ['Avenir'],
        avenir_light: ['Avenir-light'],
        avenir_bold: ['Avenir-bold']
      }
    },
  },
  plugins: [],
}
