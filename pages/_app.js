import '/styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import { NewTheme } from '../styles/theme'
import Layout from '../components/Layouts/Layout'
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps,router }) {
  return (
    <ChakraProvider theme={NewTheme}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
        <motion.div key = {router.route} initial='pageInitial' animate='pageAnimate'>
          <Component {...pageProps} />
        </motion.div>  
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
    )
}
export default MyApp