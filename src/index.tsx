import * as React from "react"
import ReactDOM from "react-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { App } from "./App"

import theme from './theme'
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
