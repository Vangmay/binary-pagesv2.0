import { useColorModeValue } from '@chakra-ui/color-mode'
import {Link} from '@chakra-ui/react'
import { Spacer,Box,Container,VStack,Heading } from '@chakra-ui/layout'
import React from 'react'
import { Paragraph} from '../text/paragraph'
import {  SiPython,SiJavascript,SiHtml5,SiC,SiCplusplus, SiGithub,SiLinkedin, SiTwitter, SiDiscord, SiGmail,SiSlack} from 'react-icons/si'
import { Button, IconButton } from '@chakra-ui/button'
import {motion} from 'framer-motion'

export const MeetMe = () => {
    const bg= useColorModeValue('rgba(196,166,232,0.5)','rgba(13, 16, 33)')
    const variant = useColorModeValue('primaryLight','primaryDark')
    const LinkVariant= useColorModeValue('socialLight','social')
    const theme = useColorModeValue('primaryLight','primaryDark')
    const highLight = useColorModeValue('#eb6f92','pink.400')
    const variants  = {
        hidden:{opacity:0},
        show:{
            opacity:1,
            transition:{
                staggerChildren:0.15
            },
        },
        exit:{
            opacity:0,
            transition:{
                transition:{
                    staggerChildren:0.15
                }
            }
        }
    }
    const leftSlide = {
        hidden:{
            opacity:0,
            x:-50,
        },
        show:{
            opacity:1,
            x:0,
            transition:{
                duration:0.65
            }
        },
        exit:{
            opacity:0,
            x:-50,
            transition:{
                duration:0.65
            }
        }
    }
    const rightSlide = {
        hidden:{
            opacity:0,
            x:50
        },
        show:{
            opacity:1,
            x:0,
            transition:{
                duration:0.65
            }
        },
        exit:{
            opacity:0,
            x:50,
            transition:{
                duration:0.65
            }
        }
    }
    return (
        <motion.div
            variants={variants}
            initial = 'hidden'
            animate = 'show'
            exit='exit'

        >
            <Container padding={{base:'12px', md:'20px',sm:'15px'}} borderRadius='30px' transition='0.2s'>
                <motion.div     variants={leftSlide}>
                    <Box 
                        borderRadius='lg'
                        mb={6}
                        p={3}
                        textAlign='center'
                        bg={bg}
                    >
                        Hello there 
                    </Box>   
                </motion.div>
                <motion.div variants = {rightSlide}>
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
                </motion.div>
                <motion.div variants = {leftSlide}>
                    <Box paddingTop='20px'>
                        <Heading variant='headingTitle' 
                                as='h4'
                                textDecorationColor={useColorModeValue('#817c9c','pink.500')}
                                color={useColorModeValue('#3e3e3e','cyan.500')}
                                paddingBottom='15px'
                        >WhoAmI?
                        </Heading>
                        <Paragraph>
                            I am a 16 year old OF TOTALLY NORMAL HEIGHT. Currently I am panicking about my AS/A levels,However I don't let that stop my from following the things that i am interested in. 
                            I enjoy writing code, I usually do things in python but these days its Javascript. I usually challange myself by taking up tasks I think I can't do, but somehow end up doing them.
                            I also like designing and trying out new things in it, Recently i have been making voxel art(It's bad)
                        </Paragraph>
                    </Box>
                </motion.div>
                <motion.div variants = {rightSlide}>
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
                            Movies, 
                            Music, 
                            Computer science, 
                            Deep learning, 
                            Maths
                        </Paragraph>
                    </Box>
                </motion.div>
                <motion.div variants={leftSlide}>

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
                            | ????????????????????????????????? 85% |
                            <Spacer/>
                            <IconButton icon={<SiJavascript/>} variant='tag' padding='5px'color='gray.400' bg='#121212' marginTop='3.2'marginRight='10px' /> 
                            | ????????????????????????????????? 85% |
                            <Spacer/>
                            <IconButton icon={<SiHtml5/>} variant='tag' padding='5px'color='gray.400'bg='#121212' marginTop='3.2'marginRight='10px' /> 
                            | ?????????????????????????????? 90% |
                            <Spacer/>
                            <IconButton icon={<SiCplusplus/>} variant='tag' padding='5px'color='gray.400'bg='#121212' marginTop='3.2'marginRight='10px' /> 
                            | ?????????????????????????????? 40% |
                            <Spacer/>
                            <IconButton icon={<SiC/>} variant='tag' padding='5px'color='gray.400'bg='#121212' marginTop='3.2'marginRight='10px' /> 
                            | ???????????????????????????????????? 45% |
                    </Box>
                </motion.div>
                <motion.div variants={rightSlide}>
                    <Box paddingTop='20px'>
                        <Heading variant='headingTitle' 
                                as='h4'
                                textDecorationColor={useColorModeValue('orange.500','pink.500')}
                                color={useColorModeValue('#3e3e3e','cyan.500')}
                                textAlign='right'
                                >Social:
                        </Heading>
                        <VStack 
                            align='right' 
                            alignContent='right' 
                            display='flex' 
                            paddingTop='12px'
                            placeContent='right'
                            justifyContent='right'
                            textAlign='right'
                        >
                            <Link w='100%' _hover='none' href='https://github.com/Vangmay' target='_blank' cursor='none'>
                                <Button rightIcon={<SiGithub/>} variant={LinkVariant} cursor='none'>
                                    GitHub
                                </Button>
                            </Link>

                            <Link w='fit-content' _hover='none'href='https://www.linkedin.com/in/vangmay-sachan-3582b5213/' target='_blank'cursor='none'>
                                <Button rightIcon={<SiLinkedin/>} variant={LinkVariant} cursor='none'>
                                    LinkedIn
                                </Button>
                            </Link>

                            <Link w='100%' _hover='none' href='https://twitter.com/VangmayS' target='_blank' cursor='none'>
                                <Button rightIcon={<SiTwitter/>}variant={LinkVariant} cursor='none'>
                                    Twitter
                                </Button>
                            </Link>
                            <Link w='fit-content'_hover='none' href='https://discordapp.com/users/398758029379764229' target='_blank' cursor='none'>
                                <Button rightIcon={<SiDiscord/>} variant={LinkVariant} cursor='none'>
                                    Discord
                                </Button>
                            </Link>
                            <Link _hover='none'href='mailto:vangmay.sachan16@gmail.com' target='_blank' w='100%' cursor='none'>
                                <Button rightIcon={<SiGmail/>} variant={LinkVariant} cursor='none'>
                                    Mail
                                </Button>
                            </Link>
                            <Link _hover='none'href='https://hackclub.slack.com/team/U029BBS2K1V' target='_blank' w='fit-content' cursor='none'>
                                <Button rightIcon={<SiSlack/>} variant={LinkVariant} cursor='none'>
                                    Slack
                                </Button>
                            </Link>
                        </VStack>
                    </Box>
                </motion.div>
            </Container>
        </motion.div>
            

    
    )
}

