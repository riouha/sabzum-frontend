/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0',
        sm: '1rem',
      },
    },
  },
  plugins: [],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
};
