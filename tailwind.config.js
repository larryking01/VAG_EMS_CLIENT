/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{tsx, ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora'],
        heebo: ['Heebo'],
        roboto: ['Roboto'],
        poppins: ['Poppins'],
        playfair: ['Playfair Display'],
        lato: ['Lato'],
        inter: ['Inter'],
        robotoslab: ['Roboto Slab'],
        merriweather: ['Merriweather']    
      }
    },
  },
  plugins: [],
}

