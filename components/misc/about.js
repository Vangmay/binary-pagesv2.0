import { useColorModeValue } from '@chakra-ui/color-mode'
import { Img } from '@chakra-ui/image'
import { Box, Container, HStack, Text, VStack } from '@chakra-ui/layout'
import { textDecoration } from '@chakra-ui/styled-system'
import { Heading } from '@chakra-ui/layout'
import React from 'react'
import { Spacer } from '@chakra-ui/layout'
import { ImageBox } from './ImageBox'
import NextLink from 'next/link'
import { Headings } from '../text/headings'
import { Paragraph,Span } from '../text/paragraph'
import {  SiPython,SiJavascript,SiHtml5,SiC,SiCplusplus, SiGithub} from 'react-icons/si'
import { Button, IconButton } from '@chakra-ui/button'

export const About = () => {
    const textDecor = useColorModeValue('gray.400','cyan.400')
    const bg= useColorModeValue('rgba(246, 173, 85,0.5)','rgba(23, 25, 35,0.5)')
    const textColor = useColorModeValue('orange.500','pink.500')
    const secondaryTextColor = useColorModeValue('black','cyan.500')
    const bgColor = useColorModeValue('black','cyan.500')
    const variant = useColorModeValue('primaryLight','primaryDark')
    const LinkVariant= useColorModeValue('socialLight','social')
    return (
        <Container padding={{base:'12px', md:'10px',sm:'5px'}} >
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
                        Vangmay Sachan
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

            <Box paddingTop='20px'>
                <Heading variant='headingTitle' 
                        as='h4'
                        textDecorationColor={useColorModeValue('orange.500','pink.500')}
                        color={useColorModeValue('#3e3e3e','cyan.500')}
                        textAlign='left'
                        >Skills
                </Heading>
                <Paragraph>
                    My favorite programming language is, no doubt <Span>python</Span> mainly because of the diverse cases I can us it in.
                    I also enjoy working with <Span>Javascript</Span>, It is my go-to language for web development mainly because of the vast jungle of <Span color='red'> frameworks and libraries</Span> that it offers, 
                    especially <Span>React and Next.js</Span> they are my most used frameworks. 
                    <Spacer/>
                    <IconButton icon={<SiPython/>} variant='tag' padding='5px' color='gray.400'bg='#121212' marginTop='3.2'marginRight='10px' /> 
                    | █████████▒░ 85% |
                    <Spacer/>
                    <IconButton icon={<SiJavascript/>} variant='tag' padding='5px'color='gray.400' bg='#121212' marginTop='3.2'marginRight='10px' /> 
                    | █████████▒░ 85% |
                    <Spacer/>
                    <IconButton icon={<SiHtml5/>} variant='tag' padding='5px'color='gray.400'bg='#121212' marginTop='3.2'marginRight='10px' /> 
                    | █████████░ 90% |
                    <Spacer/>
                    <IconButton icon={<SiCplusplus/>} variant='tag' padding='5px'color='gray.400'bg='#121212' marginTop='3.2'marginRight='10px' /> 
                    | ████░░░░░░ 40% |
                    <Spacer/>
                    <IconButton icon={<SiC/>} variant='tag' padding='5px'color='gray.400'bg='#121212' marginTop='3.2'marginRight='10px' /> 
                    | █████▒░░░░░░ 45% |
                </Paragraph>
            </Box>

            <Box paddingTop='20px'>
                <Heading variant='headingTitle' 
                        as='h4'
                        textDecorationColor={useColorModeValue('orange.500','pink.500')}
                        color={useColorModeValue('#3e3e3e','cyan.500')}
                        textAlign='left'
                        >Social:
                </Heading>
                <VStack align='left' paddingTop='12px'>
                    <a href='https://github.com/Vangmay' target='_blank'>
                        <Button rightIcon={<SiGithub/>} variant={LinkVariant}>
                            GitHub
                        </Button>
                    </a>

                    <a href='https://github.com/Vangmay' target='_blank'>
                        <Button rightIcon={<SiGithub/>} variant={LinkVariant}>
                            LinkedIn
                        </Button>
                    </a>

                    <a href='https://github.com/Vangmay' target='_blank'>
                        <Button rightIcon={<SiGithub/>}variant={LinkVariant}>
                            Twitter
                        </Button>
                    </a>

                    <a href='https://github.com/Vangmay' target='_blank'>
                        <Button rightIcon={<SiGithub/>} variant={LinkVariant}>
                            Reddit
                        </Button>
                    </a>

                    <a href='https://github.com/Vangmay' target='_blank'>
                        <Button rightIcon={<SiGithub/>} variant={LinkVariant}>
                            Discord
                        </Button>
                    </a>

                    <a href='https://github.com/Vangmay' target='_blank'>
                        <Button rightIcon={<SiGithub/>} variant={LinkVariant}>
                            Mail
                        </Button>
                    </a>
                </VStack>
            </Box>
        </Container>

            

    
    )
}
