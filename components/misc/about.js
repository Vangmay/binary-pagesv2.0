import { Img } from '@chakra-ui/image'
import { Box, Container, Text } from '@chakra-ui/layout'
import React from 'react'

export const About = () => {
    return (
        <div>
            <Container alignItems='center' textAlign='center' w='100%' bg=''>
                    <Box w='100%'  display='flex'>
                        <Box w='100%' minW='100%'>
                            <Text 
                                w='100%' 
                                textAlign='left'
                                borderBottom='1.2px solid white'
                                
                            >
                                About me
                            </Text>
                            <Text>I am I am I am Also: I exist</Text>
                        </Box> 
                        <Img src='/Images/carcar.gif' w='80%'></Img>

                    </Box>
                    <Box>
                        <Text w='100%' textAlign='right'>I | &lt;3 </Text>
                        <Text w='100%' textAlign='left'> Thing 1, Thing2</Text>
                    </Box>
            </Container>
        </div>
    )
}
