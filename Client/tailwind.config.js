/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /*
        primary: "#4D34B3",
        secondary: "#6D4AFF",
        bgPurple: "#EDE9FF",
        white: "#FFFFFF",
        dimWhite:"#F5F5F5",
        dimGrey: "#F1F2F4",
        bgGrey: "#97A0AF",
        hoverGrey: "#dcdfe5",
        hoverPurple: "#5c37f1"
        */
        primary: "#735185",
        secondary: "#89609E",
        dimPurple: '#684978',
        bgPurple: "#EDE9FF",
        borderPurple: "#8A6D99",
        dimWhite: "#F1F2F4",
        white: "#FFFFFF"
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

