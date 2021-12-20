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
export default function Works() {
    const bg= useColorModeValue('rgba(246, 173, 85,0.5)','rgba(13, 16, 33)')
    const [selectedId, setSelectedId] = useState(null)
    const title=useColorModeValue('light','dark')
    return (
        <>
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
        <VStack w='100%' h='100vh'>
            <HStack
                w='100%'
                paddingLeft={{base:'25px',md:'30px',sm:'15px'}}
                bg='rgba(0,0,0,0.4)'
                justifyContent='space-between'
                h='100%'
                >
                <Box maxW='container.sm'>
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

        <VStack w='100%' h='100vh'>
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
            >
                
                <Box  
                    w='100%' 
                >
                    <Link href='youtube.com' target='blank'  >  
                        <Heading textAlign='left' variant={title} transition='0.2s ease-in'>The_Bridge</Heading>
                    </Link>
                    <Paragraph >
                        My school has a literary club and we release our own magazine by the name of "The bridge"
                        We also have our own monthly newsletter.
                        I am incharge of designing both,our magazine and our newsletter and compiling all the content prepared by other members. 
                    </Paragraph>
                </Box>
                <Magazine/>
            </HStack>
        </VStack>
       
        </>
    )
}