/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "midnight-navy": "#2B2D42",
        "cloudy-sky": "#8D99AE",
        "ice-white": "#EDF2F4",
        "vibrant-red": "#EF233C",
        "ruby-red": "#D90429",
      },
    },
  },
  plugins: [],
};
