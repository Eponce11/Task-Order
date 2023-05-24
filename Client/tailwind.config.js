/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4D34B3",
        secondary: "#6D4AFF",
        bgPurple: "#EDE9FF",
        white: "#FFFFFF",
        dimWhite:"#F5F5F5",
        dimGrey: "#F1F2F4",
        bgGrey: "#97A0AF",
        hoverGrey: "#dcdfe5",
        hoverPurple: "#5c37f1"
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }
  },
  plugins: [],
}

