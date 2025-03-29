/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      IRANYekanExtraBold: "IRANYekanExtraBold",
      IRANSans: "IRANSans",
      IRANYekanBlack: "IRANYekanBlack",
      IRANYekanMedium: "IRANYekanMedium",
      IRANYekanRegular: "IRANYekanRegular",
    },
    extend: {
      colors: {
        gray: {
          100: "#FFFFFF", // سفید خالص
          200: "#000000", // سیاه خالص
          300: "#A1A1A1", // خاکستری متوسط روشن
          400: "#989898", // خاکستری متوسط
          500: "#575757", // خاکستری متوسط تیره
          600: "#454545", // خاکستری تیره
          700: "#1E1E1E", // خاکستری خیلی تیره
          800: "#1A1A1A", // تقریباً سیاه
        },
      },
    },
  },
  plugins: [],
};
