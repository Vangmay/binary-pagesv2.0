import { useColorModeValue } from '@chakra-ui/color-mode'
import { Img } from '@chakra-ui/image'
import { Box, Container, Text } from '@chakra-ui/layout'
import { textDecoration } from '@chakra-ui/styled-system'
import React from 'react'

export const About = () => {
    const textDecor = useColorModeValue('gray.400','cyan.400')
    const bg= useColorModeValue('orange.500','rgba(23, 25, 35,0.5)')
    return (
        <Container alignItems='center' placeContent='center'  textAlign='center' w='100%' >
                <Box w='100%' padding='25px' bg={bg} borderRadius='40px'>
                    <Text w='100%' fontSize='40px'>
                        Name
                    </Text>
                    <Text fontSize='15px'>
                        (Developer/ Designer/ Learner)
                    </Text>
                </Box>
                <Box w='100%'>
                    <Box w='100%' minW='100%' paddingTop='12px' >
                        <Text 
                            color='purple.300'
                            paddingBottom='2.5px'
                          
                            textAlign='right'
                            width='100%'
                            display='flex'
                            justifyContent='right'
  
                        >
                        
                            <Text 
                                borderBottom='3px solid '
                                borderBottomColor={textDecor}
                                
                            >
                                About me
                            </Text> 
                        </Text>
                        <Text 
                            w='100%'
                            textAlign='left'
                            
                        >I am I am I am Also: I exist</Text>
                    </Box> 

                </Box>
                
                <Box width='100%' >
                    <Box w='100%' minW='100%' paddingTop='12px' >
                        <Text 
                            color='purple.300'
                            paddingBottom='2.5px'
                        
                            textAlign='right'
                            width='100%'
                            display='flex'
                            justifyContent='right'
                            
                            >
                            <Text 
                            
                                borderBottom='3px solid '
                                borderBottomColor={textDecor}
                            >
                                I | &lt;3
                            </Text> 
                        </Text>
                        <Text w='100%' textAlign='left'paddingTop='5.5px'> Thing 1, Thing2</Text>
                    </Box>
                </Box>
                
               

            

        </Container>
    
    )
}
