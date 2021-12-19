import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Heading } from '@chakra-ui/layout'
import React from 'react'

export const Footer = () => {
    return (    
        <Box transition='0.20s all ease-in-out' alignContent='center' textAlign='center' bg={useColorModeValue('#FFFCDC','gray.900')}>
            <Heading 
                as='h6' 
                fontSize='sm'
                padding='12px'
                fontFamily='Inconsolata'
                paddingTop='12px'
            >
                &copy; {new Date().getFullYear()} Vangmay Sachan. All rights reserved</Heading>
        </Box>
    )
}
