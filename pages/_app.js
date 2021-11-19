import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import { NewTheme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={NewTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
    )
}

export default MyApp
