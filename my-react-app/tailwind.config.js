/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Lora', 'serif'],       // Font for body text
        heading: ['Poppins', 'sans-serif'], // Font for headings
      },
      colors: {
        customYellow: '#ffcc00',      // Custom yellow
        customRed: '#e63946',         // Custom red
      },
    },
  },
  plugins: [],
}
