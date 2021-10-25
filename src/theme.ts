import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Poppins",
        fontWeight: "600",
      },
    },
  },
})
export default theme