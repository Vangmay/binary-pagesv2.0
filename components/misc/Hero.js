import React from 'react'
import { Box, Container, Heading, HStack,useColorModeValue } from '@chakra-ui/react'
import Loader from './modelLoader'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const Modell = dynamic(()=>import('./model'),{
    ssr:false,
    loading:()=> <Loader/>
})

const Hero = () => {
    const variant = useColorModeValue('primaryLight','primaryDark')
    const bg= useColorModeValue('rgba(196,166,232,0.5)','rgba(13, 16, 33)')
    const theme = useColorModeValue('primaryLight','primaryDark')
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
        <motion.div variants= {variants} initial='hidden' animate='show' exit='exit'>
            <Box 
                h='75vh'
                minH='75vh' 
                w='100%'
                justifyContent='center'
                >
                <HStack
                    flexDirection={{base:'column',md:'row',lg:'row'}}
                    h='100%'
                    >
                        <Container 
                            alignContent='left'
                            
                            >
                            <motion.div variants={leftSlide} className='container'>
                                <Box 
                                    borderRadius='lg'
                                    mb={6}
                                    p={3}
                                    textAlign='center'
                                    bg={bg}
                                    mt={5}
                                    alignContent='left'
                                    >
                                    Hello! I am Vangmay
                                </Box>
                                <Heading variant={variant}> 
                                    Welcome to the binary pages 
                                </Heading>
                                <Heading
                                    fontSize={{base:'14px', md:'18px'}}
                                    variant={theme} 
                                    as='h2'
                                    >
                                    A site that renders my interests and hobbies                        
                                </Heading>
                            </motion.div>

                        </Container>
                        <Container
                            h='100%'
                            width='100%'
                            display='flex'
                            justifyContent='center'
                            alignContent='center'
                            placeContent='center'
                            textAlign='center'
                        >

                            <Modell/>
                            
                        </Container>
                </HStack>
            </Box>
        </motion.div>
    )
}
export default Hero