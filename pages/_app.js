import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import { NewTheme } from '../styles/theme'
import Layout from '../components/Layouts/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={NewTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    )
}

export default MyApp
