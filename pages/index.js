import { background } from '@chakra-ui/styled-system'
import Head from 'next/head'
import Image from 'next/image'
import { About, MeetMe } from '../components/misc/about'
import ImageBox from '../components/misc/ImageBox'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Animation } from '../components/Layouts/animation'
import { motion } from 'framer-motion'
export default function Home() {
  const scrollColor=useColorModeValue('red','#212121')
  const variants = {
    hidden:{y:-50,opacity:0},
    visible:{y:0,opacity:1,transition:{delay:.40}},
  }
  return (
    <Box transition='0.20s all ease-in-out'
      bg={useColorModeValue('rgba(242 232 222)','gray.900')}
    >
      <motion.div
        initial='hidden' 
        animate = 'visible'
        variants={variants}
      >
      <ImageBox/>
      </motion.div>
      
      <MeetMe />



        
    </Box>
  )
}