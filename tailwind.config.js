/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      '2xs': '320px',
      xs: '425px',
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

