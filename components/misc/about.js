import { useColorModeValue } from '@chakra-ui/color-mode'
import { Img } from '@chakra-ui/image'
import {Link} from '@chakra-ui/react'
import { Box, Container, HStack, Text, VStack } from '@chakra-ui/layout'
import { textDecoration } from '@chakra-ui/styled-system'
import { Heading } from '@chakra-ui/layout'
import React from 'react'
import { Spacer } from '@chakra-ui/layout'
import { ImageBox } from './ImageBox'
import NextLink from 'next/link'
import { Paragraph,Span } from '../text/paragraph'
import {  SiPython,SiJavascript,SiHtml5,SiC,SiCplusplus, SiGithub,SiLinkedin, SiTwitter, SiDiscord, SiGmail} from 'react-icons/si'
import { Button, IconButton } from '@chakra-ui/button'

export const MeetMe = () => {
    const textDecor = useColorModeValue('gray.400','cyan.400')
    const bg= useColorModeValue('rgba(196,166,232,0.5)','rgba(13, 16, 33)')
    const textColor = useColorModeValue('orange.500','pink.500')
    const secondaryTextColor = useColorModeValue('black','cyan.500')
    const bgColor = useColorModeValue('black','cyan.500')
    const variant = useColorModeValue('primaryLight','primaryDark')
    const LinkVariant= useColorModeValue('socialLight','social')
    const theme = useColorModeValue('primaryLight','primaryDark')
    const highLight = useColorModeValue('#eb6f92','pink.400')
    return (
        <Container padding={{base:'12px', md:'20px',sm:'15px'}} borderRadius='30px' >
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
                    <Heading
                        fontSize={{base:'16px', md:'20px'}}
                        variant={theme} 
                        as='h2'
                    >
                        Learner | Designer | Developer | 
                    </Heading>
                </Box>
               
            </Box>
            <Box paddingTop='20px'>
                <Heading variant='headingTitle' 
                        as='h4'
                        textDecorationColor={useColorModeValue('#817c9c','pink.500')}
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
                        textDecorationColor={useColorModeValue('#817c9c','pink.500')}
                        color={useColorModeValue('#3e3e3e','cyan.500')}
                        textAlign='right'
                        paddingBottom='15px'
                        padding={{sm:'12px'}}
                        >I &lt;3
                </Heading>
                <Paragraph>
                    Movies, Music, Computer science, Deep learning, maths
                    
                </Paragraph>
            </Box>

            <Box paddingTop='20px'>
                <Heading variant='headingTitle' 
                        as='h4'
                        textDecorationColor={useColorModeValue('#817c9c','pink.500')}
                        color={useColorModeValue('#3e3e3e','cyan.500')}
                        textAlign='left'
                        >Skills
                </Heading>
                <Paragraph>
                    My favorite programming language is, no doubt <Heading display='inline-block' as='h6' fontWeight='light'fontSize='16px'color={highLight} textDecoration='#3e3e3e underline wavy 1.2px'>Python</Heading> mainly because of the diverse cases I can us it in.
                    I also enjoy working with <Heading display='inline-block' as='h6' fontWeight='light'fontSize='16px' color={highLight} textDecoration='#3e3e3e underline wavy 1.2px'>Javascript</Heading>, It is my go-to language for web development mainly because of the vast jungle of <Heading display='inline-block' as='h6' fontWeight='light'fontSize='16px' color={highLight} textDecoration='#3e3e3e underline wavy 1.2px'>Frameworks and libraries</Heading> that it offers, 
                    especially <Heading display='inline-block' as='h6' fontWeight='light'fontSize='16px'color={highLight} textDecoration='#3e3e3e underline wavy 1.2px'>React and Next.js</Heading> they are my most used frameworks. 
            
                </Paragraph>
                    My skills:
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
                    <Link w='fit-content'_hover='none' href='https://github.com/Vangmay' target='_blank' cursor='none'>
                        <Button rightIcon={<SiGithub/>} variant={LinkVariant} cursor='none'>
                            GitHub
                        </Button>
                    </Link>

                    <Link w='fit-content' _hover='none'href='https://www.linkedin.com/in/vangmay-sachan-3582b5213/' target='_blank'cursor='none'>
                        <Button rightIcon={<SiLinkedin/>} variant={LinkVariant} cursor='none'>
                            LinkedIn
                        </Button>
                    </Link>

                    <Link w='fit-content'_hover='none' href='https://twitter.com/VangmayS' target='_blank' cursor='none'>
                        <Button rightIcon={<SiTwitter/>}variant={LinkVariant} cursor='none'>
                            Twitter
                        </Button>
                    </Link>
                    <Link w='fit-content'_hover='none' href='https://discordapp.com/users/398758029379764229' target='_blank' cursor='none'>
                        <Button rightIcon={<SiDiscord/>} variant={LinkVariant} cursor='none'>
                            Discord
                        </Button>
                    </Link>

                    <Link _hover='none'href='mailto:vangmay.sachan16@gmail.com' target='_blank' w='fit-content' cursor='none'>
                        <Button rightIcon={<SiGmail/>} variant={LinkVariant} cursor='none'>
                            Mail
                        </Button>
                    </Link>
                </VStack>
            </Box>
        </Container>

            

    
    )
}
