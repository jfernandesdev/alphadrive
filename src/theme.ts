import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  baseStyle: ({ colorMode }: any) => ({
    bg: colorMode === "dark" ? "green.300" : "green.500",
    color: colorMode === "dark" ? "dark" : "white",
  }),
  
  colors: {
    purple: "#6A4BFF",
    purple50: '#F8F6FF',
    purple100: '#F0EDFF',
    purple200: '#E3DDFF',
   
    black: "#25546F",
    black_accent: "#364670",
    bg_dark_primary: "#1B1A30",
    dark: "#171725",
    dark_grey: "#696974",
    grey: "#92929D",
    line_dark: "#EAEAEA",
    white_grey: "#F1F1F5",
    white: "#FFFFFF",

    yellow: "#F6C949",
    yellow50: "#FFF8DF",

    red: "#FF7256",
    red50: "#FED7D7",

    green: "#3BC963",
    green50: "#E2F7E8",

    orange: "#FF6B2C",
    orange50: "#FEEBC8",

    blue: "#1D92F1", 
    blue50: '#DDEFFD' 
  },
  fonts: {
    body: "Poppins, system-ui, sans-serif",
    heading: "Poppins, system-ui, sans-serif",
  },
})
export default theme