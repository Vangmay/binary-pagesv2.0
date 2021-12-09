import React from 'react'
import Navbar from '../Navbar'
import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { Container, Spacer } from '@chakra-ui/react'
import { Footer } from '../Footer'
import { ImageBox } from '../misc/ImageBox'


function Layout({ children }) {
    return (
        <Box as='div' h='100vh' w='100vw'>
            <Navbar/>
            <ImageBox/>
            {children}
            <Footer/>
        </Box>
        


                
                
            
    )
}

export default Layout
