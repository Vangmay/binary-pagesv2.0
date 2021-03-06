import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Heading } from '@chakra-ui/layout'
import React from 'react'

export const Footer = () => {
    return (    
        <Box 
            transition='0.20s ' 
            alignContent='center' 
            textAlign='center' 
            bg={useColorModeValue('rgba(242 232 222)','gray.900')}
        >
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
