/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '300px': '300px',
      '2xs': '320px',
      '400px': '400px',
      '500px': '500px',
      xs: '425px',
      '600px': "600px",
      sm: '650px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        text_scroll: 'text_scroll 15s linear infinite'
      },
      keyframes: {
        text_scroll: {
          from: {
            "-moz-transform": 'translateX(100%)',
            '-webkit-transform': 'translateX(100%)',
            transform: 'translateX(100%)',
          },
          to: {
            "-moz-transform": 'translateX(-100%)',
            '-webkit-transform': 'translateX(-100%)',
            transform: 'translateX(-100%)',
          },
        }
      }
    },
  },
  plugins: [],
}

