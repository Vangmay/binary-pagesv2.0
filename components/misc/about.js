import { useColorModeValue } from '@chakra-ui/color-mode'
import { Img } from '@chakra-ui/image'
import { Box, Container, HStack, Text } from '@chakra-ui/layout'
import { textDecoration } from '@chakra-ui/styled-system'
import { Heading } from '@chakra-ui/layout'
import React from 'react'
import { Spacer } from '@chakra-ui/layout'
import { ImageBox } from './ImageBox'
import { Headings } from '../text/headings'

export const About = () => {
    const textDecor = useColorModeValue('gray.400','cyan.400')
    const bg= useColorModeValue('rgba(246, 173, 85,0.5)','rgba(23, 25, 35,0.5)')
    const textColor = useColorModeValue('orange.500','pink.500')
    const secondaryTextColor = useColorModeValue('black','cyan.500')
    const bgColor = useColorModeValue('black','cyan.500')
    return (
        <Container paddingTop='12px'>
            <Box 
                borderRadius='lg'
                mb={6}
                p={3}
                textAlign='center'
                bg={bg}
            >
                Hello there
            </Box>   
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading variant='dark'>
                        I am Vangmay Sachan
                    </Heading>
                    <Headings>
                        hello
                    </Headings>
                </Box>
            </Box>
            

        </Container>
    
    )
}
