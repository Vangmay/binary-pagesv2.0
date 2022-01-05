import { background } from '@chakra-ui/styled-system'
import Head from 'next/head'
import Image from 'next/image'
import { About, MeetMe } from '../components/misc/about'
import ImageBox from '../components/misc/ImageBox'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { motion } from 'framer-motion'
import Hero from '../components/misc/Hero'
export default function Home() {
  const scrollColor=useColorModeValue('red','#212121')
  return (
    <Box 
      bg={useColorModeValue('rgba(242 232 222)','gray.900')}
    > 
      <ImageBox/>
      <Hero/>
    </Box>
  )
}



        