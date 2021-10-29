import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  baseStyle: ({ colorMode }: any) => ({
    bg: colorMode === "dark" ? "green.300" : "#364670",
    color: colorMode === "dark" ? "dark" : "white",
  }),
    
  colors: {
    black: "#25546F",
    black_accent: "#364670",
    bg_dark_primary: "#1B1A30",
    dark: "#171725",
    dark_grey: "#696974",
    grey: "#92929D",
    line_dark: "#EAEAEA",
    white_grey: "#F1F1F5",
    white: "#FFFFFF",

    purple: "#6A4BFF",
    purple50: '#F8F6FF',
    purple100: '#F0EDFF',
    purple200: '#E3DDFF',

    yellow: "#F6C949",
    red: "#F95050",
    green: "#3BC963",
    orange: "#FF6B2C",
    blue: "#1D92F1",  
  },
  fonts: {
    body: "Poppins, system-ui, sans-serif",
    heading: "Poppins, system-ui, sans-serif",
  },

  styles: {
    global: {
      "html, body": {
        overflow: "hidden",
        fontFamily: "Poppins, system-ui, sans-serif",
      }
    }
  }
})
export default theme