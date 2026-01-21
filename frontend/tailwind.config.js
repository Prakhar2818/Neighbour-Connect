/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#0B3C74",
        secondary: "#2563EB",
        light: "#EAF2FF",
        background: "#F8FAFC",
        dark: "#0F172A",
        muted: "#64748B",
      },
      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl: "14px",
      },
    },
  },
  plugins: [],
};
