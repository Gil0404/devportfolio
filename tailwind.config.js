/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightblue: "#bef0ff",
        powderwhite: "#f5ffff",
      },
      screens: {
        xsm: "320px",

        sm: "400px",

        md: "608px",

        lg: "960px",

        xl: "1440px",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "translateY(-75%)", filter: "opacity(0%)" },
          "80%": { transform: "translateY(0%)", filter: "opacity(10%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
