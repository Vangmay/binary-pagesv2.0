import '/styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import { NewTheme } from '../styles/theme'
import Layout from '../components/Layouts/Layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const bg = useColorModeValue('red','blue')
  return (
    <ChakraProvider theme={NewTheme}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
    )
}

export default MyApp