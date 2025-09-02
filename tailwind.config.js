
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { mapa: { black:"#0A0A0A", gold:"#C9A227", goldSoft:"#E5C970", white:"#FFFFFF" } },
      boxShadow: { gold: "0 10px 30px -12px rgba(201,162,39,0.35)" }
    }
  },
  plugins: []
}
