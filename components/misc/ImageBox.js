import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Container, HStack,Text } from '@chakra-ui/layout'
import React from 'react'

export const ImageBox = () => {
    const text_variant = useColorModeValue('primary_light','primary')
    return (
        <Box 
        w="100%" 
        h="50vh" 
        background='linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15449929971988796) 7%, rgba(0,0,0,1) 69%),
        url("/Images/about-gif.gif")'
        bgSize='cover'
        bgPosition='left'
        bgRepeat='no-repeat'
        alignItems='center'
        textAlign='right'
        justifyContent='right'
        display='flex'
        
        >
            <Box 
                maxH='100%' 
                maxW='50%'
                float='right'
                alignItems='center'
                justifyContent='center'
                marginRight='30px'
            >
                    
                    <Text  fontSize='40px'
                        variant={text_variant}
                        w='100%'
                        >
                    </Text>
                    <Text 
                        fontFamily='Red Hat Mono'
                        
                        fontSize={[10,13,15,17]} 
                        variant={text_variant}
                        w='full'
                    >
                    </Text>
                
            </Box>
        </Box>

    )
}
