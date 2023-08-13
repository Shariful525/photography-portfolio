/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-pattern": "url('/images/')",
      },
      colors: {
        textColor: "rgba(255, 255, 255, 0.70)",
      },
    },
  },
  plugins: [require("daisyui")],
};
