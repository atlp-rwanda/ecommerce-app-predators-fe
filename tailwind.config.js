/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px', // Mobile devices
        sm: '640px', // Tablets
        md: '768px', // Small laptops
        lg: '1024px', // Large laptops/desktops
        xl: '1280px', // Extra-large desktops
      },
      colors: {
        primary: '#003F62',
        secondary: '#E2F4FF',
        tertiary: '#EDA415', // button color
        customBlue: '#003F62',
        inactive: '#808191',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        custom: [
          '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          '0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        ],
      },

      width: {
        customWidth: '460px',
      },
    },
  },
  plugins: []
};
