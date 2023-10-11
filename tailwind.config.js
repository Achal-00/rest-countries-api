/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "custom-font-family": ["Nunito Sans", "sans-serif"],
      },
      colors: {
        "dark-mode-elements": "hsl(209, 23%, 22%)",
        "dark-mode-bg": "hsl(207, 26%, 17%)",
        "light-mode-text": "hsl(200, 15%, 8%)",
        "light-mode-input": "hsl(0, 0%, 52%)",
        "light-mode-bg": "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
