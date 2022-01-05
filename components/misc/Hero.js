import React from 'react'
import { Box, Container, Heading, HStack,useColorModeValue } from '@chakra-ui/react'
import Loader from './modelLoader'
import dynamic from 'next/dynamic'

const Modell = dynamic(()=>import('./model'),{
    ssr:false,
    loading:()=> <Loader/>
})

const Hero = () => {
    const variant = useColorModeValue('primaryLight','primaryDark')
    const bg= useColorModeValue('rgba(196,166,232,0.5)','rgba(13, 16, 33)')
    const theme = useColorModeValue('primaryLight','primaryDark')
    return (
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
                    <Box 
                        borderRadius='lg'
                        mb={6}
                        p={3}
                        textAlign='center'
                        bg={bg}
                        mt={5}
                        alignContent='left'
                    >
                        Welcome to the binary pages 
                    </Box>
                    <Heading variant={variant}> 
                        Hello! I am Vangmay
                    </Heading>
                    <Heading
                        fontSize={{base:'14px', md:'18px'}}
                        variant={theme} 
                        as='h2'
                    >
                        And I love trying out new things.                        
                    </Heading>

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
    )
}

export default Hero
