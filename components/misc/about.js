import { useColorModeValue } from '@chakra-ui/color-mode'
import { Img } from '@chakra-ui/image'
import { Box, Container, HStack, Text } from '@chakra-ui/layout'
import { textDecoration } from '@chakra-ui/styled-system'
import { Heading } from '@chakra-ui/layout'
import React from 'react'
import { Spacer } from '@chakra-ui/layout'
import { ImageBox } from './ImageBox'
import { Headings } from '../text/headings'
import { Paragraph, paragraph } from '../text/paragraph'

export const About = () => {
    const textDecor = useColorModeValue('gray.400','cyan.400')
    const bg= useColorModeValue('rgba(246, 173, 85,0.5)','rgba(23, 25, 35,0.5)')
    const textColor = useColorModeValue('orange.500','pink.500')
    const secondaryTextColor = useColorModeValue('black','cyan.500')
    const bgColor = useColorModeValue('black','cyan.500')
    const variant = useColorModeValue('primaryLight','primaryDark')
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
                    <Heading variant={variant}>
                        I am Vangmay Sachan
                    </Heading>
                    <Headings>
                        Learner | Designer | Something else | 
                    </Headings>
                </Box>
               
            </Box>
            <Box paddingTop='20px'>
                <Heading variant='headingTitle' 
                        as='h4'
                        textDecorationColor={useColorModeValue('orange.500','pink.500')}
                        color={useColorModeValue('#3e3e3e','cyan.500')}
                        paddingBottom='15px'
                >WhoAmI?
                </Heading>
                <Paragraph>I am a 16 year old OF TOTALLY NORMAL HEIGHT. Currently on my path to give my AS/A levels. 
                            I have a love of trying out new things.
                                 
                </Paragraph>
            </Box>

            <Box paddingTop='20px'>
                <Heading variant='headingTitle' 
                        as='h4'
                        textDecorationColor={useColorModeValue('orange.500','pink.500')}
                        color={useColorModeValue('#3e3e3e','cyan.500')}
                        textAlign='right'
                        paddingBottom='15px'
                        >I &lt;3
                </Heading>
                <Paragraph>
                    Movies, Music, Computer science, Deep learning, maths
                    
                </Paragraph>
            </Box>
        </Container>

            

    
    )
}
