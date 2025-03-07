// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          800: '#22543d', // You can customize these colors as needed
          900: '#1c4532',
          'greenish-black': '#0A1D1D',
          'coreum-green': '#00C896',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
