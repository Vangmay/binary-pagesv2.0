import React from 'react'
import Navbar from '../Navbar'
import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { Container, Spacer, useColorModeValue } from '@chakra-ui/react'
import { Footer } from '../Footer'
import { ImageBox } from '../misc/ImageBox'
import { Animation } from './animation'


function Layout({ children }) {
    const scrollColor = useColorModeValue('red','blue')
    return (
        <Box as='div' h='100vh' w='100vw' transition=''>
            <Navbar/>
            <ImageBox/>
            <Animation>
                {children}
            </Animation>
                
            <Footer/>
        </Box>
        


                
                
            
    )
}

export default Layout
