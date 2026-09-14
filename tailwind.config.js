/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // custom palette — keep these names, swap the hex values if you
        // ever want to reskin the whole site from one place
        paper: "#F3F4F1",    // page background
        ink: "#1C2321",      // main text
        teal: {
          DEFAULT: "#3B6E71",
          dark: "#2B5254",
        },
        rust: "#E4572E",     // the one accent color, used sparingly
      },
      fontFamily: {
        display: ["Spectral", "serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
