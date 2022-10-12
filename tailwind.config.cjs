/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Abril: ["Abril Fatface", "serif"],
      },
      colors: {
        gris2: "#fbf9ef",
      },
    },
  },
  plugins: [],
};
