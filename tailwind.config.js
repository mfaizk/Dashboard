/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGrey: "#4D4D4D",
        customPurple: "#800080",
        customBlack: "000000",
        customPink: "#EEAEAE",
      },
    },
  },
  plugins: [],
};
