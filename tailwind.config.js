/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primaryGreen": "#50C878",
        "sombre": "#333333",
        "input":"#F1E6E6"
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
      },
    },
  },
  plugins: [],
};
