import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
export const BlogParagraph = (props) => {
    const textColor = useColorModeValue('#24283b','#c0caf5')
    return (
        <Box 
        >
            <Heading
                fontSize={{base:'30px',md:'30px',sm:'25px'}}
                as='h1'
                >
                {props.title}
            </Heading>
            
            <Heading 
                fontSize={{base:'20px',sm:'18px',md:'22px'}}
                as='h3'
                textAlign='justify'
                color={textColor}
                >
                {props.content}
            </Heading>
        </Box>
        
    )
}

