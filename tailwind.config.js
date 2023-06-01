/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',  // Mobile devices
        'sm': '640px',  // Tablets
        'md': '768px',  // Small laptops
        'lg': '1024px', // Large laptops/desktops
        'xl': '1280px', // Extra-large desktops
      },
      colors: {
        'primary': '#003F62',
        'secondary':'#E2F4FF',
        'tertiary':'#EDA415', // button color
    },
    fontFamily: {
      'Poppins':['Poppins', 'sans-serif']
      }
      },
  },
  plugins: [],
}

