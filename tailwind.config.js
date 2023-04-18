/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '500': '500px',
        '600': '600px',
        '800': '800px',
        '1000': '1000px',
      },
      height: {
        '500': '500px',
        '600': '600px',
        '800': '800px',
        '1000': '1000px',
      },
      animation: {
        'fade-in': 'fade-in 5s ease-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '.3' },
          '50%': { opacity: '1' },
          '100%': { opacity: '.3' },
        },
      },
    },
  },

  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ],
  }