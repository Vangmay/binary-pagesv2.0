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
export default function Home() {
  const scrollColor=useColorModeValue('red','#212121')
  return (
    <Box transition='0.20s all ease-in-out'
      bg={useColorModeValue('#FFFCDC','gray.900')}
    >
      <ImageBox/>
      <MeetMe />



        
    </Box>
  )
}
