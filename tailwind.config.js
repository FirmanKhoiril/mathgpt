/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        foobar: "#040C34",
        black: "#01092A",
        primary: "#15C7B3",
        register: "#F5F6FA",
        leftRegister: "#2c324d",
        rightRegister: "#F5F6FA",
        advanced: "#15c7b333",
        blue: "#3A7FE1",
        green: "#3BC642",
        basic: "#15c7b380",
      },
      textColor: {
        primary: "#15C7B3",
        blue: "#3A7FE1",
        green: "#3BC642",
        gray: "#A0A7B5",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
