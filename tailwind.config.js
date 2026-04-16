/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#070707',
        coal: '#111111',
        fog: '#e9f4f1',
        mint: '#2dd4bf',
        coral: '#fb7185',
        gold: '#fbbf24',
      },
      boxShadow: {
        glow: '0 0 40px rgba(45, 212, 191, 0.18)',
      },
    },
  },
  plugins: [],
};
