/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#080A1A", // black
        submain: "#F20000", //red
        dry: "#0B0F29", //nevy blue
        star: "#FFB000",
        text: "#C0C0C0",
        border: "#4b5563",
        deyGray: "#E0D5D5", //like white
      },
      height: {
        header: "560px",
        rate: "400px",
      },
      fontSize: {
        h1: "2.6rem",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
