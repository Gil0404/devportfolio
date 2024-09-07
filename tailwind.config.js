/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Covered: ["Covered By Your Grace", "cursive"],
        KulimPark: ["Kulim Park", "sans-serif"],
        WorkSans: ["Work Sans", "sans-serif"],
      },
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
        "pic-scales": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
        "pic-after": {
          "0%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        "pic-scales": "pic-scales .6s ease-in-out forwards",
        "pic-after": "pic-after .6s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
