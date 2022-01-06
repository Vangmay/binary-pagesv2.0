import { 
    Box, 
    Container, 
    Heading, 
    useColorModeValue,
    HStack, 
    VStack,
    Link,
    Center,
    Img
} from '@chakra-ui/react'
import React from 'react'
import { Paragraph } from '../components/text/paragraph'
import { motion} from "framer-motion";
import { Magazine} from '../components/misc/magazine';
import ImageBox from '../components/misc/ImageBox'
import dynamic from 'next/dynamic';
import Loader from '../components/misc/modelLoader';
export default function Works() {
    const bg= useColorModeValue('rgba(196,166,232,0.5)','rgba(13, 16, 33)')
    const title=useColorModeValue('light','dark')
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
        <>
        <ImageBox/>
        <motion.div variants={variants} exit='exit' initial='hidden' animate='show'>
            <Container>
                <motion.div variants={leftSlide}>
                    <Box 
                        borderRadius='lg'
                        mb={6}
                        p={3}
                        textAlign='center'
                        bg={bg}
                        fontFamily='Inconsolata'
                        marginTop='12px'
                    >
                        _Works_
                    </Box> 
                </motion.div>
            </Container>
            
            <motion.div variants={rightSlide}>
            <VStack 
                w='100%' 
                h='100vh'
                padding={{base:'12px',md:'48px',sm:'8px'}}
            >
                <Heading 
                    fontSize='sm'
                    fontFamily='Inconsolata'
                    position='relative'
                    top='100%'   
                    width='100%'
                    color='#3e3e3e'
                    >
                    2021
                </Heading>
                <HStack
                    w='100%'
                    paddingLeft={{base:'25px',md:'30px',sm:'15px'}}
                    h='100%'
                    bgRepeat='no-repeat'
                    bgPosition='left'
                    bg='rgba(0,0,0,0.4)'
                    bgSize='cover'
                    justifyContent='space-evenly'
                    flexDirection={{md:'row',base:'column',sm:'column'}}
                    outline='1.2px dashed #3e3e3e'
                    outlineOffset='18px '
                    borderRadius={5}
                >
                    <Box  
                        w='100%'
                        paddingRight={{base:'10px'}}
                    >
                        <Link href='youtube.com' target='blank'  >  
                            <Heading textAlign='left' variant={title} transition='0.2s ease-in'>Sthaapna.org</Heading>
                        </Link>
                        <Paragraph >
                            I Interned at Sthaapna, an Ngo working to empower the youth, where I made their entire website using HTML and CSS 
                        </Paragraph>
                    </Box>
                    <Center w='100%' h='100%'  textAlign='center' >
                        <Img src='/Images/Mockupp.png' />
                    </Center>
                </HStack>
            </VStack>
            </motion.div>
            <motion.div variants={leftSlide}>
            <VStack 
                w='100%' 
                h='100vh' 
                padding={{base:'12px',md:'48px',sm:'8px'}}
                >
                <Heading 
                    fontSize='sm'
                    fontFamily='Inconsolata'
                    position='relative'
                    top='100%'   
                    width='100%'
                    color='#3e3e3e'
                    >
                    2017
                </Heading>
                <HStack
                    w='100%'
                    paddingLeft={{base:'25px',md:'30px',sm:'15px'}}
                    h='100%'
                    bgRepeat='no-repeat'
                    bgPosition='left'
                    bg='rgba(0,0,0,0.4)'
                    bgSize='cover'
                    justifyContent='space-evenly'
                    flexDirection={{md:'row',base:'column',sm:'column'}}
                    outline='1.2px dashed #3e3e3e'
                    outlineOffset='18px '
                    borderRadius={5}
                    >
                    
                    <Box  
                        w='100%' 
                        paddingRight={{base:'10px'}}
                        >
                        <Link href='youtube.com' target='blank'  >  
                            <Heading textAlign='left' variant={title} transition='0.2s ease-in'>The_Bridge</Heading>
                        </Link>
                        <Paragraph >
                            My school has a literary club and we release our own magazine by the name of &quot;The bridge&quot;
                            We also have our own monthly newsletter.
                            I am incharge of designing both,our magazine and our newsletter and compiling all the content prepared by other members. 
                        </Paragraph>
                    </Box>
                    <Magazine/>
                </HStack>
            </VStack>
            </motion.div>

            <motion.div variants={rightSlide}>
            <VStack 
                w='100%' 
                h='100vh' 
                padding={{base:'12px',md:'48px',sm:'8px'}}
                >
                <Heading 
                    fontSize='sm'
                    fontFamily='Inconsolata'
                    position='relative'
                    top='100%'   
                    width='100%'
                    color='#3e3e3e'
                >
                    2017
                </Heading>
                <HStack
                    w='100%'
                    paddingLeft={{base:'25px',md:'30px',sm:'15px'}}
                    h='100%'
                    bgRepeat='no-repeat'
                    bgPosition='left'
                    bg='rgba(0,0,0,0.4)'
                    bgSize='cover'
                    justifyContent='space-evenly'
                    flexDirection={{md:'row',base:'column',sm:'column'}}
                    outline='1.2px dashed #3e3e3e'
                    outlineOffset='18px '
                    borderRadius={5}
                >
                    
                    <Box  
                        w='100%' 
                        paddingRight={{base:'10px'}}
                    >
                        <Link href='youtube.com' target='blank'  >  
                            <Heading textAlign='left' fontFamily='Inconsolata' variant={title} transition='0.2s ease-in'>Byte_Club</Heading>
                        </Link>
                        <Paragraph>
                            I am the junior club leader of the Byte Club at our school which was founded by the students. 
                            I mainly conduct workshops, teaching young padwans about the basics of programming and beginner-friendly languages like HTML/CSS and also python.
                        </Paragraph>
                    </Box>
                    <Box w='100%'/>
                </HStack>
            </VStack>
            </motion.div>
        </motion.div>
        
        </>
    )
}