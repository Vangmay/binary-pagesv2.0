import { useColorModeValue } from '@chakra-ui/color-mode'
import { Img } from '@chakra-ui/image'
import { Box, Container, HStack, Text } from '@chakra-ui/layout'
import { textDecoration } from '@chakra-ui/styled-system'
import React from 'react'
import { Spacer } from '@chakra-ui/layout'

export const About = () => {
    const textDecor = useColorModeValue('gray.400','cyan.400')
    const bg= useColorModeValue('rgba(246, 173, 85,0.5)','rgba(23, 25, 35,0.5)')
    const textColor = useColorModeValue('orange.500','pink.500')
    const secondaryTextColor = useColorModeValue('black','cyan.500')
    const bgColor = useColorModeValue('black','cyan.500')
    return (
        <Container >
                <Box w='100%' padding='15px' bg={bg} borderRadius='40px' textAlign='center'>
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

            <Box as='div' w='100%'   marginTop='120px'>
                <HStack>
                    <Box w='100%' h='100%' bg={bg} textColor={textColor}>
                        <Text>Areas of interest</Text>
                    </Box>
               <Spacer/>
                    <Box w='100%' h='100%' bg={bg} textColor={secondaryTextColor}>
                        skills
                    </Box>
                </HStack>
            </Box>
               

            

        </Container>
    
    )
}
