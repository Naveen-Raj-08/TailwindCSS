/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#267ffd",
        secondary: "#0b254b",
        dashboardBG: "#f3f5f8",
        hoverBG: "#ffffff1f",
        headingText: "#0b254b",
      },
    },
  },
  plugins: [],
};
