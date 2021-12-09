import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Heading } from '@chakra-ui/layout'
import React from 'react'

export const Footer = () => {
    return (
        <Box alignContent='center' textAlign='center' bg={useColorModeValue('#FFFCDC','gray.900')}>
            <Heading 
                as='h6' 
                fontSize={{base:'17px',sm:'12px',md:'15px'}}
                padding='12px'
                fontFamily='Inconsolata'
                paddingTop='12px'
            >
                &copy; {new Date().getFullYear()} Vangmay Sachan. All rights reserved</Heading>
        </Box>
    )
}
