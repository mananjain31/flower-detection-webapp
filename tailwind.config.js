/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#f2f2f2",
        "green-primary": "#2e842c",
        "green-secondary": "#40c057",
        "black-secondary": "#413f58",
      },
    },
  },
  plugins: [],
};
