/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#37DAE8",
        green: "#6DFF9E",
      },
      boxShadow: {
        '3xl': '0 4px 60px 0px rgba(0, 0, 0, 0.2)',
        '4xl': '0 4px 60px 0px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
