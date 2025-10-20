export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",   // <-- obligatoire si tu utilises des composants
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#263a57',
          dark: '#0b2141',
          light: '#6f86d6'
        },
        panel: '#32455f',
        accent: '#8fa1ff',
        muted: '#98a3b8'
      },
      borderRadius: {
        'xl-lg': '1rem'
      }
    },
  },
  plugins: [],
};
