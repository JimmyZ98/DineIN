/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {},
    colors: {
      orange: "#e86617",
      white: "#FFFFFF",
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-image": "url('/src/assets/hero.jpg')",
        "logo-image": "url('/src/assets/logo.png')",
      }),
    },
  },
  plugins: [],
};
