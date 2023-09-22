/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {},
    extend: {
      backgroundImage: (theme) => ({
        "hero-image": "url('/src/assets/hero.jpg')",
        "logo-image": "url('/src/assets/logo.png')",
      }),
    },
  },
  plugins: [],
};
