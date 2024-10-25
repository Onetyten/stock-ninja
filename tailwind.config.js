/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "my-green-light" : "#26c753",
        "my-orange" : "#ff5e54",
        "my-mossy-green" : "#2b4e33",
        "my-Dark-teal" : "#143537",
        "my-Charcoal" : "#161e1a",
      },
      gridTemplateRows:{
       7 : "repeat(7,minmax(0,1fr))",
       8 : "repeat(8,minmax(0,1fr))"

      },
      fontFamily:{
        quicksand:"Quicksand, sans-serif"
      }
    },
  },
  plugins: [],
}