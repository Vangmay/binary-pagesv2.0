import { Box, Container, HStack,Text } from '@chakra-ui/layout'
import React from 'react'

export const ImageBox = () => {
    return (
        <Box 
        w="100%" 
        h="50vh" 
        background='linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15449929971988796) 7%, rgba(0,0,0,1) 69%),
        url("/Images/about-gif.gif")'
        bgSize='cover'
        bgPosition='left'
        bgRepeat='no-repeat'
        justifyContent='center'
        textAlign='right'

        
        >
                <Container float='right' w='100%'  >
                    
                    <Text  fontSize='20px'
                        variant='primary'
                    >
                        About me
                    </Text>
                    <Text 
                        fontFamily='Red Hat Mono'
                        
                        fontSize='18px' 
                        variant='primary'
                        w='full'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor nunc, venenatis et vestibulum ac, dictum vitae massa. Vestibulum auctor magna non dolor egestas sollicitudin. Vestibulum ut lorem nec metus ornare semper sed in lacus. Phasellus tristique vestibulum enim, quis venenatis dui mollis sit amet. Nunc venenatis aliquam fringilla. Suspendisse sodales ipsum lacus, a lacinia velit feugiat ac. Curabitur vehicula iaculis neque, nec semper neque consequat eget. Nulla turpis metus, gravida nec magna eget, aliquet euismod neque. Donec ipsum nunc, dictum eu quam at, porttitor viverra est.</Text>
                
                </Container>
            
        </Box>

    )
}
