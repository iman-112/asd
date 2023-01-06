/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
      screens:{
  
        xs:"375px",
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl:"1140px",
        "2xl": "1140px",
      
      },
     },
      colors:{
        primary: "#E5ECE9",
        link:"#E3B23C",
        hover:"#E3B23C",
        danger:"#ff0000",
        boz:"#29353D",
        sari:"#E3B23C",
        ag:"#F6FFF8",
        dumag:"#DFFDFF"
      },
      fontFamily:{
        caveot:['Anybody', 'cursive' ],
        sans:['Anybody', 'cursive'],
        josephin:[ 'Josefin Sans', "sans-serif"],
        anybody:['Anybody', 'cursive']
       

      }
    
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}