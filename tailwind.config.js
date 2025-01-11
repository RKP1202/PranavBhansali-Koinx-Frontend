/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0052FE",
        secondary: "#768396",
        success: "#14B079",
        danger: "#DC2626",
        background: "#EFF2F5"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
