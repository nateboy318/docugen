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
        "3xl": "0 4px 60px 0px rgba(0, 0, 0, 0.2)",
        "4xl": "0 4px 60px 0px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        border: "border 10s ease infinite",
      },
      keyframes: {
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  plugins: ["prettier-plugin-tailwindcss"],
};
