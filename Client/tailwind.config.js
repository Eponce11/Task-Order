/** @type {import('tailwindcss').Config} */
import { createThemes } from 'tw-colors'

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
        /*
        primary: "#735185",
        secondary: "#89609E",
        dimPurple: '#684978',
        lightPurple: "#A586B5",
        bgPurple: "#EDE9FF",
        borderPurple: "#8A6D99",
        dimWhite: "#F1F2F4",
        white: "#FFFFFF",
        hoverPurple: "#785e84",
        hoverGrey: "#dcdfe5",
      */
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }
  },
  plugins: [
    createThemes({
      purple: {
        'primary': '#735185',
        'secondary': '#89609E',
        'border': '#9C7AAE',
        'white': '#FFFFFF',
        'dimPurple': '#684978'
      },
      green: {
        primary: "#735185",
        secondary: "#89609E",
        dimPurple: '#684978',
        lightPurple: "#A586B5",
        bgPurple: "#EDE9FF",
        borderPurple: "#8A6D99",
        dimWhite: "#F1F2F4",
        white: "#FFFFFF",
        hoverPurple: "#785e84",
        hoverGrey: "#dcdfe5",
      }
    })
  ],
}

