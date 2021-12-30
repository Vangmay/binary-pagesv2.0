import { 
    Box, 
    Container, 
    Heading, 
    useColorModeValue,
    Grid,
    GridItem,
    HStack, 
    VStack,
    useColorMode
    
} from '@chakra-ui/react'
import React from 'react'
import { Paragraph } from '../components/text/paragraph'
import { motion, AnimateSharedLayout, AnimatePresence, MotionConfig } from "framer-motion";
import { Link } from '@chakra-ui/react';
import { useState } from 'react'
import { Magazine, magazine } from '../components/misc/magazine';
import ImageBox from '../components/misc/ImageBox'
export default function Works() {
    const bg= useColorModeValue('rgba(246, 173, 85,0.5)','rgba(13, 16, 33)')
    const [selectedId, setSelectedId] = useState(null)
    const title=useColorModeValue('light','dark')
    return (
        <>
        <ImageBox/>
        <Container>
            <Box 
                borderRadius='lg'
                mb={6}
                p={3}
                textAlign='center'
                bg={bg}
                fontFamily='Inconsolata'
                marginTop='12px'
            >
                Stuff i have done
            </Box> 
        </Container>
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
                <Heading>3e</Heading>
            </HStack>
        </VStack>


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
                    <Paragraph>
                        I am the junior club leader of the Byte Club at our school which was founded by the students. 
                        I mainly conduct workshops, teaching young padwans about the basics of programming and beginner-friendly languages like HTML/CSS and also python.
                    </Paragraph>
                </Box>
                <Box w='100%'/>
            </HStack>
        </VStack>

        
        </>
    )
}