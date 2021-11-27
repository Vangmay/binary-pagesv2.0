import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import { NewTheme } from '../styles/theme'
import Layout from '../components/Layouts/Layout'
import { useColorModeValue } from '@chakra-ui/color-mode'

function MyApp({ Component, pageProps }) {
  const bg = useColorModeValue('red','blue')
  return (
    <ChakraProvider theme={NewTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    )
}

export default MyApp
