/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DMSansRegular: ["DMSansRegular"],
        DMSansMedium: ["DMSansMedium"],
        EffraMedium: ["EffraMedium"],
        Effra: ["Effra"],
        EffraBold: ["EffraBold"],
        PoppinsRegular: ["PoppinsRegular"],
      },
    },
  },
  plugins: [],
  mode: "jit",
};
