/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  variants: {
    backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd"],
    borderColor: ["dark", "dark-disabled", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active", "dark-placeholder"],
    opacity: ["responsive", "hover", "focus", "disabled"],
  },
  theme: {
    extend: {
      container: {
        screens: {
          "sm": "600px",
          "md": "768px",
          "lg": "964px",
          "xl": "1240px",
          "2xl": "1496px",
        },
        padding: "2rem",
      },
      colors: {
        "dark-grey": "#112D32",
        "dark-green": "#116451",
        "light-grey": "#D1EBE2",
        "beige": "#FFCB9A",
        "honey": "#DCAE1D",
      },
      boxShadow: {
        "2xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
