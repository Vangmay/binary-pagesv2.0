import '/styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import { NewTheme } from '../styles/theme'
import Layout from '../components/Layouts/Layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { AnimatePresence, motion } from 'framer-motion'
import ImageBox from '../components/misc/ImageBox'

function MyApp({ Component, pageProps,router }) {
  const variant = {
    pageInitial:{
      
    },
    pageAnimate:{
      
    }
  }
  return (
    <ChakraProvider theme={NewTheme}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
        <motion.div key = {router.route}variants={variant} initial='pageInitial' animate='pageAnimate'>
          <Component {...pageProps} />
        </motion.div>  
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
    )
}
export default MyApp